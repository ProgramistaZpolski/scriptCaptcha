"use strict";
let scriptChapta = {};

scriptChapta.possibleQuests = [
    {
        "quest": "Make an object that will contain a name property with the value of 'Mark', and the age property with the value of 24.",
        "solution": {
            "age": "24",
            "name": "Mark"
        }
    },
    {
        "quest": "Make a function that will return 'Hello World', and then run that function",
        "solution": "Hello World"
    }
];

scriptChapta.loadChapta = function (domId) {
    let questNum = Math.floor((Math.random() * this.possibleQuests.length));
    document.querySelector(domId).innerHTML += `<style>${domId} { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    width: 40vw; background-color: #3b4252; color: white; padding: 10px 10px 10px 10px; } ${domId} textarea { width: 90%; height: 150px; font-size: 20px; } </style>
    <h2>${this.possibleQuests[questNum].quest}</h2>
    <textarea placeholder="Your code here..." id="codeArea"></textarea>
    <button onclick='scriptChapta.verChapta(document.querySelector("#codeArea"), ${questNum}, this)'>Submit</button>
    <h5>Powered by ScriptChapta</h5>`;
}

scriptChapta.verChapta = function (content, questId, textChange) {
    if (questId == 0) {
        if (JSON.parse(content.value).age == scriptChapta.possibleQuests[0].solution.age && JSON.parse(content.value).name == scriptChapta.possibleQuests[0].solution.name) {
            textChange.textContent = "You are not a robot!";
        } else {
            textChange.textContent = "You are a robot!";
        }
    } else if (questId == 1) {
        if (eval(content.value) == this.possibleQuests[1].solution) {
            textChange.textContent = "You are not a robot!";
        } else {
            textChange.textContent = "You are a robot!";
        }
    }
}
