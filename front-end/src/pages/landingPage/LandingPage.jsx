import Navbar from "../components/navBar/Navbar";
import Card from "../components/cards/features/Card";
import Title from "../components/titles/Title.jsx";
import Footer from "../components/footer/Footer.jsx";
import OpenSource from "../components/cards/openSource/OpenSource.jsx";
import FeatureInfo from "../../utils/landingPage/info.js";
import fullLogo from "../../assets/images/logo-txt-2.jpeg";
import { ArrowRight } from "lucide-react";


export default function LandingPage() {
  return (
    <div className="w-full min-h-screen bg-clr-2 antialiased pb-10">
      <Navbar />

      <div className="flex justify-between items-center gap-10 pl-20 py-14 pr-14">
        <div className="space-y-5">
          <p className="text-7xl font-bold tracking-wide text-clr-1 drop-shadow-2xl">
            Unleash Your Creativity with Every Page Turn
          </p>
          <p className="w-[80%] text-black/75 font-medium">
            Dive into a world of possibilities with our diverse collection of
            notebooks. Each page holds the potential to capture your thoughts,
            ideas, and dreams, empowering you to unleash your creativity like
            never before.
          </p>
          <button className="px-4 py-2 rounded-2xl bg-black/15 shadow-lg font-medium text-black/80 flex justify-center items-center space-x-2 hover:font-semibold hover:scale-105 hover:transition-all hover:duration-300 hover:shadow-2xl">
            <span>Get Started</span><span><ArrowRight size={20} /></span>
          </button>
        </div>
        <div>
          <img src={fullLogo} alt="notebookseller-logo" />
        </div>
      </div>


      <Title title={"Capture Ideas, Ignite Inspiration"}/>

      <div className="flex justify-center items-center flex-col gap-5">
        {
            FeatureInfo.map((item, index) => <Card key={index} imgLink={item.imgLink} title={item.title} content={item.content} rowReverse={item.rowReverse}  />)
        }
      </div>

    <OpenSource />

    <Footer />
    </div>
  );
}
