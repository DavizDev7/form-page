const btn = document.getElementById("btn");
const form = document.getElementById("form");
const pass = document.getElementById("password");
const Cpass = document.getElementById("Cpassword");
const Warn = (cont) => {
  let elm = document.getElementById("warn");
  elm.style.display = "flex";
  elm.innerHTML = `<i class="bi bi-exclamation-triangle-fill"></i>  ${cont}<i class="bi bi-exclamation-triangle-fill"></i>`;
};
function send() {
  Warn("erro");
}
