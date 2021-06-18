/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tabs } from 'antd';

export default class Header extends Component {
  render() {
    const { TabPane } = Tabs;
    const { onTabChange, tab } = this.props;

    return (
      <Tabs
        defaultActiveKey="1"
        activeKey={tab}
        centered
        onChange={(activeKey) => {
          if (activeKey !== tab) {
            onTabChange(activeKey);
          }
        }}
      >
        <TabPane tab="Search" key="1" />
        <TabPane tab="Rated" key="2" />
      </Tabs>
    );
  }
}

Header.propTypes = {
  onTabChange: PropTypes.func,
  tab: PropTypes.string,
};

Header.defaultProps = {
  onTabChange: () => {},
  tab: '1',
};
