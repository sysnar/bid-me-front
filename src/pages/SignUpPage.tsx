import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ConfirmBtn from "../components/ConfirmBtn";
import { SignHeading, SignInput, SignWrapper } from "../components/Sign";

export function SignUpPage() {
  const [account, setAccount] = useState({
    name: "",
    email: "",
    password: "",
    passwordChk: "",
  });

  const navigate = useNavigate();

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
          "http://localhost:4000/auth/signup",
          account
        );

        console.log(response.data.statusCode);
        if (response.data.statusCode === "OK") {
          navigate(`/login`);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SignWrapper>
      <SignHeading>회원가입</SignHeading>
      <SignInput
        id="name"
        name="name"
        label="아이디"
        placeholer="아이디를 입력해주세요."
        onChangeAccount={onChangeAccount}
        onKeyPress={onSubmitAccount}
      />
      <SignInput
        id="email"
        name="email"
        label="Email"
        placeholer="Email을 입력해주세요."
        onChangeAccount={onChangeAccount}
        onKeyPress={onSubmitAccount}
      />
      <SignInput
        id="password"
        name="password"
        label="비밀번호"
        placeholer="비밀번호를 입력해주세요."
        onChangeAccount={onChangeAccount}
        onKeyPress={onSubmitAccount}
      />
      <SignInput
        id="passwordChk"
        name="passwordChk"
        label="비밀번호 확인"
        placeholer="확인할 비밀번호를 입력해주세요."
        onChangeAccount={onChangeAccount}
        onKeyPress={onSubmitAccount}
      />
      <ConfirmBtn
        name="submitBtn"
        btnName="확인"
        onSubmitAccount={onSubmitAccount}
      />
      <p className="text-xs text-gray-500 mt-3">SYSNAR. All rights reserved.</p>
    </SignWrapper>
  );
}

export default SignUpPage;
