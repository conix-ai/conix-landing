import { api } from "./api";

const TestimonialService = (() => {
  const getTestimonial = async () => {
    const testimonials = await api.get("testimonial");
    return testimonials.data;
  };

  return {
    getTestimonial,
  };
})();

export default TestimonialService;
