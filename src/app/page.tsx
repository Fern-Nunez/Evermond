import Image from "next/image";
import ScrollLink from "./components/scrollTarget/scrollTarget";
import "./home.css";

export default function Home() {
  return (
    <>
      <div className="pageContainer">
        <div className="heroContainer">
          <div className="heroContent">
            <div>
              <h2>Summer <br /> Collection</h2><h1>is Now Live</h1>
            </div>
            <div>
              <p>Timeless essentials designed for effortless summer days.</p>
            </div>
            <div>
              <ScrollLink scrollTarget="collections" className="scrollToLink"><button className="heroButton"><span className="buttonText">View Collections</span></button></ScrollLink>
            </div>
          </div>
          <div className="heroImageContainer">
            <Image
              src="/home/heroImage.jpg"
              alt="Hero Image"
              fill
              className="heroImage"
            />
          </div>
        </div>

        <div className="aboutContainer">
          <div className="aboutContent">
            <div className="aboutTitle">
              <h1>Crafted For</h1><h2>Timeless Living</h2>
            </div>
            <div className="aboutDescription">
              <p>At Evermond, we believe clothing should be simple, refined, and built to last.- Our essentials are designed to move with you — made with natural fabrics, thoughtful craftsmanship, and an unwavering commitment to timeless style.</p>
            </div>
          </div>
        </div>

        <div className="sectionsContainer" id="collections">

          <a href="/disclaimer">
            <div className="collectionSection">
              <div className="collectionImageContainer">
                <Image
                  src="/home/winterCollectionImage.jpg"
                  alt="Summer Collection"
                  fill
                  className="collectionImage"
                />
              </div>
              <div className="imageOverlay"></div>
              <div className="collectionContent">
                <h3>Winter Collection</h3>
              </div>
            </div>
          </a>

          <a href="disclaimer">
            <div className="collectionSection">
              <div className="collectionImageContainer">
                <Image
                  src="/home/springCollectionImage.jpg"
                  alt="Summer Collection"
                  fill
                  className="collectionImage"
                />
              </div>
              <div className="imageOverlay"></div>
              <div className="collectionContent">
                <h3>Spring Collection</h3>
              </div>
            </div>
          </a>


          <a href="disclaimer">
            <div className="collectionSection">
              <div className="collectionImageContainer">
                <Image
                  src="/home/summerCollectionImage.jpg"
                  alt="Summer Collection"
                  fill
                  className="collectionImage"
                />
              </div>
              <div className="imageOverlay"></div>
              <div className="collectionContent">
                <h3>Summer Collection</h3>
              </div>
            </div>
          </a>
        </div>
          


        <div className="featuredContainer">
          <div className="featuredContent">
            <div className="featuredTitle">
              <h1>Styled for <span className="cursiveHome">Every <br/>Moment </span>in Life</h1>
            </div>
            <div className="featuredDescription">
              <p>See how Evermond essentials come to life — wherever life takes you.</p>
            </div>
          </div>

          <div className="featuredItemsContainer">

            <a href="/disclaimer" className="directLinkHome">
              <div className="featuredItem">
                <div className="featuredItemImageContainer">
                  <Image
                    src="/home/pinkJacket.jpg"
                    alt="Featured Item 1"
                    fill
                    className="featuredItemImageRight"
                  />
                </div>
                <div className="featuredItemText">
                  <p>Pink Jacket<span className="arrow">→</span></p>
                </div>
              </div>
            </a>

            <a href="/disclaimer" className="directLinkHome">
              <div className="featuredItem">
                <div className="featuredItemImageContainer">
                  <Image
                    src="/home/polkaDotBlouse.jpg"
                    alt="Featured Item 1"
                    fill
                    className="featuredItemImageLeft"
                  />
                </div>
                <div className="featuredItemText">
                  <p>Cherry Polka Dot Blouse<span className="arrow">→</span></p>
                </div>
              </div>
            </a>

            <a href="/disclaimer" className="directLinkHome">
              <div className="featuredItem">
                <div className="featuredItemImageContainer">
                  <Image
                    src="/home/stripedShirt.jpg"
                    alt="Featured Item 1"
                    fill
                    className="featuredItemImage"
                  />
                </div>
                <div className="featuredItemText">
                  <p>Blue & Red Striped Shirt<span className="arrow">→</span></p>
                </div>
              </div>
            </a>


            <a href="/disclaimer" className="directLinkHome">
              <div className="featuredItem">
                <div className="featuredItemImageContainer">
                  <Image
                    src="/home/silkDress.jpg"
                    alt="Featured Item 1"
                    fill
                    className="featuredItemImage"
                  />
                </div>
                <div className="featuredItemText">
                  <p>Lavender Silk Dress<span className="arrow">→</span></p>
                </div>
              </div>
            </a>



          </div>
        </div>


        <div className="newsletterSection">
            <div className="newsletterImageContainer">
                <Image
                  src="/home/newsletterImage.jpg"
                  alt="Featured Item 1"
                  fill
                  className="newsletterImage"
                />
            </div>
            <div className="newsletterContent">
              <div className="newletterHeading">
                <h4>Get early access to new collections, exclusive offers, and brand updates.</h4>
              </div>
              <form className="newsletterSubscribe">
                  <input type="email" className="emailInput" placeholder="Email Address"></input>
                  <button type="submit" className="newsletterSubmitButton">Subscribe</button>
              </form>
            </div>
        </div>

      </div>
    </>
  );
}
