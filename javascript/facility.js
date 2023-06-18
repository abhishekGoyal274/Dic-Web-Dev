// Search Bar
function search(e) {
  let input = document.getElementById("searchbar").value;
  input = input.toLowerCase();
  let x = document.getElementsByClassName("flip-card");
  for (let index = 0; index < x.length; index++) {
    let heading = x[index].children[0].children[0].children[0].innerHTML;
    heading = heading.toLowerCase();
    let text = x[index].children[0].children[0].children[1].innerHTML;
    text = text.toLowerCase();
    if(!text.includes(input) && !heading.includes(input)){
        x[index].style.display="none";
    }else{
        x[index].style.display="inherit";
    }
  }
}
