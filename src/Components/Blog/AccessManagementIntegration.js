import React from 'react';
import img1 from './BlogImages/Assets.png';
import img2 from './BlogImages/Blog1.png';
import img3 from './BlogImages/Blog2.png';



import './AccessManagementIntegration.css'; // Assuming you're keeping your styles in a separate SCSS file

const AccessManagementIntegration = () => {
        return (
                <div>
                        <div className="access-banner">
                                <h1 className="access-banner-text">Access Management Integration</h1>
                        </div>
                        <div className="access-image-container">
                                <img
                                        src={img1}
                                        alt="Access Management Graphic"
                                        className="access-image-under-banner"
                                />
                        </div>
                        <div className="access-text-container">
                                <p>1.With the evolution of software and technology, the access management has also evolved to make it more secure. Keycards, also known as swipe cards, prox cards or fobs are used to grant access through electrically-powered doors. The access may be granted by tapping, swiping or inserting the card in the slot.

                                </p>
                                <p>2.This has made the traditional metal key redundant in majority of spaces. The access credential is embedded on the magnetic strip/ chip of the card. The unique access credential is recognized by the reader and it, then, communicates with the door lock to grants access.
                                        Keycard access management system has become a popular security solution for business premises or places with a regular inflow and outflow of people.

                                </p>
                                <p>3.It is an efficient way to securely grant or restrict access to an individual to a specific area. The actions of providing or revoking access can be easily managed as opposed to the traditional methods of keys.Key cards are also convenient and affordable as an access management situation. However, this limited security needs to be supported by additional technology to match the security requirements.

                                </p>
                                <p>4.Nebula provides an integration platform that makes the data transfer between external systems seamless. Numerous systems can be integrated into the product without any hassle. It is driven by proprietary orchestration engine, making it a perfect product for both custom and non-custom integrations of the given physical access topography.

                                </p>
                                <p>5.The application reads every action back to the external system. Nebula helps the client’s data to be in a complete sync at any point in time. This allows them to track an event using the audit module of the application.

                                </p>
                                <p>6.Nebula allows the users to freely manage their identity profiles either in the upstream system or in the Nebula application. The application’s interactive user experience allows a seamless experience.Any changes initiated in either of the places would yield the same outcome and would be automatically changed in all the end systems. Any change would raise an audit which can be monitored.

                                </p>
                                <p>
                                        6.For example, if Mr A’s record is changed in the Pro-watch system to ‘InActive’ and is saved, this process will fire an event into the Nebula connector. The change will then propagate into the application. The application will, then, decide whether to propagate it into the end systems or not.
                                </p>
                                <p>7.The access management process is simplified using Nebula. The users can even add the desired access levels. When it is saved, a request will be sent to the orchestration engine which will trigger a broadcast event to an external system. It even allows the users to create logical access areas, by combining access levels from one or more access systems.The identity profiles of the users can be easily tracked and managed via the application.
                                        Nebula connectors consolidates the events and the journal logs of end systems for selected events.

                                </p>
                                <p>8.This is done in relation with an event’s timestamp value. Nebula allows the organisation to visualise the events via the system admin’s events dashboard windows.

                                </p>
                                <p>9.Key card access management system is versatile and provides various benefits. It can be used across a wide range of applications.


                                </p>
                                <p>10.
                                        Key card access security solutions can assist an organisation inbeing aware regarding security and in being prepared to managesecurity threats. Any access made using a key card can easily be tracked. When an organisation needs to identify the use of a particular key card to access a certain point, the data can easily be accessed. Key card management system helps in the audit trail.
                                </p>
                                <p>11.
                                        Key card access systems are cost- effective and require little maintenance. It is easy to install and configure. It is also easy to maneuver for the people who are granted access. If lost, the access of the original key card can be cancelled and new key cards can easily be created.
                                </p>
                        </div>


                        <div>
                                <p style={{ textAlign: 'center' }}>----------------Related Posts----------------</p>
                                <div className="access-image-row-container">
                                        <div className="access-image-item-container">
                                                <img src={img1} alt="Image 1" className="access-image-item" />
                                                <h3>Access management integration
                                                </h3>
                                                <p>With the evolution of software and tech</p>
                                        </div>
                                        <div className="access-image-item-container">
                                                <img src={img2} alt="Image 2" className="access-image-item" />
                                                <h3>Managing airport security with new age solutions</h3>
                                                <p>Thousands of people walk in and out of it</p>
                                        </div>
                                        <div className="access-image-item-container">

                                                <img src={img3} alt="Image 3" className="access-image-item" />
                                                <h3>Improve physical access management with mobile lift integration solutions
                                                </h3>
                                                <p>Elevators/lift may seem like the most u.</p>
                                        </div>
                                </div>


                        </div>
                </div>
        );
}

export default AccessManagementIntegration;
