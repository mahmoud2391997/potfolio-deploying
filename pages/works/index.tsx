import Image from "next/image";
import Link from "next/link";
import { Orbitron } from 'next/font/google'; // Add this line

const orbitron = Orbitron({ subsets: ['latin'] }); // Add this line

export default function Works() {
  const works = [
    {
      image: "/dashboard.png",
      title: "Groom hair and beauty salon : Admin Panel",
      using: "React.js - Redux - Node.js - firebase",
      link: "https://admin-panel-preview.vercel.app/dashboard",
      description:
        "The Admin Panel for Groom Hair and Beauty Salon is a web application designed to manage and oversee the operations of the salons. It provides a user-friendly interface for administrators to handle appointments, customer data, and service offerings. The panel allows for efficient scheduling, tracking of services rendered, and management of staff assignments. With features like analytics and reporting, the admin can monitor performance metrics and make informed decisions to enhance the salons' and customers operations.",
    },
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
      image: "/almostafa.png",
      title: "Al-Mustafa Online Dairy Products Store",
      using: "Next.TS - Node.js - MongoDB",
      link: "https://almostafa-ecommerce.vercel.app/",
      description:
        " Al-Mustafa Online Dairy Products Store is an E-commerce web app facilitating the sale of dairy products. It offers a user-friendly interface for browsing and purchasing items, with features like product categories, detailed descriptions, and secure payment options. The app ensures a seamless shopping experience, allowing customers and markets to easily find and order their favorite dairy products online.",
    },
    {
      image: "/trio.png",
      title: "Personal Trainer Fitness Website",
      using: "Next.TS - Node.js - MongoDB - Firebase",
      link: "https://triofitnessindustry.vercel.app/",
      description:"A personal training web app is an online platform accessible via a web browser, designed to help users achieve their fitness goals. It offers a variety of features, including personalized workout and nutrition plans created by professional trainers. Users can subscribe to tailored fitness packages, track their progress, and access expert guidance, making it a convenient and effective solution for staying fit and healthy."
    },
    {
      image: "/seven.png",
      title: "Seven Fashion E-commerce Website",
      using: "Next.js - Node.js - MongoDB - Express.js",
      link: "https://seven-fashion.vercel.app/",
      description:
        "Seven Fashion is an E-commerce web app that specializes in Women fashion products. It offers a user-friendly interface for browsing and purchasing clothing. The app features product categories, detailed descriptions, and secure payment options, ensuring a seamless shopping experience for customers. With a focus on fashion trends and styles, Seven Fashion provides a convenient platform for users to explore and shop for their favorite fashion items online.",
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
