import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  return (
      <div className="navbar navbar-dark bg-dark shadow-sm">
        <div className="container">
          <a href="home" className="navbar-brand d-flex align-items-center">
            <FontAwesomeIcon icon={faNewspaper} />
            &nbsp;
            <strong>NewsFinder</strong>
          </a>
        </div>
      </div>
  );
}

export default Header;