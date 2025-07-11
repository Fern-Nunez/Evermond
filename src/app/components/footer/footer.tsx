// components/Footer.tsx
import "./footer.css";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerContent">
        <div className="footerLogoImageContainer">
            <Image
                src="/home/evermondLogoBlackLong.svg"
                alt="Evermond"
                fill
                className="footerLogoImage"
            />
        </div>

        <div className="footerSections">
          <div className="locationColumn">
            <p className="footerHeading">Locations:</p>
            <p>2343 Down Street, 98672</p>
            <p>87346 N F Street, 98729</p>
            <p>9872 Sunnyside Ave, 87236</p>
            <p>782 Figueroa Street, 98734</p>
          </div>

          <div className="navigationColumn">
            <p className="footerHeadingNav">Navigation:</p>
            <div className="footerNavLinks">
              <div>
                <a href="/" className="directLinkFooter"><p className="navLink">Home</p></a>
                <a href="/disclaimer" className="directLinkFooter"><p className="navLink">Gallery</p></a>
                <a href="/disclaimer" className="directLinkFooter"><p className="navLink">Terms of Service</p></a>
              </div>
              <div>
                <a href="/disclaimer" className="directLinkFooter"><p className="navLink">Shop</p></a>
                <a href="/disclaimer" className="directLinkFooter"><p className="navLink">Careers</p></a>
                <a href="/disclaimer" className="directLinkFooter"><p className="navLink">Cookie Policy</p></a>
              </div>
            </div>
          </div>
        </div>

        <p className="footerCredit">Designed by Monoscale · All Rights Reserved</p>
      </div>
    </footer>
  );
}
