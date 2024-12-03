import React from "react";
import Container from "../Container";
import Heading from "../Heading";
import Images from "../Images";
import review1 from "../../assets/Review1.png";
import review2 from "../../assets/Review2.png";
import review3 from "../../assets/Review3.png";
import Button from "../Button";
import { MdAlarm } from "react-icons/md";
import { FaIndustry, FaChevronRight } from "react-icons/fa";

const Review_Part = () => {
  return (
    <>
      <div className="bg-white py-[112px]">
        <Container>
          <div className="text-center">
            <Heading
              text={"Practice Advice"}
              as={"p"}
              className={"text-iconClr"}
            />
            <Heading
              text={"Featured Posts"}
              as={"p"}
              className={"text-[40px] font-bold text-HeaderaBG"}
            />
            <Heading
              text={
                "Problems trying to resolve the conflict between  the two major realms of Classical physics: Newtonian mechanics "
              }
              as={"p"}
              className={
                "text-sm font-normal px-[350px] pb-[80px] text-mHbrClr"
              }
            />
          </div>
          <div className="flex gap-3 ">
            <div className="shadow-xl rounded-md w-1/3">
              <Images src={review1} alt={review1} className={"relative"} />
              <Button
                btnText={"NEW"}
                className={
                  "w-[58px] h-[24px] bg-newbtn rounded text-white text-sm font-bold translate-x-1/3  translate-y-[-280px]"
                }
              />
              <div className="p-5">
                <div className="flex gap-4">
                  <Heading
                    text={"Google"}
                    as={"p"}
                    className={"text-xs font-light text-iconClr"}
                  />
                  <Heading
                    text={"Trending"}
                    as={"p"}
                    className={"text-xs font-light text-mHbrClr"}
                  />
                  <Heading
                    text={"New"}
                    as={"p"}
                    className={"text-xs font-light text-mHbrClr"}
                  />
                </div>
                <Heading
                  text={"Loudest à la Madison #1 (L'integral)"}
                  as={"p"}
                  className={"font-light text-xl text-HeaderaBG"}
                />
                <Heading
                  text={
                    "We focus on ergonomics and meeting you where you work. It's only a keystroke away."
                  }
                  as={"p"}
                  className={"font-light text-sm text-mHbrClr"}
                />
                <div className="flex justify-between">
                  <div className="flex mt-[25px] gap-1">
                    <MdAlarm className={"text-iconClr "} />
                    <Heading
                      text={" 22 April 2021"}
                      as={"p"}
                      className={"text-xs font-light text-mHbrClr"}
                    />
                  </div>
                  <div className="flex mt-[25px] gap-1">
                    <FaIndustry className={"text-nowPrice "} />
                    <Heading
                      text={" 10 comments"}
                      as={"p"}
                      className={"text-xs font-light text-mHbrClr"}
                    />
                  </div>
                </div>
                <div className="flex items-center my-6 gap-1">
                  <Button btnText={"Learn More"} className={"text-mHbrClr"} />
                  <FaChevronRight className={'text-iconClr '}/>
                </div>
              </div>
            </div>
            <div className="shadow-xl rounded-md w-1/3">
              <Images src={review2} alt={review2} className={"relative"} />
              <Button
                btnText={"NEW"}
                className={
                  "w-[58px] h-[24px] bg-newbtn rounded text-white text-sm font-bold translate-x-1/3  translate-y-[-280px]"
                }
              />
              <div className="p-5">
                <div className="flex gap-4">
                  <Heading
                    text={"Google"}
                    as={"p"}
                    className={"text-xs font-light text-iconClr"}
                  />
                  <Heading
                    text={"Trending"}
                    as={"p"}
                    className={"text-xs font-light text-mHbrClr"}
                  />
                  <Heading
                    text={"New"}
                    as={"p"}
                    className={"text-xs font-light text-mHbrClr"}
                  />
                </div>
                <Heading
                  text={"Loudest à la Madison #1 (L'integral)"}
                  as={"p"}
                  className={"font-light text-xl text-HeaderaBG"}
                />
                <Heading
                  text={
                    "We focus on ergonomics and meeting you where you work. It's only a keystroke away."
                  }
                  as={"p"}
                  className={"font-light text-sm text-mHbrClr"}
                />
                <div className="flex justify-between">
                  <div className="flex mt-[25px] gap-1">
                    <MdAlarm className={"text-iconClr "} />
                    <Heading
                      text={" 22 April 2021"}
                      as={"p"}
                      className={"text-xs font-light text-mHbrClr"}
                    />
                  </div>
                  <div className="flex mt-[25px] gap-1">
                    <FaIndustry className={"text-nowPrice "} />
                    <Heading
                      text={" 10 comments"}
                      as={"p"}
                      className={"text-xs font-light text-mHbrClr"}
                    />
                  </div>
                </div>
                <div className="flex items-center my-6 gap-1">
                  <Button btnText={"Learn More"} className={"text-mHbrClr"} />
                  <FaChevronRight className={'text-iconClr '}/>
                </div>
              </div>
            </div>
            <div className="shadow-xl rounded-md w-1/3">
              <Images src={review3} alt={review3} className={"relative"} />
              <Button
                btnText={"NEW"}
                className={
                  "w-[58px] h-[24px] bg-newbtn rounded text-white text-sm font-bold translate-x-1/3  translate-y-[-280px]"
                }
              />
              <div className="p-5">
                <div className="flex gap-4">
                  <Heading
                    text={"Google"}
                    as={"p"}
                    className={"text-xs font-light text-iconClr"}
                  />
                  <Heading
                    text={"Trending"}
                    as={"p"}
                    className={"text-xs font-light text-mHbrClr"}
                  />
                  <Heading
                    text={"New"}
                    as={"p"}
                    className={"text-xs font-light text-mHbrClr"}
                  />
                </div>
                <Heading
                  text={"Loudest à la Madison #1 (L'integral)"}
                  as={"p"}
                  className={"font-light text-xl text-HeaderaBG"}
                />
                <Heading
                  text={
                    "We focus on ergonomics and meeting you where you work. It's only a keystroke away."
                  }
                  as={"p"}
                  className={"font-light text-sm text-mHbrClr"}
                />
                <div className="flex justify-between">
                  <div className="flex mt-[25px] gap-1">
                    <MdAlarm className={"text-iconClr "} />
                    <Heading
                      text={" 22 April 2021"}
                      as={"p"}
                      className={"text-xs font-light text-mHbrClr"}
                    />
                  </div>
                  <div className="flex mt-[25px] gap-1">
                    <FaIndustry className={"text-nowPrice "} />
                    <Heading
                      text={" 10 comments"}
                      as={"p"}
                      className={"text-xs font-light text-mHbrClr"}
                    />
                  </div>
                </div>
                <div className="flex items-center my-6 gap-1">
                  <Button btnText={"Learn More"} className={"text-mHbrClr"} />
                  <FaChevronRight className={'text-iconClr '}/>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Review_Part;
