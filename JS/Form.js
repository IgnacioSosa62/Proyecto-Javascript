const $form = document.querySelector('#form')
const $buttonMailto = document.querySelector('#trucazo')




$form.addEventListener('submit', handleSubmit)


document.getElementById("message")
    .addEventListener("keyup", function(e) {
        if (e.code === 'Enter') {
            document.getElementById("submit").click();
        }
    });
document.getElementById("submit").onclick = function() {
    alert('Se ha enviado el pedido!');
}

function handleSubmit (event) {
    event.preventDefault()
    const form = new FormData(this)
    console.log(form.get('name'))
    $buttonMailto.setAttribute('href',`mailto:ignaciososa@gmail.com?subject=nombre${form.get('name')} correo ${form.get('email')}&body=${form.get('message')}`)
    $buttonMailto.click()

}