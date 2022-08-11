import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Search() {
    const [query, setQuery] = useSearchParams();
    const search = query.get("search");
  
    const [isValid, setIsValid] = useState(false);
    useEffect(() => {
      if (search != null) {
        if (search.length >= 3) {
          setIsValid(true);
        } else {
          setIsValid(false);
        }
      }
    }, [search]);
  
    const handleSubmit = (e) => {
      e.preventDefault();
    };
  
    const handleChange = (e) => {
      const value = e.target.value;
      setQuery({ search: value });
    };

    return (
        <form className="card card-sm" onSubmit={handleSubmit}  role="search">
            <div className="card-body row no-gutters align-items-center">
                <div className="col-auto">
                <i className="fas fa-search h4 text-body"></i>
                </div>
                <div className="col">
                    <input className="form-control form-control-lg form-control-borderless" type="search" placeholder="Enter at least 3 characters to search for a news..." autoFocus={true} value={search} onChange={handleChange} />
                </div>
                <div className="col-auto">
                    <button className="btn btn-lg btn-success" type="submit" disabled={!isValid} data-testid="button">Search</button>
                </div>
            </div>
        </form>
    );
};

export default Search;

