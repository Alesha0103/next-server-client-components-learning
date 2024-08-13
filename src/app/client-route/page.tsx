"use client";

import { serverSideFunction } from "../utils/server-utils";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTheme } from "@/components/theme-provide";

// import "./ImageSlider.css";

const ClientRoutePage = () => {
  const theme = useTheme();
  return (
    <>
      <h1
        style={{
          color: theme.colors.secondary,
        }}
      >
        Client Route
      </h1>
      <div className="image-slider-container">
        <Slider>
          <div>
            <img src="https://picsum.photos/400/200" alt="placeholder" />
          </div>
          <div>
            <img src="https://picsum.photos/400/200" alt="placeholder" />
          </div>
          <div>
            <img src="https://picsum.photos/400/200" alt="placeholder" />
          </div>
          <div>
            <img src="https://picsum.photos/400/200" alt="placeholder" />
          </div>
        </Slider>
      </div>
    </>
  );
}

export default ClientRoutePage;