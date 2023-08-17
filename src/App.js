import './App.css';
import {BrowserRouter, Link, NavLink, Route, Routes} from "react-router-dom";
import pfp from "./Images/pfp.jpg"
import Home from "./Sites/Home";
import Posts from "./Sites/Posts";
import About from "./Sites/About";
import WordPressVirus from "./Sites/Posts/WordPressVirus";
import BertrandParadox from "./Sites/Posts/BertrandParadox";
import DiscordVirus from "./Sites/Posts/DiscordVirus";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className={'header'}>
          <Link to="/"><img className={'logo'} src={pfp} alt={"Profile totoluto"}/></Link>
          <nav className={'nav'}>
            <NavLink to="/" className="NavLink">HOME</NavLink>
            <NavLink to="/posts" className="NavLink">POSTS</NavLink>
            <NavLink to="/about" className="NavLink">ABOUT</NavLink>
            <a href={"https://github.com/totoluto"} rel="noreferrer" target={"_blank"} className={"NavLink"}>GITHUB</a>
          </nav>
        </header>
        <div className={"app-content"}>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/posts" element={<Posts/>}/>
            <Route path="/about" element={<About/>}/>
            {/*Posts, below*/}
            <Route path="/posts/wordpressVirus" element={<WordPressVirus/>}/>
            <Route path="'/posts/discordVirus'" element={<DiscordVirus/>}/>
            <Route path="/posts/bertrandParadox" element={<BertrandParadox/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
