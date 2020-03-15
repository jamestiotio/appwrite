(function(window) {
  "use strict";

  window.ls.container.get("view").add({
    selector: "data-forms-switch",
    controller: function(element) {
      let input = window.document.createElement("input");
      input.type = "checkbox";
      input.className = "button switch";

      let syncA = function() {
        element.value = input.checked ? "true" : "false";
      };

      let syncB = function() {
        input.checked = element.value === "true";
      };

      input.addEventListener("input", syncA);
      input.addEventListener("change", syncA);

      element.addEventListener("input", syncB);
      element.addEventListener("change", syncB);

      syncA();

      element.parentNode.insertBefore(input, element);
    }
  });
})(window);
