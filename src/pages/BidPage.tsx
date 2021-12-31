import { useNavigate } from "react-router-dom";
import { SearchBanner } from "../components/SearchMenu";

export function BidPage() {
  const navigate = useNavigate();
  const onSubmit = (event: any) => {
    if (event.key === "Enter") {
      const keyword = event.target.value;
      navigate(`/office/search/${keyword}`);
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="text-center relative z-10 w-4/5 mb-64">
        <SearchBanner onKeyPress={onSubmit} />
      </div>
    </div>
  );
}
