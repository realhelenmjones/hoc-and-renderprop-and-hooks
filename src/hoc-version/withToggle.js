import React from 'react';
import PropTypes from 'prop-types';

 export default BaseComponent => class extends React.Component{

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
        return <BaseComponent {...this.props} toggleOn={this.state.toggleOn} toggle={this.toggle} />
    }

 }
