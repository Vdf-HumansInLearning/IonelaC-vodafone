const root = document.getElementById('root');


// CREATING NAV BAR
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
        anchor.setAttribute('href', '#/');
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


// CREATING THE ADD BUTTON

function createAddButton() {
    const div = document.createElement('div');
    div.setAttribute('class', 'add__container');
    const button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.setAttribute('class', 'button open-modal');
    button.textContent = '+ Add Article';
    button.addEventListener('click', openModal)
    div.appendChild(button);

    return div;
}

function renderAddButton() {
    const domButton = createAddButton();
    root.appendChild(domButton);
    createAddButton();
}


// TAKING DATA FROM SERVER
fetch('http://localhost:3000/articles')
    .then(
        function(response) {
            if (response.status !== 200) {

                console.log('Looks like there was a problem. Status Code: ' +
                    response.status);
                return;
            }

            // Examine the text in the response
            response.json()
                .then(data => {
                    console.log(data)
                    window.onhashchange = locationHashChange(data);
                });
        }
    )
    .catch(function(err) {
        console.log('Fetch Error :-S', err);
    });


// CREATE ALL ARTICLES FROM MAIN PAGE 
function createArticle(articles) {
    const domArticle = document.createElement('article');
    console.log(articles)

    articles.forEach(element => {
        const articleDiv = document.createElement('div');
        articleDiv.setAttribute('id', 'article' + element.id);
        const domTitle = document.createElement('h2');
        domTitle.textContent = element.title;
        domTitle.setAttribute('class', 'title');

        const domUl = document.createElement('ul');
        domUl.setAttribute('class', 'info__container');

        const domLi1 = document.createElement('li');
        domLi1.setAttribute('class', element.classLi);
        domLi1.textContent = element.li1;

        const domLi2 = document.createElement('li');
        domLi2.setAttribute('class', element.classLi);
        domLi2.textContent = element.li2;

        const domSpan = document.createElement('span');
        domSpan.setAttribute('class', 'info__mark point');
        domSpan.textContent = 'Jonnathan Mercadina';

        const domLi3 = document.createElement('li');
        domLi3.setAttribute('class', element.classLi);
        domLi3.textContent = element.li3;

        domUl.appendChild(domLi1);
        domUl.appendChild(domLi2);
        domLi2.appendChild(domSpan);
        domUl.appendChild(domLi3);

        const domImg = document.createElement('img');
        domImg.setAttribute('src', element.imgUrl);
        domImg.setAttribute('alt', element.imgAlt);

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
        deleteButton.addEventListener('click', function() {
            deleteArticle(element.id);
        })

        domActionDiv.appendChild(editButton);
        domActionDiv.appendChild(deleteButton);

        const domP = document.createElement('p');
        domP.setAttribute('class', 'line-height');
        domP.textContent = element.content;

        const domP2 = document.createElement('p');
        domP2.textContent = element.content2;

        const domContainer = document.createElement('div');
        domContainer.setAttribute('class', 'content__container');
        domContainer.appendChild(domP);
        domContainer.appendChild(domP2);

        const readMoreDiv = document.createElement('div');
        readMoreDiv.setAttribute('class', 'readmore__container');


        const readMoreAnchor = document.createElement('a');
        readMoreAnchor.setAttribute('class', 'btn-details');
        readMoreAnchor.setAttribute('href', '#/article' + element.id);

        const readMoreButton = document.createElement('button');
        readMoreButton.setAttribute('type', 'button');
        readMoreButton.setAttribute('class', 'button button-details');
        readMoreAnchor.setAttribute('href', '#/article' + element.id);
        readMoreButton.textContent = 'Read More';
        readMoreButton.addEventListener('click', function() {
            location.hash = '#/article' + element.id;
            location.reload();
        })

        readMoreDiv.appendChild(readMoreAnchor);
        readMoreAnchor.appendChild(readMoreButton);

        domArticle.appendChild(articleDiv);
        articleDiv.appendChild(domTitle);
        articleDiv.appendChild(domUl);
        articleDiv.appendChild(domActionDiv);
        articleDiv.appendChild(domImg);
        articleDiv.appendChild(domContainer);
        articleDiv.appendChild(readMoreDiv);

    });
    return domArticle;

}

// RENDERING ALL ARTICLES FROM MAIN PAGE
function renderArticle(articles) {
    clearRoot();
    renderNavBar(nav);
    renderAddButton();
    const domArticle = createArticle(articles);
    root.appendChild(domArticle);
    createArticle(articles);
    renderFooter();
}

// CREATE FOOTER FROM MAIN PAGE
function createFooter() {
    const footer = document.createElement('footer');
    footer.setAttribute('class', 'footer');
    const previousButton = document.createElement('button');

    previousButton.setAttribute('class', 'footer__link footer__link--previous');
    previousButton.textContent = 'previous';

    const nextButton = document.createElement('button');
    nextButton.setAttribute('id', 'button-next');
    nextButton.setAttribute('class', 'footer__link footer__link--next');
    nextButton.textContent = 'next';

    footer.appendChild(previousButton);
    footer.appendChild(nextButton);

    return footer;
}

// RENDER FOOTER FROM MAIN PAGE
function renderFooter() {
    const domFooter = createFooter();
    root.appendChild(domFooter);
    createFooter();
}

// CREATE FOOTER FROM DETAILS PAGE
function detailsFooter(article) {
    console.log(article)
    const footer = document.createElement('footer');
    footer.setAttribute('class', 'footer');
    const previousButton = document.createElement('button');

    previousButton.setAttribute('class', 'footer__link footer__link--previous');
    previousButton.textContent = 'previous';

    const nextButton = document.createElement('button');
    nextButton.setAttribute('id', 'button-next');
    nextButton.setAttribute('class', 'footer__link footer__link--next');
    nextButton.textContent = 'next';

    if (location.hash.includes('#/article1')) {
        previousButton.style.visibility = 'hidden';
    } else if (location.hash.includes(`#/article4`)) {
        nextButton.style.visibility = 'hidden';
    }

    nextButton.addEventListener('click', function() {
        if (article.id >= 1) {
            // changing the route to the next article
            location.hash = '#/article' + (article.id + 1);
            // reloading page
            location.reload();
        }
    })

    previousButton.addEventListener("click", function() {
        if (article.id <= 4) {
            // changing the route to the previous article
            location.hash = '#/article' + (article.id - 1);
            // reload the page
            location.reload();
        }
    })

    footer.appendChild(previousButton);
    footer.appendChild(nextButton);

    return footer;
}

// RENDERING FOOTER FROM DETAILS PAGE
function renderDetailsFooter(article) {
    const domFooter = detailsFooter(article);
    root.appendChild(domFooter);
    detailsFooter(article);
}

// CREATING ONE DETAILED ARTICLE
function createArticleDetails(article) {
    const domArticle = document.createElement('article');

    const divArticle = document.createElement('div');
    divArticle.setAttribute('id', 'article' + article.id);
    domArticle.appendChild(divArticle);
    const domTitle = document.createElement('h2');
    domTitle.textContent = article.title;
    domTitle.setAttribute('class', 'title');

    const domUl = document.createElement('ul');
    domUl.setAttribute('class', 'info__container');

    const domLi1 = document.createElement('li');
    domLi1.setAttribute('class', article.classLi);
    domLi1.textContent = article.li1;

    const domLi2 = document.createElement('li');
    domLi2.setAttribute('class', article.classLi);
    domLi2.textContent = article.li2;

    const domSpan = document.createElement('span');
    domSpan.setAttribute('class', 'info__mark point');
    domSpan.textContent = 'Jonnathan Mercadina';

    const domLi3 = document.createElement('li');
    domLi3.setAttribute('class', article.classLi);
    domLi3.textContent = article.li3;

    domUl.appendChild(domLi1);
    domUl.appendChild(domLi2);
    domLi2.appendChild(domSpan);
    domUl.appendChild(domLi3);

    const domImg = document.createElement('img');
    domImg.setAttribute('src', article.imgUrl);
    domImg.setAttribute('alt', article.imgAlt);

    divArticle.appendChild(domTitle);
    divArticle.appendChild(domUl);
    divArticle.appendChild(domImg);

    const p1 = document.createElement('p');
    p1.setAttribute('class', 'line-height');
    p1.textContent = article.content;

    const p2 = document.createElement('p');
    p2.setAttribute('class', 'line-height');
    p2.textContent = article.content2;
    const saying = document.createElement('p');
    saying.setAttribute('class', 'saying');
    saying.textContent = article.saying;
    const p3 = document.createElement('p');
    p3.setAttribute('class', 'line-height');
    p3.textContent = article.content2;
    const p4 = document.createElement('p');
    p4.setAttribute('class', 'line-height');
    p4.textContent = article.content4;

    divArticle.appendChild(p1);
    divArticle.appendChild(p2);
    divArticle.appendChild(saying);
    divArticle.appendChild(p3);
    divArticle.appendChild(p4);

    return domArticle;
}


// RENDERING THE ARTICLE CREATED ABOVE
function renderSingleArticleDetails(article) {
    const domArticle = createArticleDetails(article);
    root.appendChild(domArticle);
    createArticleDetails(article);

}


// iterating through all articles and render single article depending of the hash
function renderAllArticlesDetails(articles) {
    console.log(articles)
    Array.from(articles).forEach(item => {
        if (location.hash.includes(item.id)) {
            renderNavBar(nav);
            renderSingleArticleDetails(item);
            renderDetailsFooter(item);
        }
    });
}

// CREATE MODAL
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

// RENDER THE MODAL
function renderModal() {
    const domModal = createModal();
    modal.appendChild(domModal);
    createModal();
}

renderModal();

// CLEAR THE CONTENT
function clearRoot() {
    root.innerHTML = '';
}

// CREATE HASH ROUTE
function locationHashChange(articles) {
    (location.hash === '#/') && renderArticle(articles);
    (location.hash.includes('#/article')) && renderAllArticlesDetails(articles);
}


// GETTING THE ELEMENTS TO CLOSE THE MODAL
let modalOverlay = document.querySelector(".modal__overlay");
let closeModal = document.querySelector(".close-modal")

// OPEN MODAL FUNCTION, called directly in the function that creates the ADD BUTTON
function openModal() {
    modalOverlay.style.visibility = "visible";
    modalOverlay.style.opacity = 1;
}

// CLOSING THE MODAL
closeModal.addEventListener("click", function() {
    modalOverlay.style.visibility = "hidden";
    modalOverlay.style.opacity = 0;
})


// DARK MODE
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
let body = document.querySelector('body');

function switchTheme(e) {
    if (e.target.checked) {
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark'); //add this
    } else {
        body.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light'); //add this
    }
}


toggleSwitch.addEventListener('change', switchTheme, false);

const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
    body.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

// DELETING ARTICLE DEPENDING ON THE ID, function called directly where the delete button is created (createArticle)
function deleteArticle(id) {
    fetch('http://localhost:3000/articles/' + id, {
            method: "DELETE",
        })
        .then(response => response.json())
        .then(data => {
            console.log(data, id)
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}