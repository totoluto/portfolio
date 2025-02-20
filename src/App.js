import './App.css';
import {BrowserRouter, Link, NavLink, Route, Routes} from "react-router-dom";
import pfp from "./Images/pfp.jpg"
import Home from "./Sites/Home";
import Posts from "./Sites/Posts";
import About from "./Sites/About";
import WordPressVirus from "./Sites/Posts/WordPressVirus";
import BertrandParadox from "./Sites/Posts/BertrandParadox";
import DiscordVirus from "./Sites/Posts/DiscordVirus";
import {useState} from "react";
import {FiMenu, FiX} from "react-icons/fi";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <header className={'header'}>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            <img className={'logo'} src={pfp} alt={"Profile totoluto"} />
          </Link>
          <div className="burger" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX size={30} color="white" /> : <FiMenu size={30} color="white" />}
          </div>
          <nav className={menuOpen ? 'nav open' : 'nav'}>
            <NavLink to="/" className="NavLink" onClick={() => setMenuOpen(false)}>HOME</NavLink>
            <NavLink to="/posts" className="NavLink" onClick={() => setMenuOpen(false)}>POSTS</NavLink>
            <NavLink to="/about" className="NavLink" onClick={() => setMenuOpen(false)}>ABOUT</NavLink>
            <a href={"https://github.com/totoluto"} rel="noreferrer" target={"_blank"} className={"NavLink"} onClick={() => setMenuOpen(false)}>GITHUB</a>
          </nav>
        </header>
        <div className={"app-content"}>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/posts" element={<Posts/>}/>
            <Route path="/about" element={<About/>}/>
            {/*Posts, below*/}
            <Route path="/posts/wordpressVirus" element={<WordPressVirus/>}/>
            <Route path="/posts/discordVirus" element={<DiscordVirus/>}/>
            <Route path="/posts/bertrandParadox" element={<BertrandParadox/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
