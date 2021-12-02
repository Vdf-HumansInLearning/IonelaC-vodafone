// let blog2 = [{
//         article1: {
//             title: 'The complete guide to explore Trasilvania, with your bike',
//             imgUrl: 'img/bike.jpg',
//             imgAlt: 'Bike',
//             content: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est totam laboriosam debitis magnam voluptatum, incidunt neque. Totam ullam non quis, repellendus molestiae in itaque natus labore quos ipsum alias, veritatis nihil! Quisquam
//             labore, sequi minima expedita necessitatibus omnis error amet recusandae atque commodi quia! Vel laborum recusandae voluptatum rerum id harum, fuga beatae ut, consequuntur repellendus ipsum temporibus libero itaque.`,
//             content2: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quod tempore quaerat deserunt. Voluptatibus possimus, magni quas rem adipisci, esse ipsa fuga, fugit eos repellendus quis? Dicta perferendis, doloremque provident repellendus natus fugit obcaecati, voluptate odio, nulla similique officia. Iure at aliquam dicta provident nulla modi optio maiores. Similique eos molestiae earum voluptatum nostrum porro, consequuntur nihil ex earum. Voluptatum placeat labore necessitatibus repellat. Repudiandae velit suscipit amet tenetur, mollitia aut dolor ipsa delectus a autem ut quibusdam incidunt? Nisi facilis voluptatem omnis debitis laborum cupiditate pariatur inventore molestiae eveniet!`,
//             classLi: 'info__item',
//             li1: 'Destination Europe',
//             li2: 'Added by ',
//             li3: 'July 01, 2018',
//             readMoreHref: 'details.html'
//         }
//     },
//     {
//         article2: {
//             title: 'Bucegi: Places you must visit before you die',
//             imgUrl: 'img/bucegi.jpg',
//             imgAlt: 'Bucegi',
//             classLi: 'info__item',
//             li1: 'Must Visit',
//             li2: 'Added by ',
//             li3: 'June 30, 2018'
//         }
//     },
//     {
//         article3: {
//             title: 'Romania: The land of dreams',
//             imgUrl: 'img/village.jpg',
//             imgAlt: 'village',
//             classLi: 'info__item',
//             li1: 'Village',
//             li2: 'Added by ',
//             li3: 'June 17, 2018'
//         }
//     },
//     {
//         article4: {
//             title: 'Sarmale - stuffed cabbage rolls. Good or bad?',
//             imgUrl: 'img/sarmale.jpg',
//             imgAlt: 'sarmale',
//             classLi: 'info__item',
//             li1: 'Food',
//             li2: 'Added by ',
//             li3: 'December 29, 2017'
//         }
//     }
// ];

// function createArticle(blog2) {
//     const domArticle = document.createElement('article');
//     blog2.forEach(element => {
//         const domTitle = document.createElement('h2');
//         domTitle.textContent = element.title;
//         domTitle.setAttribute('class', 'title');
//         const domUl = document.createElement('ul');
//         domUl.setAttribute('class', 'info__container');
//         const domLi1 = document.createElement('li');
//         domLi1.setAttribute('class', element.classLi);
//         domLi1.textContent = element.li1;
//         const domLi2 = document.createElement('li');
//         domLi2.setAttribute('class', element.classLi);
//         domLi2.textContent = element.li2;
//         const domSpan = document.createElement('span');
//         domSpan.setAttribute('class', 'info__mark point');
//         domSpan.textContent = 'Jonnathan Mercadina';
//         const domLi3 = document.createElement('li');
//         domLi3.setAttribute('class', element.classLi);
//         domLi3.textContent = element.li3;

//         domUl.appendChild(domLi1);
//         domUl.appendChild(domLi2);
//         domLi2.appendChild(domSpan);
//         domUl.appendChild(domLi3);

//         const domImg = document.createElement('img');
//         domImg.setAttribute('src', element.imgUrl);
//         domImg.setAttribute('alt', element.imgAlt);
//         const readMoreDiv = document.createElement('div');
//         readMoreDiv.setAttribute('class', 'readmore__container');

//         const readMoreAnchor = document.createElement('a');
//         readMoreAnchor.setAttribute('href', element.readMoreHref);
//         readMoreAnchor.setAttribute('class', 'btn-details');

//         const readMoreButton = document.createElement('button');
//         readMoreButton.setAttribute('href', element.readMoreHref);
//         readMoreButton.setAttribute('type', 'button');
//         readMoreButton.setAttribute('class', 'button');
//         readMoreButton.textContent = 'Read More';



//         domArticle.appendChild(domTitle);
//         domArticle.appendChild(domUl);
//         domArticle.appendChild(domImg);
//         readMoreDiv.appendChild(readMoreAnchor);
//         readMoreAnchor.appendChild(readMoreButton);
//         domArticle.appendChild(readMoreDiv);


//     });




//     return domArticle;
// }
// createArticle(blog2)

// function renderArticle(blog2) {
//     const domArticle = createArticle(blog2);
//     root.appendChild(domArticle);
//     createArticle(blog2);

// }

// renderArticle(blog2);