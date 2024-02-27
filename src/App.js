import "./App.css";
import avatar from "./images/avatar.jpeg";
import SocialList from "./components/SocialList";

function App() {
  return (
    <div className="h-screen bg-gradient-to-t from-slate-900 from-80% to-blue-900 flex flex-col justify-center items-center p-10">
      <div className="flex flex-col items-center gap-5 md:gap-14 md:flex-row">
        <img
          src={avatar}
          alt="avatar"
          className="size-48 rounded-full sm:size-36"
        />
        <div className="flex flex-col gap-2 sm:gap-6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300">
          <div className="text-white font-normal text-lg tracking-wide sm:text-4xl sm:font-bold">
            Hi, I'm
          </div>
          <div className="text-blue-600 font-bold text-3xl tracking-widest md:text-5xl">
            Truong Tuoc Phi
          </div>
        </div>
      </div>
      <div className="mt-12">
        <div className="text-2xl text-white text-center font-bold tracking-widest md:text-5xl">
          I'm a web developer
        </div>
        <SocialList />
      </div>
    </div>
  );
}

export default App;
