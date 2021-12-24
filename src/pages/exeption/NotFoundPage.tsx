import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import tw from "twin.macro";
import ConfirmBtn from "../../components/ConfirmBtn";
import { ContainerFlex } from "../../components/Container";

function NotFoundPage() {
  return (
    <ContainerFlex>
      <PageWrapper>
        <NotFoundTitle>BiD-ME! </NotFoundTitle>
        <NotFoundError>페이지를 찾을 수 없습니다. </NotFoundError>
        <NotFoundDescription>
          링크를 잘못 입력하셨거나 페이지가 삭제/이동되었을 수 있습니다.
        </NotFoundDescription>
        <div className="justify-center w-full">
          <Link to="/">
            <ConfirmBtn btnName="메인으로 돌아가기"></ConfirmBtn>
          </Link>
        </div>
      </PageWrapper>
    </ContainerFlex>
  );
}

const PageWrapper = styled.div([
  tw`flex flex-col text-center w-full h-full my-12`,
]);
const NotFoundTitle = styled.div([tw`text-4xl mt-12`]);
const NotFoundError = styled.div([tw`text-4xl mt-6 font-bold`]);
const NotFoundDescription = styled.div([tw`text-base mt-6`]);

export default NotFoundPage;
