export function KeywordPage() {
  return (
    <div className="flex justify-center">
      <div className="w-4/5 md:w-3/5 min-h-screen ">
        <div className="mt-24 font-bold text-lg">관심 키워드 등록</div>
        <div className="flex flex-row mt-4 bg-gray-200 py-6">
          <div className="text-gray-500 ml-4 flex items-center">
            관심있는 키워드를 등록하시면 매주 월요일 관련 입찰공고 정보를 메일로
            보내드립니다.
          </div>
          <div className="ml-auto relative mr-4">
            <input className="border-4 rounded-lg pl-8 py-2 mr-2" />
            <div className="top-3 left-2 absolute invisible md:visible">
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
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </div>
            <button className="rounded-lg bg-gray-500 text-white px-4 py-2">
              등록
            </button>
          </div>
        </div>
        <div className="border py-8 flex">
          {/* 반복 */}
          <div className="flex items-center pl-4">
            숙박
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
