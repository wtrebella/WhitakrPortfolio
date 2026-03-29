'use client'

import {AnimatePresence, motion} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {useMemo, useState} from "react";
import {getLinkProps, getYouTubeEmbedUrl} from "@/lib/url";

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
    image: string;
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
                ? (<p key={index} className="text-md wrap-break-word">{line}</p>)
                : (<div key={index} className="h-4" aria-hidden="true"/>)
            )}
        </>
    );
}

function ModuleLinks({ links }: { links: NormalizedModuleLink[] }) {
    if (links.length === 0) return null;

    return (
        <>
            {links.map((link, index) => (
                <div key={`${link.href}-${index}`} className="mt-2 flex w-full min-w-0 flex-col gap-2">
                    {link.youTubeEmbedUrl ? (
                        <iframe
                            src={link.youTubeEmbedUrl}
                            title={link.label}
                            className="block aspect-video w-full rounded-md"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        />
                    ) : (
                        <Link
                            href={link.href}
                            className="break-all text-blue-500 hover:underline"
                            {...link.linkProps}
                        >
                            {link.label}
                        </Link>
                    )}
                </div>
            ))}
        </>
    );
}

export default function ProjectModule(
    {
        title,
        subtitle,
        role,
        description,
        image,
        links = []
    }: ProjectModuleProps)
{
    const [isOpen, setIsOpen] = useState(false);

    const normalizedLinks = useMemo(() => normalizeLinks(links), [links]);

    return (
        <div className="relative mt-6 w-full max-w-2xl overflow-hidden rounded-[3.5rem] bg-emerald-50 p-6 drop-shadow-xs shadow-md"
             onClick={() => setIsOpen(!isOpen)}>
            <div className="flex w-full min-w-0 flex-col items-start justify-center">
                <div className="flex w-full min-w-0 flex-row items-start gap-6">
                    <div className="relative aspect-square w-32 shrink-0 self-start overflow-hidden rounded-[2.5rem]">
                        <Image
                            src={image}
                            alt={`${title} image`}
                            fill
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
                            initial={{height: 0, opacity: 0}}
                            animate={{height: "auto", opacity: 1}}
                            exit={{height: 0, opacity: 0}}
                            transition={{duration: 0.25, ease: "easeInOut"}}
                            className="w-full overflow-hidden"
                        >
                            <div className="mt-4 flex w-full min-w-0 flex-col items-start justify-center pb-12">
                                <Description description={description}/>
                                <ModuleLinks links={normalizedLinks}/>
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