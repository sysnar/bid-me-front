import styled from "@emotion/styled/macro";
import tw from "twin.macro";

export function SearchResult2() {
  return (
    <BidDataWrapper>
      <BidData></BidData>
      <BidData></BidData>
      <BidData></BidData>
    </BidDataWrapper>
  );
}

const BidDataWrapper = styled.div([tw`flex flex-wrap -m-12`]);

function BidData() {
  return (
    <div className="p-12 md:w-1/2 flex flex-col items-start">
      <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">
        입찰공고
      </span>
      <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
        입찰공고명
      </h2>
      <p className="leading-relaxed mb-8">입찰공고 상세 설명사항</p>
      <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
        <a className="text-indigo-500 inline-flex items-center">
          홈페이지에서 보기
          <svg
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
        </a>
        <span className="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
          <svg
            className="w-4 h-4 mr-1"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
          1.2K
        </span>
        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
          <svg
            className="w-4 h-4 mr-1"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
          </svg>
          6
        </span>
      </div>
    </div>
  );
}
