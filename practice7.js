const li=[1,2,3,4,5,6,7,8];

li.forEach((item)=>{
    console.log(item);
})
const newNums=li.filter((item)=> item>4);
newNums.forEach((item)=>{
    console.log(item);
})

let book=[
    {"name":"Harry potter", "Genre":"Fantasy","year":"1996"},
    {"name":"Lord of The Ring", "Genre":"Fantasy","year":"1990"},
    {"name":"Mission Impossible", "Genre":"Action","year":"1994"},
    {"name":"Maze Runner", "Genre":"Scifi","year":"2000"},
    {"name":"Twilite Saga", "Genre":"Romance","year":"2004"},
    {"name":"The Vampire Diaries", "Genre":"Romance","year":"2008"},
    {"name":"Ace Ventura", "Genre":"Comedy","year":"1999"},
];

let newBooks=book.filter((bk)=> bk.Genre==="Fantasy").map((bk) => bk.name);
console.log(newBooks);

