// Indicator Card Product
let tabHeader = document.getElementsByClassName("tabs-header")[0];
let tabBody = document.getElementsByClassName("tabs-body")[0];

let tabsPane = tabHeader.getElementsByTagName("div");

for (let i = 0; i < tabsPane.length; i++) {

    tabsPane[i].addEventListener("click", function () {
        tabHeader.getElementsByClassName("active")[0].classList.remove("active");
        tabsPane[i].classList.add("active");
        tabBody.getElementsByClassName("active")[0].classList.remove("active");
        tabBody.getElementsByTagName("div")[i].classList.add("active");

    });
};

// Search Product

let searchTimer = null; // Variabel untuk menyimpan timer

document.querySelector('#search-input').addEventListener('input', function() {
    clearTimeout(searchTimer); // Membersihkan timer sebelumnya (jika ada)

    searchTimer = setTimeout(function() {
        filterListDisplay();
        setTimeout(filterListOpacity, 100);
    }, 100); 
});

function filterListOpacity() {
    const searchInput = document.querySelector('#search-input');
    const filter = searchInput.value.toLowerCase();
    const listItems = document.querySelectorAll('.colBody');

    listItems.forEach((item) => {
        let text = item.textContent;
        if (text.toLowerCase().includes(filter)) {
            item.style.opacity = '1';
        } else {
            item.style.opacity = '0';
        }
    });
}

function filterListDisplay() {
    const searchInput = document.querySelector('#search-input');
    const filter = searchInput.value.toLowerCase();
    const listItems = document.querySelectorAll('.colBody');

    listItems.forEach((item) => {
        let text = item.textContent;
        if (text.toLowerCase().includes(filter)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
}

// Active NavLink
let sections = document.querySelectorAll('.section');
let navLinks = document.querySelectorAll('.bodyNavLink a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('.bodyNavLink a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};

// Function Is_fill in Search 
const bodySearch = document.querySelector('.bodySearch');
const searchInput = document.querySelector('.bodySearch .search');
const iconSearch = document.querySelector('.bodySearch .iconSearch');
searchInput.addEventListener('input', function () {
    if (this.value.trim() !== '') {
        this.classList.add('filled');
        iconSearch.classList.add('active');
        bodySearch.classList.add('active');
    } else {
        this.classList.remove('filled');
        iconSearch.classList.remove('active');
        bodySearch.classList.remove('active');
    }
});
