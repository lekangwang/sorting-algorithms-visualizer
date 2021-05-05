"use strict";

//toggles the disable property of all UI elements (inputs, buttons) when visualization is happening
function toggleControls() {
  for (let component of uiComponentsArr) {
    component.disabled = component.disabled ? false : true;
  }
}
