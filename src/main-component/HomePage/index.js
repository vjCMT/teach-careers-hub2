
import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import Navbar from "../../components/Navbar";
import Footer from "../../components/footer";
import Scrollbar from "../../components/scrollbar";
import { addToCart, addToWishList } from "../../store/actions/action";

// Import placeholder images
import skinCareImg from "../../images/category/icon-1.png";
import microgreensImg from "../../images/slider/img-11.jpg";

const HomePage = ({ addToCart, addToWishList }) => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <Fragment>
      <Navbar hClass={"header-style-1"} />
      
      {/* Hero Section */}
      <section className="hero-section" style={{ background: '#FFFFFF', padding: '100px 0' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 style={{ color: '#877B91', fontSize: '60px', fontWeight: '600', marginBottom: '30px' }}>
                Premium <span style={{ color: '#333' }}>Chia Seeds</span>
              </h1>
              <p style={{ color: '#666', fontSize: '18px', marginBottom: '40px' }}>
                Discover the power of nature's superfood. Our organic chia seeds are packed with omega-3, fiber, and protein to fuel your healthy lifestyle.
              </p>
              <button 
                className="btn"
                style={{ 
                  background: '#877B91', 
                  color: 'white', 
                  padding: '15px 40px',
                  borderRadius: '5px',
                  border: 'none',
                  fontSize: '16px',
                  fontWeight: '500'
                }}
              >
                Shop Now
              </button>
            </div>
            <div className="col-lg-6">
              <img src={skinCareImg} alt="Chia Seeds" style={{ width: '100%', maxWidth: '500px' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Skin Care Section */}
      <section style={{ background: '#FFFFFF', padding: '80px 0' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img src={skinCareImg} alt="Skincare with Chia" style={{ width: '100%', borderRadius: '10px' }} />
            </div>
            <div className="col-lg-6" style={{ paddingLeft: '50px' }}>
              <h2 style={{ color: '#877B91', fontSize: '42px', fontWeight: '600', marginBottom: '25px' }}>
                Skincare with Chia Seeds
              </h2>
              <p style={{ color: '#666', fontSize: '16px', lineHeight: '1.6', marginBottom: '30px' }}>
                Discover the natural hydrating and anti-inflammatory properties of chia seeds for your skin. 
                Rich in omega-3 fatty acids and antioxidants, chia seeds help maintain skin elasticity and provide deep moisture.
              </p>
              <button 
                onClick={() => toggleSection('skincare')}
                style={{ 
                  background: '#877B91', 
                  color: 'white', 
                  padding: '12px 30px',
                  borderRadius: '5px',
                  border: 'none',
                  fontSize: '14px',
                  fontWeight: '500'
                }}
              >
                How to Use for Face & Skin
              </button>
              {expandedSection === 'skincare' && (
                <div style={{ marginTop: '20px', padding: '20px', background: '#f8f9fa', borderRadius: '5px' }}>
                  <h4 style={{ color: '#877B91', marginBottom: '15px' }}>DIY Chia Face Mask Recipe:</h4>
                  <ul style={{ color: '#666', lineHeight: '1.6' }}>
                    <li>Mix 2 tbsp chia seeds with 1/4 cup water</li>
                    <li>Let sit for 15 minutes until gel forms</li>
                    <li>Add 1 tbsp honey and mix well</li>
                    <li>Apply to clean face, leave for 20 minutes</li>
                    <li>Rinse with warm water and pat dry</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Health Benefits Section */}
      <section style={{ background: '#f8f9fa', padding: '80px 0' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '60px' }}>
            <h2 style={{ color: '#877B91', fontSize: '42px', fontWeight: '600', marginBottom: '20px' }}>
              Full Body Health Benefits
            </h2>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6" style={{ marginBottom: '30px' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '48px', color: '#877B91', marginBottom: '20px' }}>🧠</div>
                <h4 style={{ color: '#333', fontSize: '20px', marginBottom: '15px' }}>Rich in Omega-3</h4>
                <p style={{ color: '#666' }}>Supports brain health and cognitive function</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6" style={{ marginBottom: '30px' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '48px', color: '#877B91', marginBottom: '20px' }}>🌿</div>
                <h4 style={{ color: '#333', fontSize: '20px', marginBottom: '15px' }}>High Fiber Content</h4>
                <p style={{ color: '#666' }}>Promotes digestive health and satiety</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6" style={{ marginBottom: '30px' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '48px', color: '#877B91', marginBottom: '20px' }}>🛡️</div>
                <h4 style={{ color: '#333', fontSize: '20px', marginBottom: '15px' }}>Powerful Antioxidants</h4>
                <p style={{ color: '#666' }}>Protects cells from free radical damage</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6" style={{ marginBottom: '30px' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '48px', color: '#877B91', marginBottom: '20px' }}>🦴</div>
                <h4 style={{ color: '#333', fontSize: '20px', marginBottom: '15px' }}>Calcium Rich</h4>
                <p style={{ color: '#666' }}>Strengthens bones and teeth</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chia Microgreens Section */}
      <section 
        style={{ 
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${microgreensImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '100px 0',
          color: 'white'
        }}
      >
        <div className="container">
          <div className="text-center">
            <h2 style={{ fontSize: '48px', fontWeight: '600', marginBottom: '25px' }}>
              Grow Your Own Chia Microgreens
            </h2>
            <p style={{ fontSize: '18px', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px' }}>
              Experience the fresh, nutrient-dense taste of homegrown chia microgreens. 
              Perfect for salads, smoothies, and healthy snacking.
            </p>
            <button 
              onClick={() => toggleSection('microgreens')}
              style={{ 
                background: 'transparent', 
                color: 'white', 
                padding: '12px 30px',
                borderRadius: '5px',
                border: '2px solid white',
                fontSize: '14px',
                fontWeight: '500'
              }}
            >
              How to Grow Microgreens
            </button>
            {expandedSection === 'microgreens' && (
              <div style={{ marginTop: '30px', padding: '25px', background: 'rgba(255,255,255,0.1)', borderRadius: '10px', textAlign: 'left', maxWidth: '600px', margin: '30px auto 0' }}>
                <h4 style={{ marginBottom: '20px' }}>Step-by-Step Growing Guide:</h4>
                <ol style={{ lineHeight: '1.8' }}>
                  <li>Soak chia seeds for 30 minutes in water</li>
                  <li>Spread seeds evenly on a growing tray with soil</li>
                  <li>Mist daily and keep in indirect sunlight</li>
                  <li>Harvest in 7-14 days when 1-2 inches tall</li>
                  <li>Cut just above soil level and enjoy fresh!</li>
                </ol>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Nutritional Information & How to Consume Section */}
      <section style={{ background: '#FFFFFF', padding: '80px 0' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h3 style={{ color: '#877B91', fontSize: '32px', fontWeight: '600', marginBottom: '30px' }}>
                Nutritional Information
              </h3>
              <div style={{ background: '#f8f9fa', borderRadius: '10px', overflow: 'hidden' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ background: '#877B91', color: 'white' }}>
                      <th style={{ padding: '15px', textAlign: 'left' }}>Nutrient</th>
                      <th style={{ padding: '15px', textAlign: 'left' }}>Per 28g (2 tbsp)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ background: '#FFFFFF' }}>
                      <td style={{ padding: '12px 15px', borderBottom: '1px solid #eee' }}>Calories</td>
                      <td style={{ padding: '12px 15px', borderBottom: '1px solid #eee' }}>138</td>
                    </tr>
                    <tr style={{ background: '#f8f9fa' }}>
                      <td style={{ padding: '12px 15px', borderBottom: '1px solid #eee' }}>Protein</td>
                      <td style={{ padding: '12px 15px', borderBottom: '1px solid #eee' }}>4.7g</td>
                    </tr>
                    <tr style={{ background: '#FFFFFF' }}>
                      <td style={{ padding: '12px 15px', borderBottom: '1px solid #eee' }}>Fiber</td>
                      <td style={{ padding: '12px 15px', borderBottom: '1px solid #eee' }}>9.8g</td>
                    </tr>
                    <tr style={{ background: '#f8f9fa' }}>
                      <td style={{ padding: '12px 15px', borderBottom: '1px solid #eee' }}>Omega-3</td>
                      <td style={{ padding: '12px 15px', borderBottom: '1px solid #eee' }}>5g</td>
                    </tr>
                    <tr style={{ background: '#FFFFFF' }}>
                      <td style={{ padding: '12px 15px' }}>Calcium</td>
                      <td style={{ padding: '12px 15px' }}>179mg</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-lg-6" style={{ paddingLeft: '50px' }}>
              <h3 style={{ color: '#877B91', fontSize: '32px', fontWeight: '600', marginBottom: '30px' }}>
                How to Consume
              </h3>
              <button 
                onClick={() => toggleSection('consumption')}
                style={{ 
                  background: '#877B91', 
                  color: 'white', 
                  padding: '12px 30px',
                  borderRadius: '5px',
                  border: 'none',
                  fontSize: '14px',
                  fontWeight: '500',
                  marginBottom: '20px'
                }}
              >
                Ways to Eat Chia
              </button>
              {expandedSection === 'consumption' && (
                <div style={{ padding: '20px', background: '#f8f9fa', borderRadius: '5px' }}>
                  <h4 style={{ color: '#877B91', marginBottom: '15px' }}>Popular Methods:</h4>
                  <ul style={{ color: '#666', lineHeight: '1.6' }}>
                    <li><strong>Chia Pudding:</strong> Mix with milk/yogurt, let sit overnight</li>
                    <li><strong>Smoothies:</strong> Add 1-2 tbsp to your favorite smoothie</li>
                    <li><strong>Salads:</strong> Sprinkle on top for extra crunch and nutrition</li>
                    <li><strong>Baking:</strong> Use as egg substitute (1 tbsp + 3 tbsp water = 1 egg)</li>
                    <li><strong>Water:</strong> Make chia water by soaking in water for 10 minutes</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Chia Seeds Section */}
      <section style={{ background: '#f8f9fa', padding: '80px 0' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '60px' }}>
            <h2 style={{ color: '#877B91', fontSize: '42px', fontWeight: '600', marginBottom: '20px' }}>
              Why Choose Our Chia Seeds?
            </h2>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div style={{ 
                background: 'white', 
                padding: '40px 30px', 
                borderRadius: '10px', 
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                textAlign: 'center',
                height: '100%'
              }}>
                <div style={{ fontSize: '48px', color: '#877B91', marginBottom: '20px' }}>🌱</div>
                <h4 style={{ color: '#333', fontSize: '22px', marginBottom: '15px' }}>100% Organic</h4>
                <p style={{ color: '#666', lineHeight: '1.6' }}>
                  Certified organic chia seeds grown without pesticides or artificial chemicals for pure, natural nutrition.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div style={{ 
                background: 'white', 
                padding: '40px 30px', 
                borderRadius: '10px', 
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                textAlign: 'center',
                height: '100%'
              }}>
                <div style={{ fontSize: '48px', color: '#877B91', marginBottom: '20px' }}>🤲</div>
                <h4 style={{ color: '#333', fontSize: '22px', marginBottom: '15px' }}>Sustainable Farming</h4>
                <p style={{ color: '#666', lineHeight: '1.6' }}>
                  Ethically sourced from sustainable farms that support local communities and environmental conservation.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div style={{ 
                background: 'white', 
                padding: '40px 30px', 
                borderRadius: '10px', 
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                textAlign: 'center',
                height: '100%'
              }}>
                <div style={{ fontSize: '48px', color: '#877B91', marginBottom: '20px' }}>🔬</div>
                <h4 style={{ color: '#333', fontSize: '22px', marginBottom: '15px' }}>Lab-Tested Purity</h4>
                <p style={{ color: '#666', lineHeight: '1.6' }}>
                  Every batch is rigorously tested for purity, potency, and quality to ensure you get the best nutrition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default connect(null, { addToCart, addToWishList })(HomePage);
