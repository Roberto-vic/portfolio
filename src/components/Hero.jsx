/**
 * @copyright 2024 - All rights reserved Roberto Vicari
 * @license Apache-2.0 License
 */

/**
 * Components
 */

import { ButtonPrimary, ButtonOutline } from "./Button";

const Hero = () => {
  return (
    <section 
        className="pt-28 lg:pt-36" 
        id="home"
        >
          <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">

                <div>

                <div className="flex items-center gap-3">
                    <figure className="img-box w-9 h-9 rounded-lg">
                        <img 
                            src="./images/avatar.jpg"
                            width={40}
                            height={40} 
                            alt="Roberto Vicari portrait" 
                            className="img-cover"
                        /> 
                    </figure>

                    <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
                        <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                              <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
                        </span>

                          Available for work
                    </div>
                </div>
                    <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
                        I develop digital solutions with passion, curiosity, and dedication.
                    </h2>
                    <p className="mt-5 mb-5 lg:mb-8">
                      Junior Developer, ready to take on new challenges in the world of web development.
                    </p>

                    <div className="flex items-center gap-3">
                      <ButtonPrimary 
                        label="Download CV"
                        icon="download"
                      />

                      <ButtonOutline 
                        href="#about"
                        label="Scroll down"
                        icon="arrow_downward"
                      />
                    </div>
                </div>

                <div className="hidden lg:block">
                    <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-300 via-25% 
                                    via-sky-300/80 to-70% rounded-[30px] overflow-hidden">
                        <img 
                            src="./images/Hero.png"
                            width={656}
                            height={800}
                            alt="Hero background" 
                            className="w-full"
                        />
                    </figure>
                </div>

            </div>
    </section>
  )
}

export default Hero