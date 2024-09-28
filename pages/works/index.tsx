import Image from "next/image";
import Link from "next/link";

export default function Works() {
  return (
    <section className=" w-[85%]  h-[1250px] md:h-[600px] lg:h-[550px] flex flex-col justify-evenly text-white lg:my-0 my-36 ">
      <div className="w-full  h-auto flex flex-col md:flex-row p-2 bg-[#7c7c7c]">
        <div className="lg:w-1/2 w-full min-w-[240px]">
          <Image
            src="/user.jpg"
            alt="My Image"
            width={500}
            height={500}
            className="w-full h-full"
          />
        </div>
        <div className="px-4 flex flex-col justify-between">
          <div className="text-2xl font-bold">Artix (User Website)</div>
          <div className="flex jus">
            <div className="text one">Website Link:</div>
            <Link
              className="ml-1"
              href={"https://art-handmade-ecommerce.vercel.app/"}
            >
              <p className="text-blue-600 hover:underline cursor-pointer">
                https://art-handmade-ecommerce.vercel.app/
              </p>
            </Link>
          </div>
          <p className="text-lgs">Using: Reactjs - Redux - Node.js - MongoDB</p>

          <p>
            Website displays handicrafts and art pieces in our application. Our
            application helps clients to find the best products. Also, it
            provides events for displaying products and artistic talents, where
            clients can book a ticket. Moreover, we send the ticket to mail
            provided by our client.
          </p>
        </div>
      </div>
      <div className="w-full   h-auto  flex flex-col md:flex-row p-2 bg-[#7c7c7c]">
        <div className="lg:w-3/6 w-full min-w-[240px]">
          <Image
            src="/travelling.png"
            alt="My Image"
            width={500}
            height={500}
            className="w-full h-full border-r- border-white"
          />
        </div>
        <div className="px-4 flex flex-col justify-between">
          <div className="text-2xl font-bold">
            Travelling and Booking Website
          </div>
          <div className="flex">
            <div className="text one">Website Link:</div>
            <Link className="ml-1" href={"https://art-admin-one.vercel.app/"}>
              <p className="text-blue-600 hover:underline cursor-pointer">
                https://travelling-murex.vercel.app/{" "}
              </p>
            </Link>
          </div>
          <p className="text-lgs">Using: Next.TS </p>
          <p>
            A traveling web app is an online platform accessible through a web
            browser that offers a wide range of features and services to help
            users plan, organize, and enhance their travel experiences,Users can
            create and manage their travel itineraries, including adding
            destinations
          </p>
        </div>
      </div>
    </section>
  );
}
