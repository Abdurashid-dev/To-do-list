let btn = document.querySelector('.addBtn');

btn.addEventListener('click', foo);

function foo(e){
    e.preventDefault()
    newItem = document.getElementById('input').value;
    // console.log(newItem);

    let block = document.createElement('div');
    block.className = 'itemLine';
    let text = document.createElement('h3');
    text.textContent = newItem;
    let deleteBtn = document.createElement('div');
    deleteBtn.id = 'delete';
    deleteBtn.className = 'delete';
    deleteBtn.textContent = 'X'
    // console.log(block);
    block.appendChild(text);
    block.appendChild(deleteBtn);

    let parent = document.querySelector('.listCollaction');
    parent.appendChild(block);
}
let item = document.querySelector('.listCollaction');
item.addEventListener('click',removeItem);

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            let targeted = e.target.parentElement;
            item.removeChild(targeted);
        }
    }
}