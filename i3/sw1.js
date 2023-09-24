function registerUser() {
    var list = document.getElementById("list").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // 여기에서 실제 회원 가입 로직을 수행합니다.
    // 이 예제에서는 간단히 로컬 스토리지에 사용자 정보를 저장하도록 가정합니다.
    localStorage.setItem("list", list);
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    alert("회원 가입이 완료되었습니다. 이제 로그인하세요.");
    // 회원 가입 후 로그인 페이지로 이동합니다.
    window.location.href = "sw2.html";
}
