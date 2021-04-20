const mainOrderList = document.getElementById('main-ordered-list');
const links = [{
    label: "Week 1 - Notes",
    url: "week1/index.html"
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