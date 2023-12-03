const height = document.getElementById('height');
const weight = document.getElementById('weight');
const h_unit = document.querySelector("#h-unit");
const w_unit = document.querySelector("#w-unit");


function calculateBmi() {


   if (height.value == "" || weight.value == "" || isNaN(height.value) || isNaN(weight.value)) {
      alert("Enter height and weight values");

   }else {

      let bmi;
      let selectedHeight = h_unit.value;
      let selectedWeight = w_unit.value;


      if (selectedHeight == "m" && selectedWeight == "kg") {


         bmi = (weight.value / (height.value * height.value)).toFixed(2);
         document.getElementById('bmi').innerHTML = bmi;


      } else if (selectedHeight == "inches" && selectedWeight == "pounds") {


         bmi = (weight.value / (height.value * height.value) * 703).toFixed(2);
         document.getElementById('bmi').innerHTML = bmi;

      } 
      else {

         alert("No perfect match of units is selected");
         return;
      }

      if (bmi <= 18.4) {
         document.getElementById('condition').innerText = "Under weight";
      }
      else if (bmi >= 18.5 && bmi <= 24.9) {
         document.getElementById('condition').innerText = "Normal";
      }
      else if (bmi >= 25.0 && bmi <= 39.9) {
         document.getElementById('condition').innerText = "Over weight";
      }
      else {
         document.getElementById('condition').innerText = "Obese";
      }



   }

}


h_unit.addEventListener('change', calculateBmi);
w_unit.addEventListener('change', calculateBmi);
document.getElementById("calc").addEventListener('click', calculateBmi);



function reset() {
   height.value = "";
   weight.value = "";
   h_unit.value = "";
   w_unit.value = "";
   document.getElementById('bmi').innerHTML = "";
   document.getElementById('condition').innerText = "";
}

document.getElementById("clear").addEventListener('click', reset);




