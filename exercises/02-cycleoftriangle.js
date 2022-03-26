/*
    Escriba un ciclo que haga siete llamadas a console.log para generar el siguiente triángulo:

    #
    ##
    ###
    ####
    #####
    ######
    #######
*/
let number_of_calls = 7;
let output = "";

for(let i = 0; i < number_of_calls;i++) console.log(output += "#");