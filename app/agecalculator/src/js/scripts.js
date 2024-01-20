function calculateAge() {
  // Get the input value (date of birth)
  var dob = document.getElementById('dob').value;

  // Calculate the age
  var today = new Date();
  var birthDate = new Date(dob);
  var ageInMilliseconds = today - birthDate;

  var years = Math.floor(ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000));
  var months = Math.floor((ageInMilliseconds % (365.25 * 24 * 60 * 60 * 1000)) / (30.44 * 24 * 60 * 60 * 1000));
  var days = Math.floor((ageInMilliseconds % (30.44 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));
  var hours = Math.floor((ageInMilliseconds % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
  var minutes = Math.floor((ageInMilliseconds % (60 * 60 * 1000)) / (60 * 1000));

  // Display the result
  var resultElement = document.getElementById('result');
  resultElement.innerHTML = "Your age is: " + years + " years, " + months + " months, " + days + " days, " + hours + " hours, and " + minutes + " minutes.";
}