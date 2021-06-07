const mainOrderList = document.getElementById('main-ordered-list');
const links = [{
    label: "Week 1 - Notes and exercises",
    url: "week1/"
}, {
    label: "Week 2 - Notes and exercises",
    url: "week2/"
}, {
    label: "Week 3 - Notes and exercises",
    url: "week3/"
}, {
    label: "Week 4 - Notes and exercises",
    url: "week4/"
}, {
    label: "Week 5 - Notes and exercises",
    url: "week5/"
}, {
    label: "Week 6 - Todo App - Version 1",
    url: "todoV1/"
}, {
    label: "Week 6 - Todo App - Version 2",
    url: "todoV2/"
}, {
    label: "Week 7 - Notes and exercises",
    url: "week7/"
}];

links.forEach(link => {
    let li = document.createElement('li')
    let a = document.createElement('a');
    let linkLabel = document.createTextNode(link.label);
    a.setAttribute('href', link.url);
    a.appendChild(linkLabel);
    li.appendChild(a);
    mainOrderList.append(li);
});