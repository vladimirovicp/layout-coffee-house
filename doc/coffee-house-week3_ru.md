## Кофейня. Неделя-3: Добавление функциональности

### Описание основной задачи и требования
- [Подробное описание](coffee-house_ru.md)

В этой части задачи вам необходимо добавить к ранее созданным в задаче веб-страницам следующий функционал:

- Открытие и закрытие **бургер-меню** на страницах, ширина которых <=768 пикселей.
- **Карусель** на главной странице.
- **Переключение категорий** для товаров на странице меню.
- **Загрузка дополнительных товаров** по нажатию кнопки, если на странице меню их более 4.
- **Модальный** для выбранного продукта на странице меню.

❗ Each DOM object (block) with a product description, whether it's a product in a category or a modal on the 'menu' page, will be generated from data objects with corresponding fields. The assembled JSON with the necessary objects for the project can be found in the [Materials](#materials).

## Materials:
- [The assembled JSON with all products](products.json)
- [Video for `Enjoy` block](https://www.pexels.com/ru-ru/video/2909914/)
- [Design in Figma](https://www.figma.com/file/SAoBmuOqTfguehdT4IFRxQ/Coffee-House?type=design&node-id=0-1&mode=design&t=qis81E9Ovgx47eVl-0)

## Рабочий процесс

1. Task should be done in private school's repository. [How to work with a school's private repository](https://docs.rs.school/#/private-repository).
2. Create new branch `coffee-house-week3` from `coffee-house`. You will already find the `coffee-house` folder with the project files completed in the previous stage in this branch.
3. Continue working on the task in the branch you've created.
4. Check the compliance of your work with the [CrossCheck Criteria](#crosscheck-criteria).
5. Evaluate your work independently according to the provided [Criteria for evaluation](#criteria-for-evaluation).
6. To make the assessment of your work easier, print your self-assessment to the browser console. To do this, include the `index.js` file in your `*.html` file, write a `console.log()` function in it, and in parentheses within quotes, write your self-assessment points. Use the `\n` character to insert line breaks.  
   For example:
```
console.log('1. First criteria's name: +5\n2.Second criteria's name: +10')
``` 
7. Create a Pull Request from the `coffee-house-week3` branch to the `coffee-house` branch, check for conflicts, and perform the Merge.  
   The Pull Request title can be arbitrary. There is no need to describe this Pull Request.
8. After completing the cross-check for the previous part of the task, update your project's deployment. For example, create and merge a Pull Request from the `coffee-house` branch into the `gh-pages` branch.  
   The Pull Request title can be arbitrary. There is no need to describe this Pull Request.
9. After completing your work, update the Pull Request from the `coffee-house` branch to the `main` branch, expanding its functionality with the second part of the task.  
   There is no need to merge this Pull Request.
10. Submit the link to the deployment of your work in the [RS APP](https://app.rs.school/) section "Cross-Check Submit".
11. After the task deadline, the cross-check process begins. The cross-check lasts for three days. To receive points for the task, you need to review all the submissions sent for review and submit the results of the review in the "Cross-Check Review" section of [RS APP](https://app.rs.school/).

### CrossCheck Criteria (90 points)
1. Реализация бургер-меню на обеих страницах: **+22**
   - При ширине страницы 768 пикселей или меньше панель навигации скрывается и появляется значок бургера: **+2**
   - При нажатии на значок бургера меню бургера выдвигается справа, а значок бургера плавно трансформируется в крест: **+4**
   - Бургер-меню занимает всю доступную область экрана под блоком `<header>`: **+2**
   - При нажатии на крестик меню бургера плавно скрывается, перемещаясь в правую часть экрана, а крестик плавно трансформируется в иконку бургера: **+4**
   - Иконка бургера создана с помощью HTML и CSS без использования изображений: **+2**
   - Ссылки в бургер-меню работают, обеспечивая плавную прокрутку до опорных точек: **+2**
   - При нажатии на любую ссылку (интерактивную или неинтерактивную) в меню бургер-меню плавно скрывается вправо, а крестик плавно трансформируется в иконку бургера: **+2**
   - Расположение и размеры элементов в бургер-меню соответствуют макету (горизонтальное центрирование пунктов меню): **+2**
   - Когда ширина страницы увеличивается до 769 пикселей или выше, значок бургера и открытое меню гамбургера скрываются, а также появляется панель навигации: **+2**
2. Реализация карусели на "главной" странице: **+24**
   - Элементы карусели по умолчанию автоматически прокручиваются влево с указанным интервалом времени. Продолжительность временного интервала – по выбору ученика, но рекомендуемое значение – 5–7 секунд: **+4**
   - Текущее состояние до следующего автоматического переключения отображается на индикаторе выполнения соответствующего слайда путем заполнения его цветом: **+4**
   - Заполняться может только индикатор текущего слайда; остальные остаются в состоянии по умолчанию: **+2**
   - При наведении курсора мыши или касании и удерживании отображаемого элемента карусели время до переключения элемента приостанавливается. Когда курсор мыши перемещается или заканчивается удержание, время продолжается с того места, где оно остановилось: **+2**
   - Переключение слайдов сопровождается анимацией типа карусели (способ выполнения анимации не проверен): **+4**
   - Ручное переключение в соответствующем направлении осуществляется нажатием кнопки со стрелкой влево или кнопки со стрелкой вправо: **+2**
   - Для мобильных устройств дополнительно реализовано ручное переключение в соответствующем направлении свайпом влево или вправо: **+2**
   - При ручном переключении состояние индикатора выполнения переключаемого слайда сбрасывается, и индикатор выполнения отображаемого слайда начинает заполняться: **+2**
   - При переключении вправо после третьего элемента возвращается к первому. При переключении влево после первого элемента возвращается к третьему: **+2**
3. Категории товаров на странице `меню`: **+16**
   - Категория **Кофе** активна и соответствующие продукты отображаются при открытии или перезагрузке страницы «меню»: **+2**
   - При переключении категорий отображаются товары выбранной категории: **+2**
   - Для экранов шириной 768 пикселей и меньше при открытии/перезагрузке страницы или переключении категорий отображается только 4 товара. Если в отображаемой категории более 4 товаров, ниже отображается кнопка **Загрузить больше**: **+4**
   - При нажатии кнопки **Загрузить больше** под отображаемыми товарами недостающие товары добавляются, а кнопка **Загрузить больше** скрывается: **+4**
   - При изменении ширины экрана режим отображения товара (8 товаров на странице или 4 товара с кнопкой **Загрузить больше**) меняется без перезагрузки страницы: **+4**
4. Модальное окно на странице `меню`: **+20**
   - Модальное окно с описанием конкретного товара открывается при нажатии на любую часть карточки товара: **+2**
   - Часть страницы за пределами модального окна затемнена: **+2**
   - При открытом модале вертикальная прокрутка страницы становится неактивной; при закрытии снова становится активным: **+2**
   - Нажатие на область вокруг модального окна и кнопку **Закрыть** закроет его: **+2**
   - Модальное окно центрировано по обеим осям, размеры модальных элементов и их расположение соответствуют дизайну: **+2**
   - После открытия модального окна выбран параметр «Размер» «S», а в разделе «Добавки» не выбран ни один параметр. Окончательная цена товара такая же, как и в карточке: **+2**
   - Можно выбрать только один вариант «Размер». Изменение этой опции также меняет окончательную цену продукта в зависимости от выбора (+0,00 доллара США для **S**, +0,50 доллара США для **M**, +1,00 доллара США для **L**): **+4**
   - Можно выбрать несколько вариантов «Добавок», и каждый выбранный вариант увеличивает окончательную цену продукта на 0,50 доллара США: **+4**
5. Видео на "главной" странице: **+8**
   - В блоке "Enjoy" на "главной" странице вместо изображения в фоновом режиме воспроизводится видео, без звука и элементов управления, и без возможности с ним взаимодействовать: **+4**
   - После окончания видео оно автоматически начинается заново: **+4**

### Penalties
1. Layout of the entire design or individual blocks is implemented using images -90
2. Using frameworks, libraries, and technologies prohibited in technical requirements -90

## Criteria for evaluation

**Maximum score for the task: 90 points**

Scores for requirement points are specified in [CrossCheck Criteria](#crosscheck-criteria) section.  
Penalties are specified in [Penalties](#penalties) section.

All disputed issues are resolved in favor of the student being assessed.

To make the assessment of your work easier, print self-assessment of your project in the browser console, listing points for each criteria you have completed.

## How to submit
- **Coffee-House. Week-3: Adding functionality** task is checked by cross-check.
- After receiving the task but before the deadline, please go to the RS App at https://app.rs.school/. Select **Cross-Check: Submit**, choose the relevant task from the dropdown menu, and add the link to the deployed version of your created website in the **Solution URL** field. Then, click **Submit** button.

## Submit Recommendations
- Consider submitting early, once the option is available in the RS App. You can make further changes until the deadline.
- As the project resides in a private repository, repository or pull request links are unnecessary since reviewers won't access them. Only you, course admins, and assigned mentors (if any) can view the private school repository.
- Ensure the deployed link functions in the browser's incognito mode.

## Task Evaluation
- Instructions for conducting a cross-check: https://docs.rs.school/#/cross-check-flow
