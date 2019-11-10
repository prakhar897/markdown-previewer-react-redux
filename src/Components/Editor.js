import React from "react";
import './Editor.css';
import handleChange from '../Actions/index';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => {
	return {
		handleChange : (input) => {
			dispatch(handleChange(input))
		}
	}
};

const mapStateToProps = (state) => ({
	text : state
});


class Editor extends React.Component{
	constructor(props){
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event){
		this.props.handleChange(event.target.value);
	}

	render(){
	    return (
	        <textarea
	            onChange={this.handleChange}
	            type="text"
	            value={this.props.text}
	            id="editor"
	        >
	        </textarea>
	    );
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Editor);