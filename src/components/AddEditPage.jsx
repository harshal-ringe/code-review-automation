import { Loadable } from 'react-loadable';
import { Link, HashRouter } from 'react-router-dom';
import React, { Component } from 'react';

class AddEditPage extends Component {
	constructor(props) {
		super(props);
		this.variable = 'variable';
		let y = '123';
	}
	componentDidMount() {
		var v = null;
		let x = 'abc';
		const c = 123;

		$.ajax({
			async: false,
			url: BASEURL + '/bad-request',
			success: function (response) {
				console.log(response);
			},
			error: function () {},
		});
	}
	
	componentWillUnmount() {

	}

	componentWillReceiveProps() {
		
	}

	render() {
		return (
			<>
				<div>
					<div>
						<div>
<div style={{ fontSize: 15, letterSpacing: 2, marginLeft: 15, marginRight: 15 }}>Hello World</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default AddEditPage;
