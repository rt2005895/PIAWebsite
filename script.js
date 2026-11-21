document.addEventListener("click", function (event) {

    let clickedItem = event.target.closest(".nav-item");
    let dropdownLink = event.target.closest(".dropdown a");

    document.querySelectorAll(".nav-item input[type='checkbox']").forEach(function (checkbox) {

        let currentItem = checkbox.closest(".nav-item");

        // Close all dropdowns when clicking outside navbar
        if (!event.target.closest(".nav-center")) {
            checkbox.checked = false;
        }

        // Close other dropdowns when clicking another menu
        else if (clickedItem && currentItem !== clickedItem) {
            checkbox.checked = false;
        }

        // Close dropdown after clicking its link
        if (dropdownLink) {
            checkbox.checked = false;
        }

    });

});