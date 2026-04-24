const personalityTableContainer = document.getElementById("personalityInputTable");

//Run the function each time a change has been made to the input
personalityTableContainer.addEventListener("change", (event) => {
    readInputs();
});

function readInputs(){
    
    //Turns all values into integers
    let movementScore = parseInt(document.querySelector('input[name="movement"]:checked').value);
    let speechScore = parseInt(document.querySelector('input[name="speech"]:checked').value);
    let energyScore = parseInt(document.querySelector('input[name="energy"]:checked').value);
    let attitudeScore = parseInt(document.querySelector('input[name="attitude"]:checked').value);

    //Combines relevant integers
    let speechAndMovementScore = speechScore + movementScore;
    let energyAndAttitudeScore = energyScore + attitudeScore;

    //Shows the relevant personality
    document.querySelector("#personalityOutput").innerHTML = convertScoresToPersonality(speechAndMovementScore, energyAndAttitudeScore);
};

function convertScoresToPersonality(speechAndMovement, energyAndAttitude) {

    //Puts the personalities in an organized matrix, making it able to use columns and rows (has both NTSC and PAL names)
    const personalities = [
        ["Introvert / Observer", "Patient / Strategist", "Carer / Buddy", "Softie / Sweetie"],
        ["Thinker", "Perfectionist", "Dreamer / Daydreamer", "Optimist / Cheerleader"],
        ["Individualist / Rogue", "Busy Bee / Achiever", "Bubbly / Merrymaker", "Charmer"],
        ["Headstrong / Maverick", "Leader / Visionary", "Hot-Blooded / Dynamo", "Adventurer / Go-getter"]
    ];

    //Gets the values of the relevant values
    const getIndex = (val) => {
        if (val <= 3) return 0;
        if (val <= 7) return 1;
        if (val <= 11) return 2;
        return 3;
    };

    const row = getIndex(speechAndMovement);
    const col = getIndex(energyAndAttitude);

    //Returns the correct personality, depending on the input, obtaining the info from the matrix
    return(personalities[row][col]);
}

//Makes sure it shows the correct input upon a refresh so it will not bug out
readInputs();