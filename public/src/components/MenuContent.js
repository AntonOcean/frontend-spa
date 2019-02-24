class MenuContent {
    render() {
        return `
                <ul>
                    <li class="menu__item"><a href="#">Home</a></li>
                    <li class="menu__item"><a href="#/profile">Profile</a></li>
                    <li class="menu__item"><a href="#/auth">Auth</a></li>
                </ul>
        `
    }

    static activateButton(name) {
        if (!name) {
            return
        }
        let menuButtons = document.getElementsByClassName('menu__item');
        let button = [].filter.call(menuButtons, (item) => {
            item.classList.remove("menu__item_active");
            return ~item.getElementsByTagName('a')[0].hash.indexOf(name)
        })[0];
        // console.log(button);
        if (button) {
            button.classList.add("menu__item_active");
        }
    }

}

export default MenuContent;