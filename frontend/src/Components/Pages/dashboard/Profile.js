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
import axios from 'axios'

const Profile = () => {
	const authContext = useContext(AuthContext);
	const { user } = authContext;

	const [templates, updateTemplates] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:4000/api/templates/")
			.then(function (response) {
				console.log(response.data[1].json);
				updateTemplates(response.data);
			})
			.catch(function (error) {
				console.log(error);
			});
	});


	return (
		<Container>
			<h5>Your Templates</h5>
			{console.log("here")}
			<div class="card-deck">
				{
					templates.length > 0 && templates.map(temp => (

						<div class="card bg-primary">
							<div class="card-body text-center">
								<p class="card-text">{temp.title}</p>
							</div>
						</div>))
				}
				{/* <div class="card bg-info">
					<div class="card-body text-center">
						<p class="card-text">Content of the second card</p>
					</div>
				</div>
				<div class="card bg-success">
					<div class="card-body text-center">
						<p class="card-text">Content of the third card</p>
					</div>
				</div>
				<div class="card bg-warning">
					<div class="card-body text-center">
						<p class="card-text">Content of the fourth card</p>
					</div>
				</div> */}
			</div>
		</Container>
	);
};

export default Profile;
