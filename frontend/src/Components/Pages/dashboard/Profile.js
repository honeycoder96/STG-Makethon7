import React, { Component, Link, useState, useContext, useEffect } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

//material ui component
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { FormGroup, Button, Container } from '@material-ui/core';
import AuthContext from './../../../context/auth/authContext';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import axios from 'axios'
import AddIcon from '@material-ui/icons/Add';
import ChatBox from './../../Layouts/ChatBox'

const Profile = () => {
	const authContext = useContext(AuthContext);
	const { user } = authContext;

	const colorArr = ["card bg-primary", "card bg-success", "card bg-danger", "card bg-info"];
	const [templates, updateTemplates] = useState([]);
	const [loader, changeLoader] = useState(0);
	const [editData, setEditData] = useState(null);

	useEffect(() => {
		// setEditData(null);
	});

	var loadTemplates = () => {
		axios
			.get("http://localhost:4000/api/templates/")
			.then(function (response) {
				// console.log(response.data[0].json);
				updateTemplates(response.data);
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	var deleteTemplate = (id) => {
		console.log("deleting:", id)
		changeLoader(1);
		axios
			.delete("http://localhost:4000/api/templates/delete/" + id)
			.then(function (response) {
				loadTemplates()
				changeLoader(0)
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	var loadEditSheet = (templ) => {
		setEditData(templ)
	}
	return (
		<Container>
			<div>
				<div class="col-md-3"><h5>Your Templates</h5></div>
				<div style={{ backgroundColor: "green", content: "center" }} class="col-md-1 offset-5"><Button><AddIcon /></Button></div>
			</div>
			<span class="card-deck">
				{templates.length < 1 && loadTemplates()}
				{
					templates.length > 0 && templates.map(temp => (
						<div style={{ padding: "5px" }} class="col-md-4">
							<span class={colorArr[Math.floor(Math.random() * (+colorArr.length - +0)) + +0]}>
								<div class="card-header text-center">
									<p class="card-text">{temp.title}</p>
								</div>
								<div class="card-footer text-right">
									<Button component={Link} >
										<ChatBox user={temp} />
									</Button>
									<Button onClick={() => deleteTemplate(temp.uid)} >
										<DeleteIcon />{loader > 0 && "wait..."}
									</Button>

								</div>
							</span>
						</div>))
				}
			</span>
		</Container>
	);
};

export default Profile;
