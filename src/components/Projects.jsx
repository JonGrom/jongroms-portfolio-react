export default function Projects({project}){
    //create an array of projects to rendere on page
        return(
            <a id="" href={project.href} >
                <div className="border" id="project" style={{ backgroundImage: `url(../../assets/images/${project.imageSrc})` }}>
                    <h3 className="title">{project.title}</h3>
                </div>
            </a>
        )
    }