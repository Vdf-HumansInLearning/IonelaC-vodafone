const root = document.getElementById('root');
let openModalVariable = document.querySelector(".open-modal");

let blog = [{
        id: 1,
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

    {
        id: 2,
        title: 'Bucegi: Places you must visit before you die',
        imgUrl: 'img/bucegi.jpg',
        imgAlt: 'Bucegi',
        content: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est totam laboriosam debitis magnam voluptatum, incidunt neque. Totam ullam non quis, repellendus molestiae in itaque natus labore quos ipsum alias, veritatis nihil! Quisquam
            labore, sequi minima expedita necessitatibus omnis error amet recusandae atque commodi quia! Vel laborum recusandae voluptatum rerum id harum, fuga beatae ut, consequuntur repellendus ipsum temporibus libero itaque.`,
        content2: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quod tempore quaerat deserunt. Voluptatibus possimus, magni quas rem adipisci, esse ipsa fuga, fugit eos repellendus quis? Dicta perferendis, doloremque provident repellendus natus fugit obcaecati, voluptate odio, nulla similique officia. Iure at aliquam dicta provident nulla modi optio maiores. Similique eos molestiae earum voluptatum nostrum porro, consequuntur nihil ex earum. Voluptatum placeat labore necessitatibus repellat. Repudiandae velit suscipit amet tenetur, mollitia aut dolor ipsa delectus a autem ut quibusdam incidunt? Nisi facilis voluptatem omnis debitis laborum cupiditate pariatur inventore molestiae eveniet!`,
        classLi: 'info__item',
        li1: 'Must Visit',
        li2: 'Added by ',
        li3: 'June 30, 2018'
    },
    {
        id: 3,
        title: 'Romania: The land of dreams',
        imgUrl: 'img/village.jpg',
        imgAlt: 'village',
        content: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est totam laboriosam debitis magnam voluptatum, incidunt neque. Totam ullam non quis, repellendus molestiae in itaque natus labore quos ipsum alias, veritatis nihil! Quisquam
            labore, sequi minima expedita necessitatibus omnis error amet recusandae atque commodi quia! Vel laborum recusandae voluptatum rerum id harum, fuga beatae ut, consequuntur repellendus ipsum temporibus libero itaque.`,
        content2: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quod tempore quaerat deserunt. Voluptatibus possimus, magni quas rem adipisci, esse ipsa fuga, fugit eos repellendus quis? Dicta perferendis, doloremque provident repellendus natus fugit obcaecati, voluptate odio, nulla similique officia. Iure at aliquam dicta provident nulla modi optio maiores. Similique eos molestiae earum voluptatum nostrum porro, consequuntur nihil ex earum. Voluptatum placeat labore necessitatibus repellat. Repudiandae velit suscipit amet tenetur, mollitia aut dolor ipsa delectus a autem ut quibusdam incidunt? Nisi facilis voluptatem omnis debitis laborum cupiditate pariatur inventore molestiae eveniet!`,
        classLi: 'info__item',
        li1: 'Village',
        li2: 'Added by ',
        li3: 'June 17, 2018'
    },
    {
        id: 4,
        title: 'Sarmale - stuffed cabbage rolls. Good or bad?',
        imgUrl: 'img/sarmale.jpg',
        imgAlt: 'sarmale',
        content: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est totam laboriosam debitis magnam voluptatum, incidunt neque. Totam ullam non quis, repellendus molestiae in itaque natus labore quos ipsum alias, veritatis nihil! Quisquam
            labore, sequi minima expedita necessitatibus omnis error amet recusandae atque commodi quia! Vel laborum recusandae voluptatum rerum id harum, fuga beatae ut, consequuntur repellendus ipsum temporibus libero itaque.`,
        content2: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quod tempore quaerat deserunt. Voluptatibus possimus, magni quas rem adipisci, esse ipsa fuga, fugit eos repellendus quis? Dicta perferendis, doloremque provident repellendus natus fugit obcaecati, voluptate odio, nulla similique officia. Iure at aliquam dicta provident nulla modi optio maiores. Similique eos molestiae earum voluptatum nostrum porro, consequuntur nihil ex earum. Voluptatum placeat labore necessitatibus repellat. Repudiandae velit suscipit amet tenetur, mollitia aut dolor ipsa delectus a autem ut quibusdam incidunt? Nisi facilis voluptatem omnis debitis laborum cupiditate pariatur inventore molestiae eveniet!`,
        classLi: 'info__item',
        li1: 'Food',
        li2: 'Added by ',
        li3: 'December 29, 2017'
    }
];

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

function createArticle(blog) {
    const domArticle = document.createElement('article');

    blog.forEach(element => {
        // console.log(element.title)
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
        // readMoreAnchor.setAttribute('href', element.readMoreHref);
        // readMoreAnchor.setAttribute('route', '/details')
        readMoreAnchor.setAttribute('class', 'btn-details');

        const readMoreButton = document.createElement('button');
        // readMoreButton.setAttribute('href', element.readMoreHref);
        readMoreButton.setAttribute('type', 'button');
        readMoreButton.setAttribute('class', 'button button-details');
        readMoreButton.setAttribute('route', '/details');
        readMoreButton.textContent = 'Read More';

        readMoreDiv.appendChild(readMoreAnchor);
        readMoreAnchor.appendChild(readMoreButton);

        domArticle.appendChild(domTitle);
        domArticle.appendChild(domUl);
        domArticle.appendChild(domActionDiv);
        domArticle.appendChild(domImg);
        domArticle.appendChild(domContainer);
        domArticle.appendChild(readMoreDiv);

    });

    return domArticle;
}

function renderArticle(blog) {
    const domArticle = createArticle(blog);
    root.appendChild(domArticle);
    createArticle(blog);

}

renderArticle(blog);


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






// // DETAILS

const article = {
    id: 1,
    title: 'The complete guide to explore Trasilvania, with your bike',
    imgUrl: 'img/bike.jpg',
    imgAlt: 'Bike',
    content: `class="line-height">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dignissimos et, animi repudiandae libero culpa excepturi obcaecati, voluptate assumenda quos quas, rerum quisquam ex consequuntur ullam sit sint autem eaque magnam maiores!
    Repudiandae dolore accusantium cumque, facere incidunt, dignissimos numquam dolorum ad, ducimus non nulla veniam tempora fuga libero qui expedita. Voluptate modi sapiente delectus reprehenderit ratione. Tempora ut, iste dolorum
    delectus eveniet eligendi quibusdam soluta ratione omnis at harum et. Molestiae rerum culpa, necessitatibus obcaecati nesciunt ex dolorem aut quisquam eveniet quibusdam soluta doloremque qui, nostrum laudantium, sapiente iusto
    odit. Placeat iusto eius asperiores iure atque sint ex!`,
    content2: `Impedit soluta tenetur alias id doloremque dolores incidunt earum? Animi, quas eligendi! Est voluptas dolor eos quae, harum amet cumque vitae nobis placeat inventore facilis soluta maiores magni dolores consequuntur iure accusamus
    laborum? Ipsum voluptatum culpa doloremque minima ratione veritatis nesciunt cum quae esse sint optio eos ipsam repellendus ipsa repellat qui, sed fugiat, quaerat adipisci quia temporibus totam iusto. Labore laudantium possimus
    nisi, doloremque suscipit eligendi dolorem exercitationem excepturi rem odio, a placeat aliquid voluptates amet officia sunt corrupti? Cum, enim illo. Possimus ipsa veritatis excepturi. Hic molestias perspiciatis laborum, saepe
    excepturi eaque suscipit illum voluptates ad recusandae nam distinctio nulla eos aperiam necessitatibus. Corrupti ipsam numquam, placeat deserunt iste quae dicta facilis natus laboriosam tempore minus modi corporis esse excepturi
    facere nam quam suscipit?`,
    content3: `Adipisci consequatur similique, voluptatum sed itaque velit iure optio! Laboriosam eligendi, perspiciatis veniam eum doloremque cum debitis natus eos? Amet culpa asperiores natus harum suscipit ducimus, iure recusandae quibusdam voluptate
    mollitia unde nulla nemo tempora corrupti facere. Dolore qui, illum vel nesciunt, corrupti necessitatibus, est tenetur repellat fuga officia eius maiores non libero. Voluptates illum ea quaerat, eaque quidem vitae dolorum debitis
    doloribus dolor accusamus ab similique doloremque, voluptas nemo. Natus dolor officiis illo hic, aliquid iusto eos? Magni quibusdam sunt vel?`,
    content4: `Neque, tempora temporibus exercitationem qui molestias corrupti, esse voluptatem possimus, ratione ex quod repellat iste nobis! Rerum beatae consectetur itaque pariatur quos omnis perspiciatis laboriosam quis quod, sed iusto. Consectetur
    qui dolores sequi sint, provident voluptatibus tempora illo repellendus vel suscipit voluptas magni quod quaerat corrupti eaque, optio vitae non recusandae sed atque similique ad in. Error maxime fugiat ut tenetur ipsam quibusdam
    ipsa recusandae alias blanditiis, deserunt, porro laudantium. Sit omnis cumque pariatur ipsum, fugiat, quae id quo autem sint nihil doloremque impedit magnam. Earum eveniet reprehenderit recusandae nam beatae sint provident?`,
    content5: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, labore quidem? Reprehenderit alias ullam similique libero dignissimos laboriosam maxime illo. Molestias labore veritatis suscipit ut exercitationem, consectetur repudiandae
    fuga quasi quos velit! Dolor, iusto iure laborum, velit recusandae delectus rem et aut fuga cumque ducimus hic cupiditate vitae itaque doloribus repellat voluptate odio culpa. Cupiditate dolor praesentium quod dignissimos est quos
    odit voluptate consectetur, modi illum quam minima magnam recusandae.`,
    content6: `Laudantium pariatur perferendis reiciendis eum at ratione incidunt quo! Dolore, eligendi. Itaque libero eaque enim dignissimos inventore ab exercitationem doloribus debitis perferendis corrupti quisquam ullam repellendus atque totam,
    necessitatibus cupiditate nobis eos sint earum nihil officiis. Beatae accusamus quam repellat similique at cumque molestiae hic natus cum, vero eaque vel facere quod necessitatibus maiores minima architecto voluptas aut vitae maxime
    reprehenderit quisquam? Enim animi doloremque, officia repellendus minus corporis deserunt incidunt aperiam voluptatum, nostrum voluptate consectetur officiis sequi aliquid dolores facere ratione, tempora corrupti accusamus sint?`,
    content7: `Tenetur non illo consequuntur qui at quidem itaque, veniam hic exercitationem omnis atque debitis eligendi voluptatem ab officia accusantium ratione quis dignissimos nisi voluptas neque perferendis! Minus repudiandae rerum illum accusamus,
    nobis amet, ullam ipsum mollitia explicabo repellat expedita voluptatum ad libero inventore porro voluptates reprehenderit debitis sapiente quis accusantium unde adipisci vitae ab qui? Et modi dolores error blanditiis iusto, pariatur
    quas ex unde voluptates at inventore, vero temporibus totam nesciunt animi eveniet culpa molestiae officiis repellendus ea! Expedita rerum non obcaecati accusantium, quasi blanditiis officiis pariatur dicta magni quidem error quisquam
    doloribus numquam voluptate aliquam amet vitae provident mollitia. Corporis deleniti nemo quibusdam fugiat aut voluptate fuga! Velit vitae aliquid obcaecati neque sunt debitis voluptatibus odio esse distinctio dolores sequi nulla,
    at alias nesciunt dolor nobis.`,
    content8: `Voluptatum eum enim optio dignissimos, non labore dolor ullam debitis aut, voluptate maxime id natus. Repellendus repudiandae, a libero ab labore quisquam excepturi rem, iste quidem maxime reiciendis amet velit nostrum alias exercitationem!
    Incidunt commodi unde repellendus magni, totam amet corporis sed maiores doloremque veritatis architecto illum ex recusandae tenetur similique laboriosam velit molestias, in expedita quidem ducimus. Aperiam, officia! Tempora, velit
    atque necessitatibus corporis omnis officiis, perferendis, sunt molestiae aliquid quis reiciendis deleniti est. Et nemo amet illum, deleniti aperiam ratione, eos consequuntur eum impedit cumque assumenda possimus! Molestiae amet
    illum fuga facilis. A, aut error. Velit quo, eaque facilis aliquid accusantium tempora culpa porro voluptas neque quaerat, dolores explicabo maiores officia nam provident voluptates.`,
    pinkSaying: `Life is like riding a bicycle, to keep your balance you must keep moving`,
    classLi: 'info__item',
    li1: 'Destination Europe',
    li2: 'Added by ',
    li3: 'July 01, 2018',
    readMoreHref: 'details.html'
}


function addParagraphs(article) {

    const domContainer = document.createElement('div');
    domContainer.setAttribute('class', 'content__container');

    const domP = document.createElement('p');
    domP.setAttribute('class', 'line-height');
    domP.textContent = article.content;

    const domP2 = document.createElement('p');
    domP2.setAttribute('class', 'line-height');
    domP2.textContent = article.content2;

    const domP3 = document.createElement('p');
    domP3.setAttribute('class', 'line-height');
    domP3.textContent = article.content3;

    const domP4 = document.createElement('p');
    domP4.setAttribute('class', 'line-height');
    domP4.textContent = article.content4;

    const saying = document.createElement('p');
    saying.setAttribute('class', 'saying');
    saying.textContent = article.pinkSaying;

    const domP5 = document.createElement('p');
    domP5.setAttribute('class', 'line-height');
    domP5.textContent = article.content5;

    const domP6 = document.createElement('p');
    domP6.setAttribute('class', 'line-height');
    domP6.textContent = article.content6;

    const domP7 = document.createElement('p');
    domP7.setAttribute('class', 'line-height');
    domP7.textContent = article.content7;

    const domP8 = document.createElement('p');
    domP8.setAttribute('class', 'line-height');
    domP8.textContent = article.content8;

    domContainer.appendChild(domP);
    domContainer.appendChild(domP2);
    domContainer.appendChild(domP3);
    domContainer.appendChild(domP4);
    domContainer.appendChild(saying);
    domContainer.appendChild(domP5);
    domContainer.appendChild(domP6);
    domContainer.appendChild(domP7);
    domContainer.appendChild(domP8);

    return domContainer;
}

function createArticleDetails(article) {
    const domArticle = document.createElement('article');

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

    domArticle.appendChild(domTitle);
    domArticle.appendChild(domUl);
    domArticle.appendChild(domImg);

    let paragraphs = addParagraphs(article);
    domArticle.appendChild(paragraphs);
    addParagraphs(article);

    return domArticle;
}

function renderArticleDetails(article) {
    const domArticle = createArticleDetails(article);
    root.appendChild(domArticle);
    createArticleDetails(article);
}

renderArticleDetails(article)


// window.onload = function() {
//     console.log("DOM has loaded");
//     // create Router constructor
//     var Router = function(name, routes) {
//         return {
//             name: name,
//             routes: routes
//         }
//     };
//     // var root = document.getElementById('root');
//     var myRouter = new Router('myRouter', [{
//         path: '/index.html',
//         name: 'Root'
//     }, {
//         path: '/details',
//         name: 'Details'
//     }]);
//     console.log(myRouter);
//     var currentPath = window.location.pathname;
//     console.log(currentPath);
//     if (currentPath === '/index.html') {
//         renderArticle(blog)
//     } else {
//         var route = myRouter.routes.filter(r => {
//             return r.path === currentPath
//         })[0];
//         if (route) {
//             renderArticleDetails(article)
//         } else {
//             root.innerHTML = '404!'
//         }
//     }

//     var activeRoutes = Array.from(document.querySelectorAll('[route]'));
//     console.log(activeRoutes)

//     function navigate(event) {
//         console.log(event.target)
//         var route = event.target.attributes[2].value;
//         var routeInfo = myRouter.routes.filter(r => {
//             return r.path === route;
//         })[0];
//         if (!routeInfo) {
//             root.innerHTML = 'No route exists with this path'
//         } else {
//             window.history.pushState({}, '', routeInfo.path);
//             renderArticleDetails(article)
//             window.location.reload()
//         }
//         console.log(routeInfo);

//     }
//     activeRoutes.forEach(route => {
//         route.addEventListener('click', navigate);
//     })

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
// }


// DARK MODE
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark'); //add this
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light'); //add this
    }
}


toggleSwitch.addEventListener('change', switchTheme, false);

const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}