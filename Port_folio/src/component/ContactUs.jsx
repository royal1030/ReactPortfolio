import React from "react";

function ContactUs(){
    return(
        <>
            <section id="contact">
            <h1 className="justify text-center mb-5"><span style={{
            borderBottom: '3px solid #11ABB0',
            fontSize: '40px',
            fontWeight: '600',
            paddingBottom: '6px',
            }}>Get in Touch</span></h1>
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                        <img
                        style={{maxWidth:'100%'}}
                        height={400} 
                        //   src={img6}
                        // src="./portfolio/images/ContactUs_logo-removebg.png"
                        src="./images/ContactUs_logo-removebg.png"
                        alt="contact icon"
                        />
                        </div>
                        {/* col-md-1 d-flex align-items-center */}
                        <div className="col-md-4 align-items-center mt-5 pt-5">
                            <p><span style={{
                              font: `16px/24px 'librebaskerville-italic', serif`,
                              fontStyle: 'italicz',
                              fontWeight:'bolder',
                              fontSize:'20px',
                            }}>Feel free to contact me for any work and suggestion.</span></p>
                            <a href="https://www.linkedin.com/in/royal-choudhary-4aa724201/"role="button"className="btn btn-outline-primary">Contact Us</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ContactUs;