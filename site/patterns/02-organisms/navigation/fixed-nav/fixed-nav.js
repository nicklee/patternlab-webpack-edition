import inView from 'in-view';

class fixedNav {

    constructor() {
        this.node =         '.pane';
        this.data =         'data-chapter';
        this.nav =          'fixed-nav-item__link';
        this.navSelected =  'fixed-nav-item__link--active';
        this.checkView();
    }

    checkView() {

        inView.offset(100);
        inView.threshold(0.5);
        inView(this.node)
            .on('enter', el => {
                var currentChapter = el.getAttribute(this.data);
                const match = document.querySelector(`.fixed-nav-item__link[data-chapter="${currentChapter}"]`);
                match.classList.add( this.navSelected );
            })
            .on('exit', el => {
                var currentChapter = el.getAttribute(this.data);
                const match = document.querySelector(`.fixed-nav-item__link[data-chapter="${currentChapter}"]`);
                match.classList.remove( this.navSelected );
            });

    }

}

new fixedNav();
