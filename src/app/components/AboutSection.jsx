"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>React</li>
        <li>React-Native</li>
        <li>Next.js</li>
        <li>TypeScript</li>
        <li>JavaScript</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>삼성 SW 청년 아카데미</li>
        <li>포스코 AI, BIGDATA 아카데미</li>
        <li>공공빅데이터 청년인턴십</li>
      </ul>
    ),
  },
  {
    title: "Awards",
    id: "awards",
    content: (
      <ul className="list-disc pl-2">
        <li>포스코 BigData 분석 프로젝트 최우수</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/minseok2.jpg"
          alt="minseok2"
          width={400}
          height={400}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            안녕하세요! 도전하는 개발자 구민석입니다.
            <br/>
            계속해서 변화하는 시대에 맞춰 새로운 방식에 도전하는 것을 즐기는
            <br/>
            프론트엔드 개발자가 되겠습니다.
            <br/>
            <br/>
            React/TypeScript 등 프레임위크 환경에서 컴포넌트 단위의 마크업 작업을
            <br/>
            능숙하게 할 수 있습니다. 어디에서든 잘 보이는 반응형, 웹 접근성과 웹 표준을
            <br/>
            고려한 웹 페이지를 그려냅니다.
            <br/>
            <br/>
            맡은 프로젝트를 우선으로 고려하며, 원활한 협업을 중요하게 생각합니다.
            <br/>
            다양한 직군과 함께 멋지고 즐거운 페이지를 만드는데 관심이 많습니다.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("awards")}
              active={tab === "awards"}
            >
              {" "}
              Awards{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
