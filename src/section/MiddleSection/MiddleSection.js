
import MiddleStyle from "./MiddleSection.module.css";

import PhotoCont from "../../component/MidSectionPhotoCont/PhotoCont";
import MidTweetDialog from "../../component/MidTweetDialog/MidTweetDialog";

export default function MiddleSection() {
  return (
    <>
    <div className={MiddleStyle.box}>
          <h2 className={MiddleStyle.home}>Home</h2>
            <div className={MiddleStyle.option}>
            <h3>For You</h3>
              <h3>Following</h3>
           </div>
           </div>
           <div className={MiddleStyle.tweetDialog}>
            <MidTweetDialog/>
            </div>
      <div className={MiddleStyle.Content}>
        <PhotoCont />
        
       
        </div>
    
       

      
    </>
  );
}
