import React from "react";
import style from './MidTweet.module.css'
import PublicIcon from "@mui/icons-material/Public";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { AiOutlineDown } from "react-icons/ai";
import ImageIcon from "@mui/icons-material/Image";
import GifBoxIcon from "@mui/icons-material/GifBox";
import { MdOutlinePoll } from "react-icons/md";
import { TfiLocationPin } from "react-icons/tfi";
import { TbCalendarStats } from "react-icons/tb";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { Post } from "../../RecoilState/Post/Post";

export default function MidTweetDialog() {
  let getData= JSON.parse(localStorage.getItem("matchUser"))
    console.log(getData , "i amm from profile page")
    
const [posts , setPosts] = useRecoilState(Post)
  const [ textInput , setTextInput] = useState("")
  function captureInput(e) {
    setTextInput(e.target.value)
  }

  function updatePost() {
    const userPost = {quotation : textInput , name : getData.UserName , image : "http://4.bp.blogspot.com/-inMkTgEoMj4/T6LG__DWGaI/AAAAAAAAAJg/6kLgDyHeOc8/s1600/Cute-Puppy-puppies-15813268-1024-768.jpg" , content : "http://2.bp.blogspot.com/-O9y-AxUaAMY/T-BhUU9AIqI/AAAAAAAADLo/U7to8sTBNHQ/s1600/Cute-Puppies-puppies-16094555-1280-800.jpg"}
    setPosts([...posts,userPost].reverse())
  }

  return (
      <>
      <div  style={{width : "400px"}}>
      <div style={{display :"flex" ,width : "300px"}}>
      <AccountCircleIcon style={{ fontSize: "3em" }} />
      <div style={{display :"block"}}>
      <span
        style={{
          color: "rgb(24, 141, 187)",
          marginTop: "0.05em",
          border: "1px solid ",
          width: "7em",
          fontSize: "0.9em",
          borderRadius: "4em",
          height: "1.3em",
          paddingLeft: "1em",
          
          marginBottom : "-10em",
          fontFamily: "monospace",
        }}
      >
        Everyone
        <AiOutlineDown   style={{
            color: "rgb(24, 141, 187)"}}/>{" "}
      </span>
   
  
  
      <input className={style.input}
      value={textInput}
      onChange={captureInput}
        placeholder="Whats Happening ?"
        style={{ width: "28em", height: "6em", border: "none" , marginTop:"0.1em" }}
      />
      <button style={{backgroundColor : "white" , border: "0px solid white"}}>
        <PublicIcon style={{ fontSize: "1.8em" }} />
        
        <sup style={{ fontSize: "1.1em"  }}>Everyone can reply</sup>
      </button>
      </div>
      </div>
      
     
      <hr style={{width : "37.9em" , marginLeft : "-2.2em"}} />
      <div style={{display : "flex" ,gap : "17em",height:"0.5em" }}>
    <div style={{width : "200px" ,display : "flex" , gap :"1em"}}>
          <ImageIcon />
          <GifBoxIcon />
          <MdOutlinePoll style={{ fontSize: "1.5em" }} />
          <InsertEmoticonIcon />
          <TbCalendarStats style={{ fontSize: "1.5em" }} />
          <TfiLocationPin style={{ fontSize: "1.5em" }} />
       </div>
          <button onClick={updatePost}  style={{ color: "white", fontWeight: "medium",border :"0.01px solid"  , backgroundColor : "rgb(24, 141, 187)" , borderRadius:"2em" , width : "40rem",height: "2em"}}>
            Tweet
          </button>
        </div>
      </div>
      </>
  )
}
