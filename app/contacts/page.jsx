import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { BsLinkedin, FaSquareXTwitter, BsGithub } from "react-icons/bs";

function Page() {
  const contactItems = [
    {
      icon: <HiOutlineMail />,
      label: "heyhussam@proton.me",
      href: "mailto:heyhussam@proton.me",
    },
    {
      icon: <BsLinkedin />,
      label: "@hushas",
      href: "https://www.linkedin.com/in/hushas/",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      icon: <FaSquareXTwitter />,
      label: "@heyhussam",
      href: "https://x.com/heyhussam",
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
