function loadStory() {
    var storyName = document.getElementById('name_input').value;
    var story = localStorage.getItem(storyName);
    document.getElementById('story_editor').value = story;
}

function saveStory() {
    var storyName = document.getElementById('name_input').value;
    var story = document.getElementById('story_editor').value;
    localStorage.setItem(storyName, story)
}

function displayStory() {
    var title = document.getElementById('name_input').value;
    var storyFromStorage = localStorage.getItem(title);
    if (storyFromStorage != null) {
        document.getElementById('story_display').innerHTML = `<h3>${title}</h3><p>${storyFromStorage}</p>`;
    } else {
        var storyFromTextarea = document.getElementById('story_editor').value;
        document.getElementById('story_display').innerHTML = `<h3>${title}</h3><p>${storyFromTextarea}</p>`;
    }

}