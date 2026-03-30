import { Fugaz_One } from "next/font/google";

const fugaz = Fugaz_One({
    weight: "400",
    subsets: ["latin"]
})

export default function Header() {
    return (
        <header className="
            fixed
            top-0
            left-0
            right-0
            z-50
            bg-(--color-3)
            text-(--color-2)
            px-6
            py-2
            md:px-8
            md:py-6
            flex
            flex-col
            items-center
            justify-center">

            <h1 className={`${fugaz.className} uppercase tracking-normal text-lg md:text-3xl`}>Whitaker Trebella</h1>
            {/*<div className="flex flex-row">
                <Link href="/" className="m-4">Home</Link>
                <Link href="/games" className="m-4">Games</Link>
                <Link href="/music" className="m-4">Music</Link>
                <Link href="/projects" className="m-4">Projects</Link>
                <Link href="/about" className="m-4">About</Link>
            </div>*/}
        </header>
    );
}