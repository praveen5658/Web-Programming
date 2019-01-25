var credentials = [
    {
        "name" : "praveen",
        "password" : "praveen54"
    },
    {
        "name" : "hari",
        "password" : "hari12"
    },
    {
        "name" : "jaya",
        "password" : "jaya15"
    },
    {
        "name" : "bharath",
        "password" : "bharath20"
    }
];
function validateForm(){
    var name = document.getElementById("userName").value;
    var pwd = document.getElementById("userPassword").value;
    var com = document.getElementById("comment");
    var comData = document.getElementById("textArea").value;
    var cou = 0;
    if(name.length == 0){
        document.getElementById("userNameErrorMessage").innerHTML = '<div class = "alert alert-warning alert-dismissible"><button type="button" class="close" data-dismiss="alert">&times;</button><p>EnterUserName!</p></div>';
    } else {
        for (let index = 0; index < credentials.length; index++) {
            if (credentials[index].name == name){
                cou = 1;
            }
            
        }
        if (cou == 0){
            document.getElementById("userNameErrorMessage").innerHTML = '<div class = "alert alert-warning alert-dismissible"><button type="button" class="close" data-dismiss="alert">&times;</button><p>Enter Correct user Name!</p></div>';
        }
        cou = 0;
    }
    if(pwd.length == 0){
        document.getElementById("passwordErrorMessage").innerHTML = '<div class = "alert alert-warning alert-dismissible"><button type="button" class="close" data-dismiss="alert">&times;</button><p>EnterPassword!</p></div>';
    } else {
        for (let index = 0; index < credentials.length; index++) {
            if (credentials[index].name == name){
                if(credentials[index].password == pwd){
                    cou = 1;
                    com.insertAdjacentHTML('afterbegin', '<p class = "commentStyle">'+comData+'</p><p class = "commentbyuserstyle"> By : '+name+'</p><br>');
                    document.getElementById("formId").reset();
                }
            }
            
        }
        if (cou == 0){
            document.getElementById("passwordErrorMessage").innerHTML = '<div class = "alert alert-warning alert-dismissible"><button type="button" class="close" data-dismiss="alert">&times;</button><p>Enter Correct password !</p></div>';
        }
    }
}