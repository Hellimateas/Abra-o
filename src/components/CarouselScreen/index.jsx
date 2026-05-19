import {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./CarouselScreen.css";

const svgFiles = [
  "img-slide-1.jpeg",
  "img-slide-2.jpeg",
  "img-slide-3.jpeg",
  "img-slide-4.jpeg",
  "img-slide-5.jpeg",
  "img-slide-6.jpeg",
  "img-slide-7.jpeg",
  "img-slide-8.jpeg",
  "img-slide-9.jpeg",
  "img-slide-10.jpeg",
  "img-slide-11.jpeg",
  "img-slide-12.jpeg",
];

const CarouselScreen = () => {
  return (
    <>
      <section id="carouselScreen" className="section-carousel-screen">
        <div className="section-body container">
          <div className="display-text">
            <h2>
              Foi um ano de grandes desafios e aprendizados, vivido com amor,
              cuidado e crescimento.
            </h2>
            <div className="text-and-gif-container">
              <div className="text-content">
                <br />
                Agora chegou a hora de agradecer!
                <br />
                Acompanhe os melhores momentos
              </div>
              <div className="gif-content">
                <img
                  src="assets/gif/seguindojesus.png"
                  alt="Seguindo Jesus"
                  className="jesus-gif"
                  style={{ width: "200px", marginTop: "10px" }}
                />
              </div>
            </div>
          </div>

          <div className="display-carousel">
            <Swiper
              modules={[
                Navigation,
                Pagination,
                Scrollbar,
                Autoplay,
                EffectCoverflow,
              ]}
              spaceBetween={15}
              navigation
              loop={true}
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              autoplay
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              coverflowEffect={{
                rotate: 50, // ângulo de rotação dos slides
                stretch: 0, // espaço entre os slides
                depth: 200, // profundidade do efeito
                modifier: 1, // multiplicador de escala
                slideShadows: true, // sombras dos slides
              }}
              autoHeight={true}
              breakpoints={{
                // Configurações para larguras de tela diferentes
                450: {
                  slidesPerView: 1, // Exibir 2 slides em telas maiores que 768 pixels
                },
                626: {
                  slidesPerView: 2, // Exibir 2 slides em telas maiores que 768 pixels
                },
                817: {
                  slidesPerView: 3,
                },
                1192: {
                  slidesPerView: 4,
                },
              }}
            >
              {svgFiles.map((file, idx) => (
                <SwiperSlide className="swiperSlide" key={idx}>
                  <img
                    className="carousel-slide"
                    alt={`Abraão Levi ${idx + 1}`}
                    src={`assets/svg/carousel/${file}`}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};
export default CarouselScreen;
