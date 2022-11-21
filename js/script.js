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
 
// modal form
$('.button').click(function () {
      var buttonId = $(this).attr('id');
      $('body').addClass('locked');
      $('#modal-container').removeAttr('class').addClass(buttonId);
      $('#modal-container').removeClass('hide');
      $('.modal-background').addClass('opened');
    
    })
    
    $('.modal-background').click(function () {
      $('#modal-container').addClass('out');
      $('body').removeClass('modal-active');
      $('.modal-background').removeClass('opened');
      $('body').removeClass('locked');
    });
    $('.modal-background').on('click', (e) => {
     
      setTimeout(() => {
            $('.modal__box1').removeClass('remove');
            $('.modal__box2').removeClass('show');
          $('#modal-container').addClass('hide');
      }, 500);
    });
    $('.modal__close').click(function () {
      $('.showblock').removeClass('Show');
      $('#modal-container').addClass('out');
      $('body').removeClass('modal-active');
      $('.modal-background').removeClass('opened');
      $('body').removeClass('locked');
    });
    $('.modal__close').on('click', (e) => {
   
      $('.showblock_background').removeClass('Show_bg');
      setTimeout(() => {
            $('.modal__box1').removeClass('remove');
            $('.modal__box2').removeClass('show');
          $('#modal-container').addClass('hide');
      }, 500);
    });
    
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
            }, 3000);
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


            show.textContent = show.textContent.replace('Надіслати', 'Успішно надіслано');
            setTimeout(function () {


                  show.classList.remove('change');
                  show.textContent = show.textContent.replace('Успішно надіслано', 'Надіслати');
            }, 3000);
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
// form modal
$('.form3').submit(function (e) {
      let modal__box1 = document.querySelector(".modal__box1");
      let modal__box2 = document.querySelector(".modal__box2");
      let section = document.querySelector(".form3");
      var empty = $(this).parent().find("input").filter(function () {
            return this.value === "";
      });
      if (!empty.length) {
            modal__box1.classList.toggle("remove");
            modal__box2.classList.toggle("show");


           
            $('body').addClass('overlock');
            //Если все графы заполнены, то показываем popup


            //очищаем все данные текстовых полей, кроме кнопок
            $('form input').not(':button, :submit').val('');

      }
      e.preventDefault();
});



