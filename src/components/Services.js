import dynamic from "next/dynamic";

const Testimonials = dynamic(() => import("./Testimonials"), {
  ssr: false,
});

const Services = () => {
  return (
    <section
      id="services"
      data-nav-tooltip="Services"
      className="pp-section pp-scrollable section"
    >
      <div className="container">
        <div className="title">
          <h3>What I do?</h3>
        </div>
        <div className="row">
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i className="icon theme-bg icon-mobile" />
              <div className="feature-content media-body">
                <h5>UX Design</h5>
                <p>
                  Crio protótipos de sites e aplicativos para que você possa escolher, 
                  de forma personalizada, a melhor versão do seu serviço. 
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i className="icon theme-bg icon-desktop" />
              <div className="feature-content media-body">
                <h5>Web Development</h5>
                <p>
                  Depois de definido como será o projeto, será passado para o desenvolvimento.
                  É nesse processo que planejamento dará lugar a criação.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i className="icon theme-bg icon-target" />
              <div className="feature-content media-body">
                <h5>SEO Marketing</h5>
                <p>
                  Depois do projeto já finalizado, está na hora de fazer com que o seu produto seja visto
                  pelos seus clientes. O SEO irá proporcionar aumento na quantidade de visitação do seu site.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i className="icon theme-bg icon-mobile" />
              <div className="feature-content media-body">
                <h5>Development Support </h5>
                <p>
                  Se você já tem um site ou sistema e precisa de manutenções, não se preocupe. 
                  O seu problema será avaliado e solucionado de forma rápida. 
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="separated" />
        <Testimonials />
      </div>
    </section>
  );
};
export default Services;
