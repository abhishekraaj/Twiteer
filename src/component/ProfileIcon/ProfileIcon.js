import * as React from "react";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";
import { FiMoreHorizontal } from "react-icons/fi";
import ProfileIconStyle from "./ProfileIcon.module.css";
import { useRecoilState } from "recoil";
import {Login} from '../../RecoilState/LoginState/LoginState'
import { Link, useNavigate } from "react-router-dom";


export default function PositionedPopper() {

  let userMatch = JSON.parse(localStorage.getItem("matchUser"))
  console.log(userMatch,"login user data")

  const[islogin ,setIsLogin] = useRecoilState(Login)
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  function logOut() {
    setIsLogin(false)
    if(islogin === false){
    navigate('/')
      
    }
  }
  return (
    <Box sx={{ width: 400 }}>
      <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper>
              <Typography sx={{ p: 1 }}>
                <h4 className={ProfileIconStyle.option}>
                  Add Existing Account
                </h4>
                <h4 style={{cursor : "pointer"}} onClick={logOut} className={ProfileIconStyle.option}>
                  <Link to='/'>Log-out {userMatch.UserName} </Link>
                </h4>
              </Typography>
            </Paper>
          </Fade>
        )}
      </Popper>

      <Button onClick={handleClick("top")}>
        <div className={ProfileIconStyle.main}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/2048px-Circle-icons-profile.svg.png"
            width="50px"
            height="50px"
          />

          <div className={ProfileIconStyle.User}>
            <span style={{ fontWeight: "bolder" }}>{userMatch.UserName}</span>
            <span>{userMatch.PhoneNumber}</span>
          </div>
          <h3
            className={ProfileIconStyle.point}
            style={{ fontWeight: "bolder", fontSize: "1.5em" }}
          >
            <FiMoreHorizontal />
          </h3>
        </div>
      </Button>
    </Box>
  );
}
