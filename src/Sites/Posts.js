import '../App.css';
import {PostListItem} from "../Components/PostListItem";

function Posts() {
    return (
        <div className={"site"}>
            <div className="posts">
                <PostListItem
                    name={'Wordpress virus analysis'}
                    description={'While reworking a website of one of my clients I stumbled upon a virus which was decrypted using the eval() function.'}
                    link={'/posts/WordpressVirus'}
                />
                <PostListItem
                    name={'Discord virus?'}
                    description={'Discord bots can work as a virus and your anti-virus program won\'t even recognize it. So I tried to find out why with my own spyware-bot.'}
                    link={'/posts/discordVirus'}
                />
                <PostListItem
                    name={'Bertrand Paradox demonstrated using javafx'}
                    description={'As part of my education I needed to implement a mathematical problem using javafx.'}
                    link={'/posts/bertrandParadox'}
                />
            </div>
        </div>
    );
}

export default Posts;
