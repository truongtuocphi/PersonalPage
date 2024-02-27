import React from "react";
import FacebookIcon from "./icons/FacebookIcon";
import GithubIcon from "./icons/GithubIcon";
import InstagramIcon from "./icons/InstagramIcon";
import XIcon from "./icons/XIcon";

export default function SocialList() {
  const socialNetwork = [
    {
      title: "Facebook",
      icon: <FacebookIcon className="size-4 text-white sm:size-5" />,
      link: "https://www.facebook.com/profile.php?id=100010928469657",
    },
    {
      title: "GitHub",
      icon: <GithubIcon className="size-4 text-white sm:size-5" />,
      link: "https://github.com/truongtuocphi",
    },
    {
      title: "Instagram",
      icon: <InstagramIcon className="size-4 text-white sm:size-5" />,
      link: "https://www.instagram.com/truong_phii_/",
    },
    {
      title: "Twitter",
      icon: <XIcon className="size-4 text-white sm:size-5" />,
      link: "https://twitter.com/tuoc_phi",
    },
  ];

  return (
    <div className="flex justify-center gap-8 mt-16">
      {socialNetwork.map((items) => (
        <a href={items.link} key={items.title} target="_blank" rel="noreferrer">
          <div className="flex items-center gap-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            {items.icon}
            <p className="text-white font-thin text-xs hidden sm:text-sm sm:block">
              {items.title}
            </p>
          </div>
        </a>
      ))}
    </div>
  );
}
