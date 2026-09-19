$(document).ready(function () {

    let passwordInput = $("#loginPassword");

    // إظهار وإخفاء كلمة المرور
    $("#eyeIcon").click(function () {
        if (passwordInput.attr("type") == "password") {
            passwordInput.attr("type", "text");
            $(this).attr("class", "fa-solid fa-eye-slash");
        } else {
            passwordInput.attr("type", "password");
            $(this).attr("class", "fa-solid fa-eye");
        }
    });

    // التحقق من البريد وكلمة المرور
    $("#loginForm").submit(function (event) {
        event.preventDefault();

        let email = $("#loginEmail").val().trim();
        let password = $("#loginPassword").val();
        let message = $("#message");

        if (email == "") {
            message.text("يرجى كتابة البريد الإلكتروني").attr("class", "error");
            return;
        }

        if (!email.includes("@") || !email.includes(".")) {
            message.text("البريد الإلكتروني غير صحيح").attr("class", "error");
            return;
        }

        if (password == "") {
            message.text("يرجى كتابة كلمة المرور").attr("class", "error");
            return;
        }

        if (password.length < 8) {
            message.text("كلمة المرور يجب أن تكون 8 أحرف على الأقل").attr("class", "error");
            return;
        }

        message.text("تم التحقق من البيانات بنجاح").attr("class", "success");
    });

});
