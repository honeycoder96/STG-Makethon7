import React, { useState, useEffect } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import VisibilityIcon from '@material-ui/icons/Visibility';
import AddIcon from '@material-ui/icons/Add';
import { Button } from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios';
import MailingListTable from './MailerListTable'

const Team = () => {

	const [open, setOpen] = React.useState(false);
	const [open1, setOpen1] = React.useState(false);
	const [open2, setOpen2] = React.useState(false);

	const [loader, setLoader] = React.useState(false);
	const [initialList, setInitialList] = React.useState([])
	const [mailingList, setMailingList] = React.useState({
		name: ''
	})

	const [addToList, setAddToList] = React.useState({
		id: '',
		name: '',
		phone: '',
		email: '',
		gender: ''
	})

	const [emails, setEmails] = React.useState([]);

	const fetchList = () => {
		console.log("fetchlist callled")
		axios.get('http://localhost:4000/api/mailinglist/')
			.then((response) => {
				console.log("response.data:", response.data)
				if (response.data.code == 200) {
					console.log("success:", response.data)
					setInitialList(response.data.data);
				}
			}).catch((error) => {
				console.log("error:", error.message)
			})
	}

	const fetchEmails = (id) => {
		setOpen1(true);
		console.log("fetchEmails callled")
		axios.get('http://localhost:4000/api/mailinglist/list/' + id)
			.then((response) => {
				console.log("response.data:", response.data)
				if (response.data.code == 200) {
					console.log("success:", response.data)
					setEmails(response.data.data)
				}
			}).catch((error) => {
				console.log("error:", error.message)
			})
	}

	const deleteList = (id) => {
		console.log("deleteList callled")
		axios.delete('http://localhost:4000/api/mailinglist/listDelete/' + id)
			.then((response) => {
				console.log("response.data:", response.data)
				if (response.data.code == 200) {
					console.log("success:", response.data)
					fetchList()
				}
			}).catch((error) => {
				console.log("error:", error.message)
			})
	}

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleClickOpen1 = () => {
		setOpen1(true);
	};

	const handleClose1 = () => {
		setOpen1(false);
	};

	const handleClickOpen2 = (id) => {
		setAddToList({ id: id })
		setOpen2(true);
	};

	const handleClose2 = () => {
		setOpen2(false);
	};

	const createList = () => {
		setLoader(true);
		var name = mailingList.name
		axios.post('http://localhost:4000/api/mailinglist/add', { name })
			.then((response) => {
				console.log("response.data:", response.data)
				if (response.data.code == 200) {
					fetchList();
					setLoader(false)
					handleClose()
				}
			}).catch((error) => {
				setLoader(false)
			})
	}
	const addMember = () => {
		setLoader(true);
		let data = {
			name: addToList.name,
			email: addToList.email,
			phone: addToList.phone,
			gender: addToList.gender
		}
		console.log("data kaha hai:", addToList)
		axios.post('http://localhost:4000/api/mailinglist/addMember/' + addToList.id, data)
			.then((response) => {
				console.log("response.data:", response.data)
				if (response.data.code == 200) {
					fetchList()
					setLoader(false)
					handleClose2()
				}
			}).catch((error) => {
				setLoader(false)
			})
	}

	const handleNameChange = (event) => {
		setMailingList({ name: event.target.value });
	}

	const handleChange = (event) => {
		let tar = event.target.name
		console.log("yaha kya hai phir:", tar)
		switch (tar) {
			case 'name':
				setAddToList({ ...addToList, name: event.target.value })
				break;
			case 'phone':
				setAddToList({ ...addToList, phone: event.target.value })
				break;
			case 'email':
				setAddToList({ ...addToList, email: event.target.value })
				break;
			case 'gender':
				setAddToList({ ...addToList, gender: event.target.value })
				break;
		}
	}

	return <div>
		{initialList.length <= 0 && fetchList()}
		<div>
			<div style={{ backgroundColor: "green", content: "center" }} class="col-md-1 offset-11"><Button onClick={handleClickOpen}><AddIcon /></Button></div>
		</div>
		<div class="card-deck">
			{
				initialList.length > 0 ? initialList.map(item => (
					<div class="col-md-4 ">
						<div style={{ padding: "5px", marginTop: "10px" }} class="card">
							<div class="card-header">
								{item.name}
							</div>
							<div class="card-body">
								<h5 class="card-title">Count:{item.all_email_qty}</h5>
								<p class="card-text">{item.creationdate}</p>
								<p class="card-text">{item.status_explain}</p>
								<Button onClick={() => fetchEmails(item.id)} class="et_pb_button btn btn-primary" title="View Members"><VisibilityIcon /> </Button>
								<Button onClick={() => handleClickOpen2(item.id)} class="et_pb_button btn btn-primary" title="Add Member" ><EditIcon /></Button>
								<Button onClick={() => deleteList(item.id)} class="et_pb_button btn btn-danger" title="Delete List" ><DeleteIcon /></Button>
							</div>
						</div></div>)) : "Loading....."
			}
		</div>
		<Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
			<DialogTitle id="form-dialog-title">Create Mailing List</DialogTitle>
			<DialogContent>
				<DialogContentText>
					Please provide a meaning full name to your mailing list.
          </DialogContentText>
				<TextField
					autoFocus
					margin="dense"
					id="name"
					name="name"
					label="Mailing List Name"
					type="text"
					value={mailingList.name}
					onChange={handleNameChange}
					fullWidth
				/>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose} color="danger">
					Cancel
          </Button>
				{loader ? "wait..." : <Button onClick={createList} color="primary">
					Create
          </Button>}
			</DialogActions>
		</Dialog>
		<Dialog open={open1} onClose={handleClose1} aria-labelledby="form-dialog-title">
			<DialogTitle id="form-dialog-title">Memebrs of Mailing List</DialogTitle>
			<DialogContent>
				<DialogContentText>
					{emails.length <= 0 ? "Loading....." : <MailingListTable list={emails} />}
				</DialogContentText>

			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose1} color="danger">
					Close
          </Button>
			</DialogActions>
		</Dialog>
		<Dialog open={open2} onClose={handleClose2} aria-labelledby="form-dialog-title">
			<DialogTitle id="form-dialog-title">Add Member to List</DialogTitle>
			<DialogContent>
				<DialogContentText>
					Mailing List Id:{addToList.id}
				</DialogContentText>
				<TextField
					autoFocus
					margin="dense"
					id="name"
					name="name"
					label="Name"
					type="text"
					value={addToList.name}
					onChange={handleChange}
					fullWidth
				/>
				<TextField
					autoFocus
					margin="dense"
					id="email"
					name="email"
					label="Email*"
					type="text"
					value={addToList.email}
					onChange={handleChange}
					fullWidth
				/>
				<TextField
					autoFocus
					margin="dense"
					id="phone"
					name="phone"
					label="Phone"
					type="number"
					value={addToList.phone}
					onChange={handleChange}
					fullWidth
				/>
				<TextField
					autoFocus
					margin="dense"
					id="gender"
					name="gender"
					label="gender"
					type="text"
					value={addToList.gender}
					onChange={handleChange}
					fullWidth
				/>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose2} color="danger">
					Cancel
          </Button>
				{loader ? "wait..." : <Button onClick={addMember} color="primary">
					Add
          </Button>}
			</DialogActions>
		</Dialog>
	</div>;
};

export default Team;
