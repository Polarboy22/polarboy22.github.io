var today = new Date();
if (!(today.getHours() >= 8 && today.getHours() < 18)) {
  if (document.title == "Polarboy") {
    document.getElementById("bonjour").innerHTML = 'Good Night!';
  }
  if (document.title == "404 | Page not found.") {
    document.getElementsByClassName("go-back")[0].getElementsByTagName("a")[0].style.color = "#FFFFFF";
    document.getElementsByClassName("go-back")[0].getElementsByTagName("a")[0].style.border = "solid 2px #3B3B3B";
  }
  document.body.style.backgroundColor = "#1A243F";
  document.getElementsByClassName("snowflake")[0].style.backgroundColor = "#FFFFFF";
  document.getElementsByTagName("h1")[0].style.color = "#FFFFFF";
  document.getElementsByTagName("h3")[0].style.color = "#EFEFEF";
}