import { ArrayTools } from "../utils";

export class FixedNavbar {
    navbar: HTMLElement;
    burger: HTMLElement;

    isOpened: boolean = false;
    
    constructor(navbar: HTMLElement) {
        this.navbar = navbar;

        window.addEventListener('scroll', this.onScroll);
        this.burger = <HTMLElement> this.navbar.querySelector('[data-menu]');
        if (this.burger) {
            this.burger.addEventListener('click', this.onBurgerClick);
        }

        let menuLinks: HTMLElement[] = ArrayTools.toArray(this.navbar.querySelectorAll('.navbar-menu > a'));
        menuLinks.forEach((link: HTMLElement) => {
            link.addEventListener('click', this.onMenuLinkClick);
        });
        
        this.onScroll();

        window.addEventListener('resize', () => {
            if (document.body.offsetWidth >= 992) {
                this.toggle(false);
            }
        })
    }

    private onScroll = (e?: Event) => {
        if (window.scrollY > 0) {
            this.navbar.classList.add('is-scrolled')
        }
        else {
            this.navbar.classList.remove('is-scrolled')
        }
    };

    private onBurgerClick = (e?: Event) => {
        this.toggle(!this.isOpened);
    }

    private onMenuLinkClick = (e?: Event) => {
        this.toggle(false);
    }

    private toggle(opened: boolean) {
        this.isOpened = opened;
        if (this.isOpened) {
            this.burger.classList.add('close');
            this.navbar.classList.add('is-opened')
        }
        else {
            this.burger.classList.remove('close');
            this.navbar.classList.remove('is-opened')
        }
    }
}