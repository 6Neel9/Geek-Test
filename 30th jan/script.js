var btn = document.getElementById("btn");
var container = document.getElementById("cont");
var search = document.getElementById("search");

btn.addEventListener("click", function () {
  var url = `http://universities.hipolabs.com/search?country=${search.value}`;
    search.value = search.value.replace(/ /g,"+")
  console.log(search.value)
  fetch(url)
    .then((data) => {
      return data.json();
    })
    .then((fetchData) => {
        console.log(fetchData);
      for (var i = 0; i < fetchData.length; i++) {
        var tr = document.createElement("tr");
        var td = document.createElement("td");
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");

        td.innerText = fetchData[i].name;
        td1.innerText = fetchData[i]["web_pages"];
        td2.innerText = fetchData[i].domains[0];
        tr.appendChild(td2);
        tr.appendChild(td);
        tr.appendChild(td1);
        container.appendChild(tr);
      }
    })
    .catch(() => {
      console.log("API fetch failed");
    });
});
