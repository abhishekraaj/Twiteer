import React, { useEffect } from "react";
import PhotoStyle from "./PhotoCont.module.css";
import LikeButton from "../../atom/LikeButton/LikeButton";
import { useRecoilState } from "recoil";
import { Post } from "../../RecoilState/Post/Post";
import { OtherProfileDetails } from "../../RecoilState/OtherProfileDetails/OtherProfileDetails";
import { useNavigate } from "react-router-dom";

export default function PhotoCont() {
  const navigate = useNavigate()
  const [ posts , setPosts] = useRecoilState(Post)
  const [ otherUser , setOtherUser] = useRecoilState(OtherProfileDetails)

 console.log(posts , "i am userPost in photocont")

 useEffect(()=>{

 },[posts])

 function OtherProfile(element) {
  console.log(element ," i am other post")
  console.log(otherUser)
  setOtherUser(element)
  navigate('/otherprofile')
 }

  return (
    <div>
      {posts.map((element) => (
       
        <div className={PhotoStyle.main}>
          <div className={PhotoStyle.box}>
            <img onClick={()=>OtherProfile(element)}
              src={element.image}
              width="60em"
              height="60em"
              style={{ borderRadius: "50%" }}
            />
          </div>
         
          <div>
            <h4>{element.name}</h4>
            <h5>{element.quotation}</h5>
            <img src={element.content} width="350em" height="450em" />

            <div className={PhotoStyle.icons}>
              <span className={PhotoStyle.iconsHover}>{element.icon}</span>
              <span className={PhotoStyle.iconsHover}>{element.icon1}</span>
              <span className={PhotoStyle.iconsHover}> <LikeButton/></span>
              <span className={PhotoStyle.iconsHover}>{element.icon3}</span>
              <span className={PhotoStyle.iconsHover}>{element.icon4}</span>
            </div>
          </div>
          
    
        </div>
      ))}
    </div>
  );
}
