"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Framework and Libraries",	
    id: "framework_libraries",
    content: (
      <ul className="pl-2 list-disc ">
        <li>HTML5</li>
        <li>CSS3</li>
        <li>Angular</li>
        <li>React</li>
        <li>Next.js</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>SpringBoot</li>
      </ul>
    ),
  },
  {
    title: "Databases",
    id: "databases",
    content: (
      <ul className="pl-2 list-disc">
        <li>PostgreSQL</li>
        <li>MongoDB</li>
        <li>MariaDB</li>
      </ul>
    ),
  },
  {
    title: "Graphical Tools",
    id: "graphical_tools",
    content: (
      <ul className="pl-2 list-disc">
        <li>TailwindCSS</li>
        <li>Bootstrap</li>
      </ul>
    )
  },
  {
    title: "Programming Languages",
    id: "languages",
    content: (
      <ul className="pl-2 list-disc">
        <li>JavaScript</li>
        <li>Typescript</li>
        <li>Java</li>
        <li>C#</li>
      </ul>
    ),
  },
  {
    title: "Programming Tools",  // Fixed typo here
    id: "programming_tools",
    content: (
      <ul className="pl-2 list-disc"> 
        <li>Git</li>
        <li>GitHub</li>
        <li>Linux</li>
        <li>Windows</li>
        <li>Visual Studio Code</li>
        <li>Visual Studio</li>  {/* Fixed typo here */}
        <li>IntelliJ</li> {/* Fixed typo here */}
        <li>Docker</li>
        <li>Cloudflare</li>
      </ul>
    )
  },
  {
    title: "Personal Skills",
    id: "personal_skills",
    content: (
      <ul className="pl-2 list-disc">
        <li>Problem Solving</li>
        <li>Teamwork</li>
        <li>Time Management</li>
        <li>Leadership</li>
        <li>Communication</li>
        <li>Attention to Detail</li>
      </ul>
  )
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="pl-2 list-disc">
        <li>Epicode Full Stack Web Development Bootcamp</li>
        <li>ISS Giancarlo Siani, Scientific Science and Technology</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="pl-2 list-disc">
        <li>
          <a href="https://drive.google.com/file/d/1r_ZO2SS0FFPZNFBVbgGoo82YNiWKRlO3/view?usp=sharing">Epicode Full Stack Web Developer 6 month course</a>
        </li>
        <li>
          <a href="https://drive.google.com/file/d/1oEYZ2L9popJOR5v6BBROV4Rr9HXq-JdV/view?usp=sharing">IA Prompt</a>
        </li>
        <li>
          <a href="https://drive.google.com/file/d/1x7WTPmJhGDilkHguyeRX-6J9iXP07uaL/view?usp=sharing">IA Prompt Advanced</a>
        </li>
        <li>
          <a href="https://drive.google.com/file/d/1QCdsjdDiwHv4n7N5W0yHTC8hpDhTliYm/view?usp=sharing">Game Development with Unity</a>
        </li>
        <li>
          <a href="https://drive.google.com/file/d/10qhGnmXZ6XHyfpyPCLD1Hcus-mCUEO3H/view?usp=sharing">Python Intermediate</a>
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("framework_libraries"); // Changed default to a valid tab ID
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="items-center gap-8 px-4 py-8 md:grid md:grid-cols-2 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/image1.png" width={500} height={500} alt="immagine1"/>
        <div className="flex flex-col h-full mt-4 text-left md:mt-0">
          <h2 className="mb-4 text-4xl font-bold text-white">About Me</h2>
          <p className="text-base lg:text-lg">
            Sono un full stack web developer con la passione per la creazione di 
            web app interattive e responsive. Ho esperienza in progetti che utilizzano 
            JavaScript/TypeScript, Anuglar, Node.js, Express.js, PostgreSQL, Java, SpringBoot, MongoDB, Git e HTML/CSS.
            Posseggo discrete competenze anche nell&apos;utilizzo di Docker e Cloudflare per la gestione di servizi web.
            Nel tempo ho esplorato anche l'uso di Linux e Windows per l'ambiente di sviluppo.
            Sono sempre alla ricerca di nuove conoscenze e skill set. Posseggo ottime Soft-Skill in merito al lavoro in team.
            Sono molto motivato e un amante della tecnologia. 
          </p>
          <div className="flex flex-row justify-start mt-8">
            {TAB_DATA.map((tabData) => (
              <TabButton
              key={tabData.id}
              selectTab={() => handleTabChange(tabData.id)}
              active={tab === tabData.id}
              >
              {tabData.title}
              </TabButton>
              ))}
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
