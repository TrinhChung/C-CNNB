<!DOCTYPE html>
<html>
<head>
    <title>Verification for your account</title>
</head>
<body>

    <h1>Hi, {{ $user->fullname }}</h1>
    <p>{{ $user->email }}</p>

    <p>Thank you for using our app</p>
    <a href="{{env('APP_ENV') === 'production' ? 'https://recruit_server.bachnguyencoder.id.vn/active/'.$user->token : 'http://localhost:8000/active/'.$user->token}}">Verify</a>
</body>
</html>
