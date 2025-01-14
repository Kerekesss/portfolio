import React from "react";

const About = () => {
  return (
    <div name="about" className=" bg-custom1 text-gray-300  ">
      <div className="flex flex-col justify-center items-center w-full height    ">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8 ">
          <div className="text-4xl font-bold sm:text-right">
            <p>
              Hi. I'm Krisztofer, nice to meet you. Please take a look around.
            </p>
          </div>
          <div>
            <p>
            I started learning web development at FreeCodeCamp, where I built my first front-end projects and learned the basics of HTML and CSS. <br />
            As I continued learning, I improved my skills in JavaScript and started using React.js to create interactive web applications. <br />
            To learn back-end development, I took a PHP course with a senior developer, which helped me build my first full-stack website using PHP and MySQL. Soon after, I got a job as a Software Engineer, where I worked on real-world projects and developed my skills further. <br />
            I also learned to use tools like Tailwind CSS to create responsive and easy-to-use interfaces. <br />
            Why did i choose programming? <br />
            Programming allows me to be challenged, think about solutions, and continuously improve my skills with every project I take on.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
