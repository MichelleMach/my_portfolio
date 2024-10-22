import Isotope from "isotope-layout";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
const Portfolio = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    isotope.current = new Isotope(".portfolio-content", {
      itemSelector: ".grid-item",
      //    layoutMode: "fitRows",
      percentPosition: true,
      masonry: {
        columnWidth: ".grid-item",
      },
      animationOptions: {
        duration: 750,
        easing: "linear",
        queue: false,
      },
    });
    return () => isotope.current.destroy();
  });
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "active" : "");
  return (
    <section
      id="work"
      data-nav-tooltip="Work"
      className="pp-section pp-scrollable section dark-bg"
    >
      <div className="container">
        <div className="title">
          <h3 id="portfolio">My Portfolio.</h3>
        </div>
        <div className="portfolio-filter-01">
          <ul className="filter nav">
            <li
              className={`c-pointer ${activeBtn("*")}`}
              onClick={handleFilterKeyChange("*")}
              data-filter="*"
            >
              All
            </li>
            <li
              className={`c-pointer ${activeBtn("web-design")}`}
              onClick={handleFilterKeyChange("web-design")}
              data-filter=".web-design"
            >
              Web Design
            </li>
            <li
              className={`c-pointer ${activeBtn("fullstack")}`}
              onClick={handleFilterKeyChange("fullstack")}
              data-filter=".fullstack"
            >
              Full Stack
            </li>
            <li
              className={`c-pointer ${activeBtn("ux")}`}
              onClick={handleFilterKeyChange("ux")}
              data-filter=".ux"
            >
              UX-Design
            </li>
          </ul>
        </div>{" "}
        {/* Portfolio Filter */}
        <div className="portfolio-content grid-gutter-lg grid-col-3 lightbox-gallery">
          <div className="grid-item web-design">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">Universal Music</h5>
                <span>Corporate Website</span>
              </div>
              <div className="portfolio-img">
                <a
                  href="https://daring-expectations-359258.framer.app/"
                  className="gallery-link"
                >
                  <Image src="/static/img/universal.png" title="universal" alt="universal-music" width={1339} height={627} />
                </a>
              </div>
            </div>
          </div>

          <div className="grid-item web-design">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">Axxis Arquitetura</h5>
                <span>Corporate Website</span>
              </div>
              <div className="portfolio-img">
                <a
                  href="https://www.axxis.arq.br/"
                  className="gallery-link"
                >
                  <Image src="/static/img/axxis.png" title="axxis-arquitetura" alt="axxis-arquitetura" width={1339} height={642} />
                </a>
              </div>
            </div>
          </div>

          <div className="grid-item web-design">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">Tonin Embalagens</h5>
                <span>Corporate Website</span>
              </div>
              <div className="portfolio-img">
                <a
                  href="https://toninembalagens.com.br/"
                  className="gallery-link"
                >
                  <Image src="/static/img/tonin.png" title="tonin-embalagens" alt="tonin-embalagens" width={1314} height={642} />
                </a>
              </div>
            </div>
          </div>

          <div className="grid-item fullstack">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">FutureEats Delivery</h5>
                <span>Delivery App</span>
              </div>
              <div className="portfolio-img">
                <a
                  href="https://oafish-quince.surge.sh"
                  className="gallery-link"
                >
                  <Image src="/static/img/portfolio-4.png" title="ifood-delivery" alt="ifood-delivery" width={300} height={500} />
                </a>
              </div>
            </div>
          </div>

          <div className="grid-item fullstack">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">Pokedex</h5>
                <span>Pokemon Battle Game</span>
              </div>
              <div className="portfolio-img">
                <a
                  href="https://pokedex16-battle.surge.sh"
                  className="gallery-link"
                >
                  <Image src="/static/img/portfolio-6.png" title="pokedex" alt="pokedex" width={300} height={380} />
                </a>
              </div>
            </div>
          </div>

          <div className="grid-item ux">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">Graphic Design Portfolio</h5>
                <span>Prototype</span>
              </div>
              <div className="portfolio-img">
                <a
                  href="https://xd.adobe.com/view/0a88e2bf-08ff-41bb-9d47-b301fefebc56-5fdb/?fullscreen"
                  className="gallery-link"
                >
                  <Image src="/static/img/portf.png" title="portfolio" alt="portfolio" width={288} height={495} />
                </a>
              </div>
            </div>
          </div>

          <div className="grid-item ux">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">Graphic Design Portfolio</h5>
                <span>Prototype</span>
              </div>
              <div className="portfolio-img">
                <a
                  href="https://xd.adobe.com/view/0a88e2bf-08ff-41bb-9d47-b301fefebc56-5fdb/?fullscreen"
                  className="gallery-link"
                >
                  <Image src="/static/img/portf.png" title="portfolio" alt="portfolio" width={288} height={495} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
