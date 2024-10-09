const express = require('express');
const app = express();
const PORT = process.env.PORT || 3006;

// Serve static files from the "public" directory
app.use(express.static('public'));

// Setting up EJS as the templating engine
app.set('view engine', 'ejs');

// Mock data for fantasy manhwa
const manhwaList = [
    {
        "title": "The Gamer",
        "genre": "Action, Supernatural",
        "description": "A student gains the ability to live life as a game.",
        "image_url": "https://manwha.s3.amazonaws.com/the-gamer.jpg"
    },
    {
        "title": "Solo Leveling",
        "genre": "Action, Fantasy",
        "description": "A weak hunter discovers a hidden power that allows him to level up.",
        "image_url": "https://manwha.s3.amazonaws.com/IMAGES+MANWHA/solo-leveling.jpg"
    },
    {
        "title": "Tower of God",
        "genre": "Action, Adventure, Fantasy",
        "description": "A boy enters a mysterious tower to find a girl who means everything to him.",
        "image_url": "https://manwha.s3.amazonaws.com/IMAGES+MANWHA/tower-of-god.jpg"
    },
    {
        "title": "Noblesse",
        "genre": "Action, Supernatural",
        "description": "A powerful noble awakens from an 820-year slumber to face the modern world.",
        "image_url": "https://manwha.s3.amazonaws.com/IMAGES+MANWHA/noblesse.jpg"
    },
    {
        "title": "The Beginning After the End",
        "genre": "Action, Fantasy, Adventure",
        "description": "A reincarnated king strives to live a peaceful life in a world full of magic and beasts.",
        "image_url": "https://manwha.s3.amazonaws.com/IMAGES+MANWHA/the-beginning-after-the-end.jpg"
    },
    {
        "title": "Omniscient Reader",
        "genre": "Fantasy, Action, Adventure",
        "description": "An ordinary office worker finds himself in the world of his favorite web novel.",
        "image_url": "https://manwha.s3.amazonaws.com/IMAGES+MANWHA/omniscient-reader.jpg"
    },
    {
        "title": "Dungeon Reset",
        "genre": "Action, Adventure, Comedy",
        "description": "A player in a dungeon game gets reset, retaining his memory and abilities to start over.",
        "image_url": "https://manwha.s3.amazonaws.com/IMAGES+MANWHA/dungeon-reset.jpg"
    },
    {
        "title": "Ranker Who Lives a Second Time",
        "genre": "Action, Adventure, Fantasy",
        "description": "A man seeks to climb the tower in his quest for revenge after the death of his brother.",
        "image_url": "https://manwha.s3.amazonaws.com/IMAGES+MANWHA/ranker-second-time.jpg"
    },
    {
        "title": "A Returner's Magic Should Be Special",
        "genre": "Fantasy, Adventure, Action",
        "description": "A powerful mage travels back in time to save the world from destruction.",
        "image_url": "https://manwha.s3.amazonaws.com/IMAGES+MANWHA/returners-magic.jpg"
    },
    {
        "title": "Eleceed",
        "genre": "Action, Supernatural, Comedy",
        "description": "A man with quick reflexes and a cat-lover joins forces with a powerful boy to protect the world from evil forces.",
        "image_url": "https://manwha.s3.amazonaws.com/IMAGES+MANWHA/eleceed.jpg"
    },
    {
        "title": "The Legendary Moonlight Sculptor",
        "genre": "Action, Adventure, Fantasy",
        "description": "A poor man takes on a VR game to change his life, becoming the legendary Moonlight Sculptor.",
        "image_url": "https://manwha.s3.amazonaws.com/IMAGES+MANWHA/moonlight-sculptor.jpg"
    },
    {
        "title": "Rebirth of the Urban Immortal Cultivator",
        "genre": "Action, Fantasy, Supernatural",
        "description": "A powerful cultivator returns to his youth to rewrite his destiny in the modern world.",
        "image_url": "https://manwha.s3.amazonaws.com/IMAGES+MANWHA/urban-immortal-cultivator.jpg"
    }
];

// Route to display the list
app.get('/', (req, res) => {
    res.render('index', { manhwaList });
});

// Starting the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
