import React from "react";
import { Link } from "react-router-dom";

// Note: You should replace 'honey.png' with an image of chia seeds.
// For example, a bag of chia seeds or a bowl of chia pudding.
import abimg from "../../images/ChiaSeeds.jpg";

const OfferSection = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };
  return (
    <section className="offer-area section-padding">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="offer-img">
              {/* Updated alt text for accessibility */}
              <img src={abimg} alt="Bag of Premium Chia Seeds on offer" />
            </div>
          </div>
          <div className="col-lg-5">
            <div className="offer-wrap">
              <div className="offer-title">
                <small>Limited-Time Health Boost</small>
                {/* Updated heading */}
                <h2>
                  Premium Organic <span>Chia Seeds</span> <br /> Up To 58% Off.
                </h2>
              </div>
              {/* Updated content */}
              <p>
                Supercharge your diet with our all-natural chia seeds. Packed
                with Omega-3s, fiber, and essential nutrients, they are the
                perfect addition to smoothies, yogurt, and salads. Grab this
                deal while it lasts!
              </p>
              <Link onClick={ClickHandler} to="/shop" className="btn theme-btn">
                Shop Now <i className="fa fa-angle-double-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
