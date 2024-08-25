// ดึงค่าจากช่องค้นหาเมื่อผู้ใช้คลิกปุ่มค้นหา
document.getElementById('search-button').addEventListener('click', function() {
    // นำค่าจากช่องค้นหามาเก็บในตัวแปร query และเปลี่ยนเป็นตัวพิมพ์เล็กทั้งหมดเพื่อให้ค้นหาได้ง่าย
    const query = document.getElementById('search-input').value.toLowerCase();
    
    // ตัวอย่างข้อมูลหนัง
    const movies = {
        'deadpool 3': {
            title: 'Deadpool & Wolverine',
            poster: '/Photo/Deadpool & Wolverine (2024).jpg',
            video: '/Video/deadpool_wolverine_trailer.mp4'
        },
        'alien': {
            title: 'ALIEN: ROMULUS (2024)',
            poster: '/Photo/ALIEN_ ROMULUS (2024) 🔥.jpg 2.jpg',
            video: '/Video/Alien Romurus.mp4'
        },
        'anong': {
            title: 'Anong',
            poster: '/Photo/anong 1.jpg 2.webp',
            video: '/Video/Anong.mp4'
        },
        'furiosa': {
            title: 'Furiosa A Mad Max Saga (2024)',
            poster: '/Photo/Furiosa A Mad Max Saga (2024).jpg 2.jpg',
            video: '/Video/Furiosa.mp4'
        },
        'a quiet place day one': {
            title: 'A quiet Place Day One (2024)',
            poster: '/Photo/A q 1.jpg 4.jpg',
            video: '/Video/A Quiet Place Day one.mp4'
        },
        'abigail': {
            title: 'Abigail (2024)',
            poster: '/Photo/ab 1.jpg',
            video: '/Video/Abigail.mp4'
        },
        'the crow': {
            title: 'The Crow (2024)',
            poster: '/Photo/Crow 1.jpg',
            video: '/Video/The Crow.mp4'
        },
        'deadpool': {
            title: 'Deadpool (2016)',
            poster: '/Photo/Deadpool 1.jpg',
            video: '/Video/Deadpool.mp4'
        },
        'deadpool 2': {
            title: 'Deadpool 2 (2018)',
            poster: '/Photo/Deadpool 2.jpg',
            video: '/Video/Deadpool 2.mp4'
        },
        'dune': {
            title: 'Dune',
            poster: '/Photo/Dune --1.jpg',
            video: '/Video/Dune 1.mp4'
        },

        'dune part two': {
            title: 'Dune Part Two',
            poster: '/Photo/Dune --2.jpg',
            video: '/Video/Dune Part 2.mp4'
        },
        'exhuma': {
            title: 'Exhuma (2024)',
            poster: '/Photo/Ex 1.jpg',
            video: '/Video/Exhuma.mp4'
        },
        'fall guy': {
            title: 'Fall Guy',
            poster: '/Photo/fall guy --1.jpg',
            video: '/Video/Fall Guy.mp4'
        },
        'kong': {
            title: 'Godzilla Versus Kong The New Emprie (2024)',
            poster: '/Photo/kong 1.jpg',
            video: '/Video/Kong.mp4'
        },
        'ghost': {
            title: 'GhostBuster Frozen Empire (2024)',
            poster: '/Photo/ghost 1.jpg',
            video: '/Video/Ghost.mp4'
        },
        'ma': {
            title: 'Ranhma (2024)',
            poster: '/Photo/ma 1.jpg',
            video: '/Video/Ma.mp4'
        },
        'kungfu': {
            title: 'Kungfu Panda 4 (2024)',
            poster: '/Photo/Panda 1.jpg',
            video: '/Video/Kungfu Panda 4.mp4'
        },
        'a hunting in venice': {
            title: 'A Hunting In Venice (2024)',
            poster: '/Photo/paoro 1.jpg',
            video: '/Video/A Hunting In Venice.mp4'
        },
        'supparoi': {
            title: 'Supparoi (2024)',
            poster: '/Photo/Supperroi.jpg',
            video: '/Video/Supa.mp4'
        },
        'trap': {
            title: 'Trap (2024)',
            poster: '/Photo/trap 1.jpg',
            video: '/Video/Trap.mp4'
        },
        'twisters': {
            title: 'Twisters (2024)',
            poster: '/Photo/Twisters Movie Poster.jpg 1.jpg',
            video: '/Video/Twisters.mp4'
        },
        'wiman': {
            title: 'Wimannuam (2024)',
            poster: '/Photo/Wiman.webp',
            video: '/Video/Wiman.mp4'
        },
        'term 3': {
            title: 'Term 3 (2024)',
            poster: '/Photo/term 3 -1.png',
            video: '/Video/Term 3.mp4'
        },
        
    };

    // ค้นหาหนังที่ตรงกับคำค้นหา
    if (movies[query]) {
        // ถ้าพบหนังที่ตรงกับคำค้นหา
        document.getElementById('movie-poster').src = movies[query].poster; // เปลี่ยนรูปภาพ
        document.getElementById('movie-video').src = movies[query].video; // เปลี่ยนวิดีโอ
    } else {
        // ถ้าไม่พบหนังที่ตรงกับคำค้นหา
        alert('Movie not found!');
    }
});
