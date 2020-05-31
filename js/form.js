/**
 * Verification performed before sending the email.
 * Form must be properly filled in before-hand.
 */
$(".sendEmail").click(function() {
    if (this.disabled) {
        if (!validatePhoneNumber()) {
            alert("Please insert a proper email.");
        }
        else if (!validatePhoneNumber()) {
            alert("Please insert a proper phone number.");
        }
        else {
            alert("Please insert all data properly.")
        }
    }
    else {
        alert("Attempting to send email...");
        sendEmail();
    }
});

/**
 * Verification of form's inserted values for enabling or disabling send button.
 */
$("form *").change(function() {
    let send = $(".sendEmail");
    let address = document.querySelector("form #address").value;
    let name = document.querySelector("form #name").value;

    if (send.attr("disabled")) {
        if (validateEmail() && validatePhoneNumber() && address != "" && name != "") {
            send.removeAttr("disabled");
        }
    }
    else {
        if (!validatePhoneNumber() || !validateEmail() || address == "" || name == "") {
            send.attr("disabled","");
        }
    }
});

/**
 * Email field validation.
 * 
 * Valid examples: 
 *      me@email.com
 *      EMAIL@Email.pt
 *      my_personal.email-address@domain.ninja
 * 
 */
function validateEmail() {
    return /[a-zA-Z][a-zA-Z0-9._-]+?[@][a-zA-Z]+[.][a-zA-Z]+/g.test(document.querySelector("#email").value);
}

/**
 * Phone number field validation.
 * 
 * Valid examples:
 *      912345678
 *      00351923123123
 *      +351262262262
 *      
 * @return {boolean} Indication of whether the phone number is valid or not.
 */
function validatePhoneNumber() {
    let phoneNumber = document.querySelector("#phonenumber").value;
    return phoneNumber == "" || /((([+]|0{2})[0-9]{3})?[0-9]{9})/g.test(phoneNumber);
}

/**
 * Sends email with form's data.
 */
function sendEmail() {
    Email.send({
        SecureToken : "91507a19-0db1-46b1-901a-2de4e71f355d",
        To : "pmlfonseca@outlook.com",
        From : document.querySelector("#email").value,
        Subject : document.querySelector("#name").value + ", " + document.querySelector("#phonenumber"),
        Body : document.querySelector("textarea").value
    }).then(
      message => alert(message)
    );
}