import { Raleway } from "next/font/google";

const raleway = Raleway({
    subsets: ["latin"],
})

export default function Header() {
    return (
        <header className="bg-(--color-1) text-(--color-2) px-8 py-6 flex flex-col items-center justify-center">
            <h1 className={`${raleway.className} text-3xl`}>Whitaker Trebella</h1>
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