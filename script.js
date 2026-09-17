// ============================================================
// TES 10 VIDÉOS
// ============================================================

const videos = [

    {
        id: 1,
        youtube: "v0JfA1s29oA",
        title: "baDDi3_z0N3"
    },

    {
        id: 2,
        youtube: "QXs85oZxO3A",
        title: "i_s33_sNak3S"
    },

    {
        id: 3,
        youtube: "rmjp6oRMLkQ",
        title: "L3anSp1LL"
    },

    {
        id: 4,
        youtube: "h6wMSm9dB0o",
        title: "pL4yaH"
    },

    {
        id: 5,
        youtube: "Qk7o7Izg8OA",
        title: "oFF_a_X"
    },

    {
        id: 6,
        youtube: "buUvuXJKCHA",
        title: "burnYOur3y3s"
    },

    {
        id: 7,
        youtube: "BrvVD87H-V0",
        title: "sP!T_It"
    },

    {
        id: 8,
        youtube: "w0OSgYWMAdY",
        title: "w1d3_B0dy"
    },

    {
        id: 9,
        youtube: "Zkdfd6jrxkY",
        title: "b0NNie_bLU3"
    },

    {
        id: 10,
        youtube: "RWNEre0E-5A",
        title: "s1NNr"
    }

];


// ============================================================
// FONCTION POUR CRÉER UNE MINIATURE
// ============================================================

function createVideoThumbnail(video, className) {

    const link = document.createElement("a");

    link.href = `video.html?id=${video.id}`;

    link.className = className;


    // CONTENEUR
    const thumbnail = document.createElement("div");

    thumbnail.className = "thumbnail";


    // IMAGE DE LA MINIATURE
    const image = document.createElement("img");

    image.src =
        `assets/thumbnails/${String(video.id).padStart(2, "0")}.jpg`;

    image.alt = "";


    // PNG PAR-DESSUS
    const overlay = document.createElement("img");

    overlay.src =
        "assets/thumbnail-overlay.png";

    overlay.className = "thumbnail-overlay";

    overlay.alt = "";


    // ASSEMBLAGE
    thumbnail.appendChild(image);

    thumbnail.appendChild(overlay);

    link.appendChild(thumbnail);


    // TITRE
    const title = document.createElement("p");

    title.className = "video-title";

    title.textContent = video.title;

    link.appendChild(title);


    return link;
}


// ============================================================
// PAGE D'ACCUEIL
// ============================================================

const homeVideoList =
    document.getElementById("home-video-list");


if (homeVideoList) {

    videos.forEach(video => {

        const thumbnail =
            createVideoThumbnail(
                video,
                "home-video"
            );

        homeVideoList.appendChild(thumbnail);

    });

}


// ============================================================
// PAGE VIDÉO
// ============================================================

const youtubeVideo =
    document.getElementById("youtube-video");


if (youtubeVideo) {

    const params =
        new URLSearchParams(
            window.location.search
        );


    let currentId =
        Number(params.get("id"));


    // SI L'ID N'EXISTE PAS → VIDÉO 1
    if (
        !currentId ||
        currentId < 1 ||
        currentId > videos.length
    ) {

        currentId = 1;

    }


    const currentVideo =
        videos.find(
            video => video.id === currentId
        );


    // YOUTUBE
    youtubeVideo.src =
        `https://www.youtube-nocookie.com/embed/${currentVideo.youtube}?rel=0`;

}


// ============================================================
// MINIATURES À DROITE DE LA VIDÉO
// ============================================================

const sideVideoList =
    document.getElementById("side-video-list");


if (sideVideoList) {

    videos.forEach(video => {

        const thumbnail =
            createVideoThumbnail(
                video,
                "side-video"
            );

        sideVideoList.appendChild(thumbnail);

    });

}
