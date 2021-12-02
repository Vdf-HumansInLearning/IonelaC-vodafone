const root = document.getElementById('root');
let openModalVariable = document.querySelector(".open-modal");

let blog = {
    article1: {
        title: 'The complete guide to explore Trasilvania, with your bike',
        imgUrl: 'img/bike.jpg',
        imgAlt: 'Bike',
        content: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est totam laboriosam debitis magnam voluptatum, incidunt neque. Totam ullam non quis, repellendus molestiae in itaque natus labore quos ipsum alias, veritatis nihil! Quisquam
            labore, sequi minima expedita necessitatibus omnis error amet recusandae atque commodi quia! Vel laborum recusandae voluptatum rerum id harum, fuga beatae ut, consequuntur repellendus ipsum temporibus libero itaque.`,
        content2: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quod tempore quaerat deserunt. Voluptatibus possimus, magni quas rem adipisci, esse ipsa fuga, fugit eos repellendus quis? Dicta perferendis, doloremque provident repellendus natus fugit obcaecati, voluptate odio, nulla similique officia. Iure at aliquam dicta provident nulla modi optio maiores. Similique eos molestiae earum voluptatum nostrum porro, consequuntur nihil ex earum. Voluptatum placeat labore necessitatibus repellat. Repudiandae velit suscipit amet tenetur, mollitia aut dolor ipsa delectus a autem ut quibusdam incidunt? Nisi facilis voluptatem omnis debitis laborum cupiditate pariatur inventore molestiae eveniet!`,
        classLi: 'info__item',
        li1: 'Destination Europe',
        li2: 'Added by ',
        li3: 'July 01, 2018',
        readMoreHref: 'details.html'
    },
    article2: {
        title: 'Bucegi: Places you must visit before you die',
        imgUrl: 'img/bucegi.jpg',
        imgAlt: 'Bucegi',
        classLi: 'info__item',
        li1: 'Must Visit',
        li2: 'Added by ',
        li3: 'June 30, 2018'
    },
    article3: {
        title: 'Romania: The land of dreams',
        imgUrl: 'img/village.jpg',
        imgAlt: 'village',
        classLi: 'info__item',
        li1: 'Village',
        li2: 'Added by ',
        li3: 'June 17, 2018'
    },
    article4: {
        title: 'Sarmale - stuffed cabbage rolls. Good or bad?',
        imgUrl: 'img/sarmale.jpg',
        imgAlt: 'sarmale',
        classLi: 'info__item',
        li1: 'Food',
        li2: 'Added by ',
        li3: 'December 29, 2017'
    }
};

const nav = ['Travel updates', 'Reviews', 'About', 'Contact'];

function createNav(nav) {
    const navBar = document.createElement('nav');
    navBar.setAttribute('class', 'nav');

    const ul = document.createElement('ul');
    ul.setAttribute('class', 'nav__container');
    navBar.appendChild(ul);

    nav.forEach(element => {
        const li = document.createElement('li');
        li.setAttribute('class', 'nav__item');
        const anchor = document.createElement('a');
        anchor.setAttribute('href', '/');
        anchor.setAttribute('class', 'nav__link');
        anchor.textContent = element;

        ul.appendChild(li);
        li.appendChild(anchor);

    })

    return navBar;
}

function renderNavBar(nav) {
    const domNavBar = createNav(nav);
    root.appendChild(domNavBar);
    createNav(nav);
}
renderNavBar(nav);

function createAddButton() {
    const div = document.createElement('div');
    div.setAttribute('class', 'add__container');
    const button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.setAttribute('class', 'button open-modal');
    button.textContent = '+ Add Article';

    div.appendChild(button);

    return div;
}

function renderAddButton() {
    const domButton = createAddButton();
    root.appendChild(domButton);
    createAddButton();
}

renderAddButton()

// Add edit/delete button 
function addActionButtons() {
    const domActionDiv = document.createElement('div');
    domActionDiv.setAttribute('class', 'actions__container');

    const editButton = document.createElement('button');
    editButton.setAttribute('type', 'button');
    editButton.setAttribute('class', 'actions__btn border');
    editButton.textContent = 'Edit'

    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('type', 'button');
    deleteButton.setAttribute('class', 'actions__btn');
    deleteButton.textContent = 'Delete';

    domActionDiv.appendChild(editButton);
    domActionDiv.appendChild(deleteButton);

    return domActionDiv;
}

// Read more button
function readMoreButtonArticle() {
    const readMoreDiv = document.createElement('div');
    readMoreDiv.setAttribute('class', 'readmore__container');

    const readMoreButton = document.createElement('button');
    readMoreButton.setAttribute('type', 'button');
    readMoreButton.setAttribute('class', 'button');
    readMoreButton.textContent = 'Read More';

    readMoreDiv.appendChild(readMoreButton);

    return readMoreDiv;
}

// Paragraphs
function addParagraphs(blog) {
    const domP = document.createElement('p');
    domP.setAttribute('class', 'line-height');
    domP.textContent = blog.article1.content;

    const domP2 = document.createElement('p');
    domP2.textContent = blog.article1.content2;

    const domContainer = document.createElement('div');
    domContainer.setAttribute('class', 'content__container');
    domContainer.appendChild(domP);
    domContainer.appendChild(domP2);

    return domContainer;
}


function createArticle1(blog) {
    const domArticle = document.createElement('article');

    const domTitle = document.createElement('h2');
    domTitle.textContent = blog.article1.title;
    domTitle.setAttribute('class', 'title');

    const domUl = document.createElement('ul');
    domUl.setAttribute('class', 'info__container');

    const domLi1 = document.createElement('li');
    domLi1.setAttribute('class', blog.article1.classLi);
    domLi1.textContent = blog.article1.li1;

    const domLi2 = document.createElement('li');
    domLi2.setAttribute('class', blog.article1.classLi);
    domLi2.textContent = blog.article1.li2;

    const domSpan = document.createElement('span');
    domSpan.setAttribute('class', 'info__mark point');
    domSpan.textContent = 'Jonnathan Mercadina';

    const domLi3 = document.createElement('li');
    domLi3.setAttribute('class', blog.article1.classLi);
    domLi3.textContent = blog.article1.li3;

    domUl.appendChild(domLi1);
    domUl.appendChild(domLi2);
    domLi2.appendChild(domSpan);
    domUl.appendChild(domLi3);

    const domImg = document.createElement('img');
    domImg.setAttribute('src', blog.article1.imgUrl);
    domImg.setAttribute('alt', blog.article1.imgAlt);

    domArticle.appendChild(domTitle);
    domArticle.appendChild(domUl);

    let actionButtons = addActionButtons();
    domArticle.appendChild(actionButtons);
    addActionButtons();

    domArticle.appendChild(domImg);

    let paragraphs = addParagraphs(blog);
    domArticle.appendChild(paragraphs);
    addParagraphs(blog);

    const readMoreDiv = document.createElement('div');
    readMoreDiv.setAttribute('class', 'readmore__container');

    const readMoreAnchor = document.createElement('a');
    readMoreAnchor.setAttribute('href', blog.article1.readMoreHref);
    readMoreAnchor.setAttribute('class', 'btn-details');

    const readMoreButton = document.createElement('button');
    readMoreButton.setAttribute('href', blog.article1.readMoreHref);
    readMoreButton.setAttribute('type', 'button');
    readMoreButton.setAttribute('class', 'button');
    readMoreButton.textContent = 'Read More';

    readMoreDiv.appendChild(readMoreAnchor);
    readMoreAnchor.appendChild(readMoreButton);
    domArticle.appendChild(readMoreDiv);

    return domArticle;
}

function createArticle2(blog) {
    const domTitle = document.createElement('h2');
    domTitle.textContent = blog.article2.title;
    domTitle.setAttribute('class', 'title');

    const domUl = document.createElement('ul');
    domUl.setAttribute('class', 'info__container');

    const domLi1 = document.createElement('li');
    domLi1.setAttribute('class', blog.article2.classLi);
    domLi1.textContent = blog.article2.li1;

    const domLi2 = document.createElement('li');
    domLi2.setAttribute('class', blog.article2.classLi);
    domLi2.textContent = blog.article2.li2;

    const domSpan = document.createElement('span');
    domSpan.setAttribute('class', 'info__mark point');
    domSpan.textContent = 'Jonnathan Mercadina';

    const domLi3 = document.createElement('li');
    domLi3.setAttribute('class', blog.article2.classLi);
    domLi3.textContent = blog.article2.li3;

    domUl.appendChild(domLi1);
    domUl.appendChild(domLi2);
    domLi2.appendChild(domSpan);
    domUl.appendChild(domLi3);

    const domImg = document.createElement('img');
    domImg.setAttribute('src', blog.article2.imgUrl);
    domImg.setAttribute('alt', blog.article2.imgAlt);

    const domArticle = document.createElement('article');

    domArticle.appendChild(domTitle);
    domArticle.appendChild(domUl);

    let actionButtons = addActionButtons();
    domArticle.appendChild(actionButtons);
    addActionButtons();

    domArticle.appendChild(domImg);

    let paragraphs = addParagraphs(blog);
    domArticle.appendChild(paragraphs);
    addParagraphs(blog);

    let readmore = readMoreButtonArticle();
    domArticle.appendChild(readmore);
    readMoreButtonArticle();

    return domArticle;
}


function createArticle3(blog) {
    const domTitle = document.createElement('h2');
    domTitle.textContent = blog.article3.title;
    domTitle.setAttribute('class', 'title');

    const domUl = document.createElement('ul');
    domUl.setAttribute('class', 'info__container');

    const domLi1 = document.createElement('li');
    domLi1.setAttribute('class', blog.article3.classLi);
    domLi1.textContent = blog.article3.li1;

    const domLi2 = document.createElement('li');
    domLi2.setAttribute('class', blog.article3.classLi);
    domLi2.textContent = blog.article3.li2;

    const domSpan = document.createElement('span');
    domSpan.setAttribute('class', 'info__mark point');
    domSpan.textContent = 'Jonnathan Mercadina';

    const domLi3 = document.createElement('li');
    domLi3.setAttribute('class', blog.article3.classLi);
    domLi3.textContent = blog.article3.li3;

    domUl.appendChild(domLi1);
    domUl.appendChild(domLi2);
    domLi2.appendChild(domSpan);
    domUl.appendChild(domLi3);

    const domImg = document.createElement('img');
    domImg.setAttribute('src', blog.article3.imgUrl);
    domImg.setAttribute('alt', blog.article3.imgAlt);

    const domArticle = document.createElement('article');

    domArticle.appendChild(domTitle);
    domArticle.appendChild(domUl);

    let actionButtons = addActionButtons();
    domArticle.appendChild(actionButtons);
    addActionButtons();

    domArticle.appendChild(domImg);

    let paragraphs = addParagraphs(blog);
    domArticle.appendChild(paragraphs);
    addParagraphs(blog);

    let readmore = readMoreButtonArticle();
    domArticle.appendChild(readmore);
    readMoreButtonArticle();

    return domArticle;
}

function createArticle4(blog) {
    const domTitle = document.createElement('h2');
    domTitle.textContent = blog.article4.title;
    domTitle.setAttribute('class', 'title');

    const domUl = document.createElement('ul');
    domUl.setAttribute('class', 'info__container');

    const domLi1 = document.createElement('li');
    domLi1.setAttribute('class', blog.article4.classLi);
    domLi1.textContent = blog.article4.li1;

    const domLi2 = document.createElement('li');
    domLi2.setAttribute('class', blog.article4.classLi);
    domLi2.textContent = blog.article4.li2;

    const domSpan = document.createElement('span');
    domSpan.setAttribute('class', 'info__mark point');
    domSpan.textContent = 'Jonnathan Mercadina';

    const domLi3 = document.createElement('li');
    domLi3.setAttribute('class', blog.article4.classLi);
    domLi3.textContent = blog.article4.li3;

    domUl.appendChild(domLi1);
    domUl.appendChild(domLi2);
    domLi2.appendChild(domSpan);
    domUl.appendChild(domLi3);

    const domImg = document.createElement('img');
    domImg.setAttribute('src', blog.article4.imgUrl);
    domImg.setAttribute('alt', blog.article4.imgAlt);

    const domArticle = document.createElement('article');

    domArticle.appendChild(domTitle);
    domArticle.appendChild(domUl);

    let actionButtons = addActionButtons();
    domArticle.appendChild(actionButtons);
    addActionButtons();

    domArticle.appendChild(domImg);

    let paragraphs = addParagraphs(blog);
    domArticle.appendChild(paragraphs);
    addParagraphs(blog);

    let readmore = readMoreButtonArticle();
    domArticle.appendChild(readmore);
    readMoreButtonArticle();

    return domArticle;
}

function renderArticle(blog) {
    const domArticle1 = createArticle1(blog);
    root.appendChild(domArticle1);
    createArticle1(blog);

    const domArticle2 = createArticle2(blog);
    root.appendChild(domArticle2);
    createArticle2(blog);

    const domArticle3 = createArticle3(blog);
    root.appendChild(domArticle3);
    createArticle3(blog);

    const domArticle4 = createArticle4(blog);
    root.appendChild(domArticle4);
    createArticle4(blog);
}

renderArticle(blog);


function createFooter() {
    const footer = document.createElement('footer');
    footer.setAttribute('class', 'footer');

    const previousButton = document.createElement('button');
    previousButton.setAttribute('class', 'footer__link');
    previousButton.textContent = 'previous';

    const nextButton = document.createElement('button');
    nextButton.setAttribute('class', 'footer__link footer__link--next');
    nextButton.textContent = 'next';

    footer.appendChild(previousButton);
    footer.appendChild(nextButton);
    return footer;
}

function renderFooter() {
    const domFooter = createFooter();
    root.appendChild(domFooter);
    createFooter();
}
renderFooter();

let modal = document.getElementById("modal-box");

function createModal() {
    const modalDiv = document.createElement('div');
    modalDiv.setAttribute('class', 'modal');

    const modalContent = document.createElement('div');
    modalContent.setAttribute('class', 'modal__content');

    const modalTitle = document.createElement('h2');
    modalTitle.setAttribute('class', 'title modal-title');
    modalTitle.textContent = "Add/Edit article";

    const inputsContainer = document.createElement('div');
    inputsContainer.setAttribute('class', 'inputs__container');

    const input1 = document.createElement('input');
    input1.setAttribute('type', 'text');
    input1.setAttribute('class', 'input margin');
    input1.setAttribute('placeholder', 'Please enter title');

    const input2 = document.createElement('input');
    input2.setAttribute('type', 'text');
    input2.setAttribute('class', 'input');
    input2.setAttribute('placeholder', 'Please enter tag');

    const input3 = document.createElement('input');
    input3.setAttribute('type', 'text');
    input3.setAttribute('class', 'input margin');
    input3.setAttribute('placeholder', 'Please enter author');

    const input4 = document.createElement('input');
    input4.setAttribute('type', 'text');
    input4.setAttribute('class', 'input');
    input4.setAttribute('placeholder', 'Please enter date');

    const input5 = document.createElement('input');
    input5.setAttribute('type', 'text');
    input5.setAttribute('class', 'input margin');
    input5.setAttribute('placeholder', 'Please enter image url');

    const input6 = document.createElement('input');
    input6.setAttribute('type', 'text');
    input6.setAttribute('class', 'input');
    input6.setAttribute('placeholder', 'Please enter saying');

    const textarea = document.createElement('textarea');
    textarea.setAttribute('class', 'textarea');
    textarea.setAttribute('name', 'content');
    textarea.setAttribute('cols', '28');
    textarea.setAttribute('rows', '7');
    textarea.setAttribute('placeholder', 'Please enter content');

    const modalButtonsDiv = document.createElement('div');
    modalButtonsDiv.setAttribute('class', 'modal__buttons');

    const closeModalButton = document.createElement('button');
    closeModalButton.setAttribute('type', 'button');
    closeModalButton.setAttribute('class', 'button close-modal');
    closeModalButton.textContent = 'Cancel';

    const saveModalButton = document.createElement('button');
    saveModalButton.setAttribute('type', 'button');
    saveModalButton.setAttribute('class', 'button button--pink');
    saveModalButton.textContent = 'Save';

    modalDiv.appendChild(modalContent);
    modalContent.appendChild(modalTitle);
    modalContent.appendChild(inputsContainer);
    inputsContainer.appendChild(input1);
    inputsContainer.appendChild(input2);
    inputsContainer.appendChild(input3);
    inputsContainer.appendChild(input4);
    inputsContainer.appendChild(input5);
    inputsContainer.appendChild(input6);
    modalContent.appendChild(textarea);
    modalContent.appendChild(modalButtonsDiv);
    modalButtonsDiv.appendChild(closeModalButton);
    modalButtonsDiv.appendChild(saveModalButton);

    return modalDiv;
}

function renderModal() {
    const domModal = createModal();
    modal.appendChild(domModal);
    createModal();
}

renderModal();

let openModal = document.querySelector(".open-modal");
let modalOverlay = document.querySelector(".modal__overlay");
let closeModal = document.querySelector(".close-modal")

openModal.addEventListener("click", function() {
    modalOverlay.style.visibility = "visible";
    modalOverlay.style.opacity = 1;
})

closeModal.addEventListener("click", function() {
    modalOverlay.style.visibility = "hidden";
    modalOverlay.style.opacity = 0;
})