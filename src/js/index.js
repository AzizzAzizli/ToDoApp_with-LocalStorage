let toDoData = JSON.parse(localStorage.getItem("toDoData")) ?? [];
window.onload = function () {
  renderList();
  if (toDoData.length == 0) {
    $(".list").addClass("d-none");
    $(".clearBtn").addClass("d-none");
  } else {
    $(".list").removeClass("d-none");
    $(".clearBtn").removeClass("d-none");
  }
};
$("#addBtn").on("click", function () {
    if( $(".input").val()==""){
        alert("Please enter something")
        return
      }
    toDoData.push($(".input").val())
//   toDoData.push([$(".input").val(), false]);
  localStorage.setItem("toDoData", JSON.stringify(toDoData));
  // console.log(toDoData);
  $(".input").val("");
  renderList();
});

function renderList() {
  if (toDoData.length == 0) {
    $(".list").addClass("d-none");
    $(".clearBtn").addClass("d-none");
  } else {
    $(".list").removeClass("d-none");
    $(".clearBtn").removeClass("d-none");
  }
 

  $(".list").html(
    toDoData.map((el, index) => {
      return `<div class="d-flex w-100 gap-3">
    <li class="d-flex w-100 fs-5 fw-medium  ">${index + 1}) ${
        el
      }</li> <button class="btn btn-outline-danger" onclick="deleteItem(${index})">Delete</button> <button id="editBtn" onclick="showEditDiv('${el}',${index})" class="btn btn-outline-primary">Edit</button>
    </div>`;
    })
  );
}
function deleteItem(index) {
  toDoData = toDoData.filter((_, i) => i != index);
  localStorage.setItem("toDoData", JSON.stringify(toDoData));
  renderList();
}
$(".input").on("keydown", function (e) {
  if (e.key == "Enter") {
    if( $(".input").val()==""){
        alert("Please enter something")
        return
      }
    toDoData.push($(".input").val())

    // toDoData.push([$(".input").val(), false]);
    localStorage.setItem("toDoData", JSON.stringify(toDoData));
    $(".input").val("");
    renderList();
  }
});
function clearAll() {
  toDoData = [];
  localStorage.setItem("toDoData", JSON.stringify(toDoData));
  renderList();
}

// function lineThrough(element, index) {
//     element.classList.toggle("line-through-text");
//     toDoData[index][1] = !toDoData[index][1];
//     localStorage.setItem("toDoData", JSON.stringify(toDoData));
// }
// $(document).ready(function () {
//   $("#editBtn").on("click", function () {
  
//     showEditDiv()
//   });
// });

function showEditDiv(value,index){
    $("#editDiv").removeClass("d-none");

        $("#editInput").val(`${value}`)

        $("#saveBtn").off("click").on("click", function () {
            saveAndRender(index);
          });
      
}

$("#saveBtn").on("click", function(){


})

function saveAndRender(index){

  toDoData[index]= $("#editInput").val();
  localStorage.setItem("toDoData", JSON.stringify(toDoData));
  $("#editDiv").addClass("d-none");
  renderList();
}