// nav menu //

    const menuOpenButton = document.querySelector('.menu-button');
    const navMenu = document.querySelector('.nav-menu');
    const menuCloseButton = document.querySelector('.nav-menu__close');
    const bodyOpacity = document.querySelector('body');
    const lock = document.querySelector('html')
    const prevent = ev => ev.preventDefault();

        menuOpenButton.addEventListener('click', function(){
            navMenu.classList.toggle('is-active')
            bodyOpacity.classList.add('is-active')
            lock.classList.add('lock')

            if (navMenu.classList.contains('is-active')){
                menuCloseButton.addEventListener('click', function(){
                    navMenu.classList.remove('is-active')
                    lock.classList.remove('lock')

                });
                
            }
            
        });


        window.addEventListener('click', function(e){
            navMenu.classList.remove('is-active');
            bodyOpacity.classList.remove('is-active')
         });

         menuOpenButton.addEventListener('click', function(e){
            e.stopPropagation();
         });


// nav menu //

// active button // 

const button = document.getElementById('button')

    button.addEventListener('click', function(){
        button.classList.toggle('clicked')
    });

// active button // 


// slider //

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    spaceBetween: -21,
    slidesPerView: 2,
    breakpoints: {

        650: {
            slidesPerView: 2,
        },

        375: {
            slidesPerView: 1,
        },

        320: {
            slidesPerView: 1,
        },
    }
  });

// slider //

// filter //

    const filterBox = document.querySelectorAll('.box');


    /* прослушка клика, если клик происходит исключительно по фильтрационному элементу, тогда воспроизводиться функция, если нет - возврат */

        document.querySelector('.product-filter__buttons').addEventListener('click', event => {
            if (event.target.tagName !== 'BUTTON') return false;

    /* получаем элемент, по которому кликнули */

            let filterClass = event.target.dataset['f'];
            console.log(filterClass);
    
    /* перебираем элементы, которые нужно фильтровать */

            filterBox.forEach( elem => {
    /* проверка на наличие класа, если - true, то скрываем нужные элементы */
                elem.classList.remove('hide');
                if (!elem.classList.contains(filterClass)){
                    elem.classList.add('hide');

                }
            });

    });

// filter //

// characterisctics //

    const moreButton = document.querySelector('.characteristics-more__button');
    const moreList = document.querySelector('.characteristics-more');

        moreButton.addEventListener('click', function(){
            moreList.classList.toggle('is-active')
        })
