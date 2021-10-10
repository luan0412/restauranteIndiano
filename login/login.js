function validar () {


   if (document.getElementById('nome').value == "") {
    Swal.fire({background:' radial-gradient(circle at 12.5% 12.5%, #ffffff 0, #ffffff 12.5%, #ffffff 25%, #ffffff 37.5%, #ffffff 50%, #e0ede9 62.5%, #c7ddd3 75%, #b4cfbf 87.5%, #a5c3ad 100%)',title:'Algo deu errado',icon:'error',text:' Por favor verifique se todos os dados foram preenchidos.'})
    document.getElementById('nome').focus();
       return false
   } else if (document.getElementById('senha').value == ""){
    Swal.fire ({background:' radial-gradient(circle at 12.5% 12.5%, #ffffff 0, #ffffff 12.5%, #ffffff 25%, #ffffff 37.5%, #ffffff 50%, #e0ede9 62.5%, #c7ddd3 75%, #b4cfbf 87.5%, #a5c3ad 100%)',title:'Algo deu errado',icon:'error',text:' Por favor verifique se todos os dados foram preenchidos.'})
    document.getElementById('senha').focus();
       return false
   }
} 


function help (){ 
    Swal.fire ({background:'radial-gradient(circle at 12.5% 12.5%, #ffffff 0, #ffffff 12.5%, #ffffff 25%, #ffffff 37.5%, #ffffff 50%, #e0ede9 62.5%, #c7ddd3 75%, #b4cfbf 87.5%, #a5c3ad 100%)',icon:'info',text:'Para recuperar a senha, entre em contato com o restaurante.'})
    return false

       
        
    }



