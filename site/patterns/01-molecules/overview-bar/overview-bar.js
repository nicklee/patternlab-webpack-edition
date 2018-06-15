import $ from 'jquery';
function StickyInfo() {

    /**
     * Add/Remove class on navigation items when node with the related ID is at the top the of the page
     */

    var $sections       = $( '.page__content' ),
        offset          = 0;

    $sections.each(function(){

        var $item     = $( this ),
            topPos    = Math.round( $item.offset().top ),
            start     = topPos - offset,
            end       = topPos + ( $item.outerHeight() - offset );

        // attach scroll event
        $( window ).on( 'scroll load resize', function(){

            // current scroll position
            var scrollPos = $( this ).scrollTop();

            // Set class if current scroll position is either at start or end of item
            if( scrollPos >= start && scrollPos < end ){
                // Show article stuff in header
                $( '.js-sticky' ).addClass( 'stuck' );

            } else {
                // Hide article stuff in header
                $( '.js-sticky' ).removeClass( 'stuck' );

            }
        });
    });
}

StickyInfo();
