import ParaText from "@/components/Headings/ParaText"
import SectionHeading from "@/components/Headings/SectionHeading"
import SectionSubHeading from "@/components/Headings/SectionSubHeading"
import Wrapper from "@/components/Wrapper"
import { bookingSteps } from "@/utils/content"

export default function BookingJourney() {
   
  
    return (
      <Wrapper className="w-full lg:w-[90%] mx-auto">
        <SectionHeading className=" font-bold mb-8">Your journey in a snapshot</SectionHeading>
        
        <div className="flex flex-col lg:flex-row justify-between  gap-12">
          {/* Left Timeline */}
          <div className="w-full lg:basis-1/2 relative">
            <div className="absolute  left-[20px] sm:left-0 top-0 bottom-0 w-1 bg-[#2A26CE]" />
            
            {bookingSteps.map((step, index) => (
              <div 
                key={step.number}
                className={`relative flex mb-6 last:mb-0 ${index === 0 ? 'z-10' : ''}`}
              >
                {/* Blue vertical bar for first item */}
                {index === 0 && (
                  <div className="absolute  left-[20px] sm:left-0 top-0 bottom-0 w-1 bg-[#2A26CE]" />
                )}
                
                {/* Number indicator */}
                <div className="absolute left-0 sm:left-[-17px] top-5 flex items-center justify-center w-10 h-10 rounded-full bg-[#2A26CE] text-white text-base font-medium">
                  {step.number}
                </div>
                
                {/* Content */}
                <div className="ml-8 bg-gray-50 rounded-lg p-6 w-full">
                  <SectionSubHeading className="font-medium">{step.title}</SectionSubHeading>
                  {step.duration && (
                    <ParaText className=" text-gray-600 mt-2">{step.duration}</ParaText>
                  )}
                  {step.payment && (
                    <ParaText className=" text-gray-600 mt-0.5">{step.payment}</ParaText>
                  )}
                </div>
              </div>
            ))}
          </div>
  
          {/* Right Details */}
          <div className="flex-1">
            <h2 className="text-xl font-bold mb-6 sm:mb-8">Booking</h2>
            <div className="relative">
              <div className="absolute left-[7px] top-0 bottom-0 border-l-2 border-dashed border-gray-300" />
              
              {bookingSteps[0].details.map((detail, index) => (
                <div key={index} className="relative flex mb-4 sm:mb-8 last:mb-0">
                  <div className="absolute left-0 top-[7px] w-[15px] h-[15px] rounded-full border-2 border-gray-300 bg-white" />
                  <div className="ml-12">
                    <h4 className="font-medium mb-1">{detail.title}</h4>
                    {detail.description && (
                      <p className="text-sm text-gray-600">{detail.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Wrapper>
    )
  }
  
  