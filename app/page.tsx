import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Problem from "@/components/problem";
import Approach from "@/components/approach";
import Results from "@/components/results";
import Testimonial from "@/components/testimonial";
import Fit from "@/components/fit";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import MobileCTA from "@/components/mobile-cta";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Problem />
      <Approach />
      <Results />
      <Testimonial />
      <Fit />
      <Contact />
      <Footer />
      <MobileCTA />
    </>
  );
}
