function Book(id = 'none', name = 'none', author = 'none', personalScore = 'none', finishReadingDate = 'none'){   
    let obj = {
        id: id,
        name: name,
        author: author,
        personalScore: personalScore,
        finishReadingDate: finishReadingDate
    }
    return obj
}

books = [
    // Name, Author, Personal Score Point and Finish Reading Date.
    new Book(1, 'Eu, Robô', 'Isaac Asimov', 9, '04/2021'),
    new Book(2,'Hércules', 'Menelaos Stephanides', 8, '04/2021'),
    new Book(3, 'Frankenstein', 'Mary Shelley', 8, '04/2021'),
    new Book(4, 'As Cavernas de Aço', 'Isaac Asimov', 9, '05/2021' ),
    new Book(5, 'Linux Essencial', 'Fábio J L Ferreira', 8, '05/2021'),
    new Book(6, 'Coração de Aço', 'Brandon Sanderson', 10, '06/2021')
]

module.exports = books