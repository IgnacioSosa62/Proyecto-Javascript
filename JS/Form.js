const $form = document.querySelector('#form')

$form.addEventListener('submit', handleSubmit)

async function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(this)
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            'accept': 'application/json'
        }
    })
    if (response.ok) {
        this.reset()
        Swal.fire({
            icon: 'success',
            title: 'Ya enviamos tu mensaje!',
            text: 'Ahora solo queda que nos contactemos con vos.',
        })
    }
}



var inputs = document.getElementsByClassName('form_input');

for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('keyup', function () {
        if (this.value.length >= 1) {
            this.nextElementSibling.classlist.add('fijar');
        } else {
            this.nextElementSibling.classlist.remove('fijar');
        }
    });
}