import Link from "next/link";
import Image from "next/image";
import { getLinkProps } from "@/lib/url";

export default function ProjectModule(
    {title, subtitle, description, link}: {title: string, subtitle?: string, description: string, link?: string}) {
	const trimmedLink = link?.trim();
	const linkProps = getLinkProps(trimmedLink);
	return (
        <div className="flex flex-row mt-8 p-4 border rounded-lg w-full max-w-2xl">
            <div className="flex flex-col p-4 min-w-[30dvh]">
                <div className="flex flex-col items-start justify-center p-4">
                    <h1 className="text-2xl">{title}</h1>
                    {subtitle ? (
                        <h2 className="text-xl text-gray-400">{subtitle}</h2>
                    ) : null}
                </div>
                <div className="flex flex-col items-start justify-center p-4">
                    <p className="text-md text">{description}</p>
                    {trimmedLink ? (
                        <Link
                            href={trimmedLink}
                            className="mt-2 text-blue-500 hover:underline"
                            {...linkProps}
                        >
                            Learn more
                        </Link>
                    ) : null}
                </div>
            </div>
            <div className="p-4">
                <Image src='/piloteer_example.jpg' alt='Example Image' width={321} height={181} className="rounded-md mb-4 max-h-min p-4 w-3xl"/>
            </div>
        </div>
	);
}