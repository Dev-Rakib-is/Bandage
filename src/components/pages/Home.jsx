import React from 'react'
import Header from '../layouts/Header'
import Banner from '../layouts/Banner'
import Contant from '../layouts/Contant'
import ProductPart from '../layouts/ProductPart'
import Summer_collaction from '../layouts/Summer_collaction'
import Couple_Collection from '../layouts/Couple_Collection'
import Review_Part from '../layouts/Review_Part'
import Footer from '../layouts/Footer'

const Home = () => {
  return (
    <>
     <Header/>
     <Banner/>
     <Contant/>
     <ProductPart/>
     <Summer_collaction/>
     <Couple_Collection/>
     <Review_Part/>
     <Footer/>
    </>
  )
}

export default Home