// Import packages
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const uuid = require("uuid");
const { v4: uuidv4 } = require('uuid');

const fs = require("fs");

// Application
const app = express();

// Middleware
app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(cors());

// Create

// app.post("/dogs", (req, res) => {
//     const dogsList = readJSONFile();
//     const bodyInfo = req.body;
//     const newDog = {
//             id: uuidv4(),
//             ...bodyInfo
//         }
//         // modify dogsList to add a new element
//     const newDogList = [...dogsList, newDog];
//     writeJSONFile(newDogList);
//     res.json(newDog);
//     // save dogsList to file

// });

// Read One

app.get("/articles/:id", (req, res) => {
    const articlesList = readJSONFile();
    const id = req.params.id;
    // let dog = dogsList.find((dog) => dog.id === id);
    let article = articlesList.find((article) => article.id === id);
    // let article;
    // Fill in your code here


    // for (let i = 0; i < articlesList.length; i++) {
    //     if (articlesList[i].id === id) {
    //         const nextId = i === articlesList.length - 1 ? null : articlesList[i + 1].id;
    //         const prevId = i === 0 ? null : articlesList[i - 1].id;
    //         article = {...articlesList[i], prevId, nextId };
    //     }
    // }
    res.json(article);

});


// Read All

app.get("/articles", (req, res) => {
    const articlesList = readJSONFile();
    // res.json(articlesList);
    // Fill in your code here
    let indexStart = req.query.indexStart;
    let indexEnd = req.query.indexEnd;
    console.log(articlesList);
    console.log(req);
    if (indexStart === undefined || indexEnd === undefined) {
        // res.json(articlesList);
        let articlesListObject = {
            articles: articlesList,
            numberOfArticles: articlesList.length
        }
        res.json(articlesListObject);
    } else {
        let newArticlesList = articlesList.filter((article, index) => indexStart <= index && indexEnd >= index);
        // res.json(newArticlesList);
        let articlesListObject = {
            articlesList: newArticlesList,
            numberOfArticles: articlesList.length
        }
        res.json(articlesListObject);
        // res.json(newArticlesList)
    }

});

// Update
// app.put("/dogs/:id", (req, res) => {
//     const dogsList = readJSONFile();
//     const updatedDogId = req.params.id;
//     let index = "";
//     dogsList.forEach((element, indexElement) => {
//         if (element.id == updatedDogId) {
//             index = indexElement;
//         }
//     });
//     const updatedDog = req.body;
//     dogsList[index] = {...updatedDog, id: dogsList[index].id };
//     writeJSONFile(dogsList);
//     res.json(dogsList[index])
//         // Fill in your code here
// });

// Delete
// app.delete("/dogs/:id", (req, res) => {
//     const dogsList = readJSONFile();
//     const dogId = req.params.id;
//     const dogIndex = '';

//     if (!dogId) {
//         res.status(404).send("dog not found!");
//         return;
//     }
//     dogsList.forEach((item, index) => {
//         if (item.id === dogId) {
//             dogIndex = index;
//         }
//     })

//     if (dogIndex === '') {
//         res.status(404).send("dog not found!!!");
//         return;
//     }
//     const newDogsList = dogsList.filter(item => item.id != dogId);
//     writeJSONFile(newDogsList);
//     res.json({})
//         // Fill in your code here
// });

// Reading function from db.json file
function readJSONFile() {
    return JSON.parse(fs.readFileSync("db.json"))["articles"];
}

// Writing function from db.json file
function writeJSONFile(content) {
    fs.writeFileSync(
        "db.json",
        JSON.stringify({ articles: content }),
        "utf8",
        err => {
            if (err) {
                console.log(err);
            }
        }
    );
}

// Starting the server
app.listen("3005", () =>
    console.log("Server started at: http://localhost:3005")
);