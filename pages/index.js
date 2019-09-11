import React, { Component } from 'react';
import LayoutMaintenance from 'components/Layouts/LayoutMaintenance';
import HomeScreen from 'screens/Home';

class Index extends Component {
  render() {
    return <HomeScreen />;
  }
}

Index.Layout = LayoutMaintenance;

export default Index;
