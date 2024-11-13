import React from 'react'
import AboutHeader from '../About/AboutHeader'
import AboutLocation from '../About/AboutLocation'
import AboutFooter from '../About/AboutFooter'

const Journal_Publication = () => {
  return (
    <div>
      <AboutHeader />
      <div className="text-center h-[600px] py-8 md:py-10 text-orange-500 font-bold text-lg space-y-6 md:space-y-8 bg-white flex flex-col justify-center items-center">
        <h3 className="text-base md:text-lg lg:text-xl font-bold text-blue-500 px-4">
          Selected, peer-reviewed, and plagiarism-free high-quality articles will
          <br className="hidden md:block" />
          be recommended for publication in IEEE Access and SCOPUS.
        </h3>

        <div className="w-full max-w-3xl h-auto md:h-16 bg-blue-500 text-white text-lg md:text-2xl font-Trebuchet text-center rounded-lg">
          <p className="my-3">
            International Journal of Research in Engineering Science (IJRES)
          </p>
        </div>

        <div className="w-full max-w-3xl h-auto md:h-16 bg-blue-500 text-white text-lg md:text-2xl font-Trebuchet text-center rounded-lg">
          <p className="my-3">
            International Journal of Research in Engineering Science (IJRES)
          </p>
        </div>

        <div className="w-full max-w-3xl h-auto md:h-16 bg-blue-500 text-white text-lg md:text-2xl font-Trebuchet text-center rounded-lg">
          <p className="my-3">
            International Journal of Research in Engineering Science (IJRES)
          </p>
        </div>
      </div>
      <AboutLocation />
      <AboutFooter />

    </div>
  )
}

export default Journal_Publication
