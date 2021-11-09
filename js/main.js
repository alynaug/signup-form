const form = document.getElementById('form');
const errorElement = document.getElementsByClassName('error-text').firstChild;
const input = document.forms['form'];


form.addEventListener('submit', (e) => {
    formValidate(e, input);
    
})

function formValidate(e, input) {
    for (let i = 0; i < input.length; i++) {
        if (input[i].type === 'submit')
        break;
        
        let emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        let errorIcon = input[i].nextElementSibling;
        let errorText = input[i].nextElementSibling.nextElementSibling;

        if (input[i].value !== '' || input[i].value.match(emailFormat)) {
            errorText.innerText = '';
            errorIcon.style.display = "none";
            input[i].style.border = "solid 0.75px hsla(246, 25%, 77%, 0.4)";
            document.getElementById("email").style.color = "var(--color-neutral-dark-blue)";
        }

        if (input[i].type === 'email' && !input[i].value.match(emailFormat)) {
            e.preventDefault();
            let message = 'Looks like this is not an email';
            errorText.innerText = message; 
            errorIcon.style.display = "block";
            document.getElementById("email").style.color = "var(--color-primary-red)";
            input[i].style.border = "solid 2px var(--color-primary-red)";
        }
        
        else if (input[i].value === '' || input[i].value === null) {
            e.preventDefault();
            let placeholder = input[i].placeholder;
            let message = `${placeholder} cannot be empty`;
            let errorText = input[i].nextElementSibling.nextElementSibling;
            errorText.innerText = message;
            errorIcon.style.display = "block";
            input[i].style.border = "solid 2px var(--color-primary-red)";
        }
    }
}
