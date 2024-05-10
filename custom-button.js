class CustomButton extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        const button = document.createElement('button');
        const style = document.createElement('style');

        style.textContent = `
            button {
                font-family: Arial, sans-serif;
                border: none;
                cursor: pointer;
                padding: 10px 20px;
                border-radius: 5px;
            }
            button.small {
                font-size: 12px;
                padding: 5px 10px;
            }
            button.large {
                font-size: 20px;
                padding: 15px 30px;
            }
            button.red {
                background-color: red;
                color: white;
            }
            button.blue {
                background-color: blue;
                color: white;
            }
        `;

        const color = this.getAttribute('color');
        const size = this.getAttribute('size');

        button.classList.add(color, size);
        button.textContent = this.textContent;

        shadow.appendChild(style);
        shadow.appendChild(button);
    }
}

customElements.define('custom-button', CustomButton);
