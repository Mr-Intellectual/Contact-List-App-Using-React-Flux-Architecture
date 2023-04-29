import React from "react";
import { namesArray, states, statesAbbr, emails, streetNames } from '../component/RandomInfo';


const getState = ({ getStore, getActions, setStore }) => {


	return {
		store: {
			list: [


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

			],

		},
		actions: {

			ranContact: () => {

				return (
					<div className="col-6 text-start">
						<button className="btn btn-warning btn-sm" type="button" onClick={() => getActions().makeNewContact()}>
							Add New Random Contact
						</button>
					</div>
				)

			},

			makeNewContact: () => {
				const store = getStore();
				const inputValues = store.contactHolder[0];
				const stateRan = Math.floor(Math.random() * states.length)
				const emailRan = emails[Math.floor(Math.random() * emails.length)]
				const phNoRan = Math.floor(Math.random() * (9999999999 - 1000000000 + 1)) + 1000000000;
				const formattedPhone = phNoRan.toString().replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
				const addressRan = `${(Math.floor(Math.random() * 99999) + 1).toLocaleString()} ${streetNames[Math.floor(Math.random() * streetNames.length)]}, ${states[stateRan]}, ${statesAbbr[stateRan]},  ${Math.floor(Math.random() * 99999) + 10000}`


				const fullName = namesArray[Math.floor(Math.random() * namesArray.length)];
				const nameArray = fullName.split(" ");
				const firstName = nameArray[0];
				const lastName = nameArray[1];
				const newObject = {
					"First Name": firstName,
					"Last Name": lastName,
					"E-Mail": emailRan,
					"Phone": formattedPhone,
					"Address": addressRan,
				};
				const newList = [...store.list, newObject];
				setStore({ list: newList });
			},

			setToast: () => {
				return (

					<div className="toast" style={{ position: "fixed", bottom: 58, right: 0, zIndex: 9999 }} role="alert" aria-live="assertive" aria-atomic="true" id="myToast">
						<div className="toast-header">
							<i className="fa-solid fa-stop text-danger"></i>
							<strong className="mx-auto">Alert!</strong>
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
			},



			saveButtonContacts: (field, e) => {
				e.preventDefault();
				const store = getStore();
				const inputValues = store.contactHolder[0];

				// Find the index of the contact to be updated
				const index = store.list.findIndex((contact) => contact === store.editedValuesHolder[0]);

				// Update the contact with the new values from the contactHolder
				const updatedContact = { ...store.list[index] };

				if (field !== "Name's") {
					updatedContact[field] = inputValues[field];
				} else {
					updatedContact["First Name"] = inputValues["First Name"];
					updatedContact["Last Name"] = inputValues["Last Name"];
				}


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


				let status = document.querySelectorAll("li");
				status[index].querySelector("#editBoxes").removeAttribute("data-bs-toggle", "modal");
				status[index].querySelector("#editBoxes").removeAttribute("data-bs-target", "#Modal");
				status[index].querySelector("#editBoxes").removeAttribute("data-bs-whatever", "@getbootstrap");
				status[index].querySelector("#editBoxes").querySelectorAll("p").forEach(
					(item1) => {
						item1.classList.forEach((item2) => {
							if (item2 === "glow") {
								item1.classList.remove("glow");
							}
						});
					});


				const inputs = document.querySelectorAll("input");
				inputs.forEach((input) => {
					input.value = "";
				});

			},

			ranClick: (e) => {
				const store = getStore();

				if ((e.target.id !== "editBtn" && e.target.id !== "Name" && e.target.id !== "Address" && e.target.id !== "Phone" && e.target.id !== "E-Mail") || store.editedValuesHolder[1]['state'] !== true) {
					// Remove attributes from each li element
					document.querySelectorAll("li").forEach((item) => {
						item.childNodes[0].childNodes[1].removeAttribute("data-bs-toggle");
						item.childNodes[0].childNodes[1].removeAttribute("data-bs-target");
						item.childNodes[0].childNodes[1].removeAttribute("data-bs-whatever");
					});

					// Remove 'glow' class from p elements
					document.querySelectorAll("span").forEach((item1) => {
						item1.querySelectorAll('p').forEach((item2) => {
							if (item2.classList.contains('glow')) {
								item2.classList.remove('glow');
							}
						});
					});
				}
			},

			setContactHolder: (field, e) => {
				const store = getStore();
				let value = e.target.value,
					fName, lName;
				let newContactHolder


				if (field === "Phone") {
					value = value.replace(/\D/g, "");
					value = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6, 10)}`;

					newContactHolder = { ...store.contactHolder[0], [field]: value };
				} else if (field === "Name's") {
					if (e.target.id === "First Name") {

						newContactHolder = { ...store.contactHolder[0], [e.target.id]: e.target.value };

					} else if (e.target.id === "Last Name") {

						newContactHolder = { ...store.contactHolder[0], [e.target.id]: e.target.value };

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

				if (e.key === "Enter") {

					if (field === "Phone") {
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

			inputValidation: (field, e, contact) => {
				const store = getStore();
				const inputValue = store.contactHolder[0][field];

				let isValid = false,
					fNameValid = false,
					lNameValid = false;

				if (field === "First Name" || field === "Last Name") {
					isValid = /^[a-zA-Z\s]*$/.test(inputValue);
				} else if (field === "E-Mail") {
					isValid = /^\S+@\S+\.\S+$/.test(inputValue);
				} else if (field === "Phone") {
					isValid = /^\(\d{3}\) \d{3}-\d{4}$/.test(inputValue);
				} else if (field === "Address") {
					isValid = /^[a-zA-Z0-9\s,'-]*$/.test(inputValue);
				} else if (field === "Name's") {
					const fName = store.contactHolder[0]["First Name"],
						lName = store.contactHolder[0]["Last Name"];

					if (fName !== "") {
						fNameValid = /^[a-zA-Z\s]*$/.test(fName);
					}
					if (lName !== "") {
						lNameValid = /^[a-zA-Z\s]*$/.test(lName);
					}
				}

				if (e.key === "Enter") {
					if (!isValid) {
						getActions().showToast(`Please enter a valid ${field}`);
						e.target.value = "";
					} else {
						return true;
					}
				} else if (contact === "Contact") {
					if (!isValid) {
						if (field === "Name's") {
							if (!fNameValid) {
								getActions().showToast(`Please enter a valid First Name`);
							}
							if (!lNameValid) {
								getActions().showToast(`Please enter a valid Last Name`);
							}

							if (fNameValid === false || lNameValid === false) {
								e.target.value = "";
								return false;
							}
							e.target.value = "";
							return true;
						} else {
							getActions().showToast(`Please enter a valid ${field}`);
							e.target.value = "";
							return false;
						}
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
				status[index].querySelector("#editBoxes").querySelectorAll("p").forEach((item) => item.className += " glow")

				if (e.type === "click") {

					newObject[1]["state"] = true

					setStore({ editedValuesHolder: newObject });

				}
			},

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
			},


			addModal: () => {

				const store = getStore(),
					actions = getActions();

				return (

					<div
						className="modal fade"
						id="Modal"
						tabIndex="-1"
						aria-labelledby="exampleModalLabel"
						aria-hidden="true"
					>
						<div
							className="modal-dialog modal-dialog-centered modal-dialog-scrollable"
							style={{ maxWidth: "500px" }}
						>
							<div className="modal-content">
								<div className="modal-header p-0">
									<h1
										className="col modal-title fs-5 text-center mt-2"
										id="exampleModalLabel"
									>
										Edit Contact:
									</h1>
									<button
										type="button"
										className="btn-close my-1 mr-1 pr-3"
										style={{ paddingRight: "40px" }}
										data-bs-dismiss="modal"
										aria-label="Close"
									></button>
								</div>
								<div className="modal-body p-2 pb-0" id="modalBody">
									<form id="task-from">
										<div className="mb-2">
											<label htmlFor="recipient-name" className="col-form-label">
												Change
												{store.editedValuesHolder[1]["selection"]
													? " " + store.editedValuesHolder[1]["selection"] + " "
													: ""}
												Here:
											</label>
											{store.editedValuesHolder[1]["selection"] !== "Name's" ? (
												<input
													type="text"
													className="form-control"
													id="task-change"
													onChange={(e) =>
														actions.setContactHolder(
															store.editedValuesHolder[1]["selection"],
															e
														)
													}
													placeholder={Object.keys(
														store.editedValuesHolder[0]
													).reduce((prev, curr) => {
														if (curr === store.editedValuesHolder[1]["selection"]) {
															return (
																store.editedValuesHolder[1]["selection"] +
																": " +
																store.editedValuesHolder[0][curr]
															);
														}
														return prev;
													}, "")}
													onKeyDown={(e) => {
														if (e.key === "Enter") e.preventDefault();
													}}
												/>
											) : (
												<div>
													<input
														type="text"
														className="form-control my-1"
														id="First Name"
														onChange={(e) =>
															actions.setContactHolder(
																store.editedValuesHolder[1]["selection"],
																e
															)
														}
														placeholder={Object.keys(
															store.editedValuesHolder[0]
														).reduce((prev, curr) => {
															if (
																store.editedValuesHolder[1]["selection"] ===
																"Name's"
															) {
																return `Name First: ${store.editedValuesHolder[0]["First Name"]} `;
															}
															return prev;
														}, "")}
														onKeyDown={(e) => {
															if (e.key === "Enter") e.preventDefault();
															actions.keyPress("First Name", e);
														}}
													/>{" "}
													<input
														type="text"
														className="form-control my-1"
														id="Last Name"
														onChange={(e) =>
															actions.setContactHolder(
																store.editedValuesHolder[1]["selection"],
																e
															)
														}
														placeholder={Object.keys(
															store.editedValuesHolder[0]
														).reduce((prev, curr) => {
															if (
																curr === store.editedValuesHolder[1]["selection"]
															) {
																return (
																	store.editedValuesHolder[1]["selection"] +
																	": " +
																	store.editedValuesHolder[0][curr]
																);
															} else if (
																store.editedValuesHolder[1]["selection"] ===
																"Name's"
															) {
																return `Name Last: ${store.editedValuesHolder[0]["Last Name"]}`;
															}
															return prev;
														}, "")}
														onKeyDown={(e) => {
															if (e.key === "Enter") e.preventDefault();
															actions.keyPress("Last Name", e);
														}}
													/>
												</div>
											)}
										</div>
									</form>
								</div>
								<div className="modal-footer p-1">
									<button
										type="button"
										className="btn btn-secondary"
										data-bs-dismiss="modal"
										id="close"
									>
										Close
									</button>

									<button
										onClick={(e) => {
											const modal = document.querySelector("#Modal");
											const inputValues = modal.querySelectorAll("input");
											const field = modal.querySelectorAll("label")[0].childNodes
											[1].textContent.trim()
											const valuesNotEmpty = Array.from(inputValues).every(
												(input) => input.value !== ""
											);

											if (valuesNotEmpty) {

												const isValid = actions.inputValidation(field, e, "Contact")

												if (isValid === false) {
													const inputs = document.querySelectorAll("input");
													inputs.forEach((input) => {
														input.value = "";
													});
													return
												} else {
													actions.saveButtonContacts(store.editedValuesHolder[1]["selection"], e);
													document.getElementById("close").click()
												}


											} else {
												actions.showToast(
													"Please enter values in all input fields."
												);
											}
										}}
										type="button"
										className="btn btn-primary"
									>
										Save Changes
									</button>

								</div>
							</div>
						</div>
					</div>

				)

			},

		}
	};
};

export default getState;

