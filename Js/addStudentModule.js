var addStudentModule=(function(){
    function addStudent()
    {
        document.getElementById('userBody').style.display='none';
        firstName=document.getElementById('AfirstName').value;
        lastName=document.getElementById('AlastName').value;
        gender=document.getElementById('Agender').value;
        email=document.getElementById('Aemail').value;
        password=document.getElementById('Apassword').value;
        profession=document.getElementById('Aprofession').value;
        securityQuestion=document.getElementById('Aquestion').value;
        confirmPassword=document.getElementById('AconfirmPassword').value;
        answer=document.getElementById('Aanswer').value;
        var data={firstName:firstName,lastName:lastName,gender:gender,email:email,password:password,profession:profession,securityQuestion:securityQuestion,answer:answer};
        StorageModule.setValues(data);
        alert('Student Added Successfully');
    }
    function displayAddStudentForm()
    {
        document.getElementById('addStudentPage').style.display='block';
        document.getElementById('userBody').style.display='none';
    }
    return{
        addStudent:addStudent,
        displayAddStudentForm

    }
})();