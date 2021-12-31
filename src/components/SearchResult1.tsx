import styled from "@emotion/styled/macro";
import tw from "twin.macro";

export function SearchResult1({ bookmarkData }: any) {
  return (
    <BidDataWrapper>
      {bookmarkData.map((bid: any) => {
        return <BidData bid={bid} />;
      })}
    </BidDataWrapper>
  );
}

const BidDataWrapper = styled.div([tw`-my-8 divide-y-2 divide-gray-100`]);

function BidData({ bid }: any) {
  return (
    <div className="py-8 flex flex-wrap md:flex-nowrap">
      <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
        <span className="font-semibold title-font text-gray-700">북마크</span>
      </div>
      <div className="md:flex-grow">
        <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
          {bid.bid.bidNtceNm}
        </h2>

        <a
          href={bid.bid.bidNtceDtlUrl}
          target="_blank"
          className="text-indigo-500 inline-flex items-center mt-4"
        >
          입찰공고 페이지
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
      </div>
    </div>
  );
}
