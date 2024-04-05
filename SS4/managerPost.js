export let listPost=[];
export let maxPost=5;
export class post{
    constructor(tittle,content,author){
        this.tittle=tittle;
        this.content=content;
        this.author;
    }
}
export function createPost(post){
    if(listPost.length===maxPost){
        console.log("Bài viết đầy");
        return;
    }
    listPost.push(post)
}
export function display(){for(let btn of listPost){
    console.log(btn)
}
}
export function look(){
    let look=prompt("Nhập nội dung cần tìm kiếm");
    listPost.forEach(element => {
    if(element.tittle.includes(look)||element.author.includes(look)||element.content.includes(look)){
        console.log(element);
    }
});
}
