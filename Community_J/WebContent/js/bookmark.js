/*  @@@ 스크랩 부분 연습 @@@ / scrap.html과 bookmark.js는 임시로 만들어서 연습 */
<script>

$(document).ready(function() {

    $('#favorite').on('click', function(e) {

	var bookmarkURL = window.location.href;

	var bookmarkTitle = document.title;

	var triggerDefault = false;



	if (window.sidebar && window.sidebar.addPanel) {

	    window.sidebar.addPanel(bookmarkTitle, bookmarkURL, '');

	} else if ((window.sidebar && (navigator.userAgent.toLowerCase().indexOf('firefox') > -1)) || (window.opera && window.print)) {

	    var $this = $(this); $this.attr('href', bookmarkURL);

	    $this.attr('title', bookmarkTitle);

	    $this.attr('rel', 'sidebar');

	    $this.off(e);

	    triggerDefault = true;

	} else if (window.external && ('AddFavorite' in window.external)) {

	    window.external.AddFavorite(bookmarkURL, bookmarkTitle);

	} else {

	    alert((navigator.userAgent.toLowerCase().indexOf('mac') != -1 ? 'Cmd' : 'Ctrl') + '+D 키를 눌러 스크랩하실 수 있습니다.');

	}

	return triggerDefault;

    })

});

</script>

