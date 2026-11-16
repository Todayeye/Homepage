/* 사진 클릭 시 확대 보기 */
(function () {
  var imgs = [].slice.call(document.querySelectorAll('.shot img, img[data-zoom]'));
  if (!imgs.length) return;
  var box = document.createElement('div');
  box.className = 'lightbox';
  box.setAttribute('role', 'dialog');
  box.setAttribute('aria-label', '사진 확대 보기');
  box.innerHTML = '<button class="lb-close" aria-label="닫기">×</button><button class="lb-prev" aria-label="이전 사진">‹</button><figure><img alt=""><figcaption></figcaption></figure><button class="lb-next" aria-label="다음 사진">›</button>';
  document.body.appendChild(box);
  var big = box.querySelector('img'), cap = box.querySelector('figcaption'), cur = 0;
  function show(i) {
    cur = (i + imgs.length) % imgs.length;
    var im = imgs[cur], fc = im.parentNode.querySelector('figcaption');
    big.src = im.currentSrc || im.src;
    big.alt = im.alt;
    cap.textContent = fc ? fc.textContent : '';
  }
  function open(i) { show(i); box.classList.add('on'); document.body.style.overflow = 'hidden'; }
  function close() { box.classList.remove('on'); document.body.style.overflow = ''; }
  imgs.forEach(function (im, i) {
    im.style.cursor = 'zoom-in';
    im.addEventListener('click', function () { open(i); });
  });
  if (imgs.length < 2) { box.querySelector('.lb-prev').style.display = box.querySelector('.lb-next').style.display = 'none'; }
  box.addEventListener('click', function (e) {
    if (e.target.classList.contains('lb-prev')) show(cur - 1);
    else if (e.target.classList.contains('lb-next')) show(cur + 1);
    else if (e.target !== big) close();
  });
  document.addEventListener('keydown', function (e) {
    if (!box.classList.contains('on')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') show(cur - 1);
    if (e.key === 'ArrowRight') show(cur + 1);
  });
})();
