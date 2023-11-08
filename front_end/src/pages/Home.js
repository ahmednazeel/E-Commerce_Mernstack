import React from 'react'
import HeroPage from '../components/compHomePage/HeroPage'
import JustProduct from '../components/compHomePage/JustProduct';
import LogosBanner from '../components/compHomePage/LogosBanner';
import Avatars from '../components/compHomePage/Avatars';
import Collection from '../components/compHomePage/Collection';
import BestSeller from '../components/compHomePage/BestSeller';
import SecondBanner from '../components/compHomePage/SecondBanner';
import Social from '../components/compHomePage/Social';
import ServicesItems from '../components/compHomePage/ServicesItems';

const Home = () => {
  return (
    <div>
        <HeroPage/>
        <div className='container'>
          <LogosBanner/>
          <JustProduct/>
          <Avatars/>
          <Collection/>
          <BestSeller/>
          <SecondBanner/>
          <Social/>
          <ServicesItems/>
        </div>
    </div>
  )
}

export default Home