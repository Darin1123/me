<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<meta name="apple-mobile-web-app-title" content="Darin">
	<link rel="apple-touch-icon-precomposed" sizes="114x114" href="img/icon.png"/>
	<link rel="shortcut icon" type="XX/ico" href="img/favicon.ico" />
	<title>Schedule_Generator</title>
	<style type="text/css">
		* {
			transition: all 0.4s;
		}
		html, body {
			width: 100%;
			margin: 0;
			padding: 0;
			font-family: Arial, Verdana, sens-serif;
			background-color: #fafafa;
		}
		header {
			width: 100%;
			height: 40px;
			box-sizing: border-box;
		}
		#nav{
			width: 95%;
			margin: 10px;
		}
		#icon {
			opacity: 0.8;
		}
		#icon:hover {
			opacity: 1;
		}
		.start {
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
		.link-img {
			border-radius: 5px;
		}
		.nav-item {
			margin-right: 10px;
		}
		.nav-link {
			color: #333;
			text-decoration: none;
		}
		.nav-link:hover {
			color: #5171ff;
			text-decoration: underline;
		}
		.links {
			display: flex;
			align-items: center;
		}
		.social-img {
			width: 15px;
			opacity: 0.5;
		}
		.social-img:hover {
			opacity: 1;
		}
		a {
			text-decoration: none;
			color: black;
		}
		a:hover {
			text-decoration: underline;
			color: #444;
		}

		#title {
			cursor: pointer;
			position: relative;
			display: inline-block;
			margin-left: 10px;
			color: #666;
		}
		#title:hover {
			color: #333;
		}
		#dropdown-content {
			display: none;
		    position: absolute;
		    background-color: #f9f9f9;
		    min-width: 160px;
		    padding: 10px;
		}
		/*#dropdown:hover #dropdown-content {
			display: block;
		}*/

		#content {
			width: 100%;
			border: none;
			height: 100%;
			/*min-height: 600px;*/
		}

		#dropdown a {
			display: block;
			color: #999;
		}

		#dropdown a:hover {
			text-decoration: underline;
			cursor: pointer;
			color: #333;
			font-size: 110%;
		}

		#navigate {
			display: flex;
		}

		#prev, #next {
			margin-left: 10px;
			cursor: pointer;
			color: #999;
		}

		#prev:hover, #next:hover {
			text-decoration: underline;
			color: 333;
		}

		#now {
			margin-left: 10px;
		}
	</style>
</head>
<body>
	<header>
		<div id="nav" class="start">
			<div class="links">
				<a class="nav-link nav-item" href="https://wd4.ca/me/">
					<img id="icon" class="link-img" src="img/icon.png" width="30">
				</a>
				<span>Schedule_Generator</span>
				<div id="dropdown">
				</div>
			</div>
			<div class="links">
				<a class="nav-item nav-link" href="https://space.bilibili.com/73027398">
					<img class="social-img" src="img/bilibili.png" width="15">
				</a>
				<a class="nav-link nav-item" href="https://github.com/Darin1123">
					<img class="social-img" src="img/github.png" width="15">
				</a>
				<a class="nav-link nav-item" href="#linkedin">
					<img class="social-img" src="img/linkedin.png">
				</a>
			</div>
		</div>
	</header>
	<main>
		<iframe id="content" src="html/schedule_generator.html"></iframe>
	</main>
	<script type="text/javascript" src="../lib/jquery.js"></script>
</body>
</html>