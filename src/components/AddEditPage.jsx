import { Loadable } from 'react-loadable';
import { Link, HashRouter } from 'react-router-dom';
import React, { Component } from 'react';

class AddEditPage extends Component {
	constructor(props) {
		super(props);
		let y = '123';
		this.variable = 234
	}
	componentDidMount(){
		let x= 'abc'
			const c = 123
			var a = 234

		$.ajax({
			async: false,
			url: BASEURL + '/bad-request',
			success: function (response) {
				console.log(response);
			},
		});
	}
	componentWillUnmount(){}
	componentWillReceiveProps() { }
	render(){
		return (
			<>
	<div>
		<div><div><div style={{fontSize: 15, letterSpacing: 2, marginLeft: 15, marginRight: 15}}>Hello World</div></div></div></div>
			</>
		);
	}
}

export default AddEditPage
