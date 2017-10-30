var RegistrationModule=(function(){
    var success;
    var firstName,lastName,gender,email,password,confirmPassword,profession,securityQuestion,answer;
    function clear()
    {
        document.getElementById('registrationForm').reset();
    }
    function checkEmail()
    {
       var atPos=email.indexOf('@');
       var dotPos=email.lastIndexOf('.');
       if (atPos<1 || dotPos<atPos+4 || dotPos+2>=email.length) {
       return false;
        }else{
            validEmail=true;
            var list=StorageModule.getAllRecords();
            for(var i=0;i<StorageModule.getLength();i++)
            {
                if(list[i].email===email)
                {
                   validEmail=false;
                   alert('Email already exist');
                }
            }
            if(validEmail)
           return true;
           else
           return false;
        }
    }
    
    function getData(){
        firstName=document.getElementById('firstName').value;
        lastName=document.getElementById('lastName').value;
        gender=document.getElementById('gender').value;
        email=document.getElementById('email').value;
        password=document.getElementById('password').value;
        profession=document.getElementById('profession').value;
        securityQuestion=document.getElementById('securityQuestion').value;
        confirmPassword=document.getElementById('confirmPassword').value;
        answer=document.getElementById('answer').value;
        if(checkData()){
            alert('Successfully registered..');
            var data={firstName:firstName,lastName:lastName,gender:gender,email:email,password:password,profession:profession,securityQuestion:securityQuestion,answer:answer};
            StorageModule.setValues(data);
            document.getElementById('registrationPage').style.display='none';
            document.getElementById('loginPage').style.display='block';
        }
        
    }
    function checkData()
    {
           
         var fields=[
             {
                 fieldName:'requiredFirstName',
                 fieldValue:firstName
             },
             {
                fieldName:'requiredLastName',
                fieldValue:lastName
            },
            {
                fieldName:'requiredGender',
                fieldValue:gender
            },
            {
                fieldName:'requiredPassword',
                fieldValue:password
            },
            {
                fieldName:'requiredConfirmPassword',
                fieldValue:confirmPassword
            },
            {
                fieldName:'requiredEmail',
                fieldValue:email
            },
            {
                fieldName:'requiredProfession',
                fieldValue:profession
            },
            {
                fieldName:'requiredSecurityQuestion',
                fieldValue:securityQuestion
            },
            {
                fieldName:'requiredAnswer',
                fieldValue:answer
            },

         ];
         success=true; 
         validEmail=true;
         if(checkEmail())
         {
            validEmail=true;
            
         }else{
             document.getElementById('invalidEmail').style.display='block';
             validEmail=false;
         }
         if(password!==confirmPassword)
         {
             
             alert('Password and Confirm password does not match');
             success=false;
         }else{
            
             success=true;
         }
         for(var i=0;i<9;i++)
         {
            if(fields[i].fieldValue==='')
            {
               document.getElementById(fields[i].fieldName).style.display='block';
               success=false;
            }else{
                document.getElementById(fields[i].fieldName).style.display='none'; 
            }
         }
         
         
       
        if(validEmail)
        return success;
        else
        return false;
    }
    function register()
    {
        
        getData();
        
    }
    return{
        register:register
    }
})();