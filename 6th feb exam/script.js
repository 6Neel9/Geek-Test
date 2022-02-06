let header = document.getElementById("header");
let description = document.getElementById("descripton");
let AddBlog = document.getElementById("addBlog");
let con = document.getElementById("container");
AddBlog.addEventListener("click", () => {
  if (header.value != "" && description.value != "") {
    let div1 = document.createElement("div");
    div1.className = "blogContainer";
    let h1 = document.createElement("h1");
    h1.className = "headers";
    h1.innerText = header.value;
    let p = document.createElement("p");
    p.className = "para";
    p.innerText = description.value;
    let div2 = document.createElement("div");
    div2.className = "buttonsConatiners";
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    let EditBtn = document.createElement("button");
    EditBtn.innerText = "Edit";
    div2.append(deleteBtn, EditBtn);
    div1.append(h1, p, div2);
    con.appendChild(div1);
    header.value = "";
    description.value = "";

    deleteBtn.addEventListener("click", () => {
      con.removeChild(div1);
    });
    EditBtn.addEventListener("click", () => {
      header.value = h1.innerText;
      description.value = p.innerText;
      let updateBtn = document.createElement("button");
      updateBtn.innerText = "update";
      div2.appendChild(updateBtn);
      AddBlog.disabled = true;

      updateBtn.addEventListener("click", () => {
        h1.innerText = header.value;
        p.innerText = description.value;
        header.value = "";
        description.value = "";
        div2.removeChild(updateBtn);
        AddBlog.disabled = false;
      });
    });
  }
});
