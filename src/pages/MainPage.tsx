import { useNavigate } from "react-router-dom";
import { SearchBanner } from "../components/SearchMenu";

function MainPage() {
  const navigate = useNavigate();
  const onSubmit = (event: any) => {
    if (event.key === "Enter") {
      const keyword = event.target.value;
      navigate(`/search/${keyword}`);
    }
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="lg:w-2/3 mx-auto">
          <div className="flex flex-wrap w-full bg-gray-100 py-28 px-10 relative mb-4">
            <div className="text-center relative z-10 w-full">
              <SearchBanner onKeyPress={onSubmit} />
            </div>
          </div>
          <div className="flex flex-wrap -mx-2">
            <div className="px-2 w-1/2">
              <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                <div className="text-center relative z-10 w-full">
                  <h2 className="text-xl text-gray-900 font-medium title-font mb-2">
                    회원가입!
                  </h2>
                  <p className="leading-relaxed">
                    회원가입으로 입찰공고에 <br />
                    필요한 정보를 제공받으세요!
                  </p>
                  <a className="mt-3 text-indigo-500 inline-flex items-center">
                    회원가입하기
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="px-2 w-1/2">
              <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                <div className="text-center relative z-10 w-full">
                  <h2 className="text-xl text-gray-900 font-medium title-font mb-2">
                    로그인
                  </h2>
                  <p className="leading-relaxed">
                    관심있는 입찰공고 등록하고 <br /> 필요한 정보만
                    전달받으세요!
                  </p>
                  <a className="mt-3 text-indigo-500 inline-flex items-center">
                    로그인하기
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainPage;
