import airbnb_3 from "./assets/airbnb_pic_3.jpg";
import airbnb_4 from "./assets/airbnb_pic_4.jpg";
import airbnb_5 from "./assets/airbnb_pic_5.jpg";
// import airbnb_6 from "./assets/airbnb_pic_6.jpg";
// import Data from "./Data";

function Bottom() {
  return (
    <div className="bottom-container">
      <div>
        <img src={airbnb_3} alt="pic3" className="sports-photo" />
        <div className="card-stats">
          {/* <img src={starStats} alt="starPic" className="star-image" /> */}
          <span>5.0</span>
          <span>(6).</span>
          <span>USA</span>
        </div>
        <p className="bottom-text">
          Life lessons with Kate Zaferes
          <br />
          <span className="bold-span">From $1000</span>/ person
        </p>
      </div>

      <div>
        <img src={airbnb_4} alt="pic4" className="sports-photo" />
        <div className="card-stats">
          {/* <img src={starStats} alt="starPic" className="star-image" /> */}
          <span>6.0</span>
          <span>(8).</span>
          <span>Sydney</span>
        </div>
        <p className="bottom-text">
          Luxury Special Apartment
          <br />
          <span className="bold-span">From $1600</span>/ person
        </p>
      </div>

      <div>
        <img src={airbnb_5} alt="pic5" className="sports-photo" />
        <div className="card-stats">
          {/* <img src={starStats} alt="starPic" className="star-image" /> */}
          <span>7.0</span>
          <span>(9).</span>
          <span>London</span>
        </div>
        <p className="bottom-text">
          Unique Night Double Bed
          <br />
          <span className="bold-span">From $600</span>/ person
        </p>
      </div>
    </div>
  );
}

export default Bottom;
