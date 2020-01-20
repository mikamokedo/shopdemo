import React, { Component } from 'react';
class Contact extends Component {
    render() {
        return(
            <div className="contact-us-area">
            <div className="contact-information">
              <div className="container">
                <div className="row">
                  <div className="col-md-6 col-sm-6">
                    <div className="contact-details">
                      <div className="contact-head">
                        <h2>CONTACT DETAILS</h2>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parent montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa.</p>
                      </div>
                      <div className="contact-bottom">
                        <p><span><i className="fa fa-phone" /></span> Phone: +8800 186-70-592-70</p>
                        <p><span><i className="fa fa-envelope" /></span> E-mail: raminbd96@gmail.com</p>
                        <p><span><i className="fa fa-link" /></span> Website: <a href="#">www.bootexpert.com</a></p>
                        <p><span><i className="fa fa-map-marker" /></span> Address: Opposite 123 Avenue, London, United Kingdom</p>
                      </div>
                      <div className="contact-social-icon footer-social-icon">
                        <ul className="list-inline">
                          <li><a href="#"><i className="fa fa-facebook" /></a></li>
                          <li><a href="#"><i className="fa fa-twitter" /></a></li>
                          <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                          <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                          <li><a href="#"><i className="fa fa-pinterest-p" /></a></li>
                          <li><a href="#"><i className="fa fa-vimeo" /></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <div className="contact-leave-message">
                      <div className="contact-head">
                        <h2>Leave A MESSAGE</h2>
                      </div>
                      <form action="#" className="form-horizontal">
                        <div className="form-group col-md-6">
                          <label className="control-label">
                            Subject
                          </label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="form-group col-md-6">
                          <label className="control-label">
                            E-mail
                          </label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="form-group col-md-6">
                          <label className="control-label">
                            Order reference
                          </label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="form-group col-md-6">
                          <label className="control-label">
                            Attach File
                          </label>
                          <input type="file" className="form-control" />
                        </div>
                        <div className="form-group col-md-12">
                          <label className="control-label">
                            Message
                          </label>
                          <textarea rows={5} className="form-control" defaultValue={""} />
                        </div>
                        <button className="btn">Send Message</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
            );
        }
    }
    
    export default Contact;