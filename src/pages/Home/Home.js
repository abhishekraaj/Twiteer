import LeftSection from "../../section/LeftSection/LeftSection";
import MiddleSection from "../../section/MiddleSection/MiddleSection";
import RightSection from "../../section/RightSection/RightSection";
import HomeStyle from "./Home.module.css";
import { useRecoilState } from "recoil";
import {Login} from '../../RecoilState/LoginState/LoginState'
import { useEffect } from "react";
import {  useNavigate } from "react-router-dom";

function Home() {
  const navigate =useNavigate()
  const [islogin , setIsLogin] = useRecoilState(Login)
  console.log()
  useEffect(()=>{
    if(islogin === false){
      navigate('/')
    }
  },[])
  return (
    <>

     { islogin && <div className={HomeStyle.main}>
        <div className={HomeStyle.left}>
          <LeftSection />
        </div>
        <div className={HomeStyle.mid}>
          <MiddleSection />
        </div>
        <div className={HomeStyle.right}>
          <RightSection />
          <div className={HomeStyle.rightbotfixed}></div>
        </div>
      </div>}
    </>
  );
}
export default Home;
