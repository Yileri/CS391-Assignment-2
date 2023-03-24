let properties = [
  {homeType: "Townhouse", state: "TX", room: 2, price: 120.000, livingSpace: 100},
  {homeType: "House", state: "AL", room: 2, price: 275.000, livingSpace: 140},
  {homeType: "Apartment", state: "OK", room: 3, price: 249.000, livingSpace: 180},
  {homeType: "House", state: "GA", room: 4, price: 380.000, livingSpace: 200},
  {homeType: "Apartment", state: "NY", room: 4, price: 500.000, livingSpace: 150},
];

function generateTable() {
  /*
  const table = document.createElement("table");

  const thead = table.createTHead();
  let row = thead.insertRow();

  const th1 = document.createElement("th");
  const text1 = document.createTextNode("Home Type");
  th1.appendChild(text1);
  row.appendChild(th1);

  const th2 = document.createElement("th");
  const text2 = document.createTextNode("State");
  th2.appendChild(text2);
  row.appendChild(th2);

  const th3 = document.createElement("th");
  const text3 = document.createTextNode("Room");
  th3.appendChild(text3);
  row.appendChild(th3);

  const th4 = document.createElement("th");
  const text4 = document.createTextNode("Price ($)");
  th4.appendChild(text4);
  row.appendChild(th4);

  const th5 = document.createElement("th");
  const text5 = document.createTextNode("Living Space (m^2)");
  th5.appendChild(text5);
  row.appendChild(th5);
  */

  const table = document.getElementById("propertyTable");
  
  for(let i = 0; i < properties.length; i++) {
    let row = table.insertRow();
    
    let homeTypeCell = row.insertCell(0);
    let homeText = document.createTextNode(properties[i].homeType);
    homeTypeCell.appendChild(homeText);
    
    let stateCell = row.insertCell(1);
    let stateText = document.createTextNode(properties[i].state);
    stateCell.appendChild(stateText);
    
    let roomCell = row.insertCell(2);
    let roomText = document.createTextNode(properties[i].room);
    roomCell.appendChild(roomText);
    
    let priceCell = row.insertCell(3);
    let priceText = document.createTextNode(properties[i].price);
    priceCell.appendChild(priceText);
    
    let livingSpaceCell = row.insertCell(4);
    let spaceText = document.createTextNode(properties[i].livingSpace);
    livingSpaceCell.appendChild(spaceText);
  }
  //const tableDiv = document.getElementById("table1");
  //document.body.insertBefore(table, tableDiv);
}

function updateTable(array) {
  const table = document.getElementById("propertyTable");

  for (let i = table.rows.length-1; i > 0; i--) {
    document.getElementsByTagName("tr")[i].remove();
  }

  for(let i = 0; i < array.length; i++) {
    let row = table.insertRow();
    
    let homeTypeCell = row.insertCell(0);
    let homeText = document.createTextNode(array[i].homeType);
    homeTypeCell.appendChild(homeText);
    
    let stateCell = row.insertCell(1);
    let stateText = document.createTextNode(array[i].state);
    stateCell.appendChild(stateText);
    
    let roomCell = row.insertCell(2);
    let roomText = document.createTextNode(array[i].room);
    roomCell.appendChild(roomText);
    
    let priceCell = row.insertCell(3);
    let priceText = document.createTextNode(array[i].price);
    priceCell.appendChild(priceText);
    
    let livingSpaceCell = row.insertCell(4);
    let spaceText = document.createTextNode(array[i].livingSpace);
    livingSpaceCell.appendChild(spaceText);
  }
}

function sort() {
  let selected = document.getElementById("sort");
  if (selected.value == "Home Type") {
    properties.sort((a, b) => {
      if (a.homeType < b.homeType) {
        return -1;
      } else if (a.homeType > b.homeType) {
        return 1;
      } else {
        return 0;
      }
    });
  } else if (selected.value == "Price") {
    properties.sort((a, b) => {
      if (a.price < b.price) {
        return -1;
      } else if (a.price > b.price) {
        return 1;
      } else {
        return 0;
      }
    });
  }
  updateTable(properties);
}

function filter() {
  let minPrice = document.getElementById("min").value;
  let maxPrice = document.getElementById("max").value;

  if (minPrice > maxPrice) {
    alert("Minimum price cannot be higher than maximum price");
    return;
  } else {
    function minMaxFilter(property) {
      return property.price >= minPrice && property.price <= maxPrice;
    }

    let filtered = properties.filter(minMaxFilter);
    updateTable(filtered);
  }
}

window.onload = generateTable;

