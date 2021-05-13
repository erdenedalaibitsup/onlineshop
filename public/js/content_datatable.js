$(function () {
    function format(d) {
        return 'Full name: ' + d[0] + ' ' + d[1] + '<br>' +
            'Salary: ' + d[2] + '<br>' +
            'The child row can contain any data you wish, including links, images, inner tables etc.';
    }
    $("#example1").DataTable({
        "responsive": [
            'column', true
        ], "lengthChange": true, "autoWidth": false,

        "info": true,

        "buttons": ["copy", "csv", "excel", "pdf", "print", "colvis"]
    }).buttons().container().appendTo('#example1_wrapper .col-md-6:eq(0)');

    $("#typeTable").DataTable({
        "responsive": [
            'column', true
        ], "lengthChange": true, "autoWidth": false,

        "info": true,

        "buttons": ["copy", "csv", "excel", "pdf", "print", "colvis"]
    }).buttons().container().appendTo('#typeTable_wrapper .col-md-6:eq(0)');


    var dt = $("#orderTable").DataTable({
        "responsive": [
            'column', true
        ], "lengthChange": true, "autoWidth": false,

        "info": true,

        "buttons": ["copy", "csv", "excel", "pdf", "print", "colvis"]
    }).buttons().container().appendTo('#orderTable_wrapper .col-md-6:eq(0)');


    var detailRows = [];
    function test(gg) {
        console.log(gg);
    }
    $('#example1 tbody').on('click', 'tr td.details-control', function () {
        var tr = $(this).closest('tr');
        console.log(tr)
        let table_data = $('#example1').DataTable();
        var row = table_data.row(tr);
        var idx = $.inArray(tr.attr('id'), detailRows);
        console.log("onclicked" + +row.data()[2])
        if (row.child.isShown()) {
            tr.removeClass('details');
            row.child.hide();
            detailRows.splice(idx, 1);
        }
        else {
            tr.addClass('details');
            row.child.show();
            document.getElementById("hidden-control" + row.data()[2]).style.display = "block";
            row.child(document.getElementById("hidden-control" + row.data()[2])).show();
            if (idx === -1) {
                detailRows.push(tr.attr('id'));
            }
        }
    });

    // On each draw, loop over the `detailRows` array and show any child rows
    dt.on('draw', function () {
        $.each(detailRows, function (i, id) {
            $('#' + id + ' td.details-control').trigger('click');
        });
    });
});