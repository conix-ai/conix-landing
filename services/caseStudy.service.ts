import { api } from "./api";

const CaseStudyService = (() => {
  const getCaseStudies = async (limit: number) => {
    // const events = await api.get(`case-studies?limit=${limit}`);
    // return events.data;

    return {
      data: {
        caseStudies: [
          {
            id: 1,
            image: "/assets/home/case-studies/study-2.jpg",
            title: "Badr Villa",
            createdAt: "2023-03-14T13:22:55.140Z",
            description:
              "Lorem ipsum dolorsitamet,consectetur adipiscing elit. Ut sapien ligula, pretium eget massaegestas, malesuada  convallis nulla.",
            gallery: [
              "/assets/home/case-studies/study-1.png",
              "/assets/home/case-studies/study-2.jpg",
              "/assets/home/case-studies/study-3.jpg",
              "/assets/home/case-studies/study-4.jpg",
              "/assets/home/case-studies/study-5.png",
            ],
            type: "villa project",
            location: "Alexandria",
          },
          {
            id: 2,
            image: "/assets/home/case-studies/study-3.jpg",
            title: "Badr Villa",
            createdAt: "2023-03-14T13:22:55.140Z",
            description:
              "Lorem ipsum dolorsitamet,consectetur adipiscing elit. Ut sapien ligula, pretium eget massaegestas, malesuada  convallis nulla.",
            gallery: [
              "/assets/home/case-studies/study-1.png",
              "/assets/home/case-studies/study-2.jpg",
              "/assets/home/case-studies/study-3.jpg",
              "/assets/home/case-studies/study-4.jpg",
              "/assets/home/case-studies/study-5.png",
            ],
            type: "villa project",
            location: "Alexandria",
          },
          {
            id: 3,
            image: "/assets/home/case-studies/study-2.jpg",
            title: "Badr Villa",
            createdAt: "2023-03-14T13:22:55.140Z",
            description:
              "Lorem ipsum dolorsitamet,consectetur adipiscing elit. Ut sapien ligula, pretium eget massaegestas, malesuada  convallis nulla.",
            gallery: [
              "/assets/home/case-studies/study-1.png",
              "/assets/home/case-studies/study-2.jpg",
              "/assets/home/case-studies/study-3.jpg",
              "/assets/home/case-studies/study-4.jpg",
              "/assets/home/case-studies/study-5.png",
            ],
            type: "villa project",
            location: "Alexandria",
          },
          {
            id: 4,
            image: "/assets/home/case-studies/study-2.jpg",
            title: "Badr Villa",
            createdAt: "2023-03-14T13:22:55.140Z",
            description:
              "Lorem ipsum dolorsitamet,consectetur adipiscing elit. Ut sapien ligula, pretium eget massaegestas, malesuada  convallis nulla.",
            gallery: [
              "/assets/home/case-studies/study-1.png",
              "/assets/home/case-studies/study-2.jpg",
              "/assets/home/case-studies/study-3.jpg",
              "/assets/home/case-studies/study-4.jpg",
              "/assets/home/case-studies/study-5.png",
            ],
            type: "villa project",
            location: "Alexandria",
          },
          {
            id: 5,
            image: "/assets/home/case-studies/study-3.jpg",
            title: "Badr Villa",
            createdAt: "2023-03-14T13:22:55.140Z",
            description:
              "Lorem ipsum dolorsitamet,consectetur adipiscing elit. Ut sapien ligula, pretium eget massaegestas, malesuada  convallis nulla.",
            gallery: [
              "/assets/home/case-studies/study-1.png",
              "/assets/home/case-studies/study-2.jpg",
              "/assets/home/case-studies/study-3.jpg",
              "/assets/home/case-studies/study-4.jpg",
              "/assets/home/case-studies/study-5.png",
            ],
            type: "villa project",
            location: "Alexandria",
          },
        ],
      },
    };
  };

  return {
    getCaseStudies,
  };
})();

export default CaseStudyService;
