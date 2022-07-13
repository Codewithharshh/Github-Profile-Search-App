const input = document.querySelector('.username-input');
let search_btn = document.querySelector('.search-btn');
const info_div = document.querySelector('.info-div');

let getData = () => {
let input_value = input.value;
let url = `https://api.github.com/users/${input_value}`;
        if (input_value != '') {

fetch(url).then((resp) => resp.json()).then((data) => {
const dateData = data.created_at.slice(0, data.created_at.length - 10);
const location = data.location === "" || data.location === null ? 'No location' : data.location;
const twitter = data.twitter_username === "" || data.twitter_username === null ? 'No Twitter' : data.twitter_username;
const website = data.blog === "" || data.blog === null ? 'No Website' : data.blog;
const company = data.company === "" || data.company === null ? 'No Company' : data.company;
const bio = data.bio === "" || data.bio === null ? 'This profile has no bio' : data.bio;

info_div.innerHTML = `<img src="${data.avatar_url}" alt="" />

<div class="user-name-details">
<h3>${data.name}</h3>  
<h6>@${data.login}</h6>
<span>Join date ${dateData}</span>
</div>

<p class="bio">${bio}</p>

<div class="user-profile">
        <div>
          <h3>${data.public_repos}</h3>
          <span>Repos</span>   
        </div>
        
        <div>
         <h3>${data.followers}</h3>
         <span>Followers</span> 
        </div>
        
        <div>
         <h3>${data.following}</h3>
        <span>Following</span>  
        </div>
</div>

   <div class="user-other-details">
           <p><i class="fa-solid fa-building"></i> ${company}</p>
           <p><i class="fa-solid fa-location-pin"></i> ${location} </p>
           <p><i class="fa-solid fa-link"></i> ${website}</p>
           <p><i class="fa-brands fa-twitter"></i> ${twitter}</p>
   </div>`;
  }).catch(()=>{
   info_div.innerHTML = `<h3 class="message">Error Occured</h3>`; 
  })
 }
}

search_btn.addEventListener('click', getData);
window.addEventListener('load', getData);
