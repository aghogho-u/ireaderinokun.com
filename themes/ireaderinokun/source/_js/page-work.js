{


    function scrollScreenshot(screenshotElement, direction) {

        let currentTransform = screenshotElement.style.transform ? screenshotElement.style.transform : 'translateY(0%)';
        currentTransform = currentTransform.split('(')[1];
        currentTransform = currentTransform.split('%')[0];

        switch (direction) {
            case 'down':
                currentTransform = parseFloat(currentTransform) - 0.2
                break;
            case 'up':
                currentTransform = parseFloat(currentTransform) + 0.2
                break;
            default:
                break;
        }

        if (currentTransform < 0.2 && currentTransform > -100) {
            screenshotElement.style.transform = `translateY(${currentTransform}%)`;
        }
    }

    function resetScreenshot(screenshotElement) {
        screenshotElement.style.transition = 'transform 0.5s';
        screenshotElement.style.transform = 'translateY(0%)';
        setTimeout(() => {
            screenshotElement.style.transition = 'none';
        }, 1000);
    }

    const workSectionElement = document.querySelector('.site-page--work');
    const workSections = [];
    const workSectionElements = document.querySelectorAll('.work');
    workSectionElements.forEach((element) => {
        workSections.push({
            element: element,
            start: element.offsetTop + workSectionElement.offsetTop - (window.innerHeight / 3),
            end: element.offsetTop + workSectionElement.offsetTop + element.clientHeight
        })
    });


    let lastScrollTop = 0;
    window.addEventListener('scroll', function (e) {

        const viewportScrollTop = e.target.body.scrollTop;

        function scrollDirection() {
            if (lastScrollTop >= viewportScrollTop) return 'up';
            return 'down';
        }

        function isInView(workSection) {
            return viewportScrollTop > workSection.start && viewportScrollTop < workSection.end
        }

        workSections.forEach((workSection) => {
            const screenshotElement = workSection.element.querySelector('.work-screenshot');
            if (!isInView(workSection)) return resetScreenshot(screenshotElement);
            scrollScreenshot(screenshotElement, scrollDirection())
        });

        lastScrollTop = viewportScrollTop

    });

}