module.exports = {

    posts: [
        {
            id: "saasdd",
            tittle: "teste do mural",
            description: "Descrição teste"
        },
    ],

    getAll(){
        return this.posts;
    },

    newPost(tittle, description){

        this.posts.push({id: generateID(), tittle, description});

    }

}

function generateID() {
    return Math.random().toString().substr(2, 9);
}