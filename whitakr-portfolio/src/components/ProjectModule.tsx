'use client'

import {AnimatePresence, motion} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {useRef, useMemo, useState} from "react";
import {getLinkProps, getYouTubeEmbedUrl} from "@/lib/url";
import React from "react";

type ModuleLink = {
    href: string;
    label: string;
    embedYouTube?: boolean
}

type NormalizedModuleLink = {
    href: string;
    label: string;
    embedYouTube?: boolean;
    youTubeEmbedUrl: string | null;
    linkProps: ReturnType<typeof getLinkProps>;
}

type ProjectModuleProps = {
    title: string;
    subtitle?: string;
    role?: string;
    description: string;
    icon: string;
    image?: string;
    links?: ModuleLink[];
}

function normalizeLinks(links: ModuleLink[]): NormalizedModuleLink[]
{
    return links
        .map(link => {
            const href = link.href.trim();
            const label = link.label.trim() || href;

            return {
                ...link,
                href,
                label,
            }
        })
        .filter(link => link.href.length > 0)
        .map(link => ({
            ...link,
            linkProps: getLinkProps(link.href),
            youTubeEmbedUrl: link.embedYouTube ? getYouTubeEmbedUrl(link.href) : null,
        }))
}

function Description({ description }: { description: string }) {
    const lines = description.replace(/\\n/g, "\n").split(/\r?\n/);

    return (
        <>
            {lines.map((line, index) => line
                ? (<p key={index} className="text-(--color-4) py-2 px-1 text-xs md:text-sm wrap-break-word">{line}</p>)
                : (<div key={index} className="h-4" aria-hidden="true"/>)
            )}
        </>
    );
}

function ModuleLinks({ links, shouldLoadEmbeds }: { links: NormalizedModuleLink[]; shouldLoadEmbeds: boolean }) {
    if (links.length === 0) return null;

    const textLinks = links.filter(link => !link.youTubeEmbedUrl);

    return (
        <div className="w-full flex flex-col justify-center items-center">
            <div className="px-2 pt-0 pb-1 md:p-3 flex w-full flex-wrap justify-center items-center">
                {textLinks.map((link, index) => (
                    <React.Fragment key={`${link.href}-${index}`}>
                        <Link
                            href={link.href}
                            className="text-(--color-5) hover:underline bold text-xs md:text-md"
                            onClick={e => e.stopPropagation()}
                            {...link.linkProps}
                        >
                            {link.label}
                        </Link>

                        {index < textLinks.length - 1 && <span className="text-(--color-1) text-m mx-3">•</span>}
                    </React.Fragment>
                ))}
            </div>

            {links
                .filter(link => link.youTubeEmbedUrl)
                .map((link, index) => (
                    <div key={`${link.href}-${index}`} className="flex w-full min-w-0 px-4 pt-2 pb-0 md:pt-4 flex-col">
                        {shouldLoadEmbeds ? (
                            <iframe
                                src={link.youTubeEmbedUrl!}
                                title={link.label}
                                className="block aspect-video w-full rounded-md"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            />
                            ) : (
                                <div className="block aspect-video w-full rounded-md bg-black/5" />
                            )}
                    </div>
                ))}
        </div>
    );
}

/*bg-linear-to-t
from-(--project-module-bg)
to-(--project-module-bg-2)"*/

export default function ProjectModule(
    {
        title,
        subtitle,
        role,
        description,
        image,
        icon,
        links = []
    }: ProjectModuleProps)
{
        const [isOpen, setIsOpen] = useState(false);
        const [shouldLoadEmbeds, setShouldLoadEmbeds] = useState(false);
        const moduleRef = useRef<HTMLDivElement | null>(null);
        const normalizedLinks = useMemo(() => normalizeLinks(links), [links]);

        return (
            <div className="
                relative
                mt-6
                md:mt-8
                w-full
                max-w-lg
                md:max-w-2xl
                mx-auto
                overflow-hidden
                rounded-[2.3rem]
                md:rounded-[3.7rem]
                outline-(--color-1)
                outline-2
                p-4
                md:p-7
                scroll-mb-24
                bg-(--color-2)
                select-none"
                 onClick={() => setIsOpen(!isOpen)}
                 onMouseEnter={() => setShouldLoadEmbeds(true)}
                 onTouchStart={() => setShouldLoadEmbeds(true)}
                 onFocus={() => setShouldLoadEmbeds(true)}
                 ref={moduleRef}
            >
                <div className="flex w-full min-w-0 flex-col items-start justify-center">
                    <div className="flex w-full min-w-0 flex-row items-start gap-4 md:gap-6">
                        <div className="relative aspect-square w-20 md:w-28 shrink-0 self-start overflow-hidden rounded-3xl md:rounded-[2.5rem]">
                            <Image
                                src={icon}
                                alt={`${title} icon`}
                                fill
                                priority
                                sizes="(max-width: 768px) 8rem, 10rem"
                                className="object-cover"
                            />
                        </div>

                        <div className="min-w-0 flex-1">
                            <h1 className="wrap-break-word text-md md:text-2xl text-(--color-4)">{title}</h1>
                            {subtitle && (
                                <h2 className="wrap-break-word text-[0.7rem] md:text-lg text-(--color-4)">{subtitle}</h2>
                            )}
                            {role && (
                                <p className="wrap-break-word text-[0.6rem] md:text-sm text-(--color-4)">{role}</p>
                            )}
                        </div>
                    </div>

                <AnimatePresence initial={false}>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                            className="w-full overflow-hidden"
                            onAnimationComplete={() => {
                                if (!isOpen || !moduleRef.current) return;

                                const rect = moduleRef.current.getBoundingClientRect();
                                const bottomPadding = 96;
                                const overflow = rect.bottom - (window.innerHeight - bottomPadding);

                                if (overflow > 0) {
                                    window.scrollBy({
                                        top: overflow,
                                        behavior: "smooth"
                                    });
                                }
                            }}
                        >
                            <div className="mt-2 md:mt-4 flex w-full min-w-0 flex-col items-start justify-center pb-5 md:pb-6">
                                <Description description={description}/>
                                <ModuleLinks links={normalizedLinks} shouldLoadEmbeds={shouldLoadEmbeds}/>
                                {image && (
                                    <div className="relative mt-4 aspect-video w-full overflow-hidden">
                                        <Image
                                            src={image}
                                            alt={title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 42rem"
                                            className="object-cover"
                                        />
                                    </div>                                )}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="pointer-events-none absolute bottom-2 md:bottom-3 left-1/2 -translate-x-1/2">
                    <Image
                        src="/down-arrow.svg"
                        alt="down arrow"
                        width={20}
                        height={20}
                        className={`mx-auto block h-5 w-5 md:h-6 md:w-6 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    />
                </div>
            </div>
        </div>
    );
}