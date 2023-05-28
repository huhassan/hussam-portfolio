import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { BsLinkedin, BsTwitter, BsGithub } from "react-icons/bs";

function Page() {
  const contactItems = [
    {
      icon: <HiOutlineMail />,
      label: "email@hussam.info",
      href: "mailto:email@hussam.info",
    },
    {
      icon: <BsLinkedin />,
      label: "@hushas",
      href: "https://www.linkedin.com/in/hushas/",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      icon: <BsTwitter />,
      label: "@HeyHussam",
      href: "https://twitter.com/HeyHussam",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      icon: <BsGithub />,
      label: "@huhassan",
      href: "https://github.com/huhassan",
      target: "_blank",
      rel: "noopener noreferrer",
    },
  ];

  return (
    <main>
      <ul>
        {contactItems.map((item, index) => (
          <li className="mt-3 flex items-center" key={index}>
            {item.icon}
            <a
              className="ml-2 font-bold"
              href={item.href}
              target={item.target}
              rel={item.rel}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Page;
