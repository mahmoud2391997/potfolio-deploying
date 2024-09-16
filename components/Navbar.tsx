import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [selected, setSelected] = useState("home");

  return (
    <div className="absolute top-0 h-[70px] w-[100%] flex flex-col items-center">
      <nav className="sm:w-[86.7%] w-full bg-[#1B1B1B] h-[70px] absolute top-0 rounded-b-md"></nav>
      <ul className="absolute flex sm:justify-between sm:w-[70%] w-[90%] justify-around sm:left-[15%] left-0 top-[23px] text-[#7c7c7c]">
        <li className={selected == "home" ? "text-white" : ""}>
          <Link
            href={"/"}
            onClick={() => {
              setSelected("home");
            }}
          >
            Home
          </Link>
        </li>
        <li className={selected == "technologies" ? "text-white" : ""}>
          <Link
            href={"/technologies"}
            onClick={() => {
              setSelected("technologies");
            }}
          >
            Technologies
          </Link>
        </li>
        <li className={selected == "skills" ? "text-white" : ""}>
          <Link
            href={"/skills"}
            onClick={() => {
              setSelected("skills");
            }}
          >
            Skills
          </Link>
        </li>
        <li className={selected == "works" ? "text-white" : ""}>
          <Link
            href={"/works"}
            onClick={() => {
              setSelected("works");
            }}
          >
            Works
          </Link>
        </li>
      </ul>
    </div>
  );
}
