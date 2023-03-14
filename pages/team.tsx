import SectionTitle from "@/components/SectionTitle";
import MainLayout from "@/layouts/MainLayout";
import TeamMemberService from "@/services/teamMember.service";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Layout = ({ children }: any) => {
  return <MainLayout>{children}</MainLayout>;
};

export type TeamProps = {};
const Team = (props: TeamProps) => {
  const [teamLeaders, setTeamLeaders] = useState([]);
  const [teamMembers, setTeamMembers] = useState([]);

  const getTeamLeaders = async () => {
    const res = await TeamMemberService.getTeamLeaders();
    setTeamLeaders(res.data.teamMembers);
  };
  const getTeamMembers = async () => {
    const res = await TeamMemberService.getTeamMembers();
    setTeamMembers(res.data.teamMembers);
  };

  useEffect(() => {
    getTeamLeaders();
    getTeamMembers();
  }, []);

  return (
    <div className="page" id="team">
      <header className="flex flex-col">
        <div className="container m-auto">
          <h1 className="text-4xl lg:text-8xl font-serif">Meet our team</h1>
          <p className="text-2xl max-w-lg">
            Lorem ipsum dolorsitamet,consectetur adipiscing elit. Ut sapien
            ligula, pretium eget massaegestas, malesuada conv allis nulla.
          </p>
          <button className="btn btn-primary px-24 py-4 mt-16">
            Be part of our family
          </button>
        </div>
      </header>

      {/* leader */}
      <section className="bg-black text-white py-12" id="leader">
        <div className="container mx-auto">
          <SectionTitle className="text-4xl" title="The leadership team" />

          <div className="flex flex-col gap-8 my-8">
            {teamLeaders.map((leader: any) => (
              <div className="card bg-neutral-900 p-8" key={leader.id}>
                <div className="grid grid-cols-5 items-center gap-4 lg:gap-48">
                  <div className="col-span-5 lg:col-span-2">
                    <img
                      className="w-full h-72 object-cover"
                      src={leader.image}
                      alt=""
                    />
                  </div>
                  <div className="col-span-5 lg:col-span-3 info">
                    <h2>{leader.name}</h2>
                    <p className="text-neutral-600">{leader.title}</p>
                    <p>{leader.brief}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* team */}
      <section id="team">
        <div className="container mx-auto">
          <div className="head flex justify-between">
            <SectionTitle title="The Dream Team"></SectionTitle>
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
    </div>
  );
};

Team.Layout = Layout;
export default Team;
