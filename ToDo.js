console.log(`every thing is running just fine`)
let td=[];
let d=[];
displayitem();
function ToDo()
{
    let inputItem=document.querySelector('#to-input');
    let todoinput=inputItem.value;
    console.log(todoinput);
    td.push(todoinput);
    inputItem.value='';
    displayitem();
}
function date(){
    let dateitem=document.querySelector('#tododate');
    let dateinput=dateitem.value;
    d.push(dateinput);
    displayitem();
}
function displayitem(){
    let contain=document.querySelector('.containerelement');
    let innerhtml='';
    for(let i=0;i<td.length;i++)
        {
            innerhtml+=`
            <span>${td[i]}</span>
            <span>${d[i]}</span>
            <button id="del" onclick="td.splice(${i},1);
            displayitem();"> delete</button>
            `;
        }
        contain.innerHTML=innerhtml;
        
        }

