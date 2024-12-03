import React from "react";
import Container from "../Container";
import Heading from "../Heading";
import Images from "../Images";
import img1 from "../../assets/Content1.png";
import img2 from "../../assets/Content2.png";
import img3 from "../../assets/Content3.png";
import img4 from "../../assets/Content4.png";
import Button from "../Button";

const Contant = () => {
  return (
    <>
      <div className="py-[80px] bg-white">
        <Container className={"max-w-[1050px]"}>
          <div className="text-center">
            <Heading
              text={"EDITOR’S PICK"}
              as={"h4"}
              className={"font-bold text-2xl text-HeaderaBG"}
            />
            <Heading
              text={"Problems trying to resolve the conflict between "}
              as={"p"}
              className={"font-normal text-sm text-mHbrClr pt-2"}
            />
          </div>
          <div className={"w-full pt-16 flex "}>
            <div className="w-1/2 gap-4 relative">
              <Images src={img1} alt={img1} />
              <Button btnText={'MEN'} className={'w-[170px] h-[48px] bg-white text-HeaderaBG absolute -translate-y-1/4 translate-x-1/4 bottom-3 left-[-13px]'}/>
            </div>
            <div className="w-45% flex gap-4 relative">
                <Images src={img2} alt={img2}/>
                <Button btnText={'WOMEN'} className={'w-[136px] h-[48px] bg-white text-HeaderaBG absolute -translate-y-1/4 translate-x-1/4 bottom-3 left-[-13px]'}/>
                <div className={'relative'}>
                    <Images src={img3} alt={img3} className={'pb-4'}/>
                    <Images src={img4} alt={img4}/>
                    <Button btnText={'ACCESSORIES'} className={'w-[170px] h-[48px] bg-white text-HeaderaBG absolute -translate-y-1/4 translate-x-1/4 top-44 left-[-18px]'}/>
                    {/* Second Button */}
                    <Button btnText={'MEN'} className={'w-[120px] h-[48px] bg-white text-HeaderaBG absolute -translate-y-1/4 translate-x-1/4 bottom-3 left-[-18px]'}/>

                </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Contant;
