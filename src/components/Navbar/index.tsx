import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { HiOutlineShoppingBag, HiChevronDown } from "react-icons/hi";
import { AiOutlineHeart } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { selectItem } from "../../features/cart/cartSlice";
import CartMenu from "../CartMenu";
import { logout, selectAuth } from "../../features/auth/authSlice";

function Navbar() {
  const [toggleMobileNav, setToggleMobileNav] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const nav = useRef<HTMLElement | null>(null);
  const dispatch = useDispatch();
  const cartItems = useSelector(selectItem);
  const auth = useSelector(selectAuth);

  useEffect(() => {
    function addShadow() {
      if (nav.current !== null) {
        if (window.scrollY > 80) {
          nav.current.classList.add("shadow-xl");
        } else {
          nav.current.classList.remove("shadow-xl");
        }
      }
    }
    document.addEventListener("scroll", addShadow);
    return () => document.removeEventListener("scroll", addShadow);
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    toast.success("Logged out successfully");
  };

  return (
    <>
      <nav
        ref={nav}
        className="flex w-full font-medium bg-[#fff] text-[#141414] flex-col lg:flex-row  h-[5rem] divide-y lg:divide-y-0 border-b fixed top-0 z-[100] lg:pl-[3.5rem] lg:items-center"
      >
        <div className="lg:mr-[5%] h-[2.5rem] justify-between flex items-center pl-[1.5rem] lg:pl-0 lg:h-[5rem]">
          <Link to={"/"} className="uppercase  font-bold">
            DVT Store
          </Link>
          <div
            className="hamburger mr-5 cursor-pointer lg:hidden"
            onClick={() => setToggleMobileNav((prevState) => !prevState)}
          >
            <span className="line mb-[0.35rem]"></span>
            <span className="line"></span>
          </div>
        </div>
        <div
          className={`lg:flex lg:space-x-4 ${
            toggleMobileNav ? "flex" : "hidden"
          } flex-col
            border-l border-solid border-[#dfdfdf] z-[100] 
            bg-[white] space-y-2 p-8 fixed top-0 right-0 min-h-screen
            w-2/4 md:w-[30%] lg:border-none lg:space-y-0 lg:z-[0] lg:p-0 
            lg:bg-transparent lg:flex-row lg:relative lg:w-full 
            lg:min-h-[5rem] lg:items-center `}
        >
          <div
            className="hamburger absolute right-[10px] top-[20px] cursor-pointer active lg:hidden"
            onClick={() => setToggleMobileNav((prevState) => !prevState)}
          >
            <span className="line mb-[0.35rem]"></span>
            <span className="line"></span>
          </div>
          <div>
            <p
              className={` cursor-pointer ${
                !dropdown ? "opacity-100" : "opacity-50"
              }`}
              onMouseEnter={() => setDropdown(true)}
            >
              Categories
              <HiChevronDown className="inline" size="20" />
            </p>
            <div
              onMouseLeave={() => setDropdown(false)}
              className={`${
                dropdown ? "flex" : "hidden"
              } relative top-0 flex-col space-y-2 ml-8 mt-3 
              lg:mt-0 lg:ml-0 lg:space-y-0 lg:absolute pl-3 py-2 lg:items-center
              text-[#242] lg:top-[5.5rem] lg:flex-row lg:space-x-3  z-[20] rounded-md bg-white 
              lg:divide-x lg:px-3  lg:h-[3.5rem] left-[-2rem] 
              border border-solid border-[#ebebeb]`}
            >
              <Link to={"/products/category/jewelery"} className="dropdown-text">
                Jewelery
              </Link>
              <Link
                to={"/products/category/men's clothing"}
                className="dropdown-text"
              >
                Men's Clothing
              </Link>
              <Link
                to={"/products/category/women's clothing"}
                className="dropdown-text"
              >
                Women's Clothing
              </Link>
            </div>
          </div>
          <div
            className={`fixed min-h-screen w-2/4 md:w-[70%] left-0 top-0 z-[101] backdrop-blur-[6px] lg:hidden ${
              toggleMobileNav ? "flex" : "hidden"
            }`}
          ></div>
        </div>
        <div className="divide-x flex items-center justify-end lg:absolute lg:right-0">
          <form className="border-l h-[2.5rem] lg:h-[5rem] flex relative items-center">
            <button className="pl-3" type="button">
              <FaSearch color="#bbb" size="15" />
            </button>
            <label htmlFor="search">
              <input
                type="text"
                className="my-auto pl-3 h-[1.5rem] transition-all ease-in-out focus:border-none outline-none duration-300 max-[400px]:focus:w-[180px] min-[401px]:focus:w-[220px] min-[500px]:focus:w-[250px] sm:focus:w-[300px] w-[150px]"
                id="search"
                name="search"
                placeholder="type search"
              />
            </label>
          </form>
          {auth.isAuthenticated ? (
            <>
              <div className="lg:h-[5rem] h-[2.5rem] flex items-center text-[0.8rem] px-5 cursor-pointer">
                <span className="mr-2">{auth?.username}</span>
                <button className="logout-btn" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            </>
          ) : (
            <div className="lg:h-[5rem] h-[2.5rem] flex items-center text-[0.8rem] px-5 cursor-pointer">
              <Link to="/login">
                <BsPersonFill size="25" />
              </Link>
            </div>
          )}
          <div className="lg:h-[5rem] h-[2.5rem] flex items-center px-5 cursor-pointer">
            <AiOutlineHeart size="25" />
          </div>
          <div
            className="lg:h-[5rem] h-[2.5rem] flex relative items-center px-5 cursor-pointer"
            onClick={() => setOpenMenu((prevState) => !prevState)}
          >
            <HiOutlineShoppingBag size="25" />
            <span className="text-[#2323b7]  absolute right-[12px] top-[2px] lg:top-[20px] text-[0.75rem] font-bold w-4 h-4 text-center ">
              {cartItems.length}
            </span>
          </div>
        </div>
        {openMenu && <CartMenu setOpenMenu={setOpenMenu} />}
      </nav>
    </>
  );
}

export default Navbar;
