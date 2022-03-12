                                  
  
let myLib = [
    {
      title: "A Game of Thrones",
      author: "George R. R. Martin",
      pages: 694
    }
  ];
const showbtn = document.querySelector('#showBtn');
const formShow = document.querySelector('.form')
const addBtn = document.querySelector('#pushBook')
const titleInp = document.querySelector('#bookTitle')
const authorInp = document.querySelector('#bookAuth')
const pageInp = document.querySelector('#bookPages')
const godiv = document.createElement('div')
const display = document.querySelector('#body')
$table = document.querySelector('.table');
$tbody = $table.querySelector('tbody');



function Book(titleBe, authBe, pagesBe) {
    this.title = titleBe;
    this.author = authBe;
    this.pages = pagesBe;
    };

    function addBook() {
        let title = titleInp.value
        let author = authorInp.value
        let pages = pageInp.value
        let newBook = new Book(title, author, pages)
        myLib.push(newBook)
}
const updateTable = () => {
    $tbody.textContent = '';
  
    myLib.forEach((book, index) => {
      let $row = document.createElement('tr');
      Object.keys(book).forEach(prop => {
        let $newTd = document.createElement('td');
        $newTd.textContent = book[prop];
        if (prop == 'read') $newTd.textContent = book[prop] ? 'Read' : 'Not read';
        $row.appendChild($newTd);
      }); 
  
      
      $tbody.appendChild($row);
    });
}

updateTable()

addBtn.addEventListener('click', () => {
    const titleBe = titleInp.value
    const authBe = authorInp.value
    const pageBe = pageInp.value 
        if (titleBe.length == 0 || authBe.length == 0 || pageBe.length == 0) {
            alert('Please fill out the remaining fields =)')
        } else {
            addBook()
            updateTable()
            titleInp.value = ''
            authorInp.value = ''
            pageInp.value = ''
            formShow.style.visibility = "hidden"
         
            
        }
    
    
    });
        

function exit() {
    titleInp.value = ''
authorInp.value = ''
pageInp.value = ''
formShow.style.visibility = "hidden"
}


showbtn.addEventListener('click', () => {
    formShow.style.visibility = "visible"

});



    
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
