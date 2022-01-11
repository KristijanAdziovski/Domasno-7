let book ={}
book.title="Escape";
book.author="David Baldacci";
book.readingStatus = false;
book.method=function(status){
    if(status ==true){
        console.log(`You have read  book ${this.title} from author ${this.author}`)

    }
    else{
        console.log(`You don't have read  book ${this.title} from author ${this.author}`)
    }
}
book.method(book.readingStatus)

//Bonus
let newBook={}
newBook.titles=prompt("Enter the book name");
newBook.authors=prompt("Enter the author name and sur name ");
newBook.readingStatuss=+prompt("Selekt 1 if you have rear book or 2 if you don't have reading book");
newBook.reading=function(statusot){
    if(statusot == 1){
        console.log(`You have read  book ${this.titles} from author ${this.authors}`)

    }
    else{
        console.log(`You don't have read  book ${this.titles} from author ${this.authors}`)
    }
}
newBook.reading(newBook.readingStatuss)

