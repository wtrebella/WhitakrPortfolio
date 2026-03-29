import ProjectModule from "@/components/ProjectModule";

export default function Home() {
	return (
        <div className="min-h-full flex flex-col items-center justify-center p-12">
            <h1 className="text-4xl">Whitaker Trebella</h1>
            <div className="mt-4 flex w-full max-w-2xl flex-col items-stretch">
                <ProjectModule
                    title="Piloteer"
                    subtitle="A Game About Learning to Fly"
                    role="Designer, Engineer, Artist, Sound Designer, Composer, Writer"
                    description="In Piloteer, a whimsical and serenely challenging physics-based game about learning to fly, a renowned inventor is determined to overcome the stigma associated with flying a jetpack and convince the world that jetpacks should be revered by all. The UI art is done by the wonderful Mike Berg of https://weheart.games/."
                    icon="/icon-piloteer.png"
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
                    role="Designer, Engineer, Artist, Sound Designer, Composer"
                    description="Pivvot is a thrilling game of strategic avoidance that will consistently test and challenge your ability to make quick, impulsive decisions."
                    icon="/icon-pivvot.jpg"
                    links={[
                        {
                            href: "https://www.youtube.com/watch?v=Lvb68dq3ku8",
                            label: "Pivvot Trailer",
                            embedYouTube: true,
                        },
                    ]}/>

                <ProjectModule
                    title="Polymer"
                    subtitle="A Game About Piecing Together Things"
                    role="Designer, Engineer, Artist, Sound Designer, Composer"
                    description="In Polymer, piece together things into things"
                    icon="/icon-polymer.jpg"
                    links={[
                        {
                            href: "https://www.youtube.com/watch?v=BbEJ3x4mI3M",
                            label: "Polymer Trailer",
                            embedYouTube: true,
                        },
                    ]}/>

                <ProjectModule
                    title="Remedy Rush"
                    subtitle="Fight the sickness!"
                    role="Designer, Engineer, Artist, Sound Designer, Composer, Writer"
                    description="In Remedy Rush, it's you vs. the germs in this revitalizing adventure game of curious remedies. After coming down with a pesky sickness, you'll delve deep into the body and navigate through an endless maze of cells while utilizing a variety of unconventional remedies to ward of the germs. Each with game-changing side effects, the experimental remedies such as sushi, a tennis ball, and a teddy bear, act as a key defense to fight the germs lurking in the body. The more days your remedy survives, the longer you fend off the sickness!"
                    icon="/icon-remedyRush.png"
                    links={[
                        {
                            href: "https://www.youtube.com/watch?v=MmA99J150d8",
                            label: "Remedy Rush Trailer",
                            embedYouTube: true,
                        },
                    ]}/>

                <ProjectModule
                    title="SoundForest"
                    subtitle="A Mini Music Maker"
                    role="Engineer"
                    description="SoundForest is a mini music that allows you to instantly compose a song using a collection of musical creatures."
                    icon="/icon-soundforest.png"
                    links={[
                        {
                            href: "https://www.youtube.com/watch?v=EwKheW-cS8I",
                            label: "SoundForest Trailer",
                            embedYouTube: true,
                        },
                    ]}/>

                <ProjectModule
                    title="Did The Bears Win?"
                    description="A fun little page to celebreate the Chicago Bears. I made this while learning web dev."
                    role="Full Stack Web Developer"
                    icon="/icon-didTheBearsWin.png"
                    image="/didTheBearsWin.png"
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
