import { api } from "./api";

const TeamMemberService = (() => {
  const getTeamMembers = async (limit = 4) => {
    const teamMembers = await api.get(
      `team-member?limit=${limit}&isLeader=false`
    );
    return teamMembers.data;
  };
  const getTeamLeaders = async (limit = 4) => {
    const teamLeaders = await api.get(
      `team-member?limit=${limit}&isLeader=true`
    );
    return teamLeaders.data;
  };

  return {
    getTeamMembers,
    getTeamLeaders,
  };
})();

export default TeamMemberService;
