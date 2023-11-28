"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "DRILL",
    description: "클라이밍 커뮤니티 앱",
    image: "/images/projects/DRILL.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/9minseok/DRILL",
    previewUrl: "https://sudsy-ray-934.notion.site/Hello-I-m-MinSeok-0d528e6aa43840cdbb9d8f0d75c6d3c8?p=0038d7fa278a40c8a6aa023fe4b156c6&pm=c",
  },
  {
    id: 2,
    title: "React Portfolio Website",
    description: "개인 웹 포트폴리오",
    image: "/images/projects/portfolio1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/9minseok/portfolio",
    previewUrl: "https://sudsy-ray-934.notion.site/Hello-I-m-MinSeok-0d528e6aa43840cdbb9d8f0d75c6d3c8?p=c71bae39718b498581cd9168924133ce&pm=c",
  },
  {
    id: 3,
    title: "Eager Beaver",
    description: "부동산 웹 게임 시뮬레이션",
    image: "/images/projects/EagerBeaver.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/9minseok/EagerBeaver",
    previewUrl: "https://sudsy-ray-934.notion.site/Hello-I-m-MinSeok-0d528e6aa43840cdbb9d8f0d75c6d3c8?p=6f9b55431db24b53958a2ce17bd4617a&pm=c",
  },
  {
    id: 4,
    title: "SSWM",
    description: "화상 스터디 웹사이트",
    image: "/images/projects/SSWM.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/9minseok/SSWM",
    previewUrl: "https://sudsy-ray-934.notion.site/Hello-I-m-MinSeok-0d528e6aa43840cdbb9d8f0d75c6d3c8?p=950c8267401f42ef9dbedd5336e37850&pm=c",
  },
  {
    id: 5,
    title: "AI무인점포",
    description: "무인 AI CCTV",
    image: "/images/projects/무인점포.jpg",
    tag: ["All", "Etc"],
    gitUrl: "https://sudsy-ray-934.notion.site/Hello-I-m-MinSeok-0d528e6aa43840cdbb9d8f0d75c6d3c8?p=29ba7930062f46f1813c35d93f04c923&pm=c",
    previewUrl: "https://sudsy-ray-934.notion.site/Hello-I-m-MinSeok-0d528e6aa43840cdbb9d8f0d75c6d3c8?p=29ba7930062f46f1813c35d93f04c923&pm=c",
  },
  {
    id: 6,
    title: "홈쇼핑 빅데이터 분석",
    description: "수요 예측 모델링",
    image: "/images/projects/홈쇼핑.png",
    tag: ["All", "Etc"],
    gitUrl: "https://sudsy-ray-934.notion.site/Hello-I-m-MinSeok-0d528e6aa43840cdbb9d8f0d75c6d3c8?p=163a55d94568450690cffb61fe28d5c9&pm=c",
    previewUrl: "https://sudsy-ray-934.notion.site/Hello-I-m-MinSeok-0d528e6aa43840cdbb9d8f0d75c6d3c8?p=163a55d94568450690cffb61fe28d5c9&pm=c",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Etc"
          isSelected={tag === "Etc"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
