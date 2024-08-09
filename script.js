var selectedRow = null

function onFormSubmit(e) {
	event.preventDefault();
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		}
        else{
            updateRecord(formData);
		}
        resetForm();    
}

//Retrieve the data
function readFormData() {
    var formData = {};
    formData["ismingiz"] = document.getElementById('ismingiz').value;
    formData["familyangiz"] = document.getElementById('familyangiz').value;
    formData["yoshingiz"] = document.getElementById("yoshingiz").value;
    
    return formData;
}

//Insert the data
function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.ismingiz;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.familyangiz;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.yoshingiz;
    cell4 = newRow.insertCell(3);
	// 	cell4.innerHTML = data.perPrice;
    // cell4 = newRow.insertCell(4);
        cell4.innerHTML = `<button onClick="onEdit(this)" class="btn">Edit</button> <button onClick="onDelete(this)" class="btn1">Delete</button>`;
}

//Edit the data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("ismingiz").value = selectedRow.cells[0].innerHTML;
    document.getElementById("familyangiz").value = selectedRow.cells[1].innerHTML;
    document.getElementById("yoshingiz").value = selectedRow.cells[2].innerHTML;
   
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.ismingiz;
    selectedRow.cells[1].innerHTML = formData.familyangiz;
    selectedRow.cells[2].innerHTML = formData.yoshingiz;
    
}

//Delete the data
function onDelete(td) {
    if ('Malumotlar ocirilayapti') {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        resetForm();
    }
}

//Reset the data
function resetForm() {
    document.getElementById("ismingiz").value = '';
    document.getElementById("familyangiz").value = '';
    document.getElementById("yoshingiz").value = '';
   
    selectedRow = null;
}