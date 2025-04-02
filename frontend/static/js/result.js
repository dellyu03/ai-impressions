document.addEventListener("DOMContentLoaded", () => {
  // 공유 버튼 이벤트 리스너
  const shareButtons = document.querySelectorAll(".share-button");

  shareButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const platform = button.classList[1]; // instagram, twitter, kakao

      // 공유할 텍스트 생성
      const shareText =
        `나의 첫인상 분석 결과\n\n` +
        `성격 유형: 친근한 리더형\n` +
        `주요 특징:\n` +
        `- 적극적이고 친근한 대화 스타일\n` +
        `- 따뜻하고 공감적인 감정 표현\n` +
        `- 창의적이고 긍정적인 사고\n` +
        `- 사교적이고 원만한 대인 관계\n\n` +
        `#ChatPression #첫인상분석 #성격테스트`;

      // 플랫폼별 공유 URL 생성
      let shareUrl;
      switch (platform) {
        case "instagram":
          shareUrl = `https://instagram.com/share?text=${encodeURIComponent(
            shareText
          )}`;
          break;
        case "twitter":
          shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
            shareText
          )}`;
          break;
        case "kakao":
          // 카카오톡 공유는 카카오 SDK가 필요합니다
          alert("카카오톡 공유 기능은 추후 업데이트될 예정입니다.");
          return;
      }

      // 공유 창 열기
      if (shareUrl) {
        window.open(shareUrl, "_blank", "width=600,height=400");
      }
    });
  });
});

// 광고 시청 버튼 클릭 시
function watchAd() {
  // 실제 광고 시청 로직은 나중에 구현
  showDetailedAnalysis();
}

// 후원하기 버튼 클릭 시
function support() {
  // 실제 후원 로직은 나중에 구현
  showDetailedAnalysis();
}

// 상세 분석 표시
function showDetailedAnalysis() {
  const lockedSection = document.querySelector(".locked-section");
  const lockedContent = document.querySelector(".locked-content");

  // 상세 분석 내용으로 교체
  lockedContent.innerHTML = `
    <div class="detailed-analysis">
      <h3>상세 분석 결과</h3>
      <div class="analysis-content">
        <div class="analysis-section">
          <h4>대화 패턴 분석</h4>
          <p>당신의 대화 스타일은 다음과 같은 특징을 보입니다:</p>
          <ul>
            <li>공감적인 반응이 85%로 매우 높은 편</li>
            <li>창의적인 표현 사용이 90%로 뛰어남</li>
            <li>적극적인 대화 참여도 75%</li>
            <li>감정적 안정성 70%</li>
          </ul>
        </div>
        <div class="analysis-section">
          <h4>강점</h4>
          <ul>
            <li>상대방의 감정을 잘 이해하고 공감하는 능력</li>
            <li>창의적인 대화 요소 도입</li>
            <li>적극적인 대화 참여</li>
            <li>안정적인 감정 표현</li>
          </ul>
        </div>
        <div class="analysis-section">
          <h4>개선점</h4>
          <ul>
            <li>감정적 안정성 향상 필요</li>
            <li>대화 주도성 강화</li>
            <li>자신감 있는 표현 사용</li>
          </ul>
        </div>
      </div>
    </div>
  `;
}

// 공유 기능
function shareToInstagram() {
  // Instagram 공유 로직
  alert("Instagram 공유 기능 준비 중입니다.");
}

function shareToTwitter() {
  // Twitter 공유 로직
  alert("Twitter 공유 기능 준비 중입니다.");
}

function shareToKakao() {
  // KakaoTalk 공유 로직
  alert("KakaoTalk 공유 기능 준비 중입니다.");
}
