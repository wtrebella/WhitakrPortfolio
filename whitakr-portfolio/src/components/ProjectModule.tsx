'use client'

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
                ? (<p key={index} className="text-md">{line}</p>)
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
                <div key={`${link.href}-${index}`} className="mt-2 flex w-full flex-col gap-2">
                    {link.youTubeEmbedUrl ? (
                        <iframe
                            src={link.youTubeEmbedUrl}
                            title={link.label}
                            className="h-56 w-full rounded-md"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        />
                    ) : (
                        <Link
                            href={link.href}
                            className="text-blue-500 hover:underline"
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
        <div className="mt-8 flex w-full max-w-2xl flex-row items-start gap-6 rounded-lg bg-neutral-800 p-4 shadow-md"
             onClick={() => setIsOpen(!isOpen)}>
            <div className="relative aspect-square w-32 shrink-0 self-start overflow-hidden rounded-md md:w-40">
                <Image
                    src={image}
                    alt={`${title} image`}
                    fill
                    sizes="(max-width: 768px) 8rem, 10rem"
                    className="object-contain p-3"
                />
            </div>
            
            <div className="flex min-w-0 flex-1 flex-col">
                <div className="flex flex-col items-start justify-center">
                    <h1 className="text-2xl">{title}</h1>
                    {subtitle && (
                        <h2 className="text-xl text-gray-400">{subtitle}</h2>
                    )}
                    {role && (
                        <p className="text-md text-gray-500">{role}</p>
                    )}
                </div>
                
                {isOpen && (
                    <div className="mt-4 flex flex-col items-start justify-center">
                        <Description description={description}/>
                        <ModuleLinks links={normalizedLinks}/>
                    </div>
                )}
            </div>
        </div>
	);
}