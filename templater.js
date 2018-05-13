const Templater = {
  run: function () {
    const customBootstrapButton = document.querySelectorAll('bootstrap_button');
    const arrCustomBootstrapButton = Array.from(customBootstrapButton);

    for (let i = 0; i < arrCustomBootstrapButton.length; i++) {
      const defaultBootstrapSubmitButtonText = "Some Text";

      arrCustomBootstrapButton[i].outerHTML = '<button class="btn btn-default">' + defaultBootstrapSubmitButtonText + '</button>';

    }
  }
};