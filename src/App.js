import "./App.css";
// import { gsap } from "gsap-trial";
// import ScrambleTextPlugin from "gsap-trial/ScrambleTextPlugin";
import avatar from "./images/avatar.jpg";
import FacebookIcon from "./icons/FacebookIcon";
import GithubIcon from "./icons/GithubIcon";
import InstagramIcon from "./icons/InstagramIcon";
import XIcon from "./icons/XIcon";
// import { useEffect } from "react";

// gsap.registerPlugin(ScrambleTextPlugin);

function App() {
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

  // useEffect(() => {
  //   gsap.to(document.querySelector("#name"), {
  //     duration: 2,
  //     scrambleText: "Truong Tuoc Phi",
  //   });

  //   gsap.to(document.querySelector("#content"), {
  //     duration: 2,
  //     scrambleText: "I'm a web developer",
  //   });
  // }, []);

  return (
    <div className="w-full h-screen bg-slate-900 flex flex-col justify-center items-center p-20">
      <div className="flex flex-col items-center gap-5 md:gap-14 md:flex-row">
        <img
          src={avatar}
          alt="avatar"
          className="size-28 rounded-full sm:size-36"
        />
        <div className="flex flex-col gap-2 sm:gap-6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <div className="text-white font-normal text-2xl tracking-wide sm:text-4xl sm:font-bold">
            Hi, I'm
          </div>
          <div
            id="name"
            className="text-blue-900 font-bold text-4xl tracking-widest md:text-6xl"
          >
            Truong Tuoc Phi
          </div>
        </div>
      </div>
      <div className="mt-12">
        <div
          id="content"
          className="text-2xl text-white text-center font-bold tracking-widest md:text-5xl"
        >
          I'm a web developer
        </div>
        <div className="flex justify-center gap-8 mt-8">
          {socialNetwork.map((items) => (
            <a
              href={items.link}
              key={items.title}
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex items-center gap-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                {items.icon}
                <p className="text-white font-thin text-xs hidden sm:text-sm sm:block">
                  {items.title}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
