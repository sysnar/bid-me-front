import { WrapperProps } from "../utils/wrapper.interface";

export function SearchButton({ onKeyPress }: any) {
  return (
    <SearchMenuWrapper>
      <SearchMenuTitle />
      <SearchMenuInput onKeyPress={onKeyPress} />
      <SearchMenuBottom />
    </SearchMenuWrapper>
  );
}

function SearchMenuWrapper({ children }: WrapperProps) {
  return (
    <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-0 md:pr-0 flex flex-col md:items-center mb-16 md:mb-0 items-center text-center">
        {children}
      </div>
    </div>
  );
}

function SearchMenuTitle() {
  return (
    <h1 className="title-font sm:text-4xl text-3xl mb-12 font-medium text-gray-900">
      필요한 입찰공고를 간편하게 검색하세요!
    </h1>
  );
}

function SearchMenuInput({ onKeyPress }: any) {
  return (
    <div className="flex w-full md:justify-center justify-center items-end">
      <div className="relative mx-1 md:mx-24 w-full">
        <label
          htmlFor="hero-field"
          className="leading-7 text-sm text-gray-600"
        ></label>
        <div className="relative h-full">
          <input
            type="text"
            id="hero-field"
            name="hero-field"
            className="w-full bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out pl-3 md:pl-10"
            placeholder="입찰공고명 검색 혹은 키워드 입력"
            onKeyPress={onKeyPress}
          />
          <div className="h-full left-2 absolute top-3 invisible md:visible">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function SearchMenuBottom() {
  return (
    <p className="text-sm mt-2 text-gray-500 w-full">가장 쉬운 입찰공고 검색</p>
  );
}
