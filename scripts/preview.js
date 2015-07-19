/**
 *
 * Created by hywilliam on 7/19/15.
 */
;
(function () {
  // hywilliam edit-preview scope
  $(document).ready(function () {
    // checkout the localstorage
    // editor as the data model
    var content = localStorage['editor'] || '';
    // init
    //$('#text-input').val(content);
    $('#preview').html(marked(content));
    // real-time preview
    $('#text-input').val(content).bind('input', function () {
      content = $(this).val();
      $('#preview').html(marked(content));
    });
    // 数据持久化
    function store() {
      localStorage['editor'] = content;
    }

    // 5min定时更新 5*60*1000
    setInterval(store, 300000);
    $(window).on('unload', store);
  });
})();
