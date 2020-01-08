import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'bootstrap-4-react'


import withToggle from './withToggle';
import withEscape from './withEscape';
import DropMenu from '../styled';



const BaseDropdownMenu = (props) => {

    const open = props.toggleOn;
    return (
        <>
            <Button primary type="button" onClick={props.toggle} >Menu </Button>
            {open &&
                <DropMenu>
                    {props.items.map(item =>
                        <DropMenu.Item key={item.label}><DropMenu.Link href={item.link}>{item.label}</DropMenu.Link></DropMenu.Item>
                    )}
                </DropMenu>
            }
        </>
    );
}


BaseDropdownMenu.propTypes = {
    toggle: PropTypes.func.isRequired,
    items: PropTypes.arrayOf(
        PropTypes.shape({
          href: PropTypes.string,
          label: PropTypes.string
        })
      ).isRequired,
};


const withHandlers = BaseComponent => (props) => (
    <BaseComponent onEscape={() => props.toggle(false)} {...props} />
);



const DropdownMenu = withToggle(withHandlers(withEscape(BaseDropdownMenu)));

export default DropdownMenu;

