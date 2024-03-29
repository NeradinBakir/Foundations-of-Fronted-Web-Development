function sortTable(colIndex) {
    var table = document.getElementById("myTable");
    var rows = Array.from(table.rows).slice(1); 
    var sortOrder = 1;

    rows.sort((a, b) => {
        var cellA = a.cells[colIndex].textContent.trim().toLowerCase();
        var cellB = b.cells[colIndex].textContent.trim().toLowerCase();
        if (cellA < cellB) return -1 * sortOrder;
        if (cellA > cellB) return 1 * sortOrder;
        return 0;
    });

   
    if (table.rows[1] === rows[0]) {
        rows.reverse();
    }

  
    rows.forEach(row => table.appendChild(row));
}
function openModal() {
    
    var modal = document.getElementById("myModal");
  
    modal.style.display = "block";

   
    var span = document.getElementsByClassName("close")[0];

   
    span.onclick = function() {
        modal.style.display = "none";
    }

    
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}