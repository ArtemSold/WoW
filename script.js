//alert("Хей! Привет и добро пожаловать на самую первую версию WoW! Ты видимо бета-тестер, так? Проoлди, присаживайся.")
//alert("Так как игра всё ещё сырая, в ней есть только 3 функции. 1)УЧИТЬСЯ 2)РАБОТАТЬ 3)СРАЖАТЬСЯ.")
//alert("Другими словами, сначало пойди в школу, потом в кузню, потом сражаться. Понял? Тогда марш играть!")	
//main
let body = document.querySelector("body");
let main_player = document.querySelector(".main_player");
let main = document.querySelector(".main");
let audio = document.querySelector(".audio")
let clash = document.querySelector(".main_audio")

let tapor1 = document.querySelector(".tapor1")
let mech1 = document.querySelector(".mech1")
let perchi1 = document.querySelector(".perchi1")
let tapor2 = document.querySelector(".tapor2")
let mech2 = document.querySelector(".mech2")
let perchi2 = document.querySelector(".perchi2")
//school
let school = document.querySelector(".school");
let location2 = document.querySelector(".location2");
let nojniBox = document.querySelector(".nojni");
let doki = document.querySelector(".school_audio")

//arena
let arena = document.querySelector(".arena")
let location4 = document.querySelector(".location4")
let himki = document.querySelector(".arena_audio")
//mastery
let mastery = document.querySelector(".mastery")
let location3 = document.querySelector(".location3")
let light = document.querySelector(".mastery_audio")

	

school.onclick = function(){
	main_player.style.top = "32%";
	main_player.style.left = "70%";

	let loc2_variants_block = document.querySelector(".loc2_variants_block");
	let wrong = document.querySelectorAll(".loc2_variants")
	let write = document.querySelector(".loc2_pravilno")


	function changeLocation2(){
		main.style.display = "none"
		location2.style.display = "block"
		body.style.backgroundImage = "url('класс.jpg')"
		body.style.backgroundSize = "cover"
		clash.pause()
		doki.play()


		setTimeout(showVar, 1000)
	}


	function showVar() {
		loc2_variants_block.style.display = "block"
	}

	for(let i=0; i<5; i=i+1) {
		wrong[i].onclick = function() {
			alert('неправильно')
		}
	}

	write.onclick = function() {
		alert("правильно")
		main.style.display = "block"
		location2.style.display = "none"
		body.style.backgroundImage = "url(bg1.png)"
		body.style.backgroundSize = "cover"
		doki.pause()
		clash.play()
	}

	setTimeout(changeLocation2, 1000);
}

mastery.onclick = function() {
	main_player.style.top = "70%";
	main_player.style.left = "40%";

	let loc3_variants_block1 = document.querySelector(".loc3_variants_block1")
	let loc3_variants_block2 = document.querySelector(".loc3_variants_block2")
	let loc3_variants_block3 = document.querySelector(".loc3_variants_block3")

	let loc3_pravilno1 = document.querySelectorAll(".loc3_pravilno1")
	let loc3_pravilno2 = document.querySelectorAll(".loc3_pravilno2")
	let loc3_pravilno3_hand = document.querySelector(".loc3_pravilno3_hand")
	let loc3_pravilno3_axe = document.querySelector(".loc3_pravilno3_axe")
	let loc3_pravilno3_sword = document.querySelector(".loc3_pravilno3_sword")

	let loc3_door1 = document.querySelector(".loc3_door1")
	let loc3_door2 = document.querySelector(".loc3_door2")

	function changeLocation3(){
		main.style.display = "none"
		location3.style.display = "block"
		body.style.background = "#f8ffbf"
		loc3_door1.style.display = "block"
		loc3_door2.style.display = "block"

		loc3_door1.onclick = function() {
			light.play()
			clash.pause()
			loc3_door1.style.display = "none"
			loc3_door2.style.display = "none"
			body.style.backgroundImage = "url(кузня.gif)"
			body.style.backgroundSize = "cover"
			loc3_variants_block1.style.display = "block"

			for(let i=0; i<3; i=i+1) {
					loc3_pravilno1[i].onclick = function() {
					loc3_variants_block1.style.display = "none"
					loc3_variants_block2.style.display = "block"
				}
			}
			for(let i=0; i<3; i=i+1) {
					loc3_pravilno2[i].onclick = function() {
					loc3_variants_block2.style.display = "none"
					loc3_variants_block3.style.display = "block"
				}
			}
					loc3_pravilno3_hand.onclick = function() {
					alert('Ты будешь сражаться в рукопашку!')
					main.style.display = "block"
					location3.style.display = "none"
					body.style.backgroundImage = "url(bg1.png)"
					body.style.backgroundSize = "cover"
					perchi1.style.display = "block"
					perchi2.style.display = "block"
					light.pause()
					clash.play()
				}
					loc3_pravilno3_axe.onclick = function() {
					alert('Ты будешь сражаться топором!')
					main.style.display = "block"
					location3.style.display = "none"
					body.style.backgroundImage = "url(bg1.png)"
					body.style.backgroundSize = "cover"
					tapor1.style.display = "block"
					tapor2.style.display = "block"
					light.pause()
					clash.play()
				}
					loc3_pravilno3_sword.onclick = function() {
					alert('Ты будешь сражаться мечом!')
					main.style.display = "block"
					location3.style.display = "none"
					body.style.backgroundImage = "url(bg1.png)"
					body.style.backgroundSize = "cover"
					mech1.style.display = "block"
					mech2.style.display = "block"
					light.pause()
					clash.play()
				}	
		}


		loc3_door2.onclick = function() {
			light.play()
			clash.pause()
			loc3_door1.style.display = "none"
			loc3_door2.style.display = "none"
			body.style.backgroundImage = "url(кузня.gif)"
			body.style.backgroundSize = "cover"
			loc3_variants_block1.style.display = "block"

			for(let i=0; i<3; i=i+1) {
					loc3_pravilno1[i].onclick = function() {
					loc3_variants_block1.style.display = "none"
					loc3_variants_block2.style.display = "block"
				}
			}
			for(let i=0; i<3; i=i+1) {
					loc3_pravilno2[i].onclick = function() {
					loc3_variants_block2.style.display = "none"
					loc3_variants_block3.style.display = "block"
				}
			}
					loc3_pravilno3_hand.onclick = function() {
					alert('Ты будешь сражаться в рукопашку!')
					main.style.display = "block"
					location3.style.display = "none"
					body.style.backgroundImage = "url(bg1.png)"
					body.style.backgroundSize = "cover"
					perchi1.style.display = "block"
					perchi2.style.display = "block"
					light.pause()
					clash.play()
				}
					loc3_pravilno3_axe.onclick = function() {
					alert('Ты будешь сражаться топором!')
					main.style.display = "block"
					location3.style.display = "none"
					body.style.backgroundImage = "url(bg1.png)"
					body.style.backgroundSize = "cover"
					tapor1.style.display = "block"
					tapor2.style.display = "block"
					light.pause()
					clash.play()
				}
					loc3_pravilno3_sword.onclick = function() {
					alert('Ты будешь сражаться мечом!')
					main.style.display = "block"
					location3.style.display = "none"
					body.style.backgroundImage = "url(bg1.png)"
					body.style.backgroundSize = "cover"
					mech1.style.display = "block"
					mech2.style.display = "block"
					light.pause()
					clash.play()
				}	
		}
	}
	setTimeout(changeLocation3, 1000);
}

arena.onclick = function() {
	main_player.style.top = "30%";
	main_player.style.left = "32%";

	clash.pause()
	himki.play()

	let player = document.querySelector(".player");
	let enemy = document.querySelector(".enemy");

	let hp_pl = document.querySelector(".player_hp");
	let hp_en = document.querySelector(".enemy_hp");

	let dmg_pl = document.querySelector(".player_damage");
	let dmg_en = document.querySelector(".enemy_damage");

	let img_pl = document.querySelector(".player_img");
	let img_en = document.querySelector(".enemy_img");


	let btn = document.querySelector('.btn')
	let end = document.querySelector('.end')

	function changeLocation4(){
		main.style.display = "none"
		location4.style.display = "block"
		body.style.backgroundImage = "url('bg.jpg')"
		body.style.backgroundSize = "cover"


		let randomizer = function(arg) {
			let random = Math.random() * arg;//енератор случайного числа
			let round = Math.round(random)//кругление числа
			return round
		}

		let user = {
			name : "player",
			url : "url(7.png)",
			hp : randomizer(1000),
			dmg : randomizer(100)

		}

		let user2 = {
			name : "enemy",
			url : "url(5.png)",
			hp : randomizer(1000),
			dmg : randomizer(100)		
		}

		img_pl.style.backgroundImage = user.url;
		img_en.style.backgroundImage = user2.url;

		hp_pl.innerHTML = user.hp;
		hp_en.innerHTML = user2.hp;

		dmg_pl.innerHTML = user.dmg;
		dmg_en.innerHTML = user2.dmg;

		btn.onclick = function() {
			user.hp = user.hp - user2.dmg
			hp_pl.innerHTML = user.hp
			user2.hp = user2.hp - user.dmg
			hp_en.innerHTML = user2.hp
			if(user.hp<0){
				alert('Потрачено(вы погибли)')
			}
			if(user2.hp<0) {
				alert('Вы разнесли противника в пух и прах')
				end.style.display = "block"
			}
		}
	
	}
	setTimeout(changeLocation4, 1000);
}
	audio.onclick = function() {
		audio.style.backgroundImage = "url('yes audio.png')"
		clash.play()
	}


