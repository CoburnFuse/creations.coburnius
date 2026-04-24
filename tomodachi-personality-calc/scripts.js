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

    //Runs the convert scores Function
    convertScoresToPersonality(speechAndMovementScore, energyAndAttitudeScore);
};

function convertScoresToPersonality(speechAndMovement, energyAndAttitude) {

    //All main personalities with their info (has both NTSC and PAL names)
    const archetypes =  [
        ["Easy-Going / Considerate", "Amicable", "Thoughtful, honest, innocent. Does things at their own pace."],
        ["Energetic / Outgoing", "Sociable", "Optimistic and Passionate. Follows their instincts."],
        ["Reserved", "Aloof", "Logical, headstrong, cautious. Calmy lays out the facts."],
        ["Confident / Ambitious", "Self-Assured", "A by-the-book straight-talker. Puts a premium on results."]
    ];

    //Puts the personalities in an organized matrix, making it able to use columns and rows (has both NTSC and PAL names)
    const personalities = [
        [
            ["Introvert / Observer", "Self-sufficient and highly individual. Doesn't show much outward emotion, but has a lot going on deep down.", archetypes[2]], 
            ["Patient / Strategist", "Unique, carefree, creative, laid-back. They're self-reliant, doing things their own way and thinking outside the box.", archetypes[2]], 
            ["Carer / Buddy", "Trustworthy and considerate. Puts their friends first and works hard to make sure everyone gets along.", archetypes[0]],
            ["Softie / Sweetie", "Empathetic and sentimental. Sensitive, emotional, and in tune with the feelings of others.", archetypes[0]]
        ],
        [
            ["Thinker", "Thoughtful and introspective. Great at thinking things through and analyzing issues from every angle.", archetypes[2]],
            ["Perfectionist", "Imaginative and inspired. Happiest when creating something. Finds beauty in everyone and everything.", archetypes[2]],
            ["Dreamer / Daydreamer", "Idealistic and romantic. Often has their head in the clouds, but finds a lot of great ideas up there.", archetypes[0]],
            ["Optimist / Cheerleader", "Positive, enthusiastic, and always beaming. Smiles for their own sake and to help others smile too.", archetypes[0]]
        ],
        [
            ["Individualist / Rogue", "Intelligent and not afraid to show it. Knowledgeable in a wide range of subjects. Answers with confidence.", archetypes[3]],
            ["Busy Bee / Achiever", "Diligent, productive, and highly efficient. Equally as skilled at planning and executing plans.", archetypes[3]],
            ["Bubbly / Merrymaker", "Outgoing and pleasant to be around. Makes friends easily, and can turn any bad situation into a good one.", archetypes[1]],
            ["Charmer", "Radiant and always on form. Their effortless style is admired by all. Easily adapts to new situations.", archetypes[1]]
        ],
        [
            ["Headstrong / Maverick", "A determined self-starter. Cuts their own path, letting nothing stand in their way. Quick to execute plans.", archetypes[3]],
            ["Leader / Visionary", "Risk taking and ambitious. Full of energy and acts on many whims. Once they start, they don't stop!", archetypes[3]],
            ["Hot-Blooded / Dynamo", "Assertive and highly regarded. Trusts their own instincts, and easily commands the respect of others.", archetypes[1]],
            ["Adventurer / Go-getter", "Bold and captivating. Their wit and charm light up a room. It's never a dull moment when they're around!", archetypes[1]]
        ]
    ];

    //Gets the personality from the relevant values
    const getIndex = (val) => {
        if (val <= 3) return 0;
        if (val <= 7) return 1;
        if (val <= 11) return 2;
        return 3;
    };

    const row = getIndex(speechAndMovement);
    const col = getIndex(energyAndAttitude);

    //Writes the data to the site (using a new function), this is an array with info that is sent
    writeInfoToSite({
        personalityName: personalities[row][col][0],
        personalityDescription: personalities[row][col][1],
        archetypeName: personalities[row][col][2][0],
        archetypeWord: personalities[row][col][2][1],
        archetypeTraits: personalities[row][col][2][2]
    });
}

function writeInfoToSite(personalityData){
    console.log(personalityData);

    const fullDataToWrite =
    `<b>${personalityData.archetypeName}</b><br>
    <table>
        <tr><td>In a word: </td><td>${personalityData.archetypeWord}</td><tr>
        <tr><td>Traits: </td><td>${personalityData.archetypeTraits}</td><tr>
    </table>
    <b>${personalityData.personalityName}</b><br>
    ${personalityData.personalityDescription}`

    document.querySelector("#personalityOutput").innerHTML = fullDataToWrite;
}

//Makes sure it shows the correct input upon a refresh so it will not bug out
readInputs();