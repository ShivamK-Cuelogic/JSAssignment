var LoginModule=(function()
{
    function signup()
    {
        document.getElementById('registrationForm').reset();
        document.getElementById('registrationPage').style.display='block';
        document.getElementById('loginPage').style.display='none';
    }
    function login()
    {
        var loginEmail,loginPassword;
        loginEmail=document.getElementById('loginEmail').value;
        loginPassword=document.getElementById('loginPassword').value;
        if(StorageModule.checkUserLogin(loginEmail,loginPassword))
        {
            alert('Login Successful');
            var i=StorageModule.getUserIndex();
            var data=StorageModule.getPersonalDetails();
            document.getElementById('user').innerHTML="Hi,"+data.firstName;
            var who=data.profession;
            if(who==='Teacher')
            {
                document.getElementById('teacherOrStudent').innerHTML='Students';
                document.getElementById('btnAddStudent').style.display='block';
            }else{
                document.getElementById('teacherOrStudent').innerHTML='Teachers';
                document.getElementById('btnAddStudent').style.display='none';
            }
            document.getElementById('loginPage').style.display='none';
            document.getElementById('homePage').style.display='block';
        }else{
            alert('Invalid username or password');
        }
    }
    return{
        signup:signup,
        login:login
    }
})();