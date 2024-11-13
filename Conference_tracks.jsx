import React from 'react'
import AboutHeader from '../About/AboutHeader'
import AboutLocation from '../About/AboutLocation'
import AboutFooter from '../About/AboutFooter'


const Conference_tracks = () => {
  
  return (
    <div>
           <AboutHeader/>
           <div className="text-center py-10 text-orange-500 font-bold text-lg space-y-10 bg-white">
                <h1 className='font-bold text-25 '> All Branches and subfields of Engineering </h1>
                <hr className="border-orange-500 border-t-2 mt-4 text-center" />
                <h1 className='font-bold text-25 '> All fields of Science, Applied Science & Library Science </h1>
                <hr className="border-orange-500 border-t-2 mt-4 text-center" />
                <h1 className='font-bold text-25 '>Humanities </h1>
                <hr className="border-orange-500 border-t-2 mt-4 text-center" />
                <h1 className='font-bold text-25 '> Management, Commerce, Bio-Technology Bio-informatics, etc.. </h1>
                <hr className="border-orange-500 border-t-2 mt-4 text-center" />
        </div>
            <AboutLocation/>
         <AboutFooter/>
      
    </div>
  )
}

export default Conference_tracks
