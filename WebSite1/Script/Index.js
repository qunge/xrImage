/// <reference path="Jquery-3.3.1.js" />
$(function () {


    $(".item").bind("input propertychange", function () {
        var flg = $(this).attr("id");
        var text = $("." + flg).text();
        if ($(this).val() != "") {
            $("#div_" + flg).html(text + $(this).val());
        }
        else {
            $("#div_" + flg).html("");
        }

    });

    $("#gjzyz").bind("input propertychange", function () {
        $(".gjzyz").text($(this).val());
    })

    $(".LinkType").bind("input propertychange", function () {
        var flg = $(this).attr("id");
        var text = $("." + flg).text();
        if ($(this).val() != "") {
            $(".lb_" + flg).text(text + $(this).val());
        }
        else {
            $(".lb_" + flg).text("");
        }
    })

    $("#stype").click(function () {
        var text = $("#stype").find("option:selected").text();

        $("#div_Type").html("类型：" + text);

    })
})

function changepic() {
    var reads = new FileReader();
    f = document.getElementById('uploadImg').files[0];
    reads.readAsDataURL(f);
    reads.onload = function (e) {
        document.getElementById('img').src = this.result;
    };
}
