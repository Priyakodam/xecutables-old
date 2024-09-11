import React from 'react';
import './Blog.css';
import blogbanner from './BlogImages/blogbanner.jpg';
import Blog1 from './BlogImages/Blog1.png';
import Blog2 from './BlogImages/Blog2.png';
import Assets from './BlogImages/Assets.png'

const Product = () => {
  return (
    <div>
      <div className="blog-banner">
        <img src={blogbanner} alt="Banner" className="blogbanner-image" />
        <div className="blogbanner-text">
          <h1>Blog</h1>
        </div>
      </div>

      <div className="blogcontainer mb-5">
        <div className="background-blogcontainer d-flex align-items-center">
          <div className="text-content">
            <h3>Access management integration</h3>
            <p>
              With the evolution of software and technology, access management has also evolved to become more secure. Keycards, also known as swipe cards, prox cards, or fobs, are used to grant access through electrically-powered doors. The access may be granted by tapping, swiping, or inserting the card in the slot. This has made the traditional metal key redundant in most spaces.
            </p>
            <div className="button-blogcontainer">
              <button className="btn">Explore More</button>
            </div>
          </div>
          <img src={Blog2} alt="People working" className="blog-image" />
        </div>

        <div className="background-blogcontainer d-flex align-items-center">
          <img src={Blog1} alt="People working" className="blog-image1" />
          <div className="text-content">
            <h3>Managing airport security with new age solutions</h3>
            <p>
              Thousands of people walk in and out of the airports every day. This makes airports a critical place to be secured and to reduce any suspicious activities. Maintaining safety at airports requires a lot of systems which have continued to improve in the past. To mitigate the risks, there are processes to manage every step.
            </p>
            <div className="button-blogcontainer">
              <button className="btn">Explore More</button>
            </div>
          </div>
        </div>
      </div>


      <div className="homecontainer mt-5">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-md-6 " style={{ textAlign: "justify" }}>
                <h2 className="text-center subheading">Improve physical access management with mobile lift integration solutions</h2>
                <p>
                Elevators/lift may seem like the most uncomplicated systems but there’s a lot more to them than what meets the eye. They are tricky and are quite distinct from one another. They have the capability to impact the safety of a facility or a building.
New types and levels of safety threats call for advanced safety solutions.The access points of the buildings can be managed by managing the elevators correctly. Appropriate access management system can help ensure smooth flow of people in and out of the building. It will also improve the user experience.
                </p>
                <div className="button-blogcontainer">
              <button className="btn">Explore More</button>
            </div>



              </div>
              <div className="col-md-6 ">
              <img src={Assets} alt="People working" className="blog-image2" />
              </div>
             
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
