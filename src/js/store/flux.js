import React from "react";
const getState = ({ getStore, getActions, setStore }) => {


	return {
		store: {
			list: [
				// {
				// 	"First Name": "Cookie",
				// 	"Last Name": "Monster",
				// 	"E-Mail": "SesameCookie@gmail.com",
				// 	"Phone": "(212) 123-4567",
				// 	"Address": "123 Sesame St, New York, NY 12345",

				// },
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

			saveButton: (e) => {
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



			setContactHolder: (field, e) => {
				e.preventDefault();
				const store = getStore();
				let value = e.target.value;

				if (field === "Phone") {
					value = value.replace(/\D/g, "");
					value = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6, 10)}`;
					console.log(value)
				}
				const newContactHolder = { ...store.contactHolder[0], [field]: value };
				setStore({ contactHolder: [newContactHolder] });
			},


			keyPress: (field, e) => {
				const store = getStore();


				let formInput = document.querySelectorAll("input"),
					id = e.target.id,
					pos;

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
				const store = getStore();
				const inputValue = store.holder;
				e.preventDefault()

				let newTask = {
					"Task Info": inputValue,
					"ID Info": store.details[0]["ID Info"],
					"Status": store.details[0]["Status"],
					"Created": store.details[0]["Created"],
					"Memo": store.details[0]["Memo"]
				};
				setStore({ details: [newTask] });
				setStore({ holder: "" })

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

