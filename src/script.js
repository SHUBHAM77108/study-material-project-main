// const navDialog = document.getElementById('nav-dialog');
// function handleMenu() {
//     navDialog.classList.toggle('hidden');
// }


// Get elements
const navDialog = document.getElementById('nav-dialog');
const menuButton = document.getElementById('menuButton');
const closeButton = document.getElementById('closeButton');
const links = document.querySelectorAll('#nav-dialog a');

// Toggle the menu
function toggleMenu() {
    navDialog.classList.toggle('hidden');
}

// Close the menu
function closeMenu() {
    navDialog.classList.add('hidden');
}

// Add event listeners
menuButton.addEventListener('click', toggleMenu);
closeButton.addEventListener('click', closeMenu);
links.forEach(link => link.addEventListener('click', closeMenu));

// Close the menu when clicked outside
document.addEventListener('click', (event) => {
    if (!navDialog.contains(event.target) && !menuButton.contains(event.target) && !closeButton.contains(event.target)) {
        closeMenu();
    }
});


function handleCardMenu(event) {
    event.stopPropagation();

    // Close all open menus
    document.querySelectorAll('.hidden-menu.show').forEach(menu => {
        menu.classList.remove('show');
    });

    // Find the closest card container from the clicked button
    const cardContainer = event.target.closest('.card-containers');

    // Find the menu within that card container
    const menu = cardContainer.querySelector('.hidden-menu');

    // Toggle the show class for this specific menu
    menu.classList.toggle('show');
}

function closeCardMenu(event) {
    event.stopPropagation();

    // Find the closest card container from the clicked button
    const cardContainer = event.target.closest('.card-containers');

    // Find the menu within that card container
    const menu = cardContainer.querySelector('.hidden-menu');

    // Remove the show class to close this specific menu
    menu.classList.remove('show');
}

// Add event listeners to all buttons with the class 'show-hidden-menu'
document.querySelectorAll('.show-hidden-menu').forEach(button => {
    button.addEventListener('click', handleCardMenu);
});

// Add event listeners to all buttons with the class 'close-hidden-menu'
document.querySelectorAll('.close-hidden-menu').forEach(button => {
    button.addEventListener('click', closeCardMenu);
});

    // drop down menu 
document.getElementById("semesterSelect").addEventListener("change", function() {
    var sem1Boxes = document.querySelectorAll(".grid-box:not(.sem2-box)");
    var sem2Boxes = document.querySelectorAll(".sem2-box");

    if (this.value === "sem1") {
        sem1Boxes.forEach(function(box) {
            box.classList.remove("hidden");
        });
        sem2Boxes.forEach(function(box) {
            box.classList.add("hidden");
        });
    } else {
        sem1Boxes.forEach(function(box) {
            box.classList.add("hidden");
        });
        sem2Boxes.forEach(function(box) {
            box.classList.remove("hidden");
        });
    }
});

const initialTranslateLTR = -48*4;
const initialTranslateRTL = 36*4;

function setupIntersectionObserver(element, isLTR, speed) {
    const intersectionCallback = (entries) => {
        const isIntersecting = entries[0].isIntersecting;
        if(isIntersecting) {
            document.addEventListener('scroll', scrollHandler);
        } else {
            document.removeEventListener('scroll', scrollHandler);
        }
    }
    const intersectionObserver = new IntersectionObserver(intersectionCallback);

    intersectionObserver.observe(element);

    function scrollHandler() {
        const translateX = (window.innerHeight - element.getBoundingClientRect().top) * speed;

        let totalTranslate = 0;
        if(isLTR) {
            totalTranslate = translateX + initialTranslateLTR;
        } else {
            totalTranslate = -(translateX + initialTranslateRTL);
        }

        element.style.transform = `translateX(${totalTranslate}px)`;
    }

}

const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');
const line3 = document.getElementById('line3');
const line4 = document.getElementById('line4');


setupIntersectionObserver(line1, true, 0.15);
setupIntersectionObserver(line2, false, 0.15);
setupIntersectionObserver(line3, true, 0.15);

setupIntersectionObserver(line4, true, 0.8);

const dtElements = document.querySelectorAll('dt');
dtElements.forEach(element => {
    element.addEventListener('click', () => {
        const ddId = element.getAttribute('aria-controls');
        const ddElement = document.getElementById(ddId);
        const ddArrowIcon = element.querySelectorAll('i')[0];

        ddElement.classList.toggle('hidden');
        ddArrowIcon.classList.toggle('-rotate-180');
    })
})