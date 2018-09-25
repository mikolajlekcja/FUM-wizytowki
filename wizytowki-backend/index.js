//Moduly
const fs = require('fs');

//Zmienne
let studentsPage = []; //tablica z gotowymi informacjami o stronach uczniow

let studentPage = {}; //Obiekt ktory bedzie zapisywany w tablicy studentsPage

const studentsFolderName = fs.readdirSync('./students'); //Zapisuje do tablicy nazwy folderow w folderze "students"

//Metoda forEach
studentsFolderName.forEach(studentFolderName => {

    //Zapisuje do tablicy nazwy plikow z folderu
    const studentFolderContentsName = fs.readdirSync(`./students/${studentFolderName}`);
    //Nazwy plikow z tablicy sa laczone jako string
    const inlineFileNames = studentFolderContentsName.join(" ");

    //Lomygy ale dlugie, pewnie da sie krocej (chyba), ale nie wiem jak ;c
    //Sprawdzanie czy folder posiada wymagajace pliki (html, json i logo)
    if(inlineFileNames.search("index.html") > -1 && inlineFileNames.search("config.json") > -1 && inlineFileNames.search("logo.png") > -1) {
        //Pobieranie zmiennych z json'a
        const {author, description, color} = require(`./students/${studentFolderName}/config.json`);

        //Sprawdzanie czy WSZYSTKIE zmienne pobrane z json'a posiadaja wartosc (nie sa puste, albo istnieja)
        if(author, description, color) {
            studentPage.author = author;
            studentPage.description = description;
            studentPage.color = color;
            studentPage.htmlLink = "" + `${studentFolderName}/index.html`;
            studentPage.logoLink = "" + `${studentFolderName}/logo.png`;

            //Pushowanie studentPage do tablicy studentsPage
            studentsPage.push(studentPage);
            //Czyszczenie obiektu
            studentPage = {};
        }
        //Jezeli choc jedna wartosc z json'a jest pusta...
        else {
            console.log(`Folder "${studentFolderName}" nie posiada wymaganych zmiennych w config.json lub sa puste\n`);
        }
    }
    //Jezeli folder nie posiada wymaganych plikow...
    else {
        console.log(`Folder "${studentFolderName}" nie posiada wymaganych plikow\n`);
    }
});

module.exports.students = studentsPage;