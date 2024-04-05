let url="https://jsonplaceholder.typicode.com/todos"
// _page=7&_limit=20
let getdata = async (url)=>{
    let a= await fetch(`${url}`);
    let b= await a.json();
    let c=await fetch("https://jsonplaceholder.typicode.com/todos")
    let d=await c.json();
    console.log(d)
    console.log(d.length);
    pagination(d.length,6);
    display(b);
}
getdata(`${url}?_page=1&_limit=6`)

function pagination(tot,lim){
    let total=tot;
    let limit=lim;
    let noButton=Math.ceil(total/limit);
    document.getElementById("page").innerHTML="";
    for(let i=1;i<=noButton;i++){
        let b=document.createElement("button");
        b.textContent=`${i}`;
        b.addEventListener("click",function(){
            getdata(`${url}?_page=${i}&_limit=${limit}`)
        });
        document.getElementById("page").append(b);
    }
}

function display(b){
    document.getElementById("display1").innerHTML=""
    b.forEach((v)=>{
        let a=document.createElement("h2");
        a.textContent=v.title;
        let b=document.createElement("div");
        b.append(a)
        document.getElementById("display1").append(b)
    });
}