import ProjectModule from "@/components/ProjectModule";

export default function Home() {
	return (
        <div className="min-h-full flex flex-col items-center justify-center p-4">
            <h1 className="text-3xl">My Portfolio</h1>
            <ProjectModule
                title="Game Gomm Goom"
                subtitle="A Game About Being an Idiot"
                description="Oh god don't become a gomm goom because that's embarrassing!"
                link="https://www.youtube.com/watch?v=dQw4w9WgXcQ"/>

            <ProjectModule
                title="Piloteer"
                subtitle="A Game About Learning to Fly"
                description="In Piloteer, a whimsical and serenely challenging physics-based game about learning to fly, a renowned inventor is determined to overcome the stigma associated with flying a jetpack and convince the world that jetpacks should be revered by all."
                link="https://www.youtube.com/watch?v=dQw4w9WgXcQ"/>

            <ProjectModule
                title="Pivvot"
                subtitle="A Thrilling Game of Strategic Avoidance"
                description="Pivvot is a thrilling game of strategic avoidance that will consistently test and challenge your ability to make quick, impulsive decisions."
                link="https://www.youtube.com/watch?v=dQw4w9WgXcQ"/>

            <ProjectModule
                title="Polymer"
                subtitle="A Game About Piecing Together Things"
                description="In Polymer, piece together things into things"
                link="https://www.youtube.com/watch?v=dQw4w9WgXcQ"/>
        </div>
	);
}
