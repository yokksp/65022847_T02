function highlight(id, other) {
  let blur = document.getElementById(other);
  let active = document.getElementById(id);
  blur.style.background = "none";
  active.style.background = "yellow";
}

function submit() {
  display = document.getElementById("display");
  var output = "";
  var name = document.getElementById("name").value;
  var surname = document.getElementById("surname").value;
  var dateOfBirth = document.getElementById("dateOfBirth").value;
  var language = document.getElementById("language").value;
  console.log(name, surname, dateOfBirth, language);
  if (name == "" || surname == "" || dateOfBirth == "" || language == "") {
    display.style.color = "red";

    if (name == "") {
      output += "Insert Name <br>";
    }
    if (surname == "") {
      output += "Insert Surname <br>";
    }
    if (dateOfBirth == "") {
      output += "Insert Birth Date <br>";
    }
    if (language == "") {
      output += "Select Language <br>";
    }
  } else {
    display.style.color = "green";
    output += name + "," + surname + "," + dateOfBirth + "," + language;
  }

  display.innerHTML = output;
}