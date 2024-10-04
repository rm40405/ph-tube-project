// 1 - fetch the load show and categories on html

// create load categories

const loagCategories = () => {
    // fetch data
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then((res)=> res.json())
    .then((data)=> showCategories(data.categories))
    .catch((err)=>console.log(err));
};

const showCategories = (categories) => {
    console.log(categories);
    const categoriesContainer = document.getElementById('categories');
    categories.forEach((item)=> {
        console.log(item)

        const button = document.createElement('button');
        button.classList = 'btn btn-primary';
        button.innerText = item.category;

        categoriesContainer.appendChild(button);
    })
}


// create call
loagCategories();