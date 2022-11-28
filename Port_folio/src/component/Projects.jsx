import React from "react";
import Cards from './Cards';

function Projects(props) {
    var resumeData=props.resumeData;
    const sampleStyle = {
        minWidth: "20%",
        flexGrow: 0
        };
  return (
    <>
    <section id="projects">
    
    <h1 className="justify text-center mb-5"><span style={{
        borderBottom: '3px solid #11ABB0',
    fontSize: '40px',
    fontWeight: '600',
    paddingBottom: '6px',
    }}>Projects</span></h1>
    
        <div className="container d-flex flex-wrap justify-content-between mb-3">

        {
            resumeData.projects && resumeData.projects.map((item)=>{
                
                return(
                    <>
                       <Cards style={sampleStyle} title={item.name} desc={item.description} img={item.imgurl} demoLink={item.demoLink} gitLink={item.githubLink}/> 
                    </>
                );
            })
        }
            {/* <Cards/>
            <Cards/>
            <Cards/> */}
        </div>
        </section>
    </>
  );
}

export default Projects;