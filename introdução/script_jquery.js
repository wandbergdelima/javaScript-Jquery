// basico de jquery
// $(seletor).ação();

// para boas praticas do jquery iniciamos a função fazendo a leitura de todo documento para ter certeza que o mesmo foi carregado.
// $(document).ready(function() {

$(function() {
    $('#hide').click(function() {
       $('p').hide();
    });
    $('#show').click(function() {
        $('p').show();
     });
 
    $('#azul').click(function() {
       $('p').css("color", "red");
       $('p').css("background-color", "blue");
        // para fazer o objeto desaparecer e aparecer na tela com fadeout e fadein
        // utilizando os atributos de saida e entrada do objeto (slow e fast) nos metodos fadeout e fadein
       $('p').fadeOut('slow');
       // delay faz a execução ter uma pausa em mili segundos ex. 1s = 1000
       $('p').delay(1000)
       $('p').fadeIn('fast');

    });
    
    $('#vermelho').click(function() {
        $('p').css("color", "blue");
        $('p').css("background-color", "red");
        // Podemos suprimir o delay e o aplicar diretamente nos metodos fadeIn e fadeOut, atravez dos mili segundos ex. 1s = 1000 que podemos utilizar como atributo para o metodo
        $('p').fadeOut(2000);
        $('p').fadeIn(2000);
        
        // usando encadeamento de bloco para unificar metodos a uma mesma tag html
        $('#mensagem')
            .text("Cor alterana com sucesso")

            // tambem é possivel agrupar todo css que alterarmos Obs.: destacasse que as declarações são como variaveis e toda propriedade que no css recebe hifen no jquery ela é declarada como camelcase ex.background-color = backgroundColor
            .css({
                color: 'red',
                border: '1px solid red'
                /*, backgroundColor: '#F08080'*/
            })
            .delay(3000)
            .fadeOut('fast')

        // Adicionando e Removendo Classes das Tags
            .addClass('green')
        $('button').removeClass('red')
    });
});
