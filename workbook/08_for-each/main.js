window.addEventListener('DOMContentLoaded', function () {
  // best practice is to make separate functions for each
  // component, in case you have a lot of event handlers
  bindButton();
});

function bindButton() {
  const button = document.getElementById("change-wisdom");
  const input = document.getElementById("wisdom-input");
  const container = document.getElementById("wisdom-container");
  button.onclick = function () {
    // Template strings can be multiline!
    const wisdom = `<p>
      ${input.value}
    </p>`;
    container.innerHTML = wisdom;
    input.value = "";
  };
}