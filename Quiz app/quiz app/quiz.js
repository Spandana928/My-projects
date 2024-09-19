const questions = [
        {
            text: "How to write an IF statement in JavaScript?",
            options: ["if i==5 then", "if(i==5)", "if i=5", "if i=5 then"],
            correct: 2
        },
        {
            text: "How to declare a variable in JavaScript?",
            options: ["var name", "name = var", "declare name", "let name"],
            correct: 4
        },
        {
            text: "Which one is a JavaScript library?",
            options: ["React", "Laravel", "Django", "Flask"],
            correct: 1
        },
         {
            text:" Which of the following methods is used to select an element by its ID in JavaScript?",
            options: ["getElementByClassName()", "querySelectorAll()", " getElementById()", "getElementsByTagName()"],
            correct: 3
        },
        {
            text: " How do you create a function in JavaScript?",
            options: ["function = myFunction() {}", "function myFunction() {}", "function:myFunction() {}", "create function myFunction() {}"],
            correct: 2
        },
        {
            text: " How do you call a function named myFunction",
            options: ["call myFunction();", "myFunction();", "call function myFunction();", "execute myFunction();"],
            correct: 2
        },
        {
            text: "How can you add a comment in JavaScript?",
            options: ["<!-- This is a comment -->", "/* This is a comment */", " # This is a comment", " // This is a comment"],
            correct: 4
        },
        {
            text: "Which of the following is a loop in JavaScript?",
            options: ["for", "iterate", "repeat", "for each"],
            correct: 1
        },
        {
            text: "What is the output of typeof null in JavaScript?",
            options: ["null", "undefined", " object", " function"],
            correct: 4
        },
        {
            text:" Which method is used to convert JSON data to a JavaScript object?",
            options: [" JSON.parse()", "JSON.stringify()", "JSON.toObject()", "JSON.convert()"],
            correct: 1
        },
    ];
    
    let currentQuestionIndex = 0;
    
    function loadQuestion() {
        const questionContainer = document.getElementById('question-container');
        const questionNumber = document.getElementById('question-number');
        const questionText = document.getElementById('question-text');
        const options = document.querySelectorAll('input[name="answer"]');
        const feedback = document.getElementById('feedback');
        
        feedback.innerHTML = ''; // Clear previous feedback
        
        const currentQuestion = questions[currentQuestionIndex];
        questionNumber.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
        questionText.textContent = currentQuestion.text;
        
        options.forEach((option, index) => {
            option.nextSibling.textContent = currentQuestion.options[index];
        });
    }
    
    function checkAnswer() {
        const options = document.querySelectorAll('input[name="answer"]');
        let selectedOption;
        options.forEach((option) => {
            if (option.checked) {
                selectedOption = parseInt(option.value);
            }
        });
        
        const feedback = document.getElementById('feedback');
        const currentQuestion = questions[currentQuestionIndex];
        
        if (selectedOption === currentQuestion.correct) {
            feedback.innerHTML = "Correct! ✔️";
            feedback.style.color = "green";
        } else {
            feedback.innerHTML = "Incorrect! ❌";
            feedback.style.color = "red";
        }
    }
    
    document.getElementById('next-btn').addEventListener('click', () => {
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            loadQuestion();
        }
    });
    document.getElementById('prev-btn').addEventListener('click', () => {
        if (currentQuestionIndex >= 1) {
            currentQuestionIndex--;
            loadQuestion();
        }
    });

    
    document.getElementById('submit-btn').addEventListener('click', checkAnswer);
    
    window.onload = loadQuestion;
    


