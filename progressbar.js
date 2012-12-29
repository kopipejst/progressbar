/**
 * ProgressBar for jQuery
 *
 * @version 1 (29. Dec 2012)
 * @author Ivan Lazarevic
 * @requires jQuery
 * @see http://workshop.rs
 *
 * @param  {Number} percent
 * @param  {Number} $element progressBar DOM element
 */
function progressBar(percent, $element) {
	var progressBarWidth = percent * $element.width() / 100;
	$element.find('div').animate({ width: progressBarWidth }, 500).html(percent + "%&nbsp;");
}