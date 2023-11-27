// sc-possibility 이후 body dark 모드임

start = $(".sc-possibility").offset().top;
end = $(".sc-prove").last().offset().top;

ScrollTrigger.create({
    trigger: ".sc-intro .sticky-wrap",
    start: "50% 0%",
    end: "50% 0%",
    onEnter: function () {
        $("#header").addClass("on");
    },
    onLeaveBack: function () {
        $("#header").removeClass("on");
    },
});

$(`[data-theme="header"]`).each(function () {
    startVal = $(this).data("start") ? $(this).data("start") : "0% 0%";
    ScrollTrigger.create({
        trigger: $(this),
        start: startVal,
        end: "100% 50%",
        // markers:true,
        toggleClass: { targets: "#header", className: "invert" },
    });
});

$(`[data-theme="body"]`).each(function () {
    ScrollTrigger.create({
        trigger: $(this),
        start: "0% 50%",
        end: "100% 50%",
        // markers:true,
        toggleClass: { targets: "body", className: "dark" },
    });
});

$(".up").click(function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
