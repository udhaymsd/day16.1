nction createElement(element) {
  return document.createElement(element);
}

function append(element) {
  return document.body.append(element);
}

function appendChild(element, child) {
  return element.appendChild(child);
}

function appendChildren(element, ...children) {
  console.log(children);
  return element.append(...children);
}

function setAttribute(element, attribute, value) {
  element.setAttribute(attribute, value);
}


//create table
let tableData = [];

let container = createElement('div');
setAttribute(container, 'class', 'container');
append(container);

//create row

let row = createElement('div');
setAttribute(row, 'class', 'row');
appendChild(container, row);

//create coloum-1
let col1 = createElement('div');
setAttribute(col1, 'class', 'col-lg-4 col-md-4 col-sm-3 d-none d-sm-block');
appendChild(row, col1);

//create coloum-2
let col2 = createElement('div');
setAttribute(col2, 'class', 'col-lg-4 col-md-4 col-sm-6 col-xs-12');
appendChild(row, col2);

//create form

let form = createElement('form');
setAttribute(form, 'id', 'my-form');
appendChild(col2, form);

//First Name
let fName = createElement('div');
setAttribute(fName, 'class', 'form-group');
appendChild(form, fName);

let fNameLabel = createElement('label');
setAttribute(fNameLabel, 'for', 'fName');
fNameLabel.innerText = 'First Name';
appendChild(fName, fNameLabel);

let fNameInput = createElement('input');
setAttribute(fNameInput, 'type', 'text');
setAttribute(fNameInput, 'class', 'form-control');
setAttribute(fNameInput, 'id', 'fName');
setAttribute(fNameInput, 'aria-describedby', 'fName');
setAttribute(fNameInput, 'placeholder', 'Enter First Name');
appendChild(fName, fNameInput);
//end of first Name

//Last Name
let lName = createElement('div');
setAttribute(lName, 'class', 'form-group');
appendChild(form, lName);

let lNameLabel = createElement('label');
setAttribute(lNameLabel, 'for', 'lName');
lNameLabel.innerText = 'Last Name';
appendChild(lName, lNameLabel);

let lNameInput = createElement('input');
setAttribute(lNameInput, 'type', 'text');
setAttribute(lNameInput, 'class', 'form-control');
setAttribute(lNameInput, 'id', 'lName');
setAttribute(lNameInput, 'aria-describedby', 'lName');
setAttribute(lNameInput, 'placeholder', 'Enter Last Name');
appendChild(lName, lNameInput);
//end of Last Name

//address
let addr = createElement('div');
setAttribute(addr, 'class', 'form-group');
appendChild(form, addr);

let addrLabel = createElement('label');
setAttribute(addrLabel, 'for', 'addr');
addrLabel.innerText = 'Address';
appendChild(addr, addrLabel);

let addrInput = createElement('input');
setAttribute(addrInput, 'type', 'text');
setAttribute(addrInput, 'class', 'form-control');
setAttribute(addrInput, 'id', 'addr');
setAttribute(addrInput, 'aria-describedby', 'addr');
setAttribute(addrInput, 'placeholder', 'Enter Address');
appendChild(addr, addrInput);
//end of address


//pincode
let pin = createElement('div');
setAttribute(pin, 'class', 'form-group');
appendChild(form, pin);

let pinLabel = createElement('label');
setAttribute(pinLabel, 'for', 'pincode');
pinLabel.innerText = 'Pincode';
appendChild(pin, pinLabel);

let pinInput = createElement('input');
setAttribute(pinInput, 'type', 'number');
setAttribute(pinInput, 'class', 'form-control');
setAttribute(pinInput, 'id', 'pincode');
setAttribute(pinInput, 'aria-describedby', 'pincode');
setAttribute(pinInput, 'placeholder', 'Enter Pincode');
appendChild(pin, pinInput);
//end of pincode

//Gender
let genderArray = ['Male', 'Female'];
let genderGrp = createElement('div');
setAttribute(genderGrp, 'class', 'form-group');
appendChild(form, genderGrp);

let genderLabel = createElement('label');
setAttribute(genderLabel, 'for', 'gender');
genderLabel.innerText = 'Gender';
appendChild(genderGrp, genderLabel);


//create radio button for gender
for (let i = 0; i < genderArray.length; i++) {
let radioDiv = createElement('div');
setAttribute(radioDiv, 'class', 'custom-control custom-radio');

let radioInput = createElement('input');
setAttribute(radioInput, 'type', 'radio');
setAttribute(radioInput, 'id', `customRadio${i + 1}`);
setAttribute(radioInput, 'value', genderArray[i]);
setAttribute(radioInput, 'name', 'customRadio');
setAttribute(radioInput, 'class', 'custom-control-input');
appendChild(radioDiv, radioInput);

let radioLabel = createElement('label');
setAttribute(radioLabel, 'class', 'custom-control-label');
setAttribute(radioLabel, 'for', `customRadio${i + 1}`);
radioLabel.innerText = genderArray[i];
appendChild(radioDiv, radioLabel);
appendChild(genderGrp, radioDiv);
}
//end of gender

//create state
let state = createElement('div');
setAttribute(state, 'class', 'form-group');
appendChild(form, state);

let stateLabel = createElement('label');
setAttribute(stateLabel, 'for', 'state');
stateLabel.innerText = 'State';
appendChild(state, stateLabel);

let stateInput = createElement('input');
setAttribute(stateInput, 'type', 'text');
setAttribute(stateInput, 'class', 'form-control');
setAttribute(stateInput, 'id', 'state');
setAttribute(stateInput, 'aria-describedby', 'state');
setAttribute(stateInput, 'placeholder', 'Enter State');
appendChild(state, stateInput);
//end of state

//create country
let country = createElement('div');
setAttribute(country, 'class', 'form-group');
appendChild(form, country);

let countryLabel = createElement('label');
setAttribute(countryLabel, 'for', 'country');
countryLabel.innerText = 'Country';
appendChild(country, countryLabel);

let countryInput = createElement('input');
setAttribute(countryInput, 'type', 'text');
setAttribute(countryInput, 'class', 'form-control');
setAttribute(countryInput, 'id', 'country');
setAttribute(countryInput, 'aria-describedby', 'country');
setAttribute(countryInput, 'placeholder', 'Enter Country');
appendChild(country, countryInput);
//End of country

//type of food
let foodArray = ['Veg', 'Non veg', 'Mexican', 'American', 'Chinese'];
let foodDetails = [];
let errorString = '';
let foodGrp = createElement('div');
setAttribute(foodGrp, 'class', 'form-group');
appendChild(form, foodGrp);

let foodLabel = createElement('label');
setAttribute(foodLabel, 'for', 'choice');
foodLabel.innerText = 'Choice of Food';
appendChild(foodGrp, foodLabel);
//create checkbox for food select
for (let i = 0; i < foodArray.length; i++) {
let checkDiv = createElement('div');
setAttribute(checkDiv, 'class', 'form-check');

let checkInput = createElement('input');
setAttribute(checkInput, 'type', 'checkbox');
setAttribute(checkInput, 'id', `defaultCheck${i + 1}`);
setAttribute(checkInput, 'class', 'form-check-input');
setAttribute(checkInput, 'onclick', `addFoodData(${i + 1})`);
appendChild(checkDiv, checkInput);

let checkLabel = createElement('label');
setAttribute(checkLabel, 'class', 'form-check-label');
setAttribute(checkLabel, 'for', `defaultCheck${i + 1}`);
checkLabel.innerText = foodArray[i];
appendChild(checkDiv, checkLabel);
appendChild(foodGrp, checkDiv);
}

let errorMsg = createElement('small');
setAttribute(errorMsg, 'class', 'error');
appendChild(foodGrp, errorMsg);
//end of food select

let formError = createElement('small');
setAttribute(formError, 'class', 'error');
appendChild(form, formError);

// create submit button

let submit = createElement('button');
setAttribute(submit, 'type', 'submit');
setAttribute(submit, 'class', 'btn btn-secondary');
setAttribute(submit, 'onclick', 'submitform(event)');
submit.innerText = 'Submit';
appendChild(form, submit);
//create break 
let br1 = createElement('br');
appendChild(form, br1);
//create break
let br2 = createElement('br');
appendChild(form, br2);




//create div
let col3 = createElement('div');
setAttribute(col3, 'class', 'col-lg-4 col-md-4 col-sm-3 d-none d-sm-block');
appendChild(row, col3);
// class name table-responsive
let mainDiv = createElement('div');
setAttribute(mainDiv, 'class', 'table-responsive');
appendChild(row, mainDiv);
//create table
let table = createElement('table');
setAttribute(table, 'class', 'table');
appendChild(mainDiv, table);
//table head
let thead = createElement('thead');
appendChild(table, thead);
// table row
let tr = createElement('tr');
appendChild(thead, tr);
// table heading
let th1 = createElement('th');
setAttribute(th1, 'scope', 'col');
th1.innerText = 'First Name';
appendChild(tr, th1);

let th2 = createElement('th');
setAttribute(th2, 'scope', 'col');
th2.innerText = 'Last Name';
appendChild(tr, th2);

let th3 = createElement('th');
setAttribute(th3, 'scope', 'col');
th3.innerText = 'Address';
appendChild(tr, th3);

let th4 = createElement('th');
setAttribute(th4, 'scope', 'col');
th4.innerText = 'Pincode';
appendChild(tr, th4);

let th5 = createElement('th');
setAttribute(th5, 'scope', 'col');
th5.innerText = 'Gender';
appendChild(tr, th5);

let th6 = createElement('th');
setAttribute(th6, 'scope', 'col');
th6.innerText = 'State';
appendChild(tr, th6);

let th7 = createElement('th');
setAttribute(th7, 'scope', 'col');
th7.innerText = 'Country';
appendChild(tr, th7);

let th8 = createElement('th');
setAttribute(th8, 'scope', 'col');
th8.innerText = 'Choice of Food';
appendChild(tr, th8);
// end of table heading

// table content
let tbody = createElement('tbody');
appendChild(table, tbody);
//form content will be appear on table
function buildTbodyUI() {
for (let i = 0; i < tableData.length; i++) {
  let dataTr = createElement('tr');
  let dataTd1 = createElement('td');
  dataTd1.innerText = tableData[i].first_name;
  let dataTd2 = createElement('td');
  dataTd2.innerText = tableData[i].last_name;
  let dataTd3 = createElement('td');
  dataTd3.innerText = tableData[i].addr;
  let dataTd4 = createElement('td');
  dataTd4.innerText = tableData[i].pin_code;
  let dataTd5 = createElement('td');
  dataTd5.innerText = tableData[i].gender;
  let dataTd6 = createElement('td');
  dataTd6.innerText = tableData[i].state;
  let dataTd7 = createElement('td');
  dataTd7.innerText = tableData[i].country;
  let dataTd8 = createElement('td');
  dataTd8.innerText = tableData[i].food;

  appendChildren(dataTr, dataTd1, dataTd2, dataTd3, dataTd4, dataTd5, dataTd6, dataTd7, dataTd8);
  appendChild(tbody, dataTr);
}
}
// form submit
function submitform(event) {
event.preventDefault();
let firstName = document.querySelector('#fName').value;
let lastName = document.querySelector('#lName').value;
let addrValue = document.querySelector('#addr').value;
let pincodeValue = document.querySelector('#pincode').value;
let genderRadio = document.querySelector('input[name="customRadio"]:checked');
let genderValue;
if (genderRadio != null) {
  genderValue = genderRadio.value;
}

let stateValue = document.querySelector('#state').value;
let countryValue = document.querySelector('#country').value;
//error message
formError.innerText = 'Fill all the details and make sure that there are no errors !!';
if (firstName === '' || lastName === '' || addrValue === '' || pincodeValue === '' || genderValue === undefined || stateValue === '' || countryValue === '' || foodDetails.length < 2) {
  formError.innerText = 'Fill all the details and make sure that there are no errors !!';
} else {
  formError.innerText = '';

  let json = { first_name: firstName, last_name: lastName, addr: addrValue, pin_code: pincodeValue, gender: genderValue, state: stateValue, country: countryValue, food: foodDetails.join(', ') };
  tableData = [];
  tableData.push(json);
  buildTbodyUI();
}
}
// only two food must be selected
function addFoodData(i) {
let foodItem = foodArray[i - 1];
let checked = document.getElementById(`defaultCheck${i}`).checked;

if (checked && foodDetails.indexOf(foodItem) === -1) {
  foodDetails.push(foodItem);
}
if (!checked && foodDetails.indexOf(foodItem) !== -1) {
  foodDetails.splice(foodDetails.indexOf(foodItem), 1);
}

if (foodDetails.length < 2) {
  errorString = 'Atleast 2 items should be selected';
} else {
  errorString = '';
}
errorMsg.innerText = errorString;
}

