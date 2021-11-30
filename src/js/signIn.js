function signInValidation() {
  const username = document.getElementById("u-name").value;
  const password = document.getElementById("pass_text1").value;

  if (username == "" || password == "") {
    document.getElementById("invalid").innerText =
      "Invalid Username or Password!";
    document.getElementById("invalid").style.display = "inline";
  } else {
    const usersData = JSON.parse(localStorage.getItem("user"));

    for (i = 0; i < usersData.length; i++) {
      if (
        username == usersData[i].username &&
        password == usersData[i].password
      ) {
        document.getElementById("invalid").style.display = "none";
        window.location.href = "game.html";
        break;
      } else {
        document.getElementById("invalid").innerText =
          "Invalid Username or Password!";
        document.getElementById("invalid").style.display = "inline";
      }
    }
  }
}
