var shuffleSequence = seq("setcounter", "intro", 
                          sepWith("sepprac", seq("prac")), "presepA", "dummysep", 
                          sepWith("sepexp", rshuffle(startsWith("bias"), startsWith("filler"))));
var practiceItemTypes = ["prac"];
var completionMessage = "Thank you for your participation!"

    
var defaults = [
    "Separator", {
        normalMessage: "Please wait."
    },
    "DashedSentence", {
        mode: "self-paced reading", display: "in place"
    },
    "Question", {
        as: ["Yes", "No"],
        randomOrder: false
    },
    "Message", {
        hideProgressBar: false
    },
    "Form", {
        hideProgressBar: true,
        continueOnReturn: true
    }
];

 // insert breaks
function modifyRunningOrder(ro) {

 for (var i = 0; i < ro.length; ++i) {
 if (i % 24 == 22 && i > 30 && i < 300) {
 ro[i].push(new DynamicElement(
 "Message",
 { html: "<p>Please take a short break. The experiment will continue in 10 seconds.</p>", transfer: 10000 },
 true
 ));
 }
 }
 return ro;
 }


var items = [

   ["setcounter", "__SetCounter__", { }], 

//    ["intro", "Form", {consentRequired: true, html: {include: "intro.html" }} ],
//    ["intro", "Form", {consentRequired: true, html: {include: "intro1.html" }} ],
//    ["intro", "Form", {consentRequired: true, html: {include: "intro2.html" }} ],
//    ["intro", "Form", {consentRequired: true, html: {include: "intro3.html" }} ],
//    ["exit", "Form", {consentRequired: false, html: {include: "exit.html" }} ],
    
    ["sepprac", "Separator", {transfer: 1000, errorMessage: "Wrong. Please wait."}],
    
    ["sepexp", "Separator", {transfer: 500}],

    ["break", "Message", {
        html: { include: "break.html" },
        transfer: "keypress"
    } ],
    

    
    // Practice
    
["prac", "DashedSentence", {s: ["This is", "just a practice sentence", "to get you used", "to the method", "of presentation."]}, "Question",  {q:"Was that sentence easy?"}, Separator, { }],
["prac", "DashedSentence", {s: ["This is", "another practice sentence", "which is longer", "and a little more complicated", "than the one", "you just read."]}, "Question",  {q:"Did you read that at a normal pace?" }],
                           
["prac", Message, {consentRequired: false, transfer: "keypress",
                     html: ["div",
                           ["p", "That's all there is to it! Let's try some practice sentences more like the ones you'll be seeing in the experiment:"]
                           ]}],

["prac", "DashedSentence", {s: ["My favorite singer", "is famous for", "revolutionizing country music.", "My favorite movie star", "is a high-achieving", "young woman.", "They are both", "very inspiritional.", "I have", "learned a lot", "from their stories."]}, "Question", {hasCorrect: 0, q: "Is any singer mentioned in the sentence?"}],
["prac", "DashedSentence", {s: ["This desk", "belongs to", "Sandra.", "That desk over there", "belongs to", "her brother Nick.", "Both of these tables", "is black.", "The siblings", "are thinking about", "selling the tables."]}, "Question", {hasCorrect: 1, q: "Does Sandra own a white table?"}],
["prac", "DashedSentence", {s: ["Patricia", "works as", "a truck driver.", "Her best friend,", "Tania,", "is a hard-working policewoman.", "He is really good", "at his job.", "They have", "known each other", "since high school."]}, "Question",{hasCorrect: 1, q: "Does Tania work as a nurse?"}],

["prac", Message, {consentRequired: false, transfer: "keypress",
                     html: ["div",
                           ["p", "That's all the practice! When you're ready to begin the experiment, press any button to move ahead. REMEMBER: it will last approximately 5 minutes, and will require your full attention throughout that period. Thank you for your help!"]
                           ]}],


["presepA", Separator, {transfer: 3000, normalMessage: "Get your hands in position, and get ready to begin!" }],
["dummysep", Separator, {transfer: 10, normalMessage: ""}],
["dummysep", Separator, {transfer: 10, normalMessage: ""}],
["dummysep", Separator, {transfer: 10, normalMessage: ""}],
["dummysep", Separator, {transfer: 10, normalMessage: ""}],
["dummysep", Separator, {transfer: 10, normalMessage: ""}],
["dummysep", Separator, {transfer: 10, normalMessage: ""}],
["dummysep", Separator, {transfer: 10, normalMessage: ""}],
["dummysep", Separator, {transfer: 10, normalMessage: ""}],
["dummysep", Separator, {transfer: 10, normalMessage: ""}],
["dummysep", Separator, {transfer: 10, normalMessage: ""}],

    //Tense Stimuli List (sample)
[["bias-noun-comp",1], "DashedSentence", {s: ["The senator", "wrote", "their opponent", "was", "acquitted", "before", "getting", "elected"]}, "Question", {q: " Did the senator write something??", hasCorrect: 0}],
[["bias-noun-comp",2], "DashedSentence", {s: ["The professor", "taught", "the lesson",  "was", "easy", "and I", "happily", "agreed"]}, "Question", {q: " Did the teacher forget to teach??", hasCorrect: 1}],
[["bias-noun-noun",3], "DashedSentence", {s: ["The senator", "wrote", "a letter", "to", "me", "with", "beautiful", "penmanship"]}, "Question", {q: " Did the senator write something??", hasCorrect: 0}],
[["bias-noun-noun",4], "DashedSentence", {s: ["The professor", "taught", "the lesson",  "on", "the board", "at the", "famous", "university"]}, "Question", {q: " Did the teacher forget to teach??", hasCorrect: 1}],
[["bias-comp-comp",5], "DashedSentence", {s: ["The actor", "claimed", "his friend", "was", "a star", "in all", "earthly", "endeavors"]}, "Question", {q: " Did the actor claim something??", hasCorrect: 0}],
[["bias-comp-comp",6], "DashedSentence", {s: ["The farmer", "wished", "their daughter",  "was", "present", "at the", "important", "ceremony"]}, "Question", {q: " Was the farmer childless??", hasCorrect: 1}],
[["bias-comp-noun",7], "DashedSentence", {s: ["The actor", "claimed", "his roommate", "as", "a friend", "of", "high", "rank"]}, "Question", {q: " Did the actor have a friend??", hasCorrect: 0}],
[["bias-comp-noun",8], "DashedSentence", {s: ["The farmer", "wished", "their daughter",  "a", "happy birthday", "before", "going", "home"]}, "Question", {q: " Did the sentence mention a son??", hasCorrect: 1}],

[["filler.all.PAST.good.",116], "DashedSentence", {s: ["The lobbyists", "tried to persuade a senator", "to reform", "the social welfare system.","Meanwhile,", "some NGOs produced", "many leaflets to hand out", "to the public.","All of them","were involved in policy making.","They had","an impact on","the future of our country."]}, "Question", {q: "Is any NGO mentioned in the sentence?", hasCorrect: 0}],

];
