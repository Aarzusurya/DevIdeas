import React from "react";
import "./WebsitesPortfolio.css";



function WebsitesPortfolio() {

  // Images array (public/images folder me rakho)
  const images = [
    { src: "/images/web1.jpg", title: "DUSONS.IN" },
    { src: "/images/web2.jpg", title: "Caffeinatedmd" },
    { src: "/images/web3.jpg", title: "Akbar Academy" },
    { src: "/images/web4.jpg", title: "Adeptech" },
    { src: "/images/web5.jpg", title: "accumatchbi" },
    { src: "/images/web6.jpg", title: "Skip Hire" },
    { src: "/images/web7.jpg", title: "In My Yard" },
    { src: "/images/web8.jpg", title: "Process Industry Informer" },
    { src: "/images/web9.jpg", title: "AppSourceHub" },
    { src: "/images/web10.jpg", title: "Deborah’s wonderful jewels and gems" },
    { src: "/images/web11.jpg", title: "Cornerstone Valuation" },
    { src: "/images/web12.jpg", title: "CVSBDC" },
    { src: "/images/web13.jpg", title: "CBIC" },
    { src: "/images/web14.jpg", title: "Corporate Network Services" },
    { src: "/images/web15.jpg", title: "Office Furniture Mart" },
    { src: "/images/web16.jpg", title: "Eyepoint United" },
    { src: "/images/web17.jpg", title: "Foto Eyebox" },
    { src: "/images/web18.jpg", title: "foxwoodk9" },
    { src: "/images/web19.jpg", title: "bluecollar coffee roasters" },
    { src: "/images/web20.jpg", title: "Elite Staffed" },
    { src: "/images/web21.jpg", title: "Mag-cpas" },
    { src: "/images/web22.jpg", title: "Season Report" },
    { src: "/images/web23.jpg", title: "Midtown Painting" },
    { src: "/images/web24.jpg", title: "CareByChristie" },
    { src: "/images/web25.jpg", title: "Red Triangle Marketing" },
    { src: "/images/web26.jpg", title: "Ornaments Gifts" },
    { src: "/images/web27.jpg", title: "Laser Thermal" }
  ];

  return (
    <div className="web-wrapper">

      {/* HERO SECTION */}
      <section className="web-site">
        <div className="web-site-image">
          <img src={images[0].src} alt="Websites Portfolio" loading="lazy" />
        </div>
        <h1>Our Websites Portfolio</h1>
      </section>

      {/* ===== IMAGE SECTIONS ===== */}
      {/** Divide images into chunks of 9 for multiple scroll sections **/}
      {[0, 9, 18].map(startIndex => (
        <section key={startIndex} className="web-scroll-section">
          <div className="web-scroll">
            {images.slice(startIndex, startIndex + 9).map((img, index) => (
              <div key={index} className="web-card">
                <img src={img.src} alt={img.title} loading="lazy" />
                <h3>{img.title}</h3>
              </div>
            ))}
          </div>
        </section>
      ))}


    </div>
  );
}

export default WebsitesPortfolio;