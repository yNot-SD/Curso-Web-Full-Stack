
document.addEventListener('DOMContentLoaded', () => {
    updatePosts();
})

function updatePosts() {

    fetch("http://localhost:3000").then(res => {
        return res.json()
    }).then(json => {
        let postElements = '';

        let posts = JSON.parse(json);
        posts.forEach((posts) => {
            let postElement = `
            <div id=${post.id} class="card mb-4">
                <div class="card-header">
                    <h5 class="card-title">${post.title}</h5>
                </div>
                <div class="card-body">
                    <div class="card-text">${post.descripiton}</div>
                </div>
            </div>`

            postElements += postElement;
        })

        document.getElementById("posts").innerHTML = postElements;
    })
}

function newPost() {
    let title = document.getElementById("title").value;
    let descripiton = document.getElementById("desc").value;

    console.log(title, descripiton)
}