// Different effects for showing and closing modal
let fadeIn = 'slideInRight';
let fadeOut = 'slideOutRight';

// On show
$('#myModal').on('show.bs.modal', function () {
$(this).removeClass(fadeOut);
$(this).addClass(fadeIn);
});

// On closing
$('#myModal').on('hide.bs.modal', function (e) {
let $this = $(this);

// Check whether the fade in class still exists in this modal
// if this class is still exists prevent this modal
// to close immediately by setting up timeout, and replace
// the fade in class with fade out class.
if ($this.hasClass(fadeIn)) {
    $this.removeClass(fadeIn);
    $this.addClass(fadeOut);
    e.preventDefault();

    setTimeout(function () {
        $this.modal('hide');
    }); // the default delays from animate.css is 1s
}
});
