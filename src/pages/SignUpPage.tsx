import ConfirmBtn from "../components/ConfirmBtn";
import { SignHeading, SignInput, SignWrapper } from "../components/Sign";

export function SignUpPage() {
  return (
    <SignWrapper>
      <SignHeading>회원가입</SignHeading>
      <SignInput label="아이디" placeholer="아이디를 입력해주세요." />
      <SignInput label="Email" placeholer="Email을 입력해주세요." />
      <SignInput label="비밀번호" placeholer="비밀번호를 입력해주세요." />
      <ConfirmBtn btnName="확인" />
      <p className="text-xs text-gray-500 mt-3">
        Literally you probably haven't heard of them jean shorts.
      </p>
    </SignWrapper>
  );
}

export default SignUpPage;
