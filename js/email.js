emailjs.init("OWMEXKGcHgOZ0_zdF");

function send() {

    if (document.getElementById("forma").checkValidity() == false) {
        document.getElementById("forma").reportValidity();
        return;
    }

    var date = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        address: document.getElementById("address").value,
        zakaz: document.getElementById("zakaz").value
    };

    emailjs.send("service_m144iah", "template_dxfizo5", date)
        .then(function (raspuns) {
            alert("Заказ отправлен")
            document.getElementById("forma").reset();
        }, function (error) {
            alert("Ошибка")
        })

}