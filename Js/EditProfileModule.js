var EditProfileModule=(function(){
    function updateProfile()
    {
        document.getElementById('userBody').style.display='none';
        document.getElementById('addStudentPage').style.display='none';
        i=StorageModule.getUserIndex();
        firstName=document.getElementById('editFirstName').value;
        lastName=document.getElementById('editLastName').value;
        email=document.getElementById('editEmail').value;
        profession=document.getElementById('editProfession').value;
        var data={
            firstName:firstName,
            lastName:lastName,
            email:email,
            profession:profession
        };
        StorageModule.setPersonalDetails(data);
        alert('Profile Updated Successfully');
        
    }
    function editProfile()
    {
        document.getElementById('userBody').style.display='none';
        document.getElementById('addStudentPage').style.display='none';
        document.getElementById('addStudentPage').style.display='none';
        document.getElementById('editProfilePage').style.display='block';
        i=StorageModule.getUserIndex();
        var personalData=StorageModule.getPersonalDetails();
        document.getElementById('editFirstName').value=personalData.firstName;
        document.getElementById('editLastName').value=personalData.lastName;
        document.getElementById('editEmail').value=personalData.email;
        document.getElementById('editProfession').value=personalData.profession;
    }
    return{
        editProfile:editProfile,
        updateProfile:updateProfile

    }
})();