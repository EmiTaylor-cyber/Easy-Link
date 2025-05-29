// Coverage Map JavaScript for Easy Link website
// Handles map initialization and marker placement

document.addEventListener('DOMContentLoaded', function() {
    // Initialize map if the element exists
    const mapElement = document.getElementById('coverage-map');
    
    if (mapElement) {
        // Initialize Leaflet map centered on Arua, Uganda
        const map = L.map('coverage-map').setView([3.0288885, 30.90499555], 14);
        
        // Add OpenStreetMap tile layer
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            maxZoom: 19
        }).addTo(map);
        
        // Custom icon for active hotspots
        const activeIcon = L.divIcon({
            className: 'custom-marker active-marker',
            html: '<i class="fas fa-wifi"></i>',
            iconSize: [30, 30],
            iconAnchor: [15, 15]
        });
        
        // Custom icon for coming soon hotspots
        const comingSoonIcon = L.divIcon({
            className: 'custom-marker coming-soon-marker',
            html: '<i class="fas fa-wifi"></i>',
            iconSize: [30, 30],
            iconAnchor: [15, 15]
        });
        
        // Active hotspot locations
        const activeHotspots = [
            {
                name: "Arua Primary School",
                location: [3.0288885, 30.90499555],
                description: "Located near the main entrance. Strong signal strength."
            },
            {
                name: "Arua Central Market",
                location: [3.0308885, 30.90699555],
                description: "Located in the main market square. Medium signal strength."
            },
            {
                name: "Mvara Trading Center",
                location: [3.0268885, 30.90299555],
                description: "Located near Easy Link office. Very strong signal strength."
            },
            {
                name: "Ediofe Cathedral Area",
                location: [3.0248885, 30.90899555],
                description: "Located at the community center. Strong signal strength."
            }
        ];
        
        // Coming soon hotspot locations
        const comingSoonHotspots = [
            {
                name: "Arua Hill Shopping Mall",
                location: [3.0328885, 30.90599555],
                description: "Coming soon - Expected launch: June 2025"
            },
            {
                name: "Arua Bus Terminal",
                location: [3.0348885, 30.90799555],
                description: "Coming soon - Expected launch: July 2025"
            },
            {
                name: "Onduparaka Area",
                location: [3.0208885, 30.90399555],
                description: "Coming soon - Expected launch: August 2025"
            },
            {
                name: "Arua Regional Referral Hospital",
                location: [3.0228885, 30.90999555],
                description: "Coming soon - Expected launch: September 2025"
            }
        ];
        
        // Add active hotspot markers
        activeHotspots.forEach(hotspot => {
            // Add marker
            const marker = L.marker(hotspot.location, {icon: activeIcon}).addTo(map);
            
            // Add popup
            marker.bindPopup(`
                <strong>${hotspot.name}</strong><br>
                ${hotspot.description}<br>
                <span class="map-status active">Active</span>
            `);
            
            // Add coverage circle
            L.circle(hotspot.location, {
                color: '#2563eb',
                fillColor: '#60a5fa',
                fillOpacity: 0.2,
                radius: 100
            }).addTo(map);
        });
        
        // Add coming soon hotspot markers
        comingSoonHotspots.forEach(hotspot => {
            // Add marker
            const marker = L.marker(hotspot.location, {icon: comingSoonIcon}).addTo(map);
            
            // Add popup
            marker.bindPopup(`
                <strong>${hotspot.name}</strong><br>
                ${hotspot.description}<br>
                <span class="map-status coming-soon">Coming Soon</span>
            `);
            
            // Add coverage circle (dashed)
            L.circle(hotspot.location, {
                color: '#f59e0b',
                fillColor: '#fbbf24',
                fillOpacity: 0.1,
                radius: 100,
                dashArray: '5, 10'
            }).addTo(map);
        });
        
        // Add custom CSS for map markers
        const style = document.createElement('style');
        style.textContent = `
            .custom-marker {
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                border-radius: 50%;
                width: 30px !important;
                height: 30px !important;
            }
            
            .active-marker {
                background-color: #2563eb;
            }
            
            .coming-soon-marker {
                background-color: #f59e0b;
            }
            
            .map-status {
                display: inline-block;
                padding: 2px 6px;
                border-radius: 4px;
                font-size: 12px;
                font-weight: bold;
                margin-top: 5px;
            }
            
            .map-status.active {
                background-color: #10b981;
                color: white;
            }
            
            .map-status.coming-soon {
                background-color: #f59e0b;
                color: white;
            }
        `;
        document.head.appendChild(style);
    }
});
