var songs = SC.songs;
var count = 0;

function buildList (isFirst) {

    $('#songs').empty();
    for(var i = 0; i < songs.length; i += 1) {
        if (isFirst) {
            console.log('isFirst');
            songs[i].isSelected = false;
            songs[i].id = i;
        }
        $('#songs').append('<div class="song-row"s>' +
            '<input class="song-row-select" data-id="' + songs[i].id + '" type="checkbox"' + 
            (songs[i].isSelected ? ' checked' : '' )+ '">' + 
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



$(document).ready(function () {

    buildList(true);

    var sortBy = document.querySelector('#sort-by');

    sortBy.addEventListener('change',function(){
        var value = $('#sort-by').val();
        sortSongs(value);
        buildList(false);
    });

    // var songSelect = document.querySelectorAll('.song-row-select');

    // for (var i = 0; i < songSelect.length; i += 1) {

    //     songSelect[i].addEventListener('change', function(e) {
    //         var id = $(e.target).data('id');
            
    //         var value = $(e.target).is(':checked');
    //         console.log(value);
    //         console.log(id);
    //         for (var j = 0; j < songs.length; j += 1) {
    //             if (songs[j].id === id && value) {
    //                 songs[j].isSelected = true;
    //             } else if (songs[j].id === id && !value) {
    //                 songs[j].isSelected = false;
    //             }
    //             if (songs[j].isSelected && value) {
    //                 count = count + 1;
    //             } else if (songs[j].isSelected && !value) {
    //                 count = count - 1;
    //             }
    //         }
    //         console.log(songs);
    //         console.log(count);
    //         $('#songs-count').html(count);
    //     });
    // }
})
