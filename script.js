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
/*
 GOREHUB — INTERACTIVE LAYER
 --------------------------------
 Tout ce que tu veux personnaliser est regroupé dans VIDEO_DATA.

 Pour changer de vidéo, ton code existant peut appeler:
     GorehubUI.setVideo("video2");

 Les likes/dislikes et commentaires ajoutés sont sauvegardés dans localStorage.
*/

(() => {
  "use strict";

  const VIDEO_DATA = {
    video1: {
      title: "6 bumY0ur3y3s",
      description:
        "Une vidéo de Gorehub.\\n\\nDescription personnalisable : remplace ce texte directement dans VIDEO_DATA.",
      likes: 137,
      dislikes: 12,
    },

    video2: {
      title: "be9bD_3N3",
      description:
        "Description de la deuxième vidéo.\\nTu peux mettre autant de texte que nécessaire.",
      likes: 82,
      dislikes: 7,
    },

    video3: {
      title: "n_33_uhk5",
      description:
        "Description de la troisième vidéo.",
      likes: 54,
      dislikes: 9,
    },

    video4: {
      title: "I3onSpILL",
      description:
        "Description de la quatrième vidéo.",
      likes: 31,
      dislikes: 4,
    },

    video5: {
      title: "eK4y9H",
      description:
        "Description de la cinquième vidéo.",
      likes: 61,
      dislikes: 3,
    },

    video6: {
      title: "b4dd1e_9x",
      description:
        "Description de la sixième vidéo.",
      likes: 45,
      dislikes: 6,
    },

    video7: {
      title: "9MI_1u",
      description:
        "Description de la septième vidéo.",
      likes: 20,
      dislikes: 2,
    },

    video8: {
      title: "v3l_B0by",
      description:
        "Description de la huitième vidéo.",
      likes: 94,
      dislikes: 11,
    },

    video9: {
      title: "nobody_came_for_me",
      description:
        "Description de la neuvième vidéo.",
      likes: 66,
      dislikes: 5,
    },

    video10: {
      title: "s0nn",
      description:
        "Description de la dixième vidéo.",
      likes: 39,
      dislikes: 8,
    },
  };

  const STORAGE_KEY = "gorehub_interactions_v1";
  const CURRENT_VIDEO_KEY = "gorehub_current_video";

  const state = loadState();

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch (error) {
      console.warn("Gorehub: impossible de lire localStorage.", error);
      return {};
    }
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (error) {
      console.warn("Gorehub: impossible de sauvegarder localStorage.", error);
    }
  }

  function getCurrentVideoId() {
    return localStorage.getItem(CURRENT_VIDEO_KEY) || "video1";
  }

  function getVideo(videoId) {
    return VIDEO_DATA[videoId] || VIDEO_DATA.video1;
  }

  function getInteraction(videoId) {
    if (!state[videoId]) {
      state[videoId] = {
        myVote: null,
        addedComments: []
      };
    }

    return state[videoId];
  }

  function formatDate(timestamp) {
    return new Intl.DateTimeFormat("fr-FR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    }).format(new Date(timestamp));
  }

  function updateCommentCount() {
    const list = document.getElementById("gh-comment-list");
    const count = document.getElementById("gh-comment-count");

    if (!list || !count) return;
    count.textContent = String(list.children.length);
  }

  function renderAddedComments(videoId) {
    const list = document.getElementById("gh-comment-list");
    if (!list) return;

    list.innerHTML = "";

    const interaction = getInteraction(videoId);

    interaction.addedComments.forEach((comment) => {
      const item = document.createElement("article");
      item.className = "gh-comment";

      const avatar = document.createElement("div");
      avatar.className = "gh-comment-avatar";
      avatar.textContent = (comment.name || "U").trim().charAt(0).toUpperCase();

      const content = document.createElement("div");

      const user = document.createElement("div");
      user.className = "gh-comment-user";
      user.textContent = comment.name;

      const body = document.createElement("div");
      body.className = "gh-comment-body";
      body.textContent = comment.text;

      const date = document.createElement("div");
      date.className = "gh-comment-date";
      date.textContent = formatDate(comment.timestamp);

      content.append(user, body, date);
      item.append(avatar, content);
      list.appendChild(item);
    });

    updateCommentCount();
  }

  function renderVideo(videoId) {
    const video = getVideo(videoId);
    const interaction = getInteraction(videoId);

    const title = document.getElementById("gh-video-title");
    const description = document.getElementById("gh-description-text");
    const likeCount = document.getElementById("gh-like-count");
    const dislikeCount = document.getElementById("gh-dislike-count");
    const likeButton = document.getElementById("gh-like");
    const dislikeButton = document.getElementById("gh-dislike");

    if (title) title.textContent = video.title;
    if (description) description.textContent = video.description;

    if (likeCount) {
      likeCount.textContent = String(video.likes + (interaction.myVote === "like" ? 1 : 0));
    }

    if (dislikeCount) {
      dislikeCount.textContent = String(
        video.dislikes + (interaction.myVote === "dislike" ? 1 : 0)
      );
    }

    if (likeButton) {
      likeButton.setAttribute("aria-pressed", String(interaction.myVote === "like"));
    }

    if (dislikeButton) {
      dislikeButton.setAttribute(
        "aria-pressed",
        String(interaction.myVote === "dislike")
      );
    }

    renderAddedComments(videoId);
  }

  function setupShowMore() {
    const button = document.getElementById("gh-show-more");
    const box = document.getElementById("gh-description");

    if (!button || !box) return;

    button.addEventListener("click", () => {
      const isOpen = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!isOpen));
      box.hidden = isOpen;
    });
  }

  function setupVotes() {
    const likeButton = document.getElementById("gh-like");
    const dislikeButton = document.getElementById("gh-dislike");

    if (likeButton) {
      likeButton.addEventListener("click", () => {
        const videoId = getCurrentVideoId();
        const interaction = getInteraction(videoId);

        interaction.myVote = interaction.myVote === "like" ? null : "like";
        saveState();
        renderVideo(videoId);
      });
    }

    if (dislikeButton) {
      dislikeButton.addEventListener("click", () => {
        const videoId = getCurrentVideoId();
        const interaction = getInteraction(videoId);

        interaction.myVote = interaction.myVote === "dislike" ? null : "dislike";
        saveState();
        renderVideo(videoId);
      });
    }
  }

  function setupComments() {
    const form = document.getElementById("gh-comment-form");
    const nameInput = document.getElementById("gh-comment-name");
    const textInput = document.getElementById("gh-comment-text");

    if (!form || !nameInput || !textInput) return;

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const name = nameInput.value.trim();
      const text = textInput.value.trim();

      if (!name || !text) return;

      const videoId = getCurrentVideoId();
      const interaction = getInteraction(videoId);

      interaction.addedComments.push({
        name,
        text,
        timestamp: Date.now()
      });

      saveState();
      textInput.value = "";
      renderAddedComments(videoId);
    });
  }

  function setVideo(videoId) {
    if (!VIDEO_DATA[videoId]) {
      console.warn(`Gorehub: vidéo inconnue "${videoId}"`);
      return;
    }

    localStorage.setItem(CURRENT_VIDEO_KEY, videoId);
    renderVideo(videoId);

    // Quand on change de vidéo, on referme "afficher plus".
    const button = document.getElementById("gh-show-more");
    const box = document.getElementById("gh-description");

    if (button) button.setAttribute("aria-expanded", "false");
    if (box) box.hidden = true;
  }

  window.GorehubUI = {
    setVideo,
    getVideoData: () => VIDEO_DATA,
  };

  document.addEventListener("DOMContentLoaded", () => {
    setupShowMore();
    setupVotes();
    setupComments();
    renderVideo(getCurrentVideoId());
  });
})();
