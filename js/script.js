//Header burger     
let header__burger = document.querySelector('.burger');
  let header_menu = document.querySelector('.header__menu');
  let back = document.querySelector('body');


  header__burger.onclick = function(){
      header__burger.classList.toggle('active');
      header_menu.classList.toggle('active');
      back.classList.toggle('locked');
  }
//Header burger   

$('.form').submit(function (e) {
      let show = document.querySelector(".form__btn");
      let section = document.querySelector(".form");
      var empty = $(this).parent().find("input").filter(function () {
            return this.value === "";
      });
      if (!empty.length) {
            show.classList.toggle("change");


            show.textContent = show.textContent.replace('Надіслати', 'Успішно надіслано');
            setTimeout(function () {


                  show.classList.remove('change');
                  show.textContent = show.textContent.replace('Успішно надіслано', 'Надіслати');
            }, 2000);
            $('body').addClass('overlock');
            //Если все графы заполнены, то показываем popup


            //очищаем все данные текстовых полей, кроме кнопок
            $('form input').not(':button, :submit').val('');

      }
      e.preventDefault();
});

$('.form2').submit(function (e) {
      let show = document.querySelector(".form2__btn");
      let section = document.querySelector(".form2");
      var empty = $(this).parent().find("input").filter(function () {
            return this.value === "";
      });
      if (!empty.length) {
            show.classList.toggle("change");


            show.textContent = show.textContent.replace('Консультація', 'Успішно надіслано');
            setTimeout(function () {


                  show.classList.remove('change');
                  show.textContent = show.textContent.replace('Успішно надіслано', 'Консультація');
            }, 2000);
            $('body').addClass('overlock');
            //Если все графы заполнены, то показываем popup


            //очищаем все данные текстовых полей, кроме кнопок
            $('form input').not(':button, :submit').val('');

      }
      e.preventDefault();
});
// lang select
$('.language-select').click(function () {
      $(this).toggleClass('open');
      $('.header__lang').toggleClass('opens');
})

$('.language-select li').click(function () {
      var setLang = $('.language-select').data('location'),
            dataLangSelect = $(this).data('lang')
      $('.language-select').data('location', dataLangSelect);
      $('.language-select li').removeClass('active');
      $(this).toggleClass('active');
})

// close lang block*
document.addEventListener('click', function (event) {
      var e = document.querySelector('.language-select');
      if (!e.contains(event.target)) {
            $('.header__lang').removeClass('opens');
            $('.language-select').removeClass('open');
      }
});
// next word     
function nextMsg(i) {
      if (messages.length == i) {
            i = 0;
      }
      $('#message').html(messages[i]).fadeIn(500).delay(1000).fadeOut(500, function () {
            nextMsg(i + 1);
      });
};

var messages = [
      "Back-end!",
      "Front-end",
      "Mobile developers",
      "DevOps",
      "UI/UX Design",
       "Tester"
];

$('#message').hide();

nextMsg(0);

// menu
// scrollToLink
document.addEventListener("click", e => {
      let anchorlink = e.target.closest('a[href^="#"]');
      
      if (anchorlink) {
         e.preventDefault();
         let hashval = anchorlink.getAttribute('href')
         let target = document.querySelector(hashval)
         const yOffset = 0 -50;
         const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
         window.scrollTo({ top: y, behavior: 'smooth' });
    
         history.pushState(null, null, hashval)
         e.preventDefault();
      }
    })
    //remove bg
    function removeCls() {
      $('.burger').removeClass('active');
      $('.nav').removeClass('active');
      $('body').removeClass('locked');
    }