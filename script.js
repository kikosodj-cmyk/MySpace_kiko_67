// Add song titles here, this is what will be displayed on the website
const songs = [
  "Helena - My Chemical Romance",
  "King For A Day - Pierce The Veil ft. Kellin Quinn",
  "Choke - I DONT KNOW HOW THEY FOUND ME",
  "Hold On Till May - Pierce The Veil",
  "Self Control - Frank Ocean"
];

//Add the audio file name here, make sure capitilization matches.
const songRef = ["Helena MCR.mp3", "King for a Day Pierce The Veil.mp3",
   "I DONT KNOW HOW BUT THEY FOUND ME -Choke.mp3", "Pierce The Veil - Hold On Till May (Track 12).mp3",
  "Frank Ocean - Self Control.mp3"];

//Add image file names here.
const moiImages = [
  "youdothesame.jpg",
  "everythingsnotalright.jpg",


];

const audio = document.getElementById("audio-player");

let currentSong = 0,
  playing = false,
  progress = 0,
  timer;

function togglePlay() {
  if (!audio) return;
  playing = !playing;
  document.getElementById("play-btn").textContent = playing ? "⏸" : "▶";
  if (playing) {
    const p = audio.play();
    if (p !== undefined) p.catch(function () {});
  } else {
    audio.pause();
  }
}
document.addEventListener("DOMContentLoaded", function () {
  if (!audio) return;
  audio.addEventListener("timeupdate", function () {
    if (audio.duration) {
      document.getElementById("prog").style.width =
        (audio.currentTime / audio.duration) * 100 + "%";
    }
  });
  audio.addEventListener("ended", function () {
    playing = false;
    document.getElementById("play-btn").textContent = "▶";
    document.getElementById("prog").style.width = "0%";
  });
});
function nextSong() {
  currentSong = (currentSong + 1) % songs.length;
  document.getElementById("song-title").textContent = songs[currentSong];
  progress = 0;
  document.getElementById("prog").style.width = "0%";
  audio.src = "audios/" + songRef[currentSong];
  audio.play();
}
function prevSong() {
  currentSong = (currentSong - 1 + songs.length) % songs.length;
  document.getElementById("song-title").textContent = songs[currentSong];
  progress = 0;
  document.getElementById("prog").style.width = "0%";
  audio.src = "audios/" + songRef[currentSong];
  audio.play();
}

const friends = [
  { emoji: "🌹", name: "x_brokn_hrt_x" },
  { emoji: "💀", name: "sk8r_jake" },
  { emoji: "🌙", name: "moonchild99" },
  { emoji: "🎸", name: "punxnotdead" },
  { emoji: "🖤", name: "lonelystar_" },
  { emoji: "🐱", name: "meowrawr&lt;3" },
  { emoji: "🌸", name: "fallxngdown" },
  { emoji: "⚡", name: "electric_kai" },
];
const t8 = document.getElementById("top8");
friends.forEach((f) => {
  t8.innerHTML += `<div class="friend-cell" title="${f.name}"><div class="friend-avatar">${f.emoji}</div><div class="friend-name">${f.name}</div></div>`;
});

const seedComments = [
  {
    emoji: "🌙",
    name: "moonchild99",
    date: "Aug 27, 2005 9:42 PM",
    text: "KIKOO omg ur layout is so pretty!! the red leopard is giving everything 🖤🐆",
  },
  {
    emoji: "💀",
    name: "sk8r_jake",
    date: "Aug 26, 2005 4:18 PM",
    text: "ptv is literally life. vic fuentes could step on me. anyways hii 😭🖤",
  },
  {
    emoji: "🌹",
    name: "x_brokn_hrt_x",
    date: "Aug 26, 2005 11:55 PM",
    text: "bestie!! ur city lights photo is so so pretty. miss u come online 💔",
  },
];
let comments = [];
try {
  const saved = localStorage.getItem("sc3n3_comments");
  comments = saved ? JSON.parse(saved) : [...seedComments];
} catch (e) {
  comments = [...seedComments];
}

function saveComments() {
  try {
    localStorage.setItem("sc3n3_comments", JSON.stringify(comments));
  } catch (e) {}
}
function renderComments() {
  document.getElementById("comments-list").innerHTML = comments
    .map(
      (c) => `
    <div class="comment-box">
      <div class="comment-header">
        <div class="comment-avatar">${c.emoji}</div>
        <div class="comment-meta">
          <div class="comment-author">${c.name}</div>
          <div class="comment-date">${c.date}</div>
        </div>
      </div>
      <div class="comment-body">${c.text}</div>
    </div>`,
    )
    .join("");
}
renderComments();

function postComment() {
  const name =
    document.getElementById("commenter-name").value.trim() || "Anonymous";
  const text = document.getElementById("comment-text").value.trim();
  if (!text) {
    alert("Write something first!! 🖤");
    return;
  }
  const now = new Date();
  const emojis = ["😊", "🌙", "💀", "🖤", "🌹", "⚡", "🎸", "🌸", "🐰", "✦"];
  comments.unshift({
    emoji: emojis[Math.floor(Math.random() * emojis.length)],
    name,
    text,
    date:
      now.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }) +
      " " +
      now.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" }),
  });
  saveComments();
  renderComments();
  document.getElementById("commenter-name").value = "";
  document.getElementById("comment-text").value = "";
}

const sparkleEl = document.getElementById("sparkles");
for (let i = 0; i < 70; i++) {
  const s = document.createElement("div");
  s.className = "star";
  const colors = ["#fff", "#c0c0c0", "#cc0000", "#ff4444", "#aaa"];
  s.style.cssText = `left:${Math.random() * 100}%;top:${Math.random() * 100}%;--dur:${1.5 + Math.random() * 3}s;--delay:${Math.random() * 4}s;width:${Math.random() < 0.3 ? 3 : 2}px;height:${Math.random() < 0.3 ? 3 : 2}px;background:${colors[Math.floor(Math.random() * colors.length)]};`;
  sparkleEl.appendChild(s);
}

var galleryPhotos = [];
try {
  var _gp = localStorage.getItem("sc3n3_gallery");
  if (_gp) galleryPhotos = JSON.parse(_gp);
} catch (e) {}
function saveGallery() {
  try {
    localStorage.setItem("sc3n3_gallery", JSON.stringify(galleryPhotos));
  } catch (e) {}
}
function renderGallery() {
  var grid = document.getElementById("photo-grid");
  var empty = document.getElementById("gallery-empty");
  if (galleryPhotos.length === 0) {
    grid.innerHTML = "";
    empty.style.display = "block";
    return;
  }
  empty.style.display = "none";
  grid.innerHTML = galleryPhotos
    .map(function (p, i) {
      return (
        '<div style="position:relative;border:1px solid #440000;background:#0a0000;">' +
        '<img src="' +
        p.url +
        '" style="width:100%;aspect-ratio:1;object-fit:cover;display:block;" onerror="this.src=\'\';this.style.height=\'60px\'">' +
        (p.caption
          ? '<div style="font-size:9px;color:#999;padding:2px 3px;text-align:center;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;">' +
            p.caption +
            "</div>"
          : "") +
        '<button onclick="removePhoto(' +
        i +
        ')" style="position:absolute;top:2px;right:2px;background:rgba(0,0,0,0.7);border:1px solid #660000;color:#cc0000;font-size:8px;padding:1px 4px;cursor:pointer;display:none;" class="del-btn">✕</button>' +
        "</div>"
      );
    })
    .join("");
  if (sessionUnlocked) {
    document.querySelectorAll(".del-btn").forEach(function (b) {
      b.style.display = "block";
    });
  }
}

var sessionUnlocked = false;
function unlockGallery() {
  var pw = document.getElementById("gallery-pw").value;
  if (pw === "1090") {
    sessionUnlocked = true;
    document.getElementById("pw-gate").style.display = "none";
    document.getElementById("add-form").style.display = "block";
    document.getElementById("gallery-pw").value = "";
    renderGallery();
  } else {
    document.getElementById("gallery-pw").style.borderColor = "#cc0000";
    document.getElementById("gallery-pw").style.boxShadow = "0 0 6px #cc0000";
    setTimeout(function () {
      document.getElementById("gallery-pw").style.borderColor = "#440000";
      document.getElementById("gallery-pw").style.boxShadow = "none";
    }, 800);
  }
}

function addPhoto() {
  var url = document.getElementById("photo-url").value.trim();
  var cap = document.getElementById("photo-caption").value.trim();
  if (!url) return;
  galleryPhotos.unshift({ url: url, caption: cap });
  saveGallery();
  document.getElementById("photo-url").value = "";
  document.getElementById("photo-caption").value = "";
  renderGallery();
}

function removePhoto(i) {
  galleryPhotos.splice(i, 1);
  saveGallery();
  renderGallery();
}

renderGallery();
UpdateMoiImages();
function UpdateMoiImages() {
  console.log("Updating Moi Images...");
  const photoGrid = document.getElementById("photo-grid");
  var galleryEmpty = document.getElementById("gallery-empty");
  if (moiImages.length != 0) {
    galleryEmpty.style.display = "none";
    for (let i = 0; i < moiImages.length; i++) {
      var img = document.createElement("img"); // <img></img>
      img.src = "images/moi_img/" + moiImages[i];
      img.className = "moi-image";
      photoGrid.appendChild(img);
    }
    if (moiImages.length % 3 != 0) {
      for (let i = 0; i < 3 - (moiImages.length % 3); i++) {
        var emptyDiv = document.createElement("div");
        emptyDiv.className = "moi-image-empty";
        photoGrid.appendChild(emptyDiv);
      }
    }
  } else {
    galleryEmpty.style.display = "block";
  }
}
