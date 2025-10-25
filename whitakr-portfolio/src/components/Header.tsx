import Link from "next/link";

const headerLinkStyle: string = "m-8"

export default function Header() {
    return (
        <header className="m-8 flex flex-col items-center justify-center">
            <h1>Whitaker Trebella</h1>
            <div className="flex flex-row">
                <Link href="/" className="m-4">Home</Link>
                <Link href="/games" className="m-4">Games</Link>
                <Link href="/music" className="m-4">Music</Link>
                <Link href="/projects" className="m-4">Projects</Link>
                <Link href="/about" className="m-4">About</Link>
            </div>
        </header>
    );
}