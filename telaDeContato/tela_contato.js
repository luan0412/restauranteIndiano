
// Validar se todos os compos não estão vazios

var botao = document.getElementById('botao');
botao.addEventListener( 'click', validar => {
    
    if(document.getElementById('nome').value == ''){
        validar.preventDefault()
        alert(' Por favor verifique se todos os dados foram preenchidos.');
        document.getElementById('nome').focus();
    }
    else if(document.getElementById('email').value == ''){
        validar.preventDefault()
        alert(' Por favor, verifique se todos os dados foram preenchidos.');
        document.getElementById('email').focus();
    }
    else if(document.getElementById('call').value == ''){
        validar.preventDefault()
        alert(' Por favor, verifique se todos os dados foram preenchidos.');
        document.getElementById('call').focus();
    }
    else if(document.getElementById('selec').value == 'assunto'){
        validar.preventDefault()
        alert(' Por favor, verifique se todos os dados foram preenchidos.');
        document.getElementById('selec').focus();
    }
    else if(document.getElementById('texto').value == ''){
        validar.preventDefault()
        alert(' Por favor, verifique se todos os dados foram preenchidos.');
        document.getElementById('texto').focus();
    }
    else{
        alert(' Sua mensagem foi enviada ao Restaurante Start!');
    }
});


// ===============< Validar Nome >==================

document.getElementById("nome").addEventListener("blur", validarNome);
function validarNome(){
    var nome = document.querySelector('#nome');
    var span = document.querySelector('#nomeSpan');
    
    if(!nome.checkValidity()){
        span.innerHTML = "Nome invalido";  
    }
    else if(nome.value == ''){
        span.innerHTML = '';
    }
    else{
        return true;
    }
     
}

document.getElementById("nome").addEventListener("focus", redefinir_Msg_Nome); 
function redefinir_Msg_Nome(){
    var span = document.querySelector('#nomeSpan');
    if (span.innerHTML == "Nome invalido"){
        span.innerHTML = " ";
    }
    else{
        return false;
    }
}

// ===============< Validar Email >==================

document.getElementById("email").addEventListener("blur", validarEmail);
function validarEmail(){
    var email = document.querySelector('#email');
    var span = document.querySelector('#emailSpan');
    
    if(!email.checkValidity()){
        span.innerHTML = "Email invalido";  
    }
    else if(email.value == ''){
        span.innerHTML = '';
    }
    else{
        return true;
    }
     
}

document.getElementById("email").addEventListener("focus", redefinir_Msg_Email); 
function redefinir_Msg_Email(){
    var span = document.querySelector('#emailSpan');
    if (span.innerHTML == "Email invalido"){
        span.innerHTML = " ";
    }
    else{
        return false;
    }
}


// ===============< Validar Telefone >==================

document.getElementById("call").addEventListener("blur", validarTelefone);
function validarTelefone(){
    var call = document.getElementById("call").attributes[0].ownerElement['value'];
    var span = document.querySelector('#callSpan');
    
     if(call.length == 0){
        span.innerHTML = '';
        document.getElementById("call").style.borderColor = "#CCC";
        document.getElementById("call").style.boxShadow = 'none';
    }
    else if(call.length < 15){
        span.innerHTML = "Telefone invalido";
        document.getElementById("call").style.borderColor = "crimson";
        document.getElementById("call").style.boxShadow = '0px 0px 3px crimson';
    }
    
    else{
        document.getElementById("call").style.borderColor = "#CCC";
        document.getElementById("call").style.boxShadow = 'none';
        return true;
    }
     
}

document.getElementById("call").addEventListener("focus", redefinir_Msg_Telefone); 
function redefinir_Msg_Telefone(){
    var span = document.querySelector('#callSpan');
    if (span.innerHTML == "Telefone invalido"){
        span.innerHTML = "";
        document.getElementById("call").style.outline = 'none';
        document.getElementById("call").style.boxShadow = 'none';
    }
    else{
        return false;
    }
}



// ===============< Validar select >==================

document.getElementById("selec").addEventListener("blur", validarSelec);
function validarSelec(){
    var selec = document.querySelector('#selec');
    var span = document.querySelector('#selecSpan');
    
    if(selec.value == 'assunto'){
        span.innerHTML = "Por favor, selecione uma opção";  
        document.getElementById("selec").style.borderColor = "crimson";
        document.getElementById("selec").style.boxShadow = '0px 0px 3px crimson';


    }
    else if(selec.value != 'assunto'){
        span.innerHTML = '';
        document.getElementById("selec").style.borderColor = "#CCC";
        document.getElementById("selec").style.boxShadow = 'none';
    }
    else{
        return true;
    }
     
}

document.getElementById("selec").addEventListener("focus", redefinir_Msg_Selec); 
function redefinir_Msg_Selec(){
    var span = document.querySelector('#selecSpan');
    if (span.innerHTML == "Por favor, selecione uma opção"){
        span.innerHTML = "";
        document.getElementById("selec").style.outline = 'none';
        document.getElementById("selec").style.boxShadow = 'none';
    }
    else{
        return false;
    }
}


// ===============< Validar textarea >==================

document.getElementById("texto").addEventListener("blur", validarTexto);
function validarTexto(){
    var texto = document.querySelector('#texto');
    var span = document.querySelector('#textoSpan');
    
    if(!texto.checkValidity()){
        span.innerHTML = "A mensagem esta muito curta!";  
    }
    else if(texto.value == ''){
        span.innerHTML = '';
    }
    else{
        return true;
    }
     
}

document.getElementById("texto").addEventListener("focus", redefinir_Msg_Texto); 
function redefinir_Msg_Texto(){
    var span = document.querySelector('#textoSpan');
    if (span.innerHTML == "A mensagem esta muito curta!"){
        span.innerHTML = " ";
    }
    else{
        return false;
    }
}




// ===============< mascara para telefone >==================

document.getElementById("call").addEventListener("keyup", mascaraTelefone);
function mascaraTelefone(event) {

    var valor = document.getElementById("call").attributes[0].ownerElement['value'];
    var retorno = valor.replace(/\D/g, ""); 
    retorno = retorno.replace(/^0/, ""); 
    
    if (retorno.length > 10) {
      retorno = retorno.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
    } 
    else if (retorno.length > 5){
      if (retorno.length == 6 && event.code == "Backspace"){
        return; 
      } 
      retorno = retorno.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
    } 
    else if (retorno.length > 2) {
      retorno = retorno.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
    } 
    else {
      if (retorno.length != 0) {
        retorno = retorno.replace(/^(\d*)/, "($1");
      }
    }
    document.getElementById("call").attributes[0].ownerElement['value'] = retorno;
  }





