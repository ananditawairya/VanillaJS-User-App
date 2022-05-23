console.log("i am working");
let addRecords = (event) => {
  let table = document.querySelector(".my-table");
  let fname = document.getElementById("firstname_value").value;
  let lname = document.getElementById("lastname_value").value;
  let mob = document.getElementById("mobile_value").value;
  let email = document.getElementById("email_value").value;
  event.preventDefault();
  let letters = /^[a-zA-Z]+$/i;
  console.log(fname, lname, mob, email, mob.length);
  try {
    if (!fname.match(letters)) {
      alert("Please enter alphabets only in firstname");
    } else if (!lname.match(letters)) {
      alert("Please enter alphabets only in lastname");
    } else if (mob.length > 10 || mob.length < 10) {
      alert("Please enter a valid 10 digit mobile no");
    } else if (
      table.rows.length > 1 &&
      !userValidation(fname, lname, mob, email, table)
    ) {
      alert("Duplicate Email ID, Please enter a new valid one!");
    } else {
      if (table.classList.contains("hidden")) table.classList.remove("hidden");
      let row = table.insertRow(table.rows.length);
      let fname_cell = row.insertCell(0);
      let lname_cell = row.insertCell(1);
      let mob_cell = row.insertCell(2);
      let email_cell = row.insertCell(3);
      fname_cell.innerHTML = fname;
      lname_cell.innerHTML = lname;
      mob_cell.innerHTML = mob;
      email_cell.innerHTML = email;
    }
  } catch (error) {
    console.error(" Error :  ", error);
  }
};

const onPageLoad = () => {
  let table = document.querySelector(".my-table");
  if (table.rows.length === 1) {
    table.classList.add("hidden");
  }
};

const userValidation = (fname, lname, mob, email, table) => {
  let trValues = document.querySelectorAll(`.my-table tbody tr`);
  for (let i = 1; i < trValues.length; i++) {
    if (trValues[i].cells[3].innerHTML === email) return false;
  }
  return true;
};
