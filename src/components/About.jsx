/**
 * @copyright 2024 - All rights reserved Roberto Vicari
 * @license Apache-2.0 License
 */

const aboutItems = [
    {
        label: 'Project done',
        number: 8
    },
    {
        label: 'Years of experience',
        number: 1.5
    }
];


const About = () => {
    return (
        <section
            id="about"
            className="section"
        >
            <div className="container">

                <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12">
                    <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch] reveal-up ">
                        My name is Roberto Vicari, and I’m a junior developer with a background as a Web- and Software Developer and
                        a solid technical foundation in HTML, CSS, JavaScript, and PHP. During my 9-month internship, I gained hands-on
                        experience with C# and SQL by developing applications with Windows Forms, and I’ve since expanded my skills by
                        exploring modern technologies like React and TailwindCSS. I also have a foundational knowledge of Docker, Python,
                        and Java, and I'm always eager to learn new tools and languages.

                        Currently, my goal is to grow in web development and to apply my skills, particularly in building websites and web
                        applications. I'm a determined person, able to work under pressure, and always ready to challenge myself with new
                        technologies and projects.

                        I believe that with the right mix of creativity and technical precision, it's possible to create digital experiences
                        that make a lasting impact. If you're looking for someone who brings enthusiasm, commitment, and a strong ability to
                        adapt, I’d be excited to work with your team.
                    </p>
                    <div className="flex flex-wrap items-center gap-4 md:gap-7">
                        {
                            aboutItems.map(({ label, number }, key) => (
                                <div key={key}>
                                    <div className="flex items-center md:mb-2">
                                        <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                                        <span className="text-sky-500 font-semibold md:text-3xl">+</span>
                                    </div>

                                    <p className="text-sm text-zinc-300">{label}</p>
                                </div>
                            ))
                        }

                        <img
                            src="./images/LogoRV.png"
                            alt="Logo"
                            width={30}
                            height={30}
                            className="ml-auto md:w-[40px] md:h-[40px]"
                        />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default About