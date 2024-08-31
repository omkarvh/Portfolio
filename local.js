//graphs
var xValues = ["Html", "Css", "Bootstrap 5", "Vanilla Js", "Jquery",""];
var yValues = [65, 48, 75, 55, 45,0];
var barColors = ["orange", "skyblue","blue","orange","blue"];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "Front End technologies "
    }
  }
});

var x2Values = ["Node js", "Express", "Git", "Postgre SQL", "My SQL",""];
var y2Values = [55, 65, 75, 68, 45,0];
var barColors = ["Green", "white","orange","blue","brown"];

new Chart("myChart2", {
  type: "bar",
  data: {
    labels: x2Values,
    datasets: [{
      backgroundColor: barColors,
      data: y2Values
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "Back End technologies and Data base"
    }
  }
});

//graphs end





//contact form 

function submitForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
  
    // Validate form fields
    if (name === "" || email === "" || phone === "") {
      alert("Please fill in all fields.");
      return false;
    }
  
    // If all fields are filled, submit the form
    document.getElementById("myForm").submit();
    alert("Thanks for visiting our site!");
    name = "";
    email = "";
    phone = "";

  }

// git hub update 



