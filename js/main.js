const notesAndExercises = [{
    label: "W1: Doing Stuff with Web Things & Master Mobile UX",
    url: "week1/"
}, {
    label: "W2: Programming Basics, Arrays, Logic, Loops, and Functions",
    url: "week2/"
}, {
    label: "W3: Objects, the Document Object Modell, and Events",
    url: "week3/"
}, {
    label: "W4: Forms, Object Oriented Programming, and Modern JavaScript",
    url: "week4/"
}, {
    label: "W5: Testing and Debugging",
    url: "week5/"
}, {
    label: "W7: Further Functions and AJAX",
    url: "week7/"
}, {
    label: "W8: Animations, Transform, and Transitions",
    url: "week8/"
}, {
    label: "W9: The Window Object - Animation Example",
    url: "week9/"
}, {
    label: "W9: Web Sockets",
    url: "week9/websocket.html"
}, {
    label: "W10: Validating Forms & Using Fetch",
    url: "week10/"
}, ];

const teamActivities = [{
    label: "W2: Calculators ",
    url: "week2/teamActivity"
}, {
    label: "W3: Array Cardio",
    url: "week3/teamActivity"
}, {
    label: "W4: Tic-Tac-Toe",
    url: "week4/teamActivity"
}, {
    label: "W5: Great Hikes 1 - Showing the Hikes",
    url: "week5/teamActivity"
}, {
    label: "W7: Great Hikes 2 - Comments Functionality",
    url: "week7/teamActivity"
}, {
    label: "W8: PokeAPI",
    url: "week8/teamActivity.html"
}, {
    label: "W9: DrumKit",
    url: "week9/teamActivity"
}, {
    label: "W10: Quake List",
    url: "week10/teamActivity"
}, {
    label: "W11: JWT",
    url: "week11/client/week11.html"
}];

const challenges = [{
    label: "W6: Todo App - Version 1",
    url: "todoV1/"
}, {
    label: "W6: Todo App - Version 2",
    url: "todoV2/"
}, {
    label: "W13: Final Project - Asteroids",
    url: "asteroids"
}];

const notesList = document.getElementById('notesAndExercises');
notesAndExercises.forEach(link => {
    let li = document.createElement('li')
    let a = document.createElement('a');
    let linkLabel = document.createTextNode(link.label);
    a.setAttribute('href', link.url);
    a.appendChild(linkLabel);
    li.appendChild(a);
    notesList.append(li);
});
const taList = document.getElementById('teamActivities');
teamActivities.forEach(link => {
    let li = document.createElement('li')
    let a = document.createElement('a');
    let linkLabel = document.createTextNode(link.label);
    a.setAttribute('href', link.url);
    a.appendChild(linkLabel);
    li.appendChild(a);
    taList.append(li);
});
const challengesList = document.getElementById('challenges');
challenges.forEach(link => {
    let li = document.createElement('li')
    let a = document.createElement('a');
    let linkLabel = document.createTextNode(link.label);
    a.setAttribute('href', link.url);
    a.appendChild(linkLabel);
    li.appendChild(a);
    challengesList.append(li);
});