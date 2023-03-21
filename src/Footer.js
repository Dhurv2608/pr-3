import React from 'react'

const Footer = () => {
  return (
    <div>
    <div className="footer-middle pt-95" style={{backgroundImage: 'url(assets/images/call-bg.png)'}}> 
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="widget widgets-company-info">
            <div className="footer-bottom-logo pb-40">
              <img src="assets/images/logo.png" alt />
            </div>
            <div className="company-info-desc">
              <p>Condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus.
              </p>
            </div>
            <div className="follow-company-info pt-3">
              <div className="follow-company-text mr-3">
                <a href="#"><p>Follow Us</p></a>
              </div>
              <div className="follow-company-icon">
                <a href="#"><i className="fa fa-facebook" /></a>
                <a href="#"><i className="fa fa-twitter" /></a>
                <a href="#"><i className="fa fa-linkedin" /></a>
                <a href="#"><i className="fa fa-skype" /></a>
              </div>
            </div>
          </div>					
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="widget widget-nav-menu">
            <h4 className="widget-title pb-4">Our Services</h4>
            <div className="menu-quick-link-container ml-4">
              <ul id="menu-quick-link" className="menu">
                <li><a href="#">Marketing Strategy</a></li>
                <li><a href="#">Interior Design</a></li>
                <li><a href="#">Digital Services</a></li>
                <li><a href="#">Product Selling</a></li>
                <li><a href="#">Product Design</a></li>
                <li><a href="#">Social Marketing</a></li>
              </ul>
            </div>
          </div>
        </div>	
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="widget widgets-company-info">
            <h3 className="widget-title pb-4">Company Address</h3>
            <div className="company-info-desc">
              <p>Porem awesome dolor sitework amet, consetur acing elit, sed do eiusmod ligal
              </p>
            </div>	
            <div className="footer-social-info">
              <p><span>Address :</span>54/1 New dhas sorini Asut, Melbord Austria.</p>
            </div>
            <div className="footer-social-info">
              <p><span>Phone :</span>54786547521</p>
            </div>
            <div className="footer-social-info">
              <p><span>Email :</span>demo@example.com</p>
            </div>
          </div>					
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div id="em-recent-post-widget">
            <div className="single-widget-item">
              <h4 className="widget-title pb-3">Popular Post</h4>				
              <div className="recent-post-item active pb-3">
                <div className="recent-post-image mr-3">
                  <a href="#">
                    <img width={80} height={80} src="assets/images/recent1.jpg" alt />					
                  </a>
                </div>
                <div className="recent-post-text">
                  <h6><a href="#">
                      Tiktok Illegally collecting data sharing										
                    </a>
                  </h6>					
                  <span className="rcomment">December 12, 2022</span>
                </div>
              </div>
              <div className="recent-post-item pt-1">
                <div className="recent-post-image mr-3">
                  <a href="#">
                    <img width={80} height={80} src="assets/images/recent3.jpg" alt />					
                  </a>
                </div>
                <div className="recent-post-text">
                  <h6><a href="#">
                      How can use our latest news by									
                    </a>
                  </h6>					
                  <span className="rcomment">December 15, 2022</span>
                </div>
              </div>
            </div>
          </div>	
        </div>
      </div>
      <div className="row footer-bottom mt-70 pt-3 pb-1">
        <div className="col-lg-6 col-md-6">
          <div className="footer-bottom-content">
            <div className="footer-bottom-content-copy">
              <p>© 2022 Techno.All Rights Reserved. </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="footer-bottom-right">
            <div className="footer-bottom-right-text">
              <a className="absod" href="#">Privacy Policy </a>
              <a href="#"> Terms &amp; Conditions</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>	
    </div>
  )
}

export default Footer
