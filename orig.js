function addButton(){
	const button = `
		<div class="row">
			<div class="col-md-12 text-center">
				<div class="btn-group" data-toggle="buttons">
				    <label class="btn btn-default btn-sm">
				        <input type="radio" name="score-value" value="0" required=""> 0
				    </label>
				    <label class="btn btn-default btn-sm">
				        <input type="radio" name="score-value" value="1" required=""> 1
				    </label>
				    <label class="btn btn-default btn-sm">
				        <input type="radio" name="score-value" value="2" required=""> 2
				    </label>
				    <label class="btn btn-default btn-sm">
				        <input type="radio" name="score-value" value="3" required=""> 3
				    </label>
				    <label class="btn btn-default btn-sm">
				        <input type="radio" name="score-value" value="4" required=""> 4
				    </label>
				    <label class="btn btn-default btn-sm active">
				        <input type="radio" name="score-value" value="5" required=""> 5
				    </label>
				</div>
			</div>

			<div class="col-md-12 text-center"><br></div>

			<div class="col-md-12 text-center">
				<button class="btn btn-primary" id="btnGenerateScore">generate score</button>
			</div>
		</div>`;

	const URL_FORM = "https://akademik.polban.ac.id/kuisoner/form";

	if (window.location.href == URL_FORM){
		$('.sidebar-menu').append(button);

		$('#btnGenerateScore').on('click', function (){
			const score = $('input[name="score-value"]:radio:checked').val();
			generateScore(score);
		});
	}
}

function generateScore(point){
	const pointId = toPointId(point);

	$('.stepwizard-row.setup-panel > .stepwizard-step > a').each(function (){ $(this).removeAttr('disabled');});
	$(`input[type="radio"]#q${pointId}`).each(function (){ $(this).click();});
	$($('.stepwizard-step')[$('.stepwizard-step').length-1]).find('a').click();
}

function toPointId(point){
	const DEFAULT_POINT_ID = 158;
	const INITIAL_POINT_ID = 155;

	return isValidPoint(point) ? (INITIAL_POINT_ID + parseInt(point)) : DEFAULT_POINT_ID;
}

function isValidPoint(point){
	const MIN_POINT = 0;
	const MAX_POINT = 5;

	return Number.isInteger(parseInt(point)) && (point >= MIN_POINT && point <= MAX_POINT);
}

addButton();
