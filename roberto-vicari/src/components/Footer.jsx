/**
 * @copyright 2024 - All rights reserved Roberto Vicari
 * @license Apache-2.0 License
 */

/**
 * Components
 */
import { ButtonPrimary } from "./Button";


const sitemap = [
    {
        label: 'Home',
        href: '#home'
    },
    {
        label: 'About',
        href: '#about'
    },
    {
        label: 'Work',
        href: '#work'
    },
    {
        label: 'Reviews',
        href: '#reviews'
    },
    {
        label: 'Contact me',
        href: '#contact'
    }
];

const socials = [
    {
        label: 'GitHub',
        href: 'https://github.com/Roberto-vic'
    },
    {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/roberto-vicari-54330a23a/'
    },
    {
        label: 'Xing',
        href: 'https://www.xing.com/profile/Roberto_Vicari/web_profiles'
    },
];

const Footer = () => {
    return (
        <section className="section ">
            <div className="container ">
                <div className="lg:grid lg:grid-cols-2 ">
                    <div className="mb-10 ">
                        <h2 className="headline-2 mb-8 lg:max-w-[12ch] reveal-up ">
                            Let's work together today!!!
                        </h2>
                        <ButtonPrimary
                            href="mailto:roberto.vicari79@gmail.com"
                            label="Get in touch"
                            icon="chevron_right"
                            classes="reveal-up "
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4 lg:pl-20 ">
                        <div>
                            <p className="mb-2 reveal-up ">Sitemap</p>
                            <ul>
                                {sitemap.map(({ label, href }, key) => (
                                    <li key={key}>
                                        <a
                                            href={href}
                                            className="block text-sm text-zinc-400 transition-colors py-1 hover:text-zinc-200 reveal-up "
                                        >
                                            {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <p className="mb-2 reveal-up ">Social</p>
                            <ul>
                                {socials.map(({ label, href }, key) => (
                                    <li key={key}>
                                        <a
                                            href={href}
                                            target="_blank"
                                            className="block text-sm text-zinc-400 transition-colors py-1 hover:text-zinc-200 reveal-up "
                                        >
                                            {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between mt-16 ">
                    <a
                        href="/"
                        className="logo reveal-up "
                    >
                        <img
                            src="/images/LogoRV.png"
                            width={35}
                            height={35}
                            alt="Logo"
                        />
                    </a>

                    <p className="text-zinc-500 text-sm reveal-up ">
                        &copy; 2024 <span className="text-zinc-200 ">Roberto Vicari</span>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Footer