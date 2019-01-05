onload = function () {
    let pw = document.querySelector("#Rpassword");
    let confirmPw = document.querySelector("#confirmPassword");
    let confirmPwLabel = document.querySelector("#confirmPassword-label");

    confirmPw.addEventListener("focusout", e => {
        if (confirmPw.value == "") {
            confirmPw.classList.remove("valid");
            confirmPw.classList.remove("invalid");
        } else if (pw.value === confirmPw.value) {
            confirmPw.classList.add("valid");
            confirmPw.classList.remove("invalid");
        } else {
            confirmPw.classList.add("invalid");
            confirmPw.classList.remove("valid");
            confirmPwLabel.classList.add("label-error");
        }
    })

    pw.addEventListener("focusout", e => {
        if (confirmPw.value == "") {
            confirmPw.classList.remove("valid");
            confirmPw.classList.remove("invalid");
        } else if (pw.value === confirmPw.value) {
            confirmPw.classList.add("valid");
            confirmPw.classList.remove("invalid");
        } else {
            confirmPw.classList.add("invalid");
            confirmPw.classList.remove("valid");
            confirmPwLabel.classList.add("label-error");
        }
    })

    confirmPw.addEventListener("focus", e => {
        if (confirmPw.classList.contains("invalid")) {
            confirmPw.classList.add("input-error");
            confirmPw.classList.remove("valid");
        } else {
            confirmPw.classList.add("valid");
            confirmPw.classList.remove("input-error");
        }
    })
};

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems);
});