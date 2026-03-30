import ProjectModule from "@/components/ProjectModule";

export default function Home() {
	return (
        <div className="w-full flex flex-col items-center px-12 py-0">
            <div className="mb-8 flex w-full max-w-2xl flex-col items-stretch">
                <ProjectModule
                    title="Piloteer"
                    subtitle="A Game About Learning to Fly"
                    role="Design • Engineering • Art • Sound Design • Music • Writing"
                    description="In Piloteer, a whimsical and serenely challenging physics-based game about learning to fly, a renowned inventor is determined to overcome the stigma associated with flying a jetpack and convince the world that jetpacks should be revered by all.\nThe UI art is done by the wonderful Mike Berg of We Heart Games."
                    icon="/icon-piloteer.png"
                    links={[
                        {
                            href: "https://apps.apple.com/us/app/piloteer/id932248553",
                            label: "App Store"
                        },
                        {
                            href: "https://store.steampowered.com/app/355910/Piloteer/",
                            label: "Steam"
                        },
                        {
                            href: "https://wtrebella.bandcamp.com/album/piloteer",
                            label: "Soundtrack"
                        },
                        {
                            href: "https://weheart.games",
                            label: "We Heart Games"
                        },
                        {
                            href: "https://www.youtube.com/watch?v=CfvlH4exf54",
                            label: "Piloteer Trailer",
                            embedYouTube: true,
                        },
                    ]}/>

                <ProjectModule
                    title="Pivvot"
                    subtitle="A Thrilling Game of Strategic Avoidance"
                    role="Design • Engineering • Art • Sound Design • Music"
                    description="Pivvot is a thrilling game of strategic avoidance that will consistently test and challenge your ability to make quick, impulsive decisions."
                    icon="/icon-pivvot.jpg"
                    links={[
                        {
                            href: "https://apps.apple.com/us/app/pivvot/id664416929",
                            label: "App Store",
                        },
                        {
                            href: "https://store.steampowered.com/app/293900/Pivvot/",
                            label: "Steam",
                        },
                        {
                            href: "https://wtrebella.bandcamp.com/album/pivvot",
                            label: "Soundtrack"
                        },
                        {
                            href: "https://www.youtube.com/watch?v=Lvb68dq3ku8",
                            label: "Pivvot Trailer",
                            embedYouTube: true,
                        },
                    ]}/>

                <ProjectModule
                    title="Polymer"
                    subtitle="A strategic shape-creating game"
                    role="Design • Engineering • Art • Sound Design • Music"
                    description="Use your right and left brain to delve into creativity and strategy while sliding columns and rows to create polymers that are uniquely yours. Be clever and inventive to form the most visually appealing, high-scoring polymers, all while incorporating different tactics into each of the three game modes. Polymer is unfortunately currently unavailable in stores."
                    icon="/icon-polymer.jpg"
                    links={[
                        {
                            href: "https://www.youtube.com/watch?v=BbEJ3x4mI3M",
                            label: "Polymer Trailer",
                            embedYouTube: true,
                        },
                        {
                            href: "https://wtrebella.bandcamp.com/album/polymer-original-soundtrack",
                            label: "Soundtrack"
                        },
                    ]}/>

                <ProjectModule
                    title="Remedy Rush"
                    subtitle="Fight the sickness!"
                    role="Design • Engineering • Art • Sound Design • Music • Writing"
                    description="In Remedy Rush, it's you vs. the germs in this revitalizing adventure game of curious remedies. After coming down with a pesky sickness, you'll delve deep into the body and navigate through an endless maze of cells while utilizing a variety of unconventional remedies to ward of the germs. Each with game-changing side effects, the experimental remedies such as sushi, a tennis ball, and a teddy bear, act as a key defense to fight the germs lurking in the body. The more days your remedy survives, the longer you fend off the sickness!"
                    icon="/icon-remedyRush.png"
                    links={[
                        {
                            href: "https://apps.apple.com/us/app/remedy-rush/id1187680401",
                            label: "App Store",
                        },
                        {
                            href: "https://www.youtube.com/watch?v=MmA99J150d8",
                            label: "Remedy Rush Trailer",
                            embedYouTube: true,
                        },
                    ]}/>

                <ProjectModule
                    title="SoundForest"
                    subtitle="A Mini Music Maker"
                    role="Engineering"
                    description="SoundForest is a mini music that allows you to instantly compose a song using a collection of musical creatures."
                    icon="/icon-soundforest.png"
                    links={[
                        {
                            href: "https://soundforestapp.itch.io/",
                            label: "itch.io"
                        },
                        {
                            href: "https://apps.apple.com/us/app/soundforest/id1194745290",
                            label: "App Store"
                        },
                        {
                            href: "https://www.youtube.com/watch?v=EwKheW-cS8I",
                            label: "SoundForest Trailer",
                            embedYouTube: true,
                        },
                    ]}/>

                <ProjectModule
                    title="Did The Bears Win?"
                    description="A fun little page to celebreate the Chicago Bears. I made this while learning web dev."
                    role="Full Stack Web Development"
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
