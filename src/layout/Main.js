import React, { createContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Header from "../components/Header/Header";

export const TopicsContext = createContext([]);
const Main = () => {
  const topicsData = useLoaderData();
  const topics = topicsData.data;
  console.log(topics);
  return (
    <div>
      <TopicsContext.Provider value={topics}>
        <Header></Header>
        <Outlet></Outlet>
      </TopicsContext.Provider>
    </div>
  );
};

export default Main;
