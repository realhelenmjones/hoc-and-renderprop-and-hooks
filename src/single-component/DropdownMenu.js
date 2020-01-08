import React from 'react';

import { Button } from 'bootstrap-4-react'

import DropMenu  from '../styled'



class DropdownMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        };

        this.toggleMenu = this.toggleMenu.bind(this);
        this.handleEscape = this.handleEscape.bind(this);
    }

    componentDidMount() {
        if (window === 'undefined') return;

        document.addEventListener('keydown', this.handleEscape);
    }

    componentWillUnmount() {
        if (window === 'undefined') return;

        document.removeEventListener('keydown', this.handleEscape);
    }

    toggleMenu(e) {
        e.preventDefault();

        this.setState({
            open: !this.state.open
        });

    }

    handleEscape(event) {
        if (event.keyCode === 27) {
            this.setState({ open: false });
        }
    }

    render() {
        const { open } = this.state;
        return (
            <>
                <Button primary type="button" onClick={this.toggleMenu} >Menu </Button>
                {open &&
                    <DropMenu>
                       {this.props.items.map( item =>
                            <DropMenu.Item key={item.label}><DropMenu.Link href={item.link}>{item.label}</DropMenu.Link></DropMenu.Item>
                        )}  
                    </DropMenu>
                }
            </>
        );


    }
}

export default DropdownMenu;