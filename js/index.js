function pesquisar(){
    var valorPesquisa = document.getElementById('pesquisar_input').value;
    return valorPesquisa;
}

function pesquisarONU(){
    var requestURL = 'http://192.168.0.3/gpon/main.php';
    var request = new XMLHttpRequest();
    request.open('POST', requestURL);
    request.responseType = 'text';
    var info = pesquisar();
    var data = new FormData();
    data.append("info", info);
    request.send(data);
    request.onload = function() {
        var onuText = request.response;
        console.log(onuText);
        var onu = JSON.parse(onuText);
        preencherStatusONU(onu);
    }
}

function preencherStatusONU(onu){
    if (onu['result']){
        document.getElementById('mac-onu').innerHTML = onu['mac'];
        document.getElementById('olt-cliente').innerHTML = onu['olt'];
        document.getElementById('slot-olt').innerHTML = onu['slot'];
        document.getElementById('pon-olt').innerHTML = onu['pon'];

        onu['adminStatus'] ? document.getElementById('administrate').innerHTML = "UP" : document.getElementById('administrate').innerHTML = "DOWN";
        document.getElementById('openstate').innerHTML = onu['operStatus'];
        document.getElementById('download').innerHTML = onu['down'] + " Kbps";
        document.getElementById('upload').innerHTML = onu['up'] + " Kbps";
        document.getElementById('rx-onu').innerHTML = onu['rx'] + " dbm";
        document.getElementById('rx-olt').innerHTML = onu['tx'] + " dbm";
    }
}


document.getElementById('pesquisar_button').onclick = function(e) {
    pesquisarONU();
    console.log("Clicado");
}