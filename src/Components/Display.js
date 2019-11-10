import React from "react";
import './Display.css';
import { connect } from 'react-redux';
import marked from 'marked';

marked.setOptions({
  breaks: true
});

const mapStateToProps = (state) => ({
	text : state
});

class Display extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		//console.log(this.props);
		return(
			<div id = "preview" className="output" dangerouslySetInnerHTML={{__html: marked(this.props.text)}}/>
		);
	}
}

export default connect(mapStateToProps,null)(Display);