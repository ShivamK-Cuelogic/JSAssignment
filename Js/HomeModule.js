var HomeModule=(function(){
    function logout()
    {
        document.getElementById('loginForm').reset();
        document.getElementById('addStudentPage').style.display='none';
        document.getElementById('loginPage').style.display='block';
        document.getElementById('homePage').style.display='none';
    }
    function getPersonalDetails(){
        document.getElementById('userBody').style.display='block';
        document.getElementById('addStudentPage').style.display='none';
        document.getElementById('editProfilePage').style.display='none';
        var i=StorageModule.getUserIndex();
        var personalData=StorageModule.getPersonalDetails();
        console.log(personalData);
        var startTag='<table class="table"><thead><tr><th>Parameter</th><th>Values</th></tr></thead><tbody><tr><td>First Name</td><td>'+personalData.firstName+'</td><tr><td>Last Name</td><td>'+personalData.lastName+'</td><tr><td>Gender</td><td>'+personalData.gender+'</td><tr><td>Email Id</td><td>'+personalData.email+'</td><tr><td>Profession</td><td>'+personalData.profession+'</td></tr></tbody></table>';
        document.getElementById('userBody').innerHTML=startTag;
    }
    return{
       // getDetails:getDetails,
        logout:logout,
        getPersonalDetails:getPersonalDetails
    }
})();
