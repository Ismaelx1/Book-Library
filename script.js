                                    let myLib = []; 
const showbtn = document.querySelector('#showBtn');
const formShow = document.querySelector('.form')
const addBtn = document.querySelector('#pushBook')
const titleInp = document.querySelector('#bookTitle')
const authorInp = document.querySelector('#bookAuth')
const pageInp = document.querySelector('#bookPages')
const godiv = document.createElement('div')
const display = document.querySelector('#body')
const tests = document.querySelector('.displayshit')


addBtn.addEventListener('click', () => {
    const titleBe = titleInp.value
    const authBe = authorInp.value
    const pageBe = pageInp.value 
        if (titleBe.length == 0 || authBe.length == 0 || pageBe.length == 0) {
            alert('Please fill out the remaining fields =)')
        } else {
            titleInp.value = ''
            authorInp.value = ''
            pageInp.value = ''
            formShow.style.visibility = "hidden"
            tests.textContent = ''
            
        }
     for (let i = 0; i < myLib.length; i++) {
            tests.textContent += myLib[i]
     
     }
    });
        
function addBook() {
            let title = titleInp.value
            let author = authorInp.value
            let pages = pageInp.value
            let newBook = new Book(title, author, pages)
            myLib.push(newBook)
}
function exit() {
    titleInp.value = ''
authorInp.value = ''
pageInp.value = ''
formShow.style.visibility = "hidden"
}


showbtn.addEventListener('click', () => {
    formShow.style.visibility = "visible"

});


function Book(titleBe, authBe, pagesBe) {
this.title = titleBe;
this.author = authBe;
this.pages = pagesBe;
};
    
/* var givenName = document.querySelector('#name')
var btnClass = document.querySelector('#addNameButton')
var listOfName = document.querySelector('#listOfName')
btnClass.addEventListener('click', () => {
   var actualName = givenName.value
   if (actualName.length != 0) {
      var createAnHTMLList = `<li class=""><div>${actualName}</div><button
      onclick="removeNameFromTheList(this)">Remove Name</button>`
      listOfName.innerHTML += createAnHTMLList
      givenName.value = ''
      givenName.classList.remove('red')
   } else{
      givenName.classList.add('red')
   }
})
function removeNameFromTheList(e) {
   e.parentElement.remove()
} */;
