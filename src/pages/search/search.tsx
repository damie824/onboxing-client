import { useLocation, useSearchParams } from "react-router-dom";
import MainHeader from "../../components/main/header";
import SearchItems from "../../components/search/item";
import "../../styles/search/search.scss";

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();

  console.log(searchParams);

  return (
    <main>
      <MainHeader query={searchParams.get("query") || ""} />
      <p>쿼리: {searchParams.get("query") || ""}</p>
      <SearchItems />
    </main>
  );
}
