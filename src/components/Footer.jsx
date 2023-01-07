import { FacebookSVG } from "../assets/footersvgs/FacebookSVG";
import { InstagramSVG } from "../assets/footersvgs/InstagramSVG";
import { YoutubeSVG } from "../assets/footersvgs/YoutubeSVG";

import "../styles/footer.css";

export const Footer = () => {
  return (
    <div>
      <div className="footer_background" />
      <div className="footer">
        <h2 className="footer_title">The golden Fleece</h2>

        <div className="footer_grid">
          <div className="footer_grid_block">
            <p>Leave your Email and receive news and special offers</p>
            <div className="footer_grid_input">example@example.com</div>
            <button className="footer_grid_button">Send</button>
          </div>

          <div className="footer_grid_block">
            <p>Privacy Policy</p>
            <p>Site `s map</p>
            <p>Work in a company</p>
            <p>Output</p>
            <p>Terms of use</p>
          </div>

          <div className="footer_grid_block">
            <p>+7 968 943-28-94</p>
            <p>zolotoeruno@mail.com</p>

            <div className="footer_icon_container">
              <YoutubeSVG />
              <FacebookSVG />
              <InstagramSVG />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
