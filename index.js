function submitForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
  
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