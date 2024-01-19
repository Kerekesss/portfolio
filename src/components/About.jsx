import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full sm:h-screen bg-custom1 text-gray-300  ">
      <div className="flex flex-col justify-center items-center w-full h-full    ">
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
              My journey into the world of web development began in a high
              school class called "Web Design". It was there that I first dipped
              my toes into the world of HTML and CSS. Fast forward a few years,
              and here I am, fully immersed in the world of programming because,
              well, it turned out to be my destiny, and I absolutely love it.
              <br />
              I kicked off my programming adventure by revisiting the basics,
              refreshing my knowledge of HTML and CSS. As I delved deeper,
              JavaScript quickly became my language of choice for bringing
              interactivity to the web. The pivotal moment, though, was when I
              embraced React.js and crafted my first front-end project. The
              thrill of seeing my code come to life sparked a passion that
              continues to drive me every day. <br />
              Since that first project, I've been on a relentless journey of
              growth. Each day presents an opportunity to explore new projects,
              conquer programming challenges, and refine my skills. The process
              of learning is what keeps me hooked, there's always something new
              to discover and create. <br />
              As I ventured further, I integrated Bootstrap and Tailwind CSS
              into my toolkit, elevating my ability to build sleek, responsive,
              and visually appealing interfaces. It's not just about the code;
              it's about crafting digital experiences that leave a mark. <br />
              Beyond the code, I thrive on being part of a community that values
              collaboration and knowledge sharing. The tech world is dynamic,
              and I stay current by embracing new technologies and learning from
              the experiences of others.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
