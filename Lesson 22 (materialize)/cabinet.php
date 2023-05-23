<?php
//var_dump($_COOKIE);
if ( !isset($_COOKIE['email']) OR trim($_COOKIE['email']) == '') {
  header("Location: index.html");
  exit;
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">

    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="shortcut icon" href="favicon.png" type="image/png">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <link type="text/css" rel="stylesheet" href="css/materialize.min.css"  media="screen,projection"/>
    <link type="text/css" rel="stylesheet" href="css/style.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User cabinet</title>
</head>

<body>
  <div class="container">
    <div class="row">
      <div class="col l12 center-align">
        <h1 class="user-cabinet-header">User cabinet</h1>
      </div>
    </div>
    <div class="row">
      <div class="col l12 center-align">
        <button id="logout" class="waves-effect waves-light btn blue lighten-1">LogOut</button>
      </div>
    </div>
    <div class="row">
      <div class="col l6">
        <form>
          <div class="row">
            <div class="input-field col s6">
              <input id="signup-name" type="text" class="validate">
              <label class="active" for="signup-name">Name</label>
            </div>
            <div class="input-field col s6">
              <input id="signup-pass" type="text" class="validate">
              <label class="active" for="signup-pass">Password</label>
            </div>
            <div class="input-field col s12">
              <input id="signup-birthday" type="text" class="datepicker">
              <label class="active" for="signup-birthday">Birthday</label>
            </div>
          </div>
         
          <input type="submit" value="update" id="signup-submit">
        </form>
      </div>
    </div>
  </div>




  <script src="js/materialize.min.js"></script>
   <script src="script/ajax.js"></script>
   <script src="script/get_user_data.js"></script>
   <script src="script/logout.js"></script>

</body>

</html>