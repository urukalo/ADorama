document.addEventListener('DOMContentLoaded', () => {
  fetch('ads.json')
    .then(response => response.json())
    .then(ads => {
      const feed = document.getElementById('feed');
      ads.forEach(ad => {
        const adCard = document.createElement('div');
        adCard.className = 'ad-card';
        adCard.innerHTML = `
          <img src="${ad.url}" alt="${ad.title}" class="ad-image">
          <div class="ad-title">${ad.title}</div>
          <div class="ad-description">${ad.description}</div>
        `;
        feed.appendChild(adCard);
      });
    });
});
