import React from "react";

function Footer(){
    
    return (
        <>
    {/* <footer class="page-footer text-center font-medium mt-2 "> */}
     <footer className="bg-dark text-white text-center">
        <div class="footer-copyright py-1">
          © {new Date().getFullYear()} Copyright |<strong> Royal Choudhary </strong>
        </div>
          
    </footer>
        </>
    );
}

export default Footer;