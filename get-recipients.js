jQuery(document).ready(function ($) {
  setTimeout(function () {
      $.ajax({
          url: os_data.ajax_url,
          type: 'POST',
          data: {
              action: 'get_recipients',
              notification_id: os_data.notification_id,
          },
      });
  }, 10000); // 10 seconds delay
});
