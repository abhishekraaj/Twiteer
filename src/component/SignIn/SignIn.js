import * as React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import CustomButton from "../../atom/Buttons/CutomButton";
import CustomInput from "../../atom/Input/CustomInput";
import { useState } from "react";
import LoginStyle from "./SignIn.module.css";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { Login } from "../../RecoilState/LoginState/LoginState";
import { useNavigate } from "react-router-dom";

function Google() {
  alert("I am from google");
}
function apple() {
  alert("I am from apple");
}

function forgot() {
  alert("I am from forgot");
}

export default function CustomizedDialogs() {
  const navigate = useNavigate();

  let getData = JSON.parse(localStorage.getItem("userData")); // local storage se array achuka
  console.log(getData, "i am from local"); // data ara hai

  const [mixed, setMixed] = useState("");
  const [password, setPassword] = useState("");
  const [matchEmail, setMatchEMail] = useState("");
  const [show, setShow] = useState(false);
  const [individualData, setIndividualData] = useState([]);
  const [islogin, setIsLogin] = useRecoilState(Login);

  console.log(islogin, "i am from recoilstate");

  function next(event) {
    event.preventDefault();
    // alert("I am from next");
    const matchedUser = getData.filter(
      (x) =>
        x.Email === mixed || x.UserName === mixed || x.PhoneNumber === mixed
    );
    console.log(matchedUser, "i am matched data from local storage");
    individualData.push(matchedUser[0]);
    setIndividualData([...individualData]);
    console.log(individualData, "i am individyal but on 1st login");
    if (matchedUser.length === 0) {
      alert("user not found");
    } else {
      setShow(true);
    }
  }

  function login(event) {
    event.preventDefault();

    console.log(individualData, "i am individyal");
    if (individualData[0].Password === password) {
      alert(`${mixed}You are Logged-In`);
      setIsLogin(true);
      navigate("/home");
      localStorage.setItem("matchUser", JSON.stringify(individualData[0]));
    }
  }

  function handleMixed(e) {
    setMixed(e.target.value);
    console.log(e.target.value, "i am email");
  }
  function handlePassword(e) {
    setPassword(e.target.value);
    console.log(e.target.value, "i am password");
  }

  function handleMatchEmail(e) {
    setMatchEMail(e.target.value);
    console.log(e.target.value, "i am matchEmail");
  }

  return (
    <div className={LoginStyle.main}>
      <div className={LoginStyle.box}>
        <div>
          <TwitterIcon />
        </div>

        {show ? (
          <div>
            <h1>Enter your password</h1>

            <div className={LoginStyle.boxPassword}>
              <div>
                <CustomInput handleChange={handleMatchEmail} value={mixed} />
              </div>
              <div>
                <CustomInput
                  handleChange={handlePassword}
                  placeHolder="Password"
                />
              </div>

              <CustomButton handleClick={login} buttontext="Log in" />
              <CustomButton buttontext="Forgot Password" />
              <p>
                Don’t have an account? <Link to="/signup">Sign-Up</Link>
              </p>
            </div>
          </div>
        ) : (
          <>
            <h1>Sign in to Twitter</h1>
            <div
              style={{
                height: "30rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-evenly",
              }}
            >
              <CustomButton
                handleClick={Google}
                buttontext="Sign in with Google"
              />
              <CustomButton
                handleClick={apple}
                buttontext="Sign in with Apple"
              />
              <div>
                <span className={LoginStyle.or}>
                  _________________<sub>or</sub>__________________
                </span>
              </div>
              <div className={LoginStyle.inputLogin}>
                <CustomInput
                  value={mixed}
                  handleChange={handleMixed}
                  placeHolder="Email or UserName or PhoneNumber"
                />
              </div>

              <CustomButton handleClick={next} buttontext="Next" />
              <CustomButton
                handleClick={forgot}
                buttontext="Forgot password ?"
              />
              <p>
                Don't have an account?<Link to="/signup">Sign-Up</Link>
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
