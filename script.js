var selectedRow = null

function onFormSubmit() {
    var formData = readFormData();
    if (selectedRow == null)
        insertNewRecord(formData);
    else
        updateRecord(formData)
    resertForm();
}

function readFormData() {
    var formData = {};
    formData["number"] = document.getElementById("number").value;
    formData["date"] = document.getElementById("date").value;
    formData["time"] = document.getElementById("time").value;
    formData["temperature"] = document.getElementById("temperature").value;
    formData["symptoms"] = document.getElementById("symptoms").value;
    return formData;

}

function insertNewRecord(data) {
    var table = document.getElementById("healthTracker").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.number;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.date;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.time;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.temperature;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.symptoms;
    cell5 = newRow.insertCell(5);
    cell5.innerHTML = `<button onClick="onEdit(this)"> Edit </button>
                        <button onClick="onDelete(this)"> Delete </button>`;

}

function resertForm() {
    document.getElementById("number").value = "";
    document.getElementById("date").value = "";
    document.getElementById("time").value = "";
    document.getElementById("temperature").value = "";
    document.getElementById("symptoms").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("number").value = selectedRow.cells[0].innerHTML;
    document.getElementById("date").value = selectedRow.cells[1].innerHTML;
    document.getElementById("time").value = selectedRow.cells[2].innerHTML;
    document.getElementById("temperature").value = selectedRow.cells[3].innerHTML;
    document.getElementById("symptoms").value = selectedRow.cells[4].innerHTML;

}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.number;
    selectedRow.cells[1].innerHTML = formData.date;
    selectedRow.cells[2].innerHTML = formData.time;
    selectedRow.cells[3].innerHTML = formData.temperature;
    selectedRow.cells[4].innerHTML = formData.symptoms;
}

function onDelete(td) {
    if (confirm('Delete Item?')) {
        row = td.parentElement.parentElement;
        document.getElementById("healthTracker").deleteRow(row.rowIndex);
        resertForm();
    }
}

