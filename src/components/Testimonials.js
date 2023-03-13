import { Fragment } from "react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Grid,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Pagination, Navigation, EffectFade, Autoplay, Grid]);
const Testimonials = () => {
  const props = {
    slidesPerView: 1,
    spaceBetween: 25,
    loop: true,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".owl-dots",
      clickable: true,
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      768: { slidesPerView: 2, spaceBetween: 25 },
    },
  };
  return (
    <Fragment>
      <div className="title">
        <h3>Testimonials.</h3>
      </div>
      <Swiper {...props}>
        <SwiperSlide className="testimonial-01 media">
          <div className="avatar">
            <img src="static/img/ricardo-souza-testemunial.jpg" title="ricardo-souza-testemunial" alt="ricardo-souza-testemunial" />
          </div>
          <div className="media-body">
            <p>
              Procurei por profissionais de tecnologia que pudessem fazer um site com a cara da minha empresa.
              A Michelle foi uma profissional que me passou a confiança que eu precisava.
            </p>
            <h6>Ricardo de Souza</h6>
            {/* <span>CEO at Geek Burguer</span> */}
          </div>
        </SwiperSlide>
        <SwiperSlide className="testimonial-01 media">
          <div className="avatar">
            <img src="static/img/victor-leandro-testemunial.jpg" title="victor-leandro-testemunial" alt="victor-leandro-testemunial" />
          </div>
          <div className="media-body">
            <p>
              Durante o período de desenvolvimento, Michelle foi uma pessoa extremamente comunicativa, 
              buscando manter o contato e compartilhar conhecimentos.
            </p>
            <h6>Victor Leandro Eleuterio</h6>
            {/* <span>Coworker at Labenu</span> */}
          </div>
        </SwiperSlide>
        {/* <SwiperSlide className="testimonial-01 media">
          <div className="avatar">
            <img src="static/img/profile.png" title="fabricio-testemunial" alt="fabricio-testemunial" />
          </div>
          <div className="media-body">
            <p>
              A Michelle se mostrou uma profissional comprometida e determinada. 
              Sempre enfrentando os problema e com curiosidade de buscar soluções.  
            </p>
            <h6>Gabriela Nasciment</h6>
            <span>Gerente at SulSystem</span>
          </div>
        </SwiperSlide> */}
        <SwiperSlide className="testimonial-01 media">
          <div className="avatar">
            <img src="static/img/rafael-santos-testemunial.jpg" title="rafael-santos-testemunial" alt="rafael-santos-testemunial" />
          </div>
          <div className="media-body">
            <p>
              A Michelle foi um grande alicerce para eu construir o meu negócio. Sempre me deu muito apoio
              , além de conversarmos muito sobre como melhorar o business.
            </p>
            <h6>Rafael Santos</h6>
            {/* <span>Coworker at Labenu</span> */}
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="owl-dots"></div>
    </Fragment>
  );
};
export default Testimonials;
