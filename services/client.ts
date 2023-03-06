import { api } from "./api";

const ClientService = (() => {
  const getTrustedClients = async () => {
    const trustedClients = await api.get("trusted-client");
    return trustedClients.data;
  };
  const getClients = async () => {
    const ourClients = await api.get("client");
    return ourClients.data;
  };

  return {
    getTrustedClients,
    getClients,
  };
})();

export default ClientService;
