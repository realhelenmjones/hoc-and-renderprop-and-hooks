import React from 'react';

import { CheckboxUnchecked, CheckboxChecked } from '../styled'

class BigCheckbox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {toggleOn:false}

        this.toggle = this.toggle.bind(this);
    }

    toggle(e) {
        e.preventDefault();
        this.setState({toggleOn : !this.state.toggleOn})

    }

    render() {
        return (
            this.state.toggleOn ? <CheckboxChecked onClick={this.toggle}>{this.props.children}<br />OFF</CheckboxChecked>
                : <CheckboxUnchecked onClick={this.toggle} >{this.props.children}<br />ON</CheckboxUnchecked>
        )

    }

}

export default BigCheckbox;