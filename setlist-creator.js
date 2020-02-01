var songs = SC.songs;

function buildList () {

    $('#songs').empty();
    for(var i = 0; i < songs.length; i += 1) {
        $('#songs').append('<div data-id="' + (i + 1) + '">' + 
            songs[i].Song + 
            ' - <b>' + songs[i].Artist + 
            '</b> - ' + songs[i].Vibe +
            ' - <b>' + songs[i].Capo +
            '</b></div>');
    }
}

function sortSongs (value) {
    songs.sort((a, b) => (a[value] > b[value]) ? 1 : -1);
}

var select = document.querySelector('#sort-by');

select.addEventListener('change',function(){
    var value = $('#sort-by').val();
    sortSongs(value);
    buildList();
});

$(document).ready(function () {
    buildList();
})
