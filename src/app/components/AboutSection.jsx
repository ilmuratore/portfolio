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
    ),
  },
  {
    title: "Programming Languages",
    id: "languages",
    content: (
      <ul className="pl-2 list-disc">
        <li>JavaScript</li>
        <li>Typescript</li>
        <li>Java</li>
        <li>Python</li>
      </ul>
    ),
  },
  {
    title: "Programming Tools", // Fixed typo here
    id: "programming_tools",
    content: (
      <ul className="pl-2 list-disc">
        <li>Git</li>
        <li>GitHub</li>
        <li>Linux</li>
        <li>Windows</li>
        <li>Visual Studio Code</li>
        <li>IntelliJ</li>
        <li>Docker</li>
        <li>Cloudflare</li>
      </ul>
    ),
  },
  {
    title: "Personal Skills",
    id: "personal_skills",
    content: (
      <ul className="pl-2 list-disc">
        <li>Problem Solving</li>
        <li>Teamwork</li>
        <li>Time Management</li>
        <li>Communication</li>
        <li>Attention to Detail</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="pl-2 list-disc">
        <li>Laureando L31, Scienze e Tecnologie Informatiche, AI </li>
        <li>Epicode Full Stack Web Development Stage/Bootcamp</li>
        <li>Stage ITconsulting SRL</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="pl-2 list-disc">
        {" "}
        Click to download certificates
        <li>
          <a href="https://drive.google.com/file/d/1r_ZO2SS0FFPZNFBVbgGoo82YNiWKRlO3/view?usp=sharing">
            Epicode Full Stack Web Developer 6 month Stage/Bootcamp
          </a>
        </li>
        <li>
          <a href="https://drive.google.com/file/d/1oEYZ2L9popJOR5v6BBROV4Rr9HXq-JdV/view?usp=sharing">
            IA Prompt
          </a>
        </li>
        <li>
          <a href="https://drive.google.com/file/d/1x7WTPmJhGDilkHguyeRX-6J9iXP07uaL/view?usp=sharing">
            IA Prompt Advanced
          </a>
        </li>
        <li>
          <a href="https://drive.google.com/file/d/1QCdsjdDiwHv4n7N5W0yHTC8hpDhTliYm/view?usp=sharing">
            Game Development with Unity
          </a>
        </li>
        <li>
          <a href="https://drive.google.com/file/d/10qhGnmXZ6XHyfpyPCLD1Hcus-mCUEO3H/view?usp=sharing">
            Python Intermediate
          </a>
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
        <Image
          src="/images/image1.png"
          width={500}
          height={500}
          alt="immagine1"
        />
        <div className="flex flex-col h-full mt-4 text-left md:mt-0">
          <h2 className="mb-4 text-4xl font-bold text-white">About Me</h2>
          <p className="text-base lg:text-lg">
            Sono un Full Stack Developer con esperienza nello sviluppo di web
            application interattive e responsive. Ho lavorato su progetti che
            utilizzano JavaScript/TypeScript, Angular, React, Node.js,
            Express.js, PostgreSQL, Java, Spring Boot, MongoDB e HTML/CSS. Ho
            esperienza con Docker e Cloudflare per la gestione di servizi web, e
            dimestichezza con ambienti Linux e Windows. Certificato in IA Prompt
            Engineering e Game Development con Unity. Sempre alla ricerca di
            nuove conoscenze, con ottime soft skill nel lavoro in team.
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
