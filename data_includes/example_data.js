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
    [["DO-U-P", 1], "DashedSentence", { s: ['The talented photographer', 'accepted', 'that the money', 'could not', 'be spent yet.'] }, "Question", { q: " The talented photographer accepted the money.", hasCorrect: 0 }],
    [["DO-U-I", 1], "DashedSentence", { s: ['The talented photographer', 'accepted', 'that the fire', 'could not', 'have been prevented.'] }, "Question", { q: " The fire could not have been prevented.", hasCorrect: 1 }],
    [["DO-A-P", 1], "DashedSentence", { s: ['The talented photographer', 'accepted', 'the money', 'could not', 'be spent yet.'] }, "Question", { q: " The money could not be spent yet.", hasCorrect: 1 }],
    [["DO-A-I", 1], "DashedSentence", { s: ['The talented photographer', 'accepted', 'the fire', 'could not', 'have been prevented.'] }, "Question", { q: " The talented photographer accepted something.", hasCorrect: 1 }],
    [["DO-U-P", 2], "DashedSentence", { s: ['The newspaper editor', 'advocated', 'that the truth', 'needed to', 'be made public.'] }, "Question", { q: " The truth needed to be made public.", hasCorrect: 1 }],
    [["DO-U-I", 2], "DashedSentence", { s: ['The newspaper editor', 'advocated', 'that the town', 'needed to', 'be cleaned up.'] }, "Question", { q: " The town needed to be cleaned up.", hasCorrect: 1 }],
    [["DO-A-P", 2], "DashedSentence", { s: ['The newspaper editor', 'advocated', 'the truth', 'needed to', 'be made public.'] }, "Question", { q: " The newspaper editor needed to be made public.", hasCorrect: 0 }],
    [["DO-A-I", 2], "DashedSentence", { s: ['The newspaper editor', 'advocated', 'the town', 'needed to', 'be cleaned up.'] }, "Question", { q: " The newspaper editor advocated something.", hasCorrect: 1 }],
    [["DO-U-P", 3], "DashedSentence", { s: ['The concerned priest', 'asserted', 'that the belief', 'would be', 'hard to justify.'] }, "Question", { q: " The concerned priest asserted the question.", hasCorrect: 0 }],
    [["DO-U-I", 3], "DashedSentence", { s: ['The concerned priest', 'asserted', 'that the morning', 'would be', 'a bad time.'] }, "Question", { q: " The concerned priest asserted the morning.", hasCorrect: 0 }],
    [["DO-A-P", 3], "DashedSentence", { s: ['The concerned priest', 'asserted', 'the belief', 'would be', 'hard to justify.'] }, "Question", { q: " The belief would be hard to justify.", hasCorrect: 1 }],
    [["DO-A-I", 3], "DashedSentence", { s: ['The concerned priest', 'asserted', 'the morning', 'would be', 'a bad time.'] }, "Question", { q: " The morning would be a bad time.", hasCorrect: 1 }],
    [["DO-U-P", 4], "DashedSentence", { s: ['The CIA director', 'confirmed', 'that the rumor', 'should have', 'been stopped sooner.'] }, "Question", { q: " The CIA director confirmed something.", hasCorrect: 1 }],
    [["DO-U-I", 4], "DashedSentence", { s: ['The CIA director', 'confirmed', 'that the money', 'should have', 'been managed better.'] }, "Question", { q: " The CIA director confirmed the money.", hasCorrect: 0 }],
    [["DO-A-P", 4], "DashedSentence", { s: ['The CIA director', 'confirmed', 'the rumor', 'should have', 'been stopped sooner.'] }, "Question", { q: " The rumor should have been stopped sooner.", hasCorrect: 1 }],
    [["DO-A-I", 4], "DashedSentence", { s: ['The CIA director', 'confirmed', 'the money', 'should have', 'been managed better.'] }, "Question", { q: " The CIA director confirmed something.", hasCorrect: 1 }],
    [["DO-U-P", 5], "DashedSentence", { s: ['The scuba diver', 'discovered', 'that the wreck', 'was caused', 'by a collision.'] }, "Question", { q: " The scuba diver discovered something.", hasCorrect: 1 }],
    [["DO-U-I", 5], "DashedSentence", { s: ['The scuba diver', 'discovered', 'that the headache', 'was caused', 'by lack of oxygen.'] }, "Question", { q: " The headache was caused by lack of oxygen.", hasCorrect: 1 }],
    [["DO-A-P", 5], "DashedSentence", { s: ['The scuba diver', 'discovered', 'the wreck', 'was caused', 'by a collision.'] }, "Question", { q: " The scuba diver was caused by a collision.", hasCorrect: 0 }],
    [["DO-A-I", 5], "DashedSentence", { s: ['The scuba diver', 'discovered', 'the headache', 'was caused', 'by lack of oxygen.'] }, "Question", { q: " The scuba diver discovered the headache.", hasCorrect: 0 }],
    [["DO-U-P", 6], "DashedSentence", { s: ['The angry father', 'emphasized', 'that the problems', 'were continuing', 'to get worse.'] }, "Question", { q: " The angry father emphasized the money.", hasCorrect: 0 }],
    [["DO-U-I", 6], "DashedSentence", { s: ['The angry father', 'emphasized', 'that the schools', 'were continuing', 'to get worse.'] }, "Question", { q: " The schools were continuing to get worse.", hasCorrect: 1 }],
    [["DO-A-P", 6], "DashedSentence", { s: ['The angry father', 'emphasized', 'the problems', 'were continuing', 'to get worse.'] }, "Question", { q: " The angry father emphasized the money.", hasCorrect: 0 }],
    [["DO-A-I", 6], "DashedSentence", { s: ['The angry father', 'emphasized', 'the schools', 'were continuing', 'to get worse.'] }, "Question", { q: " The angry father emphasized the schools.", hasCorrect: 0 }],
    [["DO-U-P", 7], "DashedSentence", { s: ['The primary suspect', 'established', 'that the alibi', 'had been', 'a total lie.'] }, "Question", { q: " The primary suspect established something.", hasCorrect: 1 }],
    [["DO-U-I", 7], "DashedSentence", { s: ['The primary suspect', 'established', 'that the gun', 'had been', 'stolen from him.'] }, "Question", { q: " The gun had been stolen from him.", hasCorrect: 1 }],
    [["DO-A-P", 7], "DashedSentence", { s: ['The primary suspect', 'established', 'the alibi', 'had been', 'a total lie.'] }, "Question", { q: " The primary suspect had been a total lie.", hasCorrect: 0 }],
    [["DO-A-I", 7], "DashedSentence", { s: ['The primary suspect', 'established', 'the gun', 'had been', 'stolen from him.'] }, "Question", { q: " The gun had been stolen from him.", hasCorrect: 1 }],
    [["DO-U-P", 8], "DashedSentence", { s: ['The gossipy neighbor', 'heard', 'that the story', 'had never', 'actually been true.'] }, "Question", { q: " The gossipy neighbor had never actually been true.", hasCorrect: 0 }],
    [["DO-U-I", 8], "DashedSentence", { s: ['The gossipy neighbor', 'heard', 'that the house', 'had never', 'actually been sold.'] }, "Question", { q: " The house had never actually been sold.", hasCorrect: 1 }],
    [["DO-A-P", 8], "DashedSentence", { s: ['The gossipy neighbor', 'heard', 'the story', 'had never', 'actually been true.'] }, "Question", { q: " The story had never actually been true.", hasCorrect: 1 }],
    [["DO-A-I", 8], "DashedSentence", { s: ['The gossipy neighbor', 'heard', 'the house', 'had never', 'actually been sold.'] }, "Question", { q: " The gossipy neighbor heard something.", hasCorrect: 1 }],
    [["DO-U-P", 9], "DashedSentence", { s: ['The new owners', 'insured', 'that the house', 'would never', 'get flooded again.'] }, "Question", { q: " The new owners would never get flooded again.", hasCorrect: 0 }],
    [["DO-U-I", 9], "DashedSentence", { s: ['The new owners', 'insured', 'that the river', 'would never', 'flood their basement.'] }, "Question", { q: " The new owners would never flood their basement.", hasCorrect: 0 }],
    [["DO-A-P", 9], "DashedSentence", { s: ['The new owners', 'insured', 'the house', 'would never', 'get flooded again.'] }, "Question", { q: " The new owners insured something.", hasCorrect: 1 }],
    [["DO-A-I", 9], "DashedSentence", { s: ['The new owners', 'insured', 'the river', 'would never', 'flood their basement.'] }, "Question", { q: " The new owners would never flood their basement.", hasCorrect: 0 }],
    [["DO-U-P", 10], "DashedSentence", { s: ['The confident engineer', 'maintained', 'that the machinery', 'would be', 'hard to destroy.'] }, "Question", { q: " The machinery would be hard to destroy.", hasCorrect: 1 }],
    [["DO-U-I", 10], "DashedSentence", { s: ['The confident engineer', 'maintained', 'that the debate', 'would be', 'easy to win.'] }, "Question", { q: " The confident engineer maintained the debate.", hasCorrect: 0 }],
    [["DO-A-P", 10], "DashedSentence", { s: ['The confident engineer', 'maintained', 'the machinery', 'would be', 'hard to destroy.'] }, "Question", { q: " The confident engineer maintained the machinery.", hasCorrect: 0 }],
    [["DO-A-I", 10], "DashedSentence", { s: ['The confident engineer', 'maintained', 'the debate', 'would be', 'easy to win.'] }, "Question", { q: " The confident engineer maintained the debate.", hasCorrect: 0 }],
    [["DO-U-P", 11], "DashedSentence", { s: ['The journal editor', 'printed', 'that the article', 'had been', 'slanderous to him.'] }, "Question", { q: " The article had been slanderous to him.", hasCorrect: 1 }],
    [["DO-U-I", 11], "DashedSentence", { s: ['The journal editor', 'printed', 'that the media', 'had been', 'irresponsible and cruel.'] }, "Question", { q: " The media had been irresponsible and cruel.", hasCorrect: 1 }],
    [["DO-A-P", 11], "DashedSentence", { s: ['The journal editor', 'printed', 'the article', 'had been', 'slanderous to him.'] }, "Question", { q: " The journal editor printed something.", hasCorrect: 1 }],
    [["DO-A-I", 11], "DashedSentence", { s: ['The journal editor', 'printed', 'the media', 'had been', 'irresponsible and cruel.'] }, "Question", { q: " The media had been irresponsible and cruel.", hasCorrect: 1 }],
    [["DO-U-P", 12], "DashedSentence", { s: ['The art critic', 'wrote', 'that the interview', 'had been', 'a complete disaster.'] }, "Question", { q: " The art critic had been a complete disaster.", hasCorrect: 0 }],
    [["DO-U-I", 12], "DashedSentence", { s: ['The art critic', 'wrote', 'that the painting', 'had been', 'a clever forgery.'] }, "Question", { q: " The art critic wrote the painting.", hasCorrect: 0 }],
    [["DO-A-P", 12], "DashedSentence", { s: ['The art critic', 'wrote', 'the interview', 'had been', 'a complete disaster.'] }, "Question", { q: " The art critic wrote something.", hasCorrect: 1 }],
    [["DO-A-I", 12], "DashedSentence", { s: ['The art critic', 'wrote', 'the painting', 'had been', 'a clever forgery.'] }, "Question", { q: " The art critic wrote something.", hasCorrect: 1 }],
    [["DO-U-P", 13], "DashedSentence", { s: ['The surgical nurses', 'protested', 'that the policy', 'were not', 'fair to patients.'] }, "Question", { q: " The surgical nurses protested something.", hasCorrect: 1 }],
    [["DO-U-I", 13], "DashedSentence", { s: ['The surgical nurses', 'protested', 'that the patients', 'were not', 'being treated fairly.'] }, "Question", { q: " The surgical nurses were not being treated fairly.", hasCorrect: 0 }],
    [["DO-A-P", 13], "DashedSentence", { s: ['The surgical nurses', 'protested', 'the policy', 'were not', 'fair to patients.'] }, "Question", { q: " The surgical nurses protested the overtime.", hasCorrect: 0 }],
    [["DO-A-I", 13], "DashedSentence", { s: ['The surgical nurses', 'protested', 'the patients', 'were not', 'being treated fairly.'] }, "Question", { q: " The surgical nurses protested the patients.", hasCorrect: 0 }],
    [["DO-U-P", 14], "DashedSentence", { s: ['The frustrated tourists', 'understood', 'that the message', 'would mean', "they couldn't go."] }, "Question", { q: " The frustrated tourists understood something.", hasCorrect: 1 }],
    [["DO-U-I", 14], "DashedSentence", { s: ['The frustrated tourists', 'understood', 'that the snow', 'would mean', 'a late start.'] }, "Question", { q: " The frustrated tourists understood the snow.", hasCorrect: 0 }],
    [["DO-A-P", 14], "DashedSentence", { s: ['The frustrated tourists', 'understood', 'the message', 'would mean', "they couldn't go."] }, "Question", { q: " The frustrated tourists understood the language.", hasCorrect: 0 }],
    [["DO-A-I", 14], "DashedSentence", { s: ['The frustrated tourists', 'understood', 'the snow', 'would mean', 'a late start.'] }, "Question", { q: " The frustrated tourists would mean a late start.", hasCorrect: 0 }],
    [["DO-U-P", 15], "DashedSentence", { s: ['The trained referees', 'warned', 'that the spectators', 'would probably', 'get too rowdy.'] }, "Question", { q: " The trained referees warned something.", hasCorrect: 1 }],
    [["DO-U-I", 15], "DashedSentence", { s: ['The trained referees', 'warned', 'that the game', 'would probably', 'go into overtime.'] }, "Question", { q: " The trained referees warned something.", hasCorrect: 1 }],
    [["DO-A-P", 15], "DashedSentence", { s: ['The trained referees', 'warned', 'the spectators', 'would probably', 'get too rowdy.'] }, "Question", { q: " The spectators would probably get too rowdy.", hasCorrect: 1 }],
    [["DO-A-I", 15], "DashedSentence", { s: ['The trained referees', 'warned', 'the game', 'would probably', 'go into overtime.'] }, "Question", { q: " The trained referees would probably go into overtime.", hasCorrect: 0 }],
    [["DO-U-P", 16], "DashedSentence", { s: ['The lab technician', 'proposed', 'that the idea', 'might be', 'worth another try.'] }, "Question", { q: " The idea might be worth another try.", hasCorrect: 1 }],
    [["DO-U-I", 16], "DashedSentence", { s: ['The lab technician', 'proposed', 'that the water', 'might be', 'contaminated with sewage.'] }, "Question", { q: " The water might be contaminated with sewage.", hasCorrect: 1 }],
    [["DO-A-P", 16], "DashedSentence", { s: ['The lab technician', 'proposed', 'the idea', 'might be', 'worth another try.'] }, "Question", { q: " The lab technician might be worth another try.", hasCorrect: 0 }],
    [["DO-A-I", 16], "DashedSentence", { s: ['The lab technician', 'proposed', 'the water', 'might be', 'contaminated with sewage.'] }, "Question", { q: " The water might be contaminated with sewage.", hasCorrect: 1 }],
    [["EQ-U-P", 17], "DashedSentence", { s: ['The sales clerk', 'acknowledged', 'that the error', 'should have', 'been detected earlier.'] }, "Question", { q: " The error should have been detected earlier.", hasCorrect: 1 }],
    [["EQ-U-I", 17], "DashedSentence", { s: ['The sales clerk', 'acknowledged', 'that the shirt', 'should have', 'been marked down.'] }, "Question", { q: " The shirt should have been marked down.", hasCorrect: 1 }],
    [["EQ-A-P", 17], "DashedSentence", { s: ['The sales clerk', 'acknowledged', 'the error', 'should have', 'been detected earlier.'] }, "Question", { q: " The sales clerk acknowledged something.", hasCorrect: 1 }],
    [["EQ-A-I", 17], "DashedSentence", { s: ['The sales clerk', 'acknowledged', 'the shirt', 'should have', 'been marked down.'] }, "Question", { q: " The sales clerk acknowledged something.", hasCorrect: 1 }],
    [["EQ-U-P", 18], "DashedSentence", { s: ['The proud mother', 'announced', 'that the wedding', 'would be', 'a big event.'] }, "Question", { q: " The wedding would be a big event.", hasCorrect: 1 }],
    [["EQ-U-I", 18], "DashedSentence", { s: ['The proud mother', 'announced', 'that the flowers', 'would be', 'delivered at noon.'] }, "Question", { q: " The proud mother would be delivered at noon.", hasCorrect: 0 }],
    [["EQ-A-P", 18], "DashedSentence", { s: ['The proud mother', 'announced', 'the wedding', 'would be', 'a big event.'] }, "Question", { q: " The proud mother announced something.", hasCorrect: 1 }],
    [["EQ-A-I", 18], "DashedSentence", { s: ['The proud mother', 'announced', 'the flowers', 'would be', 'delivered at noon.'] }, "Question", { q: " The proud mother would be delivered at noon.", hasCorrect: 0 }],
    [["EQ-U-P", 19], "DashedSentence", { s: ['The defense attorney', 'conceded', 'that the point', 'might come', 'up in court.'] }, "Question", { q: " The defense attorney might come up in court.", hasCorrect: 0 }],
    [["EQ-U-I", 19], "DashedSentence", { s: ['The defense attorney', 'conceded', 'that the client', 'might come', 'apart in court.'] }, "Question", { q: " The defense attorney conceded something.", hasCorrect: 1 }],
    [["EQ-A-P", 19], "DashedSentence", { s: ['The defense attorney', 'conceded', 'the point', 'might come', 'up in court.'] }, "Question", { q: " The defense attorney might come up in court.", hasCorrect: 0 }],
    [["EQ-A-I", 19], "DashedSentence", { s: ['The defense attorney', 'conceded', 'the client', 'might come', 'apart in court.'] }, "Question", { q: " The defense attorney conceded the client.", hasCorrect: 0 }],
    [["EQ-U-P", 20], "DashedSentence", { s: ['The teenage girl', 'confided', 'that the secret', 'had been', 'really bothering her.'] }, "Question", { q: " The secret had been really bothering her.", hasCorrect: 1 }],
    [["EQ-U-I", 20], "DashedSentence", { s: ['The teenage girl', 'confided', 'that the stranger', 'had been', 'following her earlier.'] }, "Question", { q: " The stranger had been following her earlier.", hasCorrect: 1 }],
    [["EQ-A-P", 20], "DashedSentence", { s: ['The teenage girl', 'confided', 'the secret', 'had been', 'really bothering her.'] }, "Question", { q: " The teenage girl confided something.", hasCorrect: 1 }],
    [["EQ-A-I", 20], "DashedSentence", { s: ['The teenage girl', 'confided', 'the stranger', 'had been', 'following her earlier.'] }, "Question", { q: " The teenage girl had been following her earlier.", hasCorrect: 0 }],
    [["EQ-U-P", 21], "DashedSentence", { s: ['The new mayor', 'declared', 'that the holiday', 'would be', 'a festive occasion.'] }, "Question", { q: " The holiday would be a festive occasion.", hasCorrect: 1 }],
    [["EQ-U-I", 21], "DashedSentence", { s: ['The new mayor', 'declared', 'that the potholes', 'would be', 'repaired in June.'] }, "Question", { q: " The new mayor declared the potholes.", hasCorrect: 0 }],
    [["EQ-A-P", 21], "DashedSentence", { s: ['The new mayor', 'declared', 'the holiday', 'would be', 'a festive occasion.'] }, "Question", { q: " The holiday would be a festive occasion.", hasCorrect: 1 }],
    [["EQ-A-I", 21], "DashedSentence", { s: ['The new mayor', 'declared', 'the potholes', 'would be', 'repaired in June.'] }, "Question", { q: " The new mayor declared something.", hasCorrect: 1 }],
    [["EQ-U-P", 22], "DashedSentence", { s: ['The crooked politician', 'denied', 'that the accusation', 'would change', 'things at all.'] }, "Question", { q: " The crooked politician denied something.", hasCorrect: 1 }],
    [["EQ-U-I", 22], "DashedSentence", { s: ['The crooked politician', 'denied', 'that the election', 'would change', 'things at all.'] }, "Question", { q: " The crooked politician denied something.", hasCorrect: 1 }],
    [["EQ-A-P", 22], "DashedSentence", { s: ['The crooked politician', 'denied', 'the accusation', 'would change', 'things at all.'] }, "Question", { q: " The crooked politician denied something.", hasCorrect: 1 }],
    [["EQ-A-I", 22], "DashedSentence", { s: ['The crooked politician', 'denied', 'the election', 'would change', 'things at all.'] }, "Question", { q: " The crooked politician denied something.", hasCorrect: 1 }],
    [["EQ-U-P", 23], "DashedSentence", { s: ['The ice skater', 'doubted', 'that the judges', 'would keep', 'her from competing.'] }, "Question", { q: " The crooked politician denied something.", hasCorrect: 1 }],
    [["EQ-U-I", 23], "DashedSentence", { s: ['The ice skater', 'doubted', 'that the storm', 'would keep', 'people from coming.'] }, "Question", { q: " The ice skater would keep people from coming.", hasCorrect: 0 }],
    [["EQ-A-P", 23], "DashedSentence", { s: ['The ice skater', 'doubted', 'the judges', 'would keep', 'her from competing.'] }, "Question", { q: " The ice skater would keep her from competing.", hasCorrect: 0 }],
    [["EQ-A-I", 23], "DashedSentence", { s: ['The ice skater', 'doubted', 'the storm', 'would keep', 'people from coming.'] }, "Question", { q: " The ice skater doubted the storm.", hasCorrect: 0 }],
    [["EQ-U-P", 24], "DashedSentence", { s: ['The careful accountant', 'estimated', 'that the taxes', 'could be', 'kept low enough.'] }, "Question", { q: " The careful accountant could be kept low enough.", hasCorrect: 0 }],
    [["EQ-U-I", 24], "DashedSentence", { s: ['The careful accountant', 'estimated', 'that the governor', 'could be', 'persuaded to pay.'] }, "Question", { q: " The governor could be persuaded to pay.", hasCorrect: 1 }],
    [["EQ-A-P", 24], "DashedSentence", { s: ['The careful accountant', 'estimated', 'the taxes', 'could be', 'kept low enough.'] }, "Question", { q: " The careful accountant estimated something.", hasCorrect: 1 }],
    [["EQ-A-I", 24], "DashedSentence", { s: ['The careful accountant', 'estimated', 'the governor', 'could be', 'persuaded to pay.'] }, "Question", { q: " The governor could be persuaded to pay.", hasCorrect: 1 }],
    [["EQ-U-P", 25], "DashedSentence", { s: ['The anxious mother', 'feared', 'that the tantrums', 'would get', 'worse and worse.'] }, "Question", { q: " The anxious mother feared something.", hasCorrect: 1 }],
    [["EQ-U-I", 25], "DashedSentence", { s: ['The anxious mother', 'feared', 'that the dress', 'would get', 'torn and dirty.'] }, "Question", { q: " The dress would get torn and dirty.", hasCorrect: 1 }],
    [["EQ-A-P", 25], "DashedSentence", { s: ['The anxious mother', 'feared', 'the tantrums', 'would get', 'worse and worse.'] }, "Question", { q: " The anxious mother feared something.", hasCorrect: 1 }],
    [["EQ-A-I", 25], "DashedSentence", { s: ['The anxious mother', 'feared', 'the dress', 'would get', 'torn and dirty.'] }, "Question", { q: " The anxious mother would get torn and dirty.", hasCorrect: 0 }],
    [["EQ-U-P", 26], "DashedSentence", { s: ['The physical therapist', 'felt', 'that the pain', 'would be', 'easy to manage.'] }, "Question", { q: " The physical therapist felt the pain.", hasCorrect: 0 }],
    [["EQ-U-I", 26], "DashedSentence", { s: ['The physical therapist', 'felt', 'that the answer', 'would be', 'lots of exercise.'] }, "Question", { q: " The physical therapist felt the answer.", hasCorrect: 0 }],
    [["EQ-A-P", 26], "DashedSentence", { s: ['The physical therapist', 'felt', 'the pain', 'would be', 'easy to manage.'] }, "Question", { q: " The physical therapist felt the pain.", hasCorrect: 0 }],
    [["EQ-A-I", 26], "DashedSentence", { s: ['The physical therapist', 'felt', 'the answer', 'would be', 'lots of exercise.'] }, "Question", { q: " The physical therapist would be lots of exercise.", hasCorrect: 0 }],
    [["EQ-U-P", 27], "DashedSentence", { s: ['The sales department', 'guaranteed', 'that the product', 'would go', 'on sale soon.'] }, "Question", { q: " The sales department guaranteed something.", hasCorrect: 1 }],
    [["EQ-U-I", 27], "DashedSentence", { s: ['The sales department', 'guaranteed', 'that the noise', 'would go', 'away quite quickly.'] }, "Question", { q: " The sales department guaranteed something.", hasCorrect: 1 }],
    [["EQ-A-P", 27], "DashedSentence", { s: ['The sales department', 'guaranteed', 'the product', 'would go', 'on sale soon.'] }, "Question", { q: " The product would go on sale soon.", hasCorrect: 1 }],
    [["EQ-A-I", 27], "DashedSentence", { s: ['The sales department', 'guaranteed', 'the noise', 'would go', 'away quite quickly.'] }, "Question", { q: " The sales department guaranteed the noise.", hasCorrect: 0 }],
    [["EQ-U-P", 28], "DashedSentence", { s: ['The desk clerk', 'guessed', 'that the name', 'had been', 'written very hastily.'] }, "Question", { q: " The desk clerk guessed the name.", hasCorrect: 0 }],
    [["EQ-U-I", 28], "DashedSentence", { s: ['The desk clerk', 'guessed', 'that the party', 'had been', 'planned months ago.'] }, "Question", { q: " The desk clerk guessed the party.", hasCorrect: 0 }],
    [["EQ-A-P", 28], "DashedSentence", { s: ['The desk clerk', 'guessed', 'the name', 'had been', 'written very hastily.'] }, "Question", { q: " The name had been written very hastily.", hasCorrect: 1 }],
    [["EQ-A-I", 28], "DashedSentence", { s: ['The desk clerk', 'guessed', 'the party', 'had been', 'planned months ago.'] }, "Question", { q: " The desk clerk had been planned months ago.", hasCorrect: 0 }],
    [["EQ-U-P", 29], "DashedSentence", { s: ['The famous novelist', 'knew', 'that the material', 'would make', 'some people unhappy.'] }, "Question", { q: " The famous novelist would make some people unhappy.", hasCorrect: 0 }],
    [["EQ-U-I", 29], "DashedSentence", { s: ['The famous novelist', 'knew', 'that the pause', 'would make', 'her seem uncertain.'] }, "Question", { q: " The pause would make her seem uncertain.", hasCorrect: 1 }],
    [["EQ-A-P", 29], "DashedSentence", { s: ['The famous novelist', 'knew', 'the material', 'would make', 'some people unhappy.'] }, "Question", { q: " The material would make some people unhappy.", hasCorrect: 1 }],
    [["EQ-A-I", 29], "DashedSentence", { s: ['The famous novelist', 'knew', 'the pause', 'would make', 'her seem uncertain.'] }, "Question", { q: " The famous novelist would make her seem uncertain.", hasCorrect: 0 }],
    [["EQ-U-P", 30], "DashedSentence", { s: ['The publicity agent', 'predicted', 'that the problem', 'would make', 'life very difficult.'] }, "Question", { q: " The publicity agent predicted the problem.", hasCorrect: 0 }],
    [["EQ-U-I", 30], "DashedSentence", { s: ['The publicity agent', 'predicted', 'that the clothes', 'would make', 'a big impact.'] }, "Question", { q: " The publicity agent predicted the clothes.", hasCorrect: 0 }],
    [["EQ-A-P", 30], "DashedSentence", { s: ['The publicity agent', 'predicted', 'the problem', 'would make', 'life very difficult.'] }, "Question", { q: " The problem would make life very difficult.", hasCorrect: 1 }],
    [["EQ-A-I", 30], "DashedSentence", { s: ['The publicity agent', 'predicted', 'the clothes', 'would make', 'a big impact.'] }, "Question", { q: " The publicity agent would make a big impact.", hasCorrect: 0 }],
    [["EQ-U-P", 31], "DashedSentence", { s: ['The senior senator', 'regretted', 'that the decision', 'had ever', 'been made public.'] }, "Question", { q: " The senior senator regretted the vote.", hasCorrect: 0 }],
    [["EQ-U-I", 31], "DashedSentence", { s: ['The senior senator', 'regretted', 'that the reporter', 'had ever', 'seen the report.'] }, "Question", { q: " The senior senator regretted the reporter.", hasCorrect: 0 }],
    [["EQ-A-P", 31], "DashedSentence", { s: ['The senior senator', 'regretted', 'the decision', 'had ever', 'been made public.'] }, "Question", { q: " The senior senator had ever been made public.", hasCorrect: 0 }],
    [["EQ-A-I", 31], "DashedSentence", { s: ['The senior senator', 'regretted', 'the reporter', 'had ever', 'seen the report.'] }, "Question", { q: " The senior senator had ever seen the report.", hasCorrect: 0 }],
    [["EQ-U-P", 32], "DashedSentence", { s: ['The skilled negotiator', 'sensed', 'that the conflict', 'would probably', 'not get resolved.'] }, "Question", { q: " The skilled negotiator would probably not get resolved.", hasCorrect: 0 }],
    [["EQ-U-I", 32], "DashedSentence", { s: ['The skilled negotiator', 'sensed', 'that the trip', 'would probably', 'not go well.'] }, "Question", { q: " The skilled negotiator sensed the trip.", hasCorrect: 0 }],
    [["EQ-A-P", 32], "DashedSentence", { s: ['The skilled negotiator', 'sensed', 'the conflict', 'would probably', 'not get resolved.'] }, "Question", { q: " The conflict would probably not get resolved.", hasCorrect: 1 }],
    [["EQ-A-I", 32], "DashedSentence", { s: ['The skilled negotiator', 'sensed', 'the trip', 'would probably', 'not go well.'] }, "Question", { q: " The skilled negotiator sensed something.", hasCorrect: 1 }],
    [["SC-U-P", 33], "DashedSentence", { s: ['The ticket agent', 'admitted', 'that the mistake', 'had been', 'careless and stupid.'] }, "Question", { q: " The ticket agent admitted the child.", hasCorrect: 0 }],
    [["SC-U-I", 33], "DashedSentence", { s: ['The ticket agent', 'admitted', 'that the airplane', 'had been', 'late taking off.'] }, "Question", { q: " The ticket agent admitted something.", hasCorrect: 1 }],
    [["SC-A-P", 33], "DashedSentence", { s: ['The ticket agent', 'admitted', 'the mistake', 'had been', 'careless and stupid.'] }, "Question", { q: " The ticket agent had been careless and stupid.", hasCorrect: 0 }],
    [["SC-A-I", 33], "DashedSentence", { s: ['The ticket agent', 'admitted', 'the airplane', 'had been', 'late taking off.'] }, "Question", { q: " The ticket agent admitted something.", hasCorrect: 1 }],
    [["SC-U-P", 34], "DashedSentence", { s: ['The divorce lawyer', 'argued', 'that the issue', 'was irrelevant', 'to the case.'] }, "Question", { q: " The divorce lawyer argued something.", hasCorrect: 1 }],
    [["SC-U-I", 34], "DashedSentence", { s: ['The divorce lawyer', 'argued', 'that the witness', 'was irrelevant', 'to the case.'] }, "Question", { q: " The divorce lawyer argued something.", hasCorrect: 1 }],
    [["SC-A-P", 34], "DashedSentence", { s: ['The divorce lawyer', 'argued', 'the issue', 'was irrelevant', 'to the case.'] }, "Question", { q: " The divorce lawyer argued the judge.", hasCorrect: 0 }],
    [["SC-A-I", 34], "DashedSentence", { s: ['The divorce lawyer', 'argued', 'the witness', 'was irrelevant', 'to the case.'] }, "Question", { q: " The witness was irrelevant to the case.", hasCorrect: 1 }],
    [["SC-U-P", 35], "DashedSentence", { s: ['The office manager', 'indicated', 'that the problem', 'would affect', 'the whole office.'] }, "Question", { q: " The office manager indicated the problem.", hasCorrect: 0 }],
    [["SC-U-I", 35], "DashedSentence", { s: ['The office manager', 'indicated', 'that the remark', 'would affect', 'the whole office.'] }, "Question", { q: " The remark would affect the whole office.", hasCorrect: 1 }],
    [["SC-A-P", 35], "DashedSentence", { s: ['The office manager', 'indicated', 'the problem', 'would affect', 'the whole office.'] }, "Question", { q: " The office manager indicated the problem.", hasCorrect: 0 }],
    [["SC-A-I", 35], "DashedSentence", { s: ['The office manager', 'indicated', 'the remark', 'would affect', 'the whole office.'] }, "Question", { q: " The office manager would affect the whole office.", hasCorrect: 0 }],
    [["SC-U-P", 36], "DashedSentence", { s: ['The job applicant', 'believed', 'that the interviewer', 'had been', 'dishonest with her.'] }, "Question", { q: " The job applicant believed something.", hasCorrect: 1 }],
    [["SC-U-I", 36], "DashedSentence", { s: ['The job applicant', 'believed', 'that the appointment', 'had been', 'set up already.'] }, "Question", { q: " The job applicant believed something.", hasCorrect: 1 }],
    [["SC-A-P", 36], "DashedSentence", { s: ['The job applicant', 'believed', 'the interviewer', 'had been', 'dishonest with her.'] }, "Question", { q: " The job applicant had been dishonest with her.", hasCorrect: 0 }],
    [["SC-A-I", 36], "DashedSentence", { s: ['The job applicant', 'believed', 'the appointment', 'had been', 'set up already.'] }, "Question", { q: " The job applicant believed the appointment.", hasCorrect: 0 }],
    [["SC-U-P", 37], "DashedSentence", { s: ['The weary traveler', 'claimed', 'that the luggage', 'had been', 'stolen in Rome.'] }, "Question", { q: " The weary traveler claimed the luggage.", hasCorrect: 0 }],
    [["SC-U-I", 37], "DashedSentence", { s: ['The weary traveler', 'claimed', 'that the attendant', 'had been', 'rude and surly.'] }, "Question", { q: " The weary traveler had been rude and surly.", hasCorrect: 0 }],
    [["SC-A-P", 37], "DashedSentence", { s: ['The weary traveler', 'claimed', 'the luggage', 'had been', 'stolen in Rome.'] }, "Question", { q: " The weary traveler claimed something.", hasCorrect: 1 }],
    [["SC-A-I", 37], "DashedSentence", { s: ['The weary traveler', 'claimed', 'the attendant', 'had been', 'rude and surly.'] }, "Question", { q: " The weary traveler claimed something.", hasCorrect: 1 }],
    [["SC-U-P", 38], "DashedSentence", { s: ['The account executive', 'concluded', 'that the speech', 'had not', 'gone very well.'] }, "Question", { q: " The account executive concluded something.", hasCorrect: 1 }],
    [["SC-U-I", 38], "DashedSentence", { s: ['The account executive', 'concluded', 'that the bank', 'had not', 'kept careful records.'] }, "Question", { q: " The account executive concluded something.", hasCorrect: 1 }],
    [["SC-A-P", 38], "DashedSentence", { s: ['The account executive', 'concluded', 'the speech', 'had not', 'gone very well.'] }, "Question", { q: " The account executive had not gone very well.", hasCorrect: 0 }],
    [["SC-A-I", 38], "DashedSentence", { s: ['The account executive', 'concluded', 'the bank', 'had not', 'kept careful records.'] }, "Question", { q: " The account executive concluded the bank.", hasCorrect: 0 }],
    [["SC-U-P", 39], "DashedSentence", { s: ['The bank guard', 'confessed', 'that the robbery', 'had been', 'his own idea.'] }, "Question", { q: " The bank guard confessed the affair.", hasCorrect: 0 }],
    [["SC-U-I", 39], "DashedSentence", { s: ['The bank guard', 'confessed', 'that the vault', 'had been', 'left open intentionally.'] }, "Question", { q: " The bank guard confessed something.", hasCorrect: 1 }],
    [["SC-A-P", 39], "DashedSentence", { s: ['The bank guard', 'confessed', 'the robbery', 'had been', 'his own idea.'] }, "Question", { q: " The bank guard confessed the affair.", hasCorrect: 0 }],
    [["SC-A-I", 39], "DashedSentence", { s: ['The bank guard', 'confessed', 'the vault', 'had been', 'left open intentionally.'] }, "Question", { q: " The vault had been left open intentionally.", hasCorrect: 1 }],
    [["SC-U-P", 40], "DashedSentence", { s: ['The cab driver', 'assumed', 'that the blame', 'belonged to', 'the other driver.'] }, "Question", { q: " The cab driver belonged to the other driver.", hasCorrect: 0 }],
    [["SC-U-I", 40], "DashedSentence", { s: ['The cab driver', 'assumed', 'that the car', 'belonged to', 'the cab company.'] }, "Question", { q: " The car belonged to the cab company.", hasCorrect: 1 }],
    [["SC-A-P", 40], "DashedSentence", { s: ['The cab driver', 'assumed', 'the blame', 'belonged to', 'the other driver.'] }, "Question", { q: " The cab driver assumed something.", hasCorrect: 1 }],
    [["SC-A-I", 40], "DashedSentence", { s: ['The cab driver', 'assumed', 'the car', 'belonged to', 'the cab company.'] }, "Question", { q: " The cab driver assumed the car.", hasCorrect: 0 }],
    [["SC-U-P", 41], "DashedSentence", { s: ['The shrewd salesman', 'figured', 'that the prices', 'would be', 'going up soon.'] }, "Question", { q: " The shrewd salesman figured something.", hasCorrect: 1 }],
    [["SC-U-I", 41], "DashedSentence", { s: ['The shrewd salesman', 'figured', 'that the customers', 'would be', 'paying in cash.'] }, "Question", { q: " The customers would be paying in cash.", hasCorrect: 1 }],
    [["SC-A-P", 41], "DashedSentence", { s: ['The shrewd salesman', 'figured', 'the prices', 'would be', 'going up soon.'] }, "Question", { q: " The shrewd salesman figured the prices.", hasCorrect: 0 }],
    [["SC-A-I", 41], "DashedSentence", { s: ['The shrewd salesman', 'figured', 'the customers', 'would be', 'paying in cash.'] }, "Question", { q: " The shrewd salesman figured the customers.", hasCorrect: 0 }],
    [["SC-U-P", 42], "DashedSentence", { s: ['The union leader', 'implied', 'that the raise', 'would keep', 'them from striking.'] }, "Question", { q: " The union leader would keep them from striking.", hasCorrect: 0 }],
    [["SC-U-I", 42], "DashedSentence", { s: ['The union leader', 'implied', 'that the weather', 'would keep', 'them from picketing.'] }, "Question", { q: " The weather would keep them from picketing.", hasCorrect: 1 }],
    [["SC-A-P", 42], "DashedSentence", { s: ['The union leader', 'implied', 'the raise', 'would keep', 'them from striking.'] }, "Question", { q: " The union leader would keep them from striking.", hasCorrect: 0 }],
    [["SC-A-I", 42], "DashedSentence", { s: ['The union leader', 'implied', 'the weather', 'would keep', 'them from picketing.'] }, "Question", { q: " The union leader implied something.", hasCorrect: 1 }],
    [["SC-U-P", 43], "DashedSentence", { s: ['The experienced judge', 'decided', 'that the appeal', 'should be', 'started right away.'] }, "Question", { q: " The experienced judge decided the appeal.", hasCorrect: 0 }],
    [["SC-U-I", 43], "DashedSentence", { s: ['The experienced judge', 'decided', 'that the witness', 'should be', 'warned about lying.'] }, "Question", { q: " The witness should be warned about lying.", hasCorrect: 1 }],
    [["SC-A-P", 43], "DashedSentence", { s: ['The experienced judge', 'decided', 'the appeal', 'should be', 'started right away.'] }, "Question", { q: " The appeal should be started right away.", hasCorrect: 1 }],
    [["SC-A-I", 43], "DashedSentence", { s: ['The experienced judge', 'decided', 'the witness', 'should be', 'warned about lying.'] }, "Question", { q: " The experienced judge should be warned about lying.", hasCorrect: 0 }],
    [["SC-U-P", 44], "DashedSentence", { s: ['The careful scientist', 'proved', 'that the theory', 'had not', 'been sufficiently tested.'] }, "Question", { q: " The careful scientist had not been sufficiently tested.", hasCorrect: 0 }],
    [["SC-U-I", 44], "DashedSentence", { s: ['The careful scientist', 'proved', 'that the journal', 'had not', 'been rigorous enough.'] }, "Question", { q: " The careful scientist proved something.", hasCorrect: 1 }],
    [["SC-A-P", 44], "DashedSentence", { s: ['The careful scientist', 'proved', 'the theory', 'had not', 'been sufficiently tested.'] }, "Question", { q: " The theory had not been sufficiently tested.", hasCorrect: 1 }],
    [["SC-A-I", 44], "DashedSentence", { s: ['The careful scientist', 'proved', 'the journal', 'had not', 'been rigorous enough.'] }, "Question", { q: " The careful scientist proved the journal.", hasCorrect: 0 }],
    [["SC-U-P", 45], "DashedSentence", { s: ['The novice plumber', 'realized', 'that the mistake', 'would cost', 'someone some money.'] }, "Question", { q: " The novice plumber would cost someone some money.", hasCorrect: 0 }],
    [["SC-U-I", 45], "DashedSentence", { s: ['The novice plumber', 'realized', 'that the tool', 'would cost', 'too much for him.'] }, "Question", { q: " The novice plumber realized something.", hasCorrect: 1 }],
    [["SC-A-P", 45], "DashedSentence", { s: ['The novice plumber', 'realized', 'the mistake', 'would cost', 'someone some money.'] }, "Question", { q: " The novice plumber realized something.", hasCorrect: 1 }],
    [["SC-A-I", 45], "DashedSentence", { s: ['The novice plumber', 'realized', 'the tool', 'would cost', 'too much for him.'] }, "Question", { q: " The novice plumber would cost too much for him.", hasCorrect: 0 }],
    [["SC-U-P", 46], "DashedSentence", { s: ['The film director', 'suggested', 'that the scene', 'should be', 'filmed at night.'] }, "Question", { q: " The scene should be filmed at night.", hasCorrect: 1 }],
    [["SC-U-I", 46], "DashedSentence", { s: ['The film director', 'suggested', 'that the dirt', 'should be', 'scattered all around.'] }, "Question", { q: " The film director suggested the dirt.", hasCorrect: 0 }],
    [["SC-A-P", 46], "DashedSentence", { s: ['The film director', 'suggested', 'the scene', 'should be', 'filmed at night.'] }, "Question", { q: " The film director suggested something.", hasCorrect: 1 }],
    [["SC-A-I", 46], "DashedSentence", { s: ['The film director', 'suggested', 'the dirt', 'should be', 'scattered all around.'] }, "Question", { q: " The film director suggested something.", hasCorrect: 1 }],
    [["SC-U-P", 47], "DashedSentence", { s: ['The factory owner', 'suspected', 'that the workers', 'would probably', 'go on strike.'] }, "Question", { q: " The factory owner suspected something.", hasCorrect: 1 }],
    [["SC-U-I", 47], "DashedSentence", { s: ['The factory owner', 'suspected', 'that the cash', 'would probably', 'not last long.'] }, "Question", { q: " The factory owner would probably not last long.", hasCorrect: 0 }],
    [["SC-A-P", 47], "DashedSentence", { s: ['The factory owner', 'suspected', 'the workers', 'would probably', 'go on strike.'] }, "Question", { q: " The factory owner suspected the supervisor.", hasCorrect: 0 }],
    [["SC-A-I", 47], "DashedSentence", { s: ['The factory owner', 'suspected', 'the cash', 'would probably', 'not last long.'] }, "Question", { q: " The factory owner suspected the cash.", hasCorrect: 0 }],
    [["SC-U-P", 48], "DashedSentence", { s: ['The bus driver', 'worried', 'that the passengers', 'were starting', 'to get annoyed.'] }, "Question", { q: " The bus driver were starting to get annoyed.", hasCorrect: 0 }],
    [["SC-U-I", 48], "DashedSentence", { s: ['The bus driver', 'worried', 'that the tires', 'were starting', 'to go flat.'] }, "Question", { q: " The bus driver worried the tires.", hasCorrect: 0 }],
    [["SC-A-P", 48], "DashedSentence", { s: ['The bus driver', 'worried', 'the passengers', 'were starting', 'to get annoyed.'] }, "Question", { q: " The bus driver worried something.", hasCorrect: 1 }]
];
