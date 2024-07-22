// tests/script.test.js

const { JSDOM } = require('jsdom');
const { addComment, initializeCommentApp } = require('../script');

describe('Comments App', () => {
    let document;

    beforeEach(() => {
        const dom = new JSDOM(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Comments App</title>
            </head>
            <body>
                <form id="commentForm">
                    <input type="text" id="commentInput" placeholder="Enter your comment" required>
                    <button type="submit">Add Comment</button>
                </form>
                <ul id="commentList"></ul>
            </body>
            </html>
        `);
        document = dom.window.document;

        // Initialize the comment app
        initializeCommentApp(document);
    });

    test('should add a comment to the list', () => {
        const commentInput = document.getElementById('commentInput');
        commentInput.value = 'This is a test comment';
        const commentList = document.getElementById('commentList');
        
        addComment(document, commentInput, commentList);
        
        const listItem = commentList.querySelector('li');
        expect(listItem).not.toBeNull();
        expect(listItem.textContent).toBe('This is a test comment');
    });

    test('should clear the input after adding a comment', () => {
        const commentInput = document.getElementById('commentInput');
        commentInput.value = 'Another test comment';

        const commentList = document.getElementById('commentList');
        addComment(document, commentInput, commentList);

        expect(commentInput.value).toBe('');
    });
});
