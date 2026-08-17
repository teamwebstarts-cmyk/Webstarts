/*
	Template Name: SaasRiver - SaaS & StartUp HTML Template
	Author: https://themexriver.com/
	Version: 1.0
*/


(function ($) {
"use strict";


/* 
	windows-load-function
*/


window.addEventListener('DOMContentLoaded', function(){


	if (document.querySelectorAll(".ag-preloader-1").length) {
		const loader = document.querySelector(".ag-preloader-1");
		
		setTimeout(() => {
			loader.classList.add("loaded");
			afterPreloader();
		});
		setTimeout(function () {
			loader.remove();
		}, 400);

	} else {
		afterPreloader();
	}

	afterPageLoad();

})




/* 
	after-preloader-start
*/
function afterPreloader() {


	/* 
		only-LTR-direction
	*/
	if (getComputedStyle(document.body).direction !== "rtl") {

		if ($(".wa_btn_split").length) {
			var splitButton2 = $(".wa_btn_split");
			gsap.registerPlugin(SplitText);

			splitButton2.each(function (index, el) {
				el.split = new SplitText(el, {
					type: "words,chars",
				});

				$(el).on("mouseenter", function () {
					el.split.chars.forEach((char, i) => {
						let yValue = i % 2 === 0 ? -50 : 50;

						gsap.fromTo(
							char,
							{ y: yValue, },
							{
								y: 0,
								opacity: 1,
								duration: 0.4,
								ease: "ease1",
								delay: i * 0.05
							}
						);
					});
				});
			});
		}
		


        /* 
			section-title-1
		*/	
		if ($(".wa_title_ani_1").length) {
			var wa_title_ani_1 = $(".wa_title_ani_1");
			if (wa_title_ani_1.length == 0) return;

			gsap.registerPlugin(SplitText);

			wa_title_ani_1.each(function (index, el) {
				el.split = new SplitText(el, {
					type: "lines,words",
					linesClass: "split-line",
				});

				let delayValue = $(el).attr("data-split-delay") || "0s";
				delayValue = parseFloat(delayValue) || 0; 

				if ($(el).hasClass("wa_title_ani_1")) {
					gsap.set(el.split.words, {
						x: 30,
                        filter: "blur(5px)",
                        opacity: 0,
					});
				}

				el.anim = gsap.to(el.split.words, {
					scrollTrigger: {
						trigger: el,
						start: "top 86%",
						toggleActions: 'play none none reverse',
					},
					x: 0,
                    filter: "blur(0px)",
					opacity: 1,
					duration: 1.5,

					ease: "ease1",
					stagger: 0.08,
					delay: delayValue, 
				});
			});
		}

		document.querySelectorAll(".wa_title_ani_2").forEach((atEl) => {
			const atSplit = new SplitText(atEl, {
				type: "words,chars",
				wordsClass: "word",
				charsClass: "char"
			});

			let atDuration = parseFloat(atEl.getAttribute("data-speed")) || 1;
			let atDelay = parseFloat(atEl.getAttribute("data-delay")) || 0;

			if (window.innerWidth <= 768) {
				atDuration = atDuration * 0.3; 
			}

			gsap.set(atSplit.words, {
				willChange: "transform",
				perspective: 1000,
				transformStyle: "preserve-3d"
			});

			gsap.set(atSplit.chars, {
				willChange: "transform",
				opacity: 0,
				rotateX: -80,
				transformOrigin: "center center -10px"
			});

			gsap.set(atEl, {
				perspective: 1000,
				transformStyle: "preserve-3d"
			});

			gsap.to(atSplit.chars, {
				scrollTrigger: {
					trigger: atEl,
					start: "top 80%",
				},
				opacity: 1,
				rotateX: 0,
				duration: atDuration,
				delay: atDelay,
				ease: "power3.out",
				stagger: {
					each: 0.05,
					from: "center",
					grid: "auto",
				},
			});
		});



	}	

	// hero-1-animation
	var hero1tl = gsap.timeline();

	hero1tl.from(".ag-hero-1-img img", {
		scale: .4,
		yPercent: 60,
		duration: 1,
	});


	// hero-2-bg-animation
	if ($(".ag-hero-2-bg-img").length) {
		const hero2Bg = $(".ag-hero-2-bg-img");
		const hero2Img = hero2Bg.find("img");
		const hero2Shimmer = hero2Bg.find(".ag-hero-2-bg-shimmer");
		const hero2tl = gsap.timeline({
			onComplete: () => {
				if (typeof initWaHoverWave === "function") {
					initWaHoverWave(".ag-hero-2-bg-img.wa-hover-wave");
				} else {
					hero2Bg.addClass("is-animated");
				}
			},
		});

		gsap.set(hero2Bg, { opacity: 0, scale: 1.04 });
		gsap.set(hero2Img, { scale: 1.18, opacity: 0, filter: "blur(14px)" });

		if (hero2Shimmer.length) {
			gsap.set(hero2Shimmer, { opacity: 1 });
		}

		hero2tl
			.to(hero2Bg, { opacity: 1, scale: 1, duration: 1.1 })
			.to(hero2Img, {
				scale: 1,
				opacity: 1,
				filter: "blur(0px)",
				duration: 1,
			}, 0.15);

		if (hero2Shimmer.length) {
			hero2tl
				.to(hero2Shimmer, {
					x: "120%",
					duration: 1.2,
					ease: "power2.inOut",
				}, 0.6)
				.to(hero2Shimmer, {
					opacity: 0,
					duration: 0.4,
				}, 1.4);
		}
	}





/* 
	after-preloader-end
*/
}



/* 
	after-page-load-start
*/
function afterPageLoad() {

	/* 
		add-active-class
	*/
	const waAddClass = gsap.utils.toArray('.wa_add_class');
	waAddClass.forEach(waAddClassItem => {
		gsap.to(waAddClassItem, {
			scrollTrigger: {
				trigger: waAddClassItem,
				start: "top 90%",
				end: "bottom bottom",
				toggleActions: "play none none reverse",
				toggleClass: "active",
				once: true,
				markers: false,
			}
		});
	});



	/* 
		wow-activation
	*/
	if($('.wow').length){
		var wow = new WOW({
			boxClass:     'wow',
			animateClass: 'animated',
			offset:       100,
			mobile:       true,
			live:         true
		});
		wow.init();
	};

	// Re-trigger Skills Animation Every Time Section is Scrolled Into View
	const skillSection = document.querySelector('.ag-features-1-area');
	if (skillSection) {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					skillSection.classList.add('in-view');
				} else {
					skillSection.classList.remove('in-view');
				}
			});
		}, { threshold: 0.2 });
		observer.observe(skillSection);
	}




		

/* 
	after-page-load-start
*/
}


// header-1-menu
document.addEventListener('DOMContentLoaded', function () {
	if($(".ag-header-1-menu").length) {
		const btn = document.querySelector('.ag-offcanvas-btn-1');
		const menu = document.querySelector('.ag-header-1-menu');
		btn.addEventListener('click', function () {
			btn.classList.toggle('active');
			menu.classList.toggle('active');
		});
	}

});


// about-1-card-animation
if (window.matchMedia("(min-width: 1200px)").matches) { 
	const about1tl = gsap.timeline({
		scrollTrigger: {
		  trigger: ".ag-about-1-card", 
		  start: "top 50%", 
		  toggleActions: "play none none reverse", 
		  markers: false 
		}
	  });
	
	  about1tl.from(".ag-about-1-card .has-ani:nth-of-type(1)", { 
		yPercent: 100,
		duration: .5
	  })
	
	  about1tl.from(".ag-about-1-card .has-ani:nth-of-type(2)", { 
		yPercent: -100,
		duration: .5
	  },"<")
}

// services-tabs-animation
document.querySelectorAll('[data-bs-toggle="tab"]').forEach(tab => {
    tab.addEventListener('shown.bs.tab', function (e) {
        const target = document.querySelector(
            e.target.getAttribute('data-bs-target')
        );

        target.classList.remove('animate__slideInUp');

        void target.offsetWidth;

        target.classList.add(
            'animate__animated',
            'animate__slideInUp'
        );
    });
});


// projects-1-animation
if ($(".wa_magnetic_1_trigger").length) {
    var waMagnets2v2 = document.querySelectorAll('.wa_magnetic_1_trigger');
    var waStrength2v2 = 30;

    waMagnets2v2.forEach((magnet) => {
        magnet.addEventListener('mousemove', moveMagnet2);
        magnet.addEventListener('mouseout', function(event) {
            const innerElements = event.currentTarget.querySelectorAll('.wa_magnetic_1_elm');
            innerElements.forEach((elm) => {
                gsap.to(elm, {
                    x: 0,
                    y: 0,
					scale: 1.05,
                    duration: 1,
                    ease: "ease1"
                });
            });
        });
    });

    function moveMagnet2(event) {
        var magnetButton = event.currentTarget;
        var bounding = magnetButton.getBoundingClientRect();
        const innerElements = magnetButton.querySelectorAll('.wa_magnetic_1_elm');

        const xMove = (((event.clientX - bounding.left) / magnetButton.offsetWidth) - 0.5) * waStrength2v2;
        const yMove = (((event.clientY - bounding.top) / magnetButton.offsetHeight) - 0.5) * waStrength2v2;

        innerElements.forEach((elm) => {
            gsap.to(elm, {
                x: xMove,
                y: yMove,
				scale: 1.05,
                duration: 1,
                ease: "ease1"
            });
        });
    }
}


// step-1-card-animation
if (window.matchMedia("(min-width: 1200px)").matches) { 
	const about1tl = gsap.timeline({
		scrollTrigger: {
		  trigger: ".ag-step-1-card", 
		  start: "top 50%", 
		  toggleActions: "play none none reverse", 
		  markers: false 
		}
	  });
	
	  about1tl.from(".ag-step-1-card .has-ani:nth-of-type(1)", { 
		yPercent: 100,
		duration: .5
	  })
	
	  about1tl.from(".ag-step-1-card .has-ani:nth-of-type(2)", { 
		yPercent: -100,
		duration: .5
	  },"<")
	
	  about1tl.from(".ag-step-1-card .has-ani:nth-of-type(3)", { 
		yPercent: 100,
		duration: .5
	  },"<")
	
	  about1tl.from(".ag-step-1-card .has-ani:nth-of-type(4)", { 
		yPercent: -100,
		duration: .5
	  },"<")
}

// Multi-Ring Orbital Skills Reveal (rings 3/4/5 staged bottom-to-top on scroll; ring 2 empty)
function initAigoraScrollAnimation() {
	const area = document.querySelector('.ag-features-1-area');
	if (!area) return;

	const cards = Array.from(area.querySelectorAll('.skill-card'));
	if (!cards.length) return;

	if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
		cards.forEach(c => { c.style.opacity = '1'; c.style.transform = 'none'; });
		return;
	}

	if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

	gsap.registerPlugin(ScrollTrigger);

	const isDesktop = window.matchMedia('(min-width: 992px)').matches;

	// Ring 2 (r=240) is intentionally EMPTY (decorative dots only).
	// Skills live on rings 3/4/5 in an exact 360° circular pattern.
	const ringRadii = { 3: 330, 4: 430, 5: 530 };
	const ringGroups = {
		3: cards.slice(0, 6),
		4: cards.slice(6, 10),
		5: cards.slice(10, 13)
	};

	if (isDesktop) {
		const centerWrap = area.querySelector('.ag-features-1-content-wrap');
		if (centerWrap) gsap.set(centerWrap, { opacity: 1, scale: 1, filter: 'none' });

		const ringsSvg = area.querySelector('.concentric-rings-svg');
		if (ringsSvg) gsap.set(ringsSvg, { transformOrigin: '500px 500px' });

		// Every card computes its FINAL circular position (exact 360° around hub).
		const cardData = [];
		Object.keys(ringGroups).forEach(ring => {
			const r = ringRadii[ring];
			const group = ringGroups[ring];
			const n = group.length;
			group.forEach((card, i) => {
				const angle = (-Math.PI / 2) + (i * (2 * Math.PI / n)); // start at top, go clockwise
				const finalX = Math.round(r * Math.cos(angle));
				const finalY = Math.round(r * Math.sin(angle));
				cardData.push({ card, ring: +ring, finalX, finalY });
			});
		});

		// All cards START at the BOTTOM of the wrap (constant bottom offset) -> true bottom-to-top rise.
		const BOTTOM = 560;
		cardData.forEach(({ card, finalX, finalY }) => {
			gsap.set(card, {
				position: 'absolute',
				top: '50%', left: '50%',
				xPercent: -50, yPercent: -50,
				x: finalX, y: BOTTOM, opacity: 0
			});
			card.addEventListener('mouseenter', () => {
				gsap.to(card, { y: finalY - 12, scale: 1.08, duration: 0.3, ease: 'power2.out', overwrite: 'auto' });
			});
			card.addEventListener('mouseleave', () => {
				gsap.to(card, { y: finalY, scale: 1, duration: 0.3, ease: 'power2.out', overwrite: 'auto' });
			});
		});

		// Pinned, reversible (scrub) timeline: scroll down -> cards rise to rings; scroll up -> return to bottom.
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: area,
				start: 'top top',
				end: '+=2400',
				pin: true, pinSpacing: true, scrub: 1, anticipatePin: 1, invalidateOnRefresh: true
			}
		});

		if (ringsSvg) tl.fromTo(ringsSvg, { scale: 0.4, opacity: 0.5 }, { scale: 1.1, opacity: 0.95, duration: 1, ease: 'power1.out' }, 0);

		// Staged per ring: ring 3 first (closest), then 4, then 5 (outermost).
		const stages = { 3: 0.02, 4: 0.38, 5: 0.72 };
		Object.keys(stages).forEach(ring => {
			const at = stages[ring];
			cardData.filter(d => d.ring === +ring).forEach(({ card, finalX, finalY }, i) => {
				tl.fromTo(card,
					{ x: finalX, y: BOTTOM, opacity: 0 },
					{ x: finalX, y: finalY, opacity: 1, duration: 1.0, ease: 'power1.out' },
					at + i * 0.025
				);
			});
		});

	} else {
		cards.forEach((card) => {
			gsap.fromTo(card,
				{ opacity: 0, y: 70, scale: 0.85 },
				{ opacity: 1, y: 0, scale: 1, duration: 0.6, scrollTrigger: { trigger: card, start: 'top 85%', end: 'top 60%', scrub: 0.8 } }
			);
		});
	}
}

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', initAigoraScrollAnimation);
} else {
	initAigoraScrollAnimation();
}

// Technology Ecosystem — reveal animation & ambient micro-interactions
function initTechEcosystemAnimation() {
	const section = document.querySelector('#technologies');
	if (!section || typeof gsap === 'undefined') return;

	if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
	if (typeof ScrollTrigger !== 'undefined') gsap.registerPlugin(ScrollTrigger);

	// 1. Reveal Timeline on Scroll
	const reveal = gsap.timeline({
		scrollTrigger: {
			trigger: "#technologies",
			start: "top 78%",
			once: true
		}
	});

	reveal
		.from(".ws-head [data-reveal]", {
			y: 24, opacity: 0, duration: 0.65, ease: "power3.out", stagger: 0.08
		})
		.from(".ws-card", {
			y: 22, opacity: 0, duration: 0.62, ease: "power3.out", stagger: 0.08
		}, "-=0.22")
		.from(".ws-center", {
			scale: 0.88, opacity: 0, duration: 0.85, ease: "expo.out"
		}, "-=0.5")
		.from(".ws-stats", {
			y: 18, opacity: 0, duration: 0.62, ease: "power3.out"
		}, "-=0.36");

	// 2. Ambient Continuous Animations
	gsap.to(".ws-center-redring", {
		rotation: "+=360",
		duration: 16,
		repeat: -1,
		ease: "none"
	});

	gsap.to(".ws-node", {
		scale: 1.2,
		transformOrigin: "center center",
		duration: 1.6,
		repeat: -1,
		yoyo: true,
		ease: "sine.inOut",
		stagger: 0.15
	});
}

// Initialize Tech Ecosystem animation
if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', initTechEcosystemAnimation);
} else {
	initTechEcosystemAnimation();
}

// projects-1-animation
if (window.matchMedia("(min-width: 1200px)").matches) { 
	const project1tl = gsap.timeline({
		scrollTrigger: {
			trigger: ".ag-projects-2-area", 
			start: "top top", 
			end: "bottom bottom", 
			toggleActions: "play none none reverse", 
			scrub: true,
			markers: false 
		}
	});
	
	project1tl.to(".ag-projects-2-sec-title", { 
		filter: "blur(5px)",
		opacity: .5,
		scale: .8
	})

}

// choose-1-animation
if (window.matchMedia("(min-width: 1200px)").matches) { 
	const project1tl = gsap.timeline({
		scrollTrigger: {
			trigger: ".ag-choose-2-height", 
			start: "top 50%", 
			end: "bottom 50%", 
			toggleActions: "play none none reverse", 
			scrub: true,
			markers: false 
		}
	});
	
	project1tl.from(".ag-choose-2-item:nth-of-type(1)", { 
		xPercent: 104,
	})
	
	project1tl.from(".ag-choose-2-item:nth-of-type(2)", { 
		xPercent: 104,
	},"<")
	
	project1tl.from(".ag-choose-2-item:nth-of-type(3)", { 
		yPercent: 104,
	},"<50%")
	
	project1tl.from(".ag-choose-2-item:nth-of-type(4)", { 
		yPercent: 104,
	},"<50%")

}



// award-2-cursor-follow
if($(".ag-award-2-item").length) {
	const featureItems = document.querySelectorAll(".ag-award-2-item");

	featureItems.forEach((featureItem) => {
		const flair = featureItem.querySelector(".cursor_follow");
	
		gsap.set(flair, { scale: 0, opacity: 0, xPercent: -60, yPercent: -50, rotate: 90,  });
	
		featureItem.addEventListener("mouseenter", () => {
			gsap.to(flair, { scale: 1, opacity: 1, duration: 0.4, rotate: 90, ease: "power3.out" });
		});


		featureItem.addEventListener("mousemove", (e) => {
			const rect = featureItem.getBoundingClientRect();
			const x = e.clientX - rect.left;
			const y = e.clientY - rect.top;
			gsap.to(flair, { x, y, duration: 0.1 });
		});
	
		featureItem.addEventListener("mouseleave", () => {
			gsap.to(flair, { scale: 0, opacity: 0, duration: 0.4, rotate: 90, ease: "power3.in" });
		});
	});
	
}

// header-3-sticky
if($(".ag-header-3-area").length) {
	const $header = $('.ag-header-3-area');
	const headerTop = $header.offset().top;
	
	$(window).on('scroll', function () {
		if ($(this).scrollTop() >= headerTop) {
			$header.addClass('has-sticky');
		} else {
			$header.removeClass('has-sticky');
		}
	});
}

// team-3-toggle-btn
if($(".ag-team-3-member-single").length) {
	$('.view-btn').on('click', function () {
		$(this).closest('.ag-team-3-member-single').toggleClass('active');
	});
}



// tools-3-animation
if (window.matchMedia("(min-width: 1200px)").matches) { 
	const project1tl = gsap.timeline({
		scrollTrigger: {
			trigger: ".ag-tools-3-wrap", 
			start: "top 50%", 
			toggleActions: "play none none reverse", 
			markers: false 
		}
	});
	

	project1tl.from(".ag-tools-3-wrap .logo-elm:nth-of-type(2)", { 
		xPercent: -80,
		rotate: -25,
		autoAlpha: 0,
		duration: .5,
	})

	project1tl.from(".ag-tools-3-wrap .logo-elm:nth-of-type(6)", { 
		xPercent: 80,
		rotate: 25,
		autoAlpha: 0,
		duration: .5,
	},"<")

	project1tl.from(".ag-tools-3-wrap .logo-elm:nth-of-type(5)", { 
		xPercent: 80,
		rotate: -25,
		autoAlpha: 0,
		duration: .5,
	},"<")

	project1tl.from(".ag-tools-3-wrap .logo-elm:nth-of-type(3)", { 
		xPercent: -80,
		rotate: 25,
		autoAlpha: 0,
		duration: .5,
	},"<")
	
	project1tl.from(".ag-tools-3-wrap .logo-elm:nth-of-type(1)", { 
		xPercent: -80,
		rotate: 25,
		autoAlpha: 0,
		duration: .5,
	},"<50%")
	project1tl.from(".ag-tools-3-wrap .logo-elm:nth-of-type(4)", { 
		xPercent: 80,
		rotate: 25,
		autoAlpha: 0,
		duration: .5,
	},"<")
}


// testimonial-3-slider
var ag_t3_slider = new Swiper(".ag_t3_slider", {
	loop: true,
	speed: 800,
	spaceBetween: 12,
	slidesPerView: "auto",
	autoplay: { delay: 5000 },

	navigation: {
		nextEl: ".ag_t3_slider_next",
		prevEl: ".ag_t3_slider_prev",
	},
	pagination: {
		el: ".ag_t3_slider_pagination",
		clickable: true,
	},

});

















})(jQuery);