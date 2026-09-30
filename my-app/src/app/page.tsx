import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BookingBar from "@/components/BookingBar";
import About from "@/components/About";
import StatsBar from "@/components/StatsBar";
import Rooms from "@/components/Rooms";
import Experience from "@/components/Experience";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Explore from "@/components/Explore";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <BookingBar />
        <About />
        <StatsBar />
        <Rooms />
        <Experience />
        <Gallery />
        <Testimonials />
        <Explore />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
