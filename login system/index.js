const Account = document.getElementById("Account")
const Password = document.getElementById("Password")
const LogInBtn = document.getElementById("LogInBtn")

let count = 0;

let users = JSON.parse(localStorage.getItem("user"))||[];
console.log(users)
LogInBtn.addEventListener("click",function(){
    let isUserFound = false;
    for(let i = 0; i<users.length;i++){
        if(Account.value == users[i].Account && Password.value == users[i].Password){
            alert("成功登入~")
            isUserFound = true;
            break;
        }
    }
if(!isUserFound){
    alert("帳號密碼錯誤")
    count++;
    event.preventDefault();
}
if(count >3){
    alert("請先註冊帳號密碼")
}



}


)