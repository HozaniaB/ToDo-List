$(document).ready(function () {
  getSaveTasks();

  // Add task
  $("#addTaskBtn").on("click", function () {
    var taskText = $("#taskInput").val();
    if (taskText.length > 0) {
      addTask(taskText);
      saveTasks();
      $("#taskInput").val("");
    }
  });

  // Function para add uma task
  function addTask(text) {
    $("#taskList").append("<li><span>&times;</span>" + text + "</li>");
  }

  // Marcar task como concluída
  $(document).on("click", "li", function () {
    $(this).toggleClass("completed");
    saveTasks();
  });

  // Removendo umas Task
  $(document).on("click", "span", function (e) {
    e.stopPropagation(); //Para não afetar o evento pai (li)
    $(this)
      .parent()
      .fadeOut(500, function () {
        $(this).remove();
        saveTasks();
      });
  });

  // Function salvando tasks localmente
  function saveTasks() {
    var tasks = $("#taskList").html();
    localStorage.setItem("tasks", tasks); //funciona como uma API para armazenar dados no navegador do usuário
  }

  // Function para recuperar as taks salvas
  function getSaveTasks() {
    var tasks = localStorage.getItem("tasks");
    if (tasks) {
      $("#taskList").html(tasks);
    }
  }
});
