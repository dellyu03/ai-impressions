document.addEventListener("DOMContentLoaded", () => {
  // 스크롤 애니메이션
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // 애니메이션이 필요한 요소들에 적용
  document.querySelectorAll(".feature-card, .step").forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "all 0.5s ease-out";
    observer.observe(el);
  });
});

// 테스트 시작 함수
function startTest() {
  window.location.href = "user-info.html";
}

// 기능 섹션으로 스크롤
function scrollToFeatures() {
  document.querySelector(".features-section").scrollIntoView({
    behavior: "smooth",
  });
}

// 인스타그램 공유 함수
function shareToInstagram() {
  const text = encodeURIComponent("AI가 분석하는 나의 첫인상 테스트");
  const url = encodeURIComponent(window.location.href);
  window.open(`https://instagram.com/share?url=${url}&text=${text}`, "_blank");
}

// 카카오톡 공유 함수
function shareToKakao() {
  const text = encodeURIComponent("AI가 분석하는 나의 첫인상 테스트");
  const url = encodeURIComponent(window.location.href);
  window.open(
    `https://sharer.kakao.com/talk/friends/picker/share?url=${url}&text=${text}`,
    "_blank"
  );
}
