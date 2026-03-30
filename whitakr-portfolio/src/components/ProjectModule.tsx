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
    const lines = description.split(/\r?\n/);
    return (
        <>
            {lines.map((line, index) => line
                ? (<p key={index} className="text-sm wrap-break-word">{line}</p>)
                : (<div key={index} className="h-4" aria-hidden="true"/>)
            )}
        </>
    );
}

function ModuleLinks({ links }: { links: NormalizedModuleLink[] }) {
    if (links.length === 0) return null;

    const textLinks = links.filter(link => !link.youTubeEmbedUrl);

    return (
        <div className="w-full flex flex-col justify-center items-center">
            <div className="p-6 flex w-full flex-wrap justify-center items-center">
                {textLinks.map((link, index) => (
                    <React.Fragment key={`${link.href}-${index}`}>
                        <Link
                            href={link.href}
                            className="text-(--svg-bg) hover:underline bold"
                            onClick={e => e.stopPropagation()}
                            {...link.linkProps}
                        >
                            {link.label}
                        </Link>

                        {index < textLinks.length - 1 && <span className="text-xl mx-3">•</span>}
                    </React.Fragment>
                ))}
            </div>

            {links
                .filter(link => link.youTubeEmbedUrl)
                .map((link, index) => (
                    <div key={`${link.href}-${index}`} className="mt-2 flex w-full min-w-0 flex-col gap-2">
                        <iframe
                            src={link.youTubeEmbedUrl!}
                            title={link.label}
                            className="block aspect-video w-full rounded-md"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        />
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
        const moduleRef = useRef<HTMLDivElement | null>(null);
        const normalizedLinks = useMemo(() => normalizeLinks(links), [links]);

        return (
            <div className="
                relative
                mt-8
                w-full
                max-w-2xl
                overflow-hidden
                rounded-[3.7rem]
                outline-(--color-1)
                outline-2
                p-7
                scroll-mb-24
                bg-(--color-2)
                select-none"
                 onClick={() => setIsOpen(!isOpen)}
                 ref={moduleRef}
            >
                <div className="flex w-full min-w-0 flex-col items-start justify-center">
                    <div className="flex w-full min-w-0 flex-row items-start gap-6">
                        <div className="relative aspect-square w-32 shrink-0 self-start overflow-hidden rounded-[2.5rem]">
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
                            <h1 className="wrap-break-word text-2xl">{title}</h1>
                            {subtitle && (
                                <h2 className="wrap-break-word text-lg text-gray-400">{subtitle}</h2>
                            )}
                            {role && (
                                <p className="wrap-break-word text-sm text-gray-500">{role}</p>
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
                            <div className="mt-4 flex w-full min-w-0 flex-col items-start justify-center pb-12">
                                <Description description={description}/>
                                <ModuleLinks links={normalizedLinks}/>
                                <hr className="w-full border-t border-gray-300" />
                                {image && (
                                    <div className="relative mt-4 aspect-video w-full overflow-hidden rounded-2xl">
                                        <Image
                                            src={image}
                                            alt={title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 42rem"
                                            className="object-contain"
                                        />
                                    </div>                                )}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2">
                    <Image
                        src="/down-arrow.png"
                        alt="down arrow"
                        width={32}
                        height={32}
                        className={`mx-auto block transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    />
                </div>
            </div>
        </div>
    );
}