$(document).ready(function () {
    let toggleSwitch = document.querySelector('.switchButton');
    let style = document.getElementById('style');
    let dark = false;
    $(toggleSwitch).click(function () {
        if (dark == false) {
            dark = true;
            $(style).prop('href', 'styles/dark_theme.css');
        } else {
            dark = false;
            $(style).prop('href', 'styles/light_theme.css');
        }
    });
});