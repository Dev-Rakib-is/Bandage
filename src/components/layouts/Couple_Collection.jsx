import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Images from "../Images";
import coupleimg from '../../assets/CoupleClothes1.png'
import Heading from "../Heading";
import Button from "../Button";

const Couple_Collection = () => {
  return (
    <>
      <div className="bg-white">
        <Container>
         <Flex className={'gap-[110px]'}>
            <div className="w-1/2 object-cover">
                <Images src={coupleimg} alt={coupleimg}/>
            </div>
            <div className="pt-[180px] w-1/2">
               <Heading text={'SUMMER 2020'} as={'p'} className={'text-base font-bold text-priceClr'}/>
               <Heading text={"Part of the Neural Universe"} as={'p'} className={'text-[40px] font-bold text-HeaderaBG'}/>
               <Heading text={'We know how large objects will act, but things on a small scale.'} as={'p'} className={'text-xl font-light text-mHbrClr pr-[90px]'}/>
               <div className="flex">
                <Button btnText={'BUY NOW'} className={'w-[151px] h-[52px] rounded-md bg-nowPrice text-white mt-6 text-sm font-bold hover:bg-violet-700  border'}/>
                <Button btnText={'READ MORE'} className={'w-[151px] h-[52px] rounded-md bg-transparent border-nowPrice text-nowPrice mt-6 text-sm font-bold hover:bg-red-600 hover:text-white border ml-4'}/>
               </div>
            </div>
         </Flex>
        </Container>
      </div>
    </>
  );
};

export default Couple_Collection;
