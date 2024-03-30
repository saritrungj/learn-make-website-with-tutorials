import React from 'react'
import Section from './common/Section'
import p1 from '../assets/p1.jpg'
import p2 from '../assets/p2.jpg'
import p3 from '../assets/p3.jpg'
import p4 from '../assets/p4.jpg'
import p5 from '../assets/p5.jpg'
import p6 from '../assets/p6.jpg'
import { FaGithub, FaExternalLinkSquareAlt } from 'react-icons/fa'

const Portfolio = () => {

  const projects = [
    {
      id: 1,
      image: p1,
      title: "Best App",
      github: "https://github.com/nodejs/node",
      demo: "https://nodejs.org/en/"
    },
    {
      id: 2,
      image: p2,
      title: "Best App",
      github: "https://github.com/nodejs/node",
      demo: "https://nodejs.org/en/"
    },
    {
      id: 3,
      image: p3,
      title: "Best App",
      github: "https://github.com/nodejs/node",
      demo: "https://nodejs.org/en/"
    },
    {
      id: 4,
      image: p4,
      title: "Best App",
      github: "https://github.com/nodejs/node",
      demo: "https://nodejs.org/en/"
    },
    {
      id: 5,
      image: p5,
      title: "Best App",
      github: "https://github.com/nodejs/node",
      demo: "https://nodejs.org/en/"
    },
    {
      id: 6,
      image: p6,
      title: "Best App",
      github: "https://github.com/nodejs/node",
      demo: "https://nodejs.org/en/"
    },
  ]

  return (
    <Section
      title="Portfolio 📃"
      subtitle="These are all the projects that I have worked on. Some of them I have worked before I gained some experieence. So go gentle on them"
    >
      <div className="grid gap-8 lg:gap-14 lg:grid-cols-2">
        {projects.map(({ id, image, title, github, demo }) => (
          <div key={id} className="max-w-lg flex shadow-lg shadow-gray-300 rounded-2xl overflow-hidden">
            <img className="w-2/3" src={image} alt="project-image" />
            <div className="w-1/3 flex flex-col items-center justify-evenly p-1">
              <h2>{title}</h2>
              <a
                className="text-2xl cursor-pointer duration-150 hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
                href={github}>
                <FaGithub />
              </a>
              <a
                className="text-2xl cursor-pointer duration-150 hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
                href={demo}>
                <FaExternalLinkSquareAlt />
              </a>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default Portfolio