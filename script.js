//this is just bringing in all the components

//subtitle math
const subtitles = [
    "five nights at freddy's 5", 
    "known for the pineapple incident",
    "this is a personal website btw", 
    'one time i got called a "trag"', 
    "suck my dick [JOKE]",
    "this is a randomized splash screen",
    "stop gooning, we love you",
    "i miss you vanilla, wherever you are.",
    '"i feel like she can only exist because of the internet"',
    "it says gullible under the title",
    "goodbye, secret files",
    "you have a little something there at the corner of your mouth", 
    "fat wolf women near me",
    "2 mcdoubles, 2 mcchickens, a big mac, and a 10 piece nugget",
    "play bug fables!",
    "HI I'M JUNO SHIT MY MOM IS CALLING ME SORRY GTG",
    "skibidi ohio rizz or whatever the fuck the kids say",
    "spell icup",
    "everything in this website is free except the website",
    "she was cooking up shit in a kettle. like poo in a kettle",
    "i'm apart of the 4chan hacker group called anonymous",
    "when i come back you'll still be here",
    "SFDGHDFHGDFHDFHDFGHFGHDFGHDFHFDGHDFGHDFGHFDGHDFGHFDGHDFHFDGFGHFGDHDFGHGFDHF",
    "purchase my makeship plushie OOPS too late you're never seeing it again",
    "death to the apartheid state of isreal",
    "send me money on kofi",
    "gundam barbatos lupus rex",
    "pron is good beat my meat",
    "you just lost the game lmao fuck you",
    "no such thing as an ethical billionare",
    "have you ever had to explain usb standards to the elderly ?",
    "helpy probably gets tired dancing all the time",
    "listen to glass beach",
    "home owner comes home, smart horse fixes mess",
    "drink lots of water but not too much",
    "they dont undestand the things i say on twitter",
    "have you brushed your teeth today ?",
    "as seen in the rio 2016 olympic games",
    "all your website is belong to us",
    "nyan cat was a hero and nobody believed in them except me",
    '"King Arthur came a lot, right?" - philomena cunk',
    "2 Player Verity Tycoon",
    "she said hello,,,, to hello,,, neighbor !!!",
    "tung tung tung sahur approved this",
    "one time i took pain pills and they made my head hurt more and that's when i realized they were pain pills",
    "i can say faggot without getting banned here",
    'i sell illegal drugs on here just type "/xyz123.html" into the search bar.',
    ",,,,hi,,,,,,,,,,,"
    ];
const num = Math.floor(Math.random() * subtitles.length);

const header = document.querySelector("#header");
fetch("components/header.html")
    .then(response => response.text())
    .then(html => {
        header.innerHTML = html;

    document.querySelector("#subtitle").textContent = subtitles[num];
    });

const footer = document.querySelector("#footer");
fetch("components/footer.html")
    .then(response => response.text())
    .then(html => {
        footer.innerHTML = html;
    });
