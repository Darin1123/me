<html>
<head>
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<meta name="apple-mobile-web-app-title" content="Darin">
	<link rel="apple-touch-icon-precomposed" sizes="114x114" href="img/icon.png"/>
	<link rel="shortcut icon" type="XX/ico" href="img/favicon.ico" />
	<meta charset="utf-8">
	<title>SVM Notes</title>
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
	</style>
</head>
<body>
	<header>
		<div id="nav" class="start">
			<div class="links">
				<a class="nav-link nav-item" href="https://wd4.ca/me/">
					<img id="icon" class="link-img" src="img/icon.png" width="30">
				</a>
				<span>SVM Notes</span>
				<div id="dropdown">
					<div id="title">select</div>
					<div id="dropdown-content">
						<a id="0">KKT条件推导</a>
						<a id="1">分类</a>
						<a id="2">没有免费午餐定理</a>
						<a id="3">支持向量机_线性模型_推导</a>
						<a id="4">支持向量机_线性模型_数学描述</a>
						<a id="5">支持向量机_非线性_目标函数和限制条件</a>
						<a id="6">支持向量机(非线性模型)_低维到高维映射</a>
						<a id="7">支持向量机_非线性模型_原问题_和_对偶问题</a>
						<a id="8">支持向量机_转换为对偶问题</a>
					</div>
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
		<iframe id="content" src="0.html"></iframe>
	</main>
	<script type="text/javascript" src="../lib/jquery.js"></script>
	<script type="text/javascript">
		<?php
		for ($i=0; $i<9; $i++) {
			echo '$("#'.$i.'").click(function() {$("#content").attr("src", "'.$i.'.html"); $("#dropdown-content").css("display", "none")});';
		}
		?>
		$("#title").click(function() {
			$("#dropdown-content").toggle();
		});
	</script>
</body>
</html>