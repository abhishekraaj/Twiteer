import * as React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import CustomButton from "../../atom/Buttons/CutomButton";
import CustomInput from "../../atom/Input/CustomInput";
import { useState } from "react";
import SignUpStyle from "./SignUp.module.css";
import DateInput from "../../atom/DateInput/DateInput";
import { EmailHelper } from "../../Helper/EmailHelper/EmailHelper";
import { Link } from "react-router-dom";
import { PasswordHelper } from "../../Helper/PasswordHelper/Password";
import { PhoneNumber } from "../../Helper/PhoneNumber/PhoneNumber";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import {Login} from '../../RecoilState/LoginState/LoginState'

export default function SignUp() {
  const navigate = useNavigate()
  const [islogin , setIsLogin] = useRecoilState(Login)
  const [show, setShow] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [dateInput, setDateInput] = useState("");
  const [emailErrror, setEmailError] = useState("");
  const [phoneErrror, setPhoneError] = useState("");
  const [resultPass, setResultPass] = useState("");
  const [detail, setDetails] = useState([]);

  React.useEffect(()=>{
    if(localStorage.getItem("userData")){
      let data = JSON.parse(localStorage.getItem("userData"))
      setDetails(data)
      console.log(data , "i am from local") //local data pada h
    }
    },[])

  function handleEmail(e) {
    setEmail(e.target.value);
    console.log(e.target.value, "i am email");
    let result = EmailHelper(email);
    console.log(result, "signuip");
    setEmailError(result);
  }
  function handlePhoneNumber(e) {
    setPhoneNumber(e.target.value);
    let result = PhoneNumber(phoneNumber);
    setPhoneError(result);
  }
  function handleUserName(e) {
    setUserName(e.target.value);
    console.log(e.target.value, "i am user");
  }
  function handleDateInput(e) {
    setDateInput(e.target.value);
    console.log(e.target.value, "i am date");
  }

  function handlePassword(e) {
    setPassword(e.target.value);
    console.log(e.target.value, "i am password");
    let resultPass = PasswordHelper(password);
    console.log(resultPass, "signuip pass");
    setResultPass(resultPass);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // alert("i am alert signup");

    if (
      (emailErrror === "" ||
        phoneErrror === "") &&
      resultPass === ""
    ) {
      const userData = {
        Email: email,
        UserName: userName,
        Password: password,
        DOB: dateInput,
        PhoneNumber: phoneNumber,
      };
      detail.push(userData);
      setDetails([...detail]);
      console.log(userData);
      localStorage.setItem("userData", JSON.stringify(detail));
      localStorage.setItem("matchUser" , JSON.stringify(userData));
      alert(`${userName.toUpperCase()} 👍 You Have Successfully Register` )
      setEmail("")
      setUserName("")
      setPassword("")
      setEmailError("")
      setPhoneError("")
      setResultPass("")
      setPhoneNumber("")
      setIsLogin(true)
      navigate('/home')

    }
  }

  function handleNext() {
    setShow(true);
  }

  function handleInputBox() {
    setShowInput(true);
  }

  return (
    <>
      {show ? (
        <div className={SignUpStyle.main}>
          <div className={SignUpStyle.wrap}>
            <TwitterIcon />
            <h1 className={SignUpStyle.head}>Create your account</h1>

            <div className={SignUpStyle.Input}>
              <CustomInput
                value={userName}
                handleChange={handleUserName}
                placeHolder="Name"
              />
              <span></span>
            </div>
            {showInput ? (
              <div className={SignUpStyle.Input}>
                <CustomInput
                  value={email}
                  handleChange={handleEmail}
                  placeHolder="Email"
                />
                <span className={SignUpStyle.alert}>{emailErrror}</span>
                <span
                  className={SignUpStyle.emailPhone}
                  onClick={() => setShowInput(false)}
                >
                  Use Phone Number Instead
                </span>
              </div>
            ) : (
              <div className={SignUpStyle.Input}>
                <CustomInput
                  value={phoneNumber}
                  handleChange={handlePhoneNumber}
                  placeHolder="Phone Number"
                />
                <span className={SignUpStyle.alert}>{phoneErrror}</span>
                <span
                  className={SignUpStyle.emailPhone}
                  onClick={handleInputBox}
                >
                  Use Email Instead
                </span>
              </div>
            )}
            <div className={SignUpStyle.Input}>
              <CustomInput
                value={password}
                handleChange={handlePassword}
                placeHolder="Password"
              />
              <span className={SignUpStyle.alert}>{resultPass}</span>
            </div>
            <div className={SignUpStyle.content}>
              <p className={SignUpStyle.text}>
                <h3>Date of birth</h3>
                This will not be shown publicly. Confirm your own age, even if
                this account is for a business, a pet, or something else.
              </p>
              <DateInput handleFunction={handleDateInput} value={dateInput} />

              <div className={SignUpStyle.signup}>
                <CustomButton handleClick={handleSubmit} buttontext="Sign-Up" />
                <p>
                  Are you already Register ? You can go to{" "}
                  <Link to="/">Login</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={SignUpStyle.main}>
          <div className={SignUpStyle.wrap2}>
            <TwitterIcon />
            <h1>Join Twitter today</h1>
            <div className={SignUpStyle.button}>
              <CustomButton buttontext="Sign-Up with Google" />
              <CustomButton buttontext="Sign-Up with Apple" />
              <div>
                <span className={SignUpStyle.or}>
                  ______________<sub>or</sub>________________
                </span>
              </div>
              <CustomButton
                handleClick={handleNext}
                buttontext="Sign-Up with Phone Number"
              />
              <span className={SignUpStyle.text}>
                By signing up, you agree to the Terms of Service and Privacy
                Policy, including Cookie Use.
              </span>
            </div>
            <span className={SignUpStyle.text2}>
              Have an account already? <Link to="/">Log-in</Link>
            </span>
          </div>
        </div>
      )}
    </>
  );
}
