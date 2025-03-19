document.addEventListener("DOMContentLoaded", function() {
    const counterElements = document.querySelectorAll(".stat span");

    counterElements.forEach(el => {
        let count = 0;
        const target = parseInt(el.textContent.replace(/\D/g, ""));
        
        const updateCounter = () => {
            if (count < target) {
                count += Math.ceil(target / 100);
                el.textContent = count + "+";
                setTimeout(updateCounter, 50);
            } else {
                el.textContent = target + "+";
            }
        };
        
        updateCounter();
    });
});
