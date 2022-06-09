async function sendData(url) {
    var loader = document.getElementById('loader').classList;
    loader.add('fadeIn');

    var user = document.getElementById('username').value;
    var usersNotFollowing = [];


    if (user) {
        // axios.post('http://localhost:3000/not-following-me', { username: user }).then(resp => {
        //     loader.remove('fadeIn');
        //     loader.add('fadeOut');
        // });

        const response = await axios.post('http://localhost:3000/' + url, { username: user });
        document.getElementById('results').innerHTML = '';
        loader.remove('fadeIn');
        loader.add('fadeOut');

        console.log(response.data);

        response.data.data.forEach(element => {
            document.getElementById('results').innerHTML += `<div class="result">
            <img class="result-avatar" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8c72a70-78b7-44d3-a8a4-56394e5e00c8/d2taw9m-b79d0827-d6c3-49c7-ad1f-b625f0e657a8.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2U4YzcyYTcwLTc4YjctNDRkMy1hOGE0LTU2Mzk0ZTVlMDBjOFwvZDJ0YXc5bS1iNzlkMDgyNy1kNmMzLTQ5YzctYWQxZi1iNjI1ZjBlNjU3YTguanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.4CTbdYTYj7jwechwXMzDqQhkILVRroZRDmmUJeGSZtI">
            <p class="result-username">@${element.username}</p>
            <p class="result-name">${element.full_name}</p>
            <a class="result-link" target="_blank" rel="noopener" href="https://instagram.com/${element.username}">Ver perfil</a>
        </div>`
        });


    }
}
