// function add line to the table
function addTable() {

    //definitions the variables and getting the data
    let table = document.getElementById("myTable");
    let bookName = document.getElementById("bookName").value; 
    let authorName = document.getElementById("authorName").value;
    let bookPrice = document.getElementById("bookPrice").value;
    let bookIsbn = document.getElementById("bookIsbn").value;
    let bookCategory = document.getElementById("bookCategory").value;
    

    let tableSize = table.rows.length;
    let row = table.insertRow(tableSize);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);  
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    let cell6 = row.insertCell(5);
    let cell7 = row.insertCell(6);
    let cell8 = row.insertCell(7);

    row.id = tableSize; // add id in the element created

    //btn to remove line
    let btnCode = "<button class='remove-btn' onclick='removeTable(this)'>Remover</button>";

    //adding the data to the table
    cell1.innerHTML = tableSize;
    cell2.innerHTML = bookName;
    cell3.innerHTML = authorName;
    cell4.innerHTML = bookPrice;
    cell5.innerHTML = bookIsbn;
    cell6.innerHTML = btnCode;
    cell7.innerHTML = bookCategory;
    cell8.innerHTML = btnCode;

    // clearing data entry fields
    document.getElementById("bookName").value = "";
    document.getElementById("authorName").value = "";
    document.getElementById("bookPrice").value = "";
    document.getElementById("bookIsbn").value = "";
    document.getElementById("bookCategory").value = "";

    //return false to not reload page
    return false;

}

// function remove line
function removeTable(id) {
    let row = id.parentNode.parentNode.id; //get the id of the grandfather from btn
    row = document.getElementById(row); //getting row element by id
    row.parentNode.removeChild(row);

    //return false to not reload page
    return false;
    
}