import Image from "next/image";
import Navbar from "../components/navbar/navbar";
import "./disclaimer.css";

export default function Disclaimer() {
  return (
    <>
        <Navbar variant="scrolled" />
      <div className="pageContainer">
        <div className="disclaimerBannerContainer">
            <Image
                src="/home/disclaimerBanner.webp"
                alt="Disclaimer Banner Image"
                fill
                className="disclaimerBanner"
            />
        </div>
        <div className="disclaimerContent">
                <h1 className="disclaimerTitle">Imaginary Brand. <br/><span className="cursive">Real Design.</span></h1>
                <p className="disclaimerDescription">This website is a concept-only project designed to highlight layout, branding, and UI execution for a fictional company.<br/><br/>This is just a concept — but your project could be real. Reach out at <span className="linkToWebsite"><a href="https://www.monoscale.co/" target="_blank">monoscale.co</a></span>.</p>
        </div>
      </div>
      <hr></hr>
    </>
  );
}
