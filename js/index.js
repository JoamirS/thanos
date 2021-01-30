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
        alert(onu['mac']);
    }
}


document.getElementById('pesquisar_button').onclick = function(e) {
    pesquisarONU();
    console.log("Clicado");
}