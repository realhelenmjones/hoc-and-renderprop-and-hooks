import React from 'react'
import PropTypes from 'prop-types';
import KeydownListener from './KeydownListener';

const ESCAPE_KEY = 27;

class Escape extends React.Component {

    static propTypes = {
        onEscape: PropTypes.func.isRequired
      };
    
    constructor(props) {
        super(props);
    }

    render() {
        return <KeydownListener keyCode={ESCAPE_KEY} handler={this.props.onEscape}/>;
    }
}

export default Escape;
