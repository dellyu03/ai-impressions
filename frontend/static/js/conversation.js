document.addEventListener("DOMContentLoaded", () => {
  const chatMessages = document.getElementById("chat-messages");
  const messageInput = document.getElementById("message-input");
  const sendButton = document.getElementById("send-button");
  const analyzeButton = document.getElementById("analyze-button");
  let userMessageCount = 0;
  const MIN_TURNS_FOR_ANALYSIS = 15;

  // 메시지 히스토리 배열
  let messages = [];

  // 모의 AI 응답 배열
  const mockResponses = [
    "그렇군요. 조금 더 자세히 말씀해 주시겠어요?",
    "흥미로운 이야기네요. 그런 상황에서 어떤 생각을 하셨나요?",
    "이해했습니다. 다른 상황에서는 어떻게 하시나요?",
    "그런 성격이시군요. 친구들과의 관계는 어떠신가요?",
    "재미있는 경험이네요. 그런 경험들이 당신의 성격 형성에 영향을 미쳤나요?",
    "그런 상황에서 당신의 감정은 어떠셨나요?",
    "이해했습니다. 그런 성격이 형성된 계기가 있으신가요?",
    "흥미로운 관점이네요. 다른 사람들은 어떻게 생각하시나요?",
    "그런 상황에서 당신은 어떻게 대처하시나요?",
    "좋은 질문이에요. 당신의 생각은 어떠신가요?",
  ];

  // 초기 AI 메시지 추가
  addMessage(
    "안녕하세요! 저는 당신의 첫인상을 분석하는 AI입니다. 대화를 통해 당신의 성격과 첫인상을 파악해보겠습니다.",
    "ai"
  );

  // 분석하기 버튼 상태 업데이트 함수
  function updateAnalyzeButton() {
    const remainingTurns = MIN_TURNS_FOR_ANALYSIS - userMessageCount;
    if (remainingTurns > 0) {
      analyzeButton.innerHTML = `
        <i class="fas fa-chart-bar"></i>
        <span>분석하기 (${remainingTurns})</span>
      `;
      analyzeButton.style.display = "flex";
      analyzeButton.classList.add("disabled");
    } else {
      analyzeButton.innerHTML = `
        <i class="fas fa-chart-bar"></i>
        <span>분석하기</span>
      `;
      analyzeButton.classList.remove("disabled");
    }
  }

  // 메시지 전송 함수
  function sendMessage() {
    const message = messageInput.value.trim();
    if (!message) return;

    // 사용자 메시지 추가
    addMessage(message, "user");
    messageInput.value = "";
    userMessageCount++;

    // AI 응답 시뮬레이션 (실제로는 API 호출)
    setTimeout(() => {
      const randomResponse =
        mockResponses[Math.floor(Math.random() * mockResponses.length)];
      addMessage(randomResponse, "ai");
      updateAnalyzeButton();
    }, 1000);
  }

  // 분석하기 버튼 클릭 이벤트
  analyzeButton.addEventListener("click", () => {
    if (userMessageCount < MIN_TURNS_FOR_ANALYSIS) {
      alert("최소 15마디의 대화가 필요합니다.");
      return;
    }

    try {
      // 분석 결과 페이지로 이동
      window.location.href = "/result";
    } catch (error) {
      console.error("Error:", error);
      alert("분석 중 오류가 발생했습니다. 다시 시도해주세요.");
    }
  });

  // 메시지 추가 함수
  function addMessage(text, sender) {
    const messageDiv = document.createElement("div");
    messageDiv.className = `message ${sender}-message`;

    // 현재 시간을 가져와서 시간과 분만 표시
    const now = new Date();
    const timeString = `${now.getHours().toString().padStart(2, "0")}:${now
      .getMinutes()
      .toString()
      .padStart(2, "0")}`;

    messageDiv.innerHTML = `
      <div class="message-content">
        <p>${text}</p>
        <div class="message-time">${timeString}</div>
      </div>
    `;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    // 메시지 히스토리에 추가
    messages.push({
      role: sender,
      content: text,
    });
  }

  // 이벤트 리스너
  sendButton.addEventListener("click", sendMessage);
  messageInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      sendMessage();
    }
  });

  // 초기 분석하기 버튼 상태 설정
  updateAnalyzeButton();
});
