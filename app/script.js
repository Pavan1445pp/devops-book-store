let books = [

    {
        id: 1,
        title: "Clean Code",
        author: "Robert C. Martin",
        category: "Programming",
        price: 300,
        rating: 4.7,
        image: "https://covers.openlibrary.org/b/isbn/9780132350884-L.jpg"
    },

    {
        id: 2,
        title: "The Pragmatic Programmer",
        author: "David Thomas",
        category: "Programming",
        price: 450,
        rating: 4.8,
        image: "https://covers.openlibrary.org/b/isbn/9780135957059-L.jpg"
    },

    {
        id: 3,
        title: "Docker Deep Dive",
        author: "Nigel Poulton",
        category: "DevOps",
        price: 400,
        rating: 4.6,
        image: "https://covers.openlibrary.org/b/isbn/9781916585258-L.jpg"
    },

    {
        id: 4,
        title: "Kubernetes in Action",
        author: "Marko Luksa",
        category: "DevOps",
        price: 500,
        rating: 4.7,
        image: "https://covers.openlibrary.org/b/isbn/9781617293726-L.jpg"
    },

    {
        id: 5,
        title: "Terraform: Up & Running",
        author: "Yevgeniy Brikman",
        category: "DevOps",
        price: 550,
        rating: 4.7,
        image: "https://covers.openlibrary.org/b/isbn/9781098116743-L.jpg"
    },

    {
        id: 6,
        title: "AWS in Action",
        author: "Andreas Wittig",
        category: "Cloud Computing",
        price: 480,
        rating: 4.5,
        image: "https://covers.openlibrary.org/b/isbn/9781617295119-L.jpg"
    },

    {
        id: 7,
        title: "Learning React",
        author: "Alex Banks",
        category: "Web Development",
        price: 350,
        rating: 4.4,
        image: "https://covers.openlibrary.org/b/isbn/9781492051725-L.jpg"
    },

    {
        id: 8,
        title: "JavaScript: The Definitive Guide",
        author: "David Flanagan",
        category: "Web Development",
        price: 450,
        rating: 4.6,
        image: "https://covers.openlibrary.org/b/isbn/9781491952023-L.jpg"
    },

    {
        id: 9,
        title: "Learning SQL",
        author: "Alan Beaulieu",
        category: "Database",
        price: 320,
        rating: 4.5,
        image: "https://covers.openlibrary.org/b/isbn/9781492057611-L.jpg"
    },

    {
        id: 10,
        title: "Designing Data-Intensive Applications",
        author: "Martin Kleppmann",
        category: "Database",
        price: 600,
        rating: 4.9,
        image: "https://covers.openlibrary.org/b/isbn/9781449373320-L.jpg"
    },

    {
        id: 11,
        title: "Computer Networking",
        author: "James Kurose",
        category: "Networking",
        price: 550,
        rating: 4.7,
        image: "https://covers.openlibrary.org/b/isbn/9780136681557-L.jpg"
    },

    {
        id: 12,
        title: "Network Security Essentials",
        author: "William Stallings",
        category: "Cybersecurity",
        price: 420,
        rating: 4.4,
        image: "https://covers.openlibrary.org/b/isbn/9780134527338-L.jpg"
    },

    {
        id: 13,
        title: "Python Crash Course",
        author: "Eric Matthes",
        category: "Programming",
        price: 380,
        rating: 4.8,
        image: "https://covers.openlibrary.org/b/isbn/9781718502703-L.jpg"
    },

    {
        id: 14,
        title: "Automate the Boring Stuff with Python",
        author: "Al Sweigart",
        category: "Programming",
        price: 330,
        rating: 4.7,
        image: "https://covers.openlibrary.org/b/isbn/9781593279929-L.jpg"
    },

    {
        id: 15,
        title: "Hands-On Machine Learning",
        author: "Aurélien Géron",
        category: "AI & Machine Learning",
        price: 700,
        rating: 4.8,
        image: "https://covers.openlibrary.org/b/isbn/9781098125974-L.jpg"
    },

    {
        id: 16,
        title: "Deep Learning with Python",
        author: "François Chollet",
        category: "AI & Machine Learning",
        price: 650,
        rating: 4.7,
        image: "https://covers.openlibrary.org/b/isbn/9781617296864-L.jpg"
    }

];


let cart = [];

let total = 0;

let selectedCategory = "All";


// Display books

function displayBooks(bookList) {

    const container = document.getElementById("bookContainer");

    container.innerHTML = "";


    if (bookList.length === 0) {

        container.innerHTML = `
            <div class="no-books">
                <h2>No books found</h2>
                <p>Try changing your search or filters.</p>
            </div>
        `;

        return;
    }


    bookList.forEach(function(book) {

        const card = document.createElement("div");

        card.className = "book-card";


        card.innerHTML = `

            <img
                src="${book.image}"
                alt="${book.title}"
                onerror="this.src='https://via.placeholder.com/200x280?text=Book'"
            >

            <h3>${book.title}</h3>

            <p class="author">
                ${book.author}
            </p>

            <p class="rating">
                ⭐ ${book.rating}
            </p>

            <p class="price">
                ₹${book.price}
            </p>

            <button onclick="addToCart(${book.id})">
                Add to Cart
            </button>

        `;


        container.appendChild(card);

    });


    document.getElementById("bookCount").textContent =
        `Showing ${bookList.length} books`;

}


// Add to cart

function addToCart(bookId) {

    const book = books.find(function(book) {

        return book.id === bookId;

    });


    cart.push(book);

    updateCart();

}


// Update cart

function updateCart() {

    const cartElement = document.getElementById("cart");

    cartElement.innerHTML = "";

    total = 0;


    cart.forEach(function(book, index) {

        total = total + book.price;


        const item = document.createElement("li");

        item.innerHTML = `

            ${book.title} - ₹${book.price}

            <button onclick="removeFromCart(${index})">
                Remove
            </button>

        `;


        cartElement.appendChild(item);

    });


    document.getElementById("total").textContent = total;

    document.getElementById("cartCount").textContent = cart.length;

}


// Remove from cart

function removeFromCart(index) {

    cart.splice(index, 1);

    updateCart();

}


// Search + Filters

function filterBooks() {

    const searchText =
        document
        .getElementById("searchInput")
        .value
        .toLowerCase();


    const selectedCategories = Array.from(
        document.querySelectorAll(".category-filter:checked")
    ).map(function(checkbox) {

        return checkbox.value;

    });


    const priceFilter =
        document.querySelector(
            'input[name="price"]:checked'
        ).value;


    let filteredBooks = books.filter(function(book) {


        // Search

        const matchesSearch =
            book.title
            .toLowerCase()
            .includes(searchText)

            ||

            book.author
            .toLowerCase()
            .includes(searchText);


        // Category

        const matchesCategory =

            selectedCategories.length === 0

            ||

            selectedCategories.includes(book.category);


        // Price

        let matchesPrice = true;


        if (priceFilter === "under300") {

            matchesPrice = book.price < 300;

        }

        else if (priceFilter === "300-500") {

            matchesPrice =
                book.price >= 300 &&
                book.price <= 500;

        }

        else if (priceFilter === "above500") {

            matchesPrice = book.price > 500;

        }


        return (
            matchesSearch &&
            matchesCategory &&
            matchesPrice
        );

    });


    // Sorting

    const sort =
        document.getElementById("sortSelect").value;


    if (sort === "price-low") {

        filteredBooks.sort(function(a, b) {

            return a.price - b.price;

        });

    }


    if (sort === "price-high") {

        filteredBooks.sort(function(a, b) {

            return b.price - a.price;

        });

    }


    if (sort === "rating") {

        filteredBooks.sort(function(a, b) {

            return b.rating - a.rating;

        });

    }


    displayBooks(filteredBooks);

}


// Category buttons

function selectCategory(category) {

    selectedCategory = category;


    document
        .querySelectorAll(".category-filter")
        .forEach(function(checkbox) {

            checkbox.checked =
                checkbox.value === category;

        });


    if (category === "All") {

        document
            .querySelectorAll(".category-filter")
            .forEach(function(checkbox) {

                checkbox.checked = false;

            });

    }


    filterBooks();

}


// Initial display

displayBooks(books);