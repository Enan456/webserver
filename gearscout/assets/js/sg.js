//var document = "../../sg.html";
//global.documentument = "../../sg.html";
//var submit2 = document.getElementById('submit');






function writeUserData() {
    var document = "../../sg.html";
    var submit2 = document.getElementById('submit');
    var config = {
        apiKey: "AIzaSyAGjIhyS5eGmUvZysE46CuWFjeX0T-ykWA",
        authDomain: "scoutgear-2018.firebaseapp.com",
        databaseURL: "https://scoutgear-2018.firebaseio.com",
        projectId: "scoutgear-2018",
        storageBucket: "scoutgear-2018.appspot.com",
        messagingSenderId: "269363065314"
    };
    firebase.initializeApp(config);
    var database = firebase.database();
    /*  firebase.post("/gearscout2018", JSON ) */
    var yourname = document.getElementById("yourname").value
    var regional = document.getElementById("regional").value
    var scoutteam = document.getElementById("scoutteam").value;
    var lineCrossed = document.getElementById("auto-0").value;
    var switchblockauto = document.getElementById("auto-1").value;
    var penaltyauto = document.getElementById("auto-2").value;
    var scaleblockauto = document.getElementById("auto-3").value;
    var forklift = document.getElementById("teleop-0").value;
    var defense = document.getElementById("teleop-1").value;
    var portal = document.getElementById("pcubes").value;
    var allianceswitch = document.getElementById("faswitch").value;
    var scale = document.getElementById("scale").value;
    var opponentswitch = document.getElementById("opswitch").value;
    var rampbot = document.getElementById("end-0").value;
    var park = document.getElementById("end-1").value;
    var levitate = document.getElementById("end-2").value;
    var climbed = document.getElementById("end-3").value;
    var disabled = document.getElementById("end-4").value;
    var yourteam = document.getElementById("yourteam").value;
    var match = document.getElementById("match").value;

    if (yourname === null) {
        yourname = " ";
    }
    if (regional === null) {
        regional = "a_trash";
    }
    if (scoutteam === null) {
        scoutteam = 0;
    }
    if (lineCrossed === null) {
        lineCrossed == false;
    }
    if (switchblockauto === null) {
        switchblockauto == false;
    }
    if (penaltyauto === null) {
        penaltyauto == false;
    }
    if (scaleblockauto === null) {
        scaleblockauto == false;
    }
    if (forklift === null) {
        forklift == false;
    }
    if (defense === null) {
        defense == false;
    }
    if (portal === null) {
        portal = 0;
    }
    if (allianceswitch === null) {
        allianceswitch = 0;
    }
    if (scale === null) {
        scale = 0;
    }
    if (opponentswitch === null) {
        opponentswitch = 0;
    }
    if (rampbot === null) {
        rampbot == false;
    }
    if (park === null) {
        park == false;
    }
    if (levitate === null) {
        levitate == false;
    }
    if (climbed === null) {
        climbed == false;
    }
    if (disabled === null) {
        disabled == false;
    }
    if (yourteam === null) {
        yourteam == 2338;
    }
    if (match === null) {
        match = "a_trash";
    }



    var sender1 = "GearScout2018:{2338:{" + scoutteam + ": {" + match + ":{ yourname:" + yourname +
        ",regional:" + regional + ",scoutteam:" + scoutteam + ",lineCrossed:" + lineCrossed +
        ",switchblockauto:" + switchblockauto + ",penaltyauto:" + penaltyauto + ",scaleblockauto:" +
        scaleblockauto + ",forklift:" + forklift + ",defense:" + defense + ",portal:" + portal +
        ",allianceswitch:" + allianceswitch + ",scale:" + scale + ",opponentswitch:" + opponentswitch +
        ",rampbot:" + rampbot + ",park:" + park + ",levitate:" + levitate + ",climbed:" + climbed +
        ",disabled:" + disabled + ",yourteam:" + yourteam + ",match:" + match + "}}}}";

    var sender = {
        "Gearscout-2018": {
            "yourname": yourname,
            "regional": regional,
            "scoutteam": scoutteam,
            "lineCrossed": lineCrossed,
            "switchblockauto": switchblockauto,
            "penaltyauto": penaltyauto,
            "scaleblockauto": scaleblockauto,
            "forklift": forklift,
            "defense": defense,
            "portal": portal,
            "allianceswitch": allianceswitch,
            "scale": scale,
            "opponentswitch": opponentswitch,
            "rampbot": rampbot,
            "park": park,
            "levitate": levitate,
            "climbed": climbed,
            "disabled": disabled,
            "yourteam": yourteam,
            "match": match
        }
    };





    //console.log(JSON.parse(sender1));
    console.log(sender);

    firebase.database().ref('scouttgear-2018/' + scoutteam + "/" + match).set(sender, function (error) {
        if (error) {
            window.alert(error);
        }
    });
}
