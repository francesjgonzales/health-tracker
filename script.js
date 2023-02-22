//Global variables
var selectedRow = null; 

//to display current 'number' on page load or after submit
var i = 0; 
i++;
document.getElementById('number').value = i - 1;


//create uid
//create uid
var bdayId = document.getElementById("date").value; //get the value 
var bdayString = bdayId.substring(2, 4);  //get the last 2 digit of birthyEAR
var bdayCode = bdayString.codePointAt(0); //get the code point at the first character

var age = new Date().getFullYear() - bdayId.substring(0,4); //get patient's current age

var dateUnique=(new Date().getTime()).toString(16);
var dateUID = dateUnique.slice(7,10); //slice to 6th and 7th char

var stringId = document.getElementById("pname").value; //get the value
var strId = stringId.substring(0,2); //convert to
var strUniqueId = strId.charCodeAt(1); //

//final UID
var uid = bdayString + '-' + bdayCode + '-' + dateUID + '-' + strUniqueId + '-' + age;


//adding localStorage
function onFormSubmit() {
    var formData = readFormData();
    if (selectedRow == null)
        insertNewRecord(formData);
    else
        updateRecord(formData)
    resertForm();

    var formData_serialised = JSON.stringify(formData);
    localStorage.setItem("formData", formData_serialised);

    var formData_deserialised = JSON.parse(localStorage.getItem("formData"));
    console.log(formData_deserialised)
}


function readFormData() {
    var formData = {};
    formData["number"] = document.getElementById("number").value;
    formData["pname"] = document.getElementById("pname").value;
    formData["date"] = document.getElementById("date").value;
    formData["time"] = document.getElementById("time").value;
    formData["temperature"] = document.getElementById("temperature").value;
    formData["symptoms"] = document.getElementById("symptoms").value;
    formData["patientId"] = document.getElementById("patientId").value;
    return formData;
}


function insertNewRecord(data) {
    var table = document.getElementById("healthTracker").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);

    i++;
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = document.getElementById('number').value = i - 1;


    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.pname;
    
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.date;
    
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.time;

    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.temperature;
    
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.symptoms;

    //create uid
    var bdayId = document.getElementById("date").value; //get the value 
    var bdayString = bdayId.substring(2, 4);  //get the last 2 digit of birthyEAR
    var bdayCode = bdayString.codePointAt(0); //get the code point at the first character

    var age = new Date().getFullYear() - bdayId.substring(0,4); //get patient's current age

    var dateUnique=(new Date().getTime()).toString(16);
    var dateUID = dateUnique.slice(7,10); //slice to 6th and 7th char

    var stringId = document.getElementById("pname").value; //get the value
    var strId = stringId.substring(0,2); //convert to
    var strUniqueId = strId.charCodeAt(1); //

    //final UID
    var uid = bdayString + '-' + bdayCode + '-' + dateUID + '-' + strUniqueId + '-' + age;

    cell7 = newRow.insertCell(6);
    cell7.innerHTML = uid;


    /* UID CODE based on Date */
    /* var uniqueNumber=(new Date().getTime()).toString(16);
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = document.getElementById('patientId').value = uniqueNumber; */
    /* console.log(uniqueNumber);    */ 
    
    
    cell8 = newRow.insertCell(7);
    cell8.innerHTML = `<button onClick="onEdit(this)"> Edit </button>
                        <button onClick="onDelete(this)"> Delete </button>`;

}

function resertForm() {
    document.getElementById("number").value = "";
    document.getElementById("pname").value = "";
    document.getElementById("date").value = "";
    document.getElementById("time").value = "";
    document.getElementById("temperature").value = "";
    document.getElementById("symptoms").value = "";
    document.getElementById("patientId").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("number").value = selectedRow.cells[0].innerHTML;
    document.getElementById("pname").value = selectedRow.cells[1].innerHTML;
    document.getElementById("date").value = selectedRow.cells[2].innerHTML;
    document.getElementById("time").value = selectedRow.cells[3].innerHTML;
    document.getElementById("temperature").value = selectedRow.cells[4].innerHTML;
    document.getElementById("symptoms").value = selectedRow.cells[5].innerHTML;
    document.getElementById("patientId").value = selectedRow.cells[6].innerHTML;
    
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.number;
    selectedRow.cells[1].innerHTML = formData.pname;
    selectedRow.cells[2].innerHTML = formData.date;
    selectedRow.cells[3].innerHTML = formData.time;
    selectedRow.cells[4].innerHTML = formData.temperature;
    selectedRow.cells[5].innerHTML = formData.symptoms;
    selectedRow.cells[6].innerHTML = formData.patientId;
}

function onDelete(td) {
    if (confirm('Delete Item?')) {
        row = td.parentElement.parentElement;
        document.getElementById("healthTracker").deleteRow(row.rowIndex);
        resertForm();
    }
}


