import { paths } from "@/shared/constant/paths";
import { Link } from "react-router-dom";
import * as classes from "./Navigation.module.scss";
export const Navigation = () => {
  return (
    <nav className={classes.navigation}>
      <ul>
        <li>
          <Link to={paths.MAIN}>Main</Link>
        </li>
        <li>
          <Link to={`${paths.SECOND}/1`}>Secondary</Link>
        </li>
        <li>
          <Link to={"/nonexisting"}>Non existing</Link>
        </li>
      </ul>
    </nav>
  );
};
