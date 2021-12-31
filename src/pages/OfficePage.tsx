import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MyResponsiveLine } from "../components/ResponsiveLine";

function OfficePage() {
  return (
    <div className="min-h-screen">
      <div className="flex flex-col ">
        <div className="ml-12 my-4 pt-2 font-bold text-lg">
          [2021년 입찰공고 마감일]
        </div>
        <MyResponsiveLine data={data1} />
      </div>
      <div className="flex flex-row mt-6">
        <KeywordManage />
        <BidRandom />
        <KeywordRaking />
      </div>
    </div>
  );
}
export function KeywordManage() {
  return (
    <div className="w-1/3 ml-12 border-2 rounded-lg">
      <Link to="/office/keyword">
        <div className="border-b-2 px-4 py-2 font-bold text-lg">
          키워드 관리 바로가기
        </div>
        <div className="text-center mt-36">
          키워드 등록으로 매주 월요일
          <br />
          관련된 입찰공고 정보를 제공받으세요!
        </div>
      </Link>
    </div>
  );
}

export function BidRandom() {
  let [bidData, setDidData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:4000/bid/random").then((response) => {
      setDidData(response.data.data);
    });
  }, []);

  return (
    <div className="w-1/3 ml-6 border-2 rounded-lg">
      <div className="border-b-2 px-4 py-2 font-bold text-lg">
        추천 입찰공고
      </div>
      {bidData.map((data: any, index) => {
        return (
          <div className="flex flex-row mx-4 py-4 border-b text-base">
            <div className="pr-4 font-bold">{index + 1}</div>
            <a
              href={data.bidNtceDtlUrl}
              target="_blank"
              className="hover:text-blue-600"
            >
              {data.bidNtceNm}
            </a>
          </div>
        );
      })}
    </div>
  );
}

export function KeywordRaking() {
  return (
    <div className="w-1/3 ml-6 mr-12 border-2 flex flex-col rounded-lg">
      <div className="border-b-2 px-4 py-2 font-bold text-lg">
        많이 검색된 키워드 순위
      </div>
      <div className="flex flex-row mx-4 py-4 border-b text-base">
        <div className="pr-4 font-bold">1</div> 빅데이터
      </div>
      <div className="flex flex-row mx-4 py-4 border-b text-base">
        <div className="pr-4 font-bold">1</div> 빅데이터
      </div>
      <div className="flex flex-row mx-4 py-4 border-b text-base">
        <div className="pr-4 font-bold">1</div> 빅데이터
      </div>
      <div className="flex flex-row mx-4 py-4 border-b text-base">
        <div className="pr-4 font-bold">1</div> 빅데이터
      </div>
      <div className="flex flex-row mx-4 py-4 border-b text-base">
        <div className="pr-4 font-bold">1</div> 빅데이터
      </div>
      <div className="flex flex-row mx-4 py-4 border-b text-base">
        <div className="pr-4 font-bold">1</div> 빅데이터
      </div>
    </div>
  );
}

export default OfficePage;
const data1 = [
  {
    id: "입찰 마감 공고수",
    color: "hsl(176, 70%, 50%)",
    data: [
      {
        x: "1월",
        y: 201,
      },
      {
        x: "2월",
        y: 113,
      },
      {
        x: "3월",
        y: 55,
      },
      {
        x: "4월",
        y: 38,
      },
      {
        x: "5월",
        y: 85,
      },
      {
        x: "6월",
        y: 271,
      },
      {
        x: "7월",
        y: 179,
      },
      {
        x: "8월",
        y: 11,
      },
      {
        x: "9월",
        y: 132,
      },
      {
        x: "10월",
        y: 27,
      },
      {
        x: "11월",
        y: 144,
      },
      {
        x: "12월",
        y: 34,
      },
    ],
  },
];
