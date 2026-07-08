function toggleLanguage() {
    const kh = document.getElementById('content-kh');
    const en = document.getElementById('content-en');
    
    if (kh.style.display === 'none') {
        kh.style.display = 'block';
        en.style.display = 'none';
    } else {
        kh.style.display = 'none';
        en.style.display = 'block';
    }
}
