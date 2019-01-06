onload = function () {
    let pw = document.querySelector("#Rpassword");
    let confirmPw = document.querySelector("#confirmPassword");
    let confirmPwLabel = document.querySelector("#confirmPassword-label");

    let Mpw = document.querySelector("#MRpassword");
    let MconfirmPw = document.querySelector("#MconfirmPassword");
    let MconfirmPwLabel = document.querySelector("#MconfirmPassword-label");

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

    MconfirmPw.addEventListener("focusout", e => {
        if (MconfirmPw.value == "") {
            MconfirmPw.classList.remove("valid");
            MconfirmPw.classList.remove("invalid");
        } else if (Mpw.value === MconfirmPw.value) {
            MconfirmPw.classList.add("valid");
            MconfirmPw.classList.remove("invalid");
        } else {
            MconfirmPw.classList.add("invalid");
            MconfirmPw.classList.remove("valid");
            MconfirmPwLabel.classList.add("label-error");
        }
    })

    Mpw.addEventListener("focusout", e => {
        if (MconfirmPw.value == "") {
            MconfirmPw.classList.remove("valid");
            MconfirmPw.classList.remove("invalid");
        } else if (Mpw.value === MconfirmPw.value) {
            MconfirmPw.classList.add("valid");
            MconfirmPw.classList.remove("invalid");
        } else {
            MconfirmPw.classList.add("invalid");
            MconfirmPw.classList.remove("valid");
            MconfirmPwLabel.classList.add("label-error");
        }
    })

    MconfirmPw.addEventListener("focus", e => {
        if (MconfirmPw.classList.contains("invalid")) {
            MconfirmPw.classList.add("input-error");
            MconfirmPw.classList.remove("valid");
        } else {
            MconfirmPw.classList.add("valid");
            MconfirmPw.classList.remove("input-error");
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