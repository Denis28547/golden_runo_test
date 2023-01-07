import { ArrowDownSvg } from "../assets/thirdblock_svgs/ArrowDownSvg";
import thirdblockImg from "../imgs/map.jpg";

import "../styles/thirdBlock.css";

export const ThirdBlock = () => {
  return (
    <div className="thirdBlock">
      <div className="thirdBlock_dropdown_container">
        <h2 className="thirdBlock_dropdown_container_title">Store search</h2>
        <div className="thirdBlock_dropdown">
          Select an address <ArrowDownSvg />
        </div>
        <button>Find address</button>
      </div>

      <img src={thirdblockImg} alt="igm" className="thirdBlock_img" />
    </div>
  );
};
