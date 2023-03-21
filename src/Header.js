import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
    <div className="header_top_menu pt-2 pb-2 bg_color">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-sm-8">
          <div className="header_top_menu_address">
            <div className="header_top_menu_address_inner">
              <ul>
                <li><a href="#"><i className="fa fa-envelope-o" />example@gmail.com</a></li>
                <li><a href="#"><i className="fa fa-map-marker" />24/5, 1st Floor, Kurigram</a></li>
                <li><a href="#"><i className="fa fa-phone" />+ (1800) 456 7890</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-4">
          <div className="header_top_menu_icon">
            <div className="header_top_menu_icon_inner">
              <ul>
                <li><a href="#"><i className="fa fa-facebook" /></a></li>
                <li><a href="#"><i className="fa fa-twitter" /></a></li>
                <li><a href="#"><i className="fa fa-pinterest" /></a></li>
                <li><a href="#"><i className="fa fa-linkedin" /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*==================================================*/}
  {/*--- End	Techno Header Top Menu Area Css ---*/}
  {/*===================================================*/}
  {/*==================================================*/}
  {/*--- Start Techno Main Menu Area ---*/}
  {/*==================================================*/}
  <div id="sticky-header" className="techno_nav_manu d-md-none d-lg-block d-sm-none d-none">
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <div className="logo mt-4">
            <a className="logo_img" href="index-2.html" title="techno">
              <img src="assets/images/1.png" alt />
            </a>
            <a className="main_sticky" href="index-2.html" title="techno">
              <img src="assets/images/logo.png" alt="astute" />
            </a>
          </div>
        </div>
        <div className="col-md-9">
          <nav className="techno_menu">
            <ul className="nav_scroll">
              <li><Link to="/">Home</Link>
                
              </li>
              <li><Link to="/About">About</Link>
               
              </li>
              <li><Link to="/Services">Services</Link>
                
              </li>
              <li><Link to="#solution.html">IT Solution</Link>
                
              </li>
              <li><Link to="#elements.html">Element</Link>
                
              </li>
              <li><Link to="#blog">Blog </Link>
                
              </li>
              <li><Link to="#contact">Contact</Link>
               
              </li>
            </ul>
            <div className="donate-btn-header">
              <a className="dtbtn" href="#">Get A Quote</a>	
            </div>				
          </nav>
        </div>
      </div>
    </div>
  </div>
  {/*--- Techno Mobile Menu Area ---*/}
  <div className="mobile-menu-area d-sm-block d-md-block d-lg-none ">
    <div className="mobile-menu">
      <nav className="techno_menu">
        <ul className="nav_scroll">
          <li><a href="#home">Home</a>
            <ul className="sub-menu">
              <li><a href="index-2.html">Home  One</a></li>
              <li><a href="#"> Latest New Home</a>
                <ul className="sub-menu">
                  <li><a href="odoo-erp.html">Odoo ERP <span>New</span></a></li>	
                  <li><a href="index-15.html">Home It Solution <span>New</span></a></li>
                  <li><a href="index-16.html">Home Seo <span>New</span></a></li>
                  <li><a href="index-17.html">Home Insurance <span>New</span></a></li>
                  <li><a href="index-18.html">Home Startup <span>New</span></a></li>
                </ul>
              </li>
              <li><a href="#new-demo.html">Added New Demo</a>
                <ul className="sub-menu">
                  <li><a href="index-11.html">Home  Eleven New</a></li>	
                  <li><a href="index-12.html">Home Twelve New</a></li>
                  <li><a href="index-13.html">Home Thirteen New</a></li>
                  <li><a href="data-science.html">Data Science New</a></li>
                  <li><a href="machine-learning.html">Machine Learning New</a></li>
                  <li><a href="affiliate-intelligent.html">Affiliate Intelligent New</a></li>
                  <li><a href="revulation-slider.html">Revulation Slider One</a></li>
                  <li><a href="revulation-slider-2.html">Revulation Slider Two</a></li>
                  <li><a href="home-dark.html">Dark Version New</a></li>
                  <li><a href="index-14.html">Home Animation New</a></li>
                  <li><a href="landing-1.html">Landing One New</a></li>
                  <li><a href="landing-2.html">Landing Two New</a></li>
                  <li><a href="landing-3.html">Landing Three New</a></li>
                </ul>
              </li>
              <li><a href="index-3.html">Home  Two</a></li>
              <li><a href="index-4.html">Home  Three</a></li>
              <li><a href="index-5.html">Home  Four</a></li>
              <li><a href="index-6.html">Home  Five</a></li>
              <li><a href="index-7.html">Home  Six</a></li>
              <li><a href="index-8.html">Home  Seven</a></li>
              <li><a href="index-9.html">Home  Eight</a></li>
              <li><a href="index-10.html">Home  Nine</a></li>
              <li><a href="index-19.html">Home  Ten</a></li>
            </ul>
          </li>
          <li><a href="#company.html">Company</a>
            <ul className="sub-menu">
              <li><a href="about.html">About One</a></li>
              <li><a href="about-2.html">About Two</a></li>
              <li><a href="about-3.html">About Three</a></li>
              <li><a href="team.html">Our Team</a></li>
              <li><a href="team-details.html">Team Details</a></li>
              <li><a href="why-choose-us.html">Whay Choose Us</a></li>
              <li><a href="case-study.html">Case Study</a></li>
              <li><a href="case-study-details.html">Case Study Details</a></li>
              <li><a href="portfolio.html">Portfolio</a></li>
              <li><a href="pricing.html">Pricing</a></li>
              <li><a href="faq.html">FAQ</a></li>
              <li><a href="404.html">Error</a></li>
            </ul>
          </li>
          <li><a href="#service.html">Services</a>
            <ul className="sub-menu">
              <li><a href="service-1.html">Service One</a></li>
              <li><a href="service-2.html">Service Two</a></li>
              <li><a href="service-3.html">Service Three</a></li>
              <li><a href="service-4.html">Service Four</a></li>
              <li><a href="service-details.html">Service Details</a></li>
            </ul>
          </li>
          <li><a href="#solution.html">IT Solution</a>
            <ul className="sub-menu">
              <li><a href="managed-service.html">Managed IT Service</a></li>
              <li><a href="it-service.html">IT Service</a></li>
              <li><a href="industries.html">Industries</a></li>
              <li><a href="business-solution.html">Business Solution</a></li>
              <li><a href="product-design.html">Product Design</a></li>
              <li><a href="service-details.html">IT Service Details</a></li>
            </ul>
          </li>
          <li><a href="#elements.html">Element</a>
            <ul className="sub-menu">
              <li><a href="service-element.html">Service Box</a></li>
              <li><a href="info-box-element.html">Info Box</a></li>
              <li><a href="team-element.html">Teams</a></li>
              <li><a href="case-study-element.html">Case Study</a></li>
              <li><a href="process-element.html">Process</a></li>
              <li><a href="testimonial-element.html">Testimonials</a></li>
              <li><a href="pricing-element.html">Pricing</a></li>
              <li><a href="counter-element.html">Counters</a></li>
              <li><a href="call-do-action-element.html">Call Do Action</a></li>
              <li><a href="brand-element.html">Brands</a></li>
              <li><a href="blog-element.html">Blogs</a></li>
            </ul>
          </li>
          <li><a href="#blog">Blog </a>
            <ul className="sub-menu">
              <li><a href="blog-gird.html">Blog Gird</a></li>
              <li><a href="blog-list.html">Blog List</a></li>
              <li><a href="blog-left-sidebar.html">Blog Left Sidebar</a></li>
              <li><a href="blog-right-sidebar.html">Blog Right Sidebar</a></li>
              <li><a href="blog-details.html">Blog Details</a></li>
            </ul>
          </li>
          <li><a href="#contact">Contact</a>
            <ul className="sub-menu">
              <li><a href="contact.html">Contact One</a></li>
              <li><a href="contact-2.html">Contact Two New</a></li>
              <li><a href="contact-3.html">Contact Three New</a></li>
              <li><a href="contact-4.html">Contact Four New</a></li>
              <li><a href="contact-5.html">Contact Five New</a></li>
              <li><a href="contact-6.html">Contact Six New</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  </div>
    </div>
  )
}

export default Header
