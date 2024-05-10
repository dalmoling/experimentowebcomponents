class ThemeToggle extends HTMLElement {
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
                background-color: var(--button-bg-color, black);
                color: var(--button-color, white);
            }
            body.light-theme {
                --button-bg-color: black;
                --button-color: white;
                background-color: white;
                color: black;
            }
            body.dark-theme {
                --button-bg-color: white;
                --button-color: black;
                background-color: black;
                color: white;
            }
        `;

        button.textContent = 'Alternar Tema';

        button.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
            document.body.classList.toggle('light-theme');
        });

        shadow.appendChild(style);
        shadow.appendChild(button);

        // Inicializa o tema padrão como claro
        document.body.classList.add('light-theme');
    }
}

customElements.define('theme-toggle', ThemeToggle);
