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
      marks: "1",
    },
    {
      question_title: "A person in charge of a public building is",
      ans1_txt: "curator",
      ans2_txt: "warden",
      ans3_txt: "artist",
      ans4_txt: "custodian",
      right_answer: "ans4",
      marks: "1",
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

    // Question title with number
    const titleElement = document.createElement("h3");
    titleElement.innerHTML = `<strong>${currentQuestionIndex + 1}.</strong> ${
      questionData.question_title
    }`;
    questionElement.appendChild(titleElement);

    // Add marks line
    const marksElement = document.createElement("div");
    marksElement.classList.add("question-marks");
    marksElement.innerHTML = `[${questionData.marks} ${
      questionData.marks ? "Marks" : ""
    }]`;
    questionElement.appendChild(marksElement);

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

      if (userAnswers[currentQuestionIndex] === ansKey) {
        radioInput.checked = true;
      }

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

    // Navigation buttons (Previous/Next)
    const navigationContainer = document.createElement("div");
    navigationContainer.classList.add("button-container");

    const prevButton = document.createElement("button");
    prevButton.classList.add("nav-button", "previous");
    prevButton.textContent = "Previous";
    prevButton.disabled = currentQuestionIndex === 0;
    prevButton.addEventListener("click", () => {
      if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        renderQuestion();
      }
    });

    const nextButton = document.createElement("button");
    nextButton.classList.add("nav-button", "next");
    nextButton.textContent = "Next";
    nextButton.disabled = currentQuestionIndex === quizData.length - 1;
    nextButton.addEventListener("click", () => {
      if (currentQuestionIndex < quizData.length - 1) {
        currentQuestionIndex++;
        renderQuestion();
      }
    });

    navigationContainer.appendChild(prevButton);
    navigationContainer.appendChild(nextButton);

    // Add the new action buttons container
    const actionButtonsContainer = document.createElement("div");
    actionButtonsContainer.classList.add("action-buttons-container");

    const submitButton = document.createElement("button");
    submitButton.classList.add("button");
    submitButton.textContent = "Submit";
    submitButton.addEventListener("click", () => {
      alert("Quiz submitted! Implement scoring logic here.");
    });

    const topButton = document.createElement("button");
    topButton.classList.add("button");
    topButton.innerHTML = 'Go to top <span class="arrow">⬆</span>';
    topButton.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    actionButtonsContainer.appendChild(submitButton);
    actionButtonsContainer.appendChild(topButton);

    questionContainer.appendChild(questionElement);
    questionContainer.appendChild(navigationContainer);
    questionContainer.appendChild(actionButtonsContainer);
  }

  // Initial render
  renderQuestion();
});
