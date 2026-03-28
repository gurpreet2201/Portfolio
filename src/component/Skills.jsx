import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import reactjsx from '../assets/reactjsx.png'
import framer_motion from '../assets/framer_motion.png'
import tailwind from '../assets/tailwind.png'

const Skills = ({darkMode}) => {
    const skills = [
        {name: 'HTML' , icon: html, level: 95,
            color: 'from-orange-500 to-amber-500'
        },
        {name: 'CSS' , icon: css, level: 92,
            color: 'from-blue-500 to-cyan-500'
        },
        {name: 'JavaScript' , icon: javascript, level: 78,
            color: 'from-yellow-500 to-amber-500'
        },
        {name: 'React' , icon: reactjsx, level: 60,
            color: 'from-cyan-500 to-blue-500'
        },
        {name: 'Framer Motion' , icon: framer_motion, level: 95,
            color: 'from-teal-500 to-cyan-500'
        },
        {name: 'Tailwind Css' , icon: tailwind, level: 92,
            color: 'from-orange-500 to-amber-500'
        }
    ]
  return (
  <section id='skills' className='py-10'>
     <h2 className='text-3xl top-2 sm:text-4xl font-bold text-center mb-8 
                 text-transparent bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text'
                 data-aos="fade-up"
                 data-aos-delay='300'>
                    My Skills
                 </h2>
  <div className='max-w-6xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6'
  data-aos='fade-up'
  data-aos-delay='300'>
    
    {skills.map((skill, index) => (
      <div
        key={index}
        className='p-4 rounded-xl shadow-lg flex flex-col items-center 
                   hover:scale-105 transition-all duration-300'
      >
        <img src={skill.icon} alt={skill.name} className='w-12 h-12 mb-3' />
        <h3 className='font-semibold'>{skill.name}</h3>

        {/* Progress bar */}
        <div className='w-full bg-gray-200 rounded-full h-2 mt-2'>
          <div
            className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
            style={{ width: `${skill.level}%` }}
          ></div>
        </div>
      </div>
    ))}

  </div>
</section>
  )
}

export default Skills
