function getUserDetails(id){
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            resolve({userroll:"123"})
        },2000);
    })
}
function getSubId(userroll){
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            resolve({SubId:"eng-1"})
        },2000);
    })
}
function getMarks(SubId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({Marks:"99"})
        },2000);
    })
}

const myfun = async() =>{
    const result1 = await getUserDetails("123");
    console.log(result1);
    const result2 = await getSubId(result1.userroll);
    console.log(result2);
    const result3 = await getMarks(result2.SubId);
    console.log(result3);   
};
myfun();