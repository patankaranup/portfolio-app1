import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-1">
        As the world becomes increasingly digital, the demand for skilled software engineers continues to grow. In this fast-paced and rapidly evolving field, it is essential for a software engineer to possess a diverse range of technical skills and expertise. With experience in the MERN stack, C++, Java, Python, machine learning (ML), deep learning (DL), and data science, I am a highly accomplished and versatile software engineer.
        </p>

        <br />

        <p className="text-xl">
        With expertise in the MERN stack, I have a comprehensive understanding of modern web development technologies, including MongoDB, Express, React, and Node.js. I am able to design, develop, and maintain scalable web applications that are both reliable and efficient. Additionally, my proficiency in C++, Java, and Python allows me to develop software across a wide range of platforms and industries, from embedded systems to enterprise applications.
        </p>
        <br />
        <p className="text-xl">
        Additionally, my proficiency in ML, DL, and data science enables me to leverage cutting-edge technologies to develop data-driven solutions.
        </p>
      </div>
    </div>
  );
};

export default About;
