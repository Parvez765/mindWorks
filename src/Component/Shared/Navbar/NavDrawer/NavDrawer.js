import React, { useState } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { ImCross } from "react-icons/im";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";

// import component 👇
import Drawer from "react-modern-drawer";

//import styles 👇
import "react-modern-drawer/dist/index.css";
import { Link } from "react-router-dom";
// import NavShop from "../NavShop/NavShop";

const NavDrawer = () => {
  // ----It is the state to open the sidebar----
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    // setIsOpen((prevState) => !prevState)
    setIsOpen(!isOpen);
  };

  // -----It is the state to expand the menu components-----
  const [open1, setOpen1] = useState(false);
  const toggle1 = () => {
    setOpen1(!open1);
  };

  const [open2, setOpen2] = useState(false);
  const toggle2 = () => {
    setOpen2(!open2);
  };

  const handleClick = () => {
    const elem = document.activeElement;
    if (elem) {
      elem?.blur();
    }
  };

  return (
    <>
      <button
        onClick={toggleDrawer}
        className="text-4xl font-bold hover:text-gray-400 ease-in-out duration-300 w-[40px] flex justify-center items-center hover:border-r-4 hover:border-black"
      >
        <RiMenu3Line />
      </button>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        size={300}
        direction="right"
        lockBackgroundScroll={false}
        className="overflow-y-auto overflow-x-hidden"
      >
        <div className="w-full">
          <div className="flex justify-end mr-8 mt-6">
            <ImCross
              onClick={() => setIsOpen(false)}
              className="text-3xl font-bold hover:text-gray-400 ease-in-out duration-300"
            />
          </div>
          <div className="w-full my-10">
            <div className="flex flex-col text-lg font-semibold gap-10 w-full h-full ml-10">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="uppercase hover:text-gray-400 ease-in-out duration-300"
              >
                Home
              </Link>
              <div className="flex gap-2">
                <Link
                  to="/shop"
                  onClick={() => setIsOpen(false)}
                  className="uppercase hover:text-gray-400 ease-in-out duration-300"
                >
                  Shop
                </Link>
                <div className="flex flex-col">
                  <button onClick={toggle1} className="mt-1">
                    {!open1 ? <AiOutlinePlus /> : <AiOutlineMinus />}
                  </button>
                  <>
                    {open1 && (
                      <div className="relative right-14 mt-6">
                        <h2 className="uppercase font-semibold mb-3 text-base">
                          <u>Categories</u>
                        </h2>
                        <div className="grid grid-cols-1 gap-2">
                          <Link
                            to="/shop/jackets"
                            onClick={() => setIsOpen(false)}
                            class="uppercase hover:text-gray-400 ease-in-out duration-300 text-base"
                          >
                            Jackets & Outwear
                          </Link>
                          <Link
                            to="/shop/pants"
                            onClick={() => setIsOpen(false)}
                            class="uppercase hover:text-gray-400 ease-in-out duration-300 text-base"
                          >
                            Pants
                          </Link>
                          <Link
                            to="/shop/tshirts"
                            onClick={() => setIsOpen(false)}
                            class="uppercase hover:text-gray-400 ease-in-out duration-300 text-base"
                          >
                            T-shirts
                          </Link>
                          <Link
                            to="/shop/backpacks"
                            onClick={() => setIsOpen(false)}
                            class="uppercase hover:text-gray-400 ease-in-out duration-300 text-base"
                          >
                            Backpacks
                          </Link>
                          <Link
                            to="/shop/hats"
                            onClick={() => setIsOpen(false)}
                            class="uppercase hover:text-gray-400 ease-in-out duration-300 text-base"
                          >
                            Hats & Beanies
                          </Link>
                          <Link
                            to="/shop/gloves"
                            onClick={() => setIsOpen(false)}
                            class="uppercase hover:text-gray-400 ease-in-out duration-300 text-base"
                          >
                            Gloves & Mittens
                          </Link>
                        </div>
                      </div>
                    )}
                  </>
                </div>
              </div>
              <div className="flex gap-2">
                <Link
                  to="/shop"
                  onClick={() => setIsOpen(false)}
                  className="uppercase hover:text-gray-400 ease-in-out duration-300"
                >
                  Shop
                </Link>
                <div className="flex flex-col">
                  <button onClick={toggle1} className="mt-1">
                    {!open1 ? <AiOutlinePlus /> : <AiOutlineMinus />}
                  </button>
                  <>
                    {open1 && (
                      <div className="relative right-14 mt-6">
                        <h2 className="uppercase font-semibold mb-3 text-base">
                          <u>Categories</u>
                        </h2>
                        <div className="grid grid-cols-1 gap-2">
                          <Link
                            to="/shop/jackets"
                            onClick={() => setIsOpen(false)}
                            class="uppercase hover:text-gray-400 ease-in-out duration-300 text-base"
                          >
                            Jackets & Outwear
                          </Link>
                          <Link
                            to="/shop/pants"
                            onClick={() => setIsOpen(false)}
                            class="uppercase hover:text-gray-400 ease-in-out duration-300 text-base"
                          >
                            Pants
                          </Link>
                          <Link
                            to="/shop/tshirts"
                            onClick={() => setIsOpen(false)}
                            class="uppercase hover:text-gray-400 ease-in-out duration-300 text-base"
                          >
                            T-shirts
                          </Link>
                          <Link
                            to="/shop/backpacks"
                            onClick={() => setIsOpen(false)}
                            class="uppercase hover:text-gray-400 ease-in-out duration-300 text-base"
                          >
                            Backpacks
                          </Link>
                          <Link
                            to="/shop/hats"
                            onClick={() => setIsOpen(false)}
                            class="uppercase hover:text-gray-400 ease-in-out duration-300 text-base"
                          >
                            Hats & Beanies
                          </Link>
                          <Link
                            to="/shop/gloves"
                            onClick={() => setIsOpen(false)}
                            class="uppercase hover:text-gray-400 ease-in-out duration-300 text-base"
                          >
                            Gloves & Mittens
                          </Link>
                        </div>
                      </div>
                    )}
                  </>
                </div>
              </div>
              <div className="flex gap-2">
                <Link
                  to="/shop"
                  onClick={() => setIsOpen(false)}
                  className="uppercase hover:text-gray-400 ease-in-out duration-300"
                >
                  Shop
                </Link>
                <div className="flex flex-col">
                  <button onClick={toggle1} className="mt-1">
                    {!open1 ? <AiOutlinePlus /> : <AiOutlineMinus />}
                  </button>
                  <>
                    {open1 && (
                      <div className="relative right-14 mt-6">
                        <h2 className="uppercase font-semibold mb-3 text-base">
                          <u>Categories</u>
                        </h2>
                        <div className="grid grid-cols-1 gap-2">
                          <Link
                            to="/shop/jackets"
                            onClick={() => setIsOpen(false)}
                            class="uppercase hover:text-gray-400 ease-in-out duration-300 text-base"
                          >
                            Jackets & Outwear
                          </Link>
                          <Link
                            to="/shop/pants"
                            onClick={() => setIsOpen(false)}
                            class="uppercase hover:text-gray-400 ease-in-out duration-300 text-base"
                          >
                            Pants
                          </Link>
                          <Link
                            to="/shop/tshirts"
                            onClick={() => setIsOpen(false)}
                            class="uppercase hover:text-gray-400 ease-in-out duration-300 text-base"
                          >
                            T-shirts
                          </Link>
                          <Link
                            to="/shop/backpacks"
                            onClick={() => setIsOpen(false)}
                            class="uppercase hover:text-gray-400 ease-in-out duration-300 text-base"
                          >
                            Backpacks
                          </Link>
                          <Link
                            to="/shop/hats"
                            onClick={() => setIsOpen(false)}
                            class="uppercase hover:text-gray-400 ease-in-out duration-300 text-base"
                          >
                            Hats & Beanies
                          </Link>
                          <Link
                            to="/shop/gloves"
                            onClick={() => setIsOpen(false)}
                            class="uppercase hover:text-gray-400 ease-in-out duration-300 text-base"
                          >
                            Gloves & Mittens
                          </Link>
                        </div>
                      </div>
                    )}
                  </>
                </div>
              </div>
              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className="uppercase hover:text-gray-400 ease-in-out duration-300"
              >
                About
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="uppercase hover:text-gray-400 ease-in-out duration-300"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default NavDrawer;
