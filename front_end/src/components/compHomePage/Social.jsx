import React from "react";

const Social = () => {
  return (
    <div className="margin-y">
      <div className="text-center">
        <span className="c-first fs_14 fw-bold">newsfeed</span>
        <h1 className="fs-40 fw-bold fontApp">Instagram</h1>
        <p className="c-gray fs_14 fw-bold">
          Follow us on social media for more discount & promotions
        </p>
        <p className="c-first fs_14 fw-bold">@3legant_official</p>
      </div>
      <div className="social-images d-flex align-items-center justify-content-around gap-2 flex-wrap">
            <img style={{width:"300px",height:"300px",maxWidth:"100%"}} src="IMG/image2.jpeg" alt="" />

            <img style={{width:"300px",height:"300px",maxWidth:"100%"}} src="IMG/product(20).png" alt="" />

            <img style={{width:"300px",height:"300px",maxWidth:"100%"}} src="IMG/image1.png" alt="" />

            <img style={{width:"300px",height:"300px",maxWidth:"100%"}} src="IMG/image3.jpeg" alt="" />
      </div>
    </div>
  );
};

export default Social;
