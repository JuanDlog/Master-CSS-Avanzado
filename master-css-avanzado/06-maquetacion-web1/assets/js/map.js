document.addEventListener("DOMContentLoaded", (event) => {

    setTimeout(() => {
        document.querySelector("#load-iframe-map").innerHTML = `
    <iframe class="contact__iframe" frameborder="0" scrolling="no" marginheight="0"
                                marginwidth="0"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d651.9179208353808!2d-3.7035139656760188!3d40.4228291759295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42287d5246cc1d%3A0xffde3d76bc537a26!2sCorre.%20Baja%20de%20San%20Pablo%2C%2037%2C%202%2C%20Centro%2C%20Centro%2C%2028004%20Madrid!5e0!3m2!1ses-419!2ses!4v1773008733896!5m2!1ses-419!2ses"></iframe>
    `;
    }, 500);

});