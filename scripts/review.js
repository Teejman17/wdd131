let reviewCount = localStorage.getItem('reviewCount');

if (reviewCount == null) {
    reviewCount = 0;
}
else {
    reviewCount = parseInt(reviewCount);
}

reviewCount++;

localStorage.setItem('reviewCounter', reviewCount);
document.getElementById('reviewCount').textContent = reviewCount;