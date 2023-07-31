function back() {
    window.location.href = "index.html";
}

function subscribe() {
    const email = document.querySelector("#e-mail");
    const error = document.querySelector(".error");

    if (!Validate(email.value)){
        error.style.display = 'block';
    } else {
        document.querySelector('form').action = 'index2.html';
        error.style.display = 'none';
    }
}

function Validate (email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLocaleLowerCase());
}
