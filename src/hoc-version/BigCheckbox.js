import React from 'react';
import PropTypes from 'prop-types';

import { CheckboxUnchecked, CheckboxChecked } from '../styled'
import withToggle from './withToggle';

const BaseBigCheckbox = (props) => {
   
    return (
        <>
        {props.toggleOn ? <CheckboxChecked onClick={props.toggle}>{props.children}<br />OFF</CheckboxChecked>
        : <CheckboxUnchecked onClick={props.toggle} >{props.children}<br />ON</CheckboxUnchecked>
        }
        </>        
    );


}
BaseBigCheckbox.propTypes = {
    toggle: PropTypes.func.isRequired
};

BaseBigCheckbox.defaultProps = {
    toggleOn: false
};

const BigCheckbox = withToggle(BaseBigCheckbox);

export default BigCheckbox;

