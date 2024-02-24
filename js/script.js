"use script"

const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows());
    }
};

//-------------------------------------------------------------------------------------------------
// Animation
// AOS.init({
//     duration: 1200,
// })

//-------------------------------------------------------------------------------------------------
// Меню бурнер
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.header__menu');
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}

//-------------------------------------------------------------------------------------------------
// добавить класс при скроле страницы
let scrollpos = window.scrollY

const header = document.querySelector("header")
const scrollChange = 1

const add_class_on_scroll = () => header.classList.add("bg-head")
const remove_class_on_scroll = () => header.classList.remove("bg-head")

window.addEventListener('scroll', function() { 
    scrollpos = window.scrollY;

    if (scrollpos >= scrollChange) { 
        add_class_on_scroll() 
    }
    else { 
        remove_class_on_scroll() 
    }

})

//-------------------------------------------------------------------------------------------------
// Маска на телефон 
jQuery(document).ready(function($) {
    $("#phone_mask").mask("+41 (99)-999-99-99",{placeholder:" "});
});

//-------------------------------------------------------------------------------------------------
// скрол на верх
jQuery(document).ready(function() {
    var btn = $('.up_btn');  
        btn.on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({scrollTop:0}, '300');
        });
    });

//-------------------------------------------------------------------------------------------------
// koocies 
document.addEventListener("DOMContentLoaded", function() {
    let koocies = document.querySelector('.koocies');

    setTimeout(function() {
        koocies.classList.add('show');
    }, 500);

    let acceptBtn = document.querySelector('.btn__accept');
    let rejectBtn = document.querySelector('.btn__reject');

    acceptBtn.addEventListener('click', function() {
        koocies.classList.remove('show');
    });

    rejectBtn.addEventListener('click', function() {
        koocies.classList.remove('show');
    });
});

//-------------------------------------------------------------------------------------------------
// открыть под меню
document.addEventListener('DOMContentLoaded', function () {
    let carrentMenuLink = document.querySelector('.carrent-menu__link');

    carrentMenuLink.addEventListener('click', function () {
        // Переключаем класс "clicked" для изменения стилей
        this.classList.toggle('clicked');
    });
});

//-------------------------------------------------------------------------------------------------
// Прокрутка чисел на странице 
function animateCount(element, targetValue, duration) {
    $({ count: parseInt(element.text()) }).animate({ count: targetValue }, {
        duration: duration,
        step: function () {
            element.text(Math.floor(this.count));
        },
        complete: function () {
            element.text(targetValue);
        }
    });
}
function startCountAnimation() {
    animateCount($('#years'), 22, 2000); // Adjust duration as needed
    animateCount($('#partners'), 15, 2000);
    animateCount($('#countries'), 14, 2000);
}
// Trigger the counting animation when the document is ready
$(document).ready(function () {
    startCountAnimation();
});

//-------------------------------------------------------------------------------------------------
// Прокрутка при клике
// const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
// if(menuLinks.length > 0) {
// 	menuLinks.forEach(menuLink => {
// 		menuLink.addEventListener("click", onMenuLinkClick);
// 	});

// 	function onMenuLinkClick(e) {
// 		const menuLink = e.target;
// 		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
// 			const gotoBlock = document.querySelector(menuLink.dataset.goto);
// 			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;
		
// 			if (iconMenu.classList.contains('_active')) {
// 				document.body.classList.remove('_lock');
// 				iconMenu.classList.remove('_active');
// 				menuBody.classList.remove('_active');
// 			}

// 			window.scrollTo({
// 				top: gotoBlockValue,
// 				behavior: "smooth"
// 			});
// 			e.preventDefault();
// 		}
// 	}
// }

//-------------------------------------------------------------------------------------------------
//прикрепление файла в форме
// const formImage = document.getElementById('formImage');
// const formPreview = document.getElementById('formPreview');

// formImage.addEventListener('change', () => {
// 	uploadFile(formImage.files[0]);
// });

// function uploadFile(file) {
// 	if (!['image/jpeg', 'image/png', 'image/gif', 'image/pdf'].includes(file.type)) {
// 		alert('Разрешены только изображения!');
// 		formImage.value ='';
// 		return;
// 	}
// 	if (file.size > 2 * 1024 * 1024) {
// 		alert('Файл должен быть менее 2 МБ.');
// 		return;
// 	}
// 	var reader = new FileReader();
// 	reader.onload = function (e) {
// 		formPreview.innerHTML = `<img src="${e.target.result}" alt="Фото">`;
// 	};
// 	reader.onerror = function (e) {
// 		alert('Ошибка');
// 	};
// 	reader.readAsDataURL(file);
// }

//-------------------------------------------------------------------------------------------------
//style main-bg
// function ibg(){
// 	$.each($('.ibg'), function(index, val) {
// 		if($(this).find('img').length>0){
// 			$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
// 		}
// 	});
// };
// ibg();

//-------------------------------------------------------------------------------------------------
// скрывать и показывать пароль в инпуте
// var button2 = document.getElementById("showEye2");
// button2.onclick = showEye2;

// var input2 = document.getElementById("show2");
// var icon = document.getElementById("i");

// function showEye2 () {
// 	if(input2.getAttribute('type') == 'password') {
// 		input2.removeAttribute('type');
// 		input2.setAttribute('type', 'text')
// 		button2.innerHTML='<i id="i" class="far fa-eye-slash">';
// 	} else {
// 		input2.removeAttribute('type');
// 		input2.setAttribute('type', 'password');
// 		button2.innerHTML='<i id="i" class="far fa-eye">';
// 	}
// }

//-------------------------------------------------------------------------------------------------
// $('#form').submit(function(){
// 	$.ajax({
// 		type:"POST",
// 		url: "mail.php",
// 		data: $(this).serialize()
// 	}).done(function() {
// 	alert("Thank you for contacting us!");
// 	setTimeout(function() {
// 		$.magnificPopup.close();
// 	}, 1000);
// 	});
// 	return false;
// });