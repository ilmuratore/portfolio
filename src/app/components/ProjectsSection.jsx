"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 4,
    title: "Next.js Portfolio Website",
    description: "Questo é il mio sito web creato con Next.js e TaiwindCSS. É il mio primo approccio alla creazione di siti utilizzando React e Next.js. In questo sito raccoglieró nel tempo tutti i progetti alla quale ho lavorato e la mia esperienza professionale. ",
    image: "/images/projects/project1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Personal CRM",
    description: "Personal CRM é un CRM/Gestionale Leads creato per un mio cliente. Il gestionale é completamente personalizzabile nei suoi componenti.É composto da un sito web Front-end Angular con TailwindCSS e un back-end fatto con Express.js e Node.js. Il database utilizzato é MongoDB. Questo progetto rispetta lo stack MEAN ed é stato il mio primo approccio alla creazione di siti utilizzando Angular e Node.js.",
    image: "/images/projects/project2.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Vorpal",
    description: "Vorpal é un po il mio sogno nel cassetto. É un video game ancora al suo stato embrionale. Partito come progetto Capstone del mio bootcamp in Epicode, da web-app é diventato con il tempo un vero e proprio gioco 2D basato sul motore grafico Unity. Al momento lo stato del progetto é in fase di scrittura della trama e degli elementi base.",
    image: "/images/projects/project3.png",
    tag: ["All"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "SpankEdicola.com",
    description: "SpankEdicola é uno dei miei primissimi lavori commerciali. E' un ecommerce completo di CMS sviluppato su una versione modificata e personalizzata di Wordpress. La sfida é stato dover far girare tutto lo stack sia backend che frontend sul mio personale server aziendale privato. Ho integrato nel progetto tecniche di virtualizzazione e un tunnel sicuro per renderlo online.",
    image: "/images/projects/project5.png",
    tag: ["All", "Mobile", "Web"],
    gitUrl: "https://spankedicola.com",
    previewUrl: "https://spankedicola.com",
  },
  {
    id: 1,
    title: "Pagina Github",
    description: "Qui raccolgo tutti i miei progetti pubblici e non solo.",
    image: "/images/projects/project4.png",
    tag: ["All","Mobile", "Web"],
    gitUrl: "https://github.com/ilmuratore",
    previewUrl: "https://github.com/ilmuratore",
  },
  {
    id: 6,
    title: "Coming soon",
    description: "Next project to be released soon",
    image: "/images/projects/coming.jpg.jpg",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
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
      <h2 className="mt-4 mb-8 text-4xl font-bold text-center text-white md:mb-12">
        My Projects
      </h2>
      <div className="flex flex-row items-center justify-center gap-2 py-6 text-white">
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
      </div>
      <ul ref={ref} className="grid gap-8 md:grid-cols-3 md:gap-12">
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
