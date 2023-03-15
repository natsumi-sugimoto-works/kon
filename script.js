// ハンバーガーメニュー

$(function () {
  $('.js-hamburger').on('click',function () {
    if($('.js-hamburger').hasClass('open')) {
      $(this).removeClass('open');
      $('.js-drawer_nav').fadeOut();
    } else {
      $(this).addClass('open');
      $('.js-drawer_nav').fadeIn();
    }
  });
});


// お品書きスライダー

$('.menu_slider').slick({
  arrows: false,//左右の矢印はなし
  autoplay: true,//自動的に動き出すか。初期値はfalse。
  autoplaySpeed: 0,//自動的に動き出す待ち時間。初期値は3000ですが今回の見せ方では0
  speed: 7000,//スライドのスピード。初期値は300。
  infinite: true,//スライドをループさせるかどうか。初期値はtrue。
  pauseOnHover: false,//オンマウスでスライドを一時停止させるかどうか。初期値はtrue。
  pauseOnFocus: false,//フォーカスした際にスライドを一時停止させるかどうか。初期値はtrue。
  cssEase: 'linear',//動き方。初期値はeaseですが、スムースな動きで見せたいのでlinear
  slidesToShow: 3,//スライドを画面に4枚見せる
  slidesToScroll: 1,//1回のスライドで動かす要素数
  responsive: [
  {
    breakpoint: 399,//モニターの横幅が399px以下の見せ方
    settings: {
      slidesToShow: 2.3,//スライドを画面に1.5枚見せる
    }
  }
]
});





// 各ページメインビュースライダー


$('.mv_slider').slick({
  arrows: false,//左右の矢印はなし
  autoplay: true,//自動的に動き出すか。初期値はfalse。
  autoplaySpeed: 0,//自動的に動き出す待ち時間。初期値は3000ですが今回の見せ方では0
  speed: 7000,//スライドのスピード。初期値は300。
  infinite: true,//スライドをループさせるかどうか。初期値はtrue。
  pauseOnHover: false,//オンマウスでスライドを一時停止させるかどうか。初期値はtrue。
  pauseOnFocus: false,//フォーカスした際にスライドを一時停止させるかどうか。初期値はtrue。
  cssEase: 'linear',//動き方。初期値はeaseですが、スムースな動きで見せたいのでlinear
  slidesToShow: 4.1,//スライドを画面に4枚見せる
  slidesToScroll: 1,//1回のスライドで動かす要素数
  responsive: [
    {
    breakpoint: 769,//モニターの横幅が769px以下の見せ方
    settings: {
      slidesToShow: 3,//スライドを画面に2枚見せる
    }
  },
  {
    breakpoint: 399,//モニターの横幅が399px以下の見せ方
    settings: {
      slidesToShow: 2.1,//スライドを画面に1.5枚見せる
    }
  }
]
});






// お知らせアコーディオン


//アコーディオンをクリックした時の動作
$('.info_title').on('click', function() {//タイトル要素をクリックしたら
	$('.info_box').slideUp(500);//クラス名.boxがついたすべてのアコーディオンを閉じる
    
	var findElm = $(this).next(".info_box");//タイトル直後のアコーディオンを行うエリアを取得
    
	if($(this).hasClass('close')){//タイトル要素にクラス名closeがあれば
		$(this).removeClass('close');//クラス名を除去    
	}else{//それ以外は
		$('.close').removeClass('close'); //クラス名closeを全て除去した後
		$(this).addClass('close');//クリックしたタイトルにクラス名closeを付与し
		$(findElm).slideDown(500);//アコーディオンを開く
	}
});


