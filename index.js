
function equalHeight(group) {
	var tallest = 0;
	group
		.each(function() {
			tallest = Math.max(tallest, $(this).height());
		})
		.height(tallest);
}
$(function() {
	equalHeight($('some class or id'));

});
