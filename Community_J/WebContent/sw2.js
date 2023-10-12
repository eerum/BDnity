function validateForm() {
    var selectedList = document.getElementById("list").value;
    var password = document.getElementById("password").value;

    // 간단한 로그인 로직 (실제로는 서버에서 처리해야 함)
    if (selectedList === password) {
        alert("로그인 성공!");
        window.location.href = "sw0.html"; // 로그인 성공 시 리디렉션
        return false; // 폼 제출 방지
    } else {
        alert("로그인 실패. 학과와 비밀번호를 확인하세요.");
        return false; // 폼 제출 방지
    }
}
