/**
 * @copyright 2024 - All rights reserved Roberto Vicari
 * @license Apache-2.0 License
 */

/**
 * Components
 */
import ProjectCard from "./ProjectCard";


const works = [
    {
        imgSrc: './images/todoapp.png',
        title: 'ToDo app in Vue.JS',
        tags: ['Development', 'Vue.JS'],
        projectLink: 'https://github.com/Roberto-vic/todoapp'
    },
    {
        imgSrc: './images/realitaetspause.png',
        title: 'School project website',
        tags: ['Web-design', 'Development', 'PHP'],
        projectLink: 'https://github.com/Roberto-vic/My_Lib'
    },
    {
        imgSrc: './images/ecommerce.png',
        title: 'eCommerce website',
        tags: ['eCommerce', 'Development', 'PHP'],
        projectLink: 'http://www.myshoptestroby.altervista.org/'
    },
    {
        imgSrc: './images/onepage.png',
        title: 'Onepage Site',
        tags: ['Web-design', 'Development', 'HTML-CSS-JS'],
        projectLink: 'https://roberto-vic.github.io/Onepagesite/'
    },
    {
        imgSrc: './images/landingpageotty.png',
        title: 'Landingpage for bill comparison request',
        tags: ['Web-design', 'Development', 'HTML-CSS-JS', 'Bootstrap'],
        projectLink: 'https://www.comparazione-bollette.it/'
    },
];

const Work = () => {
    return (
        <section
            id="work"
            className="section"
        >
            <div className="container">
                <h2 className="headline-2 mb-8 reveal-up ">
                    My Portfolio highlights
                </h2>

                <div className="grid gap-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                    {works.map(({ imgSrc, title, tags, projectLink }, key) => (
                        <ProjectCard
                            key={key}
                            imgSrc={imgSrc}
                            title={title}
                            tags={tags}
                            projectLink={projectLink}
                            classes="reveal-up"
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Work