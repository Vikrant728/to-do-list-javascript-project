document.addEventListener("DOMContentLoaded", function () {
  const taskinput = document.getElementById("taskinput");
  const addtaskbtn = document.getElementById("addtaskbtn");
  const tasklist = document.getElementById("tasklist");

  addtaskbtn.addEventListener("click", function () {
    if (taskinput.value.trim() === "") {
      alert("Please enter text");
      return;
    }

    addtask(taskinput.value.trim());
    taskinput.value = "";
  });

  function addtask(tasktext) {
    const li = document.createElement("li");

    li.innerHTML = 
    `
      <span>${tasktext}</span>
      <div>
        <button class="edit-btn">Edit</button>
        <button class="delete-btn">Delete</button>
      </div>
    `;

    tasklist.appendChild(li);

    li.querySelector(".edit-btn").addEventListener("click", function () {
      const newtext = prompt("Edit your task:", tasktext);
      if (newtext && newtext.trim() !== "") {
        li.querySelector("span").innerText = newtext.trim();
      }
    });

    li.querySelector(".delete-btn").addEventListener("click", function () {
      li.remove();
    });
  }
});
