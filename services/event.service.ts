import { api } from "./api";

const EventService = (() => {
  const getUpcomingEvents = async (limit: number) => {
    // const events = await api.get(`events?limit=${limit}`);
    // return events.data;

    return {
      data: {
        events: [
          {
            id: 1,
            image: "/assets/home/case-studies/study-2.jpg",
            type: "workshop",
            createdAt: "2023-03-14T13:22:55.140Z",
            title: "The Future of Architect",
            description:
              "Lorem ipsum dolorsitamet,consectetur adipiscing elit. Ut sapien ligula, pretium eget massaegestas,  malesuada  convallis nulla.",
          },
          {
            id: 2,
            image: "/assets/home/case-studies/study-2.jpg",
            type: "Conference",
            createdAt: "2023-03-14T13:22:55.140Z",
            title: "Digital Fabrication in Architecture",
            description:
              "Lorem ipsum dolorsitamet,consectetur adipiscing elit. Ut sapien ligula, pretium eget massaegestas, malesuada  convallis nulla.",
          },
        ],
      },
    };
  };

  return {
    getUpcomingEvents,
  };
})();

export default EventService;
