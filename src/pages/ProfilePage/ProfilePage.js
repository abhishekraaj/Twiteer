import React from "react";
import Style from './ProfilePage.module.css'


import {BsArrowLeft} from "react-icons/bs";
import {CgCalendarDates} from "react-icons/cg";
import LeftSection from "../../section/LeftSection/LeftSection";
import RightSection from "../../section/RightSection/RightSection";
export default function ProfilePage() {
    let getData = JSON.parse(localStorage.getItem("matchUser"))
    console.log(getData , "i amm from profile page")
    const date = new Date();
    let joinedDate =new Intl.DateTimeFormat('en-GB', { dateStyle: 'full' }).format(date);
   
    return (
        <>
        <div className= {Style.LeftSec}>
        <LeftSection/>
        </div>
        <div className ={Style.box}>
 
      
        <div className = {Style.UpUserName}><h2 className = {Style.UpUserName}><BsArrowLeft className = {Style.arow}/> <sup>{getData.UserName}</sup></h2></div>
        <div className ={Style.background}></div>
        <img className ={Style.icon}  src='https://tse3.mm.bing.net/th?id=OIP.ajmo-8H7DyCxDJ9lg8crrAHaH6&pid=Api&P=0' width='140rem' heigth='100rem'/>
        <div className ={Style.main}>
           <div className ={Style.profile}>
              <h2>{getData.UserName}</h2>
              <p style={{marginTop: "-1.5rem"}}>@{getData.UserName}</p>
              <p style={{width: "8rem" ,fontSize:"0.8rem"}}><CgCalendarDates/>Joined : {joinedDate}</p>
        <div className ={Style.follow}>      
              <span> 0 Following</span>
              <span> 0 Follower</span>
        </div>
        </div>
        <button className= {Style.Btn}>Edit Profile</button>
        
        </div>
         <div className= {Style.sec}>
         <p>Tweet</p>
         <p>Tweet & Replies</p>
         <p>Media</p>
         <p>Likes</p>
         </div>
        </div>
        <div className= {Style.rightSec}>
        <RightSection />
        </div>
        </>
    )
}