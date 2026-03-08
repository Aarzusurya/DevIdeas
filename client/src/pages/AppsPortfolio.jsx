import React from "react";
import "./AppsPortfolio.css";
import { Link } from "react-router-dom";


function AppsPortfolio() {

  const cards = [
    { title: "Dual Accounts – Multi Social", image: "ml.png", desc: "Dual Accounts app helps to manage and use private and public…" },
    { title: "My Period Tracker", image: "ios.jpg", desc: "My Period Tracker is an ingenious and easy-to-use application that helps…" },
    { title: "Just Play Diary", image: "mobile.png", desc: "Just play diary is the app that will become your best…" },
    { title: "Body Care Love", image: "body-care.png", desc: "Body Care Love - The only app that combines sport, health,…" },
    { title: "RAN Fleet", image: "ran-fleet.png", desc: "The RAN Wireless Fleet Management app will allow a business owner…" },
    { title: "Original Tommy’s", image: "tommy-app.png", desc: "The official ORIGINAL TOMMY'S app gives you access to exclusive mobile…" },
    { title: "Nullcom", image: "nullcom-app.png", desc: "Nullcom anonymous communication app can be a great way to stay…" },
    { title: "Hisably", image: "Ai2.png", desc: "Hisably makes managing convenience stores simple, fast and efficient." },
    { title: "Heliosphere", image: "ios.png", desc: "As a Complete Solar affiliate, you can get paid just for…" },
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className="apps-smart">
        <div className="smart-content">

          <div className="smart-image">
            <img src="/images/rocket.png" alt="Rocket"/>
          </div>

          <h1>Our Apps Portfolio</h1>
          <p>
Our portfolio has a wide variety of products that can suit your needs. 
We design and develop modern mobile applications that focus on performance, 
user experience, and innovative features.
</p>

<p>
From productivity apps to lifestyle, health, and business solutions, 
our team works on creating applications that make everyday tasks easier 
and more efficient for users around the world.
</p>

<p>
We take pride in our work and are always looking to improve by adopting 
the latest technologies, design trends, and development practices to 
deliver high-quality mobile applications that people love to use.
</p>
        </div>
      </section>

      {/* CARDS SECTION */}
      <section className="portfolio-section">
        <div className="portfolio-grid">

          {cards.map((card, index) => (
            <div className="portfolio-card" key={index}>

              {/* IMAGE */}
              <div className="card-icon">
                <img src={`/images/${card.image}`} alt={card.title}/>
              </div>

              <h3>{card.title}</h3>
              <p>{card.desc}</p>

              {index === 0 ? (
                <Link to="/multi-social"><button>Read More</button></Link>
              ) : index === 1 ? (
                <Link to="/periods"><button>Read More</button></Link>
              ) : index === 2 ? (
                <Link to="/play-diary"><button>Read More</button></Link>
              ) : index === 3 ? (
                <Link to="/body-care-love"><button>Read More</button></Link>
              ) : index === 4 ? (
                <Link to="/ran-fleet"><button>Read More</button></Link>
              ) : index === 5 ? (
                <Link to="/tommy"><button>Read More</button></Link>
              ) : index === 6 ? (
                <Link to="/nullcom"><button>Read More</button></Link>
              ) : index === 7 ? (
                <Link to="/hisably"><button>Read More</button></Link>
              ) : index === 8 ? (
                <Link to="/heliosphere"><button>Read More</button></Link>
              ) : (
                <button>Read More</button>
              )}

            </div>
          ))}

        </div>
        
      </section>
    </>
  );
}

export default AppsPortfolio;