import LinkPopout from "./components/LinkPopout";
import "./index.css";
import { ReactComponent as FacebookSVG } from "./assets/fb.svg";
import { ReactComponent as TwitterSVG } from "./assets/twitter.svg";
import { ReactComponent as InstagramSVG } from "./assets/ig.svg";
import { ReactComponent as YouTubeSVG } from "./assets/yt.svg";
import { ReactComponent as GitHubSVG } from "./assets/github.svg";

function App() {
  return (
    <div className="App">
      <LinkPopout
        link={"https://www.facebook.com"}
        Icon={FacebookSVG}
        backgroundColor="#3E68C0"
        text="Facebook"
      />
      <LinkPopout
        link={"https://www.twitter.com"}
        Icon={TwitterSVG}
        backgroundColor="#23abff"
        text="Twitter"
      />
      <LinkPopout
        link={"https://www.instagram.com"}
        Icon={InstagramSVG}
        backgroundImage="radial-gradient(circle farthest-corner at 35% 90%, #fec564, transparent 50%), radial-gradient(circle farthest-corner at 0 140%, #fec564, transparent 50%), radial-gradient(ellipse farthest-corner at 0 -25%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 20% -50%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 0, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 60% -20%, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 100%, #d9317a, transparent), linear-gradient(#6559ca, #bc318f 30%, #e33f5f 50%, #f77638 70%, #fec66d 100%)"
        text="Instagram"
      />
      <LinkPopout
        link={"https://www.youtube.com"}
        Icon={YouTubeSVG}
        backgroundColor="#EE3130"
        text="YouTube"
      />
      <LinkPopout
        link={"https://www.github.com"}
        Icon={GitHubSVG}
        backgroundColor="#000"
        text="GitHub"
      />
    </div>
  );
}

export default App;
