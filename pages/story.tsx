import FeatureCard from "@/components/FeatureCard";
import SectionTitle from "@/components/SectionTitle";
import Gallery from "@/components/elements/Gallery";
import { journey } from "@/constants/story";
import MainLayout from "@/layouts/MainLayout";
import clsx from "clsx";
import Link from "next/link";
import React from "react";
import { HiChevronRight } from "react-icons/hi";

const Layout = ({ children }: any) => {
  return <MainLayout>{children}</MainLayout>;
};

export type StoryProps = {};
const Story = (props: StoryProps) => {
  return (
    <div className="page" id="story">
      <header className="container mx-auto flex flex-col items-start gap-4 mt-24">
        <h1 className="text-4xl lg:text-8xl font-serif">Our Story</h1>
        <p className="text-2xl max-w-lg">
          Lorem ipsum dolorsitamet,consectetur adipiscing elit. Ut sapien
          ligula, pretium eget massaegestas, malesuada conv allis nulla.
        </p>
      </header>

      <section className="bg-black text-white py-24">
        <div className="container mx-auto">
          <SectionTitle title="The Journey" />
        </div>

        <Gallery options={journey}>
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="flex gap-2">
                <Gallery.Dots>
                  <div className="flex flex-col items-end">
                    {journey.map(({ year }, idx) => (
                      <Gallery.Dot key={year} idx={idx}>
                        {(isActive: boolean) => (
                          <div className="year flex gap-1 p-2">
                            <p>{year}</p>
                            <span
                              className={clsx(
                                "w-1 justify-end",
                                isActive && "bg-primary"
                              )}
                            ></span>
                          </div>
                        )}
                      </Gallery.Dot>
                    ))}
                  </div>
                </Gallery.Dots>
                <span className="block w-1 bg-neutral-500"></span>
              </div>
              <Gallery.Preview>
                {(currentIdx: number) => (
                  <>
                    <div className="flex flex-col lg:flex-row gap-8">
                      <div className="content flex flex-col gap-4">
                        <h1>{journey[currentIdx].title}</h1>
                        <p>{journey[currentIdx].description}</p>
                      </div>
                      <img src={journey[currentIdx].image} alt="" />
                    </div>
                  </>
                )}
              </Gallery.Preview>
            </div>
          </div>
        </Gallery>
      </section>

      <section>
        <div className="container mx-auto">
          <SectionTitle title="Our  mission" />
          <div className="bg-neutral-200 p-8 my-4">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <img src="" alt="" />
              <div className="content">
                <p className="text-2xl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  sapien ligula, pretium eget massa egestas, malesuada convallis
                  nulla.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="values" className="pb-0">
        <div className="container mx-auto mb-28">
          <SectionTitle title="Our Values" />
        </div>
        <div className="bg-black text-white">
          <div className="container mx-auto">
            <div className="feats grid grid-cols-1 lg:grid-cols-3 relative -top-24 z-0">
              <FeatureCard
                title="Lorem ipsum"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sapien ligula,"
                image=""
                color="bg-primary-600"
              ></FeatureCard>
              <FeatureCard
                title="Lorem ipsum"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sapien ligula,"
                image=""
                color="bg-primary-500"
              ></FeatureCard>
              <FeatureCard
                title="Lorem ipsum"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sapien ligula,"
                image=""
                color="bg-primary-400"
              ></FeatureCard>
            </div>
          </div>
          <div className="container mx-auto">
            <SectionTitle title="More about us" />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-4">
              <Link className="text-white" href="/team">
                <div className="bg-neutral-900 p-4">
                  <img src="" alt="" />
                  <div className="flex items-center gap-4">
                    <p>Meet our team</p>
                    <HiChevronRight />
                  </div>
                </div>
              </Link>
              <Link className="text-white" href="/careers">
                <div className="bg-neutral-900 p-4">
                  <img src="" alt="" />
                  <div className="flex items-center gap-4">
                    <p>Careers</p>
                    <HiChevronRight />
                  </div>
                </div>
              </Link>
              <Link className="text-white" href="/blog">
                <div className="bg-neutral-900 p-4">
                  <img src="" alt="" />
                  <div className="flex items-center gap-4">
                    <p>Blog and news</p>
                    <HiChevronRight />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

Story.Layout = Layout;
export default Story;
