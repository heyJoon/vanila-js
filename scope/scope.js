let len = 3;
let i;
for (i = 0; i < len; i++) {
  document.getElementById("div " + i).addEventListener("click", () => {
    alert("you clicked div " + i);
  });
}
