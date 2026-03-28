import me from '../assets/me.jpeg'

const About = ({ darkMode }) => {
  return (
    <section
      id='about'
      className={`min-h-screen flex items-center justify-center px-4 sm:px-6
      `}
    >
      <div className='max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center'>

        {/* LEFT SIDE - IMAGE */}
        <div className="relative group order-2 lg:order-1">

          {/* Blurred Background */}
          <img
            src={me}
            className="absolute inset-0 top-10 w-full h-72 object-cover 
                       blur-2xl scale-110 opacity-40 rounded-2xl"
          />

          {/* Main Image */}
          <img
            src={me}
            className="relative w-full h-full top-10 object-cover rounded-2xl border-radius
                       shadow-2xl border-4 border-white
                       group-hover:scale-105 transition-all duration-500"
            data-aos='zoom-in'
            data-aos-delay='300'
          />
        </div>

        {/* RIGHT SIDE - TEXT */}
        <article
          data-aos='fade-left'
          data-aos-delay='300'
          className='text-center lg:text-left order-1 lg:order-2'
        >
          <header>
            <h1
              className='text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6
              text-transparent bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text'
              data-aos='fade-up'
              data-aos-delay='400'
            >
              About Me
            </h1>
          </header>

          <p
            className={`text-sm sm:text-base lg:text-lg xl:text-xl mb-6 sm:mb-8 leading-relaxed
            ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
          >
             Hi! I’m Gurpreet singh, a passionate developer creating modern, 
             responsive web applications using React.js, Tailwind CSS , Freamer-Motion and  AOS <br /><br />
             I enjoy learning new technologies, solving challenging problems, and delivering projects that are both visually appealing and user-friendly.
              My goal is to turn ideas into functional, elegant websites.
          </p>
        </article>

      </div>
    </section>
  )
}

export default About