$(function () {
	//--------------------------------------------------------------------------
	// フォローボタン モーダル
	//--------------------------------------------------------------------------
	
	var a = "_is_active",
	$slide = $(".p-post-follow__question_slide"),
	$pager = $(".p-post-follow__question_slide_pager"),
	scrollPosition;
	
	// モーダルOPEN
	$(".js_open_follow_modal").on("click",function(){
		$(".p-post-follow").addClass(a);
		scrollPosition = $(window).scrollTop();
        $('body').addClass('fixed').css({'top': -scrollPosition});
		$slide.slick({
			infinite: false
		});
	});

	// モーダルCLOSE
	var $closeFollowModal = $(".p-post-follow__close,.p-post-follow"),
	$groupe01 = $(".p-post-follow,.js_treatment_click_yes,.js_treatment_click_no,.p-post-follow__question_slide,.p-post-follow__question_slide_pager,.p-post-follow__question_slide_pager-bt_02"),
	$groupe02 = $(".p-post-follow__header,.p-post-follow__description,.p-post-follow__balloon,.p-post-follow__img"),
	$groupe03 = $(".js_treatment_click_yes,.js_treatment_click_no,.p-post-follow__question_slide,.p-post-follow__question_slide_pager,.p-post-follow__question_slide_pager-bt_02");

	$closeFollowModal.on("click",function(){ //CLOSE処理
		$('.p-post-follow__radio01 input,.p-post-follow__radio02 input').prop('checked', false);
		$groupe01.removeClass(a);
		$groupe02.addClass(a);
		$pager.removeClass("page02");
		$pager.removeClass("page03");
		$('body').removeClass('fixed').css({'top': 0});
        window.scrollTo( 0 , scrollPosition );
	});

	$(".p-post-follow__inner").on("click",function(e){ //モーダル内クリック処理停止
		e.stopPropagation();
	});

	// 最初の設問「はい」をクリック
	$(".js_treatment_click_yes").on("click",function(){
		$('.p-post-follow__radio01 input,.p-post-follow__radio02 input').prop('checked', false);
		$(this).addClass(a);
		$slide.addClass(a);
		$pager.addClass(a);
		$pager.addClass("page02");
		$(".p-post-follow__question_slide_pager-bt_02").addClass(a);
		$(".js_treatment_click_no").removeClass(a);
		$slide.slick('slickUnfilter');
		$slide.slick('slickFilter', ':even');
		$groupe02.removeClass(a);
		$(".p-post-follow__question_no").removeClass(a);
		$(".p-post-follow__question_yes").addClass(a);
	});

	// 最初の設問「いいえ」をクリック
	$(".js_treatment_click_no").on("click",function(){
		$('.p-post-follow__radio01 input,.p-post-follow__radio02 input').prop('checked', false);
		$(this).addClass(a);
		$slide.addClass(a);
		$pager.addClass(a);
		$pager.addClass("page02");
		$(".p-post-follow__question_slide_pager-bt_02").addClass(a);
		$(".js_treatment_click_yes").removeClass(a);
		$slide.slick('slickUnfilter');
		$slide.slick('slickFilter', ':even');
		$groupe02.removeClass(a);
		$(".p-post-follow__question_yes").removeClass(a);
		$(".p-post-follow__question_no").addClass(a);
	});

	// 質問1のラジオボタンを選択
	$('.p-post-follow__radio01 input').on('change', function() {
		var radioId = $('.p-post-follow__radio01 input:checked').attr("id");
		
		$(".p-post-follow__question_slide_pager-bt_02").removeClass(a);
		$(".p-post-follow__question_slide_pager-bt_03").addClass(a);
		$pager.removeClass("page02");
		$pager.removeClass("page03");

		
		if ("question01_4_y"　===　radioId) {
			$(".js_treatment_click_no").addClass(a);
			$slide.addClass(a);
			$pager.addClass(a);
			$groupe02.removeClass(a);
			$(".js_treatment_click_yes").removeClass(a);
			$slide.slick('slickFilter', ':even');
			$(".p-post-follow__question_slide_pager-bt_03").removeClass(a);
			$(".p-post-follow__question_slide_pager-bt_02").addClass(a);
		} else if ("question01_2_n"　===　radioId) {
			$slide.slick('slickUnfilter');
			$slide.slick('slickNext');
			$(".p-post-follow__radio02_a").addClass(a);
			$(".p-post-follow__radio02_b").removeClass(a);
		} else if ("question01_3_n"　===　radioId) {
			$slide.slick('slickUnfilter');
			$slide.slick('slickNext');
			$(".p-post-follow__radio02_a").removeClass(a);
			$(".p-post-follow__radio02_b").addClass(a);
			$(".p-post-follow__question_yes").removeClass(a);
			$(".p-post-follow__question_no").addClass(a);
		} else if ("question01_1_n"　===　radioId || "question01_4_n"　===　radioId|| "question01_5_n"　===　radioId) {
			$(".p-post-follow").removeClass(a);
			$(".p-post-follow-complete").addClass(a);
			$(".p-post-follow-complete__result02").addClass(a);
		} else {
			$slide.slick('slickUnfilter');
			$slide.slick('slickNext');
			$pager.addClass("page03");
			$(".p-post-follow__question_yes").addClass(a);
			$(".p-post-follow__question_no").removeClass(a);
		}
	});

	// 質問2のラジオボタンを選択
	$('.p-post-follow__radio02 input').on('change', function() {
		var radioId = $('.p-post-follow__radio02 input:checked').attr("id");

		if ("question02_1_y"　===　radioId || "question02_2_y"　===　radioId || "question02_3_y"　===　radioId || "question02_4_y"　===　radioId || "question02_5_y"　===　radioId) {	
			$(".p-post-follow").removeClass(a);
			$(".p-post-follow-complete").addClass(a);
			$(".p-post-follow-complete__result01").addClass(a);
		} else {
			$(".p-post-follow").removeClass(a);
			$(".p-post-follow-complete").addClass(a);
			$(".p-post-follow-complete__result02").addClass(a);
		}       
	});

	//ページャー関連
	$(".p-post-follow__question_slide_pager-bt_01").on("click",function(e){
		$groupe03.removeClass(a);
		$groupe02.addClass(a);
	});

	$(".p-post-follow__question_slide_pager-bt_02").on("click",function(e){
		
	});

	$(".p-post-follow__question_slide_pager-bt_03").on("click",function(e){
		
	});

	//完了画面閉じるボタン
	$(".p-post-follow-complete_close,.p-post-follow-complete").on("click",function(e){
		$(".p-post-follow-complete").removeClass(a)
	});
})
