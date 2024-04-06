const btnEl=document.querySelector('#btn')
const removebtn=document.querySelector('#remove')
const divEl=document.querySelector('#element')
const tagtype=document.querySelector('#type')
const tagcontent=document.querySelector('#content')
const selectbox=document.querySelector('#tag-place')
btnEl.addEventListener('click',()=>{
    const message=document.createElement(tagtype.value)
    message.textContent=tagcontent.value
    divEl[selectbox.value](message) 
}
)
removebtn.addEventListener('click', () => {

    divEl.lastChild.remove();

})

