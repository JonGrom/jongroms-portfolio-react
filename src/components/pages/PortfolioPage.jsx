export default function PortfolioPage(props){

    function handleSubmit(){
        //check that all forms are filled

    }
    return(
        <>
            <h1>PORTFOLIO</h1>
            <div id="projects">
                <h2>Projects</h2>
                <div className="top-project">
                    <h3>HTML Semantics</h3>
                    <a href="https://jongrom.github.io/mod1-semantics/">
                        <img src="./assets/images/html.jpg" alt="a keyboard and coffee beans"/>
                    </a>
                </div>
                <div className="bottom-projects">
                    <h3>Placeholder1</h3>
                    <a href="./assets/misc./placeholder.html">
                        <img src="./assets/images/placeholder1.jpg" alt="A top down view of a casual work meeting around large wooden table."/> 
                    </a>
                </div>
                <div className="bottom-projects">
                    <h3>Placeholder2</h3> 
                    <a href="./assets/misc./placeholder.html">
                        <img src="./assets/images/placeholder2.jpg" alt="A close-up of a laptop running VS.code."/>
                    </a>
                </div>
                <div className="bottom-projects">
                    <h3>Placeholder3</h3>
                    <a href="./assets/misc./placeholder.html">
                        <img src="./assets/images/placeholder3.jpg" alt="A tesla ball toy in a dark room."/>
                    </a>
                </div>
                <div className="bottom-projects">
                    <h3>Placeholder4</h3>
                    <a href="./assets/misc./placeholder.html">
                        <img src="./assets/images/placeholder4.jpg" alt="A sleek toy drone against a foggy gray backdrop."/>
                    </a>
                </div>
            </div>
        </>
    )
}