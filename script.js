let properties = [
  { homeType: "Townhouse", state: "TX", room: 2, price: 120.000, livingSpace: 100 },
  { homeType: "House", state: "AL", room: 2, price: 275.000, livingSpace: 140 },
  { homeType: "Apartment", state: "OK", room: 3, price: 249.000, livingSpace: 180 },
  { homeType: "House", state: "GA", room: 4, price: 380.000, livingSpace: 200 },
  { homeType: "Apartment", state: "NY", room: 4, price: 500.000, livingSpace: 150 },
];

let currentArray = properties;

function generateTable() {
  const table = document.getElementById("propertyTable");

  for (let i = 0; i < properties.length; i++) {
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
}

function updateTable(array) {
  const table = document.getElementById("propertyTable");

  for (let i = table.rows.length - 1; i > 0; i--) {
    document.getElementsByTagName("tr")[i].remove();
  }

  for (let i = 0; i < array.length; i++) {
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
    currentArray.sort((a, b) => {
      if (a.homeType < b.homeType) {
        return -1;
      } else if (a.homeType > b.homeType) {
        return 1;
      } else {
        return 0;
      }
    });
  } else if (selected.value == "Price") {
    currentArray.sort((a, b) => {
      if (a.price < b.price) {
        return -1;
      } else if (a.price > b.price) {
        return 1;
      } else {
        return 0;
      }
    });
  }
  updateTable(currentArray);
}

function filter() {
  let minPrice = document.getElementById("min").value;
  let maxPrice = document.getElementById("max").value;

  if (!minPrice && !maxPrice) {
    alert("Please fill at least one parameter");
    return;
  } else if ((minPrice > maxPrice && minPrice && maxPrice)) {
    alert("Minimum price cannot be higher than maximum price");
    return;
  } else if (minPrice && !maxPrice) {
    function minFilter(property) {
      return property.price >= minPrice;
    }

    currentArray = properties.filter(minFilter);
    updateTable(currentArray);
  } else if (!minPrice && maxPrice) {
    function maxFilter(property) {
      return property.price <= maxPrice;
    }

    currentArray = properties.filter(maxFilter);
    updateTable(currentArray);
  } else {
    function minMaxFilter(property) {
      return property.price >= minPrice && property.price <= maxPrice;
    }

    currentArray = properties.filter(minMaxFilter);
    updateTable(currentArray);
  }
}

window.onload = generateTable;

