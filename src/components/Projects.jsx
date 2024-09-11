export default function Projects({project}){
    //create an array of projects to rendere on page
        return(
            <div className="border">
                <h6>{project.title}</h6>
                <a href={project.href}>
                    <img src="../../assets/images/content-manager.jpg" alt="" />
                </a>
            </div>
        )
    }