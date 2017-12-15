<!doctype html>
<html lang="{{ app()->getLocale() }}" ng-app="app">

<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="csrf-token" content="{{ csrf_token() }}">

	<title>{{ config('app.name') }}</title>

	<!-- Fonts -->
	<link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
	<!-- Styles -->
	<link rel="stylesheet" type="text/css" href="{{ mix('/css/app.css') }}">
	<!-- Scripts -->
	<script src="{{ mix('/js/app.js') }}"></script>
</head>

<body>
    <la-nav brand="'{{ config('app.name') }}'"></la-nav>

		<ui-view></ui-view>
</body>

</html>