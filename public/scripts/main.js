let pw;
let confirmPw;
let confirmPwLabel;

let MLusername;
let MLpw;

let MRusername;
let MRpw;
let MRconfirmPw;
let MRconfirmPwLabel;
let MRemail;
let MRschool;

let loginAndRegisterForm;

onload = function () {
    pw = document.querySelector("#Rpassword");
    confirmPw = document.querySelector("#confirmPassword");
    confirmPwLabel = document.querySelector("#confirmPassword-label");

    MLusername = document.querySelector("#MLusername");
    MLpw = document.querySelector("#MLpassword");

    MRusername = document.querySelector("#MRusername");
    MRpw = document.querySelector("#MRpassword");
    MRconfirmPw = document.querySelector("#MconfirmPassword");
    MRconfirmPwLabel = document.querySelector("#MconfirmPassword-label");
    MRemail = document.querySelector("#MRemail");
    MRschool = document.querySelector("#Mschool");

    loginAndRegisterForm = document.querySelector("#loginAndRegister-form")

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

    MRconfirmPw.addEventListener("focusout", e => {
        if (MRconfirmPw.value == "") {
            MRconfirmPw.classList.remove("valid");
            MRconfirmPw.classList.remove("invalid");
        } else if (MRpw.value === MRconfirmPw.value) {
            MRconfirmPw.classList.add("valid");
            MRconfirmPw.classList.remove("invalid");
        } else {
            MRconfirmPw.classList.add("invalid");
            MRconfirmPw.classList.remove("valid");
            MRconfirmPwLabel.classList.add("label-error");
        }
    })

    MRpw.addEventListener("focusout", e => {
        if (MRconfirmPw.value == "") {
            MRconfirmPw.classList.remove("valid");
            MRconfirmPw.classList.remove("invalid");
        } else if (MRpw.value === MRconfirmPw.value) {
            MRconfirmPw.classList.add("valid");
            MRconfirmPw.classList.remove("invalid");
        } else {
            MRconfirmPw.classList.add("invalid");
            MRconfirmPw.classList.remove("valid");
            MRconfirmPwLabel.classList.add("label-error");
        }
    })

    MRconfirmPw.addEventListener("focus", e => {
        if (MRconfirmPw.classList.contains("invalid")) {
            MRconfirmPw.classList.add("input-error");
            MRconfirmPw.classList.remove("valid");
        } else {
            MRconfirmPw.classList.add("valid");
            MRconfirmPw.classList.remove("input-error");
        }
    })


    
};


function mobileLoginDisable() {
    MLusername.disabled = true;
    MLpw.disabled = true;

    MRusername.disabled = false;
    MRpw.disabled = false;
    MRconfirmPw.disabled = false;
    MRemail.disabled = false;
    MRschool.disabled = false;


    document.querySelector("#loginAndRegister-submit").textContent = "회원가입";

    loginAndRegisterForm.action = "/register";
}

function mobileRegisterDisable() {
    MRusername.disabled = true;
    MRpw.disabled = true;
    MRconfirmPw.disabled = true;
    MRemail.disabled = true;
    MRschool.disabled = true;
    
    MLusername.disabled = false;
    MLpw.disabled = false;

    document.querySelector("#loginAndRegister-submit").textContent = "로그인";
    
    loginAndRegisterForm.action = "/login";
}


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
    var instances = M.Collapsible.init(elems, {
        onOpenStart : function () {
            if (MLheader != null) {
                if (MLheader.classList.contains("active")) {
                    mobileLoginDisable();
                } else if (MRheader.classList.contains("active")) {
                    mobileRegisterDisable();
                } else {
                    
                }
            }
        }
    });

    var MLheader = document.querySelector("#MLheader");
    var MRheader = document.querySelector("#MRheader");
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
});