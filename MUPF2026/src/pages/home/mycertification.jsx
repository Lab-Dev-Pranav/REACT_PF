import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import BaseComponent from "../../BaseComponent/BaseComponent";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import "./mycertification.css";

/* ---------------- DATA ---------------- */

const certificates = [
  {
    id: 1,
    title: "National Service Scheme (NSS)",
    issuedBy: "Issued by SCOS-SPPU - June 2025",
    url: "/Cert/cert1.png",
    date: "June 2025"
  },
  {
    id: 2,
    title: "Web Developer Internship",
    issuedBy: "Issued by Hex-Software - 20 Feb 2026",
    url: "/Cert/cert5.png",
    date: "20 Feb 2026"
  },
  {
    id: 3,
    title: "Advanced DSA With Java",
    issuedBy: "Issued by Apna College - May 2024",
    url: "/Cert/cert2.png",
    date: "May 2024"
  },
  {
    id: 4,
    title: "Delta (Full Stack Web Development)",
    issuedBy: "Issued by Apna College - July 2025",
    url: "/Cert/cert3.png",
    date: "July 2025"
  },
  {
    id: 5,
    title: "Node.js Bootcamp",
    issuedBy: "Issued by LetsUpgrade.in - 25 Oct 2025",
    url: "/Cert/cert4.png",
    date: "25 Oct 2025"
  },
];

/* ---------------- COMPONENT ---------------- */

function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);

  // Prevent scrolling on the body when modal is open
  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedCert]);

  return (
    <BaseComponent className="home-certificates">
      <h1>📜 Certificates</h1>
      <div className="blog-slider-container">

        <Swiper
          modules={[Pagination, Autoplay, EffectFade]}
          spaceBetween={30}
          effect={"fade"}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            el: ".blog-slider__pagination",
          }}
          className="blog-slider"
        >

          {certificates.map((cert) => (
            <SwiperSlide key={cert.id} className="blog-slider__item">
              <div className="blog-slider__img">
                <img src={cert.url} alt={cert.title} />
              </div>
              <div className="blog-slider__content">
                <span className="blog-slider__code">{cert.date}</span>
                <div className="blog-slider__title">{cert.title}</div>
                <div className="blog-slider__text">{cert.issuedBy}</div>
                <a
                  href="#"
                  className="blog-slider__button"
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedCert(cert);
                  }}
                >
                  VIEW CERTIFICATE
                </a>
              </div>
            </SwiperSlide>
          ))}
          <div className="blog-slider__pagination"></div>
        </Swiper>
      </div>

      {/* Full-screen Certificate Overlay */}
      {selectedCert && createPortal(
        <div className="cert-overlay" onClick={() => setSelectedCert(null)}>
          {/* <button className="cert-overlay__close" onClick={() => setSelectedCert(null)}> */}

            <button class="button" onClick={() => setSelectedCert(null)}>
              <span class="X"></span>
              <span class="Y"></span>
              <div class="close">Close</div>
            </button>

          {/* </button> */}
          <div className="cert-overlay__content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedCert.url} alt={selectedCert.title} className="cert-overlay__img" />
            <div className="cert-overlay__details">
              <span className="cert-overlay__date">{selectedCert.date}</span>
              <h2 className="cert-overlay__title">{selectedCert.title}</h2>
              <p className="cert-overlay__issued">{selectedCert.issuedBy}</p>
            </div>
          </div>
        </div>,
        document.body
      )}
    </BaseComponent>
  );
}

export default Certificates;