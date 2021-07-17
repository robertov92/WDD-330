class CommentModel {
    constructor(type) {
        this.type = type;
        this.commentsArray = this.readFromLS(type) || [];
    }

    getAllComments() {
        return this.commentsArray;
    }

    getCommentByName(name) {
        return this.commentsArray.filter(comment => comment.name === name);
    }

    createComment(name, comment) {
        const newComment = {
            name: name,
            date: new Date(),
            comment: comment
        };
        this.commentsArray.push(newComment);
        this.writeToLS(this.type, this.commentsArray);
    }
    writeToLS(key, data) {
        // we can use JSON.stringify to convert our object to a string that can be stored in localStorage.
        window.localStorage.setItem(key, JSON.stringify(data));
    }
    readFromLS(key) {
        // the string we retrieve from localStorage needs to be converted back to an object with JSON.parse
        return JSON.parse(window.localStorage.getItem(key));
    }

}

class CommentView {
    constructor() {
        this.commerntUI = document.createElement("div");
        this.commerntUI.innerHTML = `<label>Add a comment: 
        <input type="text" id="commentEntry" class="bg-gray-200 m-3 px-4 py-2 rounded" /></label>
        <button id="commentSubmit" class="bg-blue-500 text-white font-bold px-4 py-2 rounded">Comment</button>
        `;
    }
    renderCommentList(element, comments) {
        element.innerHTML = '';
        let title = document.createElement('h2');
        title.innerHTML = `Comments`;
        element.appendChild(title)
        if (comments.length > 0) {
            comments.forEach(el => {
                let item = document.createElement('li');
                item.innerHTML = `${el.name}: ${el.comment}`;
                element.appendChild(item);
            });

        } else {
            element.innerHTML = 'No comments to show yet! Click on a hike and then add a comment!'
        }
    }
}

export default class CommentController {
    constructor(elementId) {
        this.elementId = elementId;
        this.cModel = new CommentModel();
        this.cView = new CommentView();
    }
    showCommentList() {
        const parent = document.getElementById(this.elementId);
        let comList = this.cModel.getAllComments();
        this.cView.renderCommentList(parent, comList)
    }
    showComsByName(name) {
        const parent = document.getElementById(this.elementId);
        let comList = this.cModel.getCommentByName(name);
        this.cView.renderCommentList(parent, comList)
        parent.appendChild(this.cView.commerntUI);
        this.addCommentEventListener(name)
    }
    addCommentEventListener(postName) {
        // use element.ontouchend to avoid more than one listener getting attached at a time to the button.
        document.getElementById('commentSubmit').onclick = () => {
            this.cModel.createComment(
                postName,
                document.getElementById('commentEntry').value
            );
            document.getElementById('commentEntry').value = '';
            this.showComsByName(postName);
        };
    }


}