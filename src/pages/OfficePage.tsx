import { MyResponsiveLine } from "../components/ResponsiveLine";

function OfficePage() {
  return (
    <div className="min-h-screen">
      <div className="flex flex-col ">
        <div className="ml-12 my-4 pt-2 font-bold text-lg">
          [관심 입찰공고 상위 5개 조회수 변화 추이]
        </div>
        <MyResponsiveLine data={data1} />
      </div>
      <div className="flex flex-row mt-6">
        <KeywordManage />
        <BidDueday />
        <KeywordRaking />
      </div>
    </div>
  );
}
export function KeywordManage() {
  return (
    <div className="w-1/3 ml-12 border-2 rounded-lg">
      <div className="border-b-2 px-4 py-2 font-bold text-lg">
        키워드 관리 바로가기
      </div>
    </div>
  );
}

export function BidDueday() {
  return (
    <div className="w-1/3 ml-6 border-2 rounded-lg">
      <div className="border-b-2 px-4 py-2 font-bold text-lg">
        마감예정 입찰공고
      </div>
      <div className="flex flex-row mx-4 py-4 border-b text-base">
        <div className="pr-4 font-bold">1</div> ~~~~~~~~~~~~에 대한 입찰공고
        <div className="ml-auto text-red-600">~ 12/31</div>
      </div>
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
    id: "japan",
    color: "hsl(176, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 201,
      },
      {
        x: "helicopter",
        y: 113,
      },
      {
        x: "boat",
        y: 55,
      },
      {
        x: "train",
        y: 38,
      },
      {
        x: "subway",
        y: 85,
      },
      {
        x: "bus",
        y: 271,
      },
      {
        x: "car",
        y: 179,
      },
      {
        x: "moto",
        y: 11,
      },
      {
        x: "bicycle",
        y: 132,
      },
      {
        x: "horse",
        y: 27,
      },
      {
        x: "skateboard",
        y: 144,
      },
      {
        x: "others",
        y: 34,
      },
    ],
  },
  {
    id: "france",
    color: "hsl(175, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 151,
      },
      {
        x: "helicopter",
        y: 134,
      },
      {
        x: "boat",
        y: 70,
      },
      {
        x: "train",
        y: 23,
      },
      {
        x: "subway",
        y: 294,
      },
      {
        x: "bus",
        y: 74,
      },
      {
        x: "car",
        y: 258,
      },
      {
        x: "moto",
        y: 55,
      },
      {
        x: "bicycle",
        y: 189,
      },
      {
        x: "horse",
        y: 243,
      },
      {
        x: "skateboard",
        y: 218,
      },
      {
        x: "others",
        y: 232,
      },
    ],
  },
  {
    id: "us",
    color: "hsl(277, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 222,
      },
      {
        x: "helicopter",
        y: 166,
      },
      {
        x: "boat",
        y: 39,
      },
      {
        x: "train",
        y: 25,
      },
      {
        x: "subway",
        y: 118,
      },
      {
        x: "bus",
        y: 55,
      },
      {
        x: "car",
        y: 136,
      },
      {
        x: "moto",
        y: 17,
      },
      {
        x: "bicycle",
        y: 97,
      },
      {
        x: "horse",
        y: 296,
      },
      {
        x: "skateboard",
        y: 9,
      },
      {
        x: "others",
        y: 155,
      },
    ],
  },
  {
    id: "germany",
    color: "hsl(262, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 285,
      },
      {
        x: "helicopter",
        y: 34,
      },
      {
        x: "boat",
        y: 258,
      },
      {
        x: "train",
        y: 299,
      },
      {
        x: "subway",
        y: 190,
      },
      {
        x: "bus",
        y: 11,
      },
      {
        x: "car",
        y: 110,
      },
      {
        x: "moto",
        y: 273,
      },
      {
        x: "bicycle",
        y: 25,
      },
      {
        x: "horse",
        y: 127,
      },
      {
        x: "skateboard",
        y: 295,
      },
      {
        x: "others",
        y: 143,
      },
    ],
  },
  {
    id: "norway",
    color: "hsl(313, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 17,
      },
      {
        x: "helicopter",
        y: 175,
      },
      {
        x: "boat",
        y: 254,
      },
      {
        x: "train",
        y: 171,
      },
      {
        x: "subway",
        y: 19,
      },
      {
        x: "bus",
        y: 226,
      },
      {
        x: "car",
        y: 191,
      },
      {
        x: "moto",
        y: 254,
      },
      {
        x: "bicycle",
        y: 192,
      },
      {
        x: "horse",
        y: 173,
      },
      {
        x: "skateboard",
        y: 236,
      },
      {
        x: "others",
        y: 21,
      },
    ],
  },
];
