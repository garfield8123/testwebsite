<?php
    function runMyFunction() {
    $myfile = fopen("logger.txt", "w") or die("Unable to open file!");
    $txt = "Someone clicked\n";
    fwrite($myfile, $txt);
    fclose($myfile);
  }

  if (isset($_GET['hello'])) {
    runMyFunction();
  }
    
?>