const codes = document.querySelectorAll(".code");

codes[0].focus();

codes.forEach((code, index) => {

    code.addEventListener("keyup", (e) => {

        if (e.key >= 0 && e.key <= 9) {
            if (index < codes.length - 1) {
                codes[index + 1].focus();
            }
        }

        if (e.key === "Backspace") {
            if (index > 0) {
                codes[index - 1].focus();
            }
        }

    });

});