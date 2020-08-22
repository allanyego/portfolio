const projects = [
  {
    id: 1,
    name: "e-hosi",
    client: "john doe",
    description: `It is a long established fact that a reader will be distracted by the
    readable content of a page when looking at its layout. The point of
    using Lorem Ipsum is that it has a more-or-less normal distribution`,
    url: "http://someurl.nowhere",
    technologies: "react.js, mongodb, express.js, jwt",
  },
  {
    id: 2,
    name: "ride easy",
    client: "simon bigman",
    description: `It is a long established fact that a reader will be distracted by the
    readable content of a page when looking at its layout. The point of
    using Lorem Ipsum is that it has a more-or-less normal distribution`,
    url: "http://someurl.nowhere",
    technologies: "react.js, mongodb, express.js, jwt",
  },
  {
    id: 3,
    name: "insurance management system",
    client: "orient insurance company",
    description: `It is a long established fact that a reader will be distracted by the
    readable content of a page when looking at its layout. The point of
    using Lorem Ipsum is that it has a more-or-less normal distribution`,
    url: "http://someurl.nowhere",
    technologies: "react.js, mongodb, express.js, jwt",
  },
  {
    id: 4,
    name: "e-booking",
    client: "collins njoka",
    description: `It is a long established fact that a reader will be distracted by the
    readable content of a page when looking at its layout. The point of
    using Lorem Ipsum is that it has a more-or-less normal distribution`,
    url: "http://someurl.nowhere",
    technologies: "react.js, mongodb, express.js, jwt",
  },
];

export function getProjects() {
  return new Promise((resolve, _reject) => {
    setTimeout(() => resolve(projects), 2100);
  });
}
