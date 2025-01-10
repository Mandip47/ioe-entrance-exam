document.addEventListener("DOMContentLoaded", function () {
  const submissionContainer = document.getElementById("submission-container");

  // Create submission content
  const submissionContent = document.createElement("div");
  submissionContent.classList.add("submission-content");

  // Add heading
  const heading = document.createElement("h1");
  heading.textContent = "Submission Successful";
  submissionContent.appendChild(heading);

  // Add thank you message
  const message = document.createElement("p");
  message.innerHTML = `Thank you <strong>Sagar Khyaju</strong>, for your kind co-operation. Your exam has been successfully submitted.`;
  submissionContent.appendChild(message);

  // Create button container
  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("action-buttons-container");

  // Add Go to Home button
  const homeButton = document.createElement("button");
  homeButton.classList.add("button");
  homeButton.textContent = "Go to Home";
  homeButton.addEventListener("click", () => {
    // Redirect to index.html (login page)
    window.location.href = "../index.html";
  });

  buttonContainer.appendChild(homeButton);
  submissionContent.appendChild(buttonContainer);

  // Add everything to the main container
  submissionContainer.appendChild(submissionContent);
});
