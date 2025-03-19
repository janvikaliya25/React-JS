// function Footer(){
//     return(
//         <div className=" mt-5" style={{height:"500px",backgroundColor:"black"}}>
//             <div className="h-100 d-flex justify-content-between align-items-center  m-auto" style={{width:"94%"}}>
//             <div className="" style={{width:"350px",height:"420px"}}>
//                 <h6 className="text-light">QUICK LINKS</h6>
//                 <span className="text-light">
//                     <p className="mt-4">Store Locator</p>
//                     <p>Elite</p>
//                     <p>Returns</p>
//                     <p>Terms&Conditions</p>
//                     <p>FAQs</p>
//                     <p>About As</p>
//                     <p>Influencer Collab</p>
//                 </span>
//                 <p className="text-light mt-4" style={{fontSize:"18px"}}><i class="fa-brands fa-facebook-f"></i> <i class="fa-brands fa-x-twitter ms-5"></i> <i class="fa-brands fa-instagram ms-5"></i> <i class="fa-brands fa-youtube ms-5"></i> <i class="fa-brands fa-linkedin-in ms-5"></i></p>
//                 <p className="text-light mt-4" style={{fontSize:"12px"}}>© 2025 - SUGAR Cosmetics</p>
//             </div>
//             <div className="" style={{width:"300px",height:"420px"}}>
//                 <h6 className="text-light">SUPPORT</h6>
//                 <p className="text-light mt-4">hello@sugarcosmetics.com</p>
//             </div>
//             </div>
//         </div>
//     )
// }
// export default Footer

import React from "react";

function Footer() {
  return (
    <div className="mt-5" style={{ height: "500px", backgroundColor: "black" }}>
      <div className="h-100 d-flex flex-column flex-md-row justify-content-between align-items-center m-auto" style={{ width: "94%" }}>
        <div className="col-12 col-sm-6 col-md-4" style={{ width: "350px", height: "420px" }}>
          <h6 className="text-light">QUICK LINKS</h6>
          <span className="text-light">
            <p className="mt-4">Store Locator</p>
            <p>Elite</p>
            <p>Returns</p>
            <p>Terms & Conditions</p>
            <p>FAQs</p>
            <p>About Us</p>
            <p>Influencer Collab</p>
          </span>
          <p className="text-light mt-4" style={{ fontSize: "18px" }}>
            <i className="fa-brands fa-facebook-f me-3"></i>
            <i className="fa-brands fa-x-twitter me-3"></i>
            <i className="fa-brands fa-instagram me-3"></i>
            <i className="fa-brands fa-youtube me-3"></i>
            <i className="fa-brands fa-linkedin-in"></i>
          </p>
          <p className="text-light mt-4" style={{ fontSize: "12px" }}>
            © 2025 - SUGAR Cosmetics
          </p>
        </div>
        <div className="col-12 col-sm-6 col-md-4" style={{ width: "300px", height: "420px" }}>
          <h6 className="text-light">SUPPORT</h6>
          <p className="text-light mt-4">hello@sugarcosmetics.com</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
