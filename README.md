<h2 align="center"><img src="https://avatars.githubusercontent.com/u/52249749?s=64"><br/>LibreWolf Settings by Enobraed</h2>

<h2 align="center">RUS</h2>

Это моя личная конфигурация браузера LibreWolf, которую я постоянно использую и совершенствую, стремясь сделать браузер максимально удобным и практичным. Я также пытаюсь всячески оптимизировать его. Я регулярно обновляю и дополняю свои настройки, чтобы адаптировать их под свои нужды и предпочтения. Мой конфиг включает в себя:
```
    Отключение ненужных компонентов и функций браузера
    Настройки на повышение безопасности и приватности (без "ломания" сайтов)
    Небольшую кастомизацию интерфейса
    Некоторые "твики", которые делают браузер более удобным
```
Я постоянно экспериментирую с новыми возможностями LibreWolf и стараюсь использовать его потенциал на полную катушку. Мой конфиг - это результат многих часов тонкой настройки и кастомизации, направленной на повышение удобства использования и производительности браузера.

К каждому параметру я составляю небольшое пояснение, для удобства использования. Каждый параметр тщательно протестирован на моих устройствах в различных сценариях и условиях. Вы можете добавлять их в свой конфиг, но за любые ошибки в работе браузера после этого я не отвечаю.

<h2 align="center">LibreWolf Launcher.bat</h2>
Я использую самописный .bat файл для запуска портативной версии браузера LibreWolf.

### Этот файл выполняет несколько полезных функций
1. Очистка временных файлов: Перед запуском браузера .bat файл автоматически удаляет все временные файлы, логи и другой ненужный мусор из профиля. Это помогает поддерживать чистоту и оптимальную производительность браузера.
2. Запуск с необходимыми параметрами: После завершения процесса очистки, файл запускает браузер с заданными мной параметрами. Это позволяет настроить его работу в соответствии с моими предпочтениями.

Таким образом, данный .bat файл обеспечивает не только эффективный запуск браузера, но и поддерживает его в идеальном состоянии, избавляя от лишних данных и улучшая общую производительность.

### Инструкция по установке

0. Использовать поративную версию LibreWolf
1. Переместить LibreWolf Launcher.bat в корневую папку с браузером, рядом с LibreWolf-Portable.exe
2. Создать ярлык на рабочем столе, поменять иконку и запускать через данный .bat
Если Вы используете свой профиль, который имеет название не Default, то необходимо в .bat файле поменять на нужное вам имя профиля.

<h2 align="center">LibreWolf Optimizer.bat</h2>
Я использую самописный .bat файл, который удаляет множество ненужных файлов из браузера, не влияя на его функциональность, но снижая потребление ресурсов ПК.

### Инструкция по установке

0. Использовать поративную версию LibreWolf
1. Переместить LibreWolf Optimizer.bat в папку LibreWolf, рядом с файлом librewolf.exe
2. Запустить LibreWolf Optimizer.bat

После завершения работы .bat файла в консоли появится запрос на выход. Если процесс прошел успешно, будет создана папка .backup, в которой будут храниться удаленные файлы браузера. В случае возникновения проблем их можно легко восстановить. Я использую этот .bat файл после каждого обновления браузера, так как все удаленные файлы будут автоматически скачаны заново.

<h2 align="center">user.js</h2>
user.js — это файл конфигурации для браузера, который  используется для настройки различных параметров и поведения браузера. 

### Настройка графического интерфейса
1. Включить режим компактных значков
2. Скрыть элемент "список всех вкладок"
3. Отключить предупреждение about:config
4. Включить запрос при закрытии нескольких вкладок
5. Отключить добавление списка загруженных файлов в список "Последние документы"
6. Отключить отображение страницы "Что нового" после обновления браузера
7. Отключить новый упрощенный и унифицированный диалог для очистки пользовательских данных
8. Выбрать "Удалить все" при удалении истории
9. Добавить пункт "Информация об изображении" в контекстное меню изображений
10. Включить поиск текста на странице по мере его ввода

### Отключение доступа к устройствам
1. Отключить доступ к микрофону
2. Отключить доступ к микрофону
3. Отключить доступ к геймпаду
4. Отключить доступ к датчикам устройства
5. Отключить доступ к вибрации
6. Отключить доступ к аккумулятору устройства (аккумулятору ноутбука)
7. Отключить доступ к виртуальной реальности (очки виртуальной реальности и т.д.)

### Настройка скриптов на веб-страницах
1. Запретить скриптам изменять фокус окон (перемещать одно окно на другое)
2. Запретить скриптам изменять размер/перемещать окна
3. Запретить скриптам закрывать окна/вкладки
4. Закрыть доступ скриптам к буферу обмена

### Настройка рендеринга страниц
1. Активация аппаратного ускорения, ускорение рендеринга страниц
2. Отключить задержку перед началом рендеринга страницы
3. Отключить анимацию полного открытия видео и подсказку "нажмите esc.."
4. Отключить прогнозирование перехода и предварительную загрузку содержимого страницы

### Настройка различных методов кэширования
1. Включить кэширование диска
2. Отключить автоматическое определение размера дискового кэша

### Отключить ненужные функции и различные тайм-ауты
1. Отключить счётчики производительности
2. Отключить проверку подключения к Интернету при каждом запуске
3. Отключить защиту скачивания файлов через незащищенные соединения
4. Отключить задержку при установке расширений
5. Блокирование функционала, следящего за использованием WI-FI-сетей
6. Отключить информацию о сетевом соединении
7. Запретить проверку браузера, установленного по умолчанию в операционной системе

### Отключить небезопасные функции
1. Отключить геолокацию
2. Отключить замену запрошенных страниц на страницу провайдера
3. Отключить push-уведомления
4. Удалить права, установленные по умолчанию (закрыть возможность чтения некоторых данных из раздела "about:support")
5. Отключить WebRTC
6. Отключить IPv6
7. Отключить Web Audio API (требуется для некоторых игр)
8. Отключить распознавание речи
9. Запрет на просмотр PDF-документов с помощью браузера (с использованием HTML5)
10. Запретить использование API блокировки экрана
11. Блокировать автоматическое воспроизведение аудио и видео
12. Настройки поиска (отключение всех возможных подсказок и т.д.)

### Различные твики браузера
1. Разрешить установку неподписанных расширений (за пределами addons.mozilla.org)
2. Не обрезать HTTP из URL-адресов в адресной строке
3. Расшифровать URL-адрес, содержащий символы UTF8

### Настройки конфиденциальности
1. Удаление ненужных данных при закрытии браузера
2. Не удалять файлы cookie при закрытии браузера
3. Не очищать сеансы при закрытии браузера
4. Всегда отправлять сайтам сигнал "Не отслеживать"
5. Сообщать веб-сайтам, чтобы они не продавали и не разглашали мои данные

### Инструкция по установке
1. Переместить файл user.js в корень профиля

---
<h2 align="center">ENG</h2>

This is my personal configuration of the LibreWolf browser, which I constantly use and improve in an effort to make the browser as convenient and practical as possible. I'm also trying to optimize it in every possible way. I regularly update and update my settings to adapt them to my needs and preferences. My config includes:

    Disabling unnecessary browser components and functions
    Settings to increase security and privacy (without "breaking" sites)
    A small customization of the interface
    Some "tweaks" that make the browser more convenient

I am constantly experimenting with new features of LibreWolf and trying to use its potential to the fullest. My config is the result of many hours of fine tuning and customization aimed at improving the usability and performance of the browser.

I make up a small explanation for each parameter, for ease of use. Each parameter has been thoroughly tested on my devices in various scenarios and conditions. You can add them to your config, but I am not responsible for any errors in the browser after that.

<h2 align="center">LibreWolf Launcher.bat</h2>
I use a self-made one.the bat file for launching the portable version of the LibreWolf browser.

### This file performs several useful functions
1. Clearing temporary files: Before starting the browser.The bat file automatically deletes all temporary files, logs and other unnecessary garbage from the profile. This helps to keep the browser clean and perform optimally.
2. Launch with the necessary parameters: After completing the cleanup process, the file launches the browser with the parameters I set. This allows you to customize its operation according to my preferences.

Thus, given .The bat file provides not only an efficient browser launch, but also maintains it in perfect condition, eliminating unnecessary data and improving overall performance.

### Installation Instructions

0. Use the portable version of LibreWolf
1. Move LibreWolf Launcher.bat to the root folder of the browser, next to LibreWolf-Portable.exe
2. Create a shortcut on the desktop, change the icon and run through this one.bat
If you are using your profile, which has a name other than Default, then you need to .change the bat file to the profile name you need.

<h2 align="center">LibreWolf Optimizer.bat</h2>
I use a self-made one.A bat file that removes a lot of unnecessary files from the browser without affecting its functionality, but reducing the consumption of PC resources.

### Installation Instructions

0. Use the portable version of LibreWolf
1. Move LibreWolf Optimizer.bat to the LibreWolf folder, next to the file librewolf.exe
2. Run LibreWolf Optimizer.bat

After completing the work .The bat file in the console will prompt you to exit. If the process is successful, a folder will be created.backup, which will store deleted browser files. In case of problems, they can be easily restored. I'm using this one.The bat file after each browser update, as all deleted files will be automatically downloaded again.

<h2 align="center">user.js</h2>
user.js — This is a configuration file for the browser, which is used to configure various browser settings and behavior.

### Customizing the GUI
1. Enable compact icon mode
2. Hide "list of all tabs" item
3. Disable the about:config warning
4. Enable prompting when closing multiple tabs
5. Disabling adding the list of uploaded files to the "Recent Documents" list
6. Disabling the appearance of the "What's New" autoloading page after a browser refresh
7. Disable the new simplified and unified dialog for user data cleansing
8. Select "Delete All" when deleting history
9. Add "Image Info" item to the context menu of images
10. Enable searching for text on a page as you type it

### Disabling access to devices
1. Disable microphone access
2. Disable camera access
3. Disable gamepad access
4. Disable access to the device's sensors
5. Disable vibration access
6. Disable access to the device's battery (battery on a laptop)
7. Disable access to virtual reality (virtual reality glasses, etc.)

### Configuring scripts on web pages
1. Prohibiting scripts from changing the focus of windows (moving one to another)
2. Prohibiting scripts from resizing/moving windows
3. Prohibiting scripts from closing windows/tabs
4. Preventing scripts from accessing the clipboard

### Configuring Page rendering
1. Hardware acceleration activation, page rendering acceleration
2. Disable the delay before starting page rendering
3. Turn off the animation of opening the video to full and the prompt "press esc.."
4. Disable transition prediction and page content preloading

### Configuring a variety of caching
1. Enable disk caching
2. Отключить автоматическое определение размера дискового кэша

### Disable unnecessary functions and various timeouts
1. Disable performance metrics
2. Disable Internet connection testing at each startup
3. Disable file download protection over unsecured connections
4. Disable the delay in installing extensions
5. Blocking functionality that monitors the use of WI-FI networks
6. Disable network connection information
7. Prohibiting checking the browser installed by default in the operating system

### Disable unsafe functions
1. Disable geolocation
2. Disable substitution of the requested pages to the provider's page
3. Disable push notifications
4. Remove the rights set by default (close the ability to read some data from about:support for sites)
5. Disable WebRTC
6. Disable IPv6
7. Disable the Web Audio API (required for some games)
8. Disable speech recognition
9. Prohibition of viewing PDF documents using the browser (using HTML5)
10. Prohibit the use of the screen lock API
11. Block auto-playback of audio and video
12. Search settings (disabling all possible hints, etc.)

### Various browser tweaks
1. Allow the installation of unsigned extensions (outside addons.mozilla.org)
2. Do not trim HTTP from URLs in the address bar
3. Decode a URL containing UTF8 characters

### Privacy Settings
1. Clearing unnecessary data when closing the browser
2. Do not clear cookies when closing the browser
3. Do not clear sessions when closing the browser
4. Always send a "Do not track" signal to sites
5. Tell websites not to sell or disclose my data
