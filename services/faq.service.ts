import { api } from "./api";

const FaqService = (() => {
  const getFaqs = async (limit: number) => {
    const topFaqs = await api.get(`common-question?limit=${limit}`);
    return topFaqs.data;
  };

  return {
    getFaqs,
  };
})();

export default FaqService;
