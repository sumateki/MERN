
// Function to fetch user details by ID
function fetchUserDetails(userId) {
  var url = 'http://www.filltext.com/?rows=1&id=' + userId + '&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D';

  return fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log('API Response for user ID ' + userId + ':', data);
      // Return the details for the first user (there should be only one user with the given ID)
      return data[0];
    });
}


// Function to handle the click event on a row
function handleRowClick(row) {
  // Remove the 'active' class from all rows
  document.querySelectorAll("#table-data tr").forEach(function (row) {
    row.classList.remove("active");
  });

  // Add the 'active' class to the clicked row
  row.classList.add("active");

  // Display the info-content section
  document.getElementById("info-content").style.display = "block";

  // Get user details from the clicked row
  var userId = row.querySelector(".column1").textContent; // Assuming ID is in the first column
  fetchUserDetails(userId).then(data => {
    console.log('Data received:', data);
    var userInfo = data.firstName + ' ' + data.lastName;
    var description = data.description;
    var address = data.address.streetAddress + ', ' + data.address.city + ', ' + data.address.state + ' ' + data.address.zip;

    // Update the selected user information in the details box
    document.querySelector("#info-content > div:first-child").textContent = "User selected: " + userInfo;
    document.querySelector("#info-content > div:nth-child(2)").textContent = "Description: " + description;
    document.querySelector("#info-content > div:nth-child(3)").textContent = "Address: " + address;
    
    })
    .catch(error => console.error('Error fetching user details:', error));
}


document.addEventListener("DOMContentLoaded", function () {
  // Get the initial table rows
  var rows = document.querySelectorAll("#table-data tr");

  // Display only the first 5 rows initially
  for (var i = 0; i < rows.length; i++) {
    if (i < 5) {
      rows[i].style.display = "table-row";
    } else {
      rows[i].style.display = "none";
    }
  }

  // Add onclick event to each row
  rows.forEach(function (row) {
    row.addEventListener("click", function () {
      // Call the function to handle the click event
      handleRowClick(row);
    });
  });

  // Add event listener for the search box
  var searchBox = document.getElementById("search-box");
  searchBox.addEventListener("input", function () {
    // Call the function to handle the search
    handleSearch();
  });

  // Fetch data from the API and update the table
  fetchDataAndUpdateTable();
});

// Function to fetch data from the API and update the table
function fetchDataAndUpdateTable() {
  var url = 'http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D';

  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log('API Data:', data);
      // Update the table with the fetched data
      updateTable(data);
    })
    .catch(error => console.error('Error fetching data:', error));
}

// Function to update the table with the fetched data
function updateTable(data) {
  var tableData = document.getElementById("table-data");
  tableData.innerHTML = ''; // Clear existing table data

  for (var i = 0; i < data.length; i++) {
    var row = document.createElement("tr");
    row.className = "data-row";

    // Create and append table cells
    var columns = ["id", "firstName", "lastName", "email", "phone"];
    for (var j = 0; j < columns.length; j++) {
      var cell = document.createElement("td");
      cell.className = "column" + (j + 1);
      cell.textContent = data[i][columns[j]];
      row.appendChild(cell);
    }

    // Append the row to the table
    tableData.appendChild(row);
  }

  // Display only the first 5 rows initially
  var rows = document.querySelectorAll("#table-data tr");
  for (var i = 0; i < rows.length; i++) {
    if (i < 5) {
      rows[i].style.display = "table-row";
    } else {
      rows[i].style.display = "none";
    }
  }

  // Add onclick event to each row
  rows.forEach(function (row) {
    row.addEventListener("click", function () {
      // Call the function to handle the click event
      handleRowClick(row);
    });
  });
}

// Function to handle the search
function handleSearch() {
  var searchBox = document.getElementById("search-box");
  var searchTerm = searchBox.value.toLowerCase();

  // Show or hide rows based on the search term
  var rows = document.querySelectorAll("#table-data tr");
  for (var i = 0; i < rows.length; i++) {
    var rowData = rows[i].textContent.toLowerCase();
    if (rowData.includes(searchTerm)) {
      rows[i].style.display = "table-row";
    } else {
      rows[i].style.display = "none";
    }
  }
}

