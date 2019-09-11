import React, { Component } from 'react';
import Link from 'next/link';

class Maintenance extends Component {
  render() {
    return (
      <section className="hero ls-rainbow-gradient-2 full-height-min flex-vertical-center">
        <div className="hero-body container full-height-min flex-vertical-center">
          <div className="columns flex-vertical-center">
            <div className="column is-hidden-mobile flex-vertical-center">
              <img
                className="ls-main-hero--image"
                src="../static/assets/MaintenanceLong.png"
                width="1200"
              />
            </div>
            <div className="column is-hidden-tablet flex-vertical-center">
              <img
                className="ls-main-hero--image"
                src="../static/assets/MaintenanceSmall.png"
                width="600"
              />
            </div>
            <br/>
            <h2 className="subtitle is-4 has-text-white has-text-centered">
              Our website is currently down for maintenance 🤓 We're working hard to bring it back online as soon as possible 🚀
            </h2>
            <h2 className="subtitle is-5 has-text-white has-text-centered">
              Do you need any further information or do you have any enquiry? 🤔 Feel free to write us at <Link href="mailto:contact@novamining.io"><a className="has-text-white">contact@novamining.io</a></Link> 🤗
            </h2>
            <p className="column has-text-centered-mobile">
                <Link href="https://twitter.com/NovaMining_Net">
                <a target="_blank" className="ls-social-icon has-text-white">
                  <span className="icon is-large">
                    <i className="fab fa-2x fa-twitter"></i>
                  </span>
                </a>
                </Link>
                <Link href="https://www.linkedin.com/company/novaminingnetwork">
                <a target="_blank" className="ls-social-icon has-text-white">
                  <span className="icon is-large">
                    <i className="fab fa-2x fa-linkedin-in"></i>
                  </span>
                </a>
                </Link>
                <Link href="https://www.facebook.com/novamining.network">
                <a target="_blank" className="ls-social-icon has-text-white">
                  <span className="icon is-large">
                    <i className="fab fa-2x fa-facebook-f"></i>
                  </span>
                </a>
                </Link>
                <Link href="https://www.instagram.com/NovaMining/">
                <a target="_blank" className="ls-social-icon has-text-white">
                  <span className="icon is-large">
                    <i className="fab fa-2x fa-instagram"></i>
                  </span>
                </a>
                </Link>
                <Link href="https://medium.com/novamining">
                <a target="_blank" className="ls-social-icon has-text-white">
                  <span className="icon is-large">
                    <i className="fab fa-2x fa-medium"></i>
                  </span>
                </a>
                </Link>
                <Link href="https://github.com/novamining-network">
                <a target="_blank" className="ls-social-icon has-text-white">
                  <span className="icon is-large">
                    <i className="fab fa-2x fa-github"></i>
                  </span>
                </a>
                </Link>
                <Link href="https://novamining-network.slack.com">
                <a target="_blank" className="ls-social-icon has-text-white">
                  <span className="icon is-large">
                    <i className="fab fa-2x fa-slack"></i>
                  </span>
                </a>
                </Link>
                <Link href="https://t.me/NovaMining">
                <a target="_blank" className="ls-social-icon has-text-white">
                  <span className="icon is-large">
                    <i className="fab fa-2x fa-telegram-plane"></i>
                  </span>
                </a>
                </Link>
              </p>
          </div>
        </div>
      </section>
    );
  }
}

export default Maintenance;
