document.addEventListener('DOMContentLoaded', function() {
    let LimitNumber = 150;
    let contents = document.querySelectorAll(".content");

    contents.forEach(content => {
        let trimmedContent = content.textContent.trim();

        if (trimmedContent.length <= LimitNumber) {
            // Скрываем кнопку, если текст короткий
            content.nextElementSibling.style.display = "none";
        } else {
            // Обрезаем текст и добавляем "Read More"
            let displayText = trimmedContent.slice(0, LimitNumber);
            let moreText = trimmedContent.slice(LimitNumber); // Оставшаяся часть текста
            content.innerHTML = `${displayText}<span class="dots">... </span><span class="hide more">${moreText}</span>`;
        }

        // Скрываем список по умолчанию
        let hiddenContent = content.nextElementSibling.nextElementSibling; // предполагается, что после кнопки идет список
        if (hiddenContent && hiddenContent.classList.contains('hidden-content')) {
            hiddenContent.style.display = "none";
        }
    });
});

function readMore(btn) {
    let postitus = btn.parentElement;
    let dots = postitus.querySelector(".dots");
    let moreText = postitus.querySelector(".more");
    let hiddenContent = postitus.querySelector(".hidden-content");

    if (dots.classList.contains("hide")) {
        dots.classList.remove("hide");
        moreText.classList.add("hide");
        btn.textContent = "Read More";

        // Скрываем список, если он был показан
        if (hiddenContent) {
            hiddenContent.style.display = "none";
        }
    } else {
        dots.classList.add("hide");
        moreText.classList.remove("hide");
        btn.textContent = "Read Less";

        // Показываем список, если он есть
        if (hiddenContent) {
            hiddenContent.style.display = "block";
        }
    }
}
