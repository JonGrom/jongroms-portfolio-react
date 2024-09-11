import Projects from "../Projects"
export default function PortfolioPage(props){

    const menu = [
        {
            title: 'War',
            imageSrc: 'war.jpg',
            href: 'https://floatingpoint-exaflop.github.io/group-project-one',
            githubLink: 'https://github.com/floatingpoint-exaflop/group-project-one',
            desc: 'javascript',
        },
        {
            title: 'Weather Board',
            imageSrc: 'weather-board.jpg',
            href: 'https://jongrom.github.io/jongroms-weather-board/',
            githubLink: 'https://github.com/JonGrom/jongroms-weather-board',
            desc: 'javascript',
        },
        {
            title: 'Exposition Inn',
            imageSrc: 'exposition-inn.jpg' ,
            href: 'https://exposition-inn.onrender.com/',
            githubLink: 'https://github.com/JonGrom/Exposition_Inn',
            desc: 'NodeJS/Express/SQL',
        },
        {
            title: 'Everybody Eats',
            imageSrc: 'everybody-eats.jpg' ,
            href: '!!!!',
            githubLink: 'https://github.com/TeutonicTed/project-03',
            desc: 'MERN stack',
        },
        {
            title: 'Content Manager',
            imageSrc: 'content-manager.jpg' ,
            href: 'https://youtu.be/hafRNX_U2DA',
            githubLink: 'https://github.com/JonGrom/jongroms-content-management-system',
            desc: 'NodeJS/PostgreSQL',
        },
        {
            title: 'Social Media Back-End',
            imageSrc: 'social-media-backend.jpg' ,
            href: 'https://youtu.be/TPiI7oBYPUU',
            githubLink: 'https://github.com/JonGrom/jongroms-social-media-backend',
            desc: 'MongoDB/Express',
        },
        
    ]

    return(
        <>
            <h2>Porfolio</h2>
            <div className="col-md-">
                {menu.map( item => (
                    <Projects key={item.title} project={item}/>
                ))}
            </div>
            <div className="col-md-">

            </div>
        </>
    )
}