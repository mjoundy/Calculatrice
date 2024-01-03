let ecran=document.getElementById("ecran");

function appendtodisplay(input) {
  ecran.value += input;
}

function calculate(){
  try {
    ecran.value = eval(ecran.value)
  } catch {
    ecran.value = "error"
  }
}

function reset() {
  ecran.value = "";
}

function deleteLastInput() {
  if(ecran.value === "error") {
    reset()
  }
  let result = ecran.value;
  result = result.slice(0, -1);
  ecran.value = result;
}
