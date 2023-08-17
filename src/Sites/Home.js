import '../App.css';
import {Link} from "react-router-dom";

function Home() {

    function getAge(){
        const currentYear = new Date().getFullYear();
        const targetYear = 2005;
        const yearDifference = currentYear - targetYear;
        return yearDifference;
    }

    return (
        <div className={"site"}>
            <div className="home">
                <div className={"title"}>totoluto</div>
                <div className={"subtitle"}>Software Developer</div>
                <div className={"text"}>Hey there, I'm totoluto, and my real name is <span className={"corrupted"}>isPrivate</span>. I'm a {getAge()}-year-old software developer aiming to become an IT security specialist. Currently, I'm living and working in Switzerland, and I plan to start studying IT security in the spring of 2024.</div>

                <div id={"projects"}>Projects:</div>
                <div className={"projectList"}>
                    <Link to={'/posts/wordpressVirus'} className={"project-bg bg1"}>
                        <div className={"project-box"}>
                            <div className={"project-title"}>Wordpress virus analysis</div>
                            <div className={"project-desc"}>While reworking a website of one of my clients I stumbled upon a virus which was decrypted using the eval() function.</div>
                        </div>
                    </Link>
                    <Link to={'/posts/discordVirus'} className={"project-bg bg2"}>
                        <div className={"project-box"}>
                            <div className={"project-title"}>Discord virus?</div>
                            <div className={"project-desc"}>Discord bots can work as a virus and your anti-virus program won't even recognize it. So I tried to find out why with my own spyware-bot.</div>
                        </div>
                    </Link>
                    <Link to={'/posts/bertrandParadox'} className={"project-bg bg3"}>
                        <div className={"project-box"}>
                            <div className={"project-title"}>Bertrand Paradox demonstrated using javafx</div>
                            <div className={"project-desc"}>As part of my education I needed to implement a mathematical problem using javafx.</div>
                        </div>
                    </Link>
                </div>
                <Link to={"/posts"} className={"read-more"}>
                    <div className={"text read-more"}>Read all Posts ></div>
                </Link>
            </div>
        </div>
    );
}

export default Home;
