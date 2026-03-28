import ProjectModule from "@/components/ProjectModule";

export default function Home() {
	return (
        <div className="min-h-full flex flex-col items-center justify-center p-12">
            <h1 className="text-4xl">Whitaker Trebella&apos;s Portfolio</h1>
            <div className="flex flex-col lgxl:grid lgxl:grid-cols-2 gap-4">
                <ProjectModule
                    title="Piloteer"
                    subtitle="A Game About Learning to Fly"
                    role="Designer, Engineer, Artist, Sound Designer, Musician, Writer"
                    description="In Piloteer, a whimsical and serenely challenging physics-based game about learning to fly, a renowned inventor is determined to overcome the stigma associated with flying a jetpack and convince the world that jetpacks should be revered by all. The UI art is done by the wonderful Mike Berg of https://weheart.games/."
                    image="/icon-piloteer.png"
                    links={[
                        {
                            href: "https://www.youtube.com/watch?v=CfvlH4exf54",
                            label: "Piloteer Trailer",
                            embedYouTube: true,
                        },
                    ]}/>

                <ProjectModule
                    title="Pivvot"
                    subtitle="A Thrilling Game of Strategic Avoidance"
                    role="Designer, Engineer, Artist, Sound Designer, Musician, Writer"
                    description="Pivvot is a thrilling game of strategic avoidance that will consistently test and challenge your ability to make quick, impulsive decisions."
                    image="/icon-pivvot.jpg"
                    links={[
                        {
                            href: "https://www.youtube.com/watch?v=Lvb68dq3ku8",
                            label: "Pivvot Trailer",
                            embedYouTube: true,
                        },
                    ]}/>

                <ProjectModule
                    title="SoundForest"
                    subtitle="A Mini Music Maker"
                    role="Engineer"
                    description="SoundForest is a mini music that allows you to instantly compose a song using a collection of musical creatures."
                    image="/icon-soundforest.png"
                    links={[
                        {
                            href: "https://www.youtube.com/watch?v=EwKheW-cS8I",
                            label: "SoundForest Trailer",
                            embedYouTube: true,
                        },
                    ]}/>

                <ProjectModule
                    title="Polymer"
                    subtitle="A Game About Piecing Together Things"
                    role="Designer, Engineer, Artist, Sound Designer, Musician, Writer"
                    description="In Polymer, piece together things into things"
                    image="/icon-polymer.jpg"
                    links={[
                        {
                            href: "https://www.youtube.com/watch?v=BbEJ3x4mI3M",
                            label: "Polymer Trailer",
                            embedYouTube: true,
                        },
                    ]}/>

                <ProjectModule
                    title="Did The Bears Win?"
                    description="A fun little page to celebreate the Chicago Bears. I made this while learning web dev."
                    role="Full Stack Web Developer"
                    image="/icon-didTheBearsWin.png"
                    links={[
                        {
                            href: "https://didthebearswin.com",
                            label: "Did the Bears Win?",
                        },
                    ]}/>
                </div>
        </div>
	);
}
