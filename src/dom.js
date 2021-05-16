
export const dom = {
    incorrectHighlightEmail () {
        const emailInput = document.querySelector('input[name="email"]');
        emailInput.blur();
        const warningDiv = this.generateWarningTextArea("This is not looking like an valid e-mail.");
        emailInput.parentNode.insertAdjacentElement('beforeend', warningDiv)
        emailInput.classList.add("incorrect-highlight");
        console.log(emailInput)
        emailInput.nextSibling.classList.remove('hidden');
        emailInput.onclick = () => {
            emailInput.classList.remove('incorrect-highlight');
            emailInput.nextSibling.classList.add('hidden');
            warningDiv.remove();
        };
    },
    incorrectHighlightDates() {
        const [d1, d2] = document.querySelectorAll('input[type="date"]');
        
        d1.previousSibling.classList.remove('hidden');
        d2.previousSibling.classList.remove('hidden');
        const warningDiv = this.generateWarningTextArea("Invalid date");
        d1.classList.add("incorrect-highlight")
        d2.classList.add("incorrect-highlight")
        d1.insertAdjacentElement('afterend', warningDiv);
        
        d2.insertAdjacentElemnt('afterend', warningDiv);
        console.log(d1,d2)
        const dateClickEvent = (ev) => {
            d1.classList.remove("incorrect-highlight");
            d2.classList.remove("incorrect-highlight");
            warningDiv.remove();
            warningDiv.remove();
            d1.previousSibling.classList.add('hidden');
            d2.previousSibling.classList.add('hidden');

            d2.removeEventListener('click', dateClickEvent);
            d1.removeEventListener('click', dateClickEvent);
        };
        d1.onclick = dateClickEvent;
        d2.onclick = dateClickEvent;
    },


    generateWarningTextArea(message) {
       
        const incInputDiv = document.createElement('div');
        incInputDiv.className = "incorrect-input";
        const textArea = document.createElement('span');
        textArea.innerText = `${message}`;
        textArea.className = "warning-text";
        incInputDiv.appendChild(textArea);
        
        return incInputDiv

    }
}