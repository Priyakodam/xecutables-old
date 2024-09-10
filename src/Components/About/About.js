// import React, { useState, useEffect } from 'react';
// import { FaArrowUp } from 'react-icons/fa'; // Importing an up arrow icon from FontAwesome
// import './About.css'; // For styling

// const About = () => {
//   const [showScroll, setShowScroll] = useState(false);

//   // Function to check the scroll position
//   const checkScrollTop = () => {
//     if (!showScroll && window.pageYOffset > 400) {
//       setShowScroll(true);
//     } else if (showScroll && window.pageYOffset <= 400) {
//       setShowScroll(false);
//     }
//   };

//   // Function to scroll the page to the top
//   const scrollTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   // Adding event listener for scroll
//   useEffect(() => {
//     window.addEventListener('scroll', checkScrollTop);
//     return () => {
//       window.removeEventListener('scroll', checkScrollTop);
//     };
//   }, [showScroll]);

//   return (
//     <div>
//       <h1>About</h1>
//       <p>
//         This is the about page. Keep scrolling down to see the up arrow.
//       </p>
//       {/* Add more content to enable scrolling */}
//       <div style={{ height: '1500px' }}></div>

//       {/* Up arrow button */}
//       <FaArrowUp
//         className="scrollTop"
//         onClick={scrollTop}
//         style={{ display: showScroll ? 'flex' : 'none' }}
//       />
//     </div>
//   );
// };

// export default About;



// import React, { useState, useEffect } from 'react';
// import { FaArrowUp } from 'react-icons/fa'; // Importing an up arrow icon from FontAwesome
// import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap CSS
// import 'bootstrap/dist/js/bootstrap.bundle.min'; // Importing Bootstrap JS for carousel functionality
// import './About.css'; // For custom styling
// import image1 from './Images/aboutus-1.jpg';
// import  image2 from './Images/aboutus-2.jpg';
// import image3 from './Images/aboutus-3.jpg';


// const About = () => {
//   const [showScroll, setShowScroll] = useState(false);

//   // Function to check the scroll position
//   const checkScrollTop = () => {
//     if (!showScroll && window.pageYOffset > 400) {
//       setShowScroll(true);
//     } else if (showScroll && window.pageYOffset <= 400) {
//       setShowScroll(false);
//     }
//   };

//   // Function to scroll the page to the top
//   const scrollTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   // Adding event listener for scroll
//   useEffect(() => {
//     window.addEventListener('scroll', checkScrollTop);
//     return () => {
//       window.removeEventListener('scroll', checkScrollTop);
//     };
//   }, [showScroll]);

//   return (
//     <div>
//       {/* <h1>About</h1>
//       <p>
//         This is the about page. Keep scrolling down to see the up arrow and the carousel.
//       </p> */}

//       {/* Bootstrap Carousel */}
//       <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel"
//               data-bs-interval="2000" // Interval set to 2 seconds
// >
//         <div className="carousel-indicators">
//           <button
//             type="button"
//             data-bs-target="#carouselExampleCaptions"
//             data-bs-slide-to="0"
//             className="active"
//             aria-current="true"
//             aria-label="Slide 1"
//           ></button>
//           <button
//             type="button"
//             data-bs-target="#carouselExampleCaptions"
//             data-bs-slide-to="1"
//             aria-label="Slide 2"
//           ></button>
//           <button
//             type="button"
//             data-bs-target="#carouselExampleCaptions"
//             data-bs-slide-to="2"
//             aria-label="Slide 3"
//           ></button>
//         </div>
//         <div className="carousel-inner">
//           <div className="carousel-item active">
//             <img  src={image1} className="d-block w-100" alt="First Slide"
//              style={{ height: '500px', objectFit: 'cover' }}  />
//             <div className="carousel-caption d-none d-md-block">
//               <h5>First slide label</h5>
//               <p>Some representative placeholder content for the first slide.</p>
//             </div>
//           </div>
//           <div className="carousel-item">
//             <img  src={image2} className="d-block w-100" alt="Second Slide" 
//              style={{ height: '500px', objectFit: 'cover' }} />
//             <div className="carousel-caption d-none d-md-block">
//               <h5>Second slide label</h5>
//               <p>Some representative placeholder content for the second slide.</p>
//             </div>
//           </div>
//           <div className="carousel-item">
//             <img src={image3} className="d-block w-100" alt="Third Slide"  style={{ height: '500px', objectFit: 'cover' }} />
//             <div className="carousel-caption d-none d-md-block">
//               <h5>Third slide label</h5>
//               <p>Some representative placeholder content for the third slide.</p>
//             </div>
//           </div>
//         </div>
//         <button
//           className="carousel-control-prev"
//           type="button"
//           data-bs-target="#carouselExampleCaptions"
//           data-bs-slide="prev"
//         >
//           <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//           <span className="visually-hidden">Previous</span>
//         </button>
//         <button
//           className="carousel-control-next"
//           type="button"
//           data-bs-target="#carouselExampleCaptions"
//           data-bs-slide="next"
//         >
//           <span className="carousel-control-next-icon" aria-hidden="true"></span>
//           <span className="visually-hidden">Next</span>
//         </button>
//       </div>

//       {/* Add more content to enable scrolling */}
//       <div style={{ height: '1000px' }}></div>

//       {/* Up arrow button */}
//       <FaArrowUp
//         className="scrollTop"
//         onClick={scrollTop}
//         style={{ display: showScroll ? 'flex' : 'none' }}
//       />
//     </div>
//   );
// };

// export default About;



// import React, { useState, useEffect } from 'react';
// import { FaArrowUp } from 'react-icons/fa'; // Importing an up arrow icon from FontAwesome
// import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap CSS
// import 'bootstrap/dist/js/bootstrap.bundle.min'; // Importing Bootstrap JS for carousel functionality
// import './About.css'; // For custom styling
// import image1 from './Images/aboutus-1.jpg';
// import image2 from './Images/aboutus-2.jpg';
// import image3 from './Images/aboutus-3.jpg';
// import image4 from './Images/aboutus-4.jpg';


// const About = () => {
//   const [showScroll, setShowScroll] = useState(false);

//   // Function to check the scroll position
//   const checkScrollTop = () => {
//     if (!showScroll && window.pageYOffset > 400) {
//       setShowScroll(true);
//     } else if (showScroll && window.pageYOffset <= 400) {
//       setShowScroll(false);
//     }
//   };

//   // Function to scroll the page to the top
//   const scrollTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   // Adding event listener for scroll
//   useEffect(() => {
//     window.addEventListener('scroll', checkScrollTop);
//     return () => {
//       window.removeEventListener('scroll', checkScrollTop);
//     };
//   }, [showScroll]);

//   return (
//     <div>

//         <h1>About</h1>
//       <p>         This is the about page. Keep scrolling down to see the up arrow and the carousel.
//       </p> 
//       {/* Bootstrap Carousel */}
//       <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
//         <div className="carousel-indicators">
//           <button
//             type="button"
//             data-bs-target="#carouselExampleCaptions"
//             data-bs-slide-to="0"
//             className="active"
//             aria-current="true"
//             aria-label="Slide 1"
//           ></button>
//           <button
//             type="button"
//             data-bs-target="#carouselExampleCaptions"
//             data-bs-slide-to="1"
//             aria-label="Slide 2"
//           ></button>
//           <button
//             type="button"
//             data-bs-target="#carouselExampleCaptions"
//             data-bs-slide-to="2"
//             aria-label="Slide 3"
//           ></button>
//         </div>
//         <div className="carousel-inner">
//           <div className="carousel-item active">
//             <img src={image1} className="d-block w-100" alt="First Slide" />
//             <div className="carousel-caption d-none d-md-block">
//               <h5>First slide label</h5>
//               <p>Some representative placeholder content for the first slide.</p>
//             </div>
//           </div>
//           <div className="carousel-item">
//             <img src={image2} className="d-block w-100" alt="Second Slide" />
//             <div className="carousel-caption d-none d-md-block">
//               <h5>Second slide label</h5>
//               <p>Some representative placeholder content for the second slide.</p>
//             </div>
//           </div>
//           <div className="carousel-item">
//             <img src={image3} className="d-block w-100" alt="Third Slide" />
//             <div className="carousel-caption d-none d-md-block">
//               <h5>Third slide label</h5>
//               <p>Some representative placeholder content for the third slide.</p>
//             </div>
//           </div>
//         </div>
//         <button
//           className="carousel-control-prev"
//           type="button"
//           data-bs-target="#carouselExampleCaptions"
//           data-bs-slide="prev"
//         >
//           <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//           <span className="visually-hidden">Previous</span>
//         </button>
//         <button
//           className="carousel-control-next"
//           type="button"
//           data-bs-target="#carouselExampleCaptions"
//           data-bs-slide="next"
//         >
//           <span className="carousel-control-next-icon" aria-hidden="true"></span>
//           <span className="visually-hidden">Next</span>
//         </button>
//       </div>

//       <div className="container">
//       <div className="text-section">
//         <strong>To provide crisp and smart business solutions for a better tomorrow.</strong>
//       </div>
//       <div className="image-section">
//         <img src={image4} alt="Business Solutions" />
//       </div>
//     </div>
//     <div className="cards-container">
//       <div className="card mission-card">
//         <h1 className='about-mis'>Mission</h1>
//         <p>
//           To create unimaginable, futuristic and scalable solutions and to take them worldwide.
//           To create unimaginable, futuristic and scalable solutions and to take them worldwide.
//           To create unimaginable, futuristic and scalable solutions and to take them worldwide.
//           To create unimaginable, futuristic and scalable solutions and to take them worldwide.
//           To create unimaginable, futuristic and scalable solutions and to take them worldwide.
//           To create unimaginable, futuristic and scalable solutions and to take them worldwide.

//         </p>
//       </div>
//       <div className="card vision-card">
//         <h1  className='about-vis'>Vision</h1>
//         <p>
//           To innovate solutions that go above and beyond the clients’ expectations and to provide them with end-to-end solutions. We strive to shape dreams into reality.
//           To innovate solutions that go above and beyond the clients’ expectations and to provide them with end-to-end solutions. We strive to shape dreams into reality.   To innovate solutions that go above and beyond the clients’ expectations and to provide them with end-to-end solutions. We strive to shape dreams into reality.
//         </p>
//       </div>
//     </div>

//       {/* Add more content to enable scrolling */}
//       <div style={{ height: '1000px' }}></div>

//       {/* Up arrow button */}
//       <FaArrowUp
//         className="scrollTop"
//         onClick={scrollTop}
//         style={{ display: showScroll ? 'flex' : 'none', position: 'fixed', bottom: '20px', right: '20px', cursor: 'pointer' }}
//       />
//     </div>
//   );
// };

// export default About;



import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa'; // Importing an up arrow icon from FontAwesome
import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap CSS
import './About.css'; // For custom styling
import image1 from './Images/aboutus-8.jpg';
import image4 from './Images/aboutus-4.jpg';
import image5 from './Images/aboutus-9.webp';
import image6 from './Images/aboutus-10.jpeg';
import image7 from './Images/aboutus-11.webp';
import image8 from './Images/aboutus-12.webp';
import image9 from './Images/aboutus-13.webp';
import { Fade } from 'react-reveal';




const About = () => {
  const [showScroll, setShowScroll] = useState(false);

  // Function to check the scroll position
  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  // Function to scroll the page to the top
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Adding event listener for scroll
  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, [showScroll]);

  return (
    <div>
      {/* <h1>About</h1>
      <p>This is the about page. Keep scrolling down to see the up arrow and the content below.</p> */}


      <section className="sec1-banner">
        <img src={image1} alt="Banner" className="sec1-banner-image" />
        <div className="sec1-banner-text">
          <h1 className='sec1-heading'>Welcome to Our Company</h1>
          <strong> <p className='sec1-parah'>Providing futuristic business solutions for a smarter tomorrow.</p></strong>
        </div>
      </section>

      
      <section className="sec-2-container">
      <Fade right>
        <div className="sec-2-text-section">
          <strong >To provide crisp and smart business solutions for a better tomorrow.</strong>
        </div>
        </Fade>
        <Fade left>
        <div className="sec-2-image-section">
          <img src={image4} alt="Business Solutions" />
        </div>
        </Fade>

      </section>





      <section className="sec-3-cards-container">
        <div className="sec-3-card mission-card">
          <h1 className='about-mis'>Mission</h1>
          <p>
            To create unimaginable, futuristic and scalable solutions and to take them worldwide.
            We aim to integrate complexity with simplicity into a piece of art. It will be a wonder for our clients to witness them as we create unimaginable and practical solutions.
          </p>
        </div>
        <div className="sec-3-card vision-card">
          <h1 className='about-vis'>Vision</h1>
          <p>
            To innovate solutions that go above and beyond the clients’ expectations and to provide them with end-to-end solutions. We strive to shape dreams into reality.
            The process of developing the solutions is like composing a song or narrating a story. The sole aim is to create value and be able to bring a smile to our clients.

          </p>
        </div>
      </section>




      <section className="sec-4-mission-container">
        <div className="mission-heading">
          <h1>Our Mission</h1>
          <p>
            We aim to integrate complexity with simplicity into a piece of art. It
            will be a wonder for our clients to witness them as we create
            unimaginable and practical solutions.
          </p>
        </div>
        <div className="sec-4-grid-container">
          <div className="sec-4-grid-item">
            <img src={image5} alt="Image 1" />
            <div className="sec-4-grid-text">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p>Vivamus lacinia odio vitae vestibulum vestibulum.</p>
              <p>Cras ultricies ligula sed magna dictum porta.</p>
              <p>Pellentesque in ipsum id orci porta dapibus.</p>
              <p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p>
            </div>
          </div>
          <div className="sec-4-grid-item">
            <img src={image6} alt="Image 2" />
            <div className="sec-4-grid-text">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p>Vivamus lacinia odio vitae vestibulum vestibulum.</p>
              <p>Cras ultricies ligula sed magna dictum porta.</p>
              <p>Pellentesque in ipsum id orci porta dapibus.</p>
              <p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p>
            </div>
          </div>
          <div className="sec-4-grid-item">
            <img src={image7} alt="Image 3" />
            <div className="sec-4-grid-text">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p>Vivamus lacinia odio vitae vestibulum vestibulum.</p>
              <p>Cras ultricies ligula sed magna dictum porta.</p>
              <p>Pellentesque in ipsum id orci porta dapibus.</p>
              <p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p>
            </div>
          </div>
          <div className="sec-4-grid-item">
            <img src={image8} alt="Image 4" />
            <div className="sec-4-grid-text">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p>Vivamus lacinia odio vitae vestibulum vestibulum.</p>
              <p>Cras ultricies ligula sed magna dictum porta.</p>
              <p>Pellentesque in ipsum id orci porta dapibus.</p>
              <p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p>
            </div>
          </div>
        </div>
      </section>




      {/* <section className="sec-5-Progress-container">
        <div className="row mb-4">
          <div className="col-md-6">
            <h2>We are habituated to creating smart, capable and reliable solutions.</h2>
            <p>
              We assess the client’s requirement and deliver custom solutions. We innovate and understand that
              our valuable ideas are the canvas of dreams that we aim to bring to life.
            </p>
          </div>
          <div className="col-md-6">
            <img src={image9} alt="Smart Solutions" className="img-fluid" />
          </div>
        </div>
        <div className="coloumn">
          <div className="col-md-3">
            <h6>Success Index</h6>
            <div className="progress">
              <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" style={{ width: '100%' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                100%
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <h6>In Time Solution</h6>
            <div className="progress">
              <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar" style={{ width: '99%' }} aria-valuenow="99" aria-valuemin="0" aria-valuemax="100">
                99%
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <h6>First Time Right Solutions</h6>
            <div className="progress">
              <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" style={{ width: '95%' }} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                95%
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <h6>Accuracy</h6>
            <div className="progress">
              <div className="progress-bar  progress-bar-striped progress-bar-animated bg-danger" role="progressbar" style={{ width: '95%' }} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                95%
              </div>
            </div>
          </div>
        </div>
      </section>
 */}


<div className="container sec-5 my-5">
      <div className="row main-row">
        {/* First Section */}
        {/* <div className="col-md-4"> */}
        <div className="col-lg-4 col-md-6 col-sm-12">

          <div className="content-section">
            <h2>We are habituated to creating smart, capable and reliable solutions.</h2>
            <p>
              We assess the client’s requirement and deliver custom solutions. We innovate and understand that our
              valuable ideas are the canvas of dreams that we aim to bring to life.
            </p>
          </div>
        </div>

        {/* Second Section */}
        {/* <div className="col-md-4 text-center"> */}
        <div className="col-lg-4 col-md-6 col-sm-12">

          <div className="image-section">
            <img src={image9} alt="Smart Solutions" className="img-fluid" />
          </div>
        </div>

        {/* Third Section */}
        {/* <div className="col-md-4"> */}
        <div className="col-lg-4 col-md-6 col-sm-12 main-progress">

          <div className="progress-section progress-section-1 ">
            <h6>Success Index</h6>
            <div className="progress">
              <div
                className="progress-bar progress-bar-striped progress-bar-animated bg-success"
                role="progressbar"
                style={{ width: '100%' }}
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                100%
              </div>
            </div>
            <h6>In Time Solution</h6>
            <div className="progress">
              <div
                className="progress-bar progress-bar-striped progress-bar-animated bg-info"
                role="progressbar"
                style={{ width: '99%' }}
                aria-valuenow="99"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                99%
              </div>
            </div>
            <h6>First Time Right Solutions</h6>
            <div className="progress">
              <div
                className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
                role="progressbar"
                style={{ width: '95%' }}
                aria-valuenow="95"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                95%
              </div>
            </div>
            <h6>Accuracy</h6>
            <div className="progress">
              <div
                className="progress-bar progress-bar-striped progress-bar-animated bg-danger"
                role="progressbar"
                style={{ width: '95%' }}
                aria-valuenow="95"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                95%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


      <section className="container sec-6-keypoints-container">
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="keypoint card shadow-sm p-4">
              <h2>01 Work with Confidence</h2>
              <p>We promise what we know we can deliver and we deliver what we had promised. This confidence comes from our reliable, integrated work processes and practical and in-time solutions.</p>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="keypoint card shadow-sm p-4 " >
              <h2>02 Ensure Success</h2>
              <p className='key-point-2'>We believe that capabilities are proven when the promises are delivered in time. When reliable, practical and in-time solutions are delivered as a habit, success is guaranteed.</p>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="keypoint card shadow-sm p-4">
              <h2>03 Extra Mile</h2>
              <p>Thinking the unimaginable and creating next-level solutions are our core skills that set us apart. Executing the impossible is in the DNA of Xecutables.  Our business mantra is to be open to feedback.</p>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="keypoint card shadow-sm p-4">
              <h2>04 Lend an Ear</h2>
              <p>Feedback helps us retrospect, evolve and improve for the better. Our business mantra is to be open to feedback. We believe that we can excel more by accepting feedback in its truest form.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Add more content to enable scrolling */}
      <div style={{ height: 'auto' }}></div>

      {/* Up arrow button */}
      <FaArrowUp
        className="scrollTop"
        onClick={scrollTop}
        style={{ display: showScroll ? 'flex' : 'none', position: 'fixed', bottom: '20px', right: '20px', cursor: 'pointer' }}
      />
    </div>
  );
};

export default About;
