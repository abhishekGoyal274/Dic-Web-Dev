// Form Validation 
function handleSubmit(event) {
  let firstname = event.firstname.value;
  let lastname = event.lastname.value;
  let Email = event.Email.value;
  let fileToUpload = event.fileToUpload.value;
  let querry = event.querry.value;
  if (firstname === "") alert("first Name is Required");
  else if (lastname === "") alert("last Name is Required");
  else if (querry === "") alert("first Name is Required");
  else {
    alert(
      " firstname: " +
        firstname +
        "\n lastname: " +
        lastname +
        "\n Email: " +
        Email +
        "\n filetoUpload: " +
        fileToUpload +
        "\n querry: " +
        querry +
        "\n" +
        " Successfully Uploaded"
    );
  }
}
