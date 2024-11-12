/**
 * @copyright 2024 - All rights reserved Roberto Vicari
 * @license Apache-2.0 License
 */

/**
 * Components
 */

import SkillCard from "./SkillCard";


const skillItem = [
    {
        imgSrc: './images/html-icona.png',
        label: 'HTML',
        desc: 'HyperTextMarkupLanguage'
    },
    {
        imgSrc: './images/css-icona.png',
        label: 'CSS',
        desc: 'User Interface'
    },
    {
        imgSrc: './images/js-icona.png',
        label: 'JavaScript',
        desc: 'Interaction'
    },
    {
        imgSrc: './images/cs-icona.png',
        label: 'C#',
        desc: 'Programming Language'
    },
    {
        imgSrc: './images/mysql-icona.png',
        label: 'MySQL Server',
        desc: 'Web Server'
    },
    {
        imgSrc: './images/php-icona.png',
        label: 'PHP',
        desc: 'Programming Language'
    },
    {
        imgSrc: './images/py-icona.png',
        label: 'Python',
        desc: 'Programming Language'
    },
    {
        imgSrc: './images/vs-icona.png',
        label: 'VisualStudio & VS Code',
        desc: 'IDEs'
    },
    {
        imgSrc: './images/github-icona.png',
        label: 'GitHub',
        desc: 'Versioning services'
    },
    {
        imgSrc: './images/react-icona.png',
        label: 'React',
        desc: 'Framework'
    },
    {
        imgSrc: './images/tailwind-icona.png',
        label: 'TailwindCSS',
        desc: 'User Interface'
    },
];

function Skill() {
    return (
        <section className="section ">
            <div className="container ">
                <h2 className="headline-2 reveal-up ">
                    Essential Tools and Programming languages I use
                </h2>
                <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up ">
                    Discover the powerfull tools and technologies I use to create website and applications.
                </p>

                <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                    {skillItem.map(({ imgSrc, label, desc }, key) => (
                        <SkillCard
                            key={key}
                            imgSrc={imgSrc}
                            label={label}
                            desc={desc}
                            classes="reveal-up "
                        />
                    ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Skill