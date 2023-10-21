const Name = document.getElementById('Name');



const Account = document.getElementById("Account");
const Password = document.getElementById("Password");
const RepeatPassword = document.getElementById("RepeatPassword");
const SignUpBtn = document.getElementById("SignUpBtn");

// 从本地存储中获取已注册的用户数据
let users = JSON.parse(localStorage.getItem("users")) || [];

SignUpBtn.addEventListener("click", function (event) {
    const inputAccount = Account.value;
    const inputName= Name.value;
    const inputPassword = Password.value;
    const inputRepeatPassword = RepeatPassword.value;

    // 检查帐号是否已存在
    const isAccountExists = users.some((user) => user.Account === inputAccount);

    if (isAccountExists) {
        alert("帐号已存在，请选择其他帐号");
        event.preventDefault(); // 阻止默认的链接跳转行为
    } else if (inputPassword === inputRepeatPassword) {
        // 注册新帐号
        const newUser = {
            Account: inputAccount,
            Name: inputName,
            Password: inputPassword
        };
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
        alert("注册成功");
        window.location.href = 'sign.html';
    } if (password !== confirmPassword) {
        alert('密码和确认密码不匹配，请重新输入。');
        return;
    }
});
