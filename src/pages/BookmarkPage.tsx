import { Container } from "../components/Container";
import { SearchResult1 } from "../components/SearchResult1";
import { SearchTitleWrapper } from "./SearchPage";
import { useAuth } from "../utils/auth";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import axios from "axios";

export function BookmarkPage() {
  const [boomark, setBookmark] = useState([]);
  useEffect(() => {
    const accessToken = Cookies.get("Token");
    axios
      .get(`http://localhost:4000/bookmark`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        console.log(response.data.data);
        setBookmark(response.data.data);
      });
  }, []);

  return (
    <div className="flex justify-center">
      <div className="w-4/5 md:w-3/5 ">
        <Container>
          <SearchTitleWrapper>
            <SearchResult1 bookmarkData={boomark}></SearchResult1>
          </SearchTitleWrapper>
        </Container>
      </div>
    </div>
  );
}
