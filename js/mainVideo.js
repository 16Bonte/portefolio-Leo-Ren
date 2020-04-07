$('document').ready(function () {

	let vidArr = []


	for (let x in data) {
		let newVid = new Video(x, data[x].videoLink, data[x].name, data[x].client, data[x].type, data[x].shooting, data[x].postProd, data[x].description, data[x].esthetic, data[x].filtre)
		vidArr.push(newVid)
		$('#btn' + x).click(function () {
			$('#details' + x).toggleClass('diNone, diYe');
		})
		$('#hr0').animate({ 'opacity': '1', 'margin-left': '25%' }, 500)


		$('#mobBut' + x).click(function () {
			$('#descriMob' + x).toggleClass('diNone')
		})
		$('.num-0').animate({ 'opacity': '1' }, 3500)
		$('.nummob-0').animate({ 'opacity': '1' }, 3500)

		$('document').ready(function () {
			if (x > 0) {
				var lastScrollTop = 0;
				$(window).scroll(function (event) {
					var st = $(this).scrollTop();
					if (st > lastScrollTop) {
						let myVid = 'num-' + x
						let bottom_of_object = $(`.${myVid}`).position().top + $(`.${myVid}`).outerHeight();
						let bottom_of_window = $(window).scrollTop() + $(window).height();
						let isSafari = navigator.vendor && navigator.vendor.indexOf('Apple') > -1 &&
							navigator.userAgent &&
							navigator.userAgent.indexOf('CriOS') == -1 &&
							navigator.userAgent.indexOf('FxiOS') == -1;
						if (isSafari) {
							// SAFARI BABY
						} else {
							if ((bottom_of_window > bottom_of_object) && (bottom_of_window < bottom_of_object + 40)) {
									let elem_position = $(`.${myVid}`).offset().top;
									let window_height = $(window).height();
									let y = elem_position - window_height / 2 + 90;
									window.scrollTo(0, y);
							}
						}
					} else {
						// SCROLL UP
						
						let myVid = 'num-' + x
						let bottom_of_object = $(`.${myVid}`).position().top + $(`.${myVid}`).outerHeight();
						let top_of_window = $(window).scrollTop()
						let isSafari = navigator.vendor && navigator.vendor.indexOf('Apple') > -1 &&
							navigator.userAgent &&
							navigator.userAgent.indexOf('CriOS') == -1 &&
							navigator.userAgent.indexOf('FxiOS') == -1;
						if (isSafari) {
							// SAFARI BABY
						} else {
							if ((top_of_window < bottom_of_object) && (top_of_window > bottom_of_object - 40)) {
									let elem_position = $(`.${myVid}`).offset().top;
									let window_height = $(window).height();
									let y = elem_position - window_height / 2 + 90;
									window.scrollTo(0, y);
							}
						}
					}
					lastScrollTop = st;
				});
			}
		})
	}

	$(window).scroll(function () {
		let windowBottom = $(this).scrollTop() + $(this).innerHeight();
		$(".hideme").each(function () {
			let objectBottom = $(this).offset().top + $(this).outerHeight();
			if (windowBottom > objectBottom - 250) {
				if ($(this).css("opacity") == 0) {
					$(this).fadeTo(500, 1);
				}
			} else {
				if (($(this).css("opacity") == 1) && (objectBottom > 1000)) {
					$(this).fadeTo(500, 0);
				}
			}
		});
		$(".hrVid").each(function () {

			let objectBottom = $(this).offset().top + $(this).outerHeight();
			if (windowBottom > objectBottom + 100) {
				if ($(this).css("opacity") == 0) {
					$(this).animate({ 'opacity': '1', 'margin-left': '25%', 'margin-right': '25%' }, 500);
				}
			} else {
				if (($(this).css("opacity") == 1) && (objectBottom > 1000)) {
					$(this).animate({ 'opacity': '0', 'margin-left': '-100%' }, 500);
				}
			}
		});
		$(".hrVidG").each(function () {
			let objectBottom = $(this).offset().top + $(this).outerHeight();
			if (windowBottom > objectBottom + 100) {
				if ($(this).css("opacity") == 0) {
					$(this).animate({ 'opacity': '1', 'margin-left': '25%', 'margin-right': '25%' }, 500);
				}
			} else {
				if (($(this).css("opacity") == 1) && (objectBottom > 1000)) {
					$(this).animate({ 'opacity': '0', 'margin-left': '100%' }, 500);
				}
			}
		});
	}).scroll();





	// FILTRES
	$('#all').click(function () {
		for (let i = 0; i < vidArr.length; i++) {
			var iframe = $('.videoProjects').get(i);
			var player = new Vimeo.Player(iframe);
			player.pause();
		}
		var iframe = $('.videoProjects').get(0);
		var player = new Vimeo.Player(iframe);
		player.pause();
		$('#teaser,#clip,#retro,#event,#art,#instit').removeClass('currentFilterCategory');
		$('#all').addClass('currentFilterCategory');
		for (let i = 0; i < vidArr.length; i++) {
			$('#vidSec' + i).fadeOut('slow', function () {
				$('#vidSec' + i).fadeIn('slow', 'swing')
			});
		}
	})
	$('#teaser').click(function () {
		for (let i = 0; i < vidArr.length; i++) {
			var iframe = $('.videoProjects').get(i);
			var player = new Vimeo.Player(iframe);
			player.pause();
		}
		$('#all,#clip,#retro,#event,#art,#instit').removeClass('currentFilterCategory');
		$('#teaser').addClass('currentFilterCategory');
		for (let i = 0; i < vidArr.length; i++) {
			$('#vidSec' + i ).fadeOut('slow', function () {
				if (vidArr[i].filtre.includes("Teaser")) {
					$('#vidSec' + i).fadeIn('slow', 'swing')
				}
			})
		}
		$('html, body').animate({ scrollTop: '+=250px' }, 800);
	})
	$('#clip').click(function () {
		for (let i = 0; i < vidArr.length; i++) {
			var iframe = $('.videoProjects').get(i);
			var player = new Vimeo.Player(iframe);
			player.pause();
		}
		$('#all,#teaser,#retro,#event,#art,#instit').removeClass('currentFilterCategory');
		$('#clip').addClass('currentFilterCategory');
		for (let i = 0; i < vidArr.length; i++) {
			$('#vidSec' + i).fadeOut('slow', function () {
				if (vidArr[i].filtre.includes("Clip")) {
					$('#vidSec' + i).fadeIn('slow', 'swing')
				}
			})
		}
		$('html, body').animate({ scrollTop: '+=250px' }, 800);

	})
	$('#retro').click(function () {
		for (let i = 0; i < vidArr.length; i++) {
			var iframe = $('.videoProjects').get(i);
			var player = new Vimeo.Player(iframe);
			player.pause();
		}
		$('#all,#teaser,#clip,#event,#art,#instit').removeClass('currentFilterCategory');
		$('#retro').addClass('currentFilterCategory');
		for (let i = 0; i < vidArr.length; i++) {
			$('#vidSec' + i).fadeOut('slow', function () {
				if (vidArr[i].filtre.includes("Rétrospective")) {
					$('#vidSec' + i).fadeIn('slow', 'swing')
				}
			})
		}
		$('html, body').animate({ scrollTop: '+=250' }, 800);
	})

	$('#event').click(function () {
		for (let i = 0; i < vidArr.length; i++) {
			var iframe = $('.videoProjects').get(i);
			var player = new Vimeo.Player(iframe);
			player.pause();
		}
		$('#all,#teaser,#clip,#retro,#art,#instit').removeClass('currentFilterCategory');
		$('#event').addClass('currentFilterCategory');
		for (let i = 0; i < vidArr.length; i++) {
			$('#vidSec' + i).fadeOut('slow', function () {
				if (vidArr[i].filtre.includes("Event")) {
					$('#vidSec' + i).fadeIn('slow', 'swing')
				}
			})
		}
		$('html, body').animate({ scrollTop: '+=250px' }, 800);
	})

	$('#art').click(function () {
		for (let i = 0; i < vidArr.length; i++) {
			var iframe = $('.videoProjects').get(i);
			var player = new Vimeo.Player(iframe);
			player.pause();
		}
		$('#all,#teaser,#clip,#retro,#art,#instit').removeClass('currentFilterCategory');
		$('#art').addClass('currentFilterCategory');
		for (let i = 0; i < vidArr.length; i++) {
			$('#vidSec' + i).fadeOut('slow', function () {
				if (vidArr[i].filtre.includes("Art")) {
					$('#vidSec' + i).fadeIn('slow', 'swing')
				}
			})
		}
		$('html, body').animate({ scrollTop: '+=250px' }, 800);
	})

	$('#instit').click(function () {
		for (let i = 0; i < vidArr.length; i++) {
			var iframe = $('.videoProjects').get(i);
			var player = new Vimeo.Player(iframe);
			player.pause();
		}
		$('#all,#teaser,#clip,#retro,#art,#instit').removeClass('currentFilterCategory');
		$('#instit').addClass('currentFilterCategory');
		for (let i = 0; i < vidArr.length; i++) {
			$('#vidSec' + i).fadeOut('slow', function () {
				if (vidArr[i].filtre.includes("Institutionnel")) {
					$('#vidSec' + i).fadeIn('slow', 'swing')
				}
			})
		}
		$('html, body').animate({ scrollTop: '+=250px' }, 800);
	})



})