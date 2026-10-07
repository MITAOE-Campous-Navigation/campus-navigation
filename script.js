const rooms = [
    // Classrooms from the uploaded MITAOE layout
    ["D-302A","Classroom","D WING","POST GRADUATE","Engineering",32],
    ["H-305","Classroom","H WING","POST GRADUATE","Engineering",34],
    ["H-310","Classroom","H WING","POST GRADUATE","Engineering",66],
    ["A-009","Classroom","A WING","UNDER GRADUATE","Engineering",93],
    ["A-010","Classroom","A WING","UNDER GRADUATE","Engineering",93],
    ["A-105","Classroom","A WING","UNDER GRADUATE","Engineering",92],
    ["A-106","Classroom","A WING","UNDER GRADUATE","Engineering",92],
    ["A-112","Classroom","A WING","UNDER GRADUATE","Engineering",95],
    ["A-113","Classroom","A WING","UNDER GRADUATE","Engineering",95],
    ["D-006","Classroom","D WING","UNDER GRADUATE","Engineering",66],
    ["D-007","Classroom","D WING","UNDER GRADUATE","Engineering",67],
    ["D-008","Classroom","D WING","UNDER GRADUATE","Engineering",67],
    ["D-009","Classroom","D WING","UNDER GRADUATE","Engineering",66],
    ["D-010","Classroom","D WING","UNDER GRADUATE","Engineering",66],
    ["D-108","Classroom","D WING","UNDER GRADUATE","Engineering",66],
    ["D-202","Classroom","D WING","UNDER GRADUATE","Engineering",66],
    ["D-305","Classroom","D WING","UNDER GRADUATE","Engineering",66],
    ["D-307","Classroom","D WING","UNDER GRADUATE","Engineering",66],
    ["D-308","Classroom","D WING","UNDER GRADUATE","Engineering",50],
    ["D-309","Classroom","D WING","UNDER GRADUATE","Engineering",66],
    ["H-010","Classroom","H WING","UNDER GRADUATE","Engineering",71],
    ["H-011","Classroom","H WING","UNDER GRADUATE","Engineering",71],
    ["H-101","Classroom","H WING","UNDER GRADUATE","Engineering",66],
    ["H-104","Classroom","H WING","UNDER GRADUATE","Engineering",66],
    ["H-105","Classroom","H WING","UNDER GRADUATE","Engineering",67],
    ["H-108","Classroom","H WING","UNDER GRADUATE","Engineering",101],
    ["H-202","Classroom","H WING","UNDER GRADUATE","Engineering",67],
    ["H-203","Classroom","H WING","UNDER GRADUATE","Engineering",67],
    ["H-301","Classroom","H WING","UNDER GRADUATE","Engineering",71],
    ["H-302","Classroom","H WING","UNDER GRADUATE","Engineering",71],
    ["H-303","Classroom","H WING","UNDER GRADUATE","Engineering",71],
    ["H-309","Classroom","H WING","UNDER GRADUATE","Engineering",66],
    ["HBM-10","Classroom","H WING","UNDER GRADUATE","Engineering",66],
    ["HBM-11","Classroom","H WING","UNDER GRADUATE","Engineering",66],
    ["F-003","Drawing Hall","F WING","UNDER GRADUATE","Engineering",132],
    ["F-008A","Drawing Hall","F WING","UNDER GRADUATE","Engineering",66],
    ["HBM-12","Drawing Hall","H WING","UNDER GRADUATE","Engineering",132],
    ["D-301B","Laboratory","D WING","POST GRADUATE","Engineering",72],
    ["H-008","Laboratory","H WING","POST GRADUATE","Engineering",68],
    ["H-207B","Laboratory","H WING","POST GRADUATE","Engineering",66],

    // Laboratories
    ["A-003","Laboratory","A WING","UNDER GRADUATE","Engineering",66],
    ["A-006A","Laboratory","A WING","UNDER GRADUATE","Engineering",66],
    ["A-008","Laboratory","A WING","UNDER GRADUATE","Engineering",66],
    ["A-012","Laboratory","A WING","UNDER GRADUATE","Engineering",95],
    ["A-013","Laboratory","A WING","UNDER GRADUATE","Engineering",66],
    ["A-103","Laboratory","A WING","UNDER GRADUATE","Engineering",95],
    ["A-107","Laboratory","A WING","UNDER GRADUATE","Engineering",92],
    ["A-108","Laboratory","A WING","UNDER GRADUATE","Engineering",66],
    ["A-109","Laboratory","A WING","UNDER GRADUATE","Engineering",66],
    ["A-110","Laboratory","A WING","UNDER GRADUATE","Engineering",76],
    ["A-201A","Laboratory","A WING","UNDER GRADUATE","Engineering",66],
    ["A-202","Laboratory","A WING","UNDER GRADUATE","Engineering",95],
    ["A-207A","Laboratory","A WING","UNDER GRADUATE","Engineering",66],
    ["A-207B","Laboratory","A WING","UNDER GRADUATE","Engineering",66],
    ["A-208","Laboratory","A WING","UNDER GRADUATE","Engineering",66],
    ["A-209","Laboratory","A WING","UNDER GRADUATE","Engineering",66],
    ["A-210","Laboratory","A WING","UNDER GRADUATE","Engineering",66],
    ["D-104","Laboratory","D WING","UNDER GRADUATE","Engineering",73],
    ["D-105","Laboratory","D WING","UNDER GRADUATE","Engineering",66],
    ["D-106","Laboratory","D WING","UNDER GRADUATE","Engineering",66],
    ["D-107","Laboratory","D WING","UNDER GRADUATE","Engineering",66],
    ["D-308","Laboratory","D WING","UNDER GRADUATE","Engineering",73],
    ["F-006A","Laboratory","F WING","UNDER GRADUATE","Engineering",66],
    ["H-005B","Laboratory","H WING","UNDER GRADUATE","Engineering",66],
    ["H-007","Laboratory","H WING","UNDER GRADUATE","Engineering",72],
    ["H-009","Laboratory","H WING","UNDER GRADUATE","Engineering",71],
    ["H-012","Laboratory","H WING","UNDER GRADUATE","Engineering",67],
    ["H-102","Laboratory","H WING","UNDER GRADUATE","Engineering",67],
    ["H-103","Laboratory","H WING","UNDER GRADUATE","Engineering",67],
    ["H-106","Laboratory","H WING","UNDER GRADUATE","Engineering",67],
    ["H-107","Laboratory","H WING","UNDER GRADUATE","Engineering",101],
    ["H-204A","Laboratory","H WING","UNDER GRADUATE","Engineering",71],
    ["H-204B","Laboratory","H WING","UNDER GRADUATE","Engineering",71],
    ["H-205","Laboratory","H WING","UNDER GRADUATE","Engineering",66],
    ["H-207","Laboratory","H WING","UNDER GRADUATE","Engineering",66],
    ["H-304A","Laboratory","H WING","UNDER GRADUATE","Engineering",66],
    ["H-304B","Laboratory","H WING","UNDER GRADUATE","Engineering",66],
    ["H-306A","Laboratory","H WING","UNDER GRADUATE","Engineering",66],
    ["H-306B","Laboratory","H WING","UNDER GRADUATE","Engineering",66],
    ["H-308","Laboratory","H WING","UNDER GRADUATE","Engineering",66],
    ["HBM-03","Laboratory","H WING","UNDER GRADUATE","Engineering",66],
    ["HBM-04","Laboratory","H WING","UNDER GRADUATE","Engineering",66],
    ["HBM-05","Laboratory","H WING","UNDER GRADUATE","Engineering",66],
    ["HBM-06","Laboratory","H WING","UNDER GRADUATE","Engineering",66],
    ["HBM-07","Laboratory","H WING","UNDER GRADUATE","Engineering",66],
    ["HBM-09","Laboratory","H WING","UNDER GRADUATE","Engineering",66],

    // Design / workshops / tutorial / other rooms visible in the layout
    ["D-302B","Research Laboratory","D WING","POST GRADUATE","Engineering",66],
    ["A-008","Tutorial Room","A WING","UNDER GRADUATE","Engineering",33],
    ["A-107","Tutorial Room","A WING","UNDER GRADUATE","Engineering",35],
    ["A-201B","Tutorial Room","A WING","UNDER GRADUATE","Engineering",33],
    ["F-101A","Tutorial Room","F WING","UNDER GRADUATE","Engineering",36],
    ["F-101B","Tutorial Room","F WING","UNDER GRADUATE","Engineering",36],
    ["H-001B","Tutorial Room","H WING","UNDER GRADUATE","Engineering",33],
    ["H-201A","Tutorial Room","H WING","UNDER GRADUATE","Engineering",34],
    ["H-201B","Tutorial Room","H WING","UNDER GRADUATE","Engineering",33],
    ["D-301A","Tutorial Room","D WING","POST GRADUATE","Engineering",33],
    ["H-311","Tutorial Room","H WING","POST GRADUATE","Engineering",33],
    ["F-004","Workshop","F WING","UNDER GRADUATE","Engineering",200],
    ["F-005","Workshop","F WING","UNDER GRADUATE","Engineering",216],
    ["F-001","Additional Workshop","F WING","UNDER GRADUATE","Engineering",200],
    ["D-102","Seminar Hall","D WING","UNDER GRADUATE","Engineering",172],
    ["F-007","Tutorial Room","F WING","UNDER GRADUATE","Design",33],
    ["F-008","Tutorial Room","F WING","UNDER GRADUATE","Design",33],
    ["F-009","Tutorial Room","F WING","UNDER GRADUATE","Design",33],
    ["H-111","Photography Lab","H WING","UNDER GRADUATE","Design",101],
    ["E-004B","Laboratory","E WING","UNDER GRADUATE","Design",67],
    ["E-008","Laboratory","E WING","UNDER GRADUATE","Design",68],
    ["E-009A","Laboratory","E WING","UNDER GRADUATE","Design",68],
    ["E-009B","Laboratory","E WING","UNDER GRADUATE","Design",68],
    ["E-010","Laboratory","E WING","UNDER GRADUATE","Design",68],
    ["F-002","Laboratory","F WING","UNDER GRADUATE","Design",66],
    ["H-001A","Laboratory","H WING","UNDER GRADUATE","Design",66],
    ["H-002","Laboratory","H WING","UNDER GRADUATE","Design",71],
    ["D-109","Class Room / Studio","D WING","UNDER GRADUATE","Design",132],
    ["D-203","Class Room / Studio","D WING","UNDER GRADUATE","Design",132],
    ["E-001","Class Room / Studio","E WING","UNDER GRADUATE","Design",109],
    ["E-002","Class Room / Studio","E WING","UNDER GRADUATE","Design",109],
    ["E-003","Class Room / Studio","E WING","UNDER GRADUATE","Design",109],
    ["E-006","Class Room / Studio","E WING","UNDER GRADUATE","Design",109],
    ["E-007","Class Room / Studio","E WING","UNDER GRADUATE","Design",109],
    ["E-008","Class Room / Studio","E WING","UNDER GRADUATE","Design",109],
    ["E-011","Class Room / Studio","E WING","UNDER GRADUATE","Design",132],
    ["D-011","Class Room / Studio","D WING","UNDER GRADUATE","Design",132],
    ["D-012","Seminar Hall","D WING","UNDER GRADUATE","Design",132]
];

function showRooms(list) { }

function searchRoom(event) {
    if (event && event.key !== "Enter") return;

    const value = document.getElementById("searchInput").value.trim().toUpperCase();

    if (value === "") {
        document.getElementById("result").innerHTML =
            "<h3>Search for a room</h3><p>Please enter a room number.</p>";
        return;
    }

    const found = rooms.filter(r => r[0].toUpperCase() === value);

    if (found.length > 0) {
        const r = found[0];
        document.getElementById("result").className = "result success";
        const destination = encodeURIComponent(
            `MIT Academy of Engineering, ${r[2]}, ${r[0]}, Alandi, Pune`
        );

        const campusDestination = encodeURIComponent(
            "MIT Academy of Engineering, Alandi, Pune"
        );

        document.getElementById("result").innerHTML = `
            <h3>📍 ${r[0]}</h3>
            <p><b>Room Type:</b> ${r[1]}</p>
            <p><b>Building:</b> ${r[2]}</p>
            <p><b>Level:</b> ${r[3]}</p>
            <p><b>Programme:</b> ${r[4]}</p>
            <p><b>Area:</b> ${r[5]} sq. m.</p>

            <div class="result-buttons">
                <a class="direction-btn" target="_blank"
                   href="https://www.google.com/maps/dir/?api=1&destination=${destination}">
                   📍 Get Directions to ${r[0]}
                </a>
                <a class="campus-btn" target="_blank"
                   href="https://www.google.com/maps/dir/?api=1&destination=${campusDestination}">
                   🗺️ Directions to MITAOE
                </a>
            </div>

            <p class="map-note">Google Maps will guide you to the MITAOE campus.
            The selected wing and room number tell the student where to go inside the campus.</p>
        `;
    } else {
        document.getElementById("result").className = "result";
        document.getElementById("result").innerHTML =
            `<h3>❌ Room not found</h3>
             <p>No room named <b>${value}</b> was found in the data entered from the uploaded layout.</p>`;
    }
}

function filterWing(wing) {
    if (wing === "All") {
    } else {
    }

    document.getElementById("searchInput").value = "";
    document.getElementById("result").innerHTML =
        `<h3>${wing === "All" ? "All Rooms" : wing}</h3>
         <p>Select a room card or search for an exact room number.</p>`;
}
