$("#botao-frase").click(fraseAleatoria);
$("#botao-frase-id").click(buscaFrase);

function fraseAleatoria() {
    $("#spinner").toggle();
    $.get("http://localhost:3000/frases",TrocaFraseAleatoria)
    .fail(function(){ 
        $("#erro").toggle();
        setTimeout(function() {
            $("#erro").toggle();
        }, 2000);
    })
    .always(function () {
        $("#spinner").toggle();
    })
    
}

function TrocaFraseAleatoria (dado) {

    var frase = $(".frase");
    var numeroAleatorio = Math.floor(Math.random()*dado.length);
    frase.text(dado[numeroAleatorio].texto);
    atualizaTamanhoFrase();
    atualizaTempoInicial(dado[numeroAleatorio].tempo);

}


function buscaFrase() {
    $("#spinner").toggle();
    var fraseID = $("#frase-id").val();
    console.log(fraseID);
    
    var dados = { id: fraseID };
    $.get("http://localhost:3000/frases", dados, trocaFrase )
    .fail(function() {
        $("#erro").toggle();
        setTimeout(function() {
            $("#erro").toggle();
        }, 2000);
    })
    .always(function () {
        $("#spinner").toggle();
    })

}

function trocaFrase(data) {
    var frase = $(".frase");
    frase.text(data.texto);
    atualizaTamanhoFrase();
    atualizaTempoInicial(data.tempo);
}