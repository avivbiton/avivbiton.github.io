$(document).ready(function () {
	let projectsHtml = "";
	projectsHtml += '<div class="row pb-4">';
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
						 <a href="${project.siteUrl}" target="_blank" class="btn btn-darkPrimary btn-lg btn-block">View Site</a>
						<a href="${project.sourceUrl}" target="_blank" class="btn btn-info btn-lg btn-block">Source Code</a>
					</div>
				</div>
			</div>
		</div>`;
}

/*
			<div class="row pb-4">
				<div class="col">
					<div class="card">
						<h4 class="card-header text-center bg-info text-white">Family Overseer</h4>
						<div class="card-body row">
							<div class="col-md-8">
								<div class="pb-2">
									<span class="badge badge-info">Fullstack</span>
									<span class="badge badge-info">MongoDb</span>
									<span class="badge badge-info">MERN</span>
							   	</div>
								<p class="card-text">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus totam voluptatibus
									expedita ab unde culpa sapiente, distinctio odit explicabo animi mollitia amet
									reiciendis. Cum expedita nam alias. Quam totam in fugit recusandae perferendis officia
									nulla. Praesentium aliquam dicta ipsa impedit facere sed fugit rerum iure.
								</p>
								<button class="btn btn-primary btn-lg btn-block">View Site</button>
								<button class="btn btn-info btn-lg btn-block">Source Code</button>
							</div>
							<div class="col-md-4 d-none d-md-block">
								<img src="img/backend.png" class="img-fluid">
							</div>
						</div>
					</div>
				</div>
			</div>

                    */
