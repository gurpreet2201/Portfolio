import React from 'react'
import instagram from '../assets/instagram.png'
import facebook from '../assets/facebook.png'
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'
import CV_Resume from '../assets/CV_Resume.pdf'
import Workload from '../assets/Workload.png'
import {DownloadIcon, Mail} from 'lucide-react'
import Hello from '../assets/Hello.png'



const HeroSection = ({darkMode}) => {
  const socialIcons = [
    { icon : instagram, alt: 'instagram'},
    { icon : github, alt: 'github'},
    { icon : facebook, alt: 'facebook'},
    { icon : linkedin, alt: 'linkedin'}
   
  ];

  const darkTheme = {
    textPrimary: 'text-white',
    textSecondary: 'text-gray-300',
    buttonSecondary: 'text-white border-2 border-orange-500 hover:bg-orange-600',
    decorativeCircle: 'bg-orange-500 opacity-10',
  }

  const lightTheme = {
    textPrimary: 'text-gray-900',
    textSecondary: 'text-gray-700',
    buttonSecondary: 'text-gray-800 border-2 border-orange-500 hover:bg-orange-600 hover:text-white',
    decorativeCircle: 'bg-orange-400 opacity-20',

  }
  const theme = darkMode ? darkTheme : lightTheme;


  return (
    <div className='relative overflow-hidden min-h-screen flex flex-col'>
      <section
      id='home'
      data-aos='fade-up'
      data-aos-delay="250"
      className='body-font z-10'>


        <div className='container mx-auto flex px-4 sm:px-8 lg:px-14
        py-12 lg:py-32 flex-col lg:flex-row items-center justify-center lg:mt-0 mt-14'>
          <div className='lg:w-1/2 w-full flex flex-col items-center lg:items-start text-center lg:text-left mb-12 lg:mb-0'>
          <div className='flex justify-center lg:justify-start gap-4 sm:gap-6 mb-6 sm:mb-7 w-full'>
            {socialIcons.map((social,index)=>(
              <a 
              key={index}
              href='#'
              target='_blank'
              data-aos-delay={`${400+index*100}`}
              className='transform hover:scale-110
              transition-transform duration-300 animate-bounce'>
                <img 
                src={social.icon}
                alt={social.alt}
                className={`w-8 h-28 sm:w-10 sm:h-10 object-contain ${darkMode
                  ? "" : 'filter brightness-75'
                }`}
                />

              </a>
            ))}

          </div>
          <h1 className={`title-font text-3xl sm:text-4xl lg:text-5xl mb-4 font-bold ${theme.textPrimary}`}
          data-aos='fade-up'
          data-aos-delay='500'>
            Hi,I'm Gurpreet Singh 
          </h1>
          <p className={`mb-6 sm:mb-8 leading-relaxed max-w-md
            sm:max-w-lg ${theme.textSecondary}`}
            data-aos='fade-up'
            data-aos-delay='600'>
            React Developer with a passion for clean UI & smooth UX.
            Focused on performance, responsiveness, and modern frontend architecture.
          </p>
          {/* button */}
          <div className='w-full pt-4 sm:pt-6'>
            <div className='flex flex-col sm:flex-row justify-center
            lg:justify-start gap-3 sm:gap-4'
            data-aos="fade-up"
            data-aos-delay='700'>
              <a href={CV_Resume} download className='w-full sm:w-auto'>
                <button className='w-full sm:w-auto inline-flex items-center justify-center text-white
                 bg-gradient-to-r from-orange-500 to-amber-500 border-0 py-3 px-6 sm:px-6 
                 hover:shadow-[0_0_40px_rgb(255,165,0,0.7)]
                 rounded-full text-base sm:text-lg font-semibold transition-all
                 duration-300 transform'>

                  <DownloadIcon />
                    Download CV
                  </button>
              </a>
              <a href='#contact' className='w-full sm:w-auto'>
                <button className={`w-full sm:w-auto inline-flex items-center ${theme.buttonSecondary} justify-center
                  border-1 border-orange-500 py-3 px-6 sm:px-6 
                 hover:shadow-[0_0_40px_rgb(255,165,0,0.7)]
                 rounded-full text-base sm:text-lg font-semibold transition-all
                 duration-300 transform`}>
                  <Mail/>
                  Contact Me

                </button>
              </a>
            </div>            
          </div>
          </div>
          {/* image */}
          <div className='lg:w-1/2 w-full max-w-md lg:max-w-lg mt-8
          lg:mt-0 flex justify-center'
          data-aos='fade-left'
          data-aos-delay='400'>
            <div className='relative w-4/5 sm:w-3/4 lg:w-full'>
            <div className='relative overflow-hidden'>
              <img 
              src={Workload}
              className='w-full h-55 object-cover transform hover:scale-105 transition-tranform duration-500'
              />
            </div>
            <img
            src={Hello} 
            alt='Hello icon'
            className='absolute 
             top-[6%] sm:top-[8%] md:top-[2%]
             left-[10%] sm:left-[40%] md:left-[12%]
             w-12 sm:w-16 md:w-20 lg:w-24
             drop-shadow-lg
             animate-bounce
             object-contain'
            />
          

            </div>

          </div>

        </div>
      </section>
      
    </div>
  )
}

export default HeroSection
