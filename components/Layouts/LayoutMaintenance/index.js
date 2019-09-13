import React, { Component } from 'react';
import _ from 'lodash';
import { initGA, logPageView } from '../utils/analytics';

class LayoutMaintenance extends Component {
  state = {
    width: 0,
    height: 0,
    mode: 'desktop',
  };

  updateDimensions = () => {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight,
      mode: window.innerWidth > 1087 ? 'desktop' : 'mobile',
    });
  };

  componentDidMount = () => {
    this.updateDimensions();
    window.addEventListener('resize', _.throttle(this.updateDimensions, 500));
      if (!window.GA_INITIALIZED) {
        initGA()
        window.GA_INITIALIZED = true
      }
      logPageView()
  };

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.updateDimensions);
  };

  render() {
    return (
      <React.Fragment>
        {this.props.children}
      </React.Fragment>
    );
  }
}

export default LayoutMaintenance;
