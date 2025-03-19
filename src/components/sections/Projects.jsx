import React from "react";
import RevealOnScroll from "../RevealOnScroll";
import cinesphere from "../../assets/cinesphere.png";
import monstersRolodex from "../../assets/monsters-rolodex.PNG";

const Projects = () => {
  const projects = [
    {
      emoji: "🎥",
      title: "CineSphere",
      description:
        "Modern movie discovery platform featuring a Netflix-esque trending section that highlights the hottest movies searched by users.",
      skills: ["React", "Node.js", "TailwindCSS"],
      image: cinesphere,
      url: 'https://evenson-cinesphere.netlify.app/'
    },
    {
      emoji: "🤖",
      title: "RoboFriends",
      description:
        "React app that fetches robots from an API and allows users to search for specific robots by name.",
      skills: ["React", "TailwindCSS"],
      image: monstersRolodex,
      url: 'https://evenson-robofriends.netlify.app/'
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition"
              >
                <h3 className="text-xl font-bold mb-2">
                  {project.emoji} {project.title}
                </h3>
                <img
                  className="w-full h-75 object-cover rounded-lg mb-4"
                  src={project.image}
                  alt={`${project.title} Preview`}
                />
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <a
                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                    href={project.url}
                  >
                    View Project →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Projects;
