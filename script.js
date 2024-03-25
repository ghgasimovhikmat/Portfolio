document.addEventListener('DOMContentLoaded', function() {
  var filterBtns = document.getElementsByClassName('filter-btn');
  for (var btn of filterBtns) {
    btn.addEventListener('click', function() {
      var current = document.getElementsByClassName('active');
      if (current.length > 0) {
        current[0].className = current[0].className.replace(" active", "");
      }
      this.className += " active";
      var category = this.getAttribute('data-category');
      filterSelection(category);
    });
  }

  // Function to filter projects
  function filterSelection(category) {
    var projects = document.getElementsByClassName('project');
    for (var i = 0; i < projects.length; i++) {
      var project = projects[i];
      if (category === 'all') {
        project.style.display = "block";
      } else if (category === 'other') {
        if (!project.classList.contains('mvc') && !project.classList.contains('angular') && !project.classList.contains('java') &&!project.classList.contains('azure')) {
          project.style.display = "block";
        } else {
          project.style.display = "none";
        }
      } else {
        if (project.classList.contains(category)) {
          project.style.display = "block";
        } else {
          project.style.display = "none";
        }
      }
    }
  }

  // Initialize to show all projects
  filterSelection('all');
});
