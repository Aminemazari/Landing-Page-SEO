import React from 'react'
import { useInView } from 'react-intersection-observer'
import classNames from 'classnames'
import { useState } from 'react'
import "./style/index.css"
import Navbar from '../navbar/navbar'
import imagOne from "./assets/imagONE.svg"
import "../component/ComponentStyle.css"
import Torus from "./assets/Torus Knot.svg"
import Ellipse1 from "./assets/Ellipse 1.svg"
import Cube from "./assets/Cube.svg"
import MediumCube from "./assets/Cube (1).svg"
import Ellipse2 from "./assets/Ellipse 2.svg"
import LargeCube from "./assets/CubeLarge.svg"
import Quates from "./assets/Quates.svg"
import  Ellipse4   from "./assets/Ellipse 4.svg"
import cubelarge2 from "./assets/cubelarge2.svg"
import Torus2 from "./assets/Torus.svg"
import "../component/ComponentStyle.css"
import Keyword from "./assets/34x.svg"
import Computer from "./assets/124x.svg"
import LargeCubeSection2  from "./assets/cubeSection2.svg"
import Hemisphere from "./assets/Hemisphere.svg"
import Ellipse6 from "./assets/Ellipse 6.svg"
import Done from "./assets/Done_round.svg"
import Flash from "./assets/54x.svg"
import RoundedDone from "./assets/roundedDone.svg"
import notDone from "./assets/notDone.svg"
import Star from "./assets/start.svg"
import fast from "./assets/fast.svg"
import security from "./assets/security.svg"
import archive from "./assets/archive.svg"
import cpu from "./assets/cpu.svg"
import visitorCard from "./assets/visitor.svg"
import earningCard from "./assets/expected earning.svg"
import DoughnutCard from "./assets/Doughnut.svg"
import PinkImage from "./assets/pinkImage.svg"
import SearchEnginImage from "./assets/search-engine-marketing-concept 1.svg"
const seo = () => {
   const [ref, inView] = useInView();
   const visitorCardClass= classNames("visitorCard",{
      'visitorCardTransition':inView
   });
   const earningCardClass=classNames('earningCard',{
      "earnigCardTransition":inView
   });
   const DoughnutCardClass=classNames('DoughnutCard',{
      "DoughnutCardTransition":inView
   })



  return (
    <div className='heroPage'>
    <img src={Torus} className='TorusImag'/>
    <img src={Ellipse1} className='Ellipse1'/>
    <img src={Cube} className='SmallCube'/>
    <img src={MediumCube} className='MediumCube'/>
    <img src={Ellipse2} className='Ellipse2'/>
    <img src={LargeCube} className='LargeCube'/>

    <div className='sectionOne'>
     <Navbar/>   
    <div className='ContainerSectionOne'>
      <h1 className='containerTitle'>AI-Driven SEO Solutions</h1>
      <p className='containerParagraph'>Elevate Your Online Presence and Boost Rankings</p>
      <img src={imagOne} className='imagONE'/>
      <section className='buttonSection'>
       <button className='big_CTA_button'>Get Started</button>
       <button className='SecondaryButton'>Learn more</button>
      </section>
     </div>
    </div>
   <section className='addedSectionOne'>
      <div className='SameCountainer'>
         <img  src={archive}className='IconImage'/>
         <h1 className='IconTitle'>Automated Updates</h1>
         <p className='IconParagraph'>Stay current with automatic feature updates</p>
      </div>
      <div className="SameCountainer">
      <img  src={security}className='IconImage'/>
      <h1 className='IconTitle'>Security</h1>
      <p className='IconParagraph'>Robust security for worry-free operations</p>
      </div>
      <div className="cpuCountainer" >
      <img  src={cpu}className='IconImage'/>
      <h1 className='IconTitle'>Smart Analytics</h1>
      <p className='IconParagraph'>Gain actionable insights for informed decisions</p>
      </div>
      <div className='SameCountainer'>
      <img  src={fast} className='IconImage'/>
      <h1 className='IconTitle'>Fast Performance</h1>
      <p className='IconParagraph'>Zoom through tasks super quick!</p>
      </div>

      </section> 
  
    <div className='sectionTwo'>
    <img  src={Quates} className='Quates'/> 
    <img src={Ellipse4} className='Ellipse4'/>
    <img src={cubelarge2} className='cubelarge2'/>
  <img src={Torus2} className='Torus2'/>
      </div> ''
    <section className='sectionTree'>
     <img src={Ellipse2} className='Ellipse2Section2'/>
      <img src={LargeCubeSection2} className='LargeCubeSection2'/>
      <img src={Hemisphere} className='Hemisphere'/>
       <img src={Ellipse6} className='Ellipse6'/>
     <div className='countainerTwo'>
      <h1 className='containerTwoTitle'>Explore Our Lates IA optemized
        <p className='containerTwoParagraph'>SEO Tools</p></h1> 
         <div className='countainerFour'>
          <div className='countainerFourDescription'>
           <h1 className='containerFourTitle'>OptiSEO Analyzer</h1>
           <p className='countainerFourParagraph'>AI-Powered SEO Mastery</p>
           <p className='countainerFourParagraphTow'>Optimize your website seamlessly with OptiSEO. This AI-powered tool ensures your on-page elements are perfected for maximum visibility, taking your SEO to new heights.</p>
           </div>
           <button className='big_Secondary_Bordered'>Learn More</button>    
        </div>  
     </div>
     <div className='countainerTree'>
     <div className='countainerFourDescription'>
       <h1  className='containerFourTitle'>IntelliKey Explorer</h1>
       <p className='countainerFourParagraph'>Smart Keyword Discovery</p>
       <p className='countainerFourParagraphTow'>Discover powerful keywords effortlessly with IntelliKey Explorer. Gain insights into trends and competition, empowering your SEO strategy with smart keyword choices.</p>
   </div>
    <button className='big_Secondary_Bordered'>Learn More</button>
     </div>
    </section>
   <section className='sectionAddedTwo'>

             <img src={earningCard} className={earningCardClass}/>

            <img src={DoughnutCard} className={DoughnutCardClass} />
            <img src={visitorCard} className={visitorCardClass} />

      <div className='ControleWeb' >
         <h1 className='controleWebTitle'>Control Your Web Destiny with a Click</h1>
         <p className='controleWebParagraph'>Access all your tools with a simple click. Instantly check your site's performance on our user-friendly dashboard. Get quick access to reports, monitors, and powerful analysis tools.</p>
          <button className='big_CTA_button '>GET STARTED</button>
      </div>
      <div  className='pikBackground' ref={ref}>
      </div>
   </section>

     <section className='sectionFour'>

     <img src={PinkImage} className={"Pink-Image"}  />
     <img src={SearchEnginImage} className={"search-Engine-image"}  />

      <div className='containerSection4'>
         <div className='sectionfourTitleCountainer'>
            <h1 className='sectionFourTile'>Optimize Your <span className='sectionfourTitlePink'>Web Site Impression</span></h1>
         </div>
     <div className='doneFlex'>
         <div className='doneDescription'>
            <img src={Done}/>
           <span className='doneparagraph'>Enhance how visitors perceive your site</span>
         </div>
         <div className='doneDescription'>
          <img src={Done}/>
          <span className='doneparagraph'>Keep users interested and interacting longer</span>
         </div>
         <div className='doneDescription'>
            <img src={Done}/>
            <span className='doneparagraph'>Keep visitors exploring, not bouncing away </span>
         </div>    
      </div>
      <div className='Buton_sectionfour'>
     <button className='big_CTA_button'>GET STARTED</button>
     </div>
     </div>
     <div className='second-container-section-four'>
     </div>
     </section>

     <section className='sectionFive'>
    
    
      <h1 className='sectionFiveTitle'>Available <span className='sectionFiveTitle2'>pricing plans</span> based on your needs</h1>
      <div className='countainerOneSectionFive'>
         <div className='countainerDefaultFree'>
            <h1 className='countainerDefaultFreeTitle'>Default</h1>
            <h1 className='countainerDefaultFreeTitle2'>Free</h1>
            <p className='countainerDefaultFreeParagraph'>Lorem Ispum Dollor Sit Amet</p>
            <div className='doneFlex2'>
         <div className='doneDescription2'>
            <img src={RoundedDone}/>
           <span className='doneparagraph2'>Lorem ispum dollor</span>
         </div>
         <div className='doneDescription2'>
          <img src={notDone}/>
          <span className='doneparagraph2'>Lorem ispum dollor</span>
         </div>
         <div className='doneDescription2'>
            <img src={RoundedDone}/>
            <span className='doneparagraph2'>Lorem ispum dollor</span>
         </div>    
         <div className='doneDescription2'>
            <img src={notDone}/>
            <span className='doneparagraph2'>Lorem ispum dollor</span>
         </div>  
         <div className='doneDescription2'>
            <img src={notDone}/>
            <span className='doneparagraph2'>Lorem ispum dollor</span>
         </div>  
      </div>
         <div className='startforfreeButton'>
        <button className='CTA-button'>Start for free</button>
        </div>
         </div>


         <div className='countainerPro'>  
         <h1 className='countainerDefaultFreeTitle'>PRO</h1>
            <h1 className='countainerDefaultFreeTitle2'>9.99$</h1>
            <p className='countainerDefaultFreeParagraph'>Lorem Ispum Dollor Sit Amet</p>
            <div className='doneFlex2'>
         <div className='doneDescription2'>
            <img src={RoundedDone}/>
           <span className='doneparagraph2'>Lorem ispum dollor</span>
         </div>
         <div className='doneDescription2'>
          <img src={RoundedDone}/>
          <span className='doneparagraph2'>Lorem ispum dollor</span>
         </div>
         <div className='doneDescription2'>
            <img src={RoundedDone}/>
            <span className='doneparagraph2'>Lorem ispum dollor</span>
         </div>    
         <div className='doneDescription2'>
            <img src={RoundedDone}/>
            <span className='doneparagraph2'>Lorem ispum dollor</span>
         </div>  
         <div className='doneDescription2'>
            <img src={RoundedDone}/>
            <span className='doneparagraph2'>Lorem ispum dollor</span>
         </div>  
      </div>
         <div className='startforfreeButton'>
        <button className='big_Secondary_Bordered_viollet'>Buy</button>
        </div>
      </div>
      </div>
     </section>
    
    <section className='sectionSix'>
      <div className='countainerSectionSix'>
         <div className='countainerSectionSixOne'>
              <div className='countainerSectionSixOne2'>
                <h1></h1>
                <div>
                  <button></button>
                  <button></button>
                  <button></button>
                </div>
              </div>
         </div>
         <div className='countainerSectionSixTwo'>
          
          </div>
      </div>
    </section>

    </div>
  )
}

export default seo
