$( function() {
    var destinationTags = [
        "Mexico",
        "Puerto Rico",
        "Puerto Vallarta",
        "Cancun",
        "Los Angeles",
        "France",
        "Paris",
        "Monaco",
        "England",
        "U,K.",
        "Italy",
        "Florence",
        "Rome",
        "Spain",
        "Barcelona",
        "Madrid",
        "Thailand",
        "Phuket",
        "Bangkok",
        "Australia",
        "New Zealand"
    ];
     $("#tags").autocomplete({
      source: destinationTags
    });
});