const getState = ({ getStore, getActions, setStore }) => {

	
	return {
		store: {
			list: [
				{
					"Task Info": "FIRST",
					"ID Info": 12345,
					"Created": "Jan. 23, 2023",
					"Status": { "Status": "Pending", "Color": "danger" },

				},
			],
			holder:""
				
		},
		actions: {


			// Use getActions to call a function within a fuction
			trashIcon: (i) => {
				const store = getStore();
				console.log(i)
				const newList = store.list.filter((item) => {return item != store.list[i]})
				console.log("list", newList)
				setStore({ list: newList })
			},
		
			checkIcon: (e) => {
				const store = getStore();
				const Info = getActions().ranInfo();
				const inputValue = store.holder;
				// console.log(inputValue);
				 let input1 = e.target.parentNode.querySelector('#input1')
				//  console.log("fdfvjh",input1.value)
				if (inputValue === "") {
				  alert("The input cannot be empty");
				} else {
				  const newObject = {
					"Task Info": inputValue,
					"ID Info": Info.ID,
					"Created": Info.Date,
					"Status": Info.Status,
				  };
				//   console.log(newObject);
				//   console.log(store);

				  const newList = [...store.list, newObject];
				  setStore({ list: newList });
				  setStore({ holder: "" }); // reset the input value after adding a new task
				//   console.log(e.target.parentNode.querySelector('#input1'))
				}
				input1.value = ""
			},
			
			setHolder: (e) => {
				if (e.target.value) {
					setStore({ holder: e.target.value });
				}
			},

			keyPress: (e) => {
				const store = getStore();
				const Info = getActions().ranInfo();
				const inputValue = store.holder;
				// console.log(inputValue);
				 let input1 = e.target.parentNode.querySelector('#input1')
				if (e.key === "Enter" && inputValue === "") {
				  alert("The input cannot be empty");
				} else if (e.key === "Enter"){
				  const newObject = {
					"Task Info": inputValue,
					"ID Info": Info.ID,
					"Created": Info.Date,
					"Status": Info.Status,
				  };
				  console.log(newObject);
				  console.log(store);

				  const newList = [...store.list, newObject];
				  setStore({ list: newList });
				  setStore({ holder: "" }); // reset the input value after adding a new task
				input1.value = ""
				}
			},

			ranInfo:()=>{
				let statusArr = [
					{ "Status": "Pending", "Color": "danger" },
					{ "Status": "In progress", "Color": "warning" },
					{ "Status": "Fixed", "Color": "info" },
					{ "Status": "Completed", "Color": "success" }
				  ];
				  let statIndex = Math.floor(Math.random() * 4);
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
					ID: Math.floor(Math.random() * Math.pow(10, 6)),
					Status: statusArr[statIndex],
					Date: `${month[Math.floor(Math.random() * month.length)]} ${day} ${year}`
				  };
				return newRanInfo;
			},
			
			displayTrash:(e)=>{
				let up = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.up'),
				down = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.down'),
				trash = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.bTrash')
				up.style.display = "none"
				down.style.display = "none"
				trash.style.display = ""
				console.log(e.target.parentNode.childNodes)
				console.log(up, down)
			},

			displayArrow:(e)=>{
				let up = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.up'),
				down = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.down'),
				trash = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.bTrash')
				up.style.display = ""
				down.style.display = ""
				trash.style.display = "none"
				console.log("Arrow", e)
			},
			moveItemUp:(i)=>{
				console.log("up", i)
			},
			moveItemDown:(i)=>{
				console.log("down", i)
			},
			gotoPage:(i)=>{
				console.log("page", i)
			},

			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			
		}
	};

export default getState;