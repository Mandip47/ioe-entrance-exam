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
    {
      question_title: "The plural of 'mouse' is:",
      ans1_txt: "mouses",
      ans2_txt: "mouse",
      ans3_txt: "mice",
      ans4_txt: "meese",
      right_answer: "ans3",
      marks: "1",
    },
    {
      question_title: "The synonym of 'fastidious' is:",
      ans1_txt: "careless",
      ans2_txt: "meticulous",
      ans3_txt: "clumsy",
      ans4_txt: "lazy",
      right_answer: "ans2",
      marks: "1",
    },
    {
      question_title: "Which word is a synonym for 'abundant'?",
      ans1_txt: "scarce",
      ans2_txt: "plentiful",
      ans3_txt: "rare",
      ans4_txt: "deficient",
      right_answer: "ans2",
      marks: "1",
    },
    {
      question_title: "The antonym of 'amiable' is:",
      ans1_txt: "kind",
      ans2_txt: "hostile",
      ans3_txt: "pleasant",
      ans4_txt: "friendly",
      right_answer: "ans2",
      marks: "1",
    },
    {
      question_title: "Which word means 'to argue over something trivial'?",
      ans1_txt: "debate",
      ans2_txt: "quarrel",
      ans3_txt: "bicker",
      ans4_txt: "argue",
      right_answer: "ans3",
      marks: "1",
    },
    {
      question_title: "'Phenomenon' in plural form is:",
      ans1_txt: "phenomenons",
      ans2_txt: "phenomenas",
      ans3_txt: "phenomena",
      ans4_txt: "phenoms",
      right_answer: "ans3",
      marks: "1",
    },
    {
      question_title: "Which is a synonym for 'ephemeral'?",
      ans1_txt: "lasting",
      ans2_txt: "temporary",
      ans3_txt: "permanent",
      ans4_txt: "enduring",
      right_answer: "ans2",
      marks: "1",
    },
    {
      question_title: "Which word means 'to be filled with wonder'?",
      ans1_txt: "marvel",
      ans2_txt: "criticize",
      ans3_txt: "mock",
      ans4_txt: "ignore",
      right_answer: "ans1",
      marks: "1",
    },
    {
      question_title: "What does 'gregarious' mean?",
      ans1_txt: "antisocial",
      ans2_txt: "shy",
      ans3_txt: "outgoing",
      ans4_txt: "reserved",
      right_answer: "ans3",
      marks: "1",
    },
    {
      question_title: "The word 'novel' means:",
      ans1_txt: "book",
      ans2_txt: "ordinary",
      ans3_txt: "new",
      ans4_txt: "fiction",
      right_answer: "ans3",
      marks: "1",
    },
    {
      question_title: "'Elusive' means:",
      ans1_txt: "difficult to find",
      ans2_txt: "easy to achieve",
      ans3_txt: "obvious",
      ans4_txt: "ordinary",
      right_answer: "ans1",
      marks: "1",
    },
    {
      question_title: "The opposite of 'indolent' is:",
      ans1_txt: "lazy",
      ans2_txt: "hardworking",
      ans3_txt: "careless",
      ans4_txt: "apathetic",
      right_answer: "ans2",
      marks: "1",
    },
    {
      question_title: "The antonym of 'succinct' is:",
      ans1_txt: "concise",
      ans2_txt: "brief",
      ans3_txt: "verbose",
      ans4_txt: "laconic",
      right_answer: "ans3",
      marks: "1",
    },
    {
      question_title: "'Superfluous' means:",
      ans1_txt: "necessary",
      ans2_txt: "excessive",
      ans3_txt: "insufficient",
      ans4_txt: "essential",
      right_answer: "ans2",
      marks: "1",
    },
    {
      question_title: "'Serene' means:",
      ans1_txt: "calm",
      ans2_txt: "angry",
      ans3_txt: "stormy",
      ans4_txt: "chaotic",
      right_answer: "ans1",
      marks: "1",
    },
    {
      question_title: "The synonym of 'audacious' is:",
      ans1_txt: "bold",
      ans2_txt: "timid",
      ans3_txt: "shy",
      ans4_txt: "cautious",
      right_answer: "ans1",
      marks: "1",
    },
    {
      question_title: "'Opaque' means:",
      ans1_txt: "transparent",
      ans2_txt: "unclear",
      ans3_txt: "invisible",
      ans4_txt: "vivid",
      right_answer: "ans2",
      marks: "1",
    },
    {
      question_title: "Which is the antonym of 'benevolent'?",
      ans1_txt: "kind",
      ans2_txt: "malevolent",
      ans3_txt: "generous",
      ans4_txt: "charitable",
      right_answer: "ans2",
      marks: "1",
    },
    {
      question_title: "'Lethargic' means:",
      ans1_txt: "active",
      ans2_txt: "energetic",
      ans3_txt: "sluggish",
      ans4_txt: "dynamic",
      right_answer: "ans3",
      marks: "1",
    },
    {
      question_title: "The opposite of 'frivolous' is:",
      ans1_txt: "serious",
      ans2_txt: "silly",
      ans3_txt: "insignificant",
      ans4_txt: "careless",
      right_answer: "ans1",
      marks: "1",
    },
    {
      question_title: "'Esoteric' means:",
      ans1_txt: "common",
      ans2_txt: "obscure",
      ans3_txt: "popular",
      ans4_txt: "simple",
      right_answer: "ans2",
      marks: "1",
    },
    {
      question_title: "'Inquisitive' means:",
      ans1_txt: "curious",
      ans2_txt: "uninterested",
      ans3_txt: "apathetic",
      ans4_txt: "indifferent",
      right_answer: "ans1",
      marks: "1",
    },
    {
      question_title: "The synonym of 'arduous' is:",
      ans1_txt: "easy",
      ans2_txt: "difficult",
      ans3_txt: "simple",
      ans4_txt: "effortless",
      right_answer: "ans2",
      marks: "1",
    },
    {
      question_title: "Which word means 'to cancel or annul'? ",
      ans1_txt: "rescind",
      ans2_txt: "confirm",
      ans3_txt: "approve",
      ans4_txt: "permit",
      right_answer: "ans1",
      marks: "1",
    },
    {
      question_title: "'Verbose' means:",
      ans1_txt: "concise",
      ans2_txt: "wordy",
      ans3_txt: "silent",
      ans4_txt: "brief",
      right_answer: "ans2",
      marks: "1",
    },
    {
      question_title: "The plural of 'crisis' is:",
      ans1_txt: "crises",
      ans2_txt: "crisises",
      ans3_txt: "crisis",
      ans4_txt: "criseses",
      right_answer: "ans1",
      marks: "1",
    },
    {
      question_title: "'Omnipotent' means:",
      ans1_txt: "powerless",
      ans2_txt: "all-powerful",
      ans3_txt: "irrelevant",
      ans4_txt: "finite",
      right_answer: "ans2",
      marks: "1",
    },
    {
      question_title: "The synonym of 'pinnacle' is:",
      ans1_txt: "base",
      ans2_txt: "peak",
      ans3_txt: "valley",
      ans4_txt: "bottom",
      right_answer: "ans2",
      marks: "1",
    },
    {
      question_title: "'Transient' means:",
      ans1_txt: "permanent",
      ans2_txt: "temporary",
      ans3_txt: "lasting",
      ans4_txt: "durable",
      right_answer: "ans2",
      marks: "1",
    },
    {
      question_title: "'Voracious' means:",
      ans1_txt: "hungry",
      ans2_txt: "satisfied",
      ans3_txt: "indifferent",
      ans4_txt: "content",
      right_answer: "ans1",
      marks: "1",
    },
    {
      question_title: "The antonym of 'zealous' is:",
      ans1_txt: "enthusiastic",
      ans2_txt: "indifferent",
      ans3_txt: "eager",
      ans4_txt: "passionate",
      right_answer: "ans2",
      marks: "1",
    },
  ];

  let currentPage = 0;
  let answeredQuestions = 0;
  let totalQuestions = quizData.length;
  let timeRemaining = 7200; // 2 hours in seconds
  let userAnswers = new Array(quizData.length).fill(null);
  const questionsPerPage = 20;

  // DOM Elements
  const questionContainer = document.getElementById("question-container");
  const answeredQuestionsDisplay =
    document.getElementById("answered-questions");

  function createQuestionElement(questionData, questionIndex) {
    const questionElement = document.createElement("div");
    questionElement.classList.add("question-block");

    const titleElement = document.createElement("h3");
    titleElement.innerHTML = `<strong>${questionIndex + 1}.</strong> ${
      questionData.question_title
    }`;
    questionElement.appendChild(titleElement);

    const marksElement = document.createElement("div");
    marksElement.classList.add("question-marks");
    marksElement.innerHTML = `[${questionData.marks} ${
      questionData.marks ? "Marks" : ""
    }]`;
    questionElement.appendChild(marksElement);

    const optionsContainer = document.createElement("div");
    optionsContainer.classList.add("options");

    ["ans1", "ans2", "ans3", "ans4"].forEach((ansKey) => {
      const optionWrapper = document.createElement("div");
      optionWrapper.classList.add("form-check");

      const radioInput = document.createElement("input");
      radioInput.type = "radio";
      radioInput.name = `question${questionIndex}`;
      radioInput.value = ansKey;
      radioInput.id = `${ansKey}_${questionIndex}`;
      radioInput.classList.add("form-check-input");

      if (userAnswers[questionIndex] === ansKey) {
        radioInput.checked = true;
      }

      radioInput.addEventListener("change", () => {
        const previousAnswer = userAnswers[questionIndex];
        userAnswers[questionIndex] = ansKey;

        if (!previousAnswer) {
          answeredQuestions++;
          if (answeredQuestionsDisplay) {
            answeredQuestionsDisplay.textContent = answeredQuestions;
          }
        }
      });

      const labelElement = document.createElement("label");
      labelElement.htmlFor = `${ansKey}_${questionIndex}`;
      labelElement.classList.add("form-check-label");
      labelElement.innerHTML = questionData[`${ansKey}_txt`];

      optionWrapper.appendChild(radioInput);
      optionWrapper.appendChild(labelElement);
      optionsContainer.appendChild(optionWrapper);
    });

    questionElement.appendChild(optionsContainer);
    return questionElement;
  }

  function renderQuestion() {
    questionContainer.innerHTML = "";
    const startIndex = currentPage * questionsPerPage;
    const endIndex = Math.min(startIndex + questionsPerPage, quizData.length);

    for (let i = startIndex; i < endIndex; i++) {
      const currentQuestion = quizData[i];
      const questionElement = createQuestionElement(currentQuestion, i);
      questionContainer.appendChild(questionElement);
    }

    // Navigation buttons
    const navigationContainer = document.createElement("div");
    navigationContainer.classList.add("button-container");

    const prevButton = document.createElement("button");
    prevButton.classList.add("nav-button", "previous");
    prevButton.textContent = "Previous";
    prevButton.disabled = currentPage === 0;
    prevButton.addEventListener("click", () => {
      if (currentPage > 0) {
        currentPage--;
        renderQuestion();
      }
    });

    const nextButton = document.createElement("button");
    nextButton.classList.add("nav-button", "next");
    nextButton.textContent = "Next";
    nextButton.disabled =
      (currentPage + 1) * questionsPerPage >= quizData.length;
    nextButton.addEventListener("click", () => {
      if ((currentPage + 1) * questionsPerPage < quizData.length) {
        currentPage++;
        renderQuestion();
      }
    });

    navigationContainer.appendChild(prevButton);
    navigationContainer.appendChild(nextButton);

    // Action buttons container
    const actionButtonsContainer = document.createElement("div");
    actionButtonsContainer.classList.add("action-buttons-container");

    const submitButton = document.createElement("button");
    submitButton.classList.add("button");
    submitButton.textContent = "Submit";
    submitButton.style.visibility =
      endIndex >= quizData.length ? "visible" : "hidden";
    submitButton.addEventListener("click", () => {
      alert("Quiz submitted! Implement scoring logic here.");
    });
    actionButtonsContainer.appendChild(submitButton);

    const topButton = document.createElement("button");
    topButton.classList.add("button");
    topButton.innerHTML = 'Go to top <span class="arrow">⬆</span>';
    topButton.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    actionButtonsContainer.appendChild(topButton);

    questionContainer.appendChild(navigationContainer);
    questionContainer.appendChild(actionButtonsContainer);
  }

  // Initial render
  renderQuestion();
});
