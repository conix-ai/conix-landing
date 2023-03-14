import MainLayout from "@/layouts/MainLayout";
import React, { useEffect, useState } from "react";
import { HiPlay } from "react-icons/hi";
import FeatureCard from "@/components/FeatureCard";
import SectionTitle from "@/components/SectionTitle";
import Link from "next/link";
import ClientService from "@/services/client.service";
import Gallery from "@/components/elements/Gallery";
import clsx from "clsx";
import TeamMemberService from "@/services/teamMember.service";
import { steps } from "@/constants/home";
import BlogService from "@/services/blog.service";
import Slider from "@/components/elements/Slider";
import { chunk } from "@/utils/array";
import moment from "moment";
import FaqService from "@/services/faq.service";
import Accordion from "@/components/elements/Accordion";

const Layout = ({ children }: any) => {
  return <MainLayout>{children}</MainLayout>;
};

export type HomeProps = {};
const Home = (props: HomeProps) => {
  const [clients, setClients] = useState([]);
  const [trustedClients, setTrustedClients] = useState([]);
  const [teamMembers, setTeamMembers] = useState([]);
  const [latestBlogArticles, setLatestBlogArticles] = useState<any[]>([]);
  const [faqs, setFaqs] = useState([]);

  const getClients = async () => {
    const res = await ClientService.getClients();
    setClients(res.data.clients);
  };
  const getTrustedClients = async () => {
    const res = await ClientService.getTrustedClients();
    setTrustedClients(res.data.clients);
  };
  const getTeamMembers = async () => {
    const res = await TeamMemberService.getTeamMembers();
    setTeamMembers(res.data.teamMembers);
  };
  const getLatestBlogArticles = async () => {
    const res = await BlogService.getLatestBlogArticles();
    setLatestBlogArticles(res.data.blogs);
  };
  const getFaqs = async () => {
    const res = await FaqService.getFaqs(4);
    setFaqs(res.data.commonQuestions);
  };

  useEffect(() => {
    getClients();
    getTrustedClients();
    getTeamMembers();
    getLatestBlogArticles();
    getFaqs();
  }, []);

  return (
    <div className="page" id="home">
      {/* header */}
      <header className="flex flex-col">
        <div className="container m-auto">
          <div className="flex flex-col gap-12 justify-center my-auto">
            <div className="content">
              <h1 className="font-serif text-4xl lg:text-7xl xl:text-9xl capitalize">
                The New <br /> Architecture era
              </h1>
              <p className="text-2xl">Reduce time & resources</p>
            </div>
            <div className="actions flex flex-wrap gap-4">
              <button className="btn btn-primary">Start Now</button>
              <button className="btn btn-outline bg-white">
                <div className="flex items-center gap-2">
                  <HiPlay className="icon" />
                  <span>Watch Video</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>
      {/* features */}
      <section className="bg-black text-white" id="features">
        <div className="container mx-auto">
          <div className="feats grid grid-cols-1 lg:grid-cols-3 relative -top-24 z-0">
            <FeatureCard
              title={`+10 \n Various designs`}
              description="Provided with many options will reveal different potentials"
              image="/assets/home/features/design.svg"
              color="bg-primary-600"
            ></FeatureCard>
            <FeatureCard
              title={`20X \n less time and effort`}
              description="There aren’t limits to creating designs, but tens of solutions
              in few hours."
              image="/assets/home/features/time.svg"
              color="bg-primary-500"
            ></FeatureCard>
            <FeatureCard
              title={`50% \n Increase sales volume`}
              description="Saving human resources will help in selling more lands in no
              time."
              image="/assets/home/features/sales.svg"
              color="bg-primary-400"
            ></FeatureCard>
          </div>

          <SectionTitle title="Works in easy steps" className="text-white" />

          <div className="py-4">
            <Gallery options={steps}>
              <div className="grid grid-cols-3 items-center gap-8">
                <div className="col-span-3 lg:col-span-2">
                  <Gallery.Preview />
                </div>
                <div className="col-span-3 lg:col-span-1 flex flex-col items-center lg:items-end lg:px-24">
                  <Gallery.Dots>
                    {steps.map((step, idx) => (
                      <>
                        <Gallery.Dot key={idx} idx={idx}>
                          {(isActive: boolean) => (
                            <div
                              className={clsx(
                                "flex items-center gap-2",
                                isActive ? "text-white" : "text-gray-600"
                              )}
                            >
                              <span
                                className={clsx(
                                  "w-8 h-8 flex border rounded-full",
                                  isActive ? "border-white" : "border-gray-600"
                                )}
                              >
                                <span className="m-auto">{idx + 1}</span>
                              </span>
                              <p>{step.title}</p>
                            </div>
                          )}
                        </Gallery.Dot>
                        {idx < steps.length - 1 && (
                          <span className="line block m-4 border-l h-12 border-gray-600"></span>
                        )}
                      </>
                    ))}
                  </Gallery.Dots>
                  <div className="my-8">
                    <Gallery.Controls />
                  </div>
                </div>
              </div>
            </Gallery>
          </div>
        </div>
      </section>
      {/* key features */}
      <section className="bg-opacity-40" id="keyFeatures">
        <div className="container mx-auto">
          <div className="head flex flex-wrap items-center justify-between">
            <SectionTitle title="Key Features of CONIX" />
            <Link href="/" className="text-black underline">
              see more
            </Link>
          </div>

          <div className="feats grid grid-cols-1 lg:grid-cols-3 gap-8 py-8">
            <div className="feat flex flex-col items-center gap-4">
              <div className="icon">
                <img src="/assets/home/key-features/feat-1.svg" alt="" />
              </div>
              <p className="description text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                sapien ligula, pretium eget massa egestas, malesuada convallis
                nulla. Cras
              </p>
            </div>
            <div className="feat flex flex-col items-center gap-4">
              <div className="icon">
                <img src="/assets/home/key-features/feat-2.svg" alt="" />
              </div>
              <p className="description text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                sapien ligula, pretium eget massa egestas, malesuada convallis
                nulla. Cras
              </p>
            </div>
            <div className="feat flex flex-col items-center gap-4">
              <div className="icon">
                <img src="/assets/home/key-features/feat-3.svg" alt="" />
              </div>
              <p className="description text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                sapien ligula, pretium eget massa egestas, malesuada convallis
                nulla. Cras
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-black text-white" id="certified">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-12">
            <img
              className="w-48 h-48 rounded-full"
              src="/assets/home/certified/certified.png"
              alt=""
            />
            <h1 className="font-normal">
              CONIX is certified according to Saudi building code, which means
              ready to build & hustle free designs.
            </h1>
          </div>
        </div>
      </section>
      {/* testimonials */}
      <section id="testimonials">
        <div className="container mx-auto">
          <SectionTitle title="People are talking" />
        </div>
      </section>
      {/* clients */}
      <section className="bg-primary text-white" id="clients">
        <div className="container mx-auto">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <h3>Trusted by</h3>
              {trustedClients.map((client: any) => (
                <img
                  key={client.id}
                  className="w-48 h-12 object-cover"
                  src={client.logo}
                  alt=""
                />
              ))}
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <h3>Our clients</h3>
              {clients.map((client: any) => (
                <img
                  key={client.id}
                  className="w-48 h-12 object-cover"
                  src={client.logo}
                  alt=""
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* case studies */}
      <section className="bg-black text-white" id="caseStudies">
        <div className="container mx-auto">
          <SectionTitle title="Case Studies"></SectionTitle>

          <Gallery options={steps}>
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-3 lg:col-span-2">
                <Gallery.Preview></Gallery.Preview>
              </div>
              <div className="col-span-3 lg:col-span-1">
                <Gallery.Dots>
                  <div className="flex flex-row lg:flex-col gap-4">
                    {steps.map((step, idx) => (
                      <>
                        <Gallery.Dot key={idx} idx={idx}>
                          {(isActive: boolean) => (
                            <div className="">
                              <img
                                className={clsx(
                                  "w-36 h-20 object-cover p-1",
                                  isActive ? "opacity-100 border" : "opacity-50"
                                )}
                                src={step.preview}
                                alt=""
                              />
                            </div>
                          )}
                        </Gallery.Dot>
                      </>
                    ))}
                  </div>
                </Gallery.Dots>
              </div>
            </div>
          </Gallery>

          <h3>More case studies</h3>
        </div>
      </section>
      {/* sample */}
      <section className="bg-black text-white">
        <div className="container mx-auto">
          <div className="flex flex-col gap-8 items-center">
            <h1 className="text-4xl font-serif">Lead magnet section</h1>
            <button className="btn btn-primary">Download project sample</button>
          </div>
        </div>
      </section>
      {/* events */}
      <section id="upcomingEvents">
        <div className="container mx-auto">
          <div className="head flex flex-wrap items-center justify-between">
            <SectionTitle title="Upcoming Events"></SectionTitle>
            <Link href="/">See more</Link>
          </div>
        </div>
      </section>

      {/* blog */}
      <section className="bg-black text-white py-12" id="blog">
        <div className="container mx-auto">
          <div className="head flex flex-wrap items-center justify-between">
            <SectionTitle title="Read our blog"></SectionTitle>
            <Link href="/">See more</Link>
          </div>

          <Slider options={chunk(latestBlogArticles, 2)}>
            <div className="my-4">
              {chunk(latestBlogArticles, 2).map((slide, idx) => (
                <Slider.Slide key={idx} idx={idx}>
                  <div className="slide grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {slide.map((article, idx) => (
                      <div className="article" key={article.id}>
                        <div className="bg-neutral-900 p-4">
                          <img
                            className="w-full h-64 object-cover"
                            src={article.image}
                            alt=""
                          />
                          <div className="flex justify-between">
                            <p>{article.category}</p>
                            <p>
                              {moment(article.createdAt).format("DD MMMM YYYY")}
                            </p>
                          </div>
                          <h2>{article.title}</h2>
                          <p>{article.description}</p>
                          <Link
                            className="text-white underline"
                            href={`articles/${article.slug}`}
                          >
                            See more
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </Slider.Slide>
              ))}
            </div>
            <div className="flex justify-end">
              <Slider.Controls />
            </div>
          </Slider>
        </div>
      </section>

      {/* our team */}
      <section id="team">
        <div className="container mx-auto">
          <div className="head flex justify-between">
            <SectionTitle title="our team"></SectionTitle>
            <Link href="/">See more</Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4 my-4">
            {teamMembers.map((member: any) => (
              <div className="flex flex-col items-center gap-2" key={member.id}>
                <img
                  className="rounded-full w-48 h-48 object-cover"
                  src={member.image}
                  alt=""
                />
                <p>{member.name}</p>
                <h5>{member.title}</h5>
                <p>{member.brief}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* faqs */}
      <section className="bg-black text-white" id="faqs">
        <div className="container mx-auto">
          <h2>Frequently asked questions (FAQs)</h2>

          <div className="faqs flex flex-col gap-4 my-4">
            {faqs.map((faq: any) => (
              <Accordion title={faq.question} key={faq.id}>
                <p>{faq.answer}</p>
              </Accordion>
            ))}
          </div>

          <Link className="text-white underline" href="/faqs">
            See more
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
Home.Layout = Layout;
