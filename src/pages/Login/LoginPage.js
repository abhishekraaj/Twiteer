import React from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  
  setTimeout(() => {
    navigate("/signin");  // "/" 0.001s '/signin //1000 1 sec
  }, 1);

  return <></>;
}
