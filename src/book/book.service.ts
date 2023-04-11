import { Book } from "./data/book.dto";

export class BookService {
    public books: Book[] = []

    // add books
    addBookService(book: Book): string {
        this.books.push(book)
        return "Book has been successfully added."
    } 

    // update book
    updateBookService(book: Book): string {
        let index = this.books.findIndex((currentBook) => {
            return currentBook.id === book.id
        })

        this.books[index] = book

        return "Book updated successfully."
    }

    // delete book
    deleteBookService(bookId: string): string {
        this.books = this.books.filter((book) => {
            return book.id !== bookId 
        })

        return "Book has been deleted successfully."
    }

    // findAllBook
    findAllBook(): Book[] {
        return this.books
    }
}