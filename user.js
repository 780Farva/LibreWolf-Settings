// LibreWolf settings
// Version: 0.01 [11.08.2024]
// Description: LibreWolf browser settings, which allow you to disable many unnecessary and unsafe functions, 
// as well as optimize other parameters to achieve maximum performance. At the same time, 
// the correct operation of the sites is ensured without "breaking" them.
// by Enobraed
// Telegram: https://t.me/Enobraed
//-----------------------------------------------------------------------------------------------------------
// Customizing the GUI
// Настройка графического интерфейса
// Description: This section customizes some elements of the browser interface.
// Описание: В этом разделе настраиваются некоторые элементы интерфейса браузера.

// Enable compact icon mode
// Включить режим компактных значков
user_pref("browser.compactmode.show", true);
user_pref("browser.uidensity", 1);

// Hide "list of all tabs" item
// Скрыть элемент "список всех вкладок"
user_pref("browser.tabs.tabmanager.enabled", false);

// Disable the about:config warning
// Отключить предупреждение about:config
user_pref("browser.aboutConfig.showWarning", false);

// Enable prompting when closing multiple tabs
// Включить запрос при закрытии нескольких вкладок
user_pref("browser.tabs.warnOnClose", true);
user_pref("browser.tabs.warnOnCloseOtherTabs", true);

// Disabling adding the list of uploaded files to the "Recent Documents" list
// Отключить добавление списка загруженных файлов в список "Последние документы"
user_pref("browser.download.manager.addToRecentDocs", false);

// Disabling the appearance of the "What's New" autoloading page after a browser refresh
// Отключить отображение страницы "Что нового" после обновления браузера
user_pref("browser.startup.homepage_override.mstone", "ignore");

// Disable the new simplified and unified dialog for user data cleansing
// Отключить новый упрощенный и унифицированный диалог для очистки пользовательских данных
user_pref("privacy.sanitize.useOldClearHistoryDialog", true);

// Select "Delete All" when deleting history
// Выбрать "Удалить все" при удалении истории
user_pref("privacy.sanitize.timeSpan", 0);

// Add "Image Info" item to the context menu of images
// Добавить пункт "Информация об изображении" в контекстное меню изображений
user_pref("browser.menu.showViewImageInfo", true);

// Enable searching for text on a page as you type it
// Включить поиск текста на странице по мере его ввода
user_pref("accessibility.typeaheadfind", true);
//-----------------------------------------------------------------------------------------------------------
// Disabling access to devices
// Отключение доступа к устройствам
// Description: This section disables access to various peripherals that may be connected to the device.
// Описание: В этом разделе отключается доступ к различным периферийным устройствам, которые могут быть подключены к устройству.

// Disable microphone access
// Отключить доступ к микрофону
user_pref("media.getusermedia.microphone.off_while_disabled.delay_ms", 0);
user_pref("media.getusermedia.microphone.off_while_disabled.enabled", false);
user_pref("media.getusermedia.microphone.prefer_voice_stream_with_processing.enabled", false);
user_pref("media.getusermedia.microphone.voice_stream_priming.enabled", false);
user_pref("permissions.default.microphone", 2);

// Disable camera access
// Отключить доступ к камере
user_pref("media.getusermedia.camera.background.mute.enabled", false);
user_pref("media.getusermedia.camera.macavf.enabled", false);
user_pref("media.getusermedia.camera.off_while_disabled.delay_ms", 0);
user_pref("media.getusermedia.camera.off_while_disabled.enabled", false);
user_pref("permissions.default.camera", 2);

// Disable gamepad access
// Отключить доступ к геймпаду
user_pref("dom.gamepad.enabled", false);
user_pref("dom.gamepad.extensions.enabled", false);
user_pref("dom.gamepad.extensions.lightindicator", false);
user_pref("dom.gamepad.extensions.multitouch", false);
user_pref("dom.gamepad.haptic_feedback.enabled", false);
user_pref("dom.gamepad.non_standard_events.enabled", false);
user_pref("dom.gamepad.test.enabled", false);

// Disable access to the device's sensors
// Отключить доступ к датчикам устройства
user_pref("device.sensors.ambientLight.enabled", false);
user_pref("device.sensors.enabled", false);
user_pref("device.sensors.motion.enabled", false);
user_pref("device.sensors.orientation.enabled", false);
user_pref("device.sensors.proximity.enabled", false);
user_pref("device.sensors.test.events", false);

// Disable vibration access
// Отключить доступ к вибрации
user_pref("dom.vibrator.enabled", false);
user_pref("dom.vibrator.max_vibrate_list_len", 0);
user_pref("dom.vibrator.max_vibrate_ms", 0);

// Disable access to the device's battery (battery on a laptop)
// Отключить доступ к аккумулятору устройства (аккумулятору ноутбука)
user_pref("dom.battery.enabled", false);

// Disable access to virtual reality (virtual reality glasses, etc.)
// Отключить доступ к виртуальной реальности (очки виртуальной реальности и т.д.)
user_pref("dom.vr.always_support_ar", false);
user_pref("dom.vr.always_support_vr", false);
user_pref("dom.vr.autoactivate.enabled", false);
user_pref("dom.vr.controller.enumerate.interval", 0);
user_pref("dom.vr.controller_trigger_threshold", "0");
user_pref("dom.vr.display.enumerate.interval", 0);
user_pref("dom.vr.display.rafMaxDuration", 0);
user_pref("dom.vr.enabled", false);
user_pref("dom.vr.external.notdetected.timeout", 0);
user_pref("dom.vr.external.quit.timeout", 0);
user_pref("dom.vr.inactive.timeout", 0);
user_pref("dom.vr.navigation.timeout", 0);
user_pref("dom.vr.oculus.enabled", false);
user_pref("dom.vr.oculus.invisible.enabled", false);
user_pref("dom.vr.oculus.present.timeout", 0);
user_pref("dom.vr.openvr.enabled", false);
user_pref("dom.vr.osvr.enabled", false);
user_pref("dom.vr.poseprediction.enabled", false);
user_pref("dom.vr.process.enabled", false);
user_pref("dom.vr.process.startup_timeout_ms", 0);
user_pref("dom.vr.puppet.enabled", false);
user_pref("dom.vr.require-gesture", false);
user_pref("dom.vr.webxr.enabled", false);
user_pref("dom.vr.webxr.quantization", "0");
//-----------------------------------------------------------------------------------------------------------
// Configuring scripts on web pages
// Настройка скриптов на веб-страницах
// Description: This section configures the behavior of scripts on web sites.
// Описание: В этом разделе настраивается поведение скриптов на веб-сайтах.

// Prohibiting scripts from changing the focus of windows (moving one to another)
// Запретить скриптам изменять фокус окон (перемещать одно окно на другое)
user_pref("dom.disable_window_flip", true);

// Prohibiting scripts from resizing/moving windows
// Запретить скриптам изменять размер/перемещать окна
user_pref("dom.disable_window_move_resize", true);

// Prohibiting scripts from closing windows/tabs
// Запретить скриптам закрывать окна/вкладки
user_pref("dom.allow_scripts_to_close_windows", false);

// Preventing scripts from accessing the clipboard
// Закрыть доступ скриптам к буферу обмена
user_pref("dom.event.clipboardevents.enabled", false);
//-----------------------------------------------------------------------------------------------------------
// Configuring Page rendering
// Настройка рендеринга страниц
// Description: This section configures the rendering of pages and their content for maximum performance.
// Описание: В этом разделе настраивается рендеринг страниц и их содержимого для максимальной производительности.

// Hardware acceleration activation, page rendering acceleration
// Активация аппаратного ускорения, ускорение рендеринга страниц
user_pref("dom.webgpu.enabled", true);
user_pref("gfx.canvas.accelerated", true);
user_pref("gfx.canvas.accelerated.aa-stroke.enabled", true);
user_pref("gfx.canvas.accelerated.async-present", true);
user_pref("gfx.canvas.accelerated.force-enabled", true);
user_pref("gfx.direct2d.disabled", false);
user_pref("gfx.direct2d.force-enabled", true);
user_pref("gfx.direct2d.target-independent-rasterization.disabled", false);
user_pref("gfx.direct3d11.allow-keyed-mutex", true);
user_pref("gfx.direct3d11.break-on-error", false);
user_pref("gfx.direct3d11.enable-debug-layer", false);
user_pref("gfx.direct3d11.reuse-decoder-device", true);
user_pref("gfx.direct3d11.reuse-decoder-device-force-enabled", true);
user_pref("gfx.direct3d11.use-double-buffering", true);
user_pref("gfx.webrender.all", true);
user_pref("gfx.webrender.compositor", true);
user_pref("gfx.webrender.compositor.force-enabled", true);
user_pref("gfx.webrender.flip-sequential", true);
user_pref("gfx.webrender.force-partial-present", true);
user_pref("gfx.webrender.pbo-uploads", true);
user_pref("gfx.webrender.precache-shaders", true);
user_pref("gfx.webrender.quality.force-subpixel-aa-where-possible", true);
user_pref("gfx.webrender.scissored-cache-clears.enabled", true);
user_pref("gfx.webrender.scissored-cache-clears.force-enabled", true);
user_pref("layers.acceleration.disabled", false);
user_pref("layers.acceleration.force-enabled", true);
user_pref("layers.d3d11.enable-blacklist", false);
user_pref("layers.force-active", true);
user_pref("layers.gpu-process.enabled", true);
user_pref("layers.gpu-process.force-enabled", true);
user_pref("media.hardware-video-decoding.enabled", true);
user_pref("media.hardware-video-decoding.force-enabled", true);
user_pref("media.navigator.mediadatadecoder_vpx_enabled", true);
user_pref("webgl.force-enabled", true);

// Disable the delay before starting page rendering
// Отключить задержку перед началом рендеринга страницы
user_pref("nglayout.initialpaint.delay", 0);
user_pref("nglayout.initialpaint.delay_in_oopif", 0);

// Turn off the animation of opening the video to full and the prompt "press esc.."
// Отключить анимацию полного открытия видео и подсказку "нажмите esc.."
user_pref("full-screen-api.transition-duration.enter", "0");
user_pref("full-screen-api.transition-duration.leave", "0");
user_pref("full-screen-api.transition.timeout", "0");
user_pref("full-screen-api.warning.timeout", 0);

// Disable transition prediction and page content preloading
// Отключить прогнозирование перехода и предварительную загрузку содержимого страницы
user_pref("browser.urlbar.speculativeConnect.enabled", false);
user_pref("dom.prefetch_dns_for_anchor_http_document", false);
user_pref("dom.prefetch_dns_for_anchor_https_document", false);
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true);
user_pref("network.dns.prefetch_via_proxy", false);
user_pref("network.predictor.doing-tests", false);
user_pref("network.predictor.enable-hover-on-ssl", false);
user_pref("network.predictor.enable-prefetch", false);
user_pref("network.predictor.enabled", false);
user_pref("network.predictor.max-resources-per-entry", 0);
user_pref("network.predictor.max-uri-length", 0);
user_pref("network.predictor.page-degradation.day", 0);
user_pref("network.predictor.page-degradation.max", 0);
user_pref("network.predictor.page-degradation.month", 0);
user_pref("network.predictor.page-degradation.week", 0);
user_pref("network.predictor.page-degradation.year", 0);
user_pref("network.predictor.preconnect-min-confidence", 0);
user_pref("network.predictor.prefetch-force-valid-for", 0);
user_pref("network.predictor.prefetch-min-confidence", 0);
user_pref("network.predictor.prefetch-rolling-load-count", 0);
user_pref("network.predictor.preresolve-min-confidence", 0);
user_pref("network.predictor.subresource-degradation.day", 0);
user_pref("network.predictor.subresource-degradation.max", 0);
user_pref("network.predictor.subresource-degradation.month", 0);
user_pref("network.predictor.subresource-degradation.week", 0);
user_pref("network.predictor.subresource-degradation.year", 0);
user_pref("network.prefetch-next", false);
//-----------------------------------------------------------------------------------------------------------
// Configuring a variety of caching
// Настройка различных методов кэширования
// Description: This section configures caching.
// Описание: В этом разделе настраивается кэширование.

// Enable disk caching
// Включить кэширование диска
user_pref("browser.cache.disk.enable", true);

// Disable automatic disk cache size detection
// Отключить автоматическое определение размера дискового кэша
user_pref("browser.cache.disk.smart_size.enabled", false);
//-----------------------------------------------------------------------------------------------------------
// Disable unnecessary functions and various timeouts
// Отключить ненужные функции и различные тайм-ауты
// Description: This section disables unnecessary browser functions that load the engine.
// Описание: В этом разделе отключаются ненужные функции браузера, которые загружают движок.

// Disable performance metrics
// Отключить счётчики производительности
user_pref("dom.enable_performance", false);
user_pref("dom.enable_performance_navigation_timing", false);
user_pref("dom.enable_performance_observer", false);
user_pref("dom.enable_resource_timing", false);
user_pref("dom.performance.enable_notify_performance_timing", false);
user_pref("dom.performance.enable_user_timing_logging", false);
user_pref("dom.performance.time_to_contentful_paint.enabled", false);
user_pref("dom.performance.time_to_dom_content_flushed.enabled", false);
user_pref("dom.performance.time_to_first_interactive.enabled", false);
user_pref("dom.performance.time_to_non_blank_paint.enabled", false);
user_pref("media.video_stats.enabled", false);
user_pref("network.http.speculative-parallel-limit", 0);

// Disable Internet connection testing at each startup
// Отключить проверку подключения к Интернету при каждом запуске
user_pref("network.connectivity-service.enabled", false);

// Disable file download protection over unsecured connections
// Отключить защиту скачивания файлов через незащищенные соединения
user_pref("dom.block_download_insecure", false);

// Disable the delay in installing extensions
// Отключить задержку при установке расширений
user_pref("security.dialog_enable_delay", 0);

// Blocking functionality that monitors the use of WI-FI networks
// Блокирование функционала, следящего за использованием WI-FI-сетей
user_pref("network.tickle-wifi.enabled", false);

// Disable network connection information
// Отключить информацию о сетевом соединении
user_pref("dom.netinfo.enabled", false);
user_pref("network.manage-offline-status", false);

// Prohibiting checking the browser installed by default in the operating system
// Запретить проверку браузера, установленного по умолчанию в операционной системе
user_pref("browser.shell.checkDefaultBrowser", false);
//-----------------------------------------------------------------------------------------------------------
// Disable unsafe functions
// Отключить небезопасные функции
// Description: This section disables vulnerable features in the browser that can be used for bad purposes.
// Описание: Этот раздел отключает уязвимые функции в браузере, которые могут быть использованы в недобросовестных целях.

// Disable geolocation
// Отключить геолокацию
user_pref("browser.geolocation.warning.infoURL", "");
user_pref("geo.enabled", false);
user_pref("geo.provider.ms-windows-location", false);
user_pref("geo.provider.network.timeout", 0);
user_pref("geo.provider.network.timeToWaitBeforeSending", 0);
user_pref("geo.provider.network.url", "");
user_pref("geo.provider.use_corelocation", false);
user_pref("geo.provider.use_geoclue", false);
user_pref("geo.provider.use_gpsd", false);
user_pref("geo.timeout", 0);
user_pref("permissions.default.geo", 2);

// Disable substitution of the requested pages to the provider's page
// Отключить замену запрошенных страниц на страницу провайдера
user_pref("captivedetect.canonicalContent", "");
user_pref("captivedetect.canonicalURL", "");
user_pref("captivedetect.maxRetryCount", 0);
user_pref("captivedetect.maxWaitingTime", 0);
user_pref("captivedetect.pollingTime", 0);
user_pref("network.captive-portal-service.backoffFactor", "");
user_pref("network.captive-portal-service.enabled", false);
user_pref("network.captive-portal-service.maxInterval", 0);
user_pref("network.captive-portal-service.minInterval", 0);

// Disable push notifications
// Отключить push-уведомления
user_pref("dom.push.connection.enabled", false);
user_pref("dom.push.enabled", false);
user_pref("dom.push.http2.maxRetries", 0);
user_pref("dom.push.http2.reset_retry_count_after_ms", 0);
user_pref("dom.push.http2.retryInterval", 0);
user_pref("dom.push.loglevel", "");
user_pref("dom.push.maxQuotaPerSubscription", 0);
user_pref("dom.push.maxRecentMessageIDsPerSubscription", 0);
user_pref("dom.push.pingInterval", 0);
user_pref("dom.push.quotaUpdateDelay", 0);
user_pref("dom.push.requestTimeout", 0);
user_pref("dom.push.retryBaseInterval", 0);
user_pref("dom.push.serverURL", "");
user_pref("dom.push.userAgentID", "");
user_pref("dom.serviceWorkers.enabled", false);
user_pref("dom.webnotifications.enabled", false);
user_pref("permissions.default.desktop-notification", 2);
user_pref("permissions.desktop-notification.notNow.enabled", false);
user_pref("permissions.desktop-notification.postPrompt.enabled", false);

// Remove the rights set by default (close the ability to read some data from about:support for sites)
// Удалить права, установленные по умолчанию (закрыть возможность чтения некоторых данных из раздела "about:support")
user_pref("permissions.manager.defaultsUrl", "");

// Disable WebRTC
// Отключить WebRTC
user_pref("media.peerconnection.default_iceservers", "[]");
user_pref("media.peerconnection.enabled", false);
user_pref("media.peerconnection.ice.default_address_only", true);
user_pref("media.peerconnection.ice.no_host", true);
user_pref("media.peerconnection.ice.relay_only", true);
user_pref("media.peerconnection.ice.tcp", false);
user_pref("media.peerconnection.ice.tcp_so_sock_count", 0);
user_pref("media.peerconnection.turn.disable", true);
user_pref("media.peerconnection.use_document_iceservers", false);

// Disable IPv6
// Отключить IPv6
user_pref("network.connectivity-service.IPv6.url", "");
user_pref("network.dns.disableIPv6", true);
user_pref("network.dns.preferIPv6", false);
user_pref("network.http.http3.block_loopback_ipv6_addr", false);
user_pref("network.notify.IPv6", false);

// Disable the Web Audio API (required for some games)
// Отключить Web Audio API (требуется для некоторых игр)
user_pref("dom.webaudio.enabled", false);

// Disable speech recognition
// Отключить распознавание речи
user_pref("media.webspeech.recognition.enable", false);
user_pref("media.webspeech.recognition.force_enable", false);
user_pref("media.webspeech.synth.enabled", false);
user_pref("media.webspeech.synth.force_global_queue", false);
user_pref("media.webspeech.test.enable", false);
user_pref("media.webspeech.test.fake_fsm_events", false);
user_pref("media.webspeech.test.fake_recognition_service", false);

// Prohibition of viewing PDF documents using the browser (using HTML5)
// Запрет на просмотр PDF-документов с помощью браузера (с использованием HTML5)
user_pref("browser.download.open_pdf_attachments_inline", false);
user_pref("browser.helperApps.showOpenOptionForPdfJS", false);
user_pref("browser.pdf.launchDefaultEdgeAsApp", false);
user_pref("browser.pdfjs.feature-tour", "");
user_pref("browser.shell.checkDefaultPDF", false);
user_pref("browser.shell.checkDefaultPDF.silencedByUser", false);
user_pref("browser.shell.setDefaultPDFHandler", false);
user_pref("browser.shell.setDefaultPDFHandler.onlyReplaceBrowsers", false);
user_pref("pdfjs.annotationEditorMode", 0);
user_pref("pdfjs.annotationMode", 0);
user_pref("pdfjs.cursorToolOnLoad", 0);
user_pref("pdfjs.defaultZoomDelay", 0);
user_pref("pdfjs.defaultZoomValue", "");
user_pref("pdfjs.disableAutoFetch", true);
user_pref("pdfjs.disabled", true);
user_pref("pdfjs.disableFontFace", true);
user_pref("pdfjs.disablePageLabels", true);
user_pref("pdfjs.disableRange", true);
user_pref("pdfjs.disableStream", true);
user_pref("pdfjs.enabledCache.state", false);
user_pref("pdfjs.enableHighlightEditor", false);
user_pref("pdfjs.enableHighlightFloatingButton", false);
user_pref("pdfjs.enableML", false);
user_pref("pdfjs.enablePermissions", false);
user_pref("pdfjs.enablePrintAutoRotate", false);
user_pref("pdfjs.enableScripting", false);
user_pref("pdfjs.enableStampEditor", false);
user_pref("pdfjs.enableXfa", false);
user_pref("pdfjs.externalLinkTarget", 0);
user_pref("pdfjs.forcePageColors", false);
user_pref("pdfjs.handleOctetStream", false);
user_pref("pdfjs.highlightEditorColors", "");
user_pref("pdfjs.historyUpdateUrl", false);
user_pref("pdfjs.ignoreDestinationZoom", false);
user_pref("pdfjs.migrationVersion", 0);
user_pref("pdfjs.pageColorsBackground", "");
user_pref("pdfjs.pageColorsForeground", "");
user_pref("pdfjs.pdfBugEnabled", false);
user_pref("pdfjs.previousHandler.alwaysAskBeforeHandling", false);
user_pref("pdfjs.previousHandler.preferredAction", 0);
user_pref("pdfjs.scrollModeOnLoad", 0);
user_pref("pdfjs.sidebarViewOnLoad", 0);
user_pref("pdfjs.spreadModeOnLoad", 0);
user_pref("pdfjs.textLayerMode", 0);
user_pref("pdfjs.viewOnLoad", 0);
user_pref("print.save_as_pdf.internal_destinations.enabled", false);
user_pref("print.save_as_pdf.links.enabled", false);
user_pref("print.save_as_pdf.use_page_rule_size_as_paper_size.enabled", false);

// Prohibit the use of the screen lock API
// Запретить использование API блокировки экрана
user_pref("permissions.default.screen-wake-lock", 2);

// Block auto-playback of audio and video
// Блокировать автоматическое воспроизведение аудио и видео
user_pref("media.autoplay.default", 5);

// Search settings (disabling all possible hints, etc.)
// Настройки поиска (отключение всех возможных подсказок и т.д.)
user_pref("browser.search.context.loadInBackground", false);
user_pref("browser.search.log", false);
user_pref("browser.search.openintab", false);
user_pref("browser.search.param.search_rich_suggestions", "");
user_pref("browser.search.removeEngineInfobar.enabled", false);
user_pref("browser.search.searchEnginesURL", "");
user_pref("browser.search.separatePrivateDefault", false);
user_pref("browser.search.separatePrivateDefault.ui.banner.max", 0);
user_pref("browser.search.separatePrivateDefault.ui.enabled", false);
user_pref("browser.search.serpEventTelemetry.enabled", false);
user_pref("browser.search.serpEventTelemetryCategorization.enabled", false);
user_pref("browser.search.suggest.enabled", false);
user_pref("browser.search.suggest.enabled.private", false);
user_pref("browser.search.update", false);
user_pref("browser.search.widget.inNavBar", false);
user_pref("browser.search.widget.removeAfterDaysUnused", 0);
//-----------------------------------------------------------------------------------------------------------
// Various browser tweaks
// Различные твики браузера
// Description: This section contains parameters that are not included in other sections.

// Allow the installation of unsigned extensions (outside addons.mozilla.org)
// Разрешить установку неподписанных расширений (за пределами addons.mozilla.org)
user_pref("xpinstall.signatures.required", false);

// Do not trim HTTP from URLs in the address bar
// Не обрезать HTTP из URL-адресов в адресной строке
user_pref("browser.urlbar.trimURLs", false);

// Decode a URL containing UTF8 characters
// Расшифровать URL-адрес, содержащий символы UTF8
user_pref("browser.urlbar.decodeURLsOnCopy", true);
//-----------------------------------------------------------------------------------------------------------
// Privacy Settings
// Настройки конфиденциальности
// Description: Setting up privacy settings in the browser.
// Описание: Настройка параметров конфиденциальности в браузере.

// Clearing unnecessary data when closing the browser
// Удаление ненужных данных при закрытии браузера
user_pref("privacy.clearHistory.cache", true);
user_pref("privacy.clearHistory.cookiesAndStorage", true);
user_pref("privacy.clearHistory.historyFormDataAndDownloads", true);
user_pref("privacy.clearHistory.siteSettings", true);
user_pref("privacy.clearOnShutdown.cache", true);
user_pref("privacy.clearOnShutdown.downloads", true);
user_pref("privacy.clearOnShutdown.formdata", true);
user_pref("privacy.clearOnShutdown.history", true);
user_pref("privacy.clearOnShutdown.offlineApps", true);
user_pref("privacy.clearOnShutdown.openWindows", true);
user_pref("privacy.clearOnShutdown.siteSettings", true);
user_pref("privacy.clearOnShutdown_v2.cache", true);
user_pref("privacy.clearOnShutdown_v2.historyFormDataAndDownloads", true);
user_pref("privacy.clearOnShutdown_v2.siteSettings", true);
user_pref("privacy.clearSiteData.cache", true);
user_pref("privacy.clearSiteData.cookiesAndStorage", true);
user_pref("privacy.clearSiteData.historyFormDataAndDownloads", true);
user_pref("privacy.clearSiteData.siteSettings", true);

// Do not clear cookies when closing the browser
// Не удалять файлы cookie при закрытии браузера
user_pref("privacy.clearOnShutdown.cookies", false);
user_pref("privacy.clearOnShutdown_v2.cookiesAndStorage", false);

// Do not clear sessions when closing the browser
// Не очищать сеансы при закрытии браузера
user_pref("privacy.clearOnShutdown.sessions", false);

// Always send a "Do not track" signal to sites
// Всегда отправлять сайтам сигнал "Не отслеживать"
user_pref("privacy.donottrackheader.enabled", true);

// Tell websites not to sell or disclose my data
// Сообщать веб-сайтам, чтобы они не продавали и не разглашали мои данные
user_pref("privacy.globalprivacycontrol.enabled", true);
user_pref("privacy.globalprivacycontrol.was_ever_enabled", true);