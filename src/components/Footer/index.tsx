import {
    FaFacebook,
    FaInstagram,
    FaPinterest,
    FaTwitter,
    FaYoutube,
  } from "react-icons/fa";
  import { Link } from "react-router-dom";
  
  function Footer() {
    return (
      <footer className="bg-[#252525] text-[#ebebeb] py-[3.38rem] px-[4rem] relative">
        <div className="flex flex-col space-y-4 lg:space-x-[25%] lg:space-y-0   lg:flex-row ">
          <div className="flex space-x-24 max-[500px]:flex-col max-[500px]:space-x-0 max-[500px]:space-y-4 lg:space-x-[25%]">
            <Link to={"/"} className="uppercase  font-bold">
              DVT store App
            </Link>
            <div className="flex space-x-4">
              <Link
                to={"/products/category/jewelery"}
                className="opacity-70 hover:opacity-100 transition-all ease-in duration-300 hover:text-white"
              >
                Categories
              </Link>
             
            </div>
          </div>
          <div className="flex max-[500px]:space-x-4 space-x-12 lg:space-x-16 text-[0.9rem]">
            <div className="space-y-2">
              <p className="opacity-70 hover:opacity-100 transition-all ease-in duration-300 hover:text-white cursor-pointer">
                Orders
              </p>
              <p className="opacity-70 hover:opacity-100 transition-all ease-in duration-300 hover:text-white cursor-pointer">
                Shipping and Delivery
              </p>
              <p className="opacity-70 hover:opacity-100 transition-all ease-in duration-300 hover:text-white cursor-pointer">
                Privacy Policy
              </p>
            </div>
            <div className="space-y-2">
              <p className="opacity-70 hover:opacity-100 transition-all ease-in duration-300 hover:text-white cursor-pointer">
                Payment Options
              </p>
              <p className="opacity-70 hover:opacity-100 transition-all ease-in duration-300 hover:text-white cursor-pointer">
                Guides
              </p>
              <p className="opacity-70 hover:opacity-100 transition-all ease-in duration-300 hover:text-white cursor-pointer">
                Terms of Use
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-8 lg:space-y-0 lg:flex-row lg:space-x-[25%]  mt-8">
          
          <div className="flex space-x-4 items-end ">
            <Link
              to={"https://www.facebook.com"}
              className="hover:scale-125 transition-all ease-out duration-300"
            >
              <FaFacebook />
            </Link>
            <Link
              to={"https://www.instagram.com"}
              className="hover:scale-125 transition-all ease-out duration-300"
            >
              <FaInstagram />
            </Link>
            <Link
              to={"https://www.twitter.com"}
              className="hover:scale-125 transition-all ease-out duration-300"
            >
              <FaTwitter />
            </Link>
            <Link
              to={"https://www.pinterest.com"}
              className="hover:scale-125 transition-all ease-out duration-300"
            >
              <FaPinterest />
            </Link>
            <Link
              to={"https://www.youtube.com"}
              className="hover:scale-125 transition-all ease-out duration-300"
            >
              <FaYoutube />
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 px-[4rem] left-0 text-center w-full bg-[#6b6b6b]">
          <p>
            Coded by{" "}
            <Link
              to={"https://www.github.com/spencerBenson"}
              className="mx-2 text-slate-900 font-semibold"
            >
              Benson N. Kariuki
            </Link>
            Copyright © {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  