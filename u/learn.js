{
  const u = document.body.dataset.unit;
  const key = k => 'chk:' + u + ':' + k;
  for (const b of document.querySelectorAll('.cks button')) {
    try { if (localStorage.getItem(key(b.dataset.k))) b.classList.add('on'); } catch (e) {}
    b.setAttribute('aria-pressed', b.classList.contains('on'));
    b.addEventListener('click', () => {
      const on = b.classList.toggle('on');
      b.setAttribute('aria-pressed', on);
      try { on ? localStorage.setItem(key(b.dataset.k), '1') : localStorage.removeItem(key(b.dataset.k)); } catch (e) {}
    });
  }
}
{
  for (const b of document.querySelectorAll('.copy')) {
    b.addEventListener('click', async () => {
      const t = b.closest('.script').querySelector('.st').innerText;
      try { await navigator.clipboard.writeText(t); b.textContent = 'コピーしました'; }
      catch (e) { b.textContent = 'コピーできません'; }
      setTimeout(() => { b.textContent = 'コピー'; }, 1600);
    });
  }
}
