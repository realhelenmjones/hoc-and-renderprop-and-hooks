import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import EventListener from './EventListener'

class KeydownListener extends PureComponent {

  constructor(props){console.log(JSON.stringify(props));
    super(props);
    this.handleKeydown = this.handleKeydown.bind(this);
  }

  handleKeydown(event){console.log("AGAIN in handleKeydown");console.log(JSON.stringify(this.props));
    if (event.keyCode === this.props.keyCode) {
      this.props.handler();
    }
  }

  render() {
    return <EventListener event="keydown" handler={this.handleKeydown}/>;
  }
}

EventListener.propTypes = {
  keyCode: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired
};

export default KeydownListener;
