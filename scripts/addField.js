document.getElementById("add-time").addEventListener('click', cloneField)

function cloneField() {
  const fields = document.querySelector(".schedule-item").cloneNode(true)

  const fieldContainer = fields.querySelectorAll('input')

  // clear field content before cloning
  fieldContainer.forEach(function(field) {
    field.value = ""
  })

  document.getElementById("schedule-items").appendChild(fields)
}