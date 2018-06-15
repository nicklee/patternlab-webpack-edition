import $ from 'jquery';

class Tabs {

    constructor( ) {
        this.bindEvents();
    }

    tabs(eventObject) {

        // Find current target
        var $toggle = $( eventObject.currentTarget );

        // Tab id is set in data-tab in html
        var tabid = $toggle.attr('data-tab');

        // Class to apply to active items
        var activeClassItem = 'tab-item--active';
        var activeClassContent = 'tabs__content--current';

        // Remove all existing .current
        $('.tab-item').removeClass(activeClassItem);
        $('.tabs__content').removeClass(activeClassContent);

        // Add current class
        $toggle.addClass(activeClassItem);
        $('#' + tabid).addClass(activeClassContent);

    }

    bindEvents() {
        $('.tab-item').on('click', (eventObject) => this.tabs(eventObject) );
    }

}

$('.js-tabs').each(function() {
    new Tabs(this);
});
