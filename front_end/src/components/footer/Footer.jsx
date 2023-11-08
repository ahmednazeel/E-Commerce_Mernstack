import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import '../../commen.css'
import './footer.css'
import { CalendarMonthSharpIcon } from '@mui/icons-material/CalendarMonthSharp';
import { LinkContainer } from "react-router-bootstrap";
const Footer = () => {
  return (
    <>
      <footer className="bg-footer footer">
        <div className="footer-content c-black">
          <div className="fs_14">
            <LinkContainer to={"/"}>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginBottom:"20px" }}>
                <span className="fontApp fw-bold fs_24 c-gray">
                  Shop<span className="c-first">Now</span>
                </span>
                <img width={50} src="/IMG/logo.png" alt="" />
              </Typography>
            </LinkContainer>
            <li style={{marginBottom:"10px",listStyle:"none"}}>
              43111 Hai Trieu street,<br />
              District 1, HCMC <br />
              width: 161px;
            </li>
            <p>84-756-3237</p>
            <div>

            </div>
          </div>
          <ul>
            <h3 className="fontApp fw-bold" style={{marginBottom:"20px"}}>page</h3>
            <li>home</li>
            <li>shop</li>
            <li>articles</li>
            <li>contact us</li>
          </ul>
          <ul>
            <h3 className="fontApp fw-bold" style={{marginBottom:"20px"}}>Info</h3>
            <li>Shipping Policy</li>
            <li>Return & Refund</li>
            <li>Support</li>
            <li>FAQs</li>
          </ul>
          <div>
            <h3 className="fontApp fw-bold" style={{marginBottom:"20px"}}>Join Newsletter</h3>
            <li>Subscribe our newsletter to get more deals, new products and promotions</li>
            <div className="send-email">
              <input type="text" placeholder="Enter Your Email"/>
              <button><img src="IMG/icon/icons8-email-64.png" alt="" /></button>
            </div>
          </div>
        </div>
      </footer>

      <div className="d-flex  justify-content-between flex-wrap p-4">
          <p className="fs_16 c-gray">Copyright © 2023 <span className="fontApp fw-bold c-gray">Ahmed Waled Nazeel:-</span></p>
          <div className="d-flex align-items-center gap-3 flex-wrap">
            <img width={50} src="IMG/icon/Payment Methods (1).svg" alt="" />
            <img width={50} src="IMG/icon/Payment Methods.svg" alt="" />
            <img width={50} src="IMG/icon/Mastercard.svg" alt="" />
            <img width={50} src="IMG/icon/Group 63.svg" alt="" />
            <img width={50} src="IMG/icon/Group 75.svg" alt="" />
            <img width={50} src="IMG/icon/Group 76.svg" alt="" />
          </div>
        </div>
    </>
  );
};

export default Footer;
