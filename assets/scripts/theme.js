function themeSwitcher() {
    // check if buttons are white (dark mode on)
    if (document.documentElement.style.getPropertyValue('--button-color') == 'white') {
        // change to light mode if in dark mode
        document.documentElement.style.setProperty('--background-color', 'white')
        document.documentElement.style.setProperty('--button-color', '#090f16')
    } else {
        // change to dark mode if in light mode
        document.documentElement.style.setProperty('--background-color', '#090f16')
        document.documentElement.style.setProperty('--button-color', 'white')
    }
}