document.getElementById("mostrarFormulario").addEventListener("click", function() {
  console.log("clique no botao");
  var formularioContainer = document.getElementById("formularioContainer");
  formularioContainer.style.display = formularioContainer.style.display === "none" ? "flex" : "none";
});