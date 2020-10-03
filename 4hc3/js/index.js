let imgBox = $("#img-box");
let card = $("#card");
let content = $("#content");
let img = $("#img");
let name = $("#name");
let relationship = $("#relationship");
let mock = $("#mock");
let title = $("#title");
let container = $("#container");

let prev = $("#prev");
let next = $("#next");

let isShow = false;
let current = 0;

const imgDirPath = "img/";

const isMobile = $(window).width() < 784;

const data = [{
    name: "Sultan Hong",
    relationship: "brother",
    imgSrc: "brother.jpeg"
}, {
    name: "Xuan Hong",
    relationship: "grandchild",
    imgSrc: "grandchild1.jpeg"
}, {
    name: "Walter Hong",
    relationship: "grandchild",
    imgSrc: "grandchild2.jpeg"
}, {
    name: "Ajay Hong",
    relationship: "nephew",
    imgSrc: "nephew1.jpeg"
}, {
    name: "Tom Hong",
    relationship: "nephew",
    imgSrc: "nephew2.jpeg"
}, {
    name: "Leire Hong",
    relationship: "neice",
    imgSrc: "neice1.jpeg"
}, {
    name: "Svanhildr Galvan",
    relationship: "neice",
    imgSrc: "neice2.jpeg"
}, {
    name: "Hyeon-Ju Hong",
    relationship: "neice",
    imgSrc: "neice3.jpeg"
}, {
    name: "Anna Hong",
    relationship: "sister",
    imgSrc: "sister.jpeg"
}];

imgBox.on("click", function() {
    console.log("isShow: "+isShow);
    if (!isShow) { // hidden -> show
        if (isMobile) {
            card.css({
                "height": "360px"
            });
            content.css({
                visibility: "visible",
                opacity: 1,
                top: -30
            });
        } else {
            card.css({
                "height": "410px"
            });
            content.css({
                "visibility": "visible",
                "opacity": 1,
                "top": "-20px"
            });
        }
    } else { // shown -> hidden
        if (isMobile) {
            card.css({
                "height": "260px"
            });
            content.css({
                visibility: "hidden",
                opacity: 0,
                top: "-69px"
            });
        } else {
            card.css({
                "height": "340px"
            });
            content.css({
                visibility: "invisible",
                opacity: 0,
                top: "-100px"
            });
        }
    }
    isShow = !isShow;
});

function renderImg(index) {
    img.attr("src", imgDirPath+data[index].imgSrc);
}

function renderContent(current) {
    name.text(data[current].name);
    relationship.text(data[current].relationship);
}

function blurAll() {
    img.css({filter: "blur(4px)", opacity: 1});
    title.css({filter: 'blur(4px)', opacity: 0.4});
    prev.css({filter: 'blur(4px)', opacity: 0.4});
    next.css({filter: 'blur(4px)', opacity: 0.4});
    container.css({filter: 'blur(4px)', opacity: 0.4});
}

function unBlurAll() {
    img.css({filter: "none", opacity: 1});
    title.css({filter: 'none', opacity: 1});
    prev.css({filter: 'none', opacity: 1});
    next.css({filter: 'none', opacity: 1});
    container.css({filter: 'none', opacity: 1});
}

prev.on("click", function() {
    if (current>0) {
        current--;
        renderImg(current);
        renderContent(current);
    }
});

next.on("click", function () {
    if (current<data.length-1) {
        current++;
        renderImg(current);
        renderContent(current);
    }
});

mock.on("click", function () {
    unBlurAll();
    $(this).css({
        height: "0"
    });
});

title.on("click", function () {
    blurAll();
    mock.css({
        height: "100%"
    })
});

title.hover(function () {
    $(this).text("Instruction");
}, function () {
    $(this).text("Memoize");
});

renderImg(current);
renderContent(current);