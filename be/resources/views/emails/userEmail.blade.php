<!DOCTYPE html>
<html>
<head>
    <title>Verification for your account</title>
</head>
<body>
  
    <h1>Hi, {{ $user->fullname }}</h1>
    <p>{{ $user->email }}</p>
     
    <p>Thank you for using our app</p>
    <a href="{{'http://localhost:8000/active/'.$user->token}}">Verify</a>
</body>
</html>