import React from "react";

function Resume(props){
    var resumeData = props.resumeData;
    return(
        <>
        {/* <!-- Experience and Skills --> */}
    <section id="resume">
   
    <div className="container-fluid  ">
      <div className="container py-0 pt-0 ">
        {/* <section id="education"> */}
          <div className="row py-5 3 ">
           {/* <!-- Experience Section --> */}
            <div className="col-lg-6 col-md-12 mb-3 wow fadeIn" data-wow-delay="0.4s">
              <div className="d-flex justify-content-start">
                <h4 className="text-center text-uppercase mb-5 pb-3 mt-4 wow fadeIn" data-wow-delay="0.2s">
                <h1><span>Education</span></h1>
                  <br />
                  <br />
                  {/* <p>this is educaiton portion</p> */}
                  {resumeData.education && resumeData.education.map((item)=>{
                        console.log(item);
                        return (
                            <>
                            
                            <h3>{item.UniversityName}</h3>
                            <p className="info">
                            {item.specialization}
                            <span>&bull;</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em>
                            <br />
                            {item.Achievements}
                            </p>
                            </>
                        );
                    })
                  }
                </h4>
              </div>
            </div>

            {/* #11ABB0 */}


            {/* <!-- Skills Section --> */}
            <div className="col-lg-5 offset-lg-1 col-md-12 mb-4 wow fadeIn" data-wow-delay="0.4s">
              <div className="d-flex justify-content-start">
                <h4 className="text-center text-uppercase mb-5 pb-3 mt-4 wow
                 fadeIn" data-wow-delay="0.2s"><h1><span style={{borderBottom: '3px solid #11ABB0',lineHeight:'1.6' }}> Development Skills </span></h1>
                </h4>                  
              </div>
              <p className="black-text text-uppercase font-weight-bold ">Data Structures  & Algorithms</p>
              <p className="black-text text-uppercase font-weight-bold">Frontend Development (React, CSS, Bootstrap)</p>
              <p className="black-text text-uppercase font-weight-bold">Backend Development (Node.js)</p>
              
              <p className="black-text text-uppercase font-weight-bold">C,C++, Python</p>
              
            </div>
          </div>
        {/* </section> */}
      </div>
    </div>
  
    </section>
    <hr />
        </>
    )
}

export default Resume;