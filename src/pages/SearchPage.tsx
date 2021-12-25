import styled from "@emotion/styled";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import tw from "twin.macro";
import { Container } from "../components/Container";
import { SearchResult1 } from "../components/SearchResult1";
import { SearchResult2 } from "../components/SearchResult2";

export default function SearchPage() {
  const { keyword } = useParams();
  const [bid, setBid] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/bid/${keyword}`)
      .then((response) => setBid(response.data));
  }, []);

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <Container>
        <SearchTitleWrapper>
          <h1 className="sm:text-5xl text-2xl font-bold title-font mb-4 text-gray-700 ">
            검색결과
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            검색 키워드 : {keyword}
          </p>
        </SearchTitleWrapper>
        <SearchResult2 bidData={bid} />
      </Container>
    </section>
  );
}

const SearchTitleWrapper = styled.div([
  tw`flex flex-col text-center w-full mb-12`,
]);
