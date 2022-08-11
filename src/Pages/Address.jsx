import { useSearchParams } from "react-router-dom";
import ListArtic from "../component/listArtic";
import Search from "../component/search/Search";
import { useD } from "../hook/UseD";


function Address() {
  const [query] = useSearchParams();
  const search = query.get("search");
  const debouncedSearch = useD(search, 900);

  return (
    <>
      <Search data-testid="Search" />
      <ListArtic key={debouncedSearch} search={debouncedSearch}/>
    </>
  )
}

export default Address;