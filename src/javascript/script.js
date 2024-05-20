document.getElementById('open_btn').addEventListener('click', function () {
    document.getElementById('sidebar').classList.toggle('open-sidebar');
});

const descriptions = document.querySelectorAll('.item-description');
descriptions.forEach(description => {
    description.addEventListener('transitionend', function() {
        if (!document.getElementById('sidebar').classList.contains('open-sidebar')) {
            this.classList.add('hidden');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
  const openBtn = document.getElementById('open_btn');
  const sidebar = document.getElementById('sidebar');

  openBtn.addEventListener('click', function() {
    sidebar.classList.toggle('closed');
    const icon = document.getElementById('open_btn_icon');
    if (sidebar.classList.contains('closed')) {
      icon.classList.remove('fa-chevron-left');
      icon.classList.add('fa-chevron-right');
    } else {
      icon.classList.remove('fa-chevron-right');
      icon.classList.add('fa-chevron-left');
    }
  });
});

