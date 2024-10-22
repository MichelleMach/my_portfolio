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
                  I create prototypes of websites and applications so you can choose,
                  in a personalized way, the best version of your service.

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
                  Once the project's design is defined, it will move on to development.
                  It is in this process that planning gives way to creation.

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
                After the project is completed, it's time to ensure your product is seen by your customers. SEO will help increase the number of visits to your website.

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
                If you already have a website or system and need maintenance, don't worry. Your issue will be assessed and resolved quickly.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="separated" />

        {/* <Testimonials /> */}
      </div>
    </section>
  );
};
export default Services;
