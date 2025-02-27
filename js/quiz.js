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

  // Add these variables
  let examStarted = false;

  function createInfoCard() {
    const infoCardContainer = document.getElementById("info-card-container");

    infoCardContainer.style.transition = "top 0.3s ease";

    window.addEventListener("scroll", () => {
      if (window.scrollY > 54) {
        infoCardContainer.style.top = "16px";
      } else {
        infoCardContainer.style.top = "54px";
      }
    });

    const cardHTML = `
        <div class="card">
            <div class="profile">
                <img src="../assets/profile.webp" alt="Profile Picture" />
            </div>
            <div class="details">
                <h2>Sagar Khyaju <span><strong>(2071-56)</strong></span></h2>
                <p>Time Remaining: <span class="time">2:00:00</span></p>
                <p>
                    You have answered <strong id="answered-count">0</strong> out of <strong>${totalQuestions}</strong>
                </p>
                <a href="#" class="unanswered-link" style="display: none;">View unanswered questions</a>
            </div>
        </div>
    `;

    infoCardContainer.innerHTML = cardHTML;
  }

  function updateAnsweredQuestions() {
    const answeredCount = document.getElementById("answered-count");
    if (answeredCount) {
      answeredCount.textContent = answeredQuestions;
    }

    const unansweredLink = document.querySelector(".unanswered-link");
    if (unansweredLink) {
      const answeredPercentage = (answeredQuestions / totalQuestions) * 100;
      if (answeredPercentage >= 1 && answeredPercentage <= 100) {
        unansweredLink.style.display = "block";
      } else {
        unansweredLink.style.display = "none";
      }
    }
  }

  function updateTimer() {
    if (!examStarted || timeRemaining <= 0) return;

    const hours = Math.floor(timeRemaining / 3600);
    const minutes = Math.floor((timeRemaining % 3600) / 60);
    const seconds = timeRemaining % 60;

    const timeDisplay = document.querySelector(".time");
    if (timeDisplay) {
      timeDisplay.textContent = `${hours}:${String(minutes).padStart(
        2,
        "0"
      )}:${String(seconds).padStart(2, "0")}`;
    }

    timeRemaining--;

    if (timeRemaining <= 0) {
      alert("Time is up!");
      // Implement exam submission logic here
    }
  }

  function startExam() {
    examStarted = true;
    createInfoCard();
    setInterval(updateTimer, 1000);

    // Update answered questions count when an answer is selected
    const answeredCount = document.getElementById("answered-count");
    if (answeredCount) {
      answeredCount.textContent = answeredQuestions;
    }
  }

  // Replace the click handler for unanswered questions link
  document.addEventListener("click", function (e) {
    if (e.target.classList.contains("unanswered-link")) {
      e.preventDefault();
      const unansweredIndices = userAnswers
        .map((ans, index) => (ans === null ? index + 1 : null))
        .filter((index) => index !== null);

      // Create and show popup
      const overlay = document.createElement("div");
      overlay.className = "unanswered-popup-overlay";

      const popup = document.createElement("div");
      popup.className = "unanswered-popup";

      // Check if all questions are answered
      if (unansweredIndices.length === 0) {
        popup.innerHTML = `
          <div class="unanswered-popup-content">
            <span class="popup-close">&times;</span>
            <h3>Congratulations!</h3>
            <p>You have answered all the questions so Best Of Luck</p>
            <button class="popup-ok-button">OK</button>
          </div>
        `;
      } else {
        // Create clickable links for each unanswered question
        const unansweredLinks = unansweredIndices
          .map(
            (questionNumber) =>
              `<a href="#" class="unanswered-question-link" data-question="${
                questionNumber - 1
              }">${questionNumber}</a>`
          )
          .join(", ");

        popup.innerHTML = `
          <div class="unanswered-popup-content">
            <span class="popup-close">&times;</span>
            <h3>Unanswered Questions</h3>
            <p id="container">${unansweredLinks}</p>
            <button class="popup-ok-button">OK</button>
          </div>
        `;
      }

      overlay.appendChild(popup);
      document.body.appendChild(overlay);

      // Add click handler for question links
      popup.addEventListener("click", function (e) {
        if (e.target.classList.contains("unanswered-question-link")) {
          e.preventDefault();
          const questionIndex = parseInt(e.target.dataset.question);
          currentPage = Math.floor(questionIndex / questionsPerPage);
          renderQuestion();
          document.body.removeChild(overlay);

          // Scroll to the specific question with offset
          setTimeout(() => {
            const questionElement = document.getElementById(
              `ans1_${questionIndex}`
            );
            if (questionElement) {
              const questionBlock = questionElement.closest(".question-block");
              if (questionBlock) {
                const offset = 100; // Adjust this value to control how much space appears above
                const elementPosition =
                  questionBlock.getBoundingClientRect().top;
                const offsetPosition =
                  elementPosition + window.scrollY - offset;

                window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth",
                });
              }
            }
          }, 100);
        }
      });

      // Add event listeners for closing popup
      const closePopup = () => {
        document.body.removeChild(overlay);
      };

      overlay.addEventListener("click", (e) => {
        if (e.target === overlay) {
          closePopup();
        }
      });

      popup.querySelector(".popup-close").addEventListener("click", closePopup);
      popup
        .querySelector(".popup-ok-button")
        .addEventListener("click", closePopup);
    }
  });

  // Call startExam when you want to begin the exam
  startExam();

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
      const overlay = document.createElement("div");
      overlay.className = "unanswered-popup-overlay";

      const popup = document.createElement("div");
      popup.className = "unanswered-popup";

      popup.innerHTML = `
        <div class="unanswered-popup-content">
          <span class="popup-close">&times;</span>
          <h3>Confirm Submission</h3>
          <p>You have answered '${answeredQuestions}' out of '${totalQuestions}'. You won't be able to re-take exam once it is submitted. Do you want to submit anyway?</p>
          <button class="popup-ok-button">OK</button>
        </div>
      `;

      overlay.appendChild(popup);
      document.body.appendChild(overlay);

      // Add event listeners for closing popup
      const closePopup = () => {
        document.body.removeChild(overlay);
      };

      overlay.addEventListener("click", (e) => {
        if (e.target === overlay) {
          closePopup();
        }
      });

      popup.querySelector(".popup-close").addEventListener("click", closePopup);
      popup.querySelector(".popup-ok-button").addEventListener("click", () => {
        closePopup();

        // Create new success popup
        const successOverlay = document.createElement("div");
        successOverlay.className = "unanswered-popup-overlay";

        const successPopup = document.createElement("div");
        successPopup.className = "unanswered-popup";

        successPopup.innerHTML = `
          <div class="unanswered-popup-content">
            <span class="popup-close">&times;</span>
            <h3>Success</h3>
            <p>Your answers have been submitted successfully.</p>
            <button class="popup-ok-button">OK</button>
          </div>
        `;

        successOverlay.appendChild(successPopup);
        document.body.appendChild(successOverlay);

        // Add event listeners for success popup
        const closeSuccessPopup = () => {
          document.body.removeChild(successOverlay);
          // TODO: Add your backend submission logic here

          // After backend logic, redirect to submission page
          window.location.href = "submission.html";
        };

        successOverlay.addEventListener("click", (e) => {
          if (e.target === successOverlay) {
            closeSuccessPopup();
          }
        });

        successPopup
          .querySelector(".popup-close")
          .addEventListener("click", closeSuccessPopup);
        successPopup
          .querySelector(".popup-ok-button")
          .addEventListener("click", closeSuccessPopup);
      });
    });

    const topButton = document.createElement("button");
    topButton.classList.add("button");
    topButton.innerHTML = 'Go to top <span class="arrow">⬆</span>';
    topButton.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    actionButtonsContainer.appendChild(submitButton);
    actionButtonsContainer.appendChild(topButton);

    questionContainer.appendChild(navigationContainer);
    questionContainer.appendChild(actionButtonsContainer);
  }

  // Call updateAnsweredQuestions whenever an answer is selected
  document.addEventListener("change", function (e) {
    if (e.target.classList.contains("form-check-input")) {
      updateAnsweredQuestions();
    }
  });

  // Initial render
  renderQuestion();
});
