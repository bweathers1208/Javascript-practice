//from Udemy class "The Complete 2020 Web Development Bootcamp," section 108

function bmiCalculator(weight, height) {
  var calc = weight / (height * height);
  return calc;
  }
 
 var bmi = bmiCalculator(65, 1.8);
 //result should be around 20
 
 console.log(bmi);
 //check what is logged in console to verify function is accurate
