const counters = document.querySelectorAll('.counter');
const speed = 200; // The higher the slower

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        // gives the Incriment to count up by - raise speed (above) to slow counting progress
        const inc = target / speed;

        // console.log(inc);
        // console.log(count);

        // Check if target is reached
        if (count < target) {
            // Add inc to count and output in counter
            counter.innerText = Math.ceil(count + inc); //Math.ceil() - method that keeps from using decimal - only uses whole numbers
            // Call function every ms
            setTimeout(updateCount, 1);
        } else {
            counter.innerText = target;
        }
    };

    updateCount();
});