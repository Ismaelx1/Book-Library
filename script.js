                                  
  
let myLib = [{
    title: "The Hobbit",
    author: "J. R. R. Tolkien",
    pages: 310,
    read: true
},
{
    title: "Harry Potter and the Philosopher's Stone",
    author: "J. K. Rowling",
    pages: 223,
    read: true
},
{
    title: "Freedom From The Known",
    author: "J. Krishnamurti",
    pages: 310,
    read: true
},
{
    title: "Think Like a Programmer",
    author: "V. Anton Spraul",
    pages: 260,
    read: false
}];
  
const showbtn = document.querySelector('#showBtn');
const formShow = document.querySelector('.form')
const addBtn = document.querySelector('#pushBook')
const titleInp = document.querySelector('#bookTitle')
const authorInp = document.querySelector('#bookAuth')
const pageInp = document.querySelector('#bookPages')


table = document.querySelector('.table');
tablebody = table.querySelector('tbody');





function Book(titleBe, authBe, pagesBe) {
    this.title = titleBe;
    this.author = authBe;
    this.pages = pagesBe;
    this.read = false;
    };

    function addBook() {
        let title = titleInp.value
        let author = authorInp.value
        let pages = pageInp.value
        let newBook = new Book(title, author, pages, false)
        myLib.push(newBook)
}


 
const createTable = () => {
    tablebody.textContent = '';
  
    myLib.forEach((book, index) => {
      let $row = document.createElement('tr');
      Object.keys(book).forEach(prop => {
        let $newTd = document.createElement('td');
        $newTd.textContent = book[prop];
        if (prop == 'read') $newTd.textContent = book[prop] ? 'Read' : 'Not read';
        $row.appendChild($newTd);
      }); 
      $row.appendChild(createReadStatusTd(book));

      $row.appendChild(createDeleteTd(index));
      tablebody.appendChild($row);
    });
 
}
const createReadStatusTd = (book) => {
    let $readStatusTd = document.createElement('td');
    let $readStatusButton = document.createElement('button');
    $readStatusButton.textContent = 'Read status';
    $readStatusButton.addEventListener('click', () => {
      book.read = !book.read;
      createTable();
    });
    $readStatusTd.appendChild($readStatusButton);
    return $readStatusTd;
  }
  const createDeleteTd = (index) => {
    let $deleteTd = document.createElement('td');
    let $deleteButton = document.createElement('button');
    $deleteButton.textContent = 'Delete';
    $deleteButton.addEventListener('click', () => {
      myLib.splice(index, 1);
      createTable();
    });
    $deleteTd.appendChild($deleteButton);
    return $deleteTd;
  }
createTable()

addBtn.addEventListener('click', () => {
    const titleBe = titleInp.value
    const authBe = authorInp.value
    const pageBe = pageInp.value 
        if (titleBe.length == 0 || authBe.length == 0 || pageBe.length == 0) {
            alert('Please fill out the remaining fields =)')
        } else {
            addBook()
            createTable()
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


  createTable();

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
