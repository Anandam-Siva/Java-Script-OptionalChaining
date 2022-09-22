let employee = {
    name: "siva",
    emailId: "siva@gmail.com",
    personalInfo: {
        mobile: "83338228xxx ",
        address: {
            village: "kondrddi Palli",
            mandal: "vemula"
        }
    }
}

console.log(employee.personalInfo.address.mandal);
console.log(employee.personaInfo.address) //the result will be error y bcaz there is no personaInfo key so ot will return error..and the remaining code will not run

console.log(employee.personaInfo?.address)//the result will be undefined and the remaining code will run
