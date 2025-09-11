document.addEventListener('DOMContentLoaded', function () {
  // After intro video ends, show main content and logo
  const intro = document.getElementById('logo-intro');
  const mainContent = document.getElementById('main-content');
  const companyLogo = document.getElementById('company-logo');
  const introVideo = intro.querySelector('video');

  introVideo.onended = () => {
    intro.style.display = 'none';
    mainContent.style.display = 'block';
    companyLogo.style.display = 'block';
  };

  // Video data
  const videos = [
    { title: "Project 1", video: "videos/bkash Story 01.mp4", size: "medium" },
    { title: "Project 2", video: "videos/bkash Story 02.mp4", size: "semiwide" },
    { title: "Project 2", video: "videos/bkash Story 02.mp4", size: "small" },
    { title: "Project 3", video: "videos/bkash Story 03.mp4", size: "wide" },
    { title: "Project 4", video: "videos/Daraz 99 26sec.mp4", size: "tall" },
    { title: "Project 5", video: "videos/Seylon 3D Pack.mp4", size: "large" },
    { title: "Project 2", video: "videos/bkash Story 02.mp4", size: "tall" },
    { title: "Project 2", video: "videos/bkash Story 02.mp4", size: "small" },
    { title: "Project 1", video: "videos/bkash Story 01.mp4", size: "medium" },
    { title: "Project 3", video: "videos/bkash Story 03.mp4", size: "semiwide" },
    { title: "Project 4", video: "videos/Daraz 99 26sec.mp4", size: "medium" },
    { title: "Project 5", video: "videos/Seylon 3D Pack.mp4", size: "sq" },
    { title: "Project 2", video: "videos/bkash Story 02.mp4", size: "small" },
    { title: "Project 1", video: "videos/bkash Story 01.mp4", size: "medium" },
    { title: "Project 2", video: "videos/bkash Story 02.mp4", size: "small" },
    { title: "Project 3", video: "videos/bkash Story 03.mp4", size: "small" },
    { title: "Project 4", video: "videos/Daraz 99 26sec.mp4", size: "tall" },
    { title: "Project 5", video: "videos/Seylon 3D Pack.mp4", size: "large" },
    { title: "Project 1", video: "videos/bkash Story 01.mp4", size: "medium" },
    { title: "Project 2", video: "videos/bkash Story 02.mp4", size: "small" },
    { title: "Project 3", video: "videos/bkash Story 03.mp4", size: "wide" },
    { title: "Project 4", video: "videos/Daraz 99 26sec.mp4", size: "tall" },
    { title: "Project 5", video: "videos/Seylon 3D Pack.mp4", size: "large" },
    { title: "Project 1", video: "videos/bkash Story 01.mp4", size: "medium" },
    { title: "Project 2", video: "videos/bkash Story 02.mp4", size: "small" },
    { title: "Project 3", video: "videos/bkash Story 03.mp4", size: "wide" },
    { title: "Project 4", video: "videos/Daraz 99 26sec.mp4", size: "tall" },
    { title: "Project 5", video: "videos/Seylon 3D Pack.mp4", size: "large" }
  ];

  // Generate thumbnail grid with video previews
  const thumbnailGrid = document.getElementById('thumbnail-grid');

  videos.forEach(videoData => {
    const thumbnail = document.createElement('div');
    thumbnail.className = `thumbnail ${videoData.size}`;

    const vid = document.createElement('video');
    vid.src = videoData.video;
    vid.muted = true;
    vid.preload = "metadata";
    vid.loop = true;

    // Play on hover
    thumbnail.addEventListener('mouseenter', () => vid.play());
    thumbnail.addEventListener('mouseleave', () => {
      vid.pause();
      vid.currentTime = 0;
    });

    // Open popup on click
    thumbnail.addEventListener('click', () => openVideoPopup(videoData.video));

    thumbnail.appendChild(vid);
    thumbnailGrid.appendChild(thumbnail);
  });

  // Video popup functionality
  const videoPopup = document.getElementById('video-popup');
  const popupVideo = document.getElementById('popup-video');
  const closeBtn = document.querySelector('.close-btn');

  function openVideoPopup(videoSrc) {
    popupVideo.src = videoSrc;
    videoPopup.style.display = 'flex';
    popupVideo.play();
  }

  function closeVideoPopup() {
    popupVideo.pause();
    popupVideo.src = '';
    videoPopup.style.display = 'none';
  }

  closeBtn.addEventListener('click', closeVideoPopup);

  videoPopup.addEventListener('click', (e) => {
    if (e.target === videoPopup) {
      closeVideoPopup();
    }
  });
});
