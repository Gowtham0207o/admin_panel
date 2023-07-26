// $(document).ready(function () {
//   // Activate tooltip
//   $('[data-toggle="tooltip"]').tooltip();

//   // Select/Deselect checkboxes
//   var checkbox = $('table tbody input[type="checkbox"]');
//   $("#selectAll").click(function () {
//     if (this.checked) {
//       checkbox.each(function () {
//         this.checked = true;
//       });
//     } else {
//       checkbox.each(function () {
//         this.checked = false;
//       });
//     }
//   });
//   checkbox.click(function () {
//     if (!this.checked) {
//       $("#selectAll").prop("checked", false);
//     }
//   });
// });

// Function to download the table as an Excel file
function downloadTableAsExcel() {
  const table = document.querySelector("table");
  const ws = XLSX.utils.table_to_sheet(table);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
  XLSX.writeFile(wb, "table_data.xlsx");
}

// Attach the download function to the button click event
// let ele = document.querySelector("#tabledownloadbtn")
// console.log(ele)
  // .addEventListener("click", downloadTableAsExcel);
$(document).ready(function() {
  $("#tabledownloadbtn").click(function() {
  downloadTableAsExcel();
  });
  });