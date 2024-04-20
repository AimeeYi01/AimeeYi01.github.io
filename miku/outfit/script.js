let outfits = [];
let currentOutfitIndex = 0;
let originalOutfits = [];

function displayOutfit(index) {
    const outfit = outfits[index];
    document.getElementById('outfitName').textContent = outfit['Outfit name'];
    document.getElementById('style').innerHTML = `Style:<br>${outfit['Style']}`;
    document.getElementById('representativeSong').innerHTML = `Representative Song:<br>${outfit['Representative song']}`;
    document.getElementById('outfitImage').src = outfit['Image'];
  }
  


function prevOutfit() {
  currentOutfitIndex = (currentOutfitIndex - 1 + outfits.length) % outfits.length;
  displayOutfit(currentOutfitIndex);
}

function goHome() {
    window.location.href = "https://aimeeyi01.github.io/aimeeyi.github.io/miku/";
}

function nextOutfit() {
  currentOutfitIndex = (currentOutfitIndex + 1) % outfits.length;
  displayOutfit(currentOutfitIndex);
}


document.addEventListener('DOMContentLoaded', function () {
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      outfits = data;
      originalOutfits = data;
      displayOutfit(currentOutfitIndex);
    })
    .catch(error => console.error('Error fetching data:', error));

  const tags = document.querySelectorAll('.tag');
  tags.forEach(tag => {
    tag.addEventListener('click', function () {
      const filter = this.dataset.filter;
      outfits = originalOutfits.filter(outfit => filter === 'all' || outfit['Style'] === filter);
      if (outfits.length > 0) {
        currentOutfitIndex = 0;
        displayOutfit(currentOutfitIndex);
      } else {
        alert('No outfits found for this style.');
      }
    });
  });
});



  