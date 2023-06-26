import React from "react";
import data from "./data/data";
import "./css/studentCard.css";

function Student(f) {
  console.log("hello");
  return <div>Student</div>;
}

export default function Students() {
  function search(e) {
    let input = document.getElementById("searchbar1").value;
    input = input.toLowerCase();
    let x = document.getElementsByClassName("ag-courses_item");
    console.log(x);
    for (let index = 0; index < x.length; index++) {
      let heading = x[index].children[0].children[1].children[0].innerHTML;
      heading = heading.toLowerCase();
      let text = x[index].children[0].children[1].children[1].innerHTML;
      text = text.toLowerCase();
      let text1 = x[index].children[0].children[1].children[2].innerHTML;
      text1 = text1.toLowerCase();
      if (!text.includes(input) && !text1.includes(input) && !heading.includes(input)) {
        x[index].style.display = "none";
      } else {
        x[index].style.display = "inherit";
      }
    }
  }
  return (
    <>
      <div style={{ textAlign: "center" }} data-aos="fade-up">
        <img
          src="https://img.freepik.com/free-vector/happy-diverse-students-celebrating-graduation-from-school_74855-5853.jpg?w=900&t=st=1687760418~exp=1687761018~hmac=d2cbc2fd3a1d51307724b55a8231208aafd5582e893a7d12a673d46ddc2d60e3"
          width={"80%"}
          alt="stu"
        />
      </div>
      <div style={{ textAlign: "center"}}>
        <label for="searchbar1">Search for facilities:</label> &nbsp;&nbsp;&nbsp;
        <input
          id="searchbar1"
          onChange={search}
          type="text"
          name="search"
          placeholder="Ex:Abhishek Goyal"
        />
      </div>
      <div class="ag-format-container">
        <div class="ag-courses_box">
          {data.map((user) => (
            <div class="ag-courses_item">
              <a class="ag-courses-item_link">
                <div class="ag-courses-item_bg"></div>
                <div class="ag-courses-item_title">
                  <p style={{ fontSize: "2.1rem" }}>{user.name}</p>
                  <p className="grey">{user.roll_no}</p>
                  <p className="grey">{user.branch}</p>
                </div>
                <div class="ag-courses-item_date-box">
                  <h4>
                    About: <br />
                    <p className="grey">{user.about}</p>
                  </h4>
                  <h4>
                    Verification data: <br />
                    <p className="grey">{user.ver_data}</p>
                  </h4>
                  <h4>
                    Address:
                    <br />
                    <p className="grey">{user.address}</p>
                  </h4>
                  <br />
                  <h4>Personal Info:</h4>
                  <p className="grey"> {user.email}</p>
                  <p className="grey"> {user.phone_no}</p>
                  <p className="grey"> {user.city}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
