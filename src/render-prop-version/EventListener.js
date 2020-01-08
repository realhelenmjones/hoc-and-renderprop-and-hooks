import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class EventListener extends PureComponent {

constructor(props){
  super(props);
}

  componentDidMount() {
    if (document) {
      document.addEventListener(this.props.event, this.props.handler);      
    }
  }

  componentWillUnmount() {
    if (document) {
      document.removeEventListener(this.props.event, this.props.handler);
    }
  }

  render() {
    return <noscript />;
  }
}

EventListener.propTypes = {
  event: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired
};

export default EventListener;
