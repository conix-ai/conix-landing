import MainLayout from "@/layouts/MainLayout";
import React from "react";
import { PlayIcon } from "@heroicons/react/24/solid";

const Layout = ({ children }: any) => {
  return <MainLayout>{children}</MainLayout>;
};

export type HomeProps = {};
const Home = (props: HomeProps) => {
  return (
    <div className="page flex-1 flex" id="home">
      <div className="flex flex-col gap-12 justify-center">
        <div className="content">
          <h1 className="font-serif text-4xl md:text-7xl xl:text-9xl capitalize">
            The New <br /> Architecture era
          </h1>
          <p className="text-2xl">Reduce time & resources</p>
        </div>
        <div className="actions flex flex-wrap gap-4">
          <button className="btn btn-primary">Start Now</button>
          <button className="btn btn-outline">
            <div className="flex items-center gap-2">
              <PlayIcon className="icon" />
              <span>Watch Video</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
Home.Layout = Layout;
