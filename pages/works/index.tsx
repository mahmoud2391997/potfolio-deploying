import Image from "next/image";
import Link from "next/link";
import { Orbitron } from 'next/font/google'; // Add this line

const orbitron = Orbitron({ subsets: ['latin'] }); // Add this line

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
      image: "/trio.png",
      title: "Personal Trainer Fitness Website",
      using: "Next.TS - Node.js - MongoDB - Firebase",
      link: "https://triofitnessindustry.vercel.app/",
      description:"A personal training web app is an online platform accessible via a web browser, designed to help users achieve their fitness goals. It offers a variety of features, including personalized workout and nutrition plans created by professional trainers. Users can subscribe to tailored fitness packages, track their progress, and access expert guidance, making it a convenient and effective solution for staying fit and healthy."
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
    {
      image: "/tv.png",
      title: "TV Web App",
      using: "Next.js - Node.js - MongoDB - Express.js",
      link: "https://tv-deploying.vercel.app/",
      description:
        "The TV App is a comprehensive platform designed for users to explore, organize, and track their favorite shows and movies. Built with Next.js, the app offers a seamless experience with dynamic browsing through categories, genres, and personalized watchlists. Users can view detailed information on each title, including release date, cast, and storyline, while rating and saving shows for future viewing. The app's intuitive structure allows for easy navigation and smooth performance, providing users with an engaging and personalized streaming guide.",
    },
    {
      image: "/3d.png",
      title: "3D Building Visualization On Map",
      using: "React.js - OpenStreetMap - Leaflet.js - Three.js",
      link: "https://3d-building-map-rho.vercel.app/",
      description:
        "This project is an interactive web application combining a 2D Leaflet map with a 3D building visualization using Three.js. It dynamically positions a 3D building model on the map, updating in real-time as users pan or zoom, offering a seamless exploration experience. Key features include marker clustering, customizable 3D floors, and smooth map-3D integration.",
    },
  ];
  return (
    <section className={`w-[85%] min-w-[260px] h-auto md:p-14 flex flex-wrap justify-evenly text-white lg:my-10 my-36 ${orbitron.className}`}> {/* Add orbitron class */}
      {works.map((work, index) => (
        <div
          key={index}
          className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96"
        >
          <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
            <img
              src={work.image}
              alt="card-image"
              className="border border-black rounded-md"
            />
          </div>
          <div className="p-4">
            <h6 className="mb-2 text-slate-800 text-xl font-semibold">
              {work.title}
            </h6>
            <p className="text-slate-600 leading-normal font-light">
              {work.description}
            </p>
          </div>
          <div className="p-4">
            <h6 className="mb-2 text-slate-800 text-xl font-semibold">
              Using: {work.using}
            </h6>
          </div>

          <div className="px-4 pb-4 pt-0 mt-2">
            <button
              className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              onClick={() => window.open(work.link, "_blank")}
              >
              View Project
            </button>
          </div>
        </div>
      ))}
    </section>
  );
}
