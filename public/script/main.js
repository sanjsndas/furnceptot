document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.fanboxy').forEach(function (element) {
        let img = element.querySelector('img');
        if (img) {
            element.setAttribute('href', img.getAttribute('src'));
        }
    });

    
    if (typeof Fancybox !== "undefined") {
        Fancybox.bind(".fanboxy");
    }

    let randomColorElement = document.getElementById('randomColor');
    let randomShadowElement = document.getElementById('randomShadow');

    if (randomColorElement && randomShadowElement) {
        let randomColor = randomColorElement.getAttribute('class');
        let randomShadow = randomShadowElement.getAttribute('class');

        let headerImg = document.querySelector('.header--block img');
        if (headerImg) {
            let shadowColor = (randomColor === '#ffffff') ? '#333333' : '#959595';
            headerImg.style.boxShadow = `0px 0px ${randomShadow} ${shadowColor}`;
        }
    }

    let headerRow = document.querySelector('.header--block .row');
    if (headerRow && headerRow.classList.contains('flex-column-reverse')) {
        headerRow.style.gap = '40px';

        document.querySelectorAll('.header--block .col').forEach(function (col) {
            col.style.textAlign = 'center';
        });
    }

    let mainBox = document.querySelector('.main--box');
    let galBox = document.querySelector('.gal--box');
    let contentBox = document.querySelector('.content--box');

    if (mainBox && window.getComputedStyle(mainBox).flexDirection === 'column') {
        if (galBox) galBox.style.paddingTop = '0px';
    } else {
        if (contentBox) contentBox.style.paddingTop = '0px';
    }

    let mntbn = document.querySelector('.mntbn');
    if (mntbn && mntbn.classList.contains('btnWise')) {
        let calloutRow = document.querySelector('.callout--box .row');
        if (calloutRow) {
            calloutRow.style.flexDirection = 'column-reverse';
        }
    }
});


 
