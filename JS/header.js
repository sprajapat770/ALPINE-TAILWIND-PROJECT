class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <header class="bg-slate-200 p-6">
            <nav class="flex">
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