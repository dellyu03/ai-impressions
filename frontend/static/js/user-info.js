document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("userInfoForm");
  const submitButton = form.querySelector(".submit-button");
  const genderInput = document.getElementById("gender");
  const genderButtons = document.querySelectorAll(".gender-btn");

  // 성별 버튼 클릭 처리
  genderButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // 모든 버튼에서 active 클래스 제거
      genderButtons.forEach((btn) => btn.classList.remove("active"));
      // 클릭된 버튼에 active 클래스 추가
      button.classList.add("active");
      // hidden input에 선택된 값 설정
      genderInput.value = button.dataset.value;
      // 유효성 검사 실행
      validateInput(genderInput);
    });
  });

  // 폼 제출 처리
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // 버튼 비활성화
    submitButton.disabled = true;
    submitButton.textContent = "처리 중...";

    // 폼 데이터 수집
    const formData = {
      name: form.name.value,
      age: parseInt(form.age.value),
      gender: form.gender.value,
      occupation: form.occupation.value,
    };

    try {
      // 사용자 정보를 localStorage에 저장
      localStorage.setItem("userInfo", JSON.stringify(formData));

      // conversation 페이지로 이동
      window.location.href = "/conversation";
    } catch (error) {
      console.error("Error:", error);
      alert("오류가 발생했습니다. 다시 시도해주세요.");

      // 버튼 상태 복구
      submitButton.disabled = false;
      submitButton.textContent = "테스트 시작하기";
    }
  });

  // 입력 필드 유효성 검사
  const inputs = form.querySelectorAll("input");
  inputs.forEach((input) => {
    input.addEventListener("input", () => {
      validateInput(input);
    });
  });
});

// 입력 필드 유효성 검사 함수
function validateInput(input) {
  const value = input.value.trim();

  if (!value) {
    input.setCustomValidity("이 필드는 필수입니다.");
    return false;
  }

  // 나이 유효성 검사
  if (input.id === "age") {
    const age = parseInt(value);
    if (age < 1 || age > 100) {
      input.setCustomValidity("나이는 1에서 100 사이여야 합니다.");
      return false;
    }
  }

  input.setCustomValidity("");
  return true;
}

// 인스타그램 공유 함수
function shareToInstagram() {
  const url = encodeURIComponent(window.location.href);
  const text = encodeURIComponent("AI가 분석하는 나의 첫인상 테스트");
  window.open(`https://instagram.com/share?url=${url}&text=${text}`, "_blank");
}

// 카카오톡 공유 함수
function shareToKakao() {
  const url = encodeURIComponent(window.location.href);
  const text = encodeURIComponent("AI가 분석하는 나의 첫인상 테스트");
  window.open(
    `https://sharer.kakao.com/talk/friends/picker/shortlink?url=${url}&text=${text}`,
    "_blank"
  );
}
