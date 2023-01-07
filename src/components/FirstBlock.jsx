import hugeImg from "../imgs/first_block/ph.jpg";
import smallImg from "../imgs/first_block/unsplash_hXhMzWysB8s.jpg";
import someImg1 from "../imgs/first_block/unsplash_SYaln4hCsAk.jpg";
import someImg2 from "../imgs/first_block/unsplash_s8SJ8pmxPDA.jpg";
import someImg3 from "../imgs/first_block/unsplash_Y9dcQpOIMHQ.jpg";
import { ArrowLink } from "../assets/FirstBlock/ArrowLink";

import "../styles/firstBlock.css";

export const FirstBlock = () => {
  return (
    <div>
      <div className="first_block_top">
        <img src={hugeImg} alt="img" className="huge_img" />

        <div className="some_info">
          <div className="some_title">
            <h2 className="some_title_1">Your fashion search</h2>
            <h2 className="some_title_2">starts here</h2>
          </div>
          <h3 className="some_description">
            Multi-brand premium kdassa boutiques with a wide range of branded
            jewelry and accessories
          </h3>
          <a href={"/"} className="some_link">
            <ArrowLink />
            Watch the presentation
          </a>
        </div>

        <img src={smallImg} alt="img" className="small_img" />
      </div>

      <div className="first_block_bottom">
        <div className="some_block">
          <img src={someImg1} alt="img" className="some_block_img" />
          <div className="some_block_info">
            <h4 className="some_block_title">
              Why is it important to buy expensive products
            </h4>
            <p className="some_block_more_details">More details</p>
          </div>
        </div>

        <div className="some_block">
          <img src={someImg2} alt="img" className="some_block_img" />
          <div className="some_block_info">
            <h4 className="some_block_title">
              Why is it important to buy expensive products
            </h4>
            <p className="some_block_more_details">More details</p>
          </div>
        </div>

        <div className="some_block">
          <img src={someImg3} alt="img" className="some_block_img" />
          <div className="some_block_info">
            <h4 className="some_block_title">
              Why is it important to buy expensive products
            </h4>
            <p className="some_block_more_details">More details</p>
          </div>
        </div>
      </div>
    </div>
  );
};
