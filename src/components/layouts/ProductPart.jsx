import React from "react";
import Container from "../Container";
import Heading from "../Heading";
import Images from "../Images";
import cards1 from '../../assets/Card1.png'
import cards2 from '../../assets/Card2.png'
import cards3 from '../../assets/Card3.png'
import cards4 from '../../assets/Card4.png'
import cards5 from '../../assets/Card5.png'
import cards6 from '../../assets/Card6.png'
import cards7 from '../../assets/Card7.png'
import cards8 from '../../assets/Card8.png'


const ProductPart = () => {
  return (
    <>
      <div className="bg-white">
       <Container>
       <div className="text-center">
          <Heading text={'Featured Products'} as={'p'} className={'font-light text-[20px] text-mHbrClr pb-2'}/>
          <Heading
            text={"BESTSELLER PRODUCTS"}
            as={"h4"}
            className={"font-bold text-2xl text-HeaderaBG"}
          />
          <Heading
            text={"Problems trying to resolve the conflict between  "}
            as={"p"}
            className={"font-normal text-sm text-mHbrClr pt-2 pb-[80px]"}
          />
        </div>
         <div className="flex justify-between pb-[80px]">
            <div className=" text-center">
                <Images src={cards1} alt={cards1}/>
                 <Heading text={'Graphic Design'} as={'h5'} className={'font-bold text-base text-HeaderaBG pt-6'}/>
                 <Heading text={'English Department'} as={'h5'} className={'text-sm font-bold text-mHbrClr pt-2 pb-4'}/>
                 <div className="flex gap-1 items-center justify-center">
                    <Heading text={'$16.48'} as={'p'} className={'text-priceClr text-sm font-bold'}/>
                    <Heading text={'$6.48'} as={'p'} className={'text-nowPrice font-bold text-base'}/>
                 </div>
                 <div className="flex justify-center gap-2">
                    <div className="bg-round1 rounded-full h-4 w-4"></div>
                    <div className="bg-nowPrice rounded-full h-4 w-4"></div>
                    <div className="bg-round3 rounded-full h-4 w-4"></div>
                    <div className="bg-HeaderaBG rounded-full h-4 w-4"></div>
                 </div>
            </div>    
            <div className=" text-center">
                <Images src={cards2} alt={cards2}/>
                 <Heading text={'Graphic Design'} as={'h5'} className={'font-bold text-base text-HeaderaBG pt-6'}/>
                 <Heading text={'English Department'} as={'h5'} className={'text-sm font-bold text-mHbrClr pt-2 pb-4'}/>
                 <div className="flex gap-1 items-center justify-center">
                    <Heading text={'$16.48'} as={'p'} className={'text-priceClr text-sm font-bold'}/>
                    <Heading text={'$6.48'} as={'p'} className={'text-nowPrice font-bold text-base'}/>
                 </div>
                 <div className="flex justify-center gap-2">
                    <div className="bg-round1 rounded-full h-4 w-4"></div>
                    <div className="bg-nowPrice rounded-full h-4 w-4"></div>
                    <div className="bg-round3 rounded-full h-4 w-4"></div>
                    <div className="bg-HeaderaBG rounded-full h-4 w-4"></div>
                 </div>
            </div>    
            <div className=" text-center">
                <Images src={cards3} alt={cards3}/>
                 <Heading text={'Graphic Design'} as={'h5'} className={'font-bold text-base text-HeaderaBG pt-6'}/>
                 <Heading text={'English Department'} as={'h5'} className={'text-sm font-bold text-mHbrClr pt-2 pb-4'}/>
                 <div className="flex gap-1 items-center justify-center">
                    <Heading text={'$16.48'} as={'p'} className={'text-priceClr text-sm font-bold'}/>
                    <Heading text={'$6.48'} as={'p'} className={'text-nowPrice font-bold text-base'}/>
                 </div>
                 <div className="flex justify-center gap-2">
                    <div className="bg-round1 rounded-full h-4 w-4"></div>
                    <div className="bg-nowPrice rounded-full h-4 w-4"></div>
                    <div className="bg-round3 rounded-full h-4 w-4"></div>
                    <div className="bg-HeaderaBG rounded-full h-4 w-4"></div>
                 </div>
            </div>    
            <div className=" text-center">
                <Images src={cards4} alt={cards4}/>
                 <Heading text={'Graphic Design'} as={'h5'} className={'font-bold text-base text-HeaderaBG pt-6'}/>
                 <Heading text={'English Department'} as={'h5'} className={'text-sm font-bold text-mHbrClr pt-2 pb-4'}/>
                 <div className="flex gap-1 items-center justify-center">
                    <Heading text={'$16.48'} as={'p'} className={'text-priceClr text-sm font-bold'}/>
                    <Heading text={'$6.48'} as={'p'} className={'text-nowPrice font-bold text-base'}/>
                 </div>
                 <div className="flex justify-center gap-2">
                    <div className="bg-round1 rounded-full h-4 w-4"></div>
                    <div className="bg-nowPrice rounded-full h-4 w-4"></div>
                    <div className="bg-round3 rounded-full h-4 w-4"></div>
                    <div className="bg-HeaderaBG rounded-full h-4 w-4"></div>
                 </div>
            </div>    
        </div>
         <div className="flex justify-between">
            <div className=" text-center">
                <Images src={cards5} alt={cards5}/>
                 <Heading text={'Graphic Design'} as={'h5'} className={'font-bold text-base text-HeaderaBG pt-6'}/>
                 <Heading text={'English Department'} as={'h5'} className={'text-sm font-bold text-mHbrClr pt-2 pb-4'}/>
                 <div className="flex gap-1 items-center justify-center">
                    <Heading text={'$16.48'} as={'p'} className={'text-priceClr text-sm font-bold'}/>
                    <Heading text={'$6.48'} as={'p'} className={'text-nowPrice font-bold text-base'}/>
                 </div>
                 <div className="flex justify-center gap-2">
                    <div className="bg-round1 rounded-full h-4 w-4"></div>
                    <div className="bg-nowPrice rounded-full h-4 w-4"></div>
                    <div className="bg-round3 rounded-full h-4 w-4"></div>
                    <div className="bg-HeaderaBG rounded-full h-4 w-4"></div>
                 </div>
            </div>    
            <div className=" text-center">
                <Images src={cards6} alt={cards6}/>
                 <Heading text={'Graphic Design'} as={'h5'} className={'font-bold text-base text-HeaderaBG pt-6'}/>
                 <Heading text={'English Department'} as={'h5'} className={'text-sm font-bold text-mHbrClr pt-2 pb-4'}/>
                 <div className="flex gap-1 items-center justify-center">
                    <Heading text={'$16.48'} as={'p'} className={'text-priceClr text-sm font-bold'}/>
                    <Heading text={'$6.48'} as={'p'} className={'text-nowPrice font-bold text-base'}/>
                 </div>
                 <div className="flex justify-center gap-2">
                    <div className="bg-round1 rounded-full h-4 w-4"></div>
                    <div className="bg-nowPrice rounded-full h-4 w-4"></div>
                    <div className="bg-round3 rounded-full h-4 w-4"></div>
                    <div className="bg-HeaderaBG rounded-full h-4 w-4"></div>
                 </div>
            </div>    
            <div className=" text-center">
                <Images src={cards7} alt={cards7}/>
                 <Heading text={'Graphic Design'} as={'h5'} className={'font-bold text-base text-HeaderaBG pt-6'}/>
                 <Heading text={'English Department'} as={'h5'} className={'text-sm font-bold text-mHbrClr pt-2 pb-4'}/>
                 <div className="flex gap-1 items-center justify-center">
                    <Heading text={'$16.48'} as={'p'} className={'text-priceClr text-sm font-bold'}/>
                    <Heading text={'$6.48'} as={'p'} className={'text-nowPrice font-bold text-base'}/>
                 </div>
                 <div className="flex justify-center gap-2">
                    <div className="bg-round1 rounded-full h-4 w-4"></div>
                    <div className="bg-nowPrice rounded-full h-4 w-4"></div>
                    <div className="bg-round3 rounded-full h-4 w-4"></div>
                    <div className="bg-HeaderaBG rounded-full h-4 w-4"></div>
                 </div>
            </div>    
            <div className=" text-center">
                <Images src={cards8} alt={cards8}/>
                 <Heading text={'Graphic Design'} as={'h5'} className={'font-bold text-base text-HeaderaBG pt-6'}/>
                 <Heading text={'English Department'} as={'h5'} className={'text-sm font-bold text-mHbrClr pt-2 pb-4'}/>
                 <div className="flex gap-1 items-center justify-center">
                    <Heading text={'$16.48'} as={'p'} className={'text-priceClr text-sm font-bold'}/>
                    <Heading text={'$6.48'} as={'p'} className={'text-nowPrice font-bold text-base'}/>
                 </div>
                 <div className="flex justify-center gap-2">
                    <div className="bg-round1 rounded-full h-4 w-4"></div>
                    <div className="bg-nowPrice rounded-full h-4 w-4"></div>
                    <div className="bg-round3 rounded-full h-4 w-4"></div>
                    <div className="bg-HeaderaBG rounded-full h-4 w-4"></div>
                 </div>
            </div>    
        </div>
       </Container>
      </div>
    </>
  );
};

export default ProductPart;
