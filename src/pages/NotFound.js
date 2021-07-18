import { Link } from "react-router-dom";
import classes from "./NoQuotesFound.module.css";
const NotFound = () => {
  return (
    <div className={classes.noquotes}>
      <p>Not quotes found!</p>
      <Link className="btn" to="/new-quote">
        Add a Quote
      </Link>
    </div>
  );
};

export default NotFound;
