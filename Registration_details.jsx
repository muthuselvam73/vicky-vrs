import React from 'react'
import AboutHeader from '../About/AboutHeader'
import AboutLocation from '../About/AboutLocation'
import AboutFooter from '../About/AboutFooter'

const Registration_details = () => {
  return (
    <div>
      <AboutHeader />
      <section>
        <div className="flex flex-col items-center p-8">

          <div className=" w-80 md:w-96 border border-orange-400">
            <div className="bg-[#0B0A2A] text-white  border-b border-orange-400">
              <p className='p-4'>Registration fee will be made only after the acceptance of your article.</p>
            </div>
            <div className="bg-[#0B0A2A] text-white border-b border-orange-400">
              <p className='p-4'>Payment can be made through Online Transfer (NEFT / IMPS) or Cash Deposit.</p>
            </div>
            <div className="bg-[#0B0A2A] text-white  border-b border-orange-400">
              <p className='p-4'> After making payment, kindly send us the proof of the payment (Screenshot / Reference Number / Transaction ID or Counter Slip) along with your Paper ID & necessary details.</p>
            </div>
            <div className="bg-[#0B0A2A] text-white border-b border-orange-400">
              <p className='p-4 m-0'>
                It is mandatory for at least one author of each accepted paper to register and attend the conference to present the paper.
              </p>
            </div>
            <div className="bg-[#0B0A2A] text-white">
              <p className='p-4'>All the abstracts of the selected papers will be published in the conference proceedings with ISBN.</p>
            </div>
          </div>

          <button className="mt-8 bg-[#FFA500] text-white font-bold py-2 px-6 rounded">
            Bank Details
          </button>
        </div>
      </section>
      <section>
        <div className="flex flex-col items-center ">
          <div className="w-full bg-gray-100 text-black border border-gray-300">
            <div className="flex justify-around p-4 border-b border-gray-300 ">
              <span className="font-bold">Account Name :</span>
              <span>J.K. Jothi Kalpana </span>
            </div>
            <div className="flex justify-around p-4 border-b border-gray-300">
              <span className="font-bold">Account Number :</span>
              <span>045100050302269</span>
            </div>
            <div className="flex justify-around p-4 border-b border-gray-300">
              <span className="font-bold">Branch :</span>
              <span>Villupuram</span>
            </div>
            <div className="flex justify-around p-4 border-b border-gray-300">
              <span className="font-bold">IFSC Code :</span>
              <span>TMBL0000045</span>
            </div>
            <div className="flex justify-around p-4">
              <span className="font-bold">MICR :</span>
              <span>605060005</span>
            </div>
          </div>
        </div>
      </section>

      <AboutLocation />
      <AboutFooter />

    </div>
  )
}

export default Registration_details
