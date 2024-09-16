export default function TechnologiesPage() {
  return (
    <div className="grid lg:grid-cols-5 lg:w-[80%] xl:w-[70%] w-[90%] md:grid-cols-3 sm:grid-cols-2 grid-cols-1 h-auto my-36 gap-6 text-white lg:my-auto">
      <section className=" bg-[#7c7c7c] rounded w-full flex flex-col justify-between h-[300px]">
        <h2 className="text-2xl w-full text-center">
          Client Side Technologies
        </h2>
        <ul className=" list-disc list-inside flex flex-col w-[80%] h-[60%] justify-between m-auto ">
          <li>HTML</li>
          <li>CSS</li>
          <li>JS</li>
          <li>TS</li>
        </ul>
      </section>
      <section className=" bg-[#7c7c7c] rounded w-full flex flex-col justify-between h-[300px]">
        <h2 className="text-2xl w-full text-center">CSS Frameworks</h2>
        <ul className=" list-disc list-inside flex flex-col w-[80%] h-[60%] justify-between m-auto ">
          <li>Tailwind CSS</li>
          <li>Bootstrap</li>
          <li>SASS</li>
        </ul>
      </section>
      <section className=" bg-[#7c7c7c] rounded w-full flex flex-col justify-between h-[300px]">
        <h2 className="text-2xl w-full text-center">Front-End Frameworks</h2>
        <ul className=" list-disc list-inside flex flex-col w-[80%] h-[60%] justify-between m-auto ">
          <li>React.Js</li>
          <li>React.Ts</li>
          <li>Next.Js</li>
          <li>Next.Ts</li>
        </ul>
      </section>
      <section className=" bg-[#7c7c7c] rounded w-full flex flex-col justify-between h-[300px]">
        <h2 className="text-2xl w-full text-center">
          Backend Languages and Frameworks
        </h2>
        <ul className=" list-disc list-inside flex flex-col w-[80%] h-[60%] justify-between m-auto ">
          <li>Node.Js</li>
          <li>Node.Ts</li>
          <li>Express.Js</li>
          <li>Express.Ts</li>
        </ul>
      </section>
      <section className=" bg-[#7c7c7c] rounded w-full flex flex-col justify-between h-[300px]">
        <h2 className="text-2xl w-full text-center">Databases</h2>
        <ul className=" list-disc list-inside flex flex-col w-[80%] h-[60%] justify-between m-auto ">
          <li>MongoDB</li>
          <li>My SQL</li>
          <li>FireBase</li>
        </ul>
      </section>
    </div>
  );
}
