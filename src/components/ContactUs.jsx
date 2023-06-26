import React from "react";
import "./css/contact us.css";

export default function ContactUs() {
  // Form Validation
  function handleSubmit(event) {
    event.preventDefault();
    console.log(event);
    let firstname = event.target[0].value;
    let lastname = event.target[1].value;
    let Email = event.target[2].value;
    let fileToUpload = event.target[3].value;
    let querry = event.target[4].value;
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

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Querry/Contact Form</h1>
        <hr />
        <h3>User Details:</h3>
        <label for="firstname">First name: </label>
        <input type="text" name="firstname" placeholder="Abhishek" required />
        &nbsp;&nbsp;
        <label for="lastname">Last name: </label>
        <input type="text" name="lastname" placeholder="Goyal" required />
        <br />
        <br />
        <label for="Email">Email(optional): </label>
        <input type="email" name="Email" placeholder="xyz@gmail.com" />
        <br />
        <br />
        <h3>Documents (If any):</h3>
        <label for="file">PDF/Image : </label>
        <input type="file" name="fileToUpload" id="file" />
        <br />
        <br />
        <h3>Querry:</h3>
        <textarea
          rows="6"
          name="querry"
          placeholder="Describe your querry here..."
        ></textarea>
        <br />
        <br />
        <input type="reset" value="Reset" class="button" />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <input type="submit" value="Send" class="button" />
        <br />
      </form>

      <div class="con">
        <h1>Contact Us</h1>
        <hr />
        <ul>
          <li>University Institute of Engineering and Technology</li>
          <li>Sector 25, South Campus,</li>
          <li>Panjab University,</li>
          <li>Chandigarh (Union Territory), INDIA</li>
          <li>PINCODE: 160014</li>
          <li>0172-2541242</li>
          <li>directoruiet@pu.ac.in</li>
          <br />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3511237.761840447!2d72.1428915875!3d30.74809900000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390feda45e945a31%3A0xdc967b3a7e0f1e95!2sUniversity%20Institute%20Of%20Engineering%20and%20Technology%2C%20Panjab%20University!5e0!3m2!1sen!2sin!4v1686501691180!5m2!1sen!2sin"
            width="200vh"
            height="200vh"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </ul>
      </div>
    </>
  );
}
