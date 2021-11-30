var pass1 = document.getElementById("pass_text1");
var pass2 = document.getElementById("pass_text2");

function password_validation() {
  if (pass1.value !== pass2.value) {
    document.getElementById("pwdError").innerText = "Passwords should match";
    document.getElementById("pwdError").style.display = "inline";
  } else {
    document.getElementById("pwdError").style.display = "none";
  }
}
const users = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : [];

function set_local_storage(e) {
  var userName = document.getElementById("u-name").value;
  var userEmail = document.getElementById("u-email").value;

  // key user  value
  if (
    userName != "" &&
    userEmail != "" &&
    pass1.value != "" &&
    pass2.value != ""
  ) {
    if (pass1.value !== pass2.value) {
      e.preventDefault();
      document.getElementById("pwdError").innerText = "Passwords should match";
      document.getElementById("pwdError").style.display = "inline";
    } else {
      users.push({
        username: userName,
        password: pass1.value,
      });
      localStorage.setItem("user", JSON.stringify(users));
      e.preventDefault();

      // view redirect text after signup
      form.classList.remove("show");
      form.classList.add("hide");
      redirect.classList.remove("hide");
      redirect.classList.add("show");

      // redirect to index page after specific time
      setTimeout(function pageRedirect() {
        redirect.classList.remove("show");
        redirect.classList.add("hide");
        window.location.href = "signIn.html";
      }, 2500);
    }
  }
}
