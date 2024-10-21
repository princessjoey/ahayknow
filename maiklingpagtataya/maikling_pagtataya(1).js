// Aralin 1 - Maikling Pagtataya

function check1() {
  var c = 0;
  var q1 = document.quiz.question1.value;
  var q2 = document.quiz.question2.value;
  var q3 = document.quiz.question3.value;
  var q4 = document.quiz.question4.value;
  var q5 = document.quiz.question5.value;
  var q6 = document.quiz.question6.value;
  var q7 = document.quiz.question7.value;
  var q8 = document.quiz.question8.value;
  var q9 = document.quiz.question9.value;
  var q10 = document.quiz.question10.value;

  var result = document.getElementById('result');

  if (q1 == "1A") { c++ }
  if (q2 == "2B") { c++ }
  if (q3 == "3C") { c++ }
  if (q4 == "4B") { c++ }
  if (q5 == "5C") { c++ }
  if (q6 == "6A") { c++ }
  if (q7 == "7C") { c++ }
  if (q8 == "8C") { c++ }
  if (q9 == '9B') { c++ }
  if (q10 == '10A') { c++ }

  if (c < 5) {
    // pass.style.display = "none";
    // fail.style.display = "block";
    result.textContent = `${c}`
    message.textContent = `Ayos lang yan! Ikaw ay makakabawi din.`
  } else {
    // fail.style.display = "none";
    // pass.style.display = "block"
    result.textContent = `${c}`
    message.textContent = `Magaling! Ikaw ay pumasa!`
  }

}

// Aralin 2 - Maikling Pagtataya

function check2() {
  var c = 0;
  var q1 = document.quiz.question1.value;
  var q2 = document.quiz.question2.value;
  var q3 = document.quiz.question3.value;
  var q4 = document.quiz.question4.value;
  var q5 = document.quiz.question5.value;
  var q6 = document.quiz.question6.value;
  var q7 = document.quiz.question7.value;
  var q8 = document.quiz.question8.value;
  var q9 = document.quiz.question9.value;
  var q10 = document.quiz.question10.value;

  var result = document.getElementById('result');

  if (q1 == "1A") { c++ }
  if (q2 == "2B") { c++ }
  if (q3 == "3C") { c++ }
  if (q4 == "4B") { c++ }
  if (q5 == "5C") { c++ }
  if (q6 == "6A") { c++ }
  if (q7 == "7C") { c++ }
  if (q8 == "8C") { c++ }
  if (q9 == '9B') { c++ }
  if (q10 == '10A') { c++ }

  if (c < 5) {
    // pass.style.display = "none";
    // fail.style.display = "block";
    result.textContent = `${c}`
    message.textContent = `Ayos lang yan! Ikaw ay makakabawi din.`
  } else {
    // fail.style.display = "none";
    // pass.style.display = "block"
    result.textContent = `${c}`
    message.textContent = `Magaling! Ikaw ay pumasa!`
  }

}