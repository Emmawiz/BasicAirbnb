import AirbnbPic2 from "./assets/airbnb_pic_2.jpg";

function Center() {
  return (
    <div className="center-container">
      <section className="section-center">
        <img src={AirbnbPic2} alt="Airbnb" className="center-photo" />
        <h2 className="h2-center">Online Experiences</h2>

        <p className="center-page">
          Join unique interactive activities led by one-of-a-kind hosts-all
          without leaving home.
        </p>
      </section>
    </div>
  );
}

export default Center;
