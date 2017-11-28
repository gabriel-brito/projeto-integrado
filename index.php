<!DOCTYPE html>
<html lang="pt-br">
  <head>    
    <title>WTS Financial Control
    <?php
      if (isset($_GET["calculadora"])) {
        echo " > Calculadora";
      } else if (isset($_GET["wts"])) {
        echo " > WTS";
      }
    ?>
    </title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <link rel="icon" type="image/png" href="./img/favicon.png">    
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script>
    <script src="./public/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="./css/bootstrap.min.css">
    <link rel="stylesheet" href="./css/font-awesome.min.css">
    <link href="./css/main.css" rel="stylesheet">
  </head>
  <body>
    <header class="container-fluid bg-inverse">
      <nav class="navbar navbar-toggleable-sm navbar-inverse col-lg-8 offset-lg-2 col-md-10 offset-md-1">
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbar1">
            <span class="menu-text">☰</span>
        </button>
        <a class="navbar-brand" href="/php/projeto-integrado/">
          <img src="./img/wts_logo.png" width="30px" height="30px" class="d-inline-block align-top">
          WTS Financial Control
        </a>
        <div class="collapse navbar-collapse" id="navbar1">
          <ul class="navbar-nav ml-auto offset-">
            <li class="nav-item">
              <a class="nav-link <?php if (!isset($_GET['calculadora']) && !isset($_GET["wts"])) echo 'active'; ?>"  id="home" href="/php/projeto-integrado/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link <?php if (isset($_GET['calculadora'])) echo 'active'; ?>" id="calculadora" href="/php/projeto-integrado/?calculadora">Calculadora</a>
            </li>
            <li class="nav-item">
              <a class="nav-link <?php if (isset($_GET['wts'])) echo 'active'; ?>" id="wts" href="/php/projeto-integrado/?wts">WTS</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    <section class="container col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-xs-12" id="main-container">
      <?php
        if (isset($_GET["calculadora"])) {
          include_once("./php_scripts/calculadora.php");
        } else if (isset($_GET["wts"])) {
          include_once("./php_scripts/wts.php");
        } else {
          include_once("./php_scripts/home.php");
        }
      ?>
    </section>
    <footer class="container-fluid bg-inverse fixed-bottom">
      <nav class="nav navbar-inverse">
        <span class="navbar-text col-lg-8 offset-lg-2 col-md-10 offset-md-1">&copy; WTS @ 2017</span>
      </nav>
    </footer>
  </body>
</html>