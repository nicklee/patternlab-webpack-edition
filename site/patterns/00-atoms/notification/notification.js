// Allow notifications to be dismissed
class NotificationToggle {

    constructor( ) {
        this.container =            document.querySelector('.notification');
        this.action =               document.querySelector('.js-notification-dismiss');
        this.inactiveClass =        'notification--inactive';

        this.bindEvents();
    }

    dismiss(event) {
        // prevent default link action
        event.preventDefault();

        this.container.classList.add(this.inactiveClass);
    }

    bindEvents() {
        this.action.addEventListener( 'click', (event) => this.dismiss(event) );
    }

}

export default NotificationToggle;

[].forEach.call(document.getElementsByClassName('notification'), function(el) {
    new NotificationToggle(el);
});
