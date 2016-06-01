# BARNCALENDARAPP
App for BARN

http://stackoverflow.com/questions/11799159/trying-to-align-html-button-at-the-center-of-the-my-page

^^^Centering buttons to the page^^^


http://stackoverflow.com/questions/1164635/how-to-enable-or-disable-an-anchor-using-jquery

^^^Options to disable a button^^^



    <script type="text/javascript">
      window.onload = function () {
        var input = document.querySelector('input[type=checkbox]');

        function check() {
          var a = input.checked ? "checked" : "not checked";
          document.getElementById('check1').innerHTML = 'check1 ' + a;
          localStorage.setItem("a", "checked");
        }
        input.onclick = check;
        check();
        if a == "checked"
        {
          document.getElementById('grey').id = 'btnETA';
        }
      }
    </script>


LOOK INTO LOCAL STORAGE ON W3 SCHOOLS WEBSITE
^^^^^^^ THATS HOW WE WILL FIGURE OUT HOW TO DO THIS PROPERLY ^^^^^^^
