const resources = JSON.parse(localStorage.getItem('resourcesCache')) || [];

document.getElementById('resourcesForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // استخدام البيانات من localStorage بدلاً من الثوابت
});