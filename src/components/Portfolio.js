import Isotope from "isotope-layout";
import { useEffect, useRef, useState } from "react";
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
              className={`c-pointer ${activeBtn("front-end")}`}
              onClick={handleFilterKeyChange("front-end")}
              data-filter=".front-end"
            >
              Front-End
            </li>
            <li
              className={`c-pointer ${activeBtn("back-end")}`}
              onClick={handleFilterKeyChange("back-end")}
              data-filter=".back-end"
            >
              Back-End
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
          <div className="grid-item front-end ux">
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
                  <img src="static/img/portfolio-4.png" title="ifood-delivery" alt="ifood-delivery" />
                </a>
              </div>
            </div>
          </div>

          <div className="grid-item front-end">
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
                     <img src="static/img/portfolio-6.png" title="pokedex" alt="pokedex" />
                  </a>
              </div>
            </div>
          </div>

          {/* <div className="grid-item front-end">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">Controle-Financeiro</h5>
                <span>Entrada, Saida e Total Financeiro</span>
              </div>
              <div className="portfolio-img">
                <img src="static/img/portfolio-5-1.png" title="controle-financeiro" alt="controle-financeiro" />
                <div className="portfolio-icon">
                  <a
                    href="static/img/m-portfolio-3.jpg"
                    className="gallery-link"
                  >
                    <span className="ti-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className="grid-item back-end">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">Jogo da Velha</h5>
                <span>Tic Tac Toe</span>
              </div>
              <div className="portfolio-img">
                  <a
                    href="three-quartz.surge.sh"
                    className="gallery-link"
                  >
                    <img src="static/img/jogo-da-velha.png" title="jogo-da-velha" alt="jogo-da-velha" />
                  </a>
              </div>
            </div>
          </div>{" "} */}

         
        
          {/* grid item */}
          {/* <div className="grid-item front-end">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">Momb ios App</h5>
                <span>Broadcasting ios App</span>
              </div>
              <div className="portfolio-img">
                <img src="static/img/m-portfolio-8.jpg" title="" alt="" />
                <div className="portfolio-icon">
                  <a
                    href="static/img/m-portfolio-8.jpg"
                    className="gallery-link"
                  >
                    <span className="ti-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>{" "} */}
          {/* grid item */}
          {/* <div className="grid-item ux">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">Momb ios App</h5>
                <span>Broadcasting ios App</span>
              </div>
              <div className="portfolio-img">
                <img src="static/img/m-portfolio-9.jpg" title="" alt="" />
                <div className="portfolio-icon">
                  <a
                    href="static/img/m-portfolio-9.jpg"
                    className="gallery-link"
                  >
                    <span className="ti-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>{" "} */}
          {/* grid item */}
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
