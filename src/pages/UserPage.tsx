export function UserPageAuth() {
  return (
    <div className="w-full h-screen flex flex-col justify-center ">
      <div className="flex flex-col border-2 py-24 px-36 items-center  text-lg rounded">
        <div className="text-4xl font-bold mb-8">비밀번호 확인</div>
        <div className="mb-6 text-center">
          회원님의 정보를 안전하게 보호하기 위해 <br /> 비밀번호를 한번 더
          입력해주세요.
        </div>
        <div className="mb-8">
          비밀번호 <input type="password" className="mx-4 border" />
        </div>
        <div>
          <button className="bg-blue-500 text-white px-9 py-2 rounded hover:bg-blue-600">
            확인
          </button>
        </div>
      </div>
    </div>
  );
}

export function UserPage() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-4/5 md:w-3/5 mt-8">
        <div className="font-bold">개인정보 &gt; 회원정보</div>
        <div className="border rounded-md mt-4 ">
          <div className="bg-gray-100 font-bold pl-4 py-3">프로필</div>
          <div className="flex flex-row pl-4">
            <div className="p-16">IMG</div>
            <div className="flex flex-col p-4 justify-center">
              <div>ksy@cmcom.kr</div>
              <div> ID</div>
            </div>
          </div>
        </div>
        <div className="border rounded-md mt-4 ">
          <div className="bg-gray-100 font-bold pl-4 py-3">소속 그룹정보</div>
          <div className="flex flex-row pl-4">
            <div className="p-16">IMG</div>
            <div className="flex flex-col p-4 justify-center">
              <div>ksy@cmcom.kr</div>
              <div> ID</div>
            </div>
          </div>
        </div>
        <div className="border rounded-md mt-4 ">
          <div className="bg-gray-100 font-bold pl-4 py-3">회원탈퇴</div>
          <div className="flex flex-row pl-4">
            <div className="p-16">IMG</div>
            <div className="flex flex-col p-4 justify-center">
              <div>ksy@cmcom.kr</div>
              <div> ID</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
