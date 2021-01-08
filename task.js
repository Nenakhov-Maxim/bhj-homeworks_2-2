let menuListSub = document.getElementsByClassName('menu__link');
let allA = Array.from(menuListSub);
let sumMenuList = Array.from(menuListSub).length;
let companyMenu;
let consultantMenu;

for (let i = 0; i < sumMenuList; i++) {
    if (menuListSub.item(i).closest('li').querySelector('ul')) {
        switch (menuListSub.item(i).textContent) {
            case "О компании":
                companyMenu = menuListSub.item(i).closest('li').querySelector('ul');
                menuListSub.item(i).onclick = showMenuCompany;
                break;

            case "Услуги":
                consultantMenu = menuListSub.item(i).closest('li').querySelector('ul');
                menuListSub.item(i).onclick = showMenuConsult;
                break;
        }
    }
}

function showMenuCompany() {
    debugger;
    companyMenu.className = "menu menu_sub menu_active";
    return false
}

function showMenuConsult() {
    debugger;
    consultantMenu.className = "menu menu_sub menu_active";
    return false;
}