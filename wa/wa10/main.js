const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');


var storyText = "Once upon a time in the small, picturesque town of Colorado, nestled in the heart of :inserty:, a mysterious series of events unfolded, shrouding the community in an eerie and inexplicable atmosphere. The town was known for its breathtaking scenery, with lush, rolling hills and a crystal-clear lake that shimmered in the summer sun. One summer, as the temperature soared to an astonishing 94 fahrenheit degrees, the townsfolk couldn't help but feel the oppressive heat pressing down on them like an invisible weight, making them irritable and uneasy. However, the discomfort of the heat soon paled in comparison to the sinister incidents that began to transpire. It all started with the sudden disappearance of :insertx:, a beloved member of the community. :insertx:, a kind and charitable soul, had gone for a leisurely walk by the tranquil lake one evening. As the sun dipped below the horizon, painting the sky with vivid shades of orange and pink, :insertx: never returned home. Panic spread like wildfire through :insertx:’s family and friends as they embarked on a frantic search to locate their missing loved one. Weeks passed, and the entire town joined the search efforts, combing the picturesque landscape for any trace of :insertx:. The worry and anxiety weighed heavily on the hearts of the townspeople, just as the oppressive heat weighed on their bodies. Then, another mysterious event sent shockwaves through the town.The local authorities discovered :insertx:’s lifeless body floating in the very lake :insertx: had cherished so dearly. The cause of death, as determined by the coroner, was :insertz:, a grim and bewildering revelation. The town was left in a state of disbelief and sorrow. How had :insertx:, who was known for their unwavering love for the lake, met such a tragic end in its waters? The townspeople were left grappling with an unbearable weight of grief and confusion. As the investigation into :insertx:'s death unfolded, more questions than answers emerged. The once - peaceful town of :insertx: was forever marked by this dark mystery, and the enigmatic circumstances of :insertx:’s passing haunted its residents for years to come.";
var insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
var insertY = ["the soup kitchen", "Disneyland", "the White House"];
var insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}


randomize.addEventListener('click', result);

function result() {
    var xItem = randomValueFromArray(insertX);
    var yItem = randomValueFromArray(insertY);
    var zItem = randomValueFromArray(insertZ);

    var newStory = storyText;

    // Replacing the X's
    newStory = newStory.replaceAll(":insertx:", xItem);
    newStory = newStory.replaceAll(":inserty:", yItem);
    newStory = newStory.replaceAll(":insertz:", zItem);

    if (customName.value !== '') {
        const name = customName.value;
        newStory = newStory.replace("Colorado", name);

    }

    if (document.getElementById("uk").checked) {
        const weight = Math.round(300 * 0.071429) + ' stone';
        const temperature = Math.round((94 - 32) * (5 / 9)) + ' centrigrade';

        newStory = newStory.replace("94 fahrenheit", temperature);
        newStory = newStory.replace("300 pounds", weight);
    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
}