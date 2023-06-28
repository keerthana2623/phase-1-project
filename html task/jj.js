<input type="text" id="myInput">

<script>
  // Get the input element
  var input = document.getElementById("myInput");

  // Attach the onfocusout event handler
  input.onfocusout = function() {
    console.log("Input lost focus");
    // Perform any desired actions here
  };
</script>


if(firstNameValue=="")
   {
    firstNameErr.innerHTML="First Name is required";

   }else if(!validFirstName.test(firstNameValue)){
     firstNameErr.innerHTML="First Name must be only string without white spaces";
   }else{
     firstNameErr.innerHTML="";
     return true;