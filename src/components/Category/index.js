import React from "react";
import { Link } from "react-router-dom";

// Note: You should replace these image files with pictures related to chia seeds.
import catimg from "../../images/category/icon-1.png"; // e.g., an icon of black chia seeds
import catimg2 from "../../images/category/icon-2.png"; // e.g., an icon of white chia seeds
import catimg3 from "../../images/category/icon-3.png"; // e.g., an icon for organic products
import catimg4 from "../../images/category/icon-4.png"; // A decorative seed-related image
import catimg5 from "../../images/category/category.jpg"; // A main image, e.g., a bowl of chia pudding

const Category = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };
  return (
    <section className="category-area section-padding">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="category-wrap">
              <div className="category-title">
                <h2>Our Chia Seeds Category</h2>
                <p>
                  Discover our premium selection of chia seeds, sourced for
                  their superior quality and nutritional value. Explore
                  different varieties to find the perfect match for your health.
                </p>
              </div>
              <div className="category-item">
                <div className="category-icon">
                  <img src={catimg} alt="Black Chia Seeds" />
                </div>
                <div className="category-content">
                  <h2>
                    <Link onClick={ClickHandler} to="/shop">
                      Black Chia Seeds
                    </Link>
                  </h2>
                  <p>
                    The most common type, packed with omega-3s, fiber, and
                    protein. Perfect for puddings, smoothies, and boosting any
                    meal.
                  </p>
                </div>
              </div>
              <div className="category-item">
                <div className="category-icon">
                  <img src={catimg2} alt="White Chia Seeds" />
                </div>
                <div className="category-content">
                  <h2>
                    <Link onClick={ClickHandler} to="/shop">
                      White Chia Seeds
                    </Link>
                  </h2>
                  <p>
                    Slightly milder in flavor, these are great for
                    lighter-colored dishes where you want nutrition without
                    affecting the appearance.
                  </p>
                </div>
              </div>
              <div className="category-item">
                <div className="category-icon">
                  <img src={catimg3} alt="Organic Chia Seeds" />
                </div>
                <div className="category-content">
                  <h2>
                    <Link onClick={ClickHandler} to="/shop">
                      Organic Chia Seeds
                    </Link>
                  </h2>
                  <p>
                    Grown without synthetic pesticides, our organic seeds offer
                    the purest form of this superfood for the health-conscious.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="category-img">
              <img src={catimg5} alt="Bowl of Chia Seeds" />
              <div className="ct-img">
                <img src={catimg4} alt="Chia Seed detail" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
