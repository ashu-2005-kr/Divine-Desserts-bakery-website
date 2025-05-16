function showForm(formId) {
  const forms = document.querySelectorAll(".input-group");
  forms.forEach(form => form.classList.remove("active"));
  document.getElementById(formId).classList.add("active");
}








