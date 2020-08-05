
const calculateButton = document.getElementById("calculate");
const resetButton = document.getElementById("reset");
const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");
const resultArea = document.getElementById("result");


const calculateBMI = () => {

  const height = +heightInput.value;
  const weight = +weightInput.value;
  const bmi = weight / Math.pow(height, 2);
  
  if (isNaN(bmi)) return;

  const card = document.createElement("ion-card");
  card.innerHTML = `
    <ion-card-content>
      <h2>${bmi.toFixed(1)}</h2>
    </ion-card-content>
  `;
  
  resultArea.innerHTML = "";
  resultArea.appendChild(card);
}


const resetInputs = () => {
  heightInput.value = "";
  weightInput.value = "";
  resultArea.innerHTML = "";
}


calculateButton.addEventListener("click", calculateBMI);
resetButton.addEventListener("click", resetInputs);