import { Body, Controller, Delete, Get, Injectable, Param, Post, Put } from "@nestjs/common";
import { BookService } from "./book.service";
import { Book } from "./data/book.dto";

@Controller("book")
export class BookController {
    constructor(private bookService: BookService) {}

    // getAllBooks
    @Get("/findAll")
    getAllBooks(): Book[] {
        return this.bookService.findAllBook()
    }

    // updateBook
    @Put("/update")
    updateBook(@Body() book: Book): string {
        return this.bookService.updateBookService(book)
    }

    // deleteBook
    @Delete("/delete/:id")
    deleteBook(@Param("id") bookId: string): string {
        return this.bookService.deleteBookService(bookId)
    }

    // addBook
    @Post("/add")
    addBook(@Body() book: Book): string {
        return this.bookService.addBookService(book)
    }
}