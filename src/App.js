import "./App.css";
import { gsap } from "gsap-trial";
import ScrambleTextPlugin from "gsap-trial/ScrambleTextPlugin";
import avatar from "./images/avatar.jpg";
import FacebookIcon from "./icons/FacebookIcon";
import GithubIcon from "./icons/GithubIcon";
import InstagramIcon from "./icons/InstagramIcon";
import XIcon from "./icons/XIcon";
import { useEffect } from "react";

gsap.registerPlugin(ScrambleTextPlugin);

function App() {
  const socialNetwork = [
    {
      title: "Facebook",
      icon: <FacebookIcon className="size-4 text-white" />,
      link: "/",
    },
    {
      title: "Github",
      icon: <GithubIcon className="size-4 text-white" />,
      link: "/",
    },
    {
      title: "Instagram",
      icon: <InstagramIcon className="size-4 text-white" />,
      link: "/",
    },
    {
      title: "Twitter",
      icon: <XIcon className="size-4 text-white" />,
      link: "/",
    },
  ];

  useEffect(() => {
    gsap.to(document.querySelector("#name"), {
      duration: 2,
      scrambleText: "Truong Tuoc Phi",
    });

    gsap.to(document.querySelector("#content"), {
      duration: 2,
      scrambleText: "I'm a web developer",
    });
  }, []);

  return (
    <div className="w-full h-screen bg-slate-900 flex flex-col justify-center items-center">
      <div className="flex items-center gap-14">
        <img src={avatar} alt="avatar" className="size-36 rounded-full" />
        <div className="flex flex-col gap-6">
          <div className="text-white font-bold text-4xl tracking-wide">
            Hi, I'm
          </div>
          <div
            id="name"
            className="text-blue-900 font-bold text-6xl tracking-widest"
          ></div>
        </div>
      </div>
      <div className="mt-12">
        <div
          id="content"
          className="text-4xl text-white font-bold tracking-widest"
        ></div>
        <div className="flex justify-center gap-4 mt-4">
          {socialNetwork.map((items) => (
            <a href={items.link} key={items.title}>
              <div className="flex items-center gap-2">
                {items.icon}
                <p className="text-white font-thin text-sm">{items.title}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
