$("#password").hide()
$("#email").hide()
$("#addressname").hide()
$("#username").hide()
$("#userlabel").hide()
$("#addresslabel").hide()
$("#passwordlabel").hide()
$("#emaillabel").hide()
$("#btn").hide()
$("#addresserror").hide()
$("#addresserror").hide()
$("#psdshort").hide()
$("#psdweak").hide()
$("#psdstrong").hide()
$("#emailerror").hide()
$("#emailgrant").hide()
$("addressshort").hide()
$("#addressshort").hide()
$("#usernameerror").hide()
$("#usernamegrant").hide()
$("#username").show()

function SubmitHandler() {
    if (!$("#password").val() || !$("#username").val() || !$("#email").val() || !$("#addressname").val())
        alert("Fill all the fields")
    else
        alert("Response submitted successfully")
}
const UsernameInput = () => {
    if ($("#username").val().length >= 5) {
        $("#addressname").show()
        $("#addresslabel").show()
    }

}
const AddressInput = (us) => {
    if ($("#addressname").val().length > 10) {
        $("#emaillabel").show()
        $("#email").show()
    }
}
const EmailInput = (us) => {
    if ($("#email").val().length > 20) {
        $("#passwordlabel").show()
        $("#password").show()
    }

}
const PasswordInput = (us) => {
    if ($("#password").val().length >= 11)
        $("#btn").show()
}

const AddressError = (us) => {
    if ($("#addressname").val().length < 10)
        $("#addresserror").show()
    else
        $("#addresserror").hide()
    if ($("#addressname").val().length > 10)
        $("#addressshort").show()
}
const PasswordError = (us) => {
    if ($("#password").val().length < 5)
        $("#psdshort").show()
    else
        $("#psdshort").hide()
    if ($("#password").val().length >= 5 && $("#password").val().length <= 10)
        $("#psdweak").show()
    else
        $("#psdweak").hide()
    if ($("#password").val().length >= 11)
        $("#psdstrong").show()
    else
        $("#psdstrong").hide()
}
const EmailError = (us) => {
    if ($("#email").val().length < 20)
        $("#emailerror").show()
    else
        $("#emailerror").hide()
    if ($("#email").val().length > 20)
        $("#emailgrant").show()

}
const UserNameError = (us) => {

    if ($("#username").val().length <= 4)
        $("#usernameerror").show()
    else
        $("#usernameerror").hide()
    if ($("#username").val().length >= 5)
        $("#usernamegrant").show()
    else
        $("#usernamegrant").hide()


}
