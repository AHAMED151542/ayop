





document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('resourcesForm');
    const resultsCard = document.getElementById('resultsCard');
    const resourcesTable = document.getElementById('resourcesTable');
    

    const resourcesData = {
        "1": { // الصف الأول
            "math": {
                "1": [
                    { type: "مذكرة", name: "مذكرة الرياضيات الفصل الأول", date: "2023-09-15", link: "https://newmoesitev2.blob.core.windows.net/files/moelibrarymedia/02061914-cc5f-477e-a4ce-12c8a90abf14.pdf" },
                    { type: "اختبار", name: "اختبار الفصل الأول", date: "2023-10-20", link: "#" }
                ],
                "2": [
                    { type: "مذكرة", name: "مذكرة الرياضيات الفصل الثاني", date: "2023-12-10", link: "#" }
                ]
            }
        },
        "2": { // الصف الثاني
            "science": {
                "1": [
                    { type: "مذكرة", name: "ملخص العلوم الفصل الأول", date: "2023-09-20", link: "#" }
                ]
            }
        }
    };
    
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const grade = document.getElementById('grade').value;
        const subject = document.getElementById('subject').value;
        const semester = document.getElementById('semester').value;
        
       
        resourcesTable.innerHTML = '';
        
      
        if (resourcesData[grade] && resourcesData[grade][subject] && resourcesData[grade][subject][semester]) {
            const resources = resourcesData[grade][subject][semester];
            
            resources.forEach(resource => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${resource.type}</td>
                    <td>${resource.name}</td>
                    <td>${resource.date}</td>
                    <td><a href="${resource.link}" class="btn btn-sm btn-success download-btn">تحميل</a></td>
                `;
                resourcesTable.appendChild(row);
            });
            
            resultsCard.classList.remove('d-none');
        } else {
            alert('لا توجد موارد متاحة للاختيارات المحددة');
        }
    });
});


const checkbox = document.getElementById('checkbox');

window.addEventListener('DOMContentLoaded', () => {
  const darkMode = localStorage.getItem('darkMode') === 'true';
  checkbox.checked = !darkMode;
  if (darkMode) {
    document.body.classList.add('dark-mode');
  }
});


checkbox.addEventListener('change', () => {
  if (!checkbox.checked) {  
    document.body.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'true');
  } else {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('darkMode', 'false');
  }
});
function updateUI(isDark) {
  if (isDark) {
    document.body.classList.add('dark-mode');

  } else {
    document.body.classList.remove('dark-mode');

  }
}



document.getElementById("studentbuttoninindex").addEventListener("click", function () {
  window.location.href = "students.html"; // استبدل باسم صفحتك
});

document.getElementById("aboutbuttoninindex").addEventListener("click", function () {
  window.location.href = "about.html"; // استبدل باسم صفحتك
});

document.getElementById("contactwithusonindex").addEventListener("click", function () {
  window.location.href = "contact.html"; // استبدل باسم صفحتك
});
