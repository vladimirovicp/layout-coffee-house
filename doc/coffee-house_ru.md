# Кофейня

## Описание проекта
Coffee House — проект, в котором вам нужно будет создать сайт, состоящий из двух страниц, сделать его адаптивным и добавить интерактивности.
## Ключевые навыки
- Действительный семантический адаптивный веб-дизайн;
- Простой в обслуживании читаемый код;
- Экспорт стилей и графики из Figma;
- Использование JavaScript для реализации указанного в задаче функционала.

## Этапы работы над проектом
Задача состоит из трех частей:
- [Coffee-House. Week-1: Fixed layout](coffee-house-week1.md)
    - В этой части задачи вам необходимо на основе макета создать страницы «Главная» и «Меню», которые должны корректно отображаться при ширине окна не менее 1440 пикселей;
    - Проверяется достоверность работы, а также ее соответствие макету.
- [Coffee-House. Week-2: Responsive design](coffee-house-week2.md)
    - В этой части задачи необходимо добавить адаптивность страницам, созданным на первом этапе, до ширины 380px включительно;
    - Проверяется валидность работы, ее соответствие макету при соответствующей ширине страницы, отзывчивость макета, отсутствие горизонтальных полос прокрутки.
- [Coffee-House. Week-3: Adding functionality](coffee-house-week3.md)
    - В этой части задачи мы используем JavaScript для добавления интерактивности страницам;
    - Проверяется реализованный функционал.

Продолжительность каждой части задания – 1 неделя.
Форма оценки каждой части задания – cross-check review.

[Design in Figma](https://www.figma.com/file/SAoBmuOqTfguehdT4IFRxQ/Coffee-House?type=design&node-id=0-1&mode=design&t=qis81E9Ovgx47eVl-0)

## Создание собственной копии макета
Начните задачу с создания собственной копии макета. Сделать это:
- Войдите в [Figma](https://www.figma.com/);
- Открыть макет;
- На верхней панели нажмите на стрелку рядом с названием макета и выберите опцию «Дублировать в черновики»;
- В левом верхнем углу откройте настройки и выберите «Назад к файлам»;
- Откройте копию макета с меткой «В черновиках».

## Рекомендации по качеству кода
Рекомендации предоставляются для справки; строгое их соблюдение не предполагается и не будет проверяться.
- [Guideline](https://codeguide.academy/html-css.html#html)
- Руководство по качеству кода
    - [General principles](../../stage1/modules/clean-code/materials/generic-principles.md)
    - [HTML and CSS recommendations - beginner level](../../stage1/modules/clean-code/materials/html-and-css.md)
    - [HTML and CSS recommendations - advanced level](../../stage1/modules/clean-code/materials/html-and-css-extended.md)

## Технические требования
1. Макет действителен, семантичен и соответствует дизайну.
2. Приложение корректно отображается и работает в последней версии Google Chrome.
3. Использование CSS-фреймворков (например, Bootstrap) **не допускается**.
4. Использование JS-фреймворков (например, Angular, React, Vue и т. д.) **не допускается**.
5. Использование устаревших библиотек (например, «JQuery» и т. д.) или готовых библиотек (например, «Swiper» и т. д.) для реализации функциональности **не допускается**.
6. Использование TypeScript **не допускается**.
7. Разрешено использование препроцессоров CSS («SASS», «SCSS»), «normalize.css».
8. Использование сброса стиля с помощью `reset.css` не рекомендуется.
9. Добавление макета в виде изображения путем снятия скриншота части макета и вставки его в разметку не допускается. Пожалуйста, используйте теги и символы для макета, а изображения используйте только для добавления изображений и значков, а не для элементов макета (кнопок, блоков, разделов).
10. Код должен быть читабельным, без минификации и обфускации.

## Требования к репозиторию
- Task should be done in private school's repository. [How to work with a school's private repository](https://docs.rs.school/#/private-repository)
- Create new branch `coffee-house` from `main`. Create a folder `coffee-house` in the created branch. Place your code in this folder.
- The `main` (or `master`) branch should be empty (contain only files like README.md, .gitignore or .github folder)
- Use `gh-pages` for deployment [How to deploy an assignment from a private school repository](https://docs.rs.school/#/private-repository?id=Как-сделать-деплой-задания-из-приватного-репозитория-школы)
- Since the task is divided into three parts, coffee-house will have three versions:
    1. The `coffee-house` branch will contain the first part of the assignment. When starting the second part, create a branch `coffee-house-week2` from the `coffee-house` branch to continue from where you left off in the first part
    2. Upon completing the second part of the assignment, create a Pull Request from the `coffee-house-week2` branch to the `coffee-house` branch, check for conflicts, and perform the Merge
    3. For the third part, repeat the first 2 steps with a different branch name (`coffee-house-week3`)
    4. Please note: Pull Requests with subsequent merges are only done from the current development branch into the initial branch of this task. Merging into the `main` branch is not performed!
- The internal structure of the project is at your discretion. The simplest option is separate pages, each with its own styles and js. When submitting the work, please ensure that the provided submission link opens the main page of the deployed project

## Требования к фиксации
- История коммитов должна отражать процесс разработки приложения.
- [Give commit names according to the guideline](https://docs.rs.school/#/git-convention)

## Требования к запросам на включение
- Name the Pull Request according to the task title
- [Provide the Pull Request description following the template](https://docs.rs.school/#/pull-request-review-process?id=Требования-к-pull-request-pr)  
  **No need to merge the Pull Request from the development branch into the `main` branch**.

## Как отправить
После получения задания, но до истечения срока, зайдите в приложение RS по адресу https://app.rs.school/. Выберите **Перекрестная проверка: отправить**, выберите соответствующую задачу из раскрывающегося меню и добавьте ссылку на развернутую версию созданного вами веб-сайта в поле **URL-адрес решения**. Затем нажмите кнопку **Отправить**.
## Отправить рекомендации
- Рекомендуется отправлять задачу как можно раньше, как только опция станет доступна в приложении rs. После отправки вы можете продолжить работу над задачей до окончания срока.
- Поскольку проект делается в приватном репозитории, присылать ссылку на репозиторий или пул-реквест нет смысла — рецензент ее не увидит. Репозиторий частной школы будет виден только вам, администраторам курса и вашим наставникам, когда он станет доступен.
- Убедитесь, что развернутая ссылка, которую вы предоставляете, открывается в режиме инкогнито браузера.
## Оценка задачи
- Каждая часть задания оценивается путем перекрестной проверки.
- Инструкция по проведению перекрестной проверки: https://docs.rs.school/#/cross-check-flow

## Materials
- [Старт в Figma для верстальщика](https://htmlacademy.ru/blog/soft/figma)
- [Инструкция по работе в Figma для верстальщика](https://breezzly.ru/guides/start-v-figma-dlya-verstalshhika)
- [Верстка сайта с нуля из Figma](https://www.youtube.com/playlist?list=PL5_s7xdj2Vsw-bCx5nOZJMFIiHwRgok--)

## RS School Webinars
- Sergey Shalyapin's Webinars
    - [Stream 11.02.2020. Broswers and IDEs. HTML and CSS Basics [RU]](https://youtu.be/UQavTWiTpnA)
    - [Stream 03.03.2020 Forms & Inputs. Flexbox & Grid example [RU]](https://youtu.be/PhRVJC0kBGE)
    - [Stream 10.03.2020. DOM events exampes [RU]](https://youtu.be/_5f0kznOM_A)
    - [Stream 17.03.2020 DOM examples [RU]](https://youtu.be/0M9Rz-wXYas)
    - [Stream 07.04.2022. SCSS (Sass) Basics. Flex vs Grid Layout [RU]](https://youtu.be/MOrQRgP8kbo)
    - [Stream 12.04.2022. Media queries. Responsive vs Adaptive. [RU]](https://youtu.be/CbtdP2vGOI8)
    - [Stream 20.04.2022. JS DOM & Events. Simple carousel example [RU]](https://youtu.be/2xP-HahCtio)
- Victoria Vorozhun's Webinars
    - [Friday Live Coding. Part 1 [RU]](https://youtu.be/ZAde-IJAHzo)
    - [Friday Live Coding. Part 2 [RU]](https://youtu.be/BJENQIX2e2o)
    - [Friday Live Coding. Part 3 [RU]](https://youtu.be/fooyYgIuZe8)
    - [Friday Live Coding. Part 4 [RU]](https://youtu.be/Qk2UGlFNKPE)
    - [Friday Live Coding. Part 5 [RU]](https://youtu.be/ouZnGUefneQ)
    - [Code Repository](https://github.com/ViktoriyaVorozhun/friday-live-coding/tree/develop)
    - [Figma Design](https://www.figma.com/file/fw0GA18nmpVjTBzjtiEK2L/Friday_Live_Coding?node-id=0%3A1) 
