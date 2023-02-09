import { render } from "@testing-library/react";
import React from "react";
import BannerSection from "./BannerSection";
import OfferCardBlock from "./OfferCardBlock";
import OurServices from "./OurServices";
import WhyUs from "./WhyUs";
import Footer from "./Footer";

const MainSection = () =>{
    return(
        <React.Fragment>
           <BannerSection />
           <OfferCardBlock />
           <OurServices />
           <WhyUs />
           <Footer />
        </React.Fragment>
      );
}

export default MainSection;