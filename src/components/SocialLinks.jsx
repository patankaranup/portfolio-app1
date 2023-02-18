import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {SiLeetcode, SiHackerearth, SiHackerrank} from "react-icons/si"
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/anup-patankar",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/patankaranup",
    },
    {
      id:3,
      child:(
        <>
          Leetcode <SiLeetcode size={30}/>
        </>
      ),
      href:"https://leetcode.com/patankaranup/",
    },
    {
      id:4,
      child:(
        <>
          Hackerearth <SiHackerearth size={30}/>
        </>
      ),
      href:"https://www.hackerearth.com/@webdeveloper127.0.0.1",
    },
    {
      id:5,
      child:(
        <>
          HackerRank <SiHackerrank size={30} />
        </>
      ),
      href:"https://www.hackerrank.com/webdeveloper1271",
    },
    {
      id: 6,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:anuppatankar2001@gmail.com",
    },
    {
      id: 7,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/resume.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-110px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
