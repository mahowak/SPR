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

["prac", "DashedSentence", {s: ["My favorite singer", "is famous for", "revolutionizing country music.", "My favorite movie star", "is a high-achieving", "young woman.", "They are both", "very inspirational.", "I have", "learned a lot", "from their stories."]}, "Question", {hasCorrect: 0, q: "Is any singer mentioned in the sentence?"}],
["prac", "DashedSentence", {s: ["This desk", "belongs to", "Sandra.", "That desk over there", "belongs to", "her brother Nick.", "Both of these tables", "are black.", "The siblings", "are thinking about", "selling the tables."]}, "Question", {hasCorrect: 1, q: "Does Sandra own a white table?"}],
["prac", "DashedSentence", {s: ["Patricia", "works as", "a truck driver.", "Her best friend,", "Tania,", "is a hard-working teacher.", "They are really good", "at their job.", "They have", "known each other", "since high school."]}, "Question",{hasCorrect: 1, q: "Does Tania work as a nurse?"}],

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
    [["bias-comp-comp", 1], "DashedSentence", { s: ['The', 'waiter', 'insisted', 'the', 'reservation', 'was', 'made', 'yesterday.'] }, "Question", { q: " Is there a waiter??", hasCorrect: 0 }],
    [["bias-noun-comp", 1], "DashedSentence", { s: ['The', 'waiter', 'confirmed', 'the', 'reservation', 'was', 'made', 'yesterday.'] }, "Question", { q: " Is there a waiter??", hasCorrect: 0 }],
    [["bias-comp-comp", 2], "DashedSentence", { s: ['The', 'chef', 'claimed', 'the', 'recipe', 'would', 'require', 'using', 'fresh', 'basil.'] }, "Question", { q: " Does the chef mention basil??", hasCorrect: 0 }],
    [["bias-noun-comp", 2], "DashedSentence", { s: ['The', 'chef', 'remembered', 'the', 'recipe', 'would', 'require', 'using', 'fresh', 'basil.'] }, "Question", { q: " Does the chef mention basil??", hasCorrect: 0 }],
    [["bias-comp-comp", 3], "DashedSentence", { s: ['The', 'worker', 'pretended', 'the', 'equipment', 'was', 'ready', 'to', 'be', 'used.'] }, "Question", { q: " Did the worker mention equipment??", hasCorrect: 0 }],
    [["bias-noun-comp", 3], "DashedSentence", { s: ['The', 'worker', 'revealed', 'the', 'equipment', 'was', 'ready', 'to', 'be', 'used.'] }, "Question", { q: " Did the worker mention equipment??", hasCorrect: 0 }],
    [["bias-comp-comp", 4], "DashedSentence", { s: ['The', 'accountant', 'hinted', 'the', 'client', 'was', 'cheating', 'on', 'his', 'taxes.'] }, "Question", { q: " Is there an accountant??", hasCorrect: 0 }],
    [["bias-noun-comp", 4], "DashedSentence", { s: ['The', 'accountant', 'advised', 'the', 'client', 'was', 'cheating', 'on', 'his', 'taxes.'] }, "Question", { q: " Is there an accountant??", hasCorrect: 0 }],
    [["bias-comp-comp", 5], "DashedSentence", { s: ['The', 'author', 'boasted', 'the', 'novel', 'was', 'likely', 'to', 'be', 'a', 'best-seller.'] }, "Question", { q: " Did the author do something??", hasCorrect: 0 }],
    [["bias-noun-comp", 5], "DashedSentence", { s: ['The', 'author', 'wrote', 'the', 'novel', 'was', 'likely', 'to', 'be', 'a', 'best-seller.'] }, "Question", { q: " Did the author do something??", hasCorrect: 0 }],
    [["bias-comp-comp", 6], "DashedSentence", { s: ['The', 'defendant', 'wished', 'the', 'verdict', 'would', 'be', 'decided', 'soon.'] }, "Question", { q: " Is the sentence about a prosecutor??", hasCorrect: 1 }],
    [["bias-noun-comp", 6], "DashedSentence", { s: ['The', 'defendant', 'accepted', 'the', 'verdict', 'would', 'be', 'decided', 'soon.'] }, "Question", { q: " Is the sentence about a prosecutor??", hasCorrect: 1 }],
    [["bias-comp-comp", 7], "DashedSentence", { s: ['The', 'gardener', 'decided', 'the', 'lawn', 'was', 'in', 'good', 'shape.'] }, "Question", { q: " Is the lawn in bad shape according to the gardener??", hasCorrect: 1 }],
    [["bias-noun-comp", 7], "DashedSentence", { s: ['The', 'gardener', 'maintained', 'the', 'lawn', 'was', 'in', 'good', 'shape.'] }, "Question", { q: " Is the lawn in bad shape according to the gardener??", hasCorrect: 1 }],
    [["bias-comp-comp", 8], "DashedSentence", { s: ['The', 'student', 'hoped', 'the', 'solution', 'was', 'in', 'the', 'back', 'of', 'the', 'book.'] }, "Question", { q: " Is the sentence about a farmer??", hasCorrect: 1 }],
    [["bias-noun-comp", 8], "DashedSentence", { s: ['The', 'student', 'forgot', 'the', 'solution', 'was', 'in', 'the', 'back', 'of', 'the', 'book.'] }, "Question", { q: " Is the sentence about a farmer??", hasCorrect: 1 }],
    [["bias-comp-comp", 9], "DashedSentence", { s: ['The', 'student', 'realized', 'the', 'language', 'was', 'spoken', 'only', 'in', 'one', 'province.'] }, "Question", { q: " Is the language spoken in all provinces??", hasCorrect: 1 }],
    [["bias-noun-comp", 9], "DashedSentence", { s: ['The', 'student', 'learned', 'the', 'language', 'was', 'spoken', 'only', 'in', 'one', 'province.'] }, "Question", { q: " Is the language spoken in all provinces??", hasCorrect: 1 }],
    [["bias-comp-comp", 10], "DashedSentence", { s: ['The', 'teacher', 'implied', 'the', 'answer', 'was', 'very', 'complicated.'] }, "Question", { q: " Is the answer simple??", hasCorrect: 1 }],
    [["bias-noun-comp", 10], "DashedSentence", { s: ['The', 'teacher', 'recalled', 'the', 'answer', 'was', 'very', 'complicated.'] }, "Question", { q: " Is the answer simple??", hasCorrect: 1 }],

];
