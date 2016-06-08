# BARNCALENDARAPP
App for BARN

http://stackoverflow.com/questions/11799159/trying-to-align-html-button-at-the-center-of-the-my-page

^^^Centering buttons to the page^^^


http://stackoverflow.com/questions/1164635/how-to-enable-or-disable-an-anchor-using-jquery

^^^Options to disable a button^^^



  <script>
  localStorage.setItem("base", "grey");
  localStorage.KA = "grey";
  localStorage.setItem("ETA", "btnETA");
  localStorage.FA = "grey";
  localStorage.J = "grey";
  localStorage.P = "grey";
  localStorage.MM = "grey";
  localStorage.WW = "grey";
  localStorage.WR = "grey";
  localStorage.BA = "grey";
  localStorage.GA = "grey";
  </script>

  <script>
  document.getElementById("doit").onclick = function() {myFunction()};
  function myFunction() {
    document.getElementById(localStorage.getItem("base")).id = localStorage.getItem("ETA");
    if (localStorage.getItem("ETA") === "btnETA")
    {
      localStorage.setItem("ETA", "grey");
    }
  }
  </script>


LOOK INTO LOCAL STORAGE ON W3 SCHOOLS WEBSITE
^^^^^^^ THATS HOW WE WILL FIGURE OUT HOW TO DO THIS PROPERLY ^^^^^^^
