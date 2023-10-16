class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <header class="bg-slate-200 p-6">
            <nav class="flex">
                <a href="${document.referrer}">
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24">
                <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" fill="black" />
              </svg>
              </a>
                <ul role="navigation" class="flex gap-4 m-auto">
                    <li> 
                        Essentials
                    </li>
                    <li>
                        Directives
                    </li>
                    <li>
                        Magic Properties
                    </li>
                    <li>
                        Global
                    </li>
                </ul>
            </nav>
    </header>
        `;
    }
}   

customElements.define('header-component', Header);