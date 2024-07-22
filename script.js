
function addComment(document, commentInput, commentList) {
    const commentText = commentInput.value.trim();
    if (commentText) {
        const listItem = document.createElement('li');
        listItem.textContent = commentText;
        commentList.appendChild(listItem);
        commentInput.value = '';
    }
}

function initializeCommentApp(document) {
    const commentForm = document.getElementById('commentForm');
    if (commentForm) {
        commentForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const commentInput = document.getElementById('commentInput');
            const commentList = document.getElementById('commentList');
            
            addComment(document, commentInput, commentList);
        });
    }
}

if (typeof window !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => initializeCommentApp(document));
}

module.exports = { addComment, initializeCommentApp };
