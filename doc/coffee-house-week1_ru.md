## Coffee-House. Неделя 1 – фиксированный макет

### Описание основной задачи и требования
- [Подробное описание](coffee-house_ru.md)
Вам необходимо создать «домашнюю» и «меню» страницы в соответствии с [Дизайн в Figma](https://www.figma.com/file/SAoBmuOqTfguehdT4IFRxQ/Coffee-House?type=design&node-id=0-1&mode=design&t=qis81E9Ovgx47eVl-0) - **только \[D\] Главная** и **\[D\] Меню \[1440\] > Кофе** в группе **\[D\] Рабочий стол 1440 пикселей**.
Ширина содержимого 1440 пикселей не должна меняться при изменении размера окна браузера.

[Prototype in Figma](https://www.figma.com/proto/SAoBmuOqTfguehdT4IFRxQ/Coffee-House?page-id=0%3A1&type=design&node-id=216-1349&viewport=875%2C385%2C0.03&t=rqlxorgzq8m3fnhO-1&scaling=min-zoom&starting-point-node-id=216%3A1349)

## Рабочий процесс

1. Задание должно быть выполнено в репозитории частной школы. [Как работать с частным репозиторием школы](https://docs.rs.school/#/private-repository)
2. Создать новую ветку «кофейня» из «главной». В созданной ветке создайте папку «кофейня». Поместите свой код в эту папку.
3. Выполните задание.
4. Проверьте, соответствует ли ваша работа [Критериям перекрестной проверки](#crosscheck-criteria).
5. Оценить свою работу самостоятельно по предоставленным [Критериям-оценки](#критерии-оценки) с учетом [Особенностей проверки макета](#особенности-проверки-макета) на соответствие макета
6. Чтобы облегчить оценку вашей работы, распечатайте самооценку в консоль браузера. Для этого включите файл `index.js` в свой файл `*.html`, напишите в нём функцию `console.log()` и в скобках в кавычках напишите свои баллы самооценки. Используйте символ `\n` для вставки разрывов строк.
 
   For example:
```
console.log('1. First criteria's name: +5\n2.Second criteria's name: +10')
```

7. Разверните свою работу на gh-страницах. Например, создайте и объедините запрос на включение из ветки «кофейня» в ветку «gh-pages». Заголовок запроса на включение может быть произвольным. Нет необходимости описывать этот запрос на включение.
8. После завершения работы откройте Pull Request из ветки `кофейня` в ветку `main`. Дайте запросу на включение заголовок, основанный на имени задачи. Предоставьте описание запроса на включение, следуя [шаблону](https://docs.rs.school/#/pull-request-review-process?id=Требования-к-pull-request-pr)
   Нет необходимости объединять этот запрос на включение.
9. Отправьте ссылку на развертывание вашей работы в разделе [RS APP](https://app.rs.school/) «Перекрестная проверка отправки».
10. По истечении срока выполнения задачи начинается процесс перекрестной проверки. Перекрестная проверка длится три дня. Чтобы получить баллы за задание, вам необходимо просмотреть все материалы, отправленные на рассмотрение, и представить результаты рассмотрения в разделе «Перекрестная проверка» [RS APP](https://app.rs.school/) .


### Критерии CrossCheck (100 баллов)
1. Проверка валидации страниц: **+16**
   - Верстка обеих страниц действительна: для проверки валидности верстки воспользуйтесь сервисом https://validator.w3.org/. **+12** (6 баллов на странице)
   Действительная разметка проверенной страницы соответствует сообщению «Проверка документа завершена. Никаких ошибок и предупреждений для отображения нет». В этом случае мы присваиваем полные баллы за проверенную страницу (+6). Если есть "предупреждения", но нет "ошибок", начисляем половину баллов (+3) за проверяемую страницу.
   - Фавиконка добавлена на каждую страницу **+4**
2. Планировка соответствует дизайну **+42**
   - блок `<header>` на каждой странице **+6**
   - Блок `Наслаждайтесь` на домашней странице **+6**
   - Блок `Любимый кофе` на «главной» странице **+6**
   - Блок `О программе` на главной странице **+6**
   - Блок `Мобильное приложение` на домашней странице **+6**
   - Блок `Меню` на странице `меню` **+6**
   - блок `<footer>` на каждой странице **+6**
3. Требования CSS **+10**
   - Для позиционирования изображений в блоке «О программе» на «главной» странице и продуктов в блоке «Меню» на странице «меню» используется **Flexbox** или **Grid Layout** **+4**
   - При масштабировании страницы браузера (<100%) или увеличении ширины страницы (>1440 пикселей) макет обеих страниц центрируется, а не смещается в сторону и не растягивается по всей ширине **+4**
   - Цвет фона **Body** растягивается по всей ширине страницы **+2**.
4. Интерактивность **+32**
   - Элементы навигации (кроме `Контакты`) ведут к соответствующим блокам на «главной» странице (анкорные ссылки) **+4**
   - `Контакты` в панели навигации ссылаются на блок `<footer>` на собственной странице (якорная ссылка) **+2**
   - Плавная прокрутка с помощью якорных ссылок **+2**
   - При нажатии кнопок **Меню** в блоке «Заголовок» и «Наслаждаться» на «домашней» странице происходит переход на страницу «Меню» **+2**.
   - Кнопка **Меню** в заголовке на странице меню неинтерактивна **+2**
     – При нажатии на **логотип** в «заголовке» происходит переход на «домашнюю» страницу **+2**.
   - Активная кнопка **Кофе** в блоке «Меню» на странице «Меню» неинтерактивна **+2**
   - Каждая Кофейная карточка в разделе «Меню» на странице «Меню» интерактивна при наведении курсора на любую область карточки **+4**
   - В блоке `<footer>` нажатие на ссылку с номером телефона (вся область, включая значок) должно инициировать телефонный звонок **+2**
   - В блоке `<footer>` при нажатии на ссылку с адресом (вся область, включая значок) должна открыться новая вкладка браузера с Google Maps, отображающая любое местоположение по вашему выбору **+2**
   - Интерактивность ссылок и кнопок реализована согласно макету Figma. Интерактивность включает в себя не только изменение внешнего вида курсора, например, с помощью свойства курсора: указатель, но также использование других визуальных эффектов, таких как изменение цвета фона или цвета шрифта, в соответствии с **Руководством по стилю** в макете Figma* *+4**
   - Обязательное требование интерактивности: плавное изменение внешнего вида элемента при наведении и клике, не затрагивая соседние элементы**+4**

### Штрафы
1. Компоновка всего дизайна или отдельных блоков реализуется с помощью изображений -100
2. Использование фреймворков, библиотек и технологий, запрещенных техническими требованиями -100

## Критерии оценки

**Максимальная оценка за задание: 100 баллов**

Баллы за баллы требований указаны в разделе [CrossCheck Criteria](#crosscheck-criteria).
Штрафы указаны в разделе [Штрафы](#penalties).

Все спорные вопросы решаются в пользу оцениваемого студента.

Чтобы облегчить оценку вашей работы, распечатайте в консоли браузера самооценку вашего проекта, перечислив баллы по каждому выполненному вами критерию.

## Особенности проверки макета
- Deviation from the layout of up to 10px horizontally and vertically is allowed, provided that the visual similarity between the layout and the markup is maintained.
- Use the [PerfectPixel](https://chrome.google.com/webstore/detail/perfectpixel-by-welldonec/dkaagdgjmgdmbnecmcefdhjekcoceebi?hl=ru) extension as a tool to check the layout's conformity with the design
- When checking the layout using the PerfectPixel extension, make sure that the extension is set to a scale of 1, while the browser and operating system are set to a scale of 100%.
- If the screen resolution is greater than 1440 pixels, to check for compliance with the layout, it is sufficient to center horizontally the layout or manually align it with the top-left corner guides.
- If the screen resolution is 1440 pixels or less, use the device toolbar in Google Chrome browser in responsive mode for checking.
- Please note that when checking the work in a window with a width of 1440 pixels, the layout may compress by approximately 17 pixels. This happens because part of the layout space is consumed by the vertical scroll (17 pixels - the standard scroll size for Google Chrome).
- Each block and section are reviewed separately, meaning that shortcomings in the previous block do not carry over to next one. When transitioning to the review of the next block, we align it with overlaid layout.
- Regarding text, we check its alignment and spacing relative to the block's boundaries. Text sizes are only checked for height. Deviations in word width and letter spacing when comparing the layout and the markup are not considered errors if the correct font with the specified properties is used

## How to submit
- **Coffee-House. Week-1 - Fixed layout** task is checked by cross-check.
- After receiving the task but before the deadline, please go to the RS App at https://app.rs.school/. Select **Cross-Check: Submit**, choose the relevant task from the dropdown menu, and add the link to the deployed version of your created website in the **Solution URL** field. Then, click **Submit** button.

## Submit Recommendations
- Consider submitting early, once the option is available in the RS App. You can make further changes until the deadline.
- As the project resides in a private repository, repository or pull request links are unnecessary since reviewers won't access them. Only you, course admins, and assigned mentors (if any) can view the private school repository.
- Ensure the deployed link functions in the browser's incognito mode.

## Оценка задачи
- Инструкция по проведению cross-check: https://docs.rs.school/#/cross-check-flow
