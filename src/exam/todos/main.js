const todos = document.querySelector('.todos');
todos.innerHTML="로딩중....."
const data = [
    {id:1,content:'HTML',completed:true},
    {id:2,content:'CSS',completed:true},
    {id:3,content:'Javascript',completed:false},
];
function render(data){
    todos.innerHTML=null;
    for (let i in data){
            const liNode = document.createElement('li');
            liNode.innerHTML=`
                <label>
                    <input type="checkbox" ${data[i].completed ? 'checked':null}>${data[i].content}
                </label>
                <span id="${data[i].id}">X</span>
            `
            liNode.querySelector('span').addEventListener('click',function(e){
                // console.log(e.toElement.id);
                liNode.remove();
            })
            todos.append(liNode);   
        
    }
}
setTimeout(()=>render(data),2000)
// render(data);

function Input (e) {
    const id = data.length+1;
    const newData = {id:id, content:e.value,completed:false};
    data.push(newData);
    // console.log(data);
    render([newData]);
    e.value=null;
}

