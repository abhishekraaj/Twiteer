import RightSecStyle from "./RightSecTop.module.css";
import { FiMoreHorizontal } from "react-icons/fi";
import { useState } from "react";
import { MdNotInterested } from "react-icons/md";

export default function RightSectionContentTop() {

  const content = [
    {
      id: 1,

      inIntrseted: false,
      upText: "SHOW",
      midText: "#BB K VINES",
      botText: "377k Tweets",
    },
    {
      id: 2,
      inIntrseted: false,
      upText: "CODE",
      midText: "#REACT",
      botText: "377k Tweets",
    },
    {
      id: 3,

      inIntrseted: false,
      upText: "MOVIE",
      midText: "#RRR",
      botText: "377k Tweets",
    },
    {
      id: 4,

      inIntrseted: false,
      upText: "SPORTS",
      midText: "#CRICKET",
      botText: "377k Tweets",
    },
    {
      id: 5,

      inIntrseted: false,
      upText: "MUSIC",
      midText: "#BTS",
      botText: "377k Tweets",
    },
  ];

  const [list, setList] = useState(content);

  function notInterested(element) {
    console.log(element);
    // list.splice(index , 1)
    // setList([...list])
    if (element.inIntrseted === true) {
      element.inIntrseted = false;
      setList([...list]);
    } else {
      element.inIntrseted = true;
      setList([...list]);
    }
  }

  function dataDelete(element) {
    let index = list.indexOf(element);
    console.log(index);
    list.splice(index, 1);
    setList([...list]);
  }

  return (
    <>
      <div className={RightSecStyle.box}>
        <h3 style={{paddingLeft:"1rem"}}>What's Happening </h3>

        {list.map((element) => (
          <div className={RightSecStyle.contentmain}>
            <div className={RightSecStyle.content}>
              <span>{element.upText}</span>
              <span className={RightSecStyle.content1}>{element.midText}</span>
              <span>{element.botText}</span>
            </div>
            <span className={RightSecStyle.poperParent}>
              {element.inIntrseted ? (
                <span className={RightSecStyle.poper}>
                  <h4 onClick={() => dataDelete(element)}>NOT INTRESTED</h4>
                  <h4 onClick={() => dataDelete(element)}>
                    SPAM OR MISLEADING
                  </h4>
                </span>
              ) : (
                " "
              )}
              <FiMoreHorizontal onClick={() => notInterested(element)} />
            </span>
          </div>
        ))}

        <h4 className={RightSecStyle.ShowMore}>Show more</h4>
      </div>
    </>
  );
}
