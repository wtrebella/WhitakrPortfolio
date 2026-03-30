import React from "react";

export default function PageBackground()
{
    return (
        <svg
            className="page-pattern"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            width="100%"
            height="100%"
        >
            <defs>
                <linearGradient id="page-gradient" x1="50%" y1="0%" x2="50%" y2="100%">
                    <stop offset="0%" stopColor="var(--color-2)" />
                    <stop offset="100%" stopColor="var(--color-2)" />
                </linearGradient>

                <linearGradient id="stroke-gradient" x1="50%" y1="0%" x2="50%" y2="100%">
                    <stop offset="0%" stopColor="var(--color-1)" />
                    <stop offset="100%" stopColor="var(--color-1)" />
                </linearGradient>

                <pattern
                    id="bg-pattern-mask"
                    width={69.6 / 0.9}
                    height={40.1856 / 0.9}
                    viewBox={"0 0 87 50.232"}
                    patternUnits="userSpaceOnUse"
                >
                    <rect width="87" height="50.232" fill="black" />
                    <path
                        fill="none"
                        stroke="white"
                        strokeLinecap="square"
                        strokeWidth="1.5"
                        d="m0 54.424 14.5-8.373c4.813 2.767 9.705 5.573 14.5 8.37l14.5-8.373V29.303M0 4.193v16.744l-14.5 8.373L0 37.68l14.5-8.374V12.562l29-16.746m43.5 58.6-14.5-8.37v-33.49c-4.795-2.797-9.687-5.603-14.5-8.37m43.5 25.111L87 37.67c-4.795-2.797-24.187-13.973-29-16.74l-14.5 8.373-14.5-8.37v-33.489m72.5 8.365L87 4.183l-14.5-8.37M87 4.183v16.745L58 37.673v16.744m0-66.976V4.185L43.5 12.56c-4.795-2.797-24.187-13.973-29-16.74L0 4.192l-14.5-8.37m29 33.484c4.813 2.767 9.705 5.573 14.5 8.37V54.42"
                    />
                </pattern>

                <mask id="pattern-mask" maskUnits="userSpaceOnUse">
                    <rect width="100%" height="100%" fill="url(#bg-pattern-mask)" />
                </mask>
            </defs>

            <rect width="100%" height="100%" fill="url(#page-gradient)" />
            <rect width="100%" height="100%" fill="url(#stroke-gradient)" mask="url(#pattern-mask)" />
        </svg>
    );
}