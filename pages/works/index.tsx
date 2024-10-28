import Image from "next/image";
import Link from "next/link";

export default function Works() {
  const works = [
    {
      image: "/user.jpg",
      title: "Artix (User Website)",
      using: "Reactjs - Redux - Node.js - MongoDB - Stripe Payment",
      link: "https://art-handmade-ecommerce.vercel.app/",
      description:
        "Website displays handicrafts and art pieces in our application. Our application helps clients to find the best products. Also, it provides events for displaying products and artistic talents, where clients can book a ticket. Moreover, we send the ticket to mail provided by our client.",
    },
    {
      image: "/travelling.png",
      title: "Travelling and Booking Website",
      using: "Next.TS - Node.js - MongoDB - Stripe Payment",
      link: "https://travelling-murex.vercel.app/",
      description:
        " A traveling web app is an online platform accessible through a web browser that offers a wide range of features and services to help users plan, organize, and enhance their travel experiences,Users can create and manage their travel itineraries, including adding destinations",
    },
    {
      image: "/Tasks.png",
      title: "Task Management Web App",
      using:
        "React.js - Node.js - MongoDB - ReduxToolKit - Yup validation - React Hook Form",
      link: "https://todo-web-app-zeta-five.vercel.app/",
      description:
        "The Task Management App is a robust and intuitive platform designed for users to efficiently manage their tasks. Built with React, Redux Toolkit, and React Hook Form, the application provides a seamless experience for creating, editing, deleting, and viewing tasks, along with customizable inputs and validations",
    },
  ];
  return (
    <section className=" w-[85%]  h-auto p-14 flex flex-col justify-evenly text-white lg:my-0 my-36 ">
      {works.map((work, index) => (
        <div
          key={index}
          className="w-full my-5  h-auto flex flex-col md:flex-row p-2 bg-[#7c7c7c]"
        >
          <div className="lg:w-1/2 w-full min-w-[240px]">
            <Image
              src={work.image}
              alt="My Image"
              width={500}
              height={500}
              className="w-full h-full"
            />
          </div>
          <div className="px-4 flex flex-col justify-between">
            <div className="text-2xl font-bold">{work.title}</div>
            <div className="flex jus">
              <div className="text one">Website Link:</div>
              <Link className="ml-1" href={work.link}>
                <p className="text-blue-600 hover:underline cursor-pointer">
                  {work.link}
                </p>
              </Link>
            </div>
            <p className="text-lgs">Using:{work.using}</p>

            <p>{work.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
