import React from "react";
const getState = ({ getStore, getActions, setStore }) => {


	return {
		store: {
			list: [
				{
					"First Name": "1Cookie",
					"Last Name": "Monster",
					"E-Mail": "SesameCookie@gmail.com",
					"Phone": "(212) 123-4567",
					"Address": "123 Sesame St, New York, NY 12345",

				},
				{
					"First Name": "2Cookie",
					"Last Name": "Monster",
					"E-Mail": "SesameCookie@gmail.com",
					"Phone": "(212) 123-4567",
					"Address": "123 Sesame St, New York, NY 12345",

				},
				{
					"First Name": "3Cookie",
					"Last Name": "Monster",
					"E-Mail": "SesameCookie@gmail.com",
					"Phone": "(212) 123-4567",
					"Address": "123 Sesame St, New York, NY 12345",

				},
				{
					"First Name": "4Cookie",
					"Last Name": "Monster",
					"E-Mail": "SesameCookie@gmail.com",
					"Phone": "(212) 123-4567",
					"Address": "123 Sesame St, New York, NY 12345",

				},

			],
			contactHolder: [
				{
					"First Name": "",
					"Last Name": "",
					"E-Mail": "",
					"Phone": "",
					"Address": "",

				},
			],
			editedValuesHolder: [
				{

				},
				{
					"state": false,
					"selection": ""
				}

			]

		},
		actions: {


			ranContact: () => {

				return (
					<div className="col-6 text-start">
						<button className="btn btn-warning btn-sm" type="button">
							Add New Random Contact
						</button>
					</div>
				)

			},

			setToast: () => {
				return (<div className="toast" style={{ position: "fixed", bottom: 58, right: 0 }} role="alert" aria-live="assertive" aria-atomic="true" id="myToast">
					<div className="toast-header">
						{/* <img src="..." className="rounded me-2" alt="..."/> */}
						<i className="fa-solid fa-stop text-danger"></i>
						<strong className="mx-auto">Alert!</strong>
						{/* <small className="text-muted">11 mins ago</small> */}
						<button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
					</div>
					<div className="toast-body text-center" id="toastBody">

					</div>
				</div>
				)
			},

			// Use getActions to call a function within a fuction
			trashIcon: (i) => {
				const store = getStore();
				const newList = store.list.filter((item) => { return item != store.list[i] })
				setStore({ list: newList })
			},



			showToast: (msg) => {
				const myToast = document.getElementById('myToast');
				const toast = new bootstrap.Toast(myToast);
				const toastBody = myToast.querySelector('.toast-body');
				toastBody.textContent = msg;
				toast.show();
			},

			saveButtonForms: (e) => {
				e.preventDefault();
				const store = getStore();
				const inputValues = store.contactHolder[0];

				// Check if any of the values in inputValues is empty
				for (const value of Object.values(inputValues)) {
					if (!value) {
						getActions().showToast("All fields are required.")
						return;
					}
				}

				// Create a new object and add it to the list
				const newObject = { ...inputValues };
				const newList = [...store.list, newObject];
				setStore({ list: newList });

				// Clear the contactHolder
				setStore({
					contactHolder: [
						{
							"First Name": "",
							"Last Name": "",
							"E-Mail": "",
							"Phone": "",
							"Address": "",
						},
					],
				});
				console.log(store)
			},

			// saveButtonContacts: (field,e) => {
			// 	e.preventDefault();
			// 	console.log("you saved me")
			// 	const store = getStore();
			// 	const inputValues = store.contactHolder[0];
			// 	console.log(field)

			// 	// // Check if any of the values in inputValues is empty
			// 	for (const key of Object.keys(store.list)) {

			// 		console.log(store.list[key])

			// 		if (store.list[key] === field) {
			// 			console.log(store.list[key])
			// 		// 	getActions().showToast("All fields are required.")
			// 		// 	return;
			// 		}
			// 	}

			// 	// Create a new object and add it to the list
			// 	// const newObject = { ...inputValues };
			// 	// const newList = [...store.list, newObject];
			// 	// setStore({ list: newList });

			// 	// // Clear the contactHolder
			// 	setStore({
			// 		contactHolder: [
			// 			{
			// 				"First Name": "",
			// 				"Last Name": "",
			// 				"E-Mail": "",
			// 				"Phone": "",
			// 				"Address": "",
			// 			},
			// 		],
			// 	});
			// 	console.log(store)
			// },


			// saveButtonContacts: (field, e) => {
			// 	e.preventDefault();
			// 	console.log("you saved me");
			// 	const store = getStore();
			// 	const inputValues = store.contactHolder[0];
			// 	console.log(field);

			// 	// Find the index of the contact to be updated
			// 	const index = store.list.findIndex((contact) => contact === store.editedValuesHolder[0]);

			// 	// Update the contact with the new values from the contactHolder
			// 	const updatedContact = { ...store.list[index], ...inputValues };
			// 	const updatedList = [...store.list];
			// 	updatedList[index] = updatedContact;

			// 	setStore({
			// 	  list: updatedList,
			// 	  contactHolder: [
			// 		{
			// 		  "First Name": "",
			// 		  "Last Name": "",
			// 		  "E-Mail": "",
			// 		  "Phone": "",
			// 		  "Address": "",
			// 		},
			// 	  ],
			// 	});
			// 	console.log(store);
			//   },


			saveButtonContacts: (field, e) => {
				e.preventDefault();
				console.log("you saved me");
				const store = getStore();
				const inputValues = store.contactHolder[0];
				console.log(field);
				console.log(e.target);

				// Find the index of the contact to be updated
				const index = store.list.findIndex((contact) => contact === store.editedValuesHolder[0]);

				// Update the contact with the new values from the contactHolder
				const updatedContact = { ...store.list[index] };
				console.log(updatedContact)
				updatedContact[field] = inputValues[field];
				console.log(updatedContact)

				const updatedList = [...store.list];
				updatedList[index] = updatedContact;

				setStore({
					list: updatedList,
					contactHolder: [
						{
							"First Name": "",
							"Last Name": "",
							"E-Mail": "",
							"Phone": "",
							"Address": "",
						},
					],
				});
				console.log(store);
				const inputs = document.querySelectorAll("input");
				inputs.forEach((input) => {
					input.value = "";
				});

			},





			setContactHolder: (field, e) => {
				// e.preventDefault();
				const store = getStore();
				let value = e.target.value,
					fName, lName;
				let newContactHolder
				// console.log(e.target.id)
				// console.log(e.target.value)
				// console.log(field)

				if (field === "Phone") {
					value = value.replace(/\D/g, "");
					value = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6, 10)}`;
					console.log(value)
				} else if (field === "Name's") {
					if (e.target.id === "First Name") {

						newContactHolder = { ...store.contactHolder[0], [e.target.id]: e.target.value };
						console.log(newContactHolder)
					} else if (e.target.id === "Last Name") {

						newContactHolder = { ...store.contactHolder[0], [e.target.id]: e.target.value };
						console.log(newContactHolder)
					}
				} else {
					newContactHolder = { ...store.contactHolder[0], [field]: value };
				}
				setStore({ contactHolder: [newContactHolder] });
			},


			keyPress: (field, e) => {
				const store = getStore();


				let formInput = document.querySelectorAll("input"),
					id = e.target.id,
					pos;
				// console.log(id)

				if (e.key === "Enter") {
					console.log(store)

					if (field === "Phone") {
						console.log("in")
						getActions().formatPhoneNumber(e.target)
					}


					formInput.forEach((item, index) => {
						if (item.id === id) {
							pos = index;
							return;
						}
					});

					for (let i = pos + 1; i < formInput.length; i++) {
						if (formInput[i].value === "") {
							formInput[i].focus();
							return;
						}
					}

					for (let i = 0; i < formInput.length; i++) {
						if (formInput[i].value === "") {
							formInput[i].focus();
							return;
						}
					}
				}
			},

			formatPhoneNumber: (i) => {
				const input = i;
				const phoneNumber = input.value.replace(/\D/g, '');


				if (phoneNumber.length < 4) {
					input.value = phoneNumber;
				} else if (phoneNumber.length < 7) {
					input.value = `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
				} else {
					input.value = `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
				}
			},


			inputValidation: (field, e) => {
				const store = getStore();
				const inputValue = store.contactHolder[0][field];

				let isValid = false;

				if (field === "First Name" || field === "Last Name") {
					isValid = /^[a-zA-Z\s]*$/.test(inputValue);
				} else if (field === "E-Mail") {
					isValid = /^\S+@\S+\.\S+$/.test(inputValue);
				} else if (field === "Phone") {
					isValid = /^\(\d{3}\) \d{3}-\d{4}$/.test(inputValue);
				} else if (field === "Address") {
					isValid = /^[a-zA-Z0-9\s,'-]*$/.test(inputValue);
				}

				if (e.key === "Enter") {
					if (!isValid) {
						getActions().showToast(`Please enter a valid ${field}`);
						e.target.value = "";
						return false;
					} else {
						return true;
					}
				}
			},

			editButton: (index, e) => {
				const store = getStore();
				const currentIndex = store.list[index];
				let newObject = [currentIndex, store.editedValuesHolder[1]];
				let status = document.querySelectorAll("li");
				status[index].querySelector("#editBoxes").setAttribute("data-bs-toggle", "modal");
				status[index].querySelector("#editBoxes").setAttribute("data-bs-target", "#Modal");
				status[index].querySelector("#editBoxes").setAttribute("data-bs-whatever", "@getbootstrap");

				// console.log(e.target)

				// console.log(newObject);
				if (e.type === "click") {

					newObject[1]["state"] = true

					setStore({ editedValuesHolder: newObject });

				}
				console.log(store.editedValuesHolder)


				// console.

				// console.log(status[index].querySelectorAll("p"))
				// status[index].querySelector("#editBoxes").querySelectorAll("p").forEach(i=>console.log(


				// 	i
				// 	// if(i.innerText === store.editedValuesHolder[0] ){

				// 	// }
				// 	))
				// console.log(status[index].querySelector("#editBoxes"))
				// console.log(store.editedValuesHolder[0])

				// status[index].querySelectorAll("p").forEach(i=>console.log(i.parentNode.parentNode.parentNode.querySelector("#editBoxes")))

				// if (e.target.parentNode.parentNode.querySelector("#switch").id === "switch") {
				// 	status.forEach((i) => {
				// 		i.setAttribute("data-bs-toggle", "modal");
				// 		i.setAttribute("data-bs-target", "#Modal");
				// 		i.setAttribute("data-bs-whatever", "@getbootstrap");
				// 	})



				// 	setStore({ statusIDHolder: [{ state: true, ID: 0 }] })
				// }





			},




			// popModal: (index,e) => {
			// 	const store = getStore();
			// 	let getState = store.editedValuesHolder[1];
			// 	let getValue = store.editedValuesHolder[0];
			// 	let getModalBody = document.querySelector("#Modal").querySelector("#modalBody")
			// 	// let status = document.querySelectorAll("li");
			// 	// status[index].querySelector("#editBoxes").removeAttribute("data-bs-toggle", "modal");
			// 	// status[index].querySelector("#editBoxes").removeAttribute("data-bs-target", "#Modal");
			// 	// status[index].querySelector("#editBoxes").removeAttribute("data-bs-whatever", "@getbootstrap");

			// 	getModalBody.innerHTML = (
			// 		<form onSubmit={(e) => actions.taskChangeDetail(e)} id="task-from" >
			// 							<div className="mb-2">
			// 								<label htmlFor="recipient-name" className="col-form-label">Change Task Here:</label>
			// 								<input type="text" className="form-control" id="task-change" onChange={(e) => actions.setHolder(e)} onKeyDown={(e) => e.key === 'Enter' && e.currentTarget.closest('.modal').querySelector('[data-bs-dismiss="modal"]').click()} />
			// 							</div>
			// 						</form>
			// 	)

			// 	console.log(getModalBody.innerHTML)

			// 	if (getState["state"]) {
			// 		for (const key of Object.keys(getValue)) {
			// 			if (key === e.target.id) {
			// 				// console.log(getValue[key])
			// 				// console.log(key)
			// 				setStore({
			// 					editedValuesHolder: [{}, { state: false }]
			// 				});
			// } else if (e.target.id === "Name") {
			// 	// console.log(getValue["First Name"])
			// 	// console.log(getValue["Last Name"])
			// 	setStore({
			// 		editedValuesHolder: [{}, { state: false }]
			// 	});
			// 	// console.log(store.editedValuesHolder)

			// 	return
			// }
			// 		}
			// 	}
			// 	// console.log(store.editedValuesHolder)
			// },



			// popModal: (index, e) => {
			// 	const store = getStore();
			// 	let getState = store.editedValuesHolder[1];
			// 	let getValue = store.editedValuesHolder[0];
			// 	const currentIndex = store.list[index];
			// 	let newObject = [currentIndex, store.editedValuesHolder[1]];
			// 	let getModalBody = document.querySelector("#Modal").querySelector("#modalBody");

			// 	// console.log(store.editedValuesHolder)
			// 	console.log(newObject[1]["selection"]);

			// 	// getModalBody.innerHTML = `
			// 	//   <form  id="task-from">
			// 	// 	<div class="mb-2">
			// 	// 	  <label for="recipient-name" class="col-form-label">Change Task Here:</label>
			// 	// 	  <input type="text" class="form-control" id="task-change" onChange="${(e) => actions.setHolder(e)}" onKeyDown="${(e) => e.key === 'Enter' && e.currentTarget.closest('.modal').querySelector('[data-bs-dismiss="modal"]').click()}" />
			// 	// 	</div>
			// 	//   </form>
			// 	// `;

			// 	// console.log(getModalBody.innerHTML);

			// 	if (getState["state"]) {
			// 		for (const key of Object.keys(getValue)) {
			// 			if (key === e.target.id) {

			// 				// getModalBody.innerHTML += `
			// 				// <form  id="task-from">
			// 				// 	<div class="mb-2">
			// 				// 	<label for="recipient-name" class="col-form-label">Change ${key} Here:</label>
			// 				// 	<input type="text" class="form-control" placeholder="${key}: ${getValue[key]}" id="task-change" onChange="${((e) => actions.setContactHolder(key, e))}" onKeyDown="${(e) => e.key === 'Enter' && e.currentTarget.closest('.modal').querySelector('[data-bs-dismiss="modal"]').click()}" />
			// 				// 	</div>
			// 				// </form>
			// 				// `;

			// 				newObject[1]["selection"] = key;

			// 				console.log(key)	
			// 				console.log("this is inside",newObject);

			// 				setStore({
			// 					editedValuesHolder: [newObject],
			// 				});
			// 			} else if (e.target.id === "Name") {

			// 				// getModalBody.innerHTML = `
			// 				// <form  id="task-from">
			// 				// 	<div class="mb-2">
			// 				// 	<label for="recipient-name" class="col-form-label">Change ${e.target.id}'s Here:</label>
			// 				// 	<input type="text" class="form-control  my-1 p-1" placeholder="First Name: ${getValue["First Name"]}" id="task-change" onChange="${(e) => actions.setContactHolder(getValue["First Name"], e)}" onKeyDown="${(e) => e.key === 'Enter' && e.currentTarget.closest('.modal').querySelector('[data-bs-dismiss="modal"]').click()}" />
			// 				// 	<input type="text" class="form-control my-1 p-1" placeholder="Last Name: ${getValue["Last Name"]}" id="task-change" onChange="${(e) => actions.setContactHolder(getValue["Last Name"], e)}" onKeyDown="${(e) => e.key === 'Enter' && e.currentTarget.closest('.modal').querySelector('[data-bs-dismiss="modal"]').click()}" />
			// 				// 	</div>
			// 				// </form>
			// 				// `;


			// 				// setStore({
			// 				// 	editedValuesHolder: [{}, { state: false }],
			// 				// });
			// 				return;
			// 			}
			// 		}
			// 	}
			// },



			popModal: (index, e) => {
				const store = getStore();
				const currentState = store.editedValuesHolder[1];
				const currentValue = store.editedValuesHolder[0];
				const currentIndex = store.list[index];
				let newObject = [currentIndex, { ...currentState }];

				if (currentState["state"]) {
					for (const key of Object.keys(currentValue)) {
						if (key === e.target.id) {
							newObject[1]["selection"] = key;
							break; // Exit the loop once the key is found
						} else if (e.target.id === "Name") {

							newObject[1]["selection"] = e.target.id + "'s";

							break;
						}
					}
				}

				setStore({
					editedValuesHolder: newObject,
				});
				// console.log(store.editedValuesHolder[1])
			},



			getModelInfo: () => {

			},



			addModal: () => {



				return (
					<div className="modal fade" id="Modal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
						<div className="modal-dialog modal-dialog-centered modal-dialog-scrollable" style={{ maxWidth: "500px" }}>
							<div className="modal-content">
								<div className="modal-header p-0">
									<h1 className="col modal-title fs-5 text-center mt-2" id="exampleModalLabel">Edit Contact</h1>
									<button type="button" className="btn-close my-1 mr-1" data-bs-dismiss="modal" aria-label="Close"></button>
								</div>
								<div className="modal-body p-2 pb-0" id="modalBody">


									<form id="task-from" >
										<div className="mb-2">
											<label htmlFor="recipient-name" className="col-form-label">Change Task Below:</label>
											<input type="text" className="form-control" placeholder="hello" id="task-change" onChange={(e) => console.log("hi")} onKeyDown={(e) => console.log("hi")} />
										</div>
									</form>


									{/* {console.log("you add me")} */}
								</div>
								<div className="modal-footer p-1">
									<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
									<button onClick={(e) => actions.taskChangeDetail(e)} type="button" className="btn btn-primary" data-bs-dismiss="modal">Save Changes</button>
								</div>

							</div>
						</div>
					</div>
				)

			},



			ranInfo: () => {
				const store = getStore();
				let statusArr = [
					{ "Status": "Pending", "Color": "danger" },
					{ "Status": "In progress", "Color": "warning" },
					{ "Status": "Fixed", "Color": "info" },
					{ "Status": "50% Complete", "Color": "primary" },
					{ "Status": "Completed", "Color": "success" }
				];
				let statIndex = Math.floor(Math.random() * statusArr.length);
				let month = [
					"Jan.",
					"Feb.",
					"Mar.",
					"Apr.",
					"May",
					"June",
					"July",
					"Aug.",
					"Sep.",
					"Oct.",
					"Nov.",
					"Dec."
				];
				let day = Math.floor(Math.random() * 27) + 1;
				let year = "20" + (Math.floor(Math.random() * 1) + 23);
				const newRanInfo = {
					"ID": Math.floor(Math.random() * Math.pow(10, 6)),
					"Status": statusArr[statIndex],
					"Created": `${month[Math.floor(Math.random() * month.length)]} ${day} ${year}`,
					"Memo": ""
				};
				//Added not to spam the API
				if (store.memoHolder === "") {
					setStore({ memoHolder: "Waiting" });
					getActions().fetchData();
				}
				return newRanInfo;
			},

			// fetchData: () => {
			// 	let ranInt = Math.floor(Math.random() * 21) + 95;
			// 	const url = 'https://api.allorigins.win/get?url=' + encodeURIComponent('https://asdfast.beobit.net/api/?type=word&length=' + ranInt + '&startLorem=true');
			// 	return new Promise((resolve, reject) => {
			// 		// Time control nod to spam the api
			// 		setTimeout(() => {
			// 			fetch(url)
			// 				.then(response => response.json())
			// 				.then(data => {
			// 					const parsedJson = JSON.parse(data.contents);

			// 					setStore({ memoHolder: parsedJson.text });
			// 					resolve(parsedJson.text);
			// 				})
			// 				.catch(error => {
			// 					console.error(error);
			// 					reject(error);
			// 				});
			// 		}, 100); // 1 second delay

			// 	});
			// },

			ranClick: (e) => {
				const store = getStore();
				const switchValue = store.switch;
				const switchElement1 = document.querySelector("#switch");
				const switchElement2 = document.querySelector("#statusIcon");
				const status = document.querySelectorAll(".badge")

				if (e.target.id !== "switchIcon" && e.target !== switchElement1 && e.target !== switchElement2) {

					status.forEach((i) => {
						i.removeAttribute("data-bs-toggle", "modal");
						i.removeAttribute("data-bs-target", "#Modal");
						i.removeAttribute("data-bs-whatever", "@getbootstrap");
					})
					setStore({ switch: false });
				} else if (switchValue === false) {

				}
			},

			// switchStatusButton: (e) => {
			// 	//need code..
			// 	const store = getStore();
			// 	const switchValue = store.switch;
			// 	let statusButton = false,
			// 		status = document.querySelectorAll(".badge")

			// 	if (e.target.parentNode.parentNode.querySelector("#switch").id === "switch") {
			// 		status.forEach((i) => {
			// 			i.setAttribute("data-bs-toggle", "modal");
			// 			i.setAttribute("data-bs-target", "#Modal");
			// 			i.setAttribute("data-bs-whatever", "@getbootstrap");
			// 		})

			// 		statusButton = true
			// 		setStore({ switch: statusButton })
			// 	}
			// },
			// statusChangeTable: (e) => {
			// 	const store = getStore();
			// 	const getStatus = e.target.innerText
			// 	let setStatus = {};

			// },


			// displayTrash: (e) => {

			// 	let up = document.querySelectorAll('#bUp'),
			// 		down = document.querySelectorAll('#bDown'),
			// 		trash = document.querySelectorAll('#bTrash')
			// 	up.forEach((i) => {
			// 		i.style.display = "none"
			// 	})
			// 	down.forEach((i) => {
			// 		i.style.display = "none"
			// 	})
			// 	trash.forEach((i) => {
			// 		i.style.display = ""
			// 	})
			// },

			// displayArrow: (e) => {
			// 	let up = document.querySelectorAll('#bUp'),
			// 		down = document.querySelectorAll('#bDown'),
			// 		trash = document.querySelectorAll('#bTrash')
			// 	up.forEach((i) => {
			// 		i.style.display = ""
			// 	})
			// 	down.forEach((i) => {
			// 		i.style.display = ""
			// 	})
			// 	trash.forEach((i) => {
			// 		i.style.display = "none"
			// 	})
			// },
			// moveItemUp: (i) => {
			// 	const store = getStore();
			// 	const lastIndex = store.list.length - 1;
			// 	const newList = store.list.map((item, index, arr) => {
			// 		if (index === i - 1) {
			// 			return arr[i];
			// 		} else if (index === i) {
			// 			if (index === 0) {
			// 				return arr[lastIndex];
			// 			} else {
			// 				return arr[i - 1];
			// 			}
			// 		} else if (index === lastIndex && i === 0) {
			// 			return arr[i];
			// 		} else {
			// 			return item;
			// 		}
			// 	});
			// 	setStore({ list: newList });
			// },

			// moveItemDown: (i) => {
			// 	const store = getStore();
			// 	const firstIndex = 0;
			// 	const lastIndex = store.list.length - 1;
			// 	const newList = store.list.map((item, index, arr) => {
			// 		if (index === i + 1) {
			// 			return arr[i];
			// 		} else if (index === i) {
			// 			if (index === lastIndex) {
			// 				return arr[firstIndex];
			// 			} else {
			// 				return arr[i + 1];
			// 			}
			// 		} else if (index === firstIndex && i === lastIndex) {
			// 			return arr[i];
			// 		} else {
			// 			return item;
			// 		}
			// 	});
			// 	setStore({ list: newList });
			// },


			// gotoPage: (i) => {
			// 	const store = getStore();
			// 	let addDetails;
			// 	store.list.map((item, index) => {

			// 		if (item["ID Info"] === i) {

			// 			addDetails = item
			// 			return addDetails
			// 		}
			// 	})
			// 	setStore({ details: [addDetails] });

			// },
			ranDate: () => {
				const store = getStore();

				let month = [
					"Jan.",
					"Feb.",
					"Mar.",
					"Apr.",
					"May",
					"June",
					"July",
					"Aug.",
					"Sep.",
					"Oct.",
					"Nov.",
					"Dec."
				];
				let day = Math.floor(Math.random() * 27) + 1;
				let year = "20" + (Math.floor(Math.random() * 1) + 23);
				let date = `${month[Math.floor(Math.random() * month.length)]} ${day} ${year}`
				let newDate = {
					"Task Info": store.details[0]["Task Info"],
					"ID Info": store.details[0]["ID Info"],
					"Status": store.details[0]["Status"],
					"Created": date,
					"Memo": store.details[0]["Memo"]
				};
				setStore({ details: [newDate] });

			},

			taskChangeDetail: (e) => {
				// const store = getStore();
				// const inputValue = store.holder;
				// e.preventDefault()

				// let newTask = {
				// 	"Task Info": inputValue,
				// 	"ID Info": store.details[0]["ID Info"],
				// 	"Status": store.details[0]["Status"],
				// 	"Created": store.details[0]["Created"],
				// 	"Memo": store.details[0]["Memo"]
				// };
				// setStore({ details: [newTask] });
				// setStore({ holder: "" })

			},

			statusChangeDetail: (e) => {
				const store = getStore();
				const getStatus = e.target.innerText
				let setStatus = {};


				store.statusArr.forEach((item) => {
					if (getStatus === item["Status"]) {
						setStatus = item
					}
				})

				let newStatus = {
					"Task Info": store.details[0]["Task Info"],
					"ID Info": store.details[0]["ID Info"],
					"Status": setStatus,
					"Created": store.details[0]["Created"],
					"Memo": store.details[0]["Memo"]
				};
				setStore({ details: [newStatus] });
			},

			addMemoDetail: () => {
				const store = getStore();
				const inputValue = store.holder;

				let newMemo = {
					"Task Info": store.details[0]["Task Info"],
					"ID Info": store.details[0]["ID Info"],
					"Status": store.details[0]["Status"],
					"Created": store.details[0]["Created"],
					"Memo": inputValue
				};
				setStore({ holder: "" })
				setStore({ details: [newMemo] });

			},
		}
	};
};

export default getState;

