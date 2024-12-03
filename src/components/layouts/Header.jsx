import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import { BsTelephone } from "react-icons/bs";
import Heading from "../Heading";
import { CiMail } from "react-icons/ci";
import { FaInstagram, FaFacebook, FaTwitter, FaRegUser, FaSearch ,FaCartPlus,FaRegHeart   } from "react-icons/fa";
import { SlSocialYoutube } from "react-icons/sl";
import Images from "../Images";
import logo from "../../assets/logo.png";
import Menu from "../Menu";

const Header = () => {
  return (
    <>
      <div className="bg-HeaderaBG">
        <Container className={'max-w-[1320px]'}>
          <Flex
            className={
              "text-white items-center py-5 justify-between text-sm font-bold"
            }
          >
            <div className="flex items-center gap-x-7 ">
              <div className={"flex gap-x-2 items-center"}>
                <BsTelephone />
                <Heading text={"(225) 555-0118"} as={"p"} />
              </div>
              <div className={"flex gap-x-2 items-center"}>
                <CiMail />
                <Heading text={"michelle.rivera@example.com"} as={"p"} />
              </div>
            </div>
            <div className="">
              <Heading
                text={"Follow Us  and get a chance to win 80% off"}
                as={"p"}
              />
            </div>
            <div className="flex gap-x-4 items-center">
              <Heading text={"Follow Us  :"} as={"p"} />
              <FaInstagram />
              <SlSocialYoutube />
              <FaFacebook />
              <FaTwitter />
            </div>
          </Flex>
        </Container>
      </div>
      <div className="bg-white py-4">
        <Container className={'max-w-[1320px]'}>
          <Flex className={"items-center"}>
            <div className="pr-9">
              <Images src={logo} alt={logo} />
            </div>
            <div className="pr-[400px]">
              <Menu
                className={"flex gap-x-8 text-HeaderaBG font-medium text-sm "}
              >
                <li className={"hover:text-mHbrClr"}>Home</li>
                <li className={"hover:text-mHbrClr"}>Shop</li>
                <li className={"hover:text-mHbrClr"}>About</li>
                <li className={"hover:text-mHbrClr"}>Blog</li>
                <li className={"hover:text-mHbrClr"}>Contact</li>
                <li className={"hover:text-mHbrClr"}>Pages</li>
              </Menu>
            </div>
            <div className="flex  text-iconClr gap-x-[30px]">
              <div className="flex text-sm font-bold items-center">
                <FaRegUser/>
                <Heading text={"Login / Register"} as={"p"} />
              </div>
              <div className="items-center flex gap-x-[30px]">
                <FaSearch />
                <FaCartPlus  />
                <FaRegHeart />
              </div>
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Header;
