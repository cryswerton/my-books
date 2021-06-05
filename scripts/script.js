console.log('Script working.')

content = document.querySelector('#content')

function print(something){
    console.log(something)
}

function Book(name = 'none', author = 'none', personalScore = 'none', finishReadingDate = 'none'){   
    let obj = {
        name: name,
        author: author,
        personalScore: personalScore,
        finishReadingDate: finishReadingDate
    }
    return obj
}

books = [
    // Name, Author, Personal Score Point and Finish Reading Date.
    new Book('Eu, Robô', 'Isaac Asimov', 9.5, '04/2021'),
    new Book('Hécules', 'Menelaos Stephanides', 8.5, '04/2021'),
    new Book('Frankenstein', 'Mary Shelley', 8.0, '04/2021'),
    new Book('As Cavernas de Aço', 'Isaac Asimov', 9.0, '05/2021' ),
    new Book('Linux Essencial', 'Fábio J L Ferreira', 8.0, '05/2021'),
    new Book('Coração de Aço', 'Brandon Sanderson', 10.0, '06/2021')
]

print(books[5].name)

