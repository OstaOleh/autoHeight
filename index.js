var k = jQuery.noConflict();

function equalHeight(group) {
	var tallest = 0;
	group.each(function() {
		thisHeight = k(this).height();
		if (thisHeight > tallest) {
			tallest = thisHeight;
		}
	});
	group.height(tallest);
}
k(document).ready(function() {
	equalHeight(k("some class or id"));
	equalHeight(k("some class or id"));

});