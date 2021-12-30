import { Container } from "../components/Container";
import { SearchResult1 } from "../components/SearchResult1";
import { SearchTitleWrapper } from "./SearchPage";

export function BookmarkPage() {
  return (
    <div className="flex justify-center">
      <div className="w-4/5 md:w-3/5 ">
        <Container>
          <SearchTitleWrapper>
            <SearchResult1></SearchResult1>
          </SearchTitleWrapper>
        </Container>
      </div>
    </div>
  );
}
