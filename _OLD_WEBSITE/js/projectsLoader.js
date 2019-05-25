$(document).ready(function () {
	let projectsHtml = "";
	projectsHtml += '<div class="row pb-4 card-deck">';
	$.getJSON("../projectsData.json", function (data, textStatus, jqXHR) {
		$.each(data, function (index, project) {
			projectsHtml += parseHtmlRow(project);
		});

		projectsHtml += `</div>`
		$("#projectsList").html(projectsHtml);

	});
});


function parseHtmlRow(project, color) {
	let badges = "";
	project.badges.forEach(b => {
		badges += `<span class="badge badge-info ml-1">${b}</span>`;
	});


	// Check if the project has a website 
	let hasWebsite = project.siteUrl == "#" ? false : true;
	// Will set View Site button to disabled state
	let btnDisable = hasWebsite ? "" : "disabled";

	return `			

		<div class="col-md-6">
			<div class="card mb-4">
				<h4 class="card-header text-center bg-gray text-white">
				${project.name}
				</h4>
				<div class="card-body row">
					<div class="col">
						<h5 class="card-title font-weight-bold">${project.header}</h5>
						<div class="pb-2">
						   ${badges}
						</div>
						<p class="card-text">
							${project.text}
						</p>
					</div>	
				</div>
				<div class="card-footer">	
					<a href="${project.siteUrl}" target="_blank">
						<button class="btn btn-darkPrimary btn-lg btn-block mb-2" ${btnDisable}>
							View Site
						</button>
					</a>
					<a href="${project.sourceUrl}" target="_blank">
						<button class="btn btn-info btn-lg btn-block">
							Source Code
						</button>
					</a>
				</div>
			</div>
		</div>`;
}

$(document).ready(function () {
	$("#modalCopyBtn").tooltip({
		placement: "bottom",
		title: "Copied!",
		trigger: "click"
	});


	new ClipboardJS('.btn');
});