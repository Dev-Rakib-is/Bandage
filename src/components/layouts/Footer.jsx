import React from "react";
import Container from "../Container";
import Images from "../Images";
import logo from "../../assets/logo.png";
import {FaSearch, FaCartPlus, FaRegHeart } from "react-icons/fa";
import Menu from "../Menu";
import Heading from "../Heading";
import Button from "../Button";

const Footer = () => {
  return (
    <>
      <div>
        <div className="bg-yellow-50 pt-[40px]">
          <Container>
            <div className="justify-between flex">
              <div>
                <Images src={logo} alt={logo} />
              </div>
              <div className="flex text-iconClr gap-4 ">
                <FaSearch className="w-[24px] h-[24px]"/>
                <FaCartPlus className="w-[24px] h-[24px]"/>
                <FaRegHeart className="w-[24px] h-[24px]"/>
              </div>
            </div>
            <hr className={'mt-[53px]'}/>
          </Container>
        </div>
        <div className="bg-white pb-[52px]">
            <Container>
                <div className="flex justify-between mt-[50px]">
                <div className="">
                    <Menu className={'text-sm font-bold text-mHbrClr space-y-5'}>
                        <li className={'text-base text-HeaderaBG pb-4'}>Company Info</li>
                        <li>About Us</li>
                        <li>Carrier</li>
                        <li>We are hiring</li>
                        <li>Blog</li>
                    </Menu>
                </div>
                <div className="">
                    <Menu className={'text-sm font-bold text-mHbrClr space-y-5'}>
                        <li className={'text-base text-HeaderaBG pb-4'}>Legal</li>
                        <li>About Us</li>
                        <li>Carrier</li>
                        <li>We are hiring</li>
                        <li>Blog</li>
                    </Menu>
                </div>
                <div className="">
                    <Menu className={'text-sm font-bold text-mHbrClr space-y-5'}>
                        <li className={'text-base text-HeaderaBG pb-4'}>Features</li>
                        <li>Business Marketing</li>
                        <li>User Analytic</li>
                        <li>Live Chat</li>
                        <li>Unlimited Support</li>
                    </Menu>
                </div>
                <div className="">
                    <Menu className={'text-sm font-bold text-mHbrClr space-y-5'}>
                        <li className={'text-base text-HeaderaBG pb-4'}>Resources</li>
                        <li>IOS & Android</li>
                        <li>Watch a Demo</li>
                        <li>Customers</li>
                        <li>API</li>
                    </Menu>
                </div>
                <div className="">
                    <Heading text={'Get In Touch'} as={'p'} className={'text-base font-bold text-HeaderaBG pb-5'}/>
                    <input type="email" placeholder={'Your Email'} className={'bg-yellow-50 outline-none border rounded h-[58px] w-[280px] ps-3'}/>
                    <Button  btnText={'Subscribe'} className={'text-white rounded-r-lg bg-iconClr h-[58px] w-[117px]'}/>
                </div>
                
                </div>
            </Container>
        </div>
        <Container className={'bg-lastclr py-6'}>
            <Heading text={'Made With Love By Finland All Right Reserved '} as={'p'} className={'text-mHbrClr font-bold text-sm'}/>
        </Container>
      </div>
    </>
  );
};

export default Footer;

















