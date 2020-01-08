import React from 'react';

import PropTypes from 'prop-types';

import { Button } from 'bootstrap-4-react'
import Toggleable from './Toggleable'
import Escape from './Escape'
import DropMenu from '../styled';


const DropdownMenu = (props) => {

    const open = props.toggleOn;
    return (
        <>
        <Toggleable>
            {({toggleOn, toggle}) => (
                <>
        <Escape onEscape={()=>toggle(false)} /> 
            <Button primary type="button" onClick={toggle} >Menu </Button>
            {toggleOn &&
                <DropMenu>
                    {props.items.map(item =>
                        <DropMenu.Item key={item.label}><DropMenu.Link href={item.link}>{item.label}</DropMenu.Link></DropMenu.Item>
                    )}
                </DropMenu>
            } 
            </>          
            )}
            </Toggleable>
        </>
    );
}

export default DropdownMenu;