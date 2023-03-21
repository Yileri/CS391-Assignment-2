let properties = [
    {homeType: "Townhouse", state: "TX", room: 2, price: 120.000, livingSpace: 100},
    {homeType: "House", state: "AL", room: 2, price: 275.000, livingSpace: 140},
    {homeType: "Apartment", state: "OK", room: 3, price: 249.000, livingSpace: 180},
    {homeType: "House", state: "GA", room: 4, price: 380.000, livingSpace: 200},
    {homeType: "Apartment", state: "NY", room: 4, price: 500.000, livingSpace: 150},
];

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
    }
}

