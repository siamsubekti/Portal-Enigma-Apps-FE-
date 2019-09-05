export enum AccountStatus {
    INACTIVE = 'INACTIVE',
    ACTIVE = 'ACTIVE',
    SUSPENDED = 'SUSPENDED',
    BLACKLISTED = 'BLACKLISTED',
  }

  export enum ProfileGender {
    MALE = 'MALE',
    FEMALE = 'FEMALE',
  }

  export enum ProfileReligion {
    BUDDHA = 'BUDDHA',
    HINDU = 'HINDU',
    ISLAM = 'ISLAM',
    KONG_HU_CHU = 'KONG HU CHU',
    CHRISTIAN = 'CHRISTIAN',
    CATHOLIC = 'CATHOLIC',
  }

  export enum ProfileMaritalStatus {
    SINGLE = 'SINGLE',
    IN_RELATIONSHIP = 'IN RELATIONSHIP',
    MARRIED = 'MARRIED',
    DIVORCED = 'DIVORCED',
  }

  export enum TypeAcademy {
    SMA = 'SMA',
    SMK = 'SMK',
    D3  = 'D3',
    S1  = 'S1',
    S2  = 'S2',
  }

  export enum RegionType {
    PROVINCE = 'PROVINSI',
    REGENCY = 'KABUPATEN',
    KOTA = 'KOTA',
    DISTRICT = 'KECAMATAN',
    VILLAGE = 'KELURAHAN',
  }

  export enum TemplateType {
    MAIL = 'MAIL',
    SMS = 'SMS',
  }

  export enum HttpMethod {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE',
  }


  const HttpStatusMessage: any = {
    100: 'Continue',
    101: 'Switching Protocols',
    102: 'Processing',
    200: 'OK',
    201: 'Created',
    202: 'Accepted',
    203: 'Non-authoritative Information',
    204: 'No Content',
    205: 'Reset Content',
    206: 'Partial Content',
    207: 'Multi-Status',
    208: 'Already Reported',
    226: 'IM Used',
    300: 'Multiple Choices',
    301: 'Moved Permanently',
    302: 'Found',
    303: 'See Other',
    304: 'Not Modified',
    305: 'Use Proxy',
    307: 'Temporary Redirect',
    308: 'Permanent Redirect',
    400: 'Bad Request',
    401: 'Unauthorized',
    402: 'Payment Required',
    403: 'Forbidden',
    404: 'Not Found',
    405: 'Method Not Allowed',
    406: 'Not Acceptable',
    407: 'Proxy Authentication Required',
    408: 'Request Timeout',
    409: 'Conflict',
    410: 'Gone',
    411: 'Length Required',
    412: 'Precondition Failed',
    413: 'Payload Too Large',
    414: 'Request-URI Too Long',
    415: 'Unsupported Media Type',
    416: 'Requested Range Not Satisfiable',
    417: 'Expectation Failed',
    418: 'I\'m a teapot',
    421: 'Misdirected Request',
    422: 'Unprocessable Entity',
    423: 'Locked',
    424: 'Failed Dependency',
    426: 'Upgrade Required',
    428: 'Precondition Required',
    429: 'Too Many Requests',
    431: 'Request Header Fields Too Large',
    444: 'Connection Closed Without Response',
    451: 'Unavailable For Legal Reasons',
    499: 'Client Closed Request',
    500: 'Internal Server Error',
    501: 'Not Implemented',
    502: 'Bad Gateway',
    503: 'Service Temporary Unavailable',
    504: 'Gateway Timeout',
    505: 'HTTP Version Not Supported',
    506: 'Variant Also Negotiates',
    507: 'Insufficient Storage',
    508: 'Loop Detected',
    510: 'Not Extended',
    511: 'Network Authentication Required',
    599: 'Network Connect Timeout Error',
  };

  const Icon: any = {
    'activity-outline' : 'activity-outline',
    'alert-circle-outline' : 'alert-circle-outline' ,
    'alert-triangle-outline' : 'alert-triangle-outline',
    'archive-outline' : 'archive-outline',
    'arrow-circle-down-outline' : 'arrow-circle-down-outline',
    'arrow-circle-up-outline' : 'arrow-circle-up-outline',
    'arrow-circle-left-outline' : 'arrow-circle-left-outline',
    'arrow-circle-right-outline' : 'arrow-circle-right-outline',
    'arrow-down-outline' : 'arrow-down-outline',
    'arrow-up-outline' : 'arrow-up-outline',
    'arrow-left-outline' : 'arrow-left-outline',
    'arrow-right-outline' : 'arrow-right-outline',
    'arrow-downward-outline' : 'arrow-downward-outline',
    'arrow-upward-outline' : 'arrow-upward-outline',
    'arrow-back-outline' : 'arrow-back-outline',
    'arrow-forward-outline' : 'arrow-forward-outline',
    'arrow-ios-downward-outline' : 'arrow-ios-downward-outline',
    'arrow-ios-upward-outline' : 'arrow-ios-upward-outline',
    'arrow-ios-back-outline' : 'arrow-ios-back-outline',
    'arrow-ios-forward-outline' : 'arrow-ios-forward-outline',
    'arrowhead-down-outline' : 'arrowhead-down-outline',
    'arrowhead-up-outline' : 'arrowhead-up-outline',
    'arrowhead-left-outline' : 'arrowhead-left-outline',
    'arrowhead-right-outline' : 'arrowhead-right-outline',
    'at-outline' : 'at-outline',
    'attach-2-outline' : 'attach-2-outline',
    'attach-outline' : 'attach-outline',
    'award-outline' : 'award-outline',
    'backspace-outline' : 'backspace-outline',
    'bar-chart-2-outline' : 'bar-chart-2-outline',
    'bar-chart-outline' : 'bar-chart-outline',
    'battery outline' : 'battery outline',
    'behance-outline' : 'behance-outline',
    'bell-off-outline' : 'bell-off-outline',
    'bell-outline' : 'bell-outline',
    'bluetooth-outline' : 'bluetooth-outline',
    'book-open-outline' : 'book-open-outline',
    'book-outline' : 'book-outline',
    'bookmark-outline' : 'bookmark-outline',
    'briefcase-outline' : 'briefcase-outline',
    'browser-outline' : 'browser-outline',
    'brush-outline' : 'brush-outline',
    'bulb-outline' : 'bulb-outline',
    'calendar-outline' : 'calendar-outline',
    'camera-outline' : 'camera-outline',
    'car-ouline' : 'car-ouline',
    'cast-outline' : 'cast-outline',
    'charging-outline' : 'charging-outline',
    'checkmark-circle-2-outline' : 'checkmark-circle-2-outline',
    'checkmark-circle-outline' : 'checkmark-circle-outline',
    'checkmark-outline' : 'checkmark-outline',
    'checkmark-square-2-outline' : 'checkmark-square-2-outline',
    'checkmark-square-outline' : 'checkmark-square-outline',
    'chevron-down-outline' : 'chevron-down-outline',
    'chevron-left-outline' : 'chevron-left-outline',
    'chevron-right-outline' : 'chevron-right-outline',
    'chevron-up-outline' : 'chevron-up-outline',
    'clipboard-outline' : 'clipboard-outline',
    'clock-outline' : 'clock-outline',
    'close-circle-outline' : 'close-circle-outline',
    'close-outline' : 'close-outline',
    'close-square-outline' : 'close-square-outline',
    'cloud-download-outline' : 'cloud-download-outline',
    'cloud-upload-outline' : 'cloud-upload-outline',
    'code-download-outline' : 'code-download-outline',
    'code-outline' : 'code-outline',
    'collapse-outline' : 'collapse-outline',
    'color-palette-outline' : 'color-palette-outline',
    'color-picker-outline' : 'color-picker-outline',
    'compass-outline' : 'compass-outline',
    'copy-outline' : 'copy-outline',
    'corner-down-left-outline' : 'corner-down-left-outline',
    'corner-down-right-outline' : 'corner-down-right-outline',
    'corner-left-down-outline' : 'corner-left-down-outline',
    'corner-left-up-outline' : 'corner-left-up-outline',
    'corner-right-down-outline' : 'corner-right-down-outline',
    'corner-right-up-outline' : 'corner-right-up-outline',
    'corner-up-left-outline' : 'corner-up-left-outline',
    'corner-up-right-outline' : 'corner-up-right-outline',
    'credit-card-outline' : 'credit-card-outline',
    'crop-outline' : 'crop-outline',
    'cube-outline' : 'cube-outline',
    'diagonal-arrow-left-down-outline' : 'diagonal-arrow-left-down-outline',
    'diagonal-arrow-left-up-outline' : 'diagonal-arrow-left-up-outline',
    'diagonal-arrow-right-down-outline' : 'diagonal-arrow-right-down-outline',
    'diagonal-arrow-right-up-outline' : 'diagonal-arrow-right-up-outline',
    'done-all-outline' : 'done-all-outline',
    'download-outline' : 'download-outline',
    'droplet-off-outline' : 'droplet-off-outline',
    'droplet-outline' : 'droplet-outline',
    'edit-2-outline' : 'edit-2-outline',
    'edit-outline' : 'edit-outline',
    'email-outline' : 'email-outline',
    'expand-outline' : 'expand-outline',
    'external-link-outline' : 'external-link-outline',
    'eye-off-2-outline' : 'eye-off-2-outline',
    'eye-off-outline' : 'eye-off-outline',
    'eye-outline' : 'eye-outline',
    'facebook-outline' : 'facebook-outline',
    'file-add-outline' : 'file-add-outline',
    'file-outline' : 'file-outline',
    'file-remove-outline' : 'file-remove-outline',
    'file-text-outline' : 'file-text-outline',
    'film-outline' : 'film-outline',
    'flag-outline' : 'flag-outline',
    'flash-off-outline' : 'flash-off-outline',
    'flash-outline' : 'flash-outline',
    'flip-outline' : 'flip-outline',
    'flip-2-outline' : 'flip-2-outline',
    'folder-add-outline' : 'folder-add-outline',
    'folder-outline' : 'folder-outline',
    'folder-remove-outline' : 'folder-remove-outline',
    'funnel-outline' : 'funnel-outline',
    'gift-outline' : 'gift-outline',
    'github-outline' : 'github-outline',
    'globe-2-outline' : 'globe-2-outline',
    'globe-outline' : 'globe-outline',
    'google-outline' : 'google-outline',
    'grid-outline' : 'grid-outline',
    'hard-drive-outline' : 'hard-drive-outline',
    'hash-outline' : 'hash-outline',
    'headphones-outline' : 'headphones-outline',
    'heart-outline' : 'heart-outline',
    'home-outline' : 'home-outline',
    'image-outline' : 'image-outline',
    'inbox-outline' : 'inbox-outline',
    'info-outline' : 'info-outline',
    'keypad-outline' : 'keypad-outline',
    'layers-outline' : 'layers-outline',
    'layout-outline' : 'layout-outline',
    'link-2-outline' : 'link-2-outline',
    'link-outline' : 'link-outline',
    'linkedin-outline' : 'linkedin-outline',
    'list-outline' : 'list-outline',
    'loader-outline' : 'loader-outline',
    'lock-outline' : 'lock-outline',
    'log-in-outline' : 'log-in-outline',
    'log-out-outline' : 'log-out-outline',
    'map-outline' : 'map-outline',
    'maximize-outline' : 'maximize-outline',
    'menu-2-outline' : 'menu-2-outline',
    'menu-arrow-outline' : 'menu-arrow-outline',
    'menu-outline' : 'menu-outline',
    'message-circle-outline' : 'message-circle-outline',
    'message-square-outline' : 'message-square-outline',
    'mic-off-outline' : 'mic-off-outline',
    'mic-outline' : 'mic-outline',
    'minimize-outline' : 'minimize-outline',
    'minus-circle-outline' : 'minus-circle-outline',
    'minus-outline' : 'minus-outline',
    'minus-square-outline' : 'minus-square-outline',
    'monitor-outline' : 'monitor-outline',
    'moon-outline' : 'moon-outline',
    'more-horizontal-outline' : 'more-horizontal-outline',
    'more-vertical-outline' : 'more-vertical-outline',
    'move-outline' : 'move-outline',
    'music-outline' : 'music-outline',
    'navigation-2-outline' : 'navigation-2-outline',
    'navigation-outline' : 'navigation-2-outline',
    'npm-outline' : 'npm-outline',
    'options-2-outline' : 'options-2-outline',
    'options-outline' : 'options-outline',
    'pantone-outline' : 'pantone-outline',
    'paper-plane-outline' : 'paper-plane-outline',
    'pause-circle-outline' : 'pause-circle-outline',
    'people-outline' : 'people-outline',
    'percent-outline' : 'percent-outline',
    'person-add-outline' : 'person-add-outline',
    'person-delete-outline' : 'person-delete-outline',
    'person-done-outline' : 'person-done-outline',
    'person-outline' : 'person-outline',
    'person-remove-outline' : 'person-remove-outline',
    'phone-call-outline' : 'phone-call-outline',
    'phone-missed-outline' : 'phone-missed-outline',
    'phone-off-outline' : 'phone-off-outline',
    'phone-outline' : 'phone-outline',
    'pie-chart-outline' : 'pie-chart-outline',
    'pin-outline' : 'pin-outline',
    'play-circle-outline' : 'play-circle-outline',
    'plus-circle-outline' : 'plus-circle-outline',
    'plus-outline' : 'plus-outline',
    'plus-square-outline' : 'plus-square-outline',
    'power-outline' : 'power-outline',
    'pricetags-outline' : 'pricetags-outline',
    'printer-outline' : 'printer-outline',
    'question-mark-circle-outline' : 'question-mark-circle-outline',
    'question-mark-outline' : 'question-mark-outline',
    'radio-button-off-outline' : 'radio-button-off-outline',
    'radio-button-on-outline' : 'radio-button-on-outline',
    'radio-outline' : 'radio-outline',
    'recording-outline' : 'recording-outline',
    'refresh-outline' : 'refresh-outline',
    'repeat-outline' : 'repeat-outline',
    'rewind-left-outline' : 'rewind-left-outline',
    'rewind-right-outline' : 'rewind-right-outline',
    'save-outline' : 'save-outline',
    'scissors-outline' : 'scissors-outline',
    'search-outline' : 'search-outline',
    'settings-2-outline' : 'settings-2-outline',
    'settings-outline' : 'settings-outline',
    'share-outline' : 'share-outline',
    'shake-outline' : 'shake-outline',
    'shield-off-outline' : 'shield-off-outline',
    'shield-outline' : 'shield-outline',
    'shopping-bag-outline' : 'shopping-bag-outline',
    'shopping-cart-outline' : 'shopping-cart-outline',
    'shuffle-2-outline' : 'shuffle-2-outline',
    'shuffle-outline' : 'shuffle-outline',
    'skip-back-outline' : 'skip-back-outline',
    'skip-forward-outline' : 'skip-forward-outline',
    'slash-outline' : 'slash-outline',
    'smartphone-outline' : 'smartphone-outline',
    'speaker-outline' : 'speaker-outline',
    'square-outline' : 'square-outline',
    'star-outline' : 'star-outline',
    'stop-circle-outline' : 'stop-circle-outline',
    'sun-outline' : 'sun-outline',
    'swap-outline' : 'swap-outline',
    'sync-outline' : 'sync-outline',
    'text-outline' : 'text-outline',
    'thermometer-minus-outline' : 'thermometer-minus-outline',
    'thermometer-outline' : 'thermometer-outline',
    'thermometer-plus-outline' : 'thermometer-plus-outline',
    'toggle-left-outline' : 'toggle-left-outline',
    'toggle-right-outline' : 'toggle-right-outline',
    'trash-2-outline' : 'trash-2-outline',
    'trash-outline' : 'trash-outline',
    'trending-down-outline' : 'trending-down-outline',
    'trending-up-outline' : 'trending-up-outline',
    'tv-outline' : 'tv-outline',
    'twitter-outline' : 'twitter-outline',
    'umbrella-outline' : 'umbrella-outline',
    'undo-outline' : 'undo-outline',
    'unclock-outline' : 'unclock-outline',
    'upload-outline' : 'upload-outline',
    'video-off-outline' : 'video-off-outline',
    'video-outline' : 'video-outline',
    'volume-down-outline' : 'volume-down-outline',
    'volume-mute-outline' : 'volume-mute-outline',
    'volume-off-outline' : 'volume-off-outline',
    'volume-up-outline' : 'volume-up-outline',
    'wifi-off-outline' : 'wifi-off-outline',
    'wifi-outline' : 'wifi-outline',
  };

  export { HttpStatusMessage, Icon };