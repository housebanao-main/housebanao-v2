import ParaText from "@/components/Headings/ParaText";
import SectionHeading from "@/components/Headings/SectionHeading";
import SectionSubHeading from "@/components/Headings/SectionSubHeading";
import Wrapper from "@/components/Wrapper";
import React from "react";
import Customer1 from "@/public/images/Customer1.jpg";
import Customer2 from "@/public/images/Customer2.jpg";
import Customer3 from "@/public/images/Customer3.png";
import Image from "next/image";

const CustomerReviews = () => {
  const data = [
    {
      name: "Anil Kapoor",
      image: Customer2,
      description:
        " Building our dream home was something we’d always wanted to do, but we didn’t know where to start. That’s when we found HouseBanao. They took the time to understand our needs and helped us through every stage of the process. From design to completion,they made it easy, and now our home is everything we imagined—beautiful and functional.",
      city: "Software Engineer",
    },
    {
      name: "Priya Sharma",
      image: Customer1,
      description:
        "I'm so happy to share my experience with HouseBanao. When we decided to build our dream home, we were nervous about the whole process. But from the first meeting, the team at HouseBanao understood our vision. They guided us every step of the way, and the final result exceeded our expectations. Our home is now everything we envisioned and more!",
      city: "HouseWife",
    },
    {
      name: "Rajesh Verma",
      image: Customer3,
      description:
        "I’m excited to share my experience with HouseBanao, we were looking for a reliable partner, and HouseBanao was just what we needed. From day one, their team listened carefully to our ideas and offered great advice. They kept us informed throughout the process, and the quality of their work is exceptional. We couldn’t be happier with our new home!",
      city: "Business Man - Shop Owner",
    },
  ];
  return (
    <div className="bg-[#2A26CE] w-full lg:w-[90%] mx-auto">
      <Wrapper className={""}>
        <SectionHeading className={"text-white font-bold text-center mb-8"}>
          Real Stories from Satisfied Customers
        </SectionHeading>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {data.map((item, index) => (
            <Catd
              key={index}
              name={item.name}
              image={item.image}
              description={item.description}
              city={item.city}
            />
          ))}
        </div>
      </Wrapper>
    </div>
  );
};

const Catd = ({ name, image, description, city }) => {
  return (
    <div className=" space-y-2 p-4 border border-gray-400 rounded-xl text-white max-w-96 mx-auto ">
      <div className="h-60  overflow-hidden rounded-xl">
        <Image
          src={image}
          alt="icon"
          className="object-cover w-full rounded-xl max-h-[100%]"
        />
      </div>
      <ParaText className={"text-justify"}>{description}</ParaText>
      <div className="text-center mt-2">
        <SectionSubHeading className={"font-bold"}>{name}</SectionSubHeading>
        <SectionSubHeading className={"font-bold"}>{city}</SectionSubHeading>
      </div>
    </div>
  );
};

export default CustomerReviews;
