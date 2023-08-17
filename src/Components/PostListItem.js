import {Link} from "react-router-dom";

export function PostListItem( {name, description, link}){
    return(
        <Link to={link} className={"decorationNone"}>
            <div className={"postListItem"}>
                <div className={"postListTitle"}>{name}</div>
                <div className={"postListDesc"}>{description}</div>
            </div>
        </Link>
    )
}