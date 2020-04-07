class Video {
	constructor(id, videoLink, name, client, type, shooting, postProd, description, esthetic, filtre) {
		this.id = id
		this.videoLink = videoLink;
		this.name = name;
		this.client = client;
		this.type = type;
		this.shooting = shooting;
		this.postProd = postProd;
		this.description = description;
		this.esthetic = esthetic;
		this.filtre = filtre

		this.displayVideo();
		this.displayMobVideo();
	}


	displayVideo() {
		console.log(this.type)
		// Video à droite ou gauche une fois sur deux
		if (this.id % 2 === 0) {
			$('.videoPlace').before(`<div class="vidContainer " id="vidSec${this.id}">
			<hr id="hr${this.id}" class="hrVidG">
			<div class="row hideme num-${this.id} vidDiv">
				<div class="col-2">
				</div>
				<div class="col-5">
					<div style="padding:56.25% 0 0 0;position:relative;">
						<iframe class="videoProjects"
							src=${this.videoLink}
							frameborder="0" allow="autoplay; fullscreen" allowfullscreen>
						</iframe>
					</div>
					<script src="https://player.vimeo.com/api/player.js">
					</script>
				</div>
				<div class="col-3 textVideoRight">
					<br>
					<h4>${this.name}</h4>
					<p class="fat">${this.client && this.client}</p>
					<br>
					<div class="textDescrition">
						${this.type && ('Genre: ' + this.type + '<br>')}
						${this.shooting && ('Durée de tournage: ' + this.shooting + '<br>')}
						${this.postProd && ('Durée de post-production: ' + this.postProd + '<br>')}
						<br>
					</div>
					${this.description ?
					this.esthetic ?
						'<p class="description"><p id="btn' + this.id + '"><span class="moreInfo">Détails du projet</span></p><br><br><div class="diNone textDescrition" id="details' + this.id + '">' + this.description + '<br><br><br>Esthétique : ' + this.esthetic
						:
						'<div class="textDescrition">' + this.description + '</div>'
					:
					this.esthetic ?
						'<div class="textDescrition">' + this.esthetic + '</div>'
						:
						''
					}
						</div>
					</p>
				</div>
				<div class="col-2">
				</div>
			</div>
			</div>`)
		} else {
			$('.videoPlace').before(`<div class="vidContainer " id="vidSec${this.id}">
				<hr id="hr${this.id}" class="hrVid">
				<div class="row hideme num-${this.id} vidDiv">
					<div class="col-2">
					</div>
					<div class="col-3 textVideoLeft">
					<br>
					<h4>${this.name}</h4>
					<p class="fat">${this.client && this.client}</p>
					<br>
					<div class="textDescrition">
						${this.type && ('Genre: ' + this.type + '<br>')}
						${this.shooting && ('Durée de tournage: ' + this.shooting + '<br>')}
						${this.postProd && ('Durée de post-production: ' + this.postProd + '<br>')}
						<br>
					</div>
					${this.description ?
					this.esthetic ?
						'<p class="description"><p id="btn' + this.id + '"><span class="moreInfo">Détails du projet</span></p><br><br><div class="diNone textDescrition" id="details' + this.id + '">' + this.description + '<br><br><br>Esthétique : ' + this.esthetic
						:
						'<div class="textDescrition">' + this.description + '</div>'
					:
					this.esthetic ?
						'<div class="textDescrition">' + this.esthetic + '</div>'
						:
						''
					}
						</div>
					</p>
				</div>
					<div class="col-5">
						<div style="padding:56.25% 0 0 0;position:relative;">
							<iframe class="videoProjects"
								src=${this.videoLink}
								frameborder="0" allow="autoplay; fullscreen" allowfullscreen>
							</iframe>
						</div>
						<script src="https://player.vimeo.com/api/player.js"></script>
					</div>
					<div class="col-2">
					</div>
				</div>
				</div>`)

		}
	}

	displayMobVideo() {
		if (this.type === '') {
			$('.videoPlace').before(`
		<div id="vidMob${this.id}" class="row nummob-${this.id}">
			<div class="col-1 d-md-none">
			</div>
			<div class="col-10 d-md-none">
				<h6 class="videoMob fat">${this.name}</h6>
				<h5 class='videoMob'>${this.client}</>
				<div style="padding:56.25% 0 0 0;position:relative;">
					<iframe class="videoProjectsMob" src=${this.videoLink} frameborder="0" allow="autoplay; fullscreen" allowfullscreen>
					</iframe>
				</div>
				<script src="https://player.vimeo.com/api/player.js">
				</script><br>
				<br>
				<button class='videoMob moreInfo' id="mobBut${this.id}" >Détails du projet</button><br><br><br>
				<div id="descriMob${this.id}" class="diNone descriContent">
					<p class="moreInfo">
					${this.description}<br><br>
					</p>
				</div>
				<hr class="hrMob">
			</div>
			<div class="col-1 d-md-none">
			</div>
		</div>`)
		} else {
			$('.videoPlace').before(`
		<div id="vidMob${this.id}" class="row nummob-${this.id}">
			<div class="col-1 d-md-none">
			</div>
			<div class="col-10 d-md-none">
				<h6 class="videoMob fat">${this.name}</h6>
				<h5 class='videoMob'>${this.client}</>
				<div style="padding:56.25% 0 0 0;position:relative;">
					<iframe class="videoProjectsMob" src=${this.videoLink} frameborder="0" allow="autoplay; fullscreen" allowfullscreen>
					</iframe>
				</div>
				<script src="https://player.vimeo.com/api/player.js">
				</script><br>
				<br>
				<button class='videoMob moreInfo' id="mobBut${this.id}" >Détails du projet</button><br><br><br>
				<div id="descriMob${this.id}" class="diNone descriContent">
					<p class="moreInfo">
					<span>Genre:</span> ${this.type}<br>
					<span>Durée du tournage:</span> ${this.shooting}'<br>
					<span>Durée de post-production:</span> ${this.postProd}<br><br>
					${this.description}<br><br>
					${this.esthetic}
					</p>
				</div>
				<hr class="hrMob">
			</div>
			<div class="col-1 d-md-none">
			</div>
		</div>`)
		}
	}
}