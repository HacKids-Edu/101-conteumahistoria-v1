input.onButtonPressed(Button.A, function () {
    // SE QtdeColunasJaDefinidas for menor ou igual a QtdeColunasAUsar, então ainda permite escolhas de categorias
    // SENAO
    // mostra mensagem que já foram escolhidas todas as categorias definidas.
    //         
    if (QtdeColunasJaDefinidas <= QtdeColunasAUsar) {
        // Definir um valor aleatório entre 0 e 5 para a variável CATEGORIA
        Categoria = randint(0, 5)
        // SE a Categoria escolhida for 0 e a Coluna0 for igual a zero, significa que ainda não foi utilizada, então entrará no SE
        if (Categoria == 0 && Coluna0 == 0) {
            // Une duas strings (texto) para ser mostrada pelo bloco MOSTRAR STRING
            // Converte um numero em texto
            basic.showString("C" + convertToText(Categoria))
            // Escolhe um número aleatório para definir qual item da categoria será utilizado.
            basic.showString("I" + convertToText(randint(0, 9)))
            // Define Coluna0 para 1 para que não mais entre neste SE
            Coluna0 = 1
            // Adiciona 1 à variável QtdeColunasJaDefinidas para validar o primeiro SE de controle de quantas categorias serão usadas no jogo.
            QtdeColunasJaDefinidas += 1
        } else if (Categoria == 1 && Coluna1 == 0) {
            basic.showString("C" + convertToText(Categoria))
            basic.showString("I" + convertToText(randint(0, 9)))
            Coluna1 = 1
            QtdeColunasJaDefinidas += 1
        } else if (Categoria == 2 && Coluna2 == 0) {
            basic.showString("C" + convertToText(Categoria))
            basic.showString("I" + convertToText(randint(0, 9)))
            Coluna2 = 1
            QtdeColunasJaDefinidas += 1
        } else if (Categoria == 3 && Coluna3 == 0) {
            basic.showString("C" + convertToText(Categoria))
            basic.showString("I" + convertToText(randint(0, 9)))
            Coluna3 = 1
            QtdeColunasJaDefinidas += 1
        } else if (Categoria == 4 && Coluna4 == 0) {
            basic.showString("C" + convertToText(Categoria))
            basic.showString("I" + convertToText(randint(0, 9)))
            Coluna4 = 1
            QtdeColunasJaDefinidas += 1
        } else if (Categoria == 5 && Coluna5 == 0) {
            basic.showString("C" + convertToText(Categoria))
            basic.showString("I" + convertToText(randint(0, 9)))
            Coluna5 = 1
            QtdeColunasJaDefinidas += 1
        } else {
        	
        }
    } else {
        basic.showString("Ja foram definidas as " + ("" + convertToText(QtdeColunasJaDefinidas) + " categorias"))
    }
})
// Equivale a um botão para reset, para reiniciar uma nova história.
input.onButtonPressed(Button.AB, function () {
    basic.showString("Nova historia")
    Categoria = 0
    Coluna0 = 0
    Coluna1 = 0
    Coluna2 = 0
    Coluna3 = 0
    Coluna4 = 0
    Coluna5 = 0
    QtdeColunasJaDefinidas = 1
    QtdeColunasAUsar = 4
})
/**
 * Variáveis:
 * 
 * Categoria: recebe o valor aleatório para escolher qual das colunas de categorias será usada.
 * 
 * Coluna0 ... Coluna5: Recebe valor 0 para identificar que está disponível, ou 1 para identificar que já foi escolhida, evitando repetições.
 * 
 * QtdeColunasJaDefinidas: A cada categoria (Coluna) já definida, será adicionado 1, o valor desta variável será comparado ao valor da variável QtdeColunasAUsar.
 * 
 * SE QtdeColunasJaDefinidas for menor ou igual a QtdeColunasAUsar, então ainda permite escolhas de categorias
 * 
 * SENAO
 * 
 * mostra mensagem que já foram escolhidas todas as categorias definidas.
 */
let QtdeColunasAUsar = 0
let QtdeColunasJaDefinidas = 0
let Coluna5 = 0
let Coluna4 = 0
let Coluna3 = 0
let Coluna2 = 0
let Coluna1 = 0
let Coluna0 = 0
let Categoria = 0
Categoria = 0
Coluna0 = 0
Coluna1 = 0
Coluna2 = 0
Coluna3 = 0
Coluna4 = 0
Coluna5 = 0
QtdeColunasJaDefinidas = 1
QtdeColunasAUsar = 4
