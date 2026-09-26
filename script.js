// ============================================================
// TES 10 VIDÉOS
// ============================================================
//test
const videos = [

    {
        id: 1,
        youtube: "v0JfA1s29oA",
        title: "baDDi3_z0N3",
        description: "9.9.9. lE sOl mAngE tOn oMbrE. tU nE l'A pAs vUe dEpUis 9 jOuRs. mAiS eLLe t'A vU. 9:09. 9:09. 9:09. iL n'Y a pAs d'AuTrE hEuRe.",
    },

    {
        id: 2,
        youtube: "QXs85oZxO3A",
        title: "i_s33_sNak3S",
        description: "ta bOucHe eSt uN cOrrIdoR. 9 pOrTeS. tOuTeS fErMéeS dE l'AuTrE cÔté. tU mArChes vErS lE bAs. 999 mArChes. lA 1000èMe existe ?",
    },

    {
        id: 3,
        youtube: "rmjp6oRMLkQ",
        title: "L3anSp1LL",
        description: "9 dEnTs. 9 dE 9. 99. 999. 9999. tU cOmPtes lEs dEntS dU mIrOiR. iL eN a uN dE mOiNs. tU eN aS uN dE mOiNs. qUi a pRiS l'AuTre?",
    },

    {
        id: 4,
        youtube: "h6wMSm9dB0o",
        title: "pL4yaH",
        description: "lE cIel eSt uN pLaFoNd. 9mm. iL dEsCend. tU nE dOrS pAs. tU n'As jAmAiS dOrMi. 9 vIes. 9 lIts. 9 dRaps tIèdEs. 9:09:09:09:09.",
    },

    {
        id: 5,
        youtube: "Qk7o7Izg8OA",
        title: "oFF_a_X",
        description: "9 gOuTtes. dU dEdAnS. sUr lA pAuPièRe. tU nE pEuX pAs cLiGnEr. tU nE pEuX pAs cRiEr. 999. 998. 997. lE mUr rEsPiRe. 9:09.",
    },

    {
        id: 6,
        youtube: "buUvuXJKCHA",
        title: "burnYOur3y3s",
        description: "lA rAdIo tE dIt tOn nOm. 9 fOiS. tU n'As pAs rEpOnDu. 9 fOiS. tU n'As pAs rEpOnDu. 9 fOiS. c'EsT lUi qUi rEpOnD à tA pLaCe. 9.",
    },

    {
        id: 7,
        youtube: "BrvVD87H-V0",
        title: "sP!T_It",
        description: "9 èMe éTaGe. pAs d'AScEnSeUr. jAmAiS eU d'AScEnSeUr. mAiS tOn cOrpS sE sOuVieNt d'EtRe mOnTé. 9 fOiS. 9 vIes. 9:09. eNcOrE.",
    },

    {
        id: 8,
        youtube: "w0OSgYWMAdY",
        title: "w1d3_B0dy",
        description: "lE 9 eSt uN tRoU. 0 eSt uN tRoU. tA bOucHe = 3 tRoUs. 9:09:09:09. 4 tRoUs. tU nE pEuX pAs cRiEr. iL écoute. iL a tOuJours écOuté. 9.",
    },

    {
        id: 9,
        youtube: "Zkdfd6jrxkY",
        title: "b0NNie_bLU3",
        description: "9 dRaps. 9 lIts. 9 cHambRes. tOuTeS tIèdEs. tOuTeS vIdEs. mAiS lE 9èMe eSt tIèDe dE l'AuTrE cÔté. tU n'Es pAs dU bOn cÔté. 9:09.",
    },

    {
        id: 10,
        youtube: "RWNEre0E-5A",
        title: "s1NNr",
        description: "tU dOrS dEbOuT. 9 h. 9 j. 9 v. lE sOl = tOn dOs. lE cIel = tOn vEnTre. 999 bAts. lE 1000èMe n'ESt pAs pOuR tOi. 9:09:09.",
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

const youtubeVideo = document.getElementById("youtube-video");

if (youtubeVideo) {

    const params = new URLSearchParams(window.location.search);

    let currentId = Number(params.get("id"));

    if (!currentId || currentId < 1 || currentId > videos.length) {
        currentId = 1;
    }

    const currentVideo = videos.find(video => video.id === currentId);

    // YOUTUBE
    youtubeVideo.src = `https://www.youtube-nocookie.com/embed/${currentVideo.youtube}?rel=0`;

    // TITRE + DESCRIPTION
    document.getElementById("gh-video-title").textContent = currentVideo.title;
    document.getElementById("gh-description-text").textContent = currentVideo.description;

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
      title: "baDDi3_z0N3",
      description:
        "9.9.9. lE sOl mAngE tOn oMbrE. tU nE l'A pAs vUe dEpUis 9 jOuRs. mAiS eLLe t'A vU. 9:09. 9:09. 9:09. iL n'Y a pAs d'AuTrE hEuRe.",
      likes: 0,
      dislikes: 0,
    },

    video2: {
      title: "i_s33_sNak3S",
      description:
        "ta bOucHe eSt uN cOrrIdoR. 9 pOrTeS. tOuTeS fErMéeS dE l'AuTrE cÔté. tU mArChes vErS lE bAs. 999 mArChes. lA 1000èMe existe ?",
      likes: 0,
      dislikes: 0,
    },

    video3: {
      title: "L3anSp1LL",
      description:
        "9 dEnTs. 9 dE 9. 99. 999. 9999. tU cOmPtes lEs dEntS dU mIrOiR. iL eN a uN dE mOiNs. tU eN aS uN dE mOiNs. qUi a pRiS l'AuTre?",
      likes: 0,
      dislikes: 0,
    },

    video4: {
      title: "pL4yaH",
      description:
        "lE cIel eSt uN pLaFoNd. 9mm. iL dEsCend. tU nE dOrS pAs. tU n'As jAmAiS dOrMi. 9 vIes. 9 lIts. 9 dRaps tIèdEs. 9:09:09:09:09.",
      likes: 0,
      dislikes: 0,
    },

    video5: {
      title: "oFF_a_X",
      description:
        "9 gOuTtes. dU dEdAnS. sUr lA pAuPièRe. tU nE pEuX pAs cLiGnEr. tU nE pEuX pAs cRiEr. 999. 998. 997. lE mUr rEsPiRe. 9:09.",
      likes: 0,
      dislikes: 0,
    },

    video6: {
      title: "burnYOur3y3s",
      description:
        "lA rAdIo tE dIt tOn nOm. 9 fOiS. tU n'As pAs rEpOnDu. 9 fOiS. tU n'As pAs rEpOnDu. 9 fOiS. c'EsT lUi qUi rEpOnD à tA pLaCe. 9.",
      likes: 0,
      dislikes: 0,
    },

    video7: {
      title: "sP!T_It",
      description:
        "9 èMe éTaGe. pAs d'AScEnSeUr. jAmAiS eU d'AScEnSeUr. mAiS tOn cOrpS sE sOuVieNt d'EtRe mOnTé. 9 fOiS. 9 vIes. 9:09. eNcOrE.",
      likes: 0,
      dislikes: 0,
    },

    video8: {
      title: "w1d3_B0dy",
      description:
        "lE 9 eSt uN tRoU. 0 eSt uN tRoU. tA bOucHe = 3 tRoUs. 9:09:09:09. 4 tRoUs. tU nE pEuX pAs cRiEr. iL écoute. iL a tOuJours écOuté. 9.",
      likes: 0,
      dislikes: 0,
    },

    video9: {
      title: "b0NNie_bLU3",
      description:
        "9 dRaps. 9 lIts. 9 cHambRes. tOuTeS tIèdEs. tOuTeS vIdEs. mAiS lE 9èMe eSt tIèDe dE l'AuTrE cÔté. tU n'Es pAs dU bOn cÔté. 9:09.",
      likes: 0,
      dislikes: 0,
    },

    video10: {
      title: "s1NNr",
      description:
        "tU dOrS dEbOuT. 9 h. 9 j. 9 v. lE sOl = tOn dOs. lE cIel = tOn vEnTre. 999 bAts. lE 1000èMe n'ESt pAs pOuR tOi. 9:09:09.",
      likes: 0,
      dislikes: 0,
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

    localStorage.setItem(CURRENT_VIDEO_KEY, currentId);
    renderVideo(currentId);

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
