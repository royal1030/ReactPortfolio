import React from "react";
import { SiLeetcode,SiCodechef,SiCodeforces } from "react-icons/si";
import {FaLinkedin} from "react-icons/fa";

function Cp(){
    return(
    <>
      <section id="cp" className="mt-5 mb-5">
     
      <h1 className="justify text-center mb-5 "><span style={{
        borderBottom: '3px solid #11ABB0',
        fontSize: '40px',
        fontWeight: '600',
        paddingBottom: '6px',
        }}>Coding Profiles</span></h1>
      

        <p className="text-center text-secondary ">
        <span style={{fontSize:'15px',fontWeight:'bold',fontStyle:'italic'}}>
        "The idea of competition, particularly in a creative atmosphere, is always there; if you don't acknowledge that, you are doing yourself and the process a disservice."   -- Jake Gyllenhaal 
          </span>
        </p>
        
        <div className="mt-2 text-center h1">
        
       
            <a href="https://leetcode.com/royal10/" target="_blank" rel="noopener">
            <SiLeetcode/>
            </a> 

            <a href="https://www.linkedin.com/in/royal-choudhary-4aa724201/" target="_blank" rel="noopener">
            <FaLinkedin/>
            </a>

            <a href="https://www.codechef.com/users/royal_10" target="_blank" rel="noopener">
              <SiCodechef/>
            </a>

            <a href="https://codeforces.com/profile/royalchoudhary74176" target="_blank" rel="noopener">
            <SiCodeforces/>
            </a>
            
          </div>

      </section>  
      <hr />
    </>
    );
}

export default Cp;