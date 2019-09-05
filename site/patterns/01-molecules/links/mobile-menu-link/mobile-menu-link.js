// import $ from 'jquery';
// 
// class MobileMenuLink {
//     constructor(node) {
//         this.$node = $(node);
//         this.$searchToggle = $('.search-toggle__link');
//         this.bindEvents();
//     }
// 
//     bindEvents() {
//         this.$node.on('click', e => {
//             e.preventDefault();
//             this.$searchToggle.removeClass('active');
//             this.$node.toggleClass('active');
//             $('body').removeClass('search-active');
//             $('body').toggleClass('menu-active');
//             $(window).trigger('app:MobileMenuLink:toggle');
//         });
//     }
// }
// 
// $('.mobile-menu-link').each(function() {
//     new MobileMenuLink(this);
// });
