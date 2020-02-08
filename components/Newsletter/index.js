import React, { Component } from 'react';

class Newsletter extends Component {
    render() {
      return (
        <div className="columns">
            <div className="column">
                <h3 className="title ls-half-space has-text-white is-3 has-text-bold has-text-centered-mobile">Subscribe our Newsletter </h3>
                <p className="has-text-white has-text-centered-mobile">Enter your email to get latest updates & news</p>
            </div>
            <div className="column">
                <div className="field ls-round-input has-background-white">
                <form action="https://novamining.us4.list-manage.com/subscribe/post?u=98e4424acb18fa3d45d1d3ffa&amp;id=a6d65da13c" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                    <input className="input has-text-grey" type="email" name="EMAIL" id="mce-EMAIL" placeholder="E-mail address" />
                    <button type="submit" className="button is-success has-text-white">
                        Subscribe
                    </button>
                </form>
                </div>
            </div>
        </div>
        );
    }
}

export default Newsletter;