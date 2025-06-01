const theme1 = {
    "--main-back": "hsl(222, 26%, 31%)",
    "--toggle-back": "hsl(223, 31%, 20%)",
    "--screen-back": "hsl(224, 36%, 15%)",
    "--key-back": "hsl(225, 21%, 49%)",
    "--key-math-back-hover": "hsl(0, 0%, 100%)",
    "--key-op-back-hover": "hsl(223, 40%, 63%)",
    "--key-calc-back-hover": "hsl(6, 90%, 60%)",
    "--key-shadow": "hsl(221, 9%, 35%)",
    "--key-back-toggle": "hsl(6, 63%, 50%)",
    "--dark-key-shadow": "hsl(6, 70%, 34%)",
    "--light-key-back": "hsl(30, 25%, 89%)",
    "--grayish-key-shadow": "hsl(28, 16%, 65%)",
    "--dark-grayish-blue-text": "hsl(221, 14%, 31%)",
    "--white-text": "hsl(0, 0%, 100%)",
    "--screen-text": "hsl(0, 0%, 100%)"
};

const theme2 = {
    "--main-back": "hsl(0, 0%, 90%)",
    "--toggle-back": "hsl(0, 5%, 81%)",
    "--screen-back": "hsl(0, 0%, 93%)",
    "--key-back": "#62b5bd",
    "--key-math-back-hover": "hsl(0, 0%, 100%)",
    "--key-op-back-hover": "#52cfdb",
    "--key-calc-back-hover": "#EF7924",
    "--key-shadow": "hsl(185, 58%, 25%)",
    "--key-back-toggle": "#fe8b39",
    "--dark-key-shadow": "hsl(25, 99%, 27%)",
    "--light-key-back": "hsl(45, 7%, 89%)",
    "--grayish-key-shadow": "hsl(35, 11%, 61%)",
    "--dark-grayish-blue-text": "hsl(60, 10%, 19%)",
    "--white-text": "#3a3b32",
    "--screen-text": "hsl(60, 10%, 19%)"
};

const theme3 = {
    "--main-back": "hsl(268, 75%, 9%)",
    "--toggle-back": "hsl(268, 71%, 12%)",
    "--screen-back": "hsl(268, 71%, 12%)",
    "--key-back": "hsl(281, 89%, 26%)",
    "--key-math-back-hover": "#6b35ad",
    "--key-op-back-hover": "#8631b0",
    "--key-calc-back-hover": "#95fef9",
    "--key-shadow": "hsl(285, 91%, 52%)",
    "--key-back-toggle": "hsl(176, 100%, 44%)",
    "--dark-key-shadow": "hsl(177, 92%, 70%)",
    "--light-key-back": "hsl(268, 47%, 21%)",
    "--grayish-key-shadow": "hsl(290, 70%, 36%)",
    "--dark-grayish-blue-text": "hsl(52, 100%, 62%)",
    "--white-text": "hsl(52, 100%, 62%)",
    "--screen-text": "hsl(52, 100%, 62%)"
};

const radios = document.getElementsByName("theme");

const setStyle = (theme, t = 1) => {
    let keys = Object.keys(theme);
    for (const k of keys){
        document.documentElement.style.setProperty(k, theme[k]);
    }
    if (t == 3) document.getElementById("calc").style.color = "black";
    else document.getElementById("calc").style.color = "white";
};

radios.forEach((r) => {
    r.addEventListener("click", (e) => {
        let themeStr = "theme-";

        if (e.target.id == `${themeStr}1`){
            setStyle(theme1);
        }
        if (e.target.id == `${themeStr}2`){
            setStyle(theme2);
        }
        if (e.target.id == `${themeStr}3`){
            setStyle(theme3, 3);
        }
    })
});