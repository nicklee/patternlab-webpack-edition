// import $ from 'jquery';
// 
// class SearchToggle {
//     constructor(node) {
//         this.$node = $(node);
//         this.$menuToggle = $('.mobile-menu-link');
//         this.bindEvents();
//     }
// 
//     bindEvents() {
//         this.$node.on('click', e => {
//             e.preventDefault();
//             this.$menuToggle.removeClass('active');
//             $('.search-toggle__link').toggleClass('active');
//             $('body').removeClass('menu-active');
//             $('body').toggleClass('search-active');
//             $(window).trigger('app:SearchToggle:toggle');
//         });
//     }
// }
// 
// $('.search-toggle__link').each(function() {
//     new SearchToggle(this);
// });
