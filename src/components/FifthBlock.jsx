import firstImg from "../imgs/unsplash_V14jqE4ZLWQ.jpg";
import secondImg from "../imgs/unsplash_lk7s8i5NdqE.jpg";
import thirdImg from "../imgs/unsplash_UBeNYvk6ED0.jpg";
import fourthImg from "../imgs/unsplash_ZL7JpQ3d1Yk.jpg";

import "../styles/fifthBlock.css";

export const FifthBlock = () => {
  return (
    <div style={{ marginBottom: "80px" }}>
      <h2 className="fifthBlock_title">We are in social networks</h2>
      <div className="fifthBlock">
        <img src={firstImg} alt="img" />
        <img src={secondImg} alt="img" />
        <img src={thirdImg} alt="img" />
        <img src={fourthImg} alt="img" />
      </div>

      <button className="fifthBlock_button">Go to Instagram</button>
    </div>
  );
};
