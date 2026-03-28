import React from 'react'
import food from '../assets/food.png'

const Project = ({ darkMode }) => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Built a Zomato-inspired web app with React and Firebase.",
      image: food,
      link: "https://bespoke-truffle-567755.netlify.app/",
      tags: ['React', 'Firebase']
    }
  ]

  return (
    <section
      id='project'
      className='py-24'
      style={{
        backgroundColor: darkMode ? 'bg-gray-900' : 'bd-gray-50'
      }}
    >
      <div className='container mx-auto px-4'>

        {/* Heading */}
        <div className='text-center mb-12'>
          <h2
            className='text-3xl sm:text-4xl font-bold mb-3'
            style={{ color: darkMode ? 'white' : '#1f2937' }}
           data-aos='fade-up'
           data-aos-delay='400'>
            My <span className='text-orange-500'>Project</span>
          </h2>

          <p
            className='max-w-xl mx-auto'
            style={{ color: darkMode ? '#d1d5db' : '#6b7280' }}
          data-aos='fade-up'
          data-aos-delay='400'>
            
            A showcase of my recent work
          </p>
        </div>

        {/* Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
        data-aos='fade-up'
        data-aos-delay='450'>

          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target='_blank'
              rel='noopener noreferrer'
              className='group rounded-xl border overflow-hidden shadow-lg 
                         hover:scale-105 transition-all duration-300 cursor-pointer'
              style={{
                background: darkMode
                  ? 'linear-gradient(to right, #1f2937 , #111827)'
                  : '#ffffff',
                borderColor: darkMode ? '#374151' : '#e5e7eb'
              }}
            >

              {/* Image */}
              <div className='h-48 overflow-hidden'
              >
                <img
                
                  src={project.image}
                  alt={project.title}
                  className='w-full h-full object-cover group-hover:scale-110 transition duration-500'
                />
              </div>

              {/* Content */}
              <div className='p-4'>
                <h3 className='font-bold text-lg mb-2'>
                  {project.title}
                </h3>

                <p
                  className='text-sm mb-3'
                  style={{ color: darkMode ? '#d1d5db' : '#6b7280' }}
                >
                  {project.description}
                </p>

                {/* Tags */}
                <div className='flex gap-2 flex-wrap mb-3'>
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className='text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded'
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Button */}
                <span className='text-orange-500 font-semibold'>
                  View Project →
                </span>
              </div>

              

            </a>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Project