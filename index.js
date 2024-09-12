const input = prompt("vanilla, strawberry, coffee");

        if (input) {
           const flavors = input.split(',').map(flavor => flavor.trim().toLowerCase());

            const flavorCounts = {};
            flavors.forEach(flavor => {
                flavorCounts[flavor] = (flavorCounts[flavor] || 0) + 1;
            });

            console.table(flavorCounts);
        } else {
            console.log("flavorCounts");
        }