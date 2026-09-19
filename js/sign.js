$(document).ready(function () {

    $("#signUpForm").submit(function (event) {
        event.preventDefault();

        let name = $("#fullName").val().trim();
        let email = $("#signEmail").val().trim();
        let password = $("#password").val();
        let confirmPassword = $("#confirmPassword").val();
        let agree = $("#agree").is(":checked");
        let message = $("#message");

        if (name.length < 3) {
            message.text("الاسم يجب أن يكون 3 أحرف على الأقل").attr("class", "error");
            return;
        }

        if (!email.includes("@") || !email.includes(".")) {
            message.text("البريد الإلكتروني غير صحيح").attr("class", "error");
            return;
        }

        if (password.length < 8) {
            message.text("كلمة المرور يجب أن تكون 8 أحرف على الأقل").attr("class", "error");
            return;
        }

        if (password != confirmPassword) {
            message.text("كلمتا المرور غير متطابقتين").attr("class", "error");
            return;
        }

        if (!agree) {
            message.text("يجب الموافقة على الشروط والأحكام").attr("class", "error");
            return;
        }

        message.text("تم إنشاء الحساب بنجاح").attr("class", "success");
    });

});
