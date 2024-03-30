

import { Hero } from "./Hero";
import { Discount } from "./Discount";
import { Featured } from "./Featured";

import { Subscription } from "./subscription";
import { Testimonials } from "./Testimonials";
import { Footer } from "./Footer";
import { NewBooks } from "./NewBooks";
import { HomeNavbar } from "./HomeNavbar";


export const HomePage = () => {
  return (
    <>
      <HomeNavbar />
      <Hero />
      <Featured />
      <Discount />
      <Subscription />
      <NewBooks />
      <Testimonials />
      <Footer />
    </>
  );
};
