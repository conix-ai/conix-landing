import MainLayout from "@/layouts/MainLayout";
import React, { useEffect, useState } from "react";
import { HiPlay } from "react-icons/hi";
import FeatureCard from "@/components/FeatureCard";
import SectionTitle from "@/components/SectionTitle";
import Link from "next/link";
import ClientService from "@/services/client";
import Slider from "@/components/elements/Slider";
import clsx from "clsx";
import TeamMemberService from "@/services/teamMember";

const Layout = ({ children }: any) => {
  return <MainLayout>{children}</MainLayout>;
};

export type HomeProps = {};
const Home = (props: HomeProps) => {
  const [clients, setClients] = useState([]);
  const [trustedClients, setTrustedClients] = useState([]);
  const [teamMembers, setTeamMembers] = useState([]);

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

  const steps = [
    {
      preview:
        "http://10.0.0.106:3005/images/trusted-clients/1678012645558976804_253143548161901_1539196888_o.jpg",
      title: "Draw your land on Google maps",
    },
    {
      preview:
        "http://10.0.0.106:3005/images/trusted-clients/167801269939610320955_400578120085109_958196530150646270_o.jpg",
      title: "Enter land needs/ requirements",
    },
    {
      preview:
        "http://10.0.0.106:3005/images/clients/167776777736321427472_1050533955089519_8497251771878268430_o.jpg",
      title: "Submit & receive your designs",
    },
  ];

  useEffect(() => {
    getClients();
    getTrustedClients();
    getTeamMembers();
  }, []);

  return (
    <div className="page" id="home">
      {/* header */}
      <header className="container mx-auto flex flex-col">
        <div className="flex flex-col gap-12 justify-center my-auto">
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
                <HiPlay className="icon" />
                <span>Watch Video</span>
              </div>
            </button>
          </div>
        </div>
      </header>
      {/* features */}
      <section className="bg-black text-white" id="features">
        <div className="container mx-auto">
          <div className="feats grid grid-cols-1 md:grid-cols-3 relative -top-24 z-0">
            <FeatureCard
              title={`+10 \n Various designs`}
              description="Provided with many options will reveal different potentials"
              image=""
              color="bg-primary-600"
            ></FeatureCard>
            <FeatureCard
              title={`20X \n less time and effort`}
              description="There aren’t limits to creating designs, but tens of solutions
              in few hours."
              image=""
              color="bg-primary-500"
            ></FeatureCard>
            <FeatureCard
              title={`50% \n Increase sales volume`}
              description="Saving human resources will help in selling more lands in no
              time."
              image=""
              color="bg-primary-400"
            ></FeatureCard>
          </div>

          <SectionTitle title="Works in easy steps" className="text-white" />

          <div className="py-4">
            <Slider options={steps}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Slider.Preview></Slider.Preview>
                <div className="flex flex-col items-center md:items-end md:px-24">
                  <Slider.Dots>
                    {steps.map((step, idx) => (
                      <>
                        <Slider.Dot key={idx} idx={idx}>
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
                                <span className="m-auto">{idx}</span>
                              </span>
                              <p>{step.title}</p>
                            </div>
                          )}
                        </Slider.Dot>
                        {idx < steps.length - 1 && (
                          <span className="line block m-4 border-l h-12 border-gray-600"></span>
                        )}
                      </>
                    ))}
                  </Slider.Dots>
                  <div className="my-8">
                    <Slider.Controls />
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
      {/* key features */}
      <section id="keyFeatures">
        <div className="container mx-auto">
          <div className="head flex items-center justify-between">
            <SectionTitle title="Key Features of CONIX" />
            <Link href="/">see more</Link>
          </div>

          <div className="feats grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="feat flex flex-col gap-4">
              <div className="icon">
                <img src="" alt="" />
              </div>
              <p className="description text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                sapien ligula, pretium eget massa egestas, malesuada convallis
                nulla. Cras
              </p>
            </div>
            <div className="feat flex flex-col gap-4">
              <div className="icon">
                <img src="" alt="" />
              </div>
              <p className="description text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                sapien ligula, pretium eget massa egestas, malesuada convallis
                nulla. Cras
              </p>
            </div>
            <div className="feat flex flex-col gap-4">
              <div className="icon">
                <img src="" alt="" />
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
          <div className="flex items-center gap-12">
            <img className="w-24 h-24 bg-primary rounded-full" src="" alt="" />
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
            <div className="flex items-center gap-12">
              <h3>Trusted by</h3>
              {trustedClients.map((client: any) => (
                <img
                  key={client.id}
                  className="bg-black w-48 h-12 object-cover"
                  src={client.logo}
                  alt=""
                />
              ))}
            </div>
            <div className="flex items-center gap-12">
              <h3>Our clients</h3>
              {clients.map((client: any) => (
                <img
                  key={client.id}
                  className="bg-black w-48 h-12 object-cover"
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

          <Slider options={steps}>
            <div className="flex flex-col md:flex-row gap-4">
              <Slider.Preview></Slider.Preview>
              <Slider.Dots>
                <div className="flex flex-row md:flex-col gap-4">
                  {steps.map((step, idx) => (
                    <>
                      <Slider.Dot key={idx} idx={idx}>
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
                      </Slider.Dot>
                    </>
                  ))}
                </div>
              </Slider.Dots>
            </div>
          </Slider>

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
          <div className="head flex justify-between">
            <SectionTitle title="Upcoming Events"></SectionTitle>
            <Link href="/">See more</Link>
          </div>
        </div>
      </section>

      {/* blog */}
      <section className="bg-black text-white py-12" id="blog">
        <div className="container mx-auto">
          <div className="head flex justify-between">
            <SectionTitle title="Read our blog"></SectionTitle>
            <Link href="/">See more</Link>
          </div>
        </div>
      </section>

      {/* our team */}
      <section id="team">
        <div className="container mx-auto">
          <div className="head flex justify-between">
            <SectionTitle title="our team"></SectionTitle>
            <Link href="/">See more</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-4">
            {teamMembers.map((member) => (
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
        </div>
      </section>
    </div>
  );
};

export default Home;
Home.Layout = Layout;
