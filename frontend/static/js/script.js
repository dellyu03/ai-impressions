// 시작하기 버튼 클릭 시 실행되는 함수
function startChat() {
  // 사용자 정보 입력 페이지로 이동
  window.location.href = "/chat.html";
}

// 페이지 로드 시 애니메이션 효과
document.addEventListener("DOMContentLoaded", () => {
  // 헤더 애니메이션
  const header = document.querySelector(".header");
  header.style.opacity = "0";
  setTimeout(() => {
    header.style.transition = "opacity 1s ease-in-out";
    header.style.opacity = "1";
  }, 100);

  // 특징 카드 애니메이션
  const featureCards = document.querySelectorAll(".feature-card");
  featureCards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    setTimeout(() => {
      card.style.transition = "all 0.5s ease-in-out";
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, 300 + index * 200);
  });
});
