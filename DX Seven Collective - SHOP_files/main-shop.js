$(document).ready(function () {
    var url = '/proxy.php?cat=12';
    $.ajax({
        type: 'GET',
        url: url,
        async: false,
        contentType: "application/rss+xml",
        dataType: 'xml',
        success: function (xml) {
            $(xml).find('item').each(function (index) {
                var title = $(this).find('title').text(),
                    url = $(this).find('link').text(),
                    content = $(this).find('description').next()[0].firstChild.data,
                    pubDate = $(this).find('pubDate').text();

                $(".content-ph").html(content);

                $('.span-size-chart').click(function (e) {
		             $('#basic-modal-content').modal({overlayClose:true});
		                return false;
	            });
            });
        }
    });

});
