let array = [
	{
		id: 1,
		Name: "John",
		Age: 18,
		profession: "developer",
	},
	{
		id: 2,
		Name: "Jack",
		Age: 20,
		profession: "developer",
	},
	{
		id: 3,
		Name: "Karen",
		Age: 19,
		profession: "admin",
	},
];

function filterProfession() {
	let selector = document.getElementById('professionSelect');
	let selectedProfession = selector.value;

	if (!selectedProfession) {
		alert("Please select one option");
		return;
	}

	let match = array.filter((item) => {
		return item.profession === selectedProfession;
	});

	let userContainer = document.getElementById('userContainer');
	userContainer.innerHTML = "";

	match.forEach((item, index) => {
		let div = document.createElement("div");
		div.classList.add("user-card");
         div.className="newdiv";
		let para = document.createElement("p");
		para.innerText =(index + 1)+".";
		div.appendChild(para);

		Object.keys(item).forEach((key) => {
			if (key !== "id") {
				let para2 = document.createElement("p");
				para2.innerText = key + ": " + item[key];
				div.appendChild(para2);
			}
		});

		userContainer.appendChild(div);
	});
}

function addUser(event) {
	event.preventDefault();

	let nameInput = document.getElementById('nameInput');
	let professionInput = document.getElementById('professionInput');
	let ageInput = document.getElementById('ageInput');

	let name = nameInput.value;
	let profession = professionInput.value;
	let age = ageInput.value;

	if (!name || !profession || !age) {
		alert("Please fill in all the fields");
		return;
	}

	let newUser = {
		id: array.length + 1,
		Name: name,
		Age: age,
		profession: profession,
	};

	array.push(newUser);
	filterProfession();

	nameInput.value = "";
	professionInput.value = "";
	ageInput.value = "";
}

let filterButton = document.getElementById('filterButton');
let addButton = document.getElementById('addButton');
let addUserForm = document.getElementById('addUserForm');

filterButton.addEventListener("click", filterProfession);
addUserForm.addEventListener("submit", addUser);

