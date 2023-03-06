import { api } from "./api";

const TeamMemberService = (() => {
  const getTeamMembers = async () => {
    const teamMembers = await api.get(`team-member?limit=4&isLeader=false`);
    return teamMembers.data;
  };

  return {
    getTeamMembers,
  };
})();

export default TeamMemberService;
