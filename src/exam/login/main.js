// 코드 구현
const id = document.getElementById("id");
const password = document.getElementById("password");
const certify = document.getElementById("certify");
const button = document.getElementById("button");
console.log("aa");
password.oninput = function () {
  const pl = password.value;
  
  // const eng = /^[a-zA-Z]*$/;
  // const num = /^[0-9]*$/;
  const regType = /^[A-Za-z0-9+]{8,20}$/; 

  // console.log()
  if (!regType.test(pl)) {
    certify.innerHTML = "비밀번호는 영어, 숫자 포함 8자에서 20자입니다";
  } else {
    certify.innerHTML = "";
    button.removeAttribute("disabled");
    button.classList.add("abled");
  }
};

function login() {
  alert(`${id.value}님 어서오세요`);
}