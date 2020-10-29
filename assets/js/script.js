function salva(){
    var email = document.getElementById('email').Value;
    var password = document.getElementById('password').value;
    db.transaction(function(armazenar)){
        armazenar.executeSql("INSERT INTO users (email,password) VALUES (?,?)",[email,password]);
    }
}