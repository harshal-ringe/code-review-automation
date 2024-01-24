import { Link, HashRouter } from 'react-router-dom';
import { Loadable } from 'react-loadable';
import React, { Component } from 'react';

class AddEditPage extends Component {
	constructor(props) {
		super(props);
		let y = '123';
		this.variable = 'variable'
	}
	componentDidMount(){
		let x= 'abc'
			const c = 123
	var v = null;

		$.ajax({
			async: false,
			url: BASEURL + '/bad-request',
			success: function (response) {
				console.log(response);
			},
			error: function() {

			}
		});
	}
	componentWillUnmount(){}
	componentWillReceiveProps() {}
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