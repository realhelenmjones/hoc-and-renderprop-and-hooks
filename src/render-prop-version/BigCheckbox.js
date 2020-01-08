import React from 'react';

import { CheckboxUnchecked, CheckboxChecked } from '../styled'
import Toggleable from './Toggleable';

const BigCheckbox = (props) => {
   
    return (
        <Toggleable>
            {({toggleOn, toggle}) => (
                <>
        {toggleOn ? <CheckboxChecked onClick={toggle}>{props.children}<br />OFF</CheckboxChecked>
        : <CheckboxUnchecked onClick={toggle} >{props.children}<br />ON</CheckboxUnchecked>
        }
        </>
            )}
        </Toggleable>        
    );


}

export default BigCheckbox;

