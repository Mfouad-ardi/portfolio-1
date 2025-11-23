import Project from "../components/Project";
import { myProjects } from "../constants";

const Projects = () =>{
    return (
        <section className="relative c-space section-spacing">
            <h2 className="headtext">My Selected Projects</h2>
            <div className="bg-linear-to-r from-transparent
            via-neutral-700 to-transparent mt-12 h-px w-full"/>
            {myProjects.map((project) =>(
                <Project key={project.id}/>
            ))}
        </section>
    );
}

export default Projects;