import React, { useState, Fragment, Component } from 'react';
import EmailEditor from 'react-email-editor';
//material ui component
import sample from "../../../util/sample.json";
import initial from "./../../../util/initial.json";
import axios from "axios";
import base64 from 'base-64';

class Users extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "React",
			start: "",
			int: initial
		};
		this.loadInitial = this.loadInitial.bind(this);
	}

	render() {
		return (
			<div>
				<div>
					<div>
						<button onClick={this.exportHtml}>Export HTML</button>
						&nbsp;
            <button onClick={this.saveDesign}>Save Design</button>
						&nbsp;
            <button onClick={this.loadInitial}>Load Initial Design</button>
						&nbsp;
            <button onClick={() => this.load()}>Load Design</button>
						&nbsp;
            <button onClick={this.save}>Save</button>
						&nbsp;
					</div>
					<EmailEditor ref={editor => (this.editor = editor)} />
				</div>
			</div>
		);
	}


	fetch = () => {

	}

	loadInitial = () => {
		this.editor.loadDesign(this.state.int);
		// var self = this;
		// axios
		// 	.get("http://localhost:4000/api/templates/")
		// 	.then(function (response) {
		// 		console.log(response.data[1].json);
		// 		self.editor.loadDesign(response.data[0].json);
		// 	})
		// 	.catch(function (error) {
		// 		console.log(error);
		// 	});
	};

	load = () => {
		this.editor.loadDesign(sample);
	};

	save = () => {
		this.editor.exportHtml(data => {
			const { design, html } = data;
			// console.log("exportHtml", html);
			// let text = JSON.stringify(html);
			let name = "Sample 15";
			let text = base64.encode(html);
			console.log("text:", text)
			axios.post('http://localhost:4000/api/templates/addTemplate', { name, text })
				.then((response) => {
					console.log("response.data:", response.data)
					if (response.data.code == 200) {
						console.log("success:", response.data)
					}
				}).catch((error) => {
					console.log("error:", error.message)
				})
		});

		// this.editor.saveDesign(design => {
		// 	sample = design;
		// 	sample.id = "1234566789";
		// 	this.setState({ start: sample });
		// 	console.log("saveDesign:", sample);
		// 	//this.setState({start:design})
		// 	//alert("Design JSON has been logged in your developer console.")
		// });
	};

	exportHtml = () => {
		this.editor.exportHtml(data => {
			const { design, html } = data;
			console.log("exportHtml", html);
		});
	};

	saveDesign = () => {
		this.editor.saveDesign(design => {
			console.log("saveDesign", design);
			this.setState({ start: design });
			alert("Design JSON has been logged in your developer console.");
		});
	};
}

export default Users;
