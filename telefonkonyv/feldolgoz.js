$(function () {

    $("#beolvas").on("click", beolvas);
    $("#kuld").on("click", adBeir);
    $("article").delegate(".torol","click", adTorol);
});
var telefonkonyvem = [];
function kiir() {

    $("article").empty();
    for (var i = 0; i < telefonkonyvem.length; i++) {
       let szemely =telefonkonyvem[i];
       let elem = "<div><h2>" + szemely.nev + "</h2><p>" + szemely.tel + "</p> <p>" + szemely.kep + "</p><button class='torol' id='"+szemely.ID+"'>Töröl</button><button class='szerkeszt' id='"+i+"'>Szerekszt</button><hr></div>";
        $("article").append(elem);
    }



}
function adTorol() {
    var aktelem=$(this).closest("div");
    var id=$(this).attr("id");
    console.log("Törlés ****"+id);
    $.ajax({
        type: "DELETE",
        url: "torles.php?ID="+id,
        success: function () {
            console.log("törlés");
            aktelem.remove();
        },
        error: function () {
            alert("Hiba az adatok törlésekor!");
        }
    });
}
function beolvas() {
    $.ajax({
        type: "GET",
        url: "feldolgoz.php",
        success: function (result) {
            console.log(result); /*JSONn formátumban várjuk az AB eredményeit*/
            telefonkonyvem = JSON.parse(result);
            console.log(telefonkonyvem); /*JSONn formátumban várjuk az AB eredményeit*/
            kiir();
        },
        error: function () {
            alert("Hiba az adatok betöltésekor!");
        }
    });
}
function adBeir() {
//    var nev = $("#nev").val();
//    var tel = $("#tel").val();
//    var kep = $("#kep").val();
    var szemely = {

        nev: $("#nev").val(),
        tel: $("#tel").val(),
        kep: $("#kep").val()

    };



    $.ajax({
        type: "POST",
        url: "beir.php",
        data: szemely,
        success: function (ujszemely) {

            console.log(ujszemely);
            telefonkonyvem = JSON.parse(ujszemely);
            console.log(telefonkonyvem);
            kiir();
        },
        error: function () {
            alert("Hiba az adatok mentésekor");
        }
    });
}

