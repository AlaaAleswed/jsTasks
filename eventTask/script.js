const demo = document.getElementById("demo");
demo.addEventListener("mouseover", () => {
  demo.style.backgroundColor = "yellow";
  demo.style.fontWeight = "bold";
});


function showFlag() {
  const code = document.getElementById("country").value;
  const img = document.getElementById("flagImage");
  if (code === "") {
    img.style.display = "none";
    return;
  }
  img.src = "assets/" + code + ".png";
  img.style.display = "block";
}


function check() {
  const pass = document.getElementById("pass").value;
  const confirm = document.getElementById("confirm").value;
  document.getElementById("lengthError").textContent = "";
  document.getElementById("matchError").textContent = "";
  if (pass.length > 0 && pass.length < 6) {
    document.getElementById("lengthError").textContent = "Too short";
  }
  if (confirm.length > 0 && pass !== confirm) {
    document.getElementById("matchError").textContent = "Do not match";
  }
}
document.getElementById("pass").addEventListener("input", check);
document.getElementById("confirm").addEventListener("input", check);


function toggleContent(id, element) {
  const content = document.getElementById(id);
  if (content.style.display === "none" || content.style.display === "") {
    content.style.display = "block";
    element.textContent = "Hide";
  } else {
    content.style.display = "none";
    element.textContent = "Show";
  }
}


function changeFont() {
  const font = document.getElementById("fontSelect").value;
  document.getElementById("editor").style.fontFamily = font;
}
function changeSize() {
  const size = document.getElementById("fontSize").value;
  document.getElementById("editor").style.fontSize = size;
}
function toggleStyle(style) {
  const editor = document.getElementById("editor");
  if (style === "bold") {
    editor.style.fontWeight =
      editor.style.fontWeight === "bold" ? "normal" : "bold";
  }
  if (style === "italic") {
    editor.style.fontStyle =
      editor.style.fontStyle === "italic" ? "normal" : "italic";
  }
  if (style === "underline") {
    editor.style.textDecoration =
      editor.style.textDecoration === "underline" ? "none" : "underline";
  }
}
