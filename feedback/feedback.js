document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    let feedback = new UserFeedback(name,email,message);
    sendMsgOnServer(feedback);
    console.log('Form Submitted:', { name, email, message });
    alert('Thank you for contacting us! We will respond shortly.');
    this.reset();
});
class UserFeedback {
    constructor(name,email, message){
        this.name=name;
        this.email= email;
        this.message= message;

    }
}
function sendMsgOnServer(obj){
    // send method
}