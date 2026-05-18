const projects = [{
    title: "Portfolio websites",
    description:"A personal Portfolio build using react and tailwindcss",
    tech: ["React", "Tailwindcss"],
    link:"#"
},
{
    title: "To-Do App",
    description:"A simple task manager app where you can add and delete tasks.",
    tech: ["HTML","CSS","JavaScript"],
    link:"#"
},
{
    title: "Weather App",
    description:"Shows live weather data for any city using an API.",
    tech: ["React","API"],
    link:"#"
}]


const Project = () => {
   return(
    <section id="project" className="min-h-screen px-8 py-20 bg-gray-950 text-white">
        <h2 className="text-4xl font-bold text-center mb-12">
            My<span className="text-blue-400"> Projects</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project,index)=>(
                <div key={index} className="bg-gray-800 rounded-2xl p-6 flex flex-col gap-4 hover:scale-105 transition duration-300">
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                        {project.tech.map((item,i)=> (
                            <span key={i} className="bg-blue-500 text-white text-xs px-3 py-1 rounded-full">
                                {item}
                            </span>
                        ))}
                    </div>
                    <a href={project.link} className="mt-auto text-blue-400 hover:text-blue-300 text-sm font-semibold"> view Project →</a>

                </div>
            ))}
        </div>
    </section>
   )
}

export default Project;