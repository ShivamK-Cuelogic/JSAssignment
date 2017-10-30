var ViewMemberModule=(function(){
   
    function displayMembers()
    {
        var allData;
        document.getElementById('userBody').style.display='block';
       document.getElementById('addStudentPage').style.display='none';
        var i=StorageModule.getUserIndex();
        document.getElementById('editProfilePage').style.display='none';
        var startTag='<table class="table"><thead><tr><th>First Name</th><th>Last Name</th><th>Gender</th><th>Email Id</th><th>Profession</th><th></th></tr></thead><tbody>';
        var j=0;
        allData=StorageModule.getAllRecords();
        var len=StorageModule.getLength();
        while(j<len)
        {
            if(allData[i].profession===allData[j].profession)
            {
                j++;
            }else{
                startTag+='<tr><td>'+allData[j].firstName+'</td><td>'+allData[j].lastName+'</td><td>'+allData[j].gender+'</td><td>'+allData[j].email+'</td><td>'+allData[j].profession+'</td>';
                startTag+='</tr>';
                j++;
            }
        }
        startTag+='</tbody></table>';
        document.getElementById('userBody').innerHTML=startTag;

    }
    return{
        displayMembers:displayMembers
    }
})();
