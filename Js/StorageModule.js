var StorageModule=(function(){
    var storageArray=[];
    storageArray.push({
        firstName:"Shivam",
        lastName:"Kubde",
        gender:"Male",
        email:"s@gmail.com",
        password:"s",
        profession:"Student",
        securityQuestion:"What is your fav food",
        answer:"BPM"
        });
        storageArray.push({
            firstName:"S",
            lastName:"K",
            gender:"Female",
            email:"k@gmail.com",
            password:"k",
            profession:"Teacher",
            securityQuestion:"What is your fav food",
            answer:"PBM"
            });
    var userIndex=getUserIndex();
    function setValues(data)
    {
        storageArray.push(data);
        console.log(storageArray);
    }
     function getPersonalDetails()
    {
        return storageArray[this.userIndex];
    }
    function getLength()
    {
        return storageArray.length;
    }
   function getUserIndex()
    {
        return this.userIndex;
    } 
    function getAllRecords(){
        return storageArray;
    }
    function setPersonalDetails(data)
    {
        storageArray[this.userIndex].firstName=data.firstName;
        storageArray[this.userIndex].lastName=data.lastName;
        storageArray[this.userIndex].email=data.email;
        storageArray[this.userIndex].profession=data.profession;
    }
    function checkUserLogin(email,password){
        var available=false;
        for(var i=0;i<storageArray.length;i++)
        {
            if(storageArray[i].email===email && storageArray[i].password===password)
            {
                available=true;
                this.userIndex=i;
                break;
            }
        }
        return available;
    }
    return{
        setValues:setValues,
        checkUserLogin:checkUserLogin,
        getUserIndex:getUserIndex,
        getPersonalDetails:getPersonalDetails,
        setPersonalDetails:setPersonalDetails,
        getAllRecords:getAllRecords,
        getLength:getLength
        }
})();