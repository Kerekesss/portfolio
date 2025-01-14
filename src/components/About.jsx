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
            My journey into web development began with FreeCodeCamp, where I created my first front-end projects and laid a strong foundation in HTML and CSS. <br /> 
            As I progressed, I expanded my skills by diving into JavaScript, eventually embracing React.js to build dynamic, interactive web applications. <br />
            To strengthen my back-end expertise, I completed an in-depth PHP course under the guidance of a senior developer. This training allowed me to create my first full-stack website, combining PHP and MySQL to manage data and functionality effectively. <br />
            Over time, I added tools like Tailwind CSS to my skillset, enhancing my ability to design clean, responsive user interfaces. <br />
            I like programming because it helps solve problems and create useful solutions. Every project teaches me something new and helps me improve my skills.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
