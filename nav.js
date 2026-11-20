document.addEventListener("DOMContentLoaded", () => {
    const pages = [
        "01/index.html",
        "02/index.html",
        "03/index.html",
        "03/index2.html",
        "04/index.html",
        "04/index2.html",
        "05/index.html",
        "05/index2.html",
        "06/index.html",
        "07/index.html",
        "08/index.html",
        "09/index.html",
        "10/index.html",
        "11/index.html",
        "12/index.html",
        "13/index.html",
        "14/index.html",
        "15/index.html",
        "16/index.html",
        "17/index.html",
        "18/index.html",
        "19/index.html",
        "20/index.html",
        "21/index.html",
        "23/index.html",
        "24/index.html",
        "24/index2.html",
        "24/index3.html",
        "24/index4.html",
        "24/index5.html",
        "25/index25_1.html",
        "26/index26_1.html",
        "27/index27_1.html"
    ];

    const currentPath = window.location.pathname;
    const currentIndex = pages.findIndex(page => currentPath.endsWith(page));

    if (currentIndex !== -1) {
        const nav = document.createElement("div");
        nav.style.cssText = "background:#f0f4f8; padding:10px 15px; margin-bottom:15px; border-bottom:1px solid #ccc; font-family:Arial,sans-serif; font-size:14px;";

        const prevLink = currentIndex > 0 
            ? `<a href="../${pages[currentIndex - 1]}" style="margin-right:15px; text-decoration:none; color:#0066cc;">&larr; Предыдущая работа</a>` 
            : `<span style="margin-right:15px; color:#999;">&larr; Предыдущая работа</span>`;

        const homeLink = `<a href="../" style="margin-right:15px; font-weight:bold; text-decoration:none; color:#222;">На главную</a>`;

        const nextLink = currentIndex < pages.length - 1 
            ? `<a href="../${pages[currentIndex + 1]}" style="text-decoration:none; color:#0066cc;">Следующая работа &rarr;</a>` 
            : `<span style="color:#999;">Следующая работа &rarr;</span>`;

        nav.innerHTML = prevLink + homeLink + nextLink;
        document.body.insertBefore(nav, document.body.firstChild);
    }
});
