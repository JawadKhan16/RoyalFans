'use client'

import Hero from "@/components/pages/home/Hero"
import ProductShowcase from "@/components/pages/home/ProductShowcase"
import CTASection from "@/components/pages/home/cta"
const Home=()=>{
  return(
    <div>
      <Hero/>
      <ProductShowcase/>
      <CTASection/>
    </div>
  );
}

export default Home;