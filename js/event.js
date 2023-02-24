/* りょう */
/*季節選択でタブが開閉*/
$(function(){
	$('.spring').click(function(){
		$('.spring__content').toggleClass('e__invisible');
	})}
  );
  $(function(){
	$('.summer').click(function(){
		$('.summer__content').toggleClass('e__invisible');
	})}
  );
  $(function(){
	$('.fall').click(function(){
		$('.fall__content').toggleClass('e__invisible');
	})}
  );
  $(function(){
	$('.winter').click(function(){
		$('.winter__content').toggleClass('e__invisible');
	})}
  )
  
  
  
  
  
  
  
  function ScrollTimelineAnime(){
	$('.timeline li').each(function(){
	var elemPos = $(this).offset().top;
	var scroll = $(window).scrollTop();
	var windowHeight = $(window).height();
	var startPoint = 220;
	if (scroll >= elemPos - windowHeight-startPoint){       
		var H = $(this).outerHeight(true)
		var percent = (scroll+startPoint - elemPos) / (H/2) *100;
  
		
		if(percent  > 100){
		percent  = 100;
		}
		
		$(this).children('.border-line').css({
		height: percent + "%", 
		});
	} 
	});
  }
  
  
  $(window).on('scroll', function(){
	ScrollTimelineAnime();
  });
  $(window).on('load', function(){
	ScrollTimelineAnime();
  });
  
  
  
  const formElements = document.forms.contactForm;
  
  formElements.addEventListener( 'submit', e => {
	e.preventDefault();
  
	
	const Name = formElements.name.value
	const question = formElements.content.value
	const season__value =formElements.title.value
	const question__answer = formElements.qa.value
	if(question__answer == 'Question'){
		if(season__value == 1 ){
			$('.spring__content')
			.append(`<div><p>名前:${Name}</p><p>質問内容:${question}</p></div>`)
		}else if (season__value == 2){
			$('.summer__content')
			.append(`<div><p>名前:${Name}</p><p>質問内容:${question}</p></div>`)
		}else if (season__value == 3){
			$('.fall__content')
			.append(`<div><p>名前:${Name}</p><p>質問内容:${question}</p></div>`)
		}else if(season__value == 4){
			$('.winter__content')
			.append(`<div><p>名前:${Name}</p><p>質問内容:${question}</p></div>`)
		}}else if(season__value == 1 ){
			$('.spring__content')
			.append(`<div><p>名前:${Name}</p><p>回答:${question}</p></div>`)
			}else if (season__value == 2){
				$('.summer__content')
			.append(`<div><p>名前:${Name}</p><p>回答:${question}</p></div>`)
			}else if (season__value == 3){
				$('.fall__content')
			.append(`<div><p>名前:${Name}</p><p>回答:${question}</p></div>`)
			}else if(season__value == 4){
				$('.winter__content')
			.append(`<div><p>名前:${Name}</p><p>回答:${question}</p></div>`)
			}
		}
	)

	$(function(){
	  $('#backToTop').click(function(){
		  $('body,html').animate({
			  scrollTop:0
		  },1200);
	  });
  });