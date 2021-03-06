import React, { FC, Fragment } from "react";
import { Header } from "../components/organism/Header";
import { Contents } from "../components/organism/Contents";



const Home: FC = () => {
  return (
    <Fragment>
      <Header />
      <Contents />
    </Fragment>
  );
}

export { Home };