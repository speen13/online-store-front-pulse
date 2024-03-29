import "./main.css";
import './Mains.css'

import Banner from "./Banner/Banner.jsx";
import Slider from "../../components/Slider/Slider.jsx";
import SladerSale from "../../components/slider_sale/SladerSale.jsx";

import { useContext, useEffect } from "react";
import { host } from "../../http/index.jsx";
import { Context } from "../../main.jsx";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
// import Footer from "../footer/footer.jsx";
import lineIcons from "../../../public/icons/Property 1=Default.png";

const Main = observer(() => {
  const { store } = useContext(Context);
  const navigate = useNavigate();

  const click = () => {
    navigate("/catalog");
  };

  useEffect(() => {
    host.get("/products").then((res) => store.setProducts(res));
  }, []);

  return (
    <div>
      <div className="main">
        <div className="main_block">
          <div className="main_block_text">
            <h1>ОБИРАЙ КОМФОРТ ТА СВОБОДУ</h1>
          </div>
          <button className="button_catalog" onClick={click}>
            Каталог
          </button>
        </div>
      </div>
      <div className="main_man_woomen">
        <div className="main_man_block">
          <div className="main_man_block_text">
            Для нього
            <div className="line"></div>
          </div>
        </div>
        <div className="main_woomen_block">
          <div className="main_man_block_text">
            Для неї
            <div className="line_1"></div>
          </div>
        </div>
      </div>
      <div className="main_vector">
        <img src="../../../image/Vector%202.png" alt={"vector"} />
      </div>
      <div className="main_block_news">
        <h1>НОВИНКИ</h1>
        <Slider />
      </div>
      <Banner />
      <div>
        <h1 className="slider_sale">РОЗПРОДАЖ</h1>

        <div className="slider_sale_sale">
          <SladerSale />
        </div>
      </div>

      <div className="sale_img_line" id="animal">
        <img className="sale_line animal_line van" src={lineIcons} />

        <img className="sale_line_1 move-right" src={lineIcons} />
      </div>


    </div>
  );
});

export default Main;
