import React from 'react'
import AboutHeader from '../About/AboutHeader'
import AboutLocation from '../About/AboutLocation'
import AboutFooter from '../About/AboutFooter'

const Key_Dates = () => {
    const dates = [
        { description: "Last Date for Full Paper Submission", date: "17-04-2024", bgColor: "bg-[#00003F]" },
        { description: "Notification of Paper Acceptance", date: "18-04-2024", bgColor: "bg-[#8eaf12]" },
        { description: "Camera Ready Paper Submission", date: "20-04-2024", bgColor: "bg-[#00003F]" },
        { description: "Last Date for Registration / Payment", date: "22-04-2024", bgColor: "bg-[#8eaf12]" },
    ];
    return (
        <div>
            <AboutHeader />
            <div className="w-full my-12 md:my-24">
                {dates.map((item, index) => (
                    <div key={index} className={`${item.bgColor} flex justify-center py-4 md:py-6`}>
                        <div className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-4">
                            <span className="text-white border border-white px-3 md:px-4 py-3 md:py-4 font-bold text-sm md:text-base lg:text-lg text-center">
                                {item.description}
                            </span>
                            <span className="text-white border border-white px-3 md:px-4 py-3 md:py-4 font-bold text-sm md:text-base lg:text-lg text-center">
                                {item.date}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
            <AboutLocation />
            <AboutFooter />

        </div>
    )
}

export default Key_Dates
