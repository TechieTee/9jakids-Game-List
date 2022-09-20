import MenuSelect from "./GroupSelect";
import LevelSelect from "./LevelSelect";
import * as FaIcons from "react-icons/fa";
import * as HiIcons from "react-icons/hi";

const Search = ({
  query,
  handleSubmit,
  handleChange,
  handleAcademic,
  handleFinLit,
  handleFinLevel,
  handleKeyStage1,
  handleKeyStage2,
  refresh,
}) => {
  return (
    <div >
      <div className="SearchWrapper"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={query}
              onChange={handleChange}
              placeholder="Search Game by Topic"
            />
            <button className="search-btn border rounded-r" type="submit">
              <FaIcons.FaSearch className="h-5 w-5" />
            </button>
          </form></div><div>
          <button
            type="submit"
            className="search-btn border rounded-r ml-2.5"
            onClick={refresh}
            title="Click to Refresh Page"
            aria-label="Click to Refresh Page"
          >
            <HiIcons.HiRefresh />
          </button>
        </div>
        <div>
          <MenuSelect
            handleAcademic={handleAcademic}
            handleFinLit={handleFinLit}
          />  </div>
          <div> <LevelSelect
            handleKeyStage1={handleKeyStage1}
            handleKeyStage2={handleKeyStage2}
            handleFinLevel={handleFinLevel}
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
