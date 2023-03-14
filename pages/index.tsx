import MainLayout from "@/layouts/MainLayout";
import React, { useEffect, useState } from "react";
import { HiChevronRight, HiPlay } from "react-icons/hi";
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
import Carousel from "react-slick";
import TestimonialService from "@/services/testimonial.service";
import EventService from "@/services/event.service";
import CaseStudyService from "@/services/caseStudy.service";

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
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [upcomingEvents, setUpcomingEvents] = useState<any[]>([]);
  const [caseStudies, setCaseStudies] = useState<any[]>([]);

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
  const getTestimonials = async () => {
    const res = await TestimonialService.getTestimonial();
    setTestimonials(res.data.testimonials);
  };
  const getUpcomingEvents = async () => {
    const res = await EventService.getUpcomingEvents(4);
    setUpcomingEvents(res.data.events);
  };
  const getCaseStudies = async () => {
    const res = await CaseStudyService.getCaseStudies(4);
    setCaseStudies(res.data.caseStudies);
  };

  useEffect(() => {
    getClients();
    getTrustedClients();
    getTeamMembers();
    getLatestBlogArticles();
    getFaqs();
    getTestimonials();
    getUpcomingEvents();
    getCaseStudies();
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
                <div className="col-span-3 lg:col-span-1 flex flex-col items-center lg:items-end">
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

          <Carousel
            dots
            infinite
            speed={500}
            slidesToShow={1}
            slidesToScroll={1}
            centerMode={true}
            adaptiveHeight
            responsive={[
              {
                breakpoint: 1000,
                settings: {
                  centerMode: false,
                },
              },
            ]}
          >
            {testimonials.map((testimonial) => (
              <div className="p-8" key={testimonial.id}>
                <div className="flex flex-col-reverse lg:flex-row items-center gap-4 lg:gap-24 bg-gray-100 shadow-lg p-1 lg:p-12">
                  <div className="flex-1 flex flex-col gap-4 items-center text-center">
                    <p>{testimonial.commendation}</p>
                    <div className="flex flex-col items-center gap-2">
                      <h4>{testimonial.clientName}</h4>
                      <p>{testimonial.clientTitle}</p>
                    </div>
                  </div>
                  <img
                    className="w-48 h-48 object-cover rounded-full"
                    src={testimonial.clientImage}
                    alt=""
                  />
                </div>
              </div>
            ))}
          </Carousel>
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

          <Gallery options={caseStudies[0]?.gallery}>
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1">
                <Gallery.Preview>
                  {(idx: number) => (
                    <img
                      className="w-full lg:max-h-[500px] object-contain"
                      src={caseStudies[0]?.gallery[idx]}
                      alt=""
                    />
                  )}
                </Gallery.Preview>
              </div>
              <div className="">
                <Gallery.Dots>
                  <div className="flex flex-row lg:flex-col gap-4">
                    {caseStudies[0]?.gallery.map(
                      (image: string, idx: number) => (
                        <>
                          <Gallery.Dot key={idx} idx={idx}>
                            {(isActive: boolean) => (
                              <div className="">
                                <img
                                  className={clsx(
                                    "w-36 h-20 object-cover p-1",
                                    isActive
                                      ? "opacity-100 border"
                                      : "opacity-50"
                                  )}
                                  src={image}
                                  alt=""
                                />
                              </div>
                            )}
                          </Gallery.Dot>
                        </>
                      )
                    )}
                  </div>
                </Gallery.Dots>
              </div>
            </div>
          </Gallery>

          <div className="content">
            <h1>{caseStudies[0]?.title}</h1>

            <div className="grid grid-cols-3 items-center gap-8 py-4">
              <div className="props col-span-3 lg:col-span-1 flex flex-col gap-2">
                <p className="prop text-white">
                  <span className="text-neutral-600">Date: </span>
                  <span>
                    {moment(caseStudies[0]?.createdAt).format("DD MMMM YYYY")}
                  </span>
                </p>
                <p className="prop text-white">
                  <span className="text-neutral-600">Project: </span>
                  <span>{caseStudies[0]?.type}</span>
                </p>
                <p className="prop text-white">
                  <span className="text-neutral-600">Location: </span>
                  <span>{caseStudies[0]?.location}</span>
                </p>
              </div>
              <div className="col-span-3 lg:col-span-2">
                <p className="description text-lg">
                  {caseStudies[0]?.description}
                </p>
              </div>
            </div>
          </div>

          <div className="more">
            <div className="head flex justify-between items-center">
              <SectionTitle title="More case studies" />
              <Link href="/case-studies" className="text-white underline">
                See more
              </Link>
            </div>

            <Slider options={chunk(caseStudies.slice(1), 2)}>
              <div className="my-4">
                {chunk(caseStudies.slice(1), 2).map((slide, idx) => (
                  <Slider.Slide key={idx} idx={idx}>
                    <div className="slide grid grid-cols-1 lg:grid-cols-2 gap-4">
                      {slide.map((caseStudy, idx) => (
                        <div
                          className="card bg-neutral-900 p-4 grid grid-cols-1 lg:grid-cols-2 gap-8"
                          key={caseStudy.id}
                        >
                          <img
                            className="h-full object-cover"
                            src={caseStudy.image}
                            alt=""
                          />
                          <div className="content">
                            <h1>{caseStudy.title}</h1>
                            <p className="text-neutral-500">
                              {moment(caseStudy.createdAt).format(
                                "DD MMMM YYYY"
                              )}
                            </p>
                            <p className="line-clamp-5">
                              {caseStudy.description}
                            </p>

                            <Link
                              className="block mt-8 text-white underline"
                              href={`caseStudies/${caseStudy.id}`}
                            >
                              See More
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {upcomingEvents.map((event) => (
              <div
                className="card bg-gray-50 p-4 border flex flex-col gap-2"
                key={event.id}
              >
                <img src={event.image} alt="" />
                <div className="sub flex flex-wrap justify-between">
                  <p className="text-neutral-500">{event.type}</p>
                  <p className="text-neutral-500">
                    {moment(event.createdAt).format("DD MMMM YYYY")}
                  </p>
                </div>
                <h1>{event.title}</h1>
                <p>{event.description}</p>
                <div className="mt-8">
                  <Link
                    className="text-black flex flex-wrap items-center gap-8"
                    href={`/events/${event.id}`}
                  >
                    <span>Register</span>
                    <HiChevronRight />
                  </Link>
                </div>
              </div>
            ))}
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
                      <div
                        className="article bg-neutral-900 flex flex-col gap-4"
                        key={article.id}
                      >
                        <div className="p-4">
                          <img
                            className="w-full h-64 object-cover"
                            src={article.image}
                            alt=""
                          />
                          <div className="content py-2">
                            <div className="flex justify-between">
                              <p className="text-neutral-500">
                                {article.category}
                              </p>
                              <p className="text-neutral-500">
                                {moment(article.createdAt).format(
                                  "DD MMMM YYYY"
                                )}
                              </p>
                            </div>
                            <h2 className="line-clamp-2">{article.title}</h2>
                            <p className="line-clamp-3">
                              {article.description}
                            </p>
                            <Link
                              className="text-white underline"
                              href={`articles/${article.slug}`}
                            >
                              See more
                            </Link>
                          </div>
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
            <Link href="/team">See more</Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4 my-4">
            {teamMembers.map((member: any) => (
              <div className="flex flex-col items-center gap-2" key={member.id}>
                <img
                  className="rounded-full w-48 h-48 object-cover"
                  src={member.image}
                  alt=""
                />
                <p className="text-2xl">{member.name}</p>
                <p className="text-neutral-600">{member.title}</p>
                <p className="text-lg text-center">{member.brief}</p>
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
