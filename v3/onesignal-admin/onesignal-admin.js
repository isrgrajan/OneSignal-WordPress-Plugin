window.addEventListener("DOMContentLoaded", () => {
  const helpIcon = document.querySelector(".help");
  const infoDiv = document.querySelector(".information");

  if (helpIcon && infoDiv) {
    helpIcon.addEventListener("click", () => {
      infoDiv.style.display =
        infoDiv.style.display === "none" ? "inherit" : "none";
    });
  }
});

window.addEventListener("DOMContentLoaded", () => {
  const appIdInput = document.querySelector("#appid");
  const apiKeyInput = document.querySelector("#apikey");
  const saveButton = document.querySelector("#save-settings-button");

  if (appIdInput && apiKeyInput && saveButton) {
    function isValidUUID(uuid) {
      const uuidRegex =
        /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
      return uuid.length > 0 && uuidRegex.test(uuid); // Ensure it's not empty and matches regex
    }

    function isValidApiKey(apiKey) {
      const base64Regex =
        /^(?:[A-Za-z0-9+/]{4}){12,}(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/; // At least 48 characters in Base64
      const opaqueTokenRegex = /^os_v[2-9]_app_[2-7a-z]{56,}$/;
      return (
        base64Regex.test(apiKey) || opaqueTokenRegex.test(apiKey)
      ); // Ensure it's not empty and matches regex
    }

    function updateValidationIcon(input, isValid) {
      const icon = input.parentElement.querySelector(".validation-icon");
      if (icon) {
        icon.textContent = isValid ? "✅" : "❌";
      }
    }

    function toggleSaveButton() {
      const appIdValid = isValidUUID(appIdInput.value);
      const apiKeyValid = isValidApiKey(apiKeyInput.value);
      saveButton.disabled = !(appIdValid && apiKeyValid); // Enable button only if both are valid
    }

    appIdInput.addEventListener("input", () => {
      const isValid = isValidUUID(appIdInput.value);
      updateValidationIcon(appIdInput, isValid);
      toggleSaveButton();
    });

    apiKeyInput.addEventListener("input", () => {
      const isValid = isValidApiKey(apiKeyInput.value);
      updateValidationIcon(apiKeyInput, isValid);
      toggleSaveButton();
    });

    // Initial state on page load
    toggleSaveButton();
  }
});
