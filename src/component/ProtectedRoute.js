import { useRecoilValue } from "recoil";
import { Login } from "../RecoilState/LoginState/LoginState";
import { Route, useNavigate } from "react-router-dom";

export default function ProtectedRoute(props) {
    const nav = useNavigate()
  const login = useRecoilValue(Login);
  if (!login) {
   nav('/')
  }
  return <props.element/>
}
