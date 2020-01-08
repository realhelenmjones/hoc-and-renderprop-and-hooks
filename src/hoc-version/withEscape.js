import React from 'react'
import PropTypes from 'prop-types';

const ESCAPE_KEY = 27;

export default BaseComponent => class extends React.Component {

    static propTypes = {
        onEscape: PropTypes.func.isRequired
      };
    
    constructor(props) {
        super(props);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    componentDidMount() {
        if (document) {
            document.addEventListener('keydown', this.handleKeyDown);
        }
    }

    componentWillUnmount() {
        if (document) {
            document.removeEventListener('keydown', this.handleKeyDown);
        }
    }

    handleKeyDown(event) {
        event.preventDefault();

        if (event.keyCode === ESCAPE_KEY) {
            this.props.onEscape();
        }
    }

    render() {
        return <BaseComponent {...this.props} />
    }
}
