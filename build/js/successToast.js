
$(function () {
    var Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000
      });
  
      $('.toastsDefaultSuccess').click(function() {
        $(document).Toasts('create', {
          class: 'bg-success',
          title: 'Амжилттай хадгалагдлаа',
          subtitle: '',
          body: 'Барааны жагсаалтанд харагдах болно.'
        })
      });
});
