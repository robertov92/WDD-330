export default class Comments {
    constructor() {
        const type = 'comment';
        const commentsArray = [];
    }

    showCommentsList() {
        return 'This is a list of comments';
    }

    saveComment(hike) {
        const commentValue = document.querySelector('.commentInput').value;
        console.log(commentValue + " " + hike.name)
    }

    // // create input
    // const addComment = document.createElement('input');
    // addComment.setAttribute('type', 'text');
    // addComment.classList.add('border-2', 'border-black', 'border-solid', 'commentInput')
    // parentElement.appendChild(addComment);

    // // create submit btn
    // const submitCommentBtn = document.createElement('button');
    // submitCommentBtn.addEventListener('click', this.comments.saveComment(hike))
    // submitCommentBtn.classList.add('m-5', 'bg-blue-500', 'text-white', 'font-bold', 'px-4', 'py-2', 'rounded');
    // submitCommentBtn.innerText = 'Submit Comment';
    // parentElement.appendChild(submitCommentBtn);


}