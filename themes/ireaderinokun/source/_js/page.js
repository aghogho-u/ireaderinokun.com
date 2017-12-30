
/* Article ****************** */

const articleElements = Array.from( document.querySelectorAll('.excerpts-highlightEffect .excerpt') );
if ( articleElements ) {

    function highlightElement(element) {
        articleElements.forEach((slideElement) => {
            slideElement.classList.add('inactive');
            slideElement.classList.remove('active');
        });
        element.classList.remove('inactive');
        element.classList.add('active');
    }

    function resetElements() {
        articleElements.forEach((el) => {
            el.classList.remove('inactive');
            el.classList.remove('active');
        })
    }

    articleElements.forEach((el) => {
        el.addEventListener('mouseenter', function(e) {
            highlightElement(e.target);
        });
        el.addEventListener('mouseleave', function(e) {
            resetElements()
        });
    });
}




