document.addEventListener("DOMContentLoaded", function () {
  // Sample JSON data (you would typically load this from a file or API)
  const quizData = [
    {
      question_title: "'bank' is transcribed as:",
      ans1_txt: "\\(/bæŋk/\\)",
      ans2_txt: "\\(/baŋk/\\)",
      ans3_txt: "\\(/beŋk/\\)",
      ans4_txt: "\\(/bɔŋk/\\)",
      right_answer: "ans1",
    },
    {
      question_title: "A person in charge of a public building is",
      ans1_txt: "curator",
      ans2_txt: "warden",
      ans3_txt: "artist",
      ans4_txt: "custodian",
      right_answer: "ans4",
    },
  ];

  let currentQuestionIndex = 0;
  let answeredQuestions = 0;
  let totalQuestions = quizData.length;
  let timeRemaining = 7200; // 2 hours in seconds
  let userAnswers = new Array(totalQuestions).fill(null);

  // DOM Elements
  const questionContainer = document.getElementById("question-container");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  const submitBtn = document.getElementById("submit-btn");
  const timerDisplay = document.getElementById("timer");
  const answeredQuestionsDisplay =
    document.getElementById("answered-questions");

  // Function to create a question element
  function createQuestionElement(questionData) {
    const questionElement = document.createElement("div");
    questionElement.classList.add("question-block");

    // Question title
    const titleElement = document.createElement("h3");
    titleElement.innerHTML = questionData.question_title;
    questionElement.appendChild(titleElement);

    // Answer options
    const optionsContainer = document.createElement("div");
    optionsContainer.classList.add("options");

    // Create radio buttons for each answer
    ["ans1", "ans2", "ans3", "ans4"].forEach((ansKey) => {
      const optionWrapper = document.createElement("div");
      optionWrapper.classList.add("form-check");

      const radioInput = document.createElement("input");
      radioInput.type = "radio";
      radioInput.name = "question";
      radioInput.value = ansKey;
      radioInput.id = ansKey;
      radioInput.classList.add("form-check-input");

      // Check if this question has been answered
      if (userAnswers[currentQuestionIndex] === ansKey) {
        radioInput.checked = true;
      }

      // Add change event listener to track answers
      radioInput.addEventListener("change", () => {
        if (!userAnswers[currentQuestionIndex]) {
          answeredQuestions++;
          answeredQuestionsDisplay.textContent = answeredQuestions;
        }
        userAnswers[currentQuestionIndex] = ansKey;
      });

      const labelElement = document.createElement("label");
      labelElement.htmlFor = ansKey;
      labelElement.classList.add("form-check-label");
      labelElement.innerHTML = questionData[`${ansKey}_txt`];

      optionWrapper.appendChild(radioInput);
      optionWrapper.appendChild(labelElement);
      optionsContainer.appendChild(optionWrapper);
    });

    questionElement.appendChild(optionsContainer);
    return questionElement;
  }

  // Function to render current question
  function renderQuestion() {
    questionContainer.innerHTML = "";
    const currentQuestion = quizData[currentQuestionIndex];
    const questionElement = createQuestionElement(currentQuestion);
    questionContainer.appendChild(questionElement);

    // Update navigation buttons
    prevBtn.disabled = currentQuestionIndex === 0;
    nextBtn.disabled = currentQuestionIndex === quizData.length - 1;
    submitBtn.style.display =
      currentQuestionIndex === quizData.length - 1 ? "inline-block" : "none";
  }

  // Navigation event listeners
  prevBtn.addEventListener("click", () => {
    if (currentQuestionIndex > 0) {
      currentQuestionIndex--;
      renderQuestion();
    }
  });

  nextBtn.addEventListener("click", () => {
    if (currentQuestionIndex < quizData.length - 1) {
      currentQuestionIndex++;
      renderQuestion();
    }
  });

  // Submit button event listener
  submitBtn.addEventListener("click", () => {
    // Here you would typically:
    // 1. Collect and validate answers
    // 2. Calculate score
    // 3. Show results
    alert("Quiz submitted! Implement scoring logic here.");
  });

  // Initial render
  renderQuestion();
});
