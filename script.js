		var rightCount = 0;
		var allCount = 0;
		var gradCo = 1.05;
		var requireEnterPress = $("#enterCheckbox").prop('checked');
		var optionsShown = false;
		var firsttime = true;

		var dict ={"あ": ["a",1,0,30,false],
  "い": ["i",1,0,30,false],
  "う": ["u",1,0,30,false],
  "え": ["e",1,0,30,false],
  "お": ["o",1,0,30,false],
  "か": ["ka",1,0,30,false],
  "き": ["ki",1,0,30,false],
  "く": ["ku",1,0,30,false],
  "け": ["ke",1,0,30,false],
  "こ": ["ko",1,0,30,false],
  "さ": ["sa",1,0,30,false],
  "し": ["shi",1,0,30,false],
  "す": ["su",1,0,30,false],
  "せ": ["se",1,0,30,false],
  "そ": ["so",1,0,30,false],
  "た": ["ta",1,0,30,false],
  "ち": ["chi",1,0,30,false],
  "つ": ["tsu",1,0,30,false],
  "て": ["te",1,0,30,false],
  "と": ["to",1,0,30,false],
  "な": ["na",1,0,30,false],
  "に": ["ni",1,0,30,false],
  "ぬ": ["nu",1,0,30,false],
  "ね": ["ne",1,0,30,false],
  "の": ["no",1,0,30,false],
  "は": ["ha",1,0,30,false],
  "ひ": ["hi",1,0,30,false],
  "ふ": ["fu",1,0,30,false],
  "へ": ["he",1,0,30,false],
  "ほ": ["ho",1,0,30,false],
  "や": ["ya",1,0,30,false],
  " ": " ",
  "ゆ": ["yu",1,0,30,false],
  "よ": ["yo",1,0,30,false],
  "ま": ["ma",1,0,30,false],
  "み": ["mi",1,0,30,false],
  "む": ["mu",1,0,30,false],
  "め": ["me",1,0,30,false],
  "も": ["mo",1,0,30,false],
  "ら": ["ra",1,0,30,false],
  "り": ["ri",1,0,30,false],
  "る": ["ru",1,0,30,false],
  "れ": ["re",1,0,30,false],
  "ろ": ["ro",1,0,30,false],
  "わ": ["wa",1,0,30,false],
  "を": ["wo",1,0,30,false],
  "ん": ["n",1,0,30,false],
  "が": ["ga",1,0,30,false],
  "ぎ": ["gi",1,0,30,false],
  "ぐ": ["gu",1,0,30,false],
  "げ": ["ge",1,0,30,false],
  "ご": ["go",1,0,30,false],
  "ざ": ["za",1,0,30,false],
  "じ": ["ji",1,0,30,false],
  "ず": ["zu",1,0,30,false],
  "ぜ": ["ze",1,0,30,false],
  "ぞ": ["zo",1,0,30,false],
  "だ": ["da",1,0,30,false],
  "ぢ": ["ji",1,0,30,false],
  "で": ["de",1,0,30,false],
  "ど": ["do",1,0,30,false],
  "ば": ["ba",1,0,30,false],
  "び": ["bi",1,0,30,false],
  "ぶ": ["bu",1,0,30,false],
  "べ": ["be",1,0,30,false],
  "ぼ": ["bo",1,0,30,false],
  "ぱ": ["pa",1,0,30,false],
  "ぴ": ["pi",1,0,30,false],
  "ぷ": ["pu",1,0,30,false],
  "ぺ": ["pe",1,0,30,false],
  "ぽ": ["po",1,0,30,false],
  "ア": ["a",2,0,30,false],
  "イ": ["i",2,0,30,false],
  "ウ": ["u",2,0,30,false],
  "エ": ["e",2,0,30,false],
  "オ": ["o",2,0,30,false],
  "カ": ["ka",2,0,30,false],
  "キ": ["ki",2,0,30,false],
  "ク": ["ku",2,0,30,false],
  "ケ": ["ke",2,0,30,false],
  "コ": ["ko",2,0,30,false],
  "サ": ["sa",2,0,30,false],
  "シ": ["shi",2,0,30,false],
  "ス": ["su",2,0,30,false],
  "セ": ["se",2,0,30,false],
  "ソ": ["so",2,0,30,false],
  "タ": ["ta",2,0,30,false],
  "チ": ["chi",2,0,30,false],
  "ツ": ["tsu",2,0,30,false],
  "テ": ["te",2,0,30,false],
  "ト": ["to",2,0,30,false],
  "ナ": ["na",2,0,30,false],
  "ニ": ["ni",2,0,30,false],
  "ヌ": ["nu",2,0,30,false],
  "ネ": ["ne",2,0,30,false],
  "ノ": ["no",2,0,30,false],
  "ハ": ["ha",2,0,30,false],
  "ヒ": ["hi",2,0,30,false],
  "フ": ["fu",2,0,30,false],
  "ヘ": ["he",2,0,30,false],
  "ホ": ["ho",2,0,30,false],
  "ヤ": ["ya",2,0,30,false],
  "ユ": ["yu",2,0,30,false],
  "ヨ": ["yo",2,0,30,false],
  "マ": ["ma",2,0,30,false],
  "ミ": ["mi",2,0,30,false],
  "ム": ["mu",2,0,30,false],
  "メ": ["me",2,0,30,false],
  "モ": ["mo",2,0,30,false],
  "ラ": ["ra",2,0,30,false],
  "リ": ["ri",2,0,30,false],
  "ル": ["ru",2,0,30,false],
  "レ": ["re",2,0,30,false],
  "ロ": ["ro",2,0,30,false],
  "ワ": ["wa",2,0,30,false],
  "ヲ": ["wo",2,0,30,false],
  "ン": ["n",2,0,30,false],
  "ガ": ["ga",2,0,30,false],
  "ギ": ["gi",2,0,30,false],
  "グ": ["gu",2,0,30,false],
  "ゲ": ["ge",2,0,30,false],
  "ゴ": ["go",2,0,30,false],
  "ザ": ["za",2,0,30,false],
  "ジ": ["ji",2,0,30,false],
  "ズ": ["zu",2,0,30,false],
  "ゼ": ["ze",2,0,30,false],
  "ゾ": ["zo",2,0,30,false],
  "ダ": ["da",2,0,30,false],
  "ヂ": ["ji",2,0,30,false],
  "ヅ": ["zu",2,0,30,false],
  "デ": ["de",2,0,30,false],
  "ド": ["do",2,0,30,false],
  "バ": ["ba",2,0,30,false],
  "ビ": ["bi",2,0,30,false],
  "ブ": ["bu",2,0,30,false],
  "ベ": ["be",2,0,30,false],
  "ボ": ["bo",2,0,30,false],
  "パ": ["pa",2,0,30,false],
  "ピ": ["pi",2,0,30,false],
  "プ": ["pu",2,0,30,false],
  "ペ": ["pe",2,0,30,false],
  "ポ": ["po",2,0,30,false],};
  		
 
  			var currentKana = "あ";
 			var currentPool = $(".activated");
 			var correct = true;
 			var streak = 0;

 			var progress;

	

			

		


		
		$(document).ready(function(){



		

		


			// adding initial pool classes

			function updateCounts (r,a){
				rightCount += r;
				allCount += a;
				if(r*a == 1){
					streak++
					
				}
				else{
					streak = 0;
				}
				$("#streak").html(streak);

				$("#correctCount").html(rightCount);
				$("#allCount").html(allCount);
				
			}

			

			

 			function wrongChar(){
 				
 				correct = false;
 				$("#wrongPrompt").css("opacity",1);
 				$("#kanaInput").css("border","1px solid red");
 			}
			

 			function nextChar(a){
 				if(a == 0){
 					//do nothing, no answer given
 					
 				}
 				else if (a == 1){

 					dict[currentKana][2]++;
 					if(dict[currentKana][3] < 100){
 					dict[currentKana][3]=Math.floor((dict[currentKana][3]+5)*gradCo)+1;
 				}
 					if(dict[currentKana][3] > 100){
 						dict[currentKana][3] = 100;



 					}

 					
 					//correct answer given
 					updateCounts(1,1);



 					
 				}
 				else if (a == 2){
 					//false answer given
 					updateCounts(0,1);
 					if(dict[currentKana][3]>15){
 						dict[currentKana][3]-=5;
 					}
 					
 				}

 				dict[currentKana][4] = true;
 				var lastKana = currentKana;

 				correct = true;
 				var index = Math.floor(Math.random()*currentPool.length)
 				currentKana = $(currentPool[index]).attr("id");
 				$("#kanaPrompt").html(currentKana);
 				$("#kanaInput").val("") 
 				$("#wrongPrompt").css("opacity",0);
 				$("#wrongPrompt").html(currentKana + " = \"" +dict[currentKana][0]+"\"");
 				$("#kanaInput").css("border","1px solid grey");
 				
 				if(dict[lastKana][3]==100){
 					deactivateCard($("#"+lastKana));
 				}
 			}

 			nextChar(0);

 			

 			

 			$("#kanaInput").keydown(function(e) {

 				if(requireEnterPress == true){

 					if(e.which == 13) {
				  	
				  	if ($("#kanaInput").val()==dict[currentKana][0]){

				  		//correct!
				  		$("#kanaInput").val("") ;
				  		if(correct == true){
				  		nextChar(1);
				  		}
				  		else{
				  			nextChar(2);
				  		}
				  	}

				  	else{
				  		//wrong!
				  		
				  		wrongChar();
				  	}
					 }
 				}

 				else{
 					window.setTimeout(function(){

 						if ($("#kanaInput").val() == dict[currentKana][0]){
 							
 						if(correct == true){
				  		nextChar(1);
				  		}
				  		else{
				  			nextChar(2);
				  		}
 							
 								}
 						else if($("#kanaInput").val() == dict[currentKana][0].slice(0,$("#kanaInput").val().length)){
 							
 						}
 						
 						
 						else{
 							
 							wrongChar();
 						}





 					}, 1);
 					
 				}
				  
				});
 				
				  	

			$("#studyKanaButton").click(function(){
				$("#startlearning").slideToggle(100);
				
			});


			$("#startFromScratchButton").click(function(){
				$("#frontpage").hide();
				$("#intropage").show();
			});

			$("#beginbutton").click(function(){
				$("#intropage").hide();
				$("#learningpage").show();

			});

			$("#studybutton").click(function(){

				$("#learningpage").hide();
				$("#studypage").show();
			});

			$("#optionsButton").click(function(){

				$("#optionsPanel").toggle();
				if(optionsShown == false){
					$("#optionsIndicator").css("transform","rotate(180deg)");
					optionsShown = true;
				}
				else{
					$("#optionsIndicator").css("transform","rotate(0deg)");
					optionsShown = false;
				}
				
			});

			$("#enterCheckbox").click(function(){
				if($("#enterCheckbox").prop('checked')){
					requireEnterPress = true;
				}

				else{
					requireEnterPress = false;
				}
			})

			$(".columnToggle").each(function(){

				$(this).click(function(){

					var table = ($(this).closest($("table")).attr("id"));

					

					if($(this).html() == "+"){
						$(this).html("−");
						$(this).css("background-color","black");
						var index = $(this).parent().index();
						var selectedCard = 
						$("#" + table + " .kanaSymbol:nth-child("+String(index+1)+")").each(function(){
							activateCard($(this));
						})
							}
					else{
						$(this).html("+");
						$(this).css("background-color","darkgrey");
						var index = $(this).parent().index();
						$("#" + table + " .kanaSymbol:nth-child("+String(index+1)+")").each(function(){
							
							deactivateCard($(this));
						})
						
					}
					})
				});

			function activateCard(card){

				card.addClass("activated");
				currentPool = $(".activated");
				if(currentPool.length == 1){
					$("#kanaInput").prop('disabled',false);
					nextChar(0);
				}


				
				
			}

			function deactivateCard(card){
				
				card.removeClass("activated");
				currentPool = $(".activated");
				if(currentPool.length == 0){
					$("#kanaInput").prop('disabled',true);
					$("#kanaPrompt").html("-")
					$("#wrongPrompt").html("no kana selected");
					$("#wrongPrompt").css("opacity","0.5");
				}
				
				
			}

			function toggleCard(card){
				if(card.hasClass("activated")){
					deactivateCard(card);
				}

				else{
					activateCard(card);
				}
			}

			$(".kanaSymbol").each(function(){
				$(this).click(function(){
					
					toggleCard($(this));
				})
			})


			
			

			$("#hiraEnable").click(function(){
				$("#optionsTable1 .kanaSymbol").each(function(){
					activateCard($(this));
				})
				$("#optionsTable1 .columnToggle").each(function(){
					$(this).html("−");
					$(this).css("background-color","black");
				})
			})

			$("#hiraDisable").click(function(){
				$("#optionsTable1 .kanaSymbol").each(function(){
					deactivateCard($(this));

				})
				$("#optionsTable1 .columnToggle").each(function(){
					$(this).html("+");

					$(this).css("background-color","darkgrey");
				})
			})

			$("#kanaEnable").click(function(){
				$("#optionsTable2 .kanaSymbol").each(function(){
					activateCard($(this));
				})
				$("#optionsTable2 .columnToggle").each(function(){
					$(this).html("−");
					$(this).css("background-color","black");
				})
			})

			$("#kanaDisable").click(function(){
				$("#optionsTable2 .kanaSymbol").each(function(){
					deactivateCard($(this));
				})
				$("#optionsTable2 .columnToggle").each(function(){
					$(this).html("+");
					$(this).css("background-color","darkgrey");
				})
			})


			

			
		$(".kanaSymbol").each(function(){
			$(this).append("<div class = profBar></div>");
			
		})


			








			



			
				

   
   














		});
		var rightCount = 0;
		var allCount = 0;
		var gradCo = 1.05;
		var requireEnterPress = $("#enterCheckbox").prop('checked');
		var optionsShown = false;
		var firsttime = true;

		var dict ={"あ": ["a",1,0,30,false],
  "い": ["i",1,0,30,false],
  "う": ["u",1,0,30,false],
  "え": ["e",1,0,30,false],
  "お": ["o",1,0,30,false],
  "か": ["ka",1,0,30,false],
  "き": ["ki",1,0,30,false],
  "く": ["ku",1,0,30,false],
  "け": ["ke",1,0,30,false],
  "こ": ["ko",1,0,30,false],
  "さ": ["sa",1,0,30,false],
  "し": ["shi",1,0,30,false],
  "す": ["su",1,0,30,false],
  "せ": ["se",1,0,30,false],
  "そ": ["so",1,0,30,false],
  "た": ["ta",1,0,30,false],
  "ち": ["chi",1,0,30,false],
  "つ": ["tsu",1,0,30,false],
  "て": ["te",1,0,30,false],
  "と": ["to",1,0,30,false],
  "な": ["na",1,0,30,false],
  "に": ["ni",1,0,30,false],
  "ぬ": ["nu",1,0,30,false],
  "ね": ["ne",1,0,30,false],
  "の": ["no",1,0,30,false],
  "は": ["ha",1,0,30,false],
  "ひ": ["hi",1,0,30,false],
  "ふ": ["fu",1,0,30,false],
  "へ": ["he",1,0,30,false],
  "ほ": ["ho",1,0,30,false],
  "や": ["ya",1,0,30,false],
  " ": " ",
  "ゆ": ["yu",1,0,30,false],
  "よ": ["yo",1,0,30,false],
  "ま": ["ma",1,0,30,false],
  "み": ["mi",1,0,30,false],
  "む": ["mu",1,0,30,false],
  "め": ["me",1,0,30,false],
  "も": ["mo",1,0,30,false],
  "ら": ["ra",1,0,30,false],
  "り": ["ri",1,0,30,false],
  "る": ["ru",1,0,30,false],
  "れ": ["re",1,0,30,false],
  "ろ": ["ro",1,0,30,false],
  "わ": ["wa",1,0,30,false],
  "を": ["wo",1,0,30,false],
  "ん": ["n",1,0,30,false],
  "が": ["ga",1,0,30,false],
  "ぎ": ["gi",1,0,30,false],
  "ぐ": ["gu",1,0,30,false],
  "げ": ["ge",1,0,30,false],
  "ご": ["go",1,0,30,false],
  "ざ": ["za",1,0,30,false],
  "じ": ["ji",1,0,30,false],
  "ず": ["zu",1,0,30,false],
  "ぜ": ["ze",1,0,30,false],
  "ぞ": ["zo",1,0,30,false],
  "だ": ["da",1,0,30,false],
  "ぢ": ["ji",1,0,30,false],
  "で": ["de",1,0,30,false],
  "ど": ["do",1,0,30,false],
  "ば": ["ba",1,0,30,false],
  "び": ["bi",1,0,30,false],
  "ぶ": ["bu",1,0,30,false],
  "べ": ["be",1,0,30,false],
  "ぼ": ["bo",1,0,30,false],
  "ぱ": ["pa",1,0,30,false],
  "ぴ": ["pi",1,0,30,false],
  "ぷ": ["pu",1,0,30,false],
  "ぺ": ["pe",1,0,30,false],
  "ぽ": ["po",1,0,30,false],
  "ア": ["a",2,0,30,false],
  "イ": ["i",2,0,30,false],
  "ウ": ["u",2,0,30,false],
  "エ": ["e",2,0,30,false],
  "オ": ["o",2,0,30,false],
  "カ": ["ka",2,0,30,false],
  "キ": ["ki",2,0,30,false],
  "ク": ["ku",2,0,30,false],
  "ケ": ["ke",2,0,30,false],
  "コ": ["ko",2,0,30,false],
  "サ": ["sa",2,0,30,false],
  "シ": ["shi",2,0,30,false],
  "ス": ["su",2,0,30,false],
  "セ": ["se",2,0,30,false],
  "ソ": ["so",2,0,30,false],
  "タ": ["ta",2,0,30,false],
  "チ": ["chi",2,0,30,false],
  "ツ": ["tsu",2,0,30,false],
  "テ": ["te",2,0,30,false],
  "ト": ["to",2,0,30,false],
  "ナ": ["na",2,0,30,false],
  "ニ": ["ni",2,0,30,false],
  "ヌ": ["nu",2,0,30,false],
  "ネ": ["ne",2,0,30,false],
  "ノ": ["no",2,0,30,false],
  "ハ": ["ha",2,0,30,false],
  "ヒ": ["hi",2,0,30,false],
  "フ": ["fu",2,0,30,false],
  "ヘ": ["he",2,0,30,false],
  "ホ": ["ho",2,0,30,false],
  "ヤ": ["ya",2,0,30,false],
  "ユ": ["yu",2,0,30,false],
  "ヨ": ["yo",2,0,30,false],
  "マ": ["ma",2,0,30,false],
  "ミ": ["mi",2,0,30,false],
  "ム": ["mu",2,0,30,false],
  "メ": ["me",2,0,30,false],
  "モ": ["mo",2,0,30,false],
  "ラ": ["ra",2,0,30,false],
  "リ": ["ri",2,0,30,false],
  "ル": ["ru",2,0,30,false],
  "レ": ["re",2,0,30,false],
  "ロ": ["ro",2,0,30,false],
  "ワ": ["wa",2,0,30,false],
  "ヲ": ["wo",2,0,30,false],
  "ン": ["n",2,0,30,false],
  "ガ": ["ga",2,0,30,false],
  "ギ": ["gi",2,0,30,false],
  "グ": ["gu",2,0,30,false],
  "ゲ": ["ge",2,0,30,false],
  "ゴ": ["go",2,0,30,false],
  "ザ": ["za",2,0,30,false],
  "ジ": ["ji",2,0,30,false],
  "ズ": ["zu",2,0,30,false],
  "ゼ": ["ze",2,0,30,false],
  "ゾ": ["zo",2,0,30,false],
  "ダ": ["da",2,0,30,false],
  "ヂ": ["ji",2,0,30,false],
  "ヅ": ["zu",2,0,30,false],
  "デ": ["de",2,0,30,false],
  "ド": ["do",2,0,30,false],
  "バ": ["ba",2,0,30,false],
  "ビ": ["bi",2,0,30,false],
  "ブ": ["bu",2,0,30,false],
  "ベ": ["be",2,0,30,false],
  "ボ": ["bo",2,0,30,false],
  "パ": ["pa",2,0,30,false],
  "ピ": ["pi",2,0,30,false],
  "プ": ["pu",2,0,30,false],
  "ペ": ["pe",2,0,30,false],
  "ポ": ["po",2,0,30,false],};
  		
 
  			var currentKana = "あ";
 			var currentPool = $(".activated");
 			var correct = true;
 			var streak = 0;

 			var progress;

	

			

		


		
		$(document).ready(function(){



		

		


			// adding initial pool classes

			function updateCounts (r,a){
				rightCount += r;
				allCount += a;
				if(r*a == 1){
					streak++
					
				}
				else{
					streak = 0;
				}
				$("#streak").html(streak);

				$("#correctCount").html(rightCount);
				$("#allCount").html(allCount);
				
			}

			

			

 			function wrongChar(){
 				
 				correct = false;
 				$("#wrongPrompt").css("opacity",1);
 				$("#kanaInput").css("border","1px solid red");
 			}
			

 			function nextChar(a){
 				if(a == 0){
 					//do nothing, no answer given
 					
 				}
 				else if (a == 1){

 					dict[currentKana][2]++;
 					if(dict[currentKana][3] < 100){
 					dict[currentKana][3]=Math.floor((dict[currentKana][3]+5)*gradCo)+1;
 				}
 					if(dict[currentKana][3] > 100){
 						dict[currentKana][3] = 100;



 					}

 					
 					//correct answer given
 					updateCounts(1,1);



 					
 				}
 				else if (a == 2){
 					//false answer given
 					updateCounts(0,1);
 					if(dict[currentKana][3]>15){
 						dict[currentKana][3]-=5;
 					}
 					
 				}

 				dict[currentKana][4] = true;
 				var lastKana = currentKana;

 				correct = true;
 				var index = Math.floor(Math.random()*currentPool.length)
 				currentKana = $(currentPool[index]).attr("id");
 				$("#kanaPrompt").html(currentKana);
 				$("#kanaInput").val("") 
 				$("#wrongPrompt").css("opacity",0);
 				$("#wrongPrompt").html(currentKana + " = \"" +dict[currentKana][0]+"\"");
 				$("#kanaInput").css("border","1px solid grey");
 				
 				if(dict[lastKana][3]==100){
 					deactivateCard($("#"+lastKana));
 				}
 			}

 			nextChar(0);

 			

 			

 			$("#kanaInput").keydown(function(e) {

 				if(requireEnterPress == true){

 					if(e.which == 13) {
				  	
				  	if ($("#kanaInput").val()==dict[currentKana][0]){

				  		//correct!
				  		$("#kanaInput").val("") ;
				  		if(correct == true){
				  		nextChar(1);
				  		}
				  		else{
				  			nextChar(2);
				  		}
				  	}

				  	else{
				  		//wrong!
				  		
				  		wrongChar();
				  	}
					 }
 				}

 				else{
 					window.setTimeout(function(){

 						if ($("#kanaInput").val() == dict[currentKana][0]){
 							
 						if(correct == true){
				  		nextChar(1);
				  		}
				  		else{
				  			nextChar(2);
				  		}
 							
 								}
 						else if($("#kanaInput").val() == dict[currentKana][0].slice(0,$("#kanaInput").val().length)){
 							
 						}
 						
 						
 						else{
 							
 							wrongChar();
 						}





 					}, 1);
 					
 				}
				  
				});
 				
				  	

			$("#studyKanaButton").click(function(){
				$("#startlearning").slideToggle(100);
				
			});


			$("#startFromScratchButton").click(function(){
				$("#frontpage").hide();
				$("#intropage").show();
			});

			$("#beginbutton").click(function(){
				$("#intropage").hide();
				$("#learningpage").show();

			});

			$("#studybutton").click(function(){

				$("#learningpage").hide();
				$("#studypage").show();
			});

			$("#optionsButton").click(function(){

				$("#optionsPanel").toggle();
				if(optionsShown == false){
					$("#optionsIndicator").css("transform","rotate(180deg)");
					optionsShown = true;
				}
				else{
					$("#optionsIndicator").css("transform","rotate(0deg)");
					optionsShown = false;
				}
				
			});

			$("#enterCheckbox").click(function(){
				if($("#enterCheckbox").prop('checked')){
					requireEnterPress = true;
				}

				else{
					requireEnterPress = false;
				}
			})

			$(".columnToggle").each(function(){

				$(this).click(function(){

					var table = ($(this).closest($("table")).attr("id"));

					

					if($(this).html() == "+"){
						$(this).html("−");
						$(this).css("background-color","black");
						var index = $(this).parent().index();
						var selectedCard = 
						$("#" + table + " .kanaSymbol:nth-child("+String(index+1)+")").each(function(){
							activateCard($(this));
						})
							}
					else{
						$(this).html("+");
						$(this).css("background-color","darkgrey");
						var index = $(this).parent().index();
						$("#" + table + " .kanaSymbol:nth-child("+String(index+1)+")").each(function(){
							
							deactivateCard($(this));
						})
						
					}
					})
				});

			function activateCard(card){

				card.addClass("activated");
				currentPool = $(".activated");
				if(currentPool.length == 1){
					$("#kanaInput").prop('disabled',false);
					nextChar(0);
				}


				
				
			}

			function deactivateCard(card){
				
				card.removeClass("activated");
				currentPool = $(".activated");
				if(currentPool.length == 0){
					$("#kanaInput").prop('disabled',true);
					$("#kanaPrompt").html("-")
					$("#wrongPrompt").html("no kana selected");
					$("#wrongPrompt").css("opacity","0.5");
				}
				
				
			}

			function toggleCard(card){
				if(card.hasClass("activated")){
					deactivateCard(card);
				}

				else{
					activateCard(card);
				}
			}

			$(".kanaSymbol").each(function(){
				$(this).click(function(){
					
					toggleCard($(this));
				})
			})


			
			

			$("#hiraEnable").click(function(){
				$("#optionsTable1 .kanaSymbol").each(function(){
					activateCard($(this));
				})
				$("#optionsTable1 .columnToggle").each(function(){
					$(this).html("−");
					$(this).css("background-color","black");
				})
			})

			$("#hiraDisable").click(function(){
				$("#optionsTable1 .kanaSymbol").each(function(){
					deactivateCard($(this));

				})
				$("#optionsTable1 .columnToggle").each(function(){
					$(this).html("+");

					$(this).css("background-color","darkgrey");
				})
			})

			$("#kanaEnable").click(function(){
				$("#optionsTable2 .kanaSymbol").each(function(){
					activateCard($(this));
				})
				$("#optionsTable2 .columnToggle").each(function(){
					$(this).html("−");
					$(this).css("background-color","black");
				})
			})

			$("#kanaDisable").click(function(){
				$("#optionsTable2 .kanaSymbol").each(function(){
					deactivateCard($(this));
				})
				$("#optionsTable2 .columnToggle").each(function(){
					$(this).html("+");
					$(this).css("background-color","darkgrey");
				})
			})


			

			
		$(".kanaSymbol").each(function(){
			$(this).append("<div class = profBar></div>");
			
		})




		});