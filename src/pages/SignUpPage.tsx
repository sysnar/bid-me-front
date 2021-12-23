import SignUpBtn from "../components/SignUpBtn";
import { WrapperProps } from "../utils/wrapper.interface";

export function SignUpPage() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center justify-center">
        {/* <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <h1 className="title-font font-medium text-3xl text-gray-900">
            Slow-carb next level shoindcgoitch ethical authentic, poko scenester
          </h1>
          <p className="leading-relaxed mt-4">
            Poke slow-carb mixtape knausgaard, typewriter street art gentrify
            hammock starladder roathse. Craies vegan tousled etsy austin.
          </p>
        </div> */}
        <div className="lg:w-3/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col  w-full mt-10 md:mt-0">
          <SignUpHeading>회원가입</SignUpHeading>
          <SignUpInput label="아이디" placeholer="아이디를 입력해주세요." />
          <SignUpInput label="Email" placeholer="Email을 입력해주세요." />
          <SignUpInput label="비밀번호" placeholer="비밀번호를 입력해주세요." />
          <SignUpBtn btnName="확인" />
          <p className="text-xs text-gray-500 mt-3">
            Literally you probably haven't heard of them jean shorts.
          </p>
        </div>
      </div>
    </section>
  );
}

function SignUpHeading({ children }: WrapperProps) {
  return (
    <h2 className="text-gray-900 text-2xl font-medium title-font mb-5">
      {children}
    </h2>
  );
}

function SignUpInput(porps: any) {
  const { label, placeholer } = porps;
  return (
    <div className="relative mb-4">
      <label htmlFor="email" className="leading-7 text-sm text-gray-600">
        {label}
      </label>
      <input
        type="email"
        id="email"
        name="email"
        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder={placeholer}
      />
    </div>
  );
}

export default SignUpPage;
