var data = {

	"number-of-questions": 10,
	"questions" : [
		{
			"question_number": 1,
			"question": "All elements are identified by their __________ and are marked up using either start tags and end tags or self-closing tags",
			"option1": "tag name",
			"option2": "class name",
			"option1_value":"True",
			"option2_value":"False",
			"hint1": "This is Hint1",
			"hint2": "This is Hint2",
			"correct_answer_display": "Correct Answer!The tagName property returns the tag name of the element. In HTML, the returned value of the tagName property is always in UPPERCASE.",
			"wrong_answer_display": "Wrong Answer! You have choosen the Wrong Answer."
		},
		{
			"question_number": 2,
			"question": "The __________ element represents a span of text that is isolated from its surroundings for the purposes of bidirectional text formatting",
			"option1": "bdo",
			"option2": "bdi",
			"correct_answer": "option2",
			"option1_value":"False",
			"option2_value":"True",
			"hint1": "This is Hint1",
			"hint2": "This is Hint2",
			"correct_answer_display": "Correct Answer!bdi stands for Bi-directional Isolation. This element is useful when embedding user-generated content with an unknown directionality",
			"wrong_answer_display": "Wrong Answer! You have choosen the Wrong Answer."
		},
		{
			"question_number": 3,
			"question": "A ____________ element must have a start tag but must not have an end tag",
			"option1": "code",
			"option2": "command",
			"option1_value":"False",
			"option2_value":"True",
			"hint1": "This is Hint1",
			"hint2": "This is Hint2",
			"correct_answer_display": "Correct Answer!The command tag is new in HTML5 and specifies a normal command with an action.",
			"wrong_answer_display": "Wrong Answer! You have choosen the Wrong Answer."
		},
		{
			"question_number": 4,
			"question": "Which type attribute of input element sets the element’s value to a string representing a number?",
			"option1": "range",
			"option2": "email",
			"option1_value":"True",
			"option2_value":"False",
			"hint1": "This is Hint1",
			"hint2": "This is Hint2",
			"correct_answer_display": "Correct Answer!The input element with a type attribute whose value is “range” represents an imprecise control for setting the element’s value to a string representing a number",
			"wrong_answer_display": "Wrong Answer! You have choosen the Wrong Answer."
		},
		{
			"question_number": 5,
			"question": "The World Wide Web’s markup language has always been HTML.",
			"option1": "True",
			"option2": "False",
			"option1_value":"True",
			"option2_value":"False",
			"hint1": "This is Hint1",
			"hint2": "This is Hint2",
			"correct_answer_display": "Correct Answer!The World Wide Web’s markup language has always been HTML. HTML was primarily designed as a language for semantically describing scientific documents, although its general design and adaptations over the years have enabled it to be used to describe a number of other types of documents.",
			"wrong_answer_display": "Wrong Answer! You have choosen the Wrong Answer."
		},
		{
			"question_number": 6,
			"question": "Which of the following type attributes of input element defines control for entering a telephone number?",
			"option1": "tel",
			"option2": "mob",
			"option1_value":"True",
			"option2_value":"False",
			"hint1": "This is Hint1",
			"hint2": "This is Hint2",
			"correct_answer_display": "Correct Answer!The input element with a type attribute whose value is “tel” represents a one-line plain-text edit control for entering a telephone number.",
			"wrong_answer_display": "Wrong Answer! You have choosen the Wrong Answer."
		},
		{
			"question_number": 7,
			"question": "Which element represents a control for generating a public-private key pair?",
			"option1": "key",
			"option2": "keygen",
			"option1_value":"False",
			"option2_value":"True",
			"hint1": "This is Hint1",
			"hint2": "This is Hint2",
			"correct_answer_display": "Correct Answer!The keygen element represents a control for generating a public-private key pair and for submitting the public key from that key pair.",
			"wrong_answer_display": "Wrong Answer! You have choosen the Wrong Answer."
		},
		{
			"question_number": 8,
			"question": "Which element represents marked or highlighted text for reference purposes?",
			"option1": "strong",
			"option2": "mark",
			"option1_value":"False",
			"option2_value":"True",
			"hint1": "This is Hint1",
			"hint2": "This is Hint2",
			"correct_answer_display": "Correct Answer!The mark element represents a run of text in one document marked or highlighted for reference purposes, due to its relevance in another context.",
			"wrong_answer_display": "Wrong Answer! You have choosen the Wrong Answer."
		},
		{
			"question_number": 9,
			"question": "Which element(s) represents a section of a document that links to other documents?",
			"option1": "nav",
			"option2": "anchor tag",
			"option1_value":"True",
			"option2_value":"False",
			"hint1": "This is Hint1",
			"hint2": "This is Hint2",
			"correct_answer_display": "Correct Answer!The nav element represents a section of a page that links to other pages or to parts within the page: a section with navigation links.",
			"wrong_answer_display": "Wrong Answer! You have choosen the Wrong Answer."
		},
		{
			"question_number": 10,
			"question": "Which of the following element marks the ruby text component of a ruby annotation?",
			"option1": "ruby",
			"option2": "rt",
			"option1_value":"False",
			"option2_value":"True",
			"hint1": "This is Hint1",
			"hint2": "This is Hint2",
			"correct_answer_display": "Correct Answer!The rt element is the markup for ruby text.",
			"wrong_answer_display": "Wrong Answer! You have choosen the Wrong Answer."
		}
	]
};

console.log(data);

// for (var i = 0; i < data.length; i++) {
// 	document.getElementById('main-div').innerHTML = '';
// }

function startQuiz(){
	var m = document.getElementById("whole-div");
	for (var i = 0; i < data.questions.length; i++) {	
		m.insertAdjacentHTML('beforeend','<p><hr>'+data.questions[i].question_number+'. '+data.questions[i].question+'</p>');
		m.insertAdjacentHTML('beforeend','<button id = "'+data.questions[i].question_number+'hint-button-id1" class = "hint-button" onclick="hintQuestion('+data.questions[i].question_number+','+1+')">Click me for Hint1!</button><button id = "'+data.questions[i].question_number+'hint-button-id2" class = "hint-button" onclick="hintQuestion('+data.questions[i].question_number+','+2+')">Click me for Hint2!</button>');
		m.insertAdjacentHTML('beforeend','<div id = "'+data.questions[i].question_number+'hint-1" class = "alert alert-warning question-hint" onclick="hintQuestion('+data.questions[i].question_number+','+1+')" style = "display: none;"><a href="#" class="close" aria-label="close">&times;</a><p>'+data.questions[i].hint1+'</p></div><div id = "'+data.questions[i].question_number+'hint-2" class = "alert alert-warning question-hint" onclick="hintQuestion('+data.questions[i].question_number+','+2+')" style = "display: none;"><a href="#" class="close" aria-label="close">&times;</a><p>'+data.questions[i].hint2+'</p></div>');
		m.insertAdjacentHTML('beforeend','<form><p><input id = "'+data.questions[i].question_number+'opt'+1+'" type="radio" name = "question'+data.questions[i].question_number+'" value = '+data.questions[i].option1_value+' onclick= "validateOption('+data.questions[i].question_number+', this)">'+data.questions[i].option1+'</p>');
		m.insertAdjacentHTML('beforeend','<p><input id = "'+data.questions[i].question_number+'opt'+2+'" type="radio" name = "question'+data.questions[i].question_number+'" value = '+data.questions[i].option2_value+' onclick= "validateOption('+data.questions[i].question_number+', this)">'+data.questions[i].option2+'</p></form>');
		m.insertAdjacentHTML('beforeend','<p><div id = "'+data.questions[i].question_number+'correctAnswer" class = "alert alert-warning question-cor-ans" style = "display: none;"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a><p id = "rightAns">'+data.questions[i].correct_answer_display+'</p></div></p>');
		m.insertAdjacentHTML('beforeend','<p><div id = "'+data.questions[i].question_number+'incorrectAnswer" class = "alert alert-warning question-inc-ans" style = "display: none;"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a><p id = "wrongAns">'+data.questions[i].wrong_answer_display+'</p></div></p>');
	// document.getElementById("option1").innerHTML = data.questions[i].option1;
	}
}


function hintQuestion(questionNumber, number){
	var hintquestion = document.getElementById(questionNumber+'hint-'+number);
	var buttonstate = document.getElementById(questionNumber+'hint-button-id'+number);
	if(hintquestion.style.display == "none"){
		hintquestion.style.display = "block";
		buttonstate.disabled = true;
	} else {
		hintquestion.style.display = "none";
		buttonstate.removeAttribute("disabled");
	}
}
function validateOption(questionNumber, tag){
	if(tag.value == 'True'){
		document.getElementById(questionNumber+'correctAnswer').style.display = "block";

	} else {
		document.getElementById(questionNumber+'incorrectAnswer').style.display = "block";
	}
	document.getElementById(questionNumber+'opt1').disabled = true;
	document.getElementById(questionNumber+'opt2').disabled = true;
}