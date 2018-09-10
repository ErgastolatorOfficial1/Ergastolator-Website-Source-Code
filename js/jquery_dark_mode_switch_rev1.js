 $(document).ready(function() {
    $(".toggle_dark_mode").click(function() {
        $("body").toggleClass("body_dark v12_body_dark");
        $(".content.v12_content").toggleClass("dark v12_dark");
    });
});