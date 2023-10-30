<!DOCTYPE html>
<html>
<head>
    <title>Your password was changed</title>
</head>
<body>
  
    <h1>Hi, {{ $user->fullname }}</h1>
    <p>{{ $user->email }}</p>
     
    <p>You have changed your password</p>
    <a href="{{'http://localhost:8000/active/'.$user->token}}">Click here to verify</a>
</body>
</html>