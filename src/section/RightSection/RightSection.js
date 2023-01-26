import { useState } from "react";
import RightSecBottom from "../../component/RightSecBottomContent/RightSecBottonCont";
import RightSectionContentTop from "../../component/RightSectionContentTop/RightSectionContentTop";
import SearchBar from "../../component/SearchBar/SearchBar";
import Footerr from "../../component/RightSectionFooter/footer";
import RightSecStyle from './RightSecttion.module.css'

export default function RightSection() {
  const [show, setShow] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  function OnChange() {}
  return (
    <>
   
    <div className={RightSecStyle.box}>
      <SearchBar />
      <RightSectionContentTop />
      <div className={RightSecStyle.fix }>
      <RightSecBottom />
      <Footerr />
      </div>
      
      </div>
     
    </>
  );
}
