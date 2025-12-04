function getUserId(id,getUserSubjects){
    console.log("getting user details by userid",id);
    getUserSubjects({userroll:"678"});
}
function getUserSubjects(userRoll,getUserMarks){
    console.log("getting users subjects by rool Number",userRoll);
    getUserMarks({subid:"en-1"});
}
function getUserMarks(userSubId){
    console.log("getting the marks by subid",userSubId);
}
getUserId("123",function(userRoll){
    getUserSubjects(userRoll,function(subid){
        getUserMarks(subid)
    })
});