import axios from "axios";
import { MutableRefObject } from "react";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { json } from "stream/consumers";
import ConfirmBtn from "../components/ConfirmBtn";
import { SignHeading, SignInput, SignWrapper } from "../components/Sign";
import { useAuth } from "../utils/auth";
import Cookies from "js-cookie";

export function LoginPage() {
  const [account, setAccount] = useState({
    name: "",
    password: "",
  });

  const navigate = useNavigate();
  const auth = useAuth();

  const onChangeAccount = async (event: any) => {
    setAccount({
      ...account,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmitAccount = async (event: any) => {
    try {
      if (
        (["name", "password"].includes(event.target.name) &&
          event.key === "Enter") ||
        event.target.name === "submitBtn"
      ) {
        event.preventDefault();

        const response = await axios.post(
          "http://localhost:4000/auth/login",
          account
        );

        if (response.data.data.accessToken) {
          auth.signin(response.data.data.accessToken, () => {
            Cookies.set("Token", response.data.data.accessToken);
            navigate(`/office`);
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SignWrapper>
      <SignHeading>로그인</SignHeading>
      <SignInput
        id="name"
        name="name"
        label="아이디"
        placeholer="아이디를 입력해주세요."
        onChangeAccount={onChangeAccount}
        onSubmitAccount={onSubmitAccount}
      />
      <SignInput
        id="password"
        name="password"
        label="비밀번호"
        type="password"
        placeholer="비밀번호를 입력해주세요."
        onChangeAccount={onChangeAccount}
        onSubmitAccount={onSubmitAccount}
      />
      <ConfirmBtn
        name="submitBtn"
        btnName="로그인"
        onSubmitAccount={onSubmitAccount}
      />
      <p className="text-xs text-gray-500 mt-3">SYSNAR. All rights reserved.</p>
    </SignWrapper>
  );
}

export default LoginPage;
