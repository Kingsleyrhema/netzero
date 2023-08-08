function jsoncallback(data) {

	var Topnews_list = $.makeArray(data.fd_newser_rss_topnews.feeds);
	var usWorld_list = $.makeArray(data.fd_newser_rss_us_world.feeds);
	var Entertainment_list = $
			.makeArray(data.fd_newser_rss_entertainment.feeds);
	var science_list = $.makeArray(data.fd_newser_rss_science.feeds);
	var sports_list = $.makeArray(data.fd_newser_rss_sports.feeds);
	var crimeNews_list = $.makeArray(data.fd_newser_rss_crime.feeds);
	
    
	var topnewsCount = Math.min(Topnews_list.length, 5);
	var usWorldCount = Math.min(usWorld_list.length, 5);
	var entertainmentCount = Math.min(Entertainment_list.length, 5);
	var scienceCount = Math.min(science_list.length, 5);
	var sportsCount = Math.min(sports_list.length, 5);
	var crimeNewsCount = Math.min(crimeNews_list.length, 5);

	/* Slider */
	for (i = 0; i < 5; i++) {
		$(".slider" + (i + 1))
				.append(
						'<div class="row">'
								+ '<span class="feedImg fLeft"><a href='
								+ getCarouselFeedLink(Topnews_list[i].link)
								+ ' target=_blank><img src='
								+ Topnews_list[i].images.thumbnail.src
								+ '></a></span>'
								+ '<span class="feedText"><a href='
								+ getCarouselFeedLink(Topnews_list[i].link)
								+ ' target=_blank>'
								+ (Topnews_list[i].title.length > 55 ? Topnews_list[i].title
										.substring(0, 52)
										+ '...'
										: Topnews_list[i].title)
								+ '</a><p>'
								+ (Topnews_list[i].description.length > 250 ? Topnews_list[i].description
										.substring(0, 220)
										+ '...'
										: Topnews_list[i].description)
								+ '</p></span>'
								+ '</div><table><tr><td class="fLeft more" style="padding-left:15px;"><a href='
								+ getCarouselFeedLink(data.fd_newser_rss_topnews.moreLink)
								+ '  target="_blank">More >></a></td>'
								+ '<td class="fRight tRight" id="carouselLogo">Sponsored By:</td><td><a href='
								+ getCarouselFeedLink(data.fd_newser_rss_topnews.moreLink)
								+ ' target="_blank"><img src=' + contentServer
								+ data.fd_newser_rss_topnews.logoSrc
								+ '></a></td></tr></table>');
	}

	/* Text Feed Top News*/
	for (var i = 0; i < topnewsCount; i++) {
		$("#fd_newser_topnews")
				.append(
						'<li><span><a href='
								+ Topnews_list[i].link
								+ ' target="_blank">'
								+ (Topnews_list[i].title.length > 65 ? Topnews_list[i].title
										.substring(0, 65)
										+ '...'
										: Topnews_list[i].title)
								+ '</a></span></li>');
		// $("#fd_newser_topnews").append('<div class=row><div
		// class=col-sm-3><img src='+Topnews_list[i].image+' width=120px
		// height=90px><br></br></div><div class=col-sm-8 style=left:10px;><a
		// href='+Topnews_list[i].link+'>'+Topnews_list[i].title+'</a><p>'+Topnews_list[i].description+'</p></div><br>');

	}
	$("#topnews_more").append(
			'<a href=' + data.fd_newser_rss_topnews.moreLink
					+ '  target="_blank">More >></a>');
	$("#topnews_sponsor").append(
			'<a href=' + data.fd_newser_rss_topnews.moreLink
					+ '  target="_blank"><img src=' + contentServer
					+ data.fd_newser_rss_topnews.logoSrc
					+ ' width=120px height=20px></a>');
	
	/* Text Feed Crime News*/
	for (var i = 0; i < crimeNewsCount; i++) {
		$("#fd_newser_crimenews")
				.append(
						'<li><span><a href='
								+ crimeNews_list[i].link
								+ ' target="_blank">'
								+ (crimeNews_list[i].title.length > 65 ? crimeNews_list[i].title
										.substring(0, 65)
										+ '...'
										: crimeNews_list[i].title)
								+ '</a></span></li>');
		

	}
	$("#crimenews_more").append(
			'<a href=' + data.fd_newser_rss_crime.moreLink
					+ '  target="_blank">More >></a>');
	$("#crimenews_sponsor").append(
			'<a href=' + data.fd_newser_rss_crime.moreLink
					+ '  target="_blank"><img src=' + contentServer
					+ data.fd_newser_rss_crime.logoSrc
					+ ' width=120px height=20px></a>');

	/* USandWorld Feed */
	for (var i = 0; i < topnewsCount; i++) {
		/*if (i == 0) {
			// $("#fd_newser_usWorld").append('<li><span><a
			// href='+usWorld_list[i].link+'
			// target="_blank">'+(usWorld_list[i].title.length >
			// 58?usWorld_list[i].title.substring(0,58)+'...':usWorld_list[i].title)+'</a></span></li>')
			$("#fd_newser_usWorld")
					.append(
							'<div class="row"><span class="feedImg"><a href='
									+ getImageFeedLink(usWorld_list[i].link)
									+ ' target=_blank><img src='
									+ usWorld_list[i].images.thumbnail.src
									+ ' width=100px height=75px></a></span><span class="feedText"><a href='
									+ getImageFeedLink(usWorld_list[i].link)
									+ ' target=_blank>'
									+ (usWorld_list[i].title.length > 52 ? usWorld_list[i].title
											.substring(0, 52)
											+ '...'
											: usWorld_list[i].title)
									+ '</a><p>'
									+ (usWorld_list[i].description.length > 200 ? usWorld_list[i].description
											.substring(0, 185)
											+ '...'
											: usWorld_list[i].description)
									+ '</p></span></div>');
		} else {*/
			$("#fd_newser_usWorld")
					.append(
							'<li><span><a href='
									+ getImageFeedLink(usWorld_list[i].link)
									+ ' target="_blank">'
									+ (usWorld_list[i].title.length > 65 ? usWorld_list[i].title
											.substring(0, 65)
											+ '...'
											: usWorld_list[i].title)
									+ '</a></span></li>');
		//}
	}
	$("#usWorld_more").append(
			'<a href=' + getImageFeedLink(data.fd_newser_rss_us_world.moreLink)
					+ ' target="_blank">More >></a>');
	$("#usWorld_sponsor").append(
			'<a href=' + getImageFeedLink(data.fd_newser_rss_us_world.moreLink)
					+ ' target="_blank"><img src=' + contentServer
					+ data.fd_newser_rss_us_world.logoSrc
					+ ' width=120px height=20px></a>');

	/* Entertainment Feed */
	for (var i = 0; i < entertainmentCount; i++) {
		// $("#fd_newser_entertainment").append('<li><span><a
		// href='+Entertainment_list[i].link+'
		// target="_blank">'+Entertainment_list[i].title+'</a></span></li>')
		/*if (i == 0)
			$("#fd_newser_entertainment")
					.append(
							'<div class="row"><span class="feedImg"><a href='
									+ getImageFeedLink(Entertainment_list[i].link)
									+ ' target=_blank><img src='
									+ Entertainment_list[i].images.thumbnail.src
									+ ' width=100px height=75px></a></span><span class="feedText"><a href='
									+ getImageFeedLink(Entertainment_list[i].link)
									+ ' target=_blank>'
									+ (Entertainment_list[i].title.length > 52 ? Entertainment_list[i].title
											.substring(0, 52)
											+ '...'
											: Entertainment_list[i].title)
									+ '</a><p>'
									+ (Entertainment_list[i].description.length > 200 ? Entertainment_list[i].description
											.substring(0, 185)
											+ '...'
											: Entertainment_list[i].description)
									+ '</p></span></div>');
		else*/
			$("#fd_newser_entertainment")
					.append(
							'<li><span><a href='
									+ getImageFeedLink(Entertainment_list[i].link)
									+ ' target="_blank">'
									+ (Entertainment_list[i].title.length > 65 ? Entertainment_list[i].title
											.substring(0, 65)
											+ '...'
											: Entertainment_list[i].title)
									+ '</a></span></li>')
	}
	$("#entertainment_more")
			.append(
					'<a href='
							+ getImageFeedLink(data.fd_newser_rss_entertainment.moreLink)
							+ ' target="_blank">More >></a>');
	$("#entertainment_sponsor")
			.append(
					'<a href='
							+ getImageFeedLink(data.fd_newser_rss_entertainment.moreLink)
							+ ' target="_blank"><img src=' + contentServer
							+ data.fd_newser_rss_entertainment.logoSrc
							+ ' width=120px height=20px></a>');

	
	/* Sports Feed */
	for (var i = 0; i < sportsCount; i++) {
			$("#fd_newser_sports")
					.append(
							'<li><span><a href='
									+ getImageFeedLink(sports_list[i].link)
									+ ' target="_blank">'
									+ (sports_list[i].title.length > 65 ? sports_list[i].title
											.substring(0, 65)
											+ '...'
											: sports_list[i].title)
									+ '</a></span></li>')
	}
	$("#fd_newser_sports").wrapInner( "<ul></ul>"); // Wrap with <ul> -- COM-4991
	$("#sports_more")
			.append(
					'<a href='
							+ getImageFeedLink(data.fd_newser_rss_sports.moreLink)
							+ ' target="_blank">More >></a>');
	$("#sports_sponsor")
			.append(
					'<a href='
							+ getImageFeedLink(data.fd_newser_rss_sports.moreLink)
							+ ' target="_blank"><img src=' + contentServer
							+ data.fd_newser_rss_sports.logoSrc
							+ ' width=120px height=20px></a>');



	/* Science Feed */
	for (var i = 0; i < scienceCount; i++) {
		/*if (i == 0)
			$("#fd_newser_science")
					.append(
							'<div class="row"><span class="feedImg"><a href='
									+ getImageFeedLink(science_list[i].link)
									+ ' target=_blank><img src='
									+ science_list[i].images.thumbnail.src
									+ ' width=100px height=75px ></a></span><span class="feedText"><a href='
									+ getImageFeedLink(science_list[i].link)
									+ ' target=_blank>'
									+ (science_list[i].title.length > 52 ? science_list[i].title
											.substring(0, 52)
											+ '...'
											: science_list[i].title)
									+ '</a><p>'
									+ (science_list[i].description.length > 200 ? science_list[i].description
											.substring(0, 185)
											+ '...'
											: science_list[i].description)
									+ '</p></span></div>');
		else*/
			$("#fd_newser_science")
					.append(
							'<li><span><a href='
									+ getImageFeedLink(science_list[i].link)
									+ ' target="_blank">'
									+ (science_list[i].title.length > 65 ? science_list[i].title
											.substring(0, 65)
											+ '...'
											: science_list[i].title)
									+ '</a></span></li>')
	}
	$("#science_more").append(
			'<a href=' + getImageFeedLink(data.fd_newser_rss_science.moreLink)
					+ ' target="_blank">More >></a>');
	$("#science_sponsor").append(
			'<a href=' + getImageFeedLink(data.fd_newser_rss_science.moreLink)
					+ ' target="_blank"><img src=' + contentServer
					+ data.fd_newser_rss_science.logoSrc
					+ ' width=120px height=20px></a>');

	var isChrome = /Chrome/.test(navigator.userAgent)
			&& /Google Inc/.test(navigator.vendor);
	if (isChrome) {
		$('li span').css('-webkit-margin-start', '-7px');
		$('ul li span').css('-webkit-margin-start', '0px');
	}	

}
function getCarouselFeedLink(url) {
	if (url != null || url != undefined || url != " ") {
		var strArray = url.split('&');
		for (i = 0; i < strArray.length; i++) {
			if (strArray[i].indexOf("utm_campaign=") !== -1) {
				strArray[i] = strArray[i] + '_carousel';
			}
		}

		return strArray.join('&');
	} else {
		return url;
	}

}
function getImageFeedLink(url) {
	if (url != null || url != undefined || url != " ") {
		var strArray = url.split('&');
		for (i = 0; i < strArray.length; i++) {
			if (strArray[i].indexOf("utm_campaign=") !== -1) {
				var startUrl = window.location.pathname;
				if(startUrl.indexOf("/login.do") != -1){
					strArray[i] = strArray[i] + '_login';
				} else{
					strArray[i] = strArray[i] + '_img_b';
				}
			}
		}

		return strArray.join('&');
	} else {
		return url;
	}

}
