import firstImg from "../imgs/unsplash_133Vq4tTpBQ.jpg";
import secondImg from "../imgs/unsplash_fo83GD_AARE.jpg";
import thirdImg from "../imgs/unsplash_jAdtyxPDmvU.jpg";
import fourthImg from "../imgs/unsplash_9poB8SBFveA.jpg";
import fifthImg from "../imgs/unsplash_i2jbuqO0YfM.jpg";
import sixthImg from "../imgs/unsplash_q_sPpAv0MXE.jpg";

import "../styles/fourthBlock.css";

export const FourthBlock = () => {
  return (
    <div className="fourthBlock">
      <div className="fourthBlock_grid">
        <div className="fourthBlock_item">
          <img src={firstImg} alt="" className="fourthBlock_item_img" />
          <p className="fourthBlock_item_collection">New 2022</p>
          <div>
            <h3 className="fourthBlock_item_title">
              Rolex oyster perpetual 41
            </h3>
            <p className="fourthBlock_item_description">
              Elegant model in steel with a silver dial on the bracelet
            </p>
          </div>
          <p className="fourthBlock_item_go_to">Go to catalog</p>
        </div>

        <div className="fourthBlock_item">
          <img src={secondImg} alt="" className="fourthBlock_item_img" />
          <p className="fourthBlock_item_collection">Collection Color</p>
          <div>
            <h3 className="fourthBlock_item_title">Mercury</h3>
            <p className="fourthBlock_item_description">
              Jewelry made of white gold with sapphires of a noble blue hue
            </p>
          </div>
          <p className="fourthBlock_item_go_to">Go to catalog</p>
        </div>

        <div className="fourthBlock_item">
          <img src={thirdImg} alt="" className="fourthBlock_item_img" />
          <p className="fourthBlock_item_collection">Collection Wings</p>
          <div>
            <h3 className="fourthBlock_item_title">Garrard</h3>
            <p className="fourthBlock_item_description">
              Rings, bracelets and earrings spread golden wings adorned with
              diamonds and aquamarines
            </p>
          </div>
          <p className="fourthBlock_item_go_to">Go to catalog</p>
        </div>

        <div className="fourthBlock_item">
          <img src={fourthImg} alt="" className="fourthBlock_item_img" />
          <p className="fourthBlock_item_collection">Collection Union</p>
          <div>
            <h3 className="fourthBlock_item_title">Ring Soul Diamonds</h3>
            <p className="fourthBlock_item_description">
              Silver ring with diamonds in white gold
            </p>
          </div>
          <p className="fourthBlock_item_go_to">Go to catalog</p>
        </div>

        <div className="fourthBlock_item">
          <img src={fifthImg} alt="" className="fourthBlock_item_img" />
          <p className="fourthBlock_item_collection">
            With diamonds Dress code
          </p>
          <div>
            <h3 className="fourthBlock_item_title">Garrard</h3>
            <p className="fourthBlock_item_description">
              Although it is easy to emphasize versatility in our products, not
              this time
            </p>
          </div>
          <p className="fourthBlock_item_go_to">Go to catalog</p>
        </div>

        <div className="fourthBlock_item">
          <img src={sixthImg} alt="" className="fourthBlock_item_img" />
          <p className="fourthBlock_item_collection">CR61-2368</p>
          <div>
            <h3 className="fourthBlock_item_title">Ring with diamonds Owwer</h3>
            <p className="fourthBlock_item_description">
              A ring that will sit on any finger, and will suit any girl
            </p>
          </div>
          <p className="fourthBlock_item_go_to">Go to catalog</p>
        </div>
      </div>

      <button className="fourthBlock_load_more_button">Load more</button>
    </div>
  );
};
