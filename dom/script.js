const btn = document.querySelector(".number");
const item = document.createElement("li")
let no = 1;
for(let i=0;i<10;i++){
    item.textContent = i+no;
    btn.append(item);
    console.log(i)
}

