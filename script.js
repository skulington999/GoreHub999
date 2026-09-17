// ============================================================
// TES 10 VIDÉOS
// ============================================================

const videos = [

    {
        id: 1,
        youtube: v0JfA1s29oA
    },

    {
        id: 2,
        youtube: QXs85oZxO3A
    },

    {
        id: 3,
        youtube: rmjp6oRMLkQ
    },

    {
        id: 4,
        youtube: h6wMSm9dB0o
    },

    {
        id: 5,
        youtube: Qk7o7Izg8OA
    },

    {
        id: 6,
        youtube: buUvuXJKCHA
    },

    {
        id: 7,
        youtube: BrvVD87H-V0
    },

    {
        id: 8,
        youtube: w0OSgYWMAdY
    },

    {
        id: 9,
        youtube: Zkdfd6jrxkY
    },

    {
        id: 10,
        youtube: RWNEre0E-5A
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
