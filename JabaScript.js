


    function encrypt() {
        var texto = document.getElementById ("textInput").value.toLowerCase();
        
        var txtEncrypt = texto.replace(/e/igm,"enter");
        var txtEncrypt = txtEncrypt.replace(/i/igm,"imes");
        var txtEncrypt = txtEncrypt.replace(/o/igm,"ober");
        var txtEncrypt = txtEncrypt.replace(/a/igm,"ai");
        var txtEncrypt = txtEncrypt.replace(/u/igm,"ufat");
        
  

    document.getElementById ( "textoNenhuma" ).style.display = "none";
    document.getElementById ( "textoDigite" ).innerHTML = txtEncrypt;
    document.getElementById ( "copy-button" ).style.display = "show";
    document.getElementById ( "copy-button" ).style.display = "inherit";

    document.getElementById("textInput").value = '';

    }

    function decrypt() {
        var texto = document.getElementById ("textInput").value.toLowerCase();           
     
        var txtEncrypt = texto.replace(/enter/igm,"e");
        var txtEncrypt = txtEncrypt.replace(/imes/igm,"i");
        var txtEncrypt = txtEncrypt.replace(/ober/igm,"o");
        var txtEncrypt = txtEncrypt.replace(/ai/igm,"a");
        var txtEncrypt = txtEncrypt.replace(/ufat/igm,"u"); 
        
  

    document.getElementById ( "textoNenhuma" ).style.display = "none";
    document.getElementById ( "textoDigite" ).innerHTML= txtEncrypt;
    document.getElementById ( "copy-button" ).style.display = "show";
    document.getElementById ( "copy-button" ).style.display = "inherit";
    
    document.getElementById("textInput").value = '';

    }   

    function copy (){
        var textEnryptDecrypt = document.querySelector ( "#textoDigite" );

        textEnryptDecrypt.select ();
        document.execCommand ( "copy" );
        alert( "O texto foi copiado com sucesso" );
    }