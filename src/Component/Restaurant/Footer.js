import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
          {/* Footer Area Starts */}
          <footer className="footer-area" style={{top:"150px", position:"relative"}}>
            <div className="footer-widget section-padding">
              <div className="container">
                <div className="row">
                  <div className="col-md-4">
                    <div className="single-widget single-widget1">
                      <a href=""><img src="assets/images/logo/logo2.png" alt="" /></a>
                      <p className="mt-3">Which morning fourth great won't is to fly bearing man. Called unto shall seed, deep, herb set seed land divide after over first creeping. First creature set upon stars deep male gathered said she'd an image spirit our</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="single-widget single-widget2 my-5 my-md-0">
                      <h5 className="mb-4">contact us</h5>
                      <div className="d-flex">
                        <div className="into-icon">
                          <i className="fa fa-map-marker" />
                        </div>
                        <div className="info-text">
                          <p>1234 Some St San Francisco, CA 94102, US 1.800.123.4567 </p>
                        </div>
                      </div>
                      <div className="d-flex">
                        <div className="into-icon">
                          <i className="fa fa-phone" />
                        </div>
                        <div className="info-text">
                          <p>(123) 456 78 90</p>
                        </div>
                      </div>
                      <div className="d-flex">
                        <div className="into-icon">
                          <i className="fa fa-envelope-o" />
                        </div>
                        <div className="info-text">
                          <p>support@axiomthemes.com</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="single-widget single-widget3">
                      <h5 className="mb-4">opening hours</h5>
                      <p>Monday ...................... Closed</p>
                      <p>Tue-Fri .............. 10 am - 12 pm</p>
                      <p>Sat-Sun ............... 8 am - 11 pm</p>
                      <p>Holidays ............. 10 am - 12 pm</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-copyright">
              <div className="container">
                <div className="row">
                  <div className="col-lg-7 col-md-6">
                    <span>{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                      Copyright © All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                      {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</span>
                  </div>
                  <div className="col-lg-5 col-md-6">
                    <div className="social-icons">
                      <ul>
                        <li className="no-margin">Follow Us</li>
                        <li><a href=""><i className="fa fa-facebook" /></a></li>
                        <li><a href=""><i className="fa fa-twitter" /></a></li>
                        <li><a href=""><i className="fa fa-google-plus" /></a></li>
                        <li><a href=""><i className="fa fa-pinterest" /></a></li>
                        <li><a href=""><i className="fa fa-instagram" /></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
            </div>
        );
    }
}

export default Footer;