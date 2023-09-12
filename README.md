<!DOCTYPE html>
<html>
  <head>
    <title>부천대학교 캡스톤</title>
    <meta charset="utf-8" />
    <link href="/css/styles.css" rel="stylesheet" />
  </head>
  
  <body>
    
    <div class="navbar">
      <a class="firstpage" href="/index.html">
       <img src="/images/firstpage.PNG">
       </a>
      <ul>
        <li><a href="https://www.hyundai.com/kr/ko/e">현대 사이트</a></li>
        <li><a href="https://www.kia.com/kr">기아 사이트</a></li>
        <li><a href="#">로그인</a></li>
        <li><a href="#">회원가입</a></li>
      </ul>
    </div>   
    <div class="navbar_left">
      <ul>
        <li><a href="/html/Untitled-1.html">택시정보</a></li>
        <li><a href="/html/Untitled-2.html">나라별 운임료</a></li>
        <li><a href="/html/Untitled-3.html">게시판</a></li>
      </ul>
    </div> 
    <img class="hero_header" src="/images/hero_header.jpg">


    
    <div id="map" style="width:500px;height:400px;"></div>
	<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=52aa4cfae3eff22b400cf60fac1df79a"></script>
	<script>
		var container = document.getElementById('map');
		var options = {
			center: new kakao.maps.LatLng(33.450701, 126.570667),
			level: 3
		};

		var map = new kakao.maps.Map(container, options);
	</script>
</html>
</div>


    <!--<h1>부천대학교 캡스톤디자인</h1>
    <div class="products">
         
      
      <button type="button" class="navyBtn" onClick="location.href='/html/Untitled-2.html'">다음 페이지</button>
      <div class="clearfix"></div>
    </div>
    
    <div class="footer">
      <a href="#"><img src="images/facebook.png"></a>
      <a href="#"><img src="images/instagram.png"></a>
      <a href="#"><img src="images/twitter.png"></a>
      -->
    </div>
    
  </body>
</html>
