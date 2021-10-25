
var fills = document.getElementsByClassName("o-logo-fill");
var colours = [
    /* Inkthreadable Solid */
    "c9343b", // Red
    "#e55173", // Hot Pink
    "#53b02b", // Lime Green
    "#2d57c2", // Royal Blue
    /* Inkthreadble Neon */
    "#c04921", // Neon Orange
    "#8bc943", // Neon Green
    "#f3f23d", // Neon Yellow
    "#e62e5a", // Neon Pink
    /* Inkthredable Earth */
    "#c5aa77", // Light Brown
    "#387946", // Bottle Green
    "#716622", // Khaki
    "#5f4432", // Brown
    /* Inkthreadable Marine */
    "#0e1f61", // Navy Blue
    "#448e6e", // Seafoam Green
    "#306772", // Turquoise
    "#58b4ab", // Aqua
    /* Inkthreadable Pastel */
    "#a6c6ec", // Sky Blue
    "#f1b5c5", // Baby Pink
    "#efb49c", // Pale Peach
    "#b4eb6b", // Pastel Green
    /* Inkthreadable Sunset */
    "#e7482c", // Orange
    "#f1b715", // Golden Yellow
    "#be782a", // Apricot
    "#8f4c58", // Rose Pink
    /* Inkthreadable Purple */
    "#8d1a95", // Purple
    "#9294c2", // Lavender
    "#5a2f50", // Aubergine
    "#3c246d", // Violet
    /* Inkthreadable Monochrome */
    "#ffffff", // White
    "#d9d9d9", // Light Grey
    "#515151", // Dark Grey
    "#000000", // Black
    ];
var colour = 0;

window.setInterval(function(){

    colour = (colour == colours.length-1 ? 0 : colour+1);
    for (x=0; x<fills.length; x++) {
        fills[x].setAttribute("fill", colours[colour]);
    }
}, 4000); /* Every second, change the colour of the full stop */
