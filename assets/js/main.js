const lenis = new Lenis();

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);

// 메인화면 글자 서서히 올라오기
introTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".sc-intro",
        start: "0% 0%",
        end: "100% 100%",
        scrub: 0,
    },
});
introTl.to(".sc-intro .intro-desc", { background: "rgba(0, 0, 0, 0.6)" }, "a");
introTl.to(".sc-intro .show1", { opacity: 1 }, "a");
introTl.to(".sc-intro .show1", { opacity: 0 });
introTl.to(".sc-intro .show2", { opacity: 1 });
introTl.to(".sc-intro .show2", { opacity: 0 });
introTl.to(".sc-intro .show3", { opacity: 1 });
introTl.to(".sc-intro .show3", { opacity: 0 });
introTl.to(".sc-intro .show4", { opacity: 1 });

// sc-challenge

challengeTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".sc-challenge",
        start: "0% 0%",
        end: "100% 100%",
        scrub: 0,
    },
    defaults: {
        ease: "none",
    },
});
challengeTl.to(".challenge-content", { "--opacity": 1 }, "a");
challengeTl.to(".challenge-content .text-content.txt1", { opacity: 1 }, "a");

challengeTl.to(".challenge-content", { "--opacity": 0 }, "b");
challengeTl.to(
    ".challenge-content .text-content.txt1 .to-left",
    { xPercent: 100 },
    "b"
);
challengeTl.to(
    ".challenge-content .text-content.txt1 .to-right",
    { xPercent: -100 },
    "b"
);

challengeTl.to(".challenge-content .text-content.txt1", { opacity: 0 });
challengeTl.to(".sc-challenge .challenge-content .img1", { height: 0 });
challengeTl.to(".sc-challenge .challenge-content .img2", { height: 0 });
challengeTl.to(".challenge-content", { "--opacity": 1 }, "c");
challengeTl.to(".challenge-content .text-content.txt2", { opacity: 1 });

// 3번째 글

// // sc-card
$(".sc-card").each(function () {
    barTl = gsap.timeline({
        scrollTrigger: {
            trigger: $(this),
            start: "0% 70%",
            end: "100% 90%",
            scrub: 1,
        },
        defaults: {
            ease: "none",
        },
    });
    barTl.from($(this), { "--width": 0 }, "a");
    barTl.from($(this).find(".to-left span"), { "--xPercent1": 0 }, "a");
    barTl.from($(this).find(".to-right span"), { "--xPercent2": 0 }, "a");
});

//  .sc- possible

gsap.to(".sc-possibility .hori-content", {
    scrollTrigger: {
        trigger: ".sc-possibility",
        start: "0% 0%",
        end: "100% 100%",
        scrub: 0,
        invalidateOnRefresh: true,
    },
    xPercent: -100,
    x: function () {
        return window.innerWidth;
    },
    ease: "none",
});
// // gradient

gsap.set(".gradient .item:nth-child(1),.gradient .item:nth-child(2)", {
    xPercent: -50,
});
gsap.set(".gradient .item:nth-child(3)", { xPercent: 50 });
colorBarTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".gradient",
        start: "0% 95%",
        end: "100% 80%",
        scrub: 0,
    },
});
colorBarTl.to(".gradient .item", { xPercent: 0 });

gsap.to(".gradient .desc", {
    scrollTrigger: {
        trigger: ".gradient",
        start: "0% 35%",
        end: "100% 30%",
        scrub: 0,
        onEnter: function () {
            $(".gradient").addClass("on");
        },
        onLeaveBack: function () {
            $(".gradient").removeClass("on");
        },
    },
    opacity: 1,
});

const slideCardList = document.querySelectorAll(".sc-service .sticky-item");

const cardMotionTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".slide1",
        start: "0% 0%",
        end: "100% 100%",
        scrub: 0,
        invalidateOnRefresh: true,
    },
});
cardMotionTl.to(".slide1-content", {
    x: -$(".sc-service .slide1 .text-box").innerWidth(),
});
slideCardList.forEach((element, i) => {
    cardMotionTl.to(
        element,
        {
            x: -440 * i,
        },
        "a"
    );
});

ScrollTrigger.create({
    trigger: ".slide2",
    start: "0% 0%",
    end: "50% 0%",
    onEnter: function () {
        $(".slide1").addClass("hide");
        $(".slide2").addClass("show");
    },
    onLeaveBack: function () {
        $(".slide1").removeClass("hide");
        $(".slide2").removeClass("show");
    },
});
ScrollTrigger.create({
    trigger: ".slide3",
    start: "0% 0%",
    end: "50% 0%",
    onEnter: function () {
        $(".slide2").removeClass("show");
        $(".slide3").addClass("show");
        $(".slide3-item").addClass("on");
    },
    onLeaveBack: function () {
        $(".slide2").addClass("show");
        $(".slide3").removeClass("show");
        $(".slide3-item").removeClass("on");
    },
});
ScrollTrigger.create({
    trigger: ".slide4",
    start: "0% 0%",
    end: "50% 0%",
    onEnter: function () {
        $(".slide3").removeClass("show");
        $(".slide4").addClass("show");
        $(".sticky-text").addClass("on");
    },
    onLeaveBack: function () {
        $(".slide3").addClass("show");
        $(".slide4").removeClass("show");
        $(".sticky-text").removeClass("on");
    },
});

slide3ItemList = document.querySelectorAll(".slide3 .slide3-item ");
const slide3List = gsap.timeline({
    scrollTrigger: {
        trigger: ".slide3",
        start: "0% 0%",
        end: "100% 50%",
        scrub: 1,
    },
});
slide3ItemList.forEach((a, i) => {
    slide3List.to(
        a,
        {
            x: -472 * i,
        },
        "a"
    );
});

// sticky-wrapper

$(".sticky-wrapper").each(function () {
    gsap.to($(this).find(".sticky-area"), {
        x: -$(this),
    });
});
// creator-text

gsap.to(".creator-text .text-box", {
    scrollTrigger: {
        trigger: ".sc-creator",
        start: "top top",
        end: "bottom bottom",
        toggleActions: "play none play reverse",
        scrub: 1,
    },
    opacity: 1,
});

///.sc-money .sc-howto
gsap.to(".sc-money .sticky-area", {
    scrollTrigger: {
        trigger: ".sc-money",
        start: "0% 0%",
        end: "100% 100%",
        scrub: 0,
        invalidateOnRefresh: true,
    },
    xPercent: -100,
    x: function () {
        return window.innerWidth;
    },
    ease: "none",
});
gsap.to(".sc-howto .sticky-area", {
    scrollTrigger: {
        trigger: ".sc-howto",
        start: "0% 0%",
        end: "100% 100%",
        scrub: 0,
        invalidateOnRefresh: true,
    },
    xPercent: -100,
    x: function () {
        return window.innerWidth;
    },
    ease: "none",
});

// .join

gsap.to(".join", {
    scrollTrigger: {
        trigger: ".sc-ground",
        start: "0% 0%",
        end: "50% 100%",
        scrub: 1,
    },

    y: 0,
});
