





document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('resourcesForm');
    const resultsCard = document.getElementById('resultsCard');
    const resourcesTable = document.getElementById('resourcesTable');
    

    const resourcesData = {
        "1": { // الصف الأول
            "math": {
                "1": [
                    { type: "مذكرة", name: "مذكرة الرياضيات الفصل الأول", date: "2023-09-15", link: "https://cdn.discordapp.com/attachments/1335632201244479580/1377336638732107836/a499b6c97318ef94ded5d4fc39e81a22.pdf?ex=68389834&is=683746b4&hm=b33618915273c97b7da10f60d7cbc7a431a90b57748b7cac33ee78ea3c2b345b&" },
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
