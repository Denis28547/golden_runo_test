import womenImg from "../imgs/unsplash_eoR0Ou7js5E.jpg";
import menImg from "../imgs/unsplash_hNoSCxPWYII.jpg";

import "../styles/secondBlock.css";

export const SecondBlock = () => {
  return (
    <div className="secondBlock">
      <div className="secondBlock_block secondBlock_block_reversed">
        <img src={womenImg} alt="img" />
        <p>To catalog</p>
        <h3>Women</h3>
      </div>

      <div className="secondBlock_block">
        <img src={menImg} alt="img" />
        <h3>Men</h3>
        <p>To catalog</p>
      </div>
    </div>
  );
};
