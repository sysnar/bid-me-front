import ConfirmBtn from "../components/ConfirmBtn";
import { SignHeading, SignInput, SignWrapper } from "../components/Sign";

export function LoginPage() {
  return (
    <SignWrapper>
      <SignHeading>로그인</SignHeading>
      <SignInput
        id="sign-id"
        label="아이디"
        placeholer="아이디를 입력해주세요."
      />
      <SignInput
        id="sign-pwd"
        label="비밀번호"
        type="password"
        placeholer="비밀번호를 입력해주세요."
      />
      <ConfirmBtn btnName="로그인" />
      <p className="text-xs text-gray-500 mt-3">
        Literally you probably haven't heard of them jean shorts.
      </p>
    </SignWrapper>
  );
}

export default LoginPage;
