import { useState } from "react";
import SearchBar from "../components/SearchBar";

const SearchPage = () => {
  const [events, setEvents] = useState(<></>);

  return (
    <div className="search-page">
      <SearchBar {...{ setEvents }} />
      {events}
    </div>
  );
};

export default SearchPage;
