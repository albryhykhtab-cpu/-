$(document).ready(function () {

    // البحث عن السيارات بالاسم والنوع
    function filterCars() {
        let searchText = $("#searchCar").val().trim();
        let selectedType = $("#carType").val();
        let visibleCars = 0;

        $(".searchable-car").each(function () {
            let carName = $(this).data("name");
            let carType = $(this).data("type");

            let nameMatch = carName.includes(searchText);
            let typeMatch = selectedType == "all" || carType == selectedType;

            if (nameMatch && typeMatch) {
                $(this).show();
                visibleCars++;
            } else {
                $(this).hide();
            }
        });

        if (visibleCars == 0) {
            $("#noCars").show();
        } else {
            $("#noCars").hide();
        }
    }

    $("#searchCar").on("keyup", filterCars);
    $("#carType").on("change", filterCars);

    $("#showAll").click(function () {
        $("#searchCar").val("");
        $("#carType").val("all");
        filterCars();
    });

    // Ajax + Modal رقم 1
    $("#camryBtn").click(function () {
        $("#camryContent").html("جاري تحميل التفاصيل...");

        $.ajax({
            url: "camry-details.html",
            success: function (data) {
                $("#camryContent").html(data);
            },
            error: function () {
                $("#camryContent").html("تعذر تحميل التفاصيل.");
            }
        });
    });

    // Ajax + Modal رقم 2
    $("#tucsonBtn").click(function () {
        $("#tucsonContent").html("جاري تحميل التفاصيل...");

        $.ajax({
            url: "tucson-details.html",
            success: function (data) {
                $("#tucsonContent").html(data);
            },
            error: function () {
                $("#tucsonContent").html("تعذر تحميل التفاصيل.");
            }
        });
    });

});
