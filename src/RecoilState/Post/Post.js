import { BiMessageRounded } from "react-icons/bi";
import { CgPoll } from "react-icons/cg";
import { FaRetweet } from "react-icons/fa";
import { BsUpload } from "react-icons/bs";


import {atom} from 'recoil'

export const Post = atom({
    key : "Post" ,
    default : [
        {
          id: 0,
          image: "https://i0.wp.com/cdn.bgr.com/2014/04/captain-america.jpg",
          name: "Chris Evans",
          quotation:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, repudiandae, a porro officia veritatis velit commodi, laboriosam unde qui ipsum praesentium numquam dicta ea quos. Consectetur qui assumenda maiores ipsam.",
          content:
            "https://tse2.mm.bing.net/th?id=OIP.LEc2g3TuODoEYMJ-4__lzwHaKc&pid=Api&P=0",
          icon: <BiMessageRounded />,
          icon1: <FaRetweet />,
        
          icon3: <CgPoll />,
          icon4: <BsUpload />,
        },
        {
          id: 1,
          image: "https://i0.wp.com/cdn.bgr.com/2014/04/captain-america.jpg",
          name: "Chris Evans",
          quotation:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, repudiandae, a porro officia veritatis velit commodi, laboriosam unde qui ipsum praesentium numquam dicta ea quos. Consectetur qui assumenda maiores ipsam.",
          content:
            "https://tse2.mm.bing.net/th?id=OIP.LEc2g3TuODoEYMJ-4__lzwHaKc&pid=Api&P=0",
          icon: <BiMessageRounded />,
          icon1: <FaRetweet />,
    
          icon3: <CgPoll />,
          icon4: <BsUpload />,
        },
        {
          id: 2,
          image:
            "https://tse3.mm.bing.net/th?id=OIP.ApS9NDwsmKWCBwnWrpIpvQHaE7&pid=Api&P=0",
          name: "Red Panda",
          quotation:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, repudiandae, a porro officia veritatis velit commodi, laboriosam unde qui ipsum praesentium numquam dicta ea quos. Consectetur qui assumenda maiores ipsam.",
          content:
            "https://tse3.mm.bing.net/th?id=OIP.0JKQD79rJ_Alo97p1muqYwHaEK&pid=Api&P=0",
          icon: <BiMessageRounded />,
          icon1: <FaRetweet />,
    
          icon3: <CgPoll />,
          icon4: <BsUpload />,
        }
      ]
    })