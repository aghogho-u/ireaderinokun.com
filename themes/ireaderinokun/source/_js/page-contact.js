{

    const emailMessages = {
        work: `
I work at <input type="text" aria-label="Your Company" name="company" placeholder="Your Company Name">, and we would like you to work on our project as a 
<select name="role" id="role" aria-label="My Role" required>
    <option value="" disabled selected hidden>Choose a role</option>
    <option value="Front-End Developer">Front-End Developer</option>
    <option value="UI/UX Designer">UI/UX Designer</option>
    <option value="Project Manager">Project Manager</option>
    <option value="Consultant">Consultant</option>
</select>. 
Our project aims to launch in 
<select name="timeline" id="timeline" aria-label="Your Timeline" required>
    <option value="" disabled selected hidden>Choose a timeline</option>
    <option value="Less than 4 weeks">Less than 4 weeks</option>
    <option value="4 - 8 weeks">4 - 8 weeks</option>
    <option value="More than 8 weeks">More than 8 weeks</option>
</select>
and we have a budget of 
<select name="budget" id="budget" aria-label="Your Budget" required>
    <option value="" disabled selected hidden>Choose a budget</option>
    <option value="$500 - $1000">$500 - $1000</option>
    <option value="$1000 - $5000">$1000 - $5000</option>
    <option value="More than $5000">More than $5000</option>
</select>.
`,

        advice: `
I'm currently a <input type="text" name="your_role" id="advice_your_role" aria-label="Your Role" placeholder="Comp Science Student" required> and I need some advice with <input type="text" aria-label="name" name="advice_your_topic" placeholder="Learning JavaScript" required>.
`,
        speaking: `
        I would like to invite you to speak at <input type="text" name="speaking_conference" id="speaking_conference" aria-label="Conference Name" placeholder="Your Conference" required> on the topic of <input type="text" name="speaking_topic" id="speaking_topic" aria-label="Speaking Topic" placeholder="Front-End Development" required>. The conference will take place on <input type="text" name="speaking_date" id="speaking_date" aria-label="Conference Date" placeholder="January 1st 2018" required> in <input type="text" name="speaking_location" id="speaking_location" aria-label="Conference Location" placeholder="Lagos, Nigeria" required>. 
`,

        other: `
<textarea name="other_message" rows="2" aria-label="message" placeholder="Just saying hi :)" required></textarea>
`
    };

    const emailForm = document.querySelector('.emailme-form');
    const submitButtonElement = document.querySelector('.emailme-submit');
    const emailBodyElement = document.querySelector('.emailme-message');
    const subjectField = document.getElementById('subject');
    const subjectHiddenField = document.querySelector('input[name="_subject"]');
    const formMessageElement = document.querySelector('.emailme-preheader .right');
    const emailSenderInput = document.querySelector('.emailme-sender');

    emailBodyElement.innerHTML = `<small>(Choose a subject to start drafting your message)</small>`;

    function changeEmailBody(selectedOption) {
        const subject = selectedOption.dataset.subject;
        emailBodyElement.innerHTML = emailMessages[subject];
    }


    function showFormProgress() {

        if ( !emailForm.checkValidity() ) return false;

        emailForm.classList.add('sending');

        function incrementProgress() {
            let elementWidth = document.querySelector('.emailme-preheader .left').style.width;
            elementWidth = parseInt( elementWidth.split('%')[0] );
            if ( elementWidth === 100 ) {
                return false;
            } else {
                elementWidth += 1;
                document.querySelector('.emailme-preheader .left').style.width = `${elementWidth}%`;
            }
        }

        function startInterval() {
            setInterval(function() {
                incrementProgress();
            }, 100);
        }

        setTimeout(function() {
            document.querySelector('.emailme-preheader .left').style.width = '70%';
            startInterval();
        }, 3000);
    }

    subjectField.addEventListener('change', (e) => {
        const selectedOption = e.target.selectedOptions[0];
        changeEmailBody(selectedOption);
    })

    submitButtonElement.addEventListener('click', function(e) {
        showFormProgress();
    });

    emailSenderInput.addEventListener('blur', function(e) {
        const emailSubject = `${document.getElementById('subject').value} (${e.target.value})`;
        subjectHiddenField.value = emailSubject;
    })



}

