import { Fragment } from "react";
import ImageView from "../components/ImageView";
import BackBtn from "./BackBtn";
import DayNightMood from "./DayNightMood";
import Header from "./Header";
const Layout = ({ children, blog }) => {
  return (
    <Fragment>
      <ImageView />
      <Header blog={blog} />
      <main className="main-left pp-main-section">{children}</main>
      <DayNightMood />
      {blog && <BackBtn />}
    </Fragment>
  );
};
export default Layout;
