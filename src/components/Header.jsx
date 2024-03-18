import Brainwawe from "../assets/brainwave.svg";
import { navigation } from "../constants";
import Button from "./Button";
import { useLocation } from "react-router-dom";
function Header() {
  const path = useLocation();

  return (
    <div className="fixedc w-full lg:backdrop-blur-sm border-b border-n-6 top-0 left-0 z-50 bg-n-8-90 ">
      <div className="px-5 lg:px-7.5 flex items-center xl:px-10 ">
        <a className="block lg:mr-8" href="#hero">
          <img src={Brainwawe} width={190} height={40} alt="kian"></img>
        </a>
        <nav className="fixed grow lg:static  bg-n-8 lg:bg-transparent lg:flex top-[5rem] right-0 bottom-0">
          <div className="flex flex-col justify-center items-center lg:flex-row">
            {navigation.map((item) => (
              <a
                className={`uppercase text-2xl block text-n-1 transition-colors hover:text-color-1 duration-300 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } py-6 px-6 md:py-8 lg:font-semibold lg:text-xs ${
                  item.url === path.hash ? "text-n-1" : "text-n-1/50"
                }
                lg:hover:text-n-1 `}
                href={item.url}
                key={item.id}
              >
                {item.title}
              </a>
            ))}
          </div>
        </nav>
        <a
          href="#signup"
          className="text-n-1/50 capitalize lg:block transition-colors hover:text-n-1 mr-8 button hidden"
        >
          new account
        </a>
        <Button className="hidden lg:flex" href="#login">
          Login
        </Button>
      </div>
    </div>
  );
}
export default Header;
