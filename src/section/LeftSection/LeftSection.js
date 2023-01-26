import TwitterIcon from "@mui/icons-material/Twitter";
import { RiHome7Fill } from "react-icons/ri";
import { BiHash } from "react-icons/bi";
import { VscBell } from "react-icons/vsc";
import { BiEnvelope } from "react-icons/bi";
import { HiOutlineBookmark } from "react-icons/hi";
import { RiFileListLine } from "react-icons/ri";
import { CgMoreO } from "react-icons/cg";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LeftStyle from "./LeftSection.module.css";
import ProfileIcon from "../../component/ProfileIcon/ProfileIcon";
import { useState } from "react";
import TextButton from "../../component/TweetButton/TweetButton";
import TweetButton from "../../component/TweetButton/TweetButton";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
export default function LeftSection() {


 

  const leftSectionMenu = [
    {
      id: 1,
      icon: <RiHome7Fill />,
      text: <sup>Home</sup>,
    },
    {
      id: 2,
      icon: <BiHash />,
      text: <sup>Explore</sup>,
    },
    {
      id: 3,
      icon: <VscBell />,
      text: <sup>Notification</sup>,
    },
    {
      id: 4,
      icon: <BiEnvelope />,
      text: <sup>Messages</sup>,
    },
    {
      id: 5,
      icon: <HiOutlineBookmark />,
      text: <sup>Bookmarks</sup>,
    },
    {
      id: 6,
      icon: <RiFileListLine />,
      text: <sup>List</sup>,
    },
    {
      id: 7,
      icon: <PersonOutlineIcon style={{ fontSize: "1.1em" }} />,
      
    },
    {
      id: 8,
      icon: <CgMoreO />,
      text: <sup>More</sup>,
    },
  ];
  const [show, setShow] = useState(false);
  return (
    <>
      <div className={LeftStyle.main}>
        <div className={LeftStyle.logo}>
         <Link to="/home" ><TwitterIcon 
            style={{ fontSize: "2.5em", color: "rgb(24, 141, 187)" }}
          />
          </Link>
        </div>

        {leftSectionMenu.map((element) => (
          <div className={LeftStyle.menu} key={element.id}>
            {element.icon}
            {element.text ||<sup ><Link style={{textDecoration : "none"}} to="/profile">Profile</Link></sup> }
          </div>
        ))}

        <TweetButton />

        <div
          className={LeftStyle.user}
          onClick={() => {
            if (show === true) {
              setShow(false);
            } else {
              setShow(true);
            }
          }}
        >
          <ProfileIcon />
        </div>
      </div>
    </>
  );
}
