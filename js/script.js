"use strick";

const userName = document.getElementById("userName");
const emailAdd = document.getElementById("E-mail");
const submitBtn = document.querySelector(".btn-1");
const editBtn = document.querySelector(".btn-2");
const msgSuccess = document.getElementById("message-success");
const msgFail = document.getElementById("message-fail");
let tblData = document.getElementById("tbData");
let container = [];
let editInd;

if (JSON.parse(localStorage.getItem("container")) != null) {
  container = JSON.parse(localStorage.getItem("container"));
  addData();
}

function handleData(index = null) {
  if (!userName.value || !emailAdd.value) {
    msgFail.textContent = "name or email input still empty!";
    msgSuccess.classList.add("d-none");
    msgFail.classList.remove("d-none");
  } else {
    const userData = {
      username: userName.value,
      email: emailAdd.value,
    };
    if (typeof index == "number") {
      msgSuccess.textContent = "data updated successfully";
      container.splice(index, 1, userData);
    } else {
      msgSuccess.textContent = "data inserted successfully!";
      container.push(userData);
    }
    localStorage.setItem("container", JSON.stringify(container));
    msgFail.classList.add("d-none");
    msgSuccess.classList.remove("d-none");
    clearInputs();
    addData();
  }
}

function clearInputs() {
  userName.value = ``;
  emailAdd.value = ``;
}

function addData() {
  let box = ``;
  for (const i of container.entries()) {
    const [index, { username, email }] = i;
    i[1].id = index;
    box += `<tr>
        <td>${index}</td>
        <td>${username}</td>
        <td>${email}</td>
        <td><button onclick = "editData(${index})" class="btn btn-primary">Edit</button></td>
        <td><button onclick = "delData(${index})" class="btn btn-danger">Delete</button></td>
    </tr>`;
  }
  tblData.innerHTML = box;
}

function delData(index) {
  msgSuccess.classList.add("d-none");
  container.splice(index, 1);
  localStorage.setItem("container", JSON.stringify(container));
  addData();
}

function editData(index) {
  editInd = index;
  msgSuccess.classList.add("d-none");
  editBtn.classList.toggle("d-none");
  submitBtn.classList.toggle("d-none");
  let { username, email } = container[index];
  userName.value = username;
  emailAdd.value = email;
}
function updateConfirm() {
  handleData(editInd);
  editBtn.classList.toggle("d-none");
  submitBtn.classList.toggle("d-none");
}
