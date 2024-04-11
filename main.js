
        var map = L.map('map').setView([43.35, 12.566667], 13);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

        var marker = L.marker([43.35, 12.566667]).addTo(map);
        marker.bindPopup("<b>Ciao bello!</b><br>Come and visit me.").openPopup();
