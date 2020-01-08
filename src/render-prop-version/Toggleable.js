import React from 'react';
import PropTypes from 'prop-types';

 class Toggleable extends React.Component{

    static propTypes = {
        initialToggleOn: PropTypes.bool
      };
    
      static defaultProps = {
        initialToggleOn: false
      };

    constructor(props){
        super(props);
        this.state = {
            toggleOn : this.props.initialToggleOn
        }
        this.toggle = this.toggle.bind(this); 
    }       
    

    toggle(toggleOn) {
       this.setState({
            toggleOn: typeof toggleOn === 'boolean' ?toggleOn:!this.state.toggleOn
        });

    }


    render(){
        return this.props.children({toggleOn:this.state.toggleOn, toggle:this.toggle});
    }

 }

 export default Toggleable;
