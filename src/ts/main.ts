import { AnchorScroll, FixedNavbar, Form } from "./components";

module app {
    export class Main {
        constructor() {
            console.log('Hello World');

            new FixedNavbar(<HTMLElement> document.getElementsByClassName('navbar-container')[0]);
            let anchorScrollMenu: AnchorScroll = new AnchorScroll({
                elements: document.querySelectorAll('.navbar-menu > a'),
                activeClass: 'is-active'
            });
            let anchorScrollNavbar: AnchorScroll = new AnchorScroll({
                elements: document.querySelectorAll('.navbar .navbar-start .links > a'),
                activeClass: 'is-active'
            });
        }

        public static init() {
            return new Main();
        }
    }
}

app.Main.init();
