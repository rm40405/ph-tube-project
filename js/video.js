// 1 - fetch the load show and categories on html



// create load categories

const loadCategories = () => {
    // fetch data
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then((res)=> res.json())
    .then((data)=> showCategories(data.categories))
    .catch((err)=>console.log(err));
};
// fetch 2
const loadVideos = () => {
    // fetch data
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then((res)=> res.json())
    .then((data)=> showVideos(data.videos))
    .catch((err)=>console.log(err));
};

// const cardDemo = {
//     "category_id": "1001",
//     "video_id": "aaaa",
//     "thumbnail": "https://i.ibb.co/L1b6xSq/shape.jpg",
//     "title": "Shape of You",
//     "authors": [
//         {
//             "profile_picture": "https://i.ibb.co/D9wWRM6/olivia.jpg",
//             "profile_name": "Olivia Mitchell",
//             "verified": ""
//         }
//     ],
//     "others": {
//         "views": "100K",
//         "posted_date": "16278"
//     },
//     "description": "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey."
// }


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
const showVideos = (videos) =>{
    const videoContainer = document.getElementById('videos');
    videos.forEach((video)=> {
        console.log(video)
        const div = document.createElement('div');
        div.classList = 'card card-compact ';
        div.innerHTML = `
  <figure>
    <img
    class="w-[300px] h-[200px]"
      src=${video.thumbnail}
     />
  </figure>
  <div class="px-0 py-2 flex gap-2">
     <div>
     <img class="w-10 h-10 rounded-full" src=${video.authors[0].profile_picture} />

     </div>
     <div>
       <h3 class="font-bold text-black text-xl">${video.title}</h3>
      <div>
       <p class="text-gray-400 text-sx">${video.authors[0].profile_name}</p>
       <img src= />
      </div>
     </div>
   
  </div>
        
        
        `;

       videoContainer.appendChild(div);     
    })
}

// create call
loadCategories();
loadVideos();