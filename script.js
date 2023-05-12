//Define o modifica una propiedad en un objeto. Si la propiedad ya existe en el objeto, se define con el valor proporcionado y se establecen las configuraciones de enumerabilidad, configurabilidad y capacidad de escritura según los parámetros proporcionados. Si la propiedad no existe, se agrega al objeto con el valor proporcionado. La función retorna el objeto modificado.

function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}

class CardProfile extends React.Component {
    constructor(...args) {
        super(...args);
        _defineProperty(this, "state", {
            index: 3,
            currentTime: '0:00',
            musicList: [{
                    name: 'Coldplay - A Sky Full Of Stars',
                    author: 'Coldplay',
                    img: 'imgs/skyfull.jpg',
                    audio: 'sngs/Coldplay - A Sky Full Of Stars.mp3',
                    duration: '4:34',
                    lyrics: "'Cause you're a sky,\n'cause you're a sky full of stars.\nIm gonna give you my heart.\n\nCause you're a sky, \n'cause you're a sky full of stars. \n'Cause you light up the path.\n\nI don't care, go on and tear me apart\nI don't care if you do, ooh-ooh, ooh\n'Cause in a sky, \n'cause in a sky full of stars\nI think I say you.\n\n'Cause you're a sky,\n'cause you're a sky full of stars\nI wanna die in your arms, oh, oh-oh\n'Cause you get lighter the more it gets dark,\nI'm gonna give you my heart, oh.\n\nI don't care, go on and tear me apart\nI don't care if you do, ooh-ooh, ooh.\n'Cause in a sky, 'cause in a sky full of stars\nI think I see you,\nI think I see you.\n\n'Cause you're a sky, you're a sky full of stars.\nSuch a heavenly view\nYou're such a heavenly view.\nYeah, yeah, yeah, ooh."
                },
                {
                    name: 'Moondust',
                    author: 'Jaymes Young',
                    img: 'imgs/moondust.jpg',
                    audio: 'sngs/Jaymes Young - Moondust.mp3',
                    duration: '3:43',
                    lyrics: "I'm building this house, on the moon\nLike a lost, astronaut.\nLooking at you, like a star,\nFrom the place, the world forgot.\n\nAnd there's nothing, that I can do,\nExcept bury my love for you.\n\nThe brightness of the sun,\nwill give me just enough,\nTo bury my love(to bury my love),\nIn the Moondust,\nI long to hear your voice,\nbut still I make the choice,\nTo bury my love (to bury my love),\nIn the Moondust.\n\nNothing can breathe, in the space,\nColder than, the darkest sea,\nI have dreams about the days,\nDriving through your sunset breeze.\n\nBut the first thing that I will do\nIs bury my love for you.\n\nThe brightness of the sun,\nwill give me just enough,\nTo bury my love(to bury my love),\nIn the Moondust,\nI long to hear your voice,\nbut still I make the choice,\nTo bury my love (to bury my love),\nIn the Moondust.\n\nI'm a castaway,\nand men reap what they sow\nAnd I say what I know, to be true.\nYeah, I'm living far away,\non the face of the moon\nI've buried my love to give the world to you.\n"
                },
                {
                    name: 'Avalanches',
                    author: 'Alma feat Remedy Kill Paris',
                    img: 'imgs/avalanches.jpg',
                    audio: 'sngs/Alma   Avalanches (feat Sound Remedy  Kill Paris).mp3',
                    duration: '4:31',
                    lyrics: "Will I see you on the brighter side of this life.\nAs the rocks fall be stronger at the bottom babe.\n\nThe avalanche will always try and hide the pain.\nBut if I find you nothing will ever be the same.\n\nJust hold onto the sun.\nNever feel alone.\nBe the one you want.\nWhen avalanches fall.\n\nSpread your winas.\n\nSpread your winas.\nAnd leave the shadows.\nSo damn far beneath you.\nStrange the dar.\nNothing to breathe but love.\n\nJust hold onto the sun.\nNever feel alone.\nBe the one you want.\nWhen avalanches fall.\n\nSpread your winas.\nYeah we ain't down."
                },

                {
                    name: 'Wake up',
                    author: 'EDEN',
                    img: 'imgs/eden.jpg',
                    audio: 'sngs/EDEN - Wake Up.mp3',
                    duration: '4:39',
                    lyrics: "'Cause we've been driving so long,\nI can't remember how we got here,\nOr how we survived so long,\nI'm trying to run from our pride,\n'Til you set fire to my atmosphere,\nAnd I remember how I spent the twenty-third\nFeeling six feet under\nWhen I'm 30,000 feet in the air,\nChasing that sundown,\nSo far East, I'm Westbound,\nFeeling like the edge of this world is near.\n\nBut you'll feel better when you wake up,\nSwear to God I'll make up,\nEverything and more when I get back someday.\nThis is more than just a phase, love.\nShooting stars all break up\nAnd even though it seems like half the world away.\n\nThings will be better in America,\nHeard the streets are gold there,\nMaybe I can fly you out this place someday,\nChasing dreams like I'm on novocain,\nScreaming through your airways,\nLooking back, I almost thought I heard you say.\n\nStay, you're not gonna leave me,\nThis place is right where you need to be,\nAnd why your words gotta mean so much to them,\nAnd they mean nothing to me?\n\nSo stay, you're not what you're hearing,\n'Cause I've been watching you changing,\nAnd who said you're one in a million, Anyway?\n\n'Cause you see only what you want to,\nYour tunnel vision haunts you,\nAnd you can't see what's wrong,\nAnd you keep sleeping through the PM,\nEyes wide open when you're dreaming,\nYou're sleepwalking, just keep talking,\nAnd maybe you can talk your walk out of this deep end,\nNo B plan in your system,\nJust tell me what you're thinkin,\nI'm scared that you might fall,\nBut you're not,\nBut you're not.\n\nAnd you'll feel better when you wake up,\nTaking off your makeup,\nSun always seems to wash our fears away,\nAnd it's always shining somewhere,\nI just gotta get there,\nAnd even though it seems like half the world away.\n\nThings will be better in America,\nHeard the streets are gold there,\nMaybe I can fly you out this place someday,\nChasing dreams like I'm on novocain,\nScreaming through your airways,\nLooking back, I almost thought I heard you say.\n\nStay, you're not gonna leave me,\nThis place is right where you need to be,\nAnd why your words gotta mean so much to them,\nAnd they mean nothing to me?\n\nSo stay, you're not what you're hearing,\n'Cause I've been watching you changing,\nAnd who said you're one in a million.\n\nYou're so much better than that...\nYou're so much better than that...\nYou're so much better than that...\n"
                },

                {
                    name: 'Chasing Ghosts',
                    author: 'The Eden Project',
                    img: 'imgs/chasing.jpg',
                    audio: 'sngs/The Eden Project-Chasing Ghosts.mp3',
                    duration: '4:07',
                    lyrics: "I just want you,\nI just want you,\nThe words I never said,\nBut wanted to.\n\nI'm losing you,\nI'm losing you,\nBut these thoughts won't let you go,\nThey keep running back to you.\n\nI just want you,\n(Chasing ghosts)\nI just want you,\n(Chasing ghosts)\nI just want you,\n(Chasing ghosts)\n(Chasing chasing)\n\nAnd I'm bleeding words,\nThey escape me the recoil ithurts,\nAnd I can't look the other way,\nI'm chasing starlight to find it's died away.\n\nBreathe it in,\nIt's just now,\nWe're just falling,\nAnd we won't always.\n\nFree fall back to nothing,\n'Cause I'm just starting to learn.\n\nI've always been chasing ghosts.\n\nI just want you...\n"
                },
                {
                    name: 'Love is Gone',
                    author: 'David Guetta',
                    img: 'imgs/loveisgone.jpg',
                    audio: 'sngs/David GuettaChris Willis-Love Is Gone.mp3',
                    duration: '3:43',
                    lyrics: "What are we supposed to do?\nAfter all that we've been through,\nWhen everything that felt so right is wrong,\nNow that the love is gone.\n\nThere is nothing left to prove,\nNo use to deny this simple truth,\nCan't find the reason to keep holding on,\nNow that the love is gone.\n\nThere is nothing left to prove,\nNo use to deny this simple truth,\nCan't find the reason to keep holding on,\nNow that the love is gone.\n\nLove is gone,\nLove is gone,\nLove is gone.\n\nLove is gone,\nLove is gone.\n\nWhat are we supposed to do?\nAfter all that we've been through,\nWhen everything that felt so right is wrong,\nNow that the love is gone.\n\nThere is nothing left to prove,\nNo use to deny this simple truth,\nCan't find the reason to keep holding on,\nNow that the love is gone.\n\nWhat are we supposed to do?\nAfter all that we've been through,\nWhen everything that felt so right is wrong,\nNow that the love is gone.\n\nThere is nothing left to prove,\nNo use to deny this simple truth,\nCan't find the reason to keep holding on,\nNow that the love is gone.\n\nLove is gone,\nLove is gone,\nLove is gone.\n\nLove is gone,\nLove is gone.\n"
                },
                {
                    name: 'Agony',
                    author: 'AZEDIA',
                    img: 'imgs/agony.jpg',
                    audio: 'sngs/AZEDIA-Agony.mp3',
                    duration: '6:26',
                    lyrics: "I have sacrificed all that I believe in,\nAnd I have sacrificed all that I believe in,\nI have sacrificed all that I've been given\nAnd I have sacrificed all that I believe in.\n\nHow am I supposed to breathe,\nWhen this war is raging on inside,\nHow are we supposed to live,\nNot knowing when we're gonna die.\n"
                },
                {
                    name: 'Valentines Day',
                    author: 'Linkin Park',
                    img: 'imgs/valentines.jpg',
                    audio: 'sngs/Linkin Park - Valentines Day.mp3',
                    duration: '3:17',
                    lyrics: "[Verse 1: Chester Bennington]\n\nMy insides all turned to ash, so slow\nAnd blew away as I collapsed, so cold\nA black wind took them away from sight\nAnd held the darkness over day, that night.\n\n[Pre-Chorus: Chester Bennington]\nAnd the clouds above move closer,\nLooking so dissatisfied,\nBut the heartless wind kept blowing, blowing.\n\n[Verse 2: Chester Bennington]\nI used to be my own protection, but not now,\n'Cause my path has lost direction, somehow,\nA black wind took you away from sight,\nAnd held the darkness over day, that night.\n\n[Pre-Chorus: Chester Bennington]\nAnd the clouds above move closer,\nLooking so dissatisfied,\nAnd the ground below grew colder,\nAs they put you down inside,\nBut the heartless wind kept blowing, blowing.\n\n[Bridge: Chester Bennington]\nSo now you're gone, and I was wrong,\nI never knew what it was like,\nTo be alone,\nYou might also like\n\n[Chorus: Chester Bennington]\nOn a Valentine's day, on a Valentine's day,\nOn a Valentine's day, on a Valentine's day,\nOn a Valentine's day, on a Valentine's day,\n(I used to be my own protection, but not now).\n\nOn a Valentine's day, on a Valentine's day,\n('Cause my mind has lost direction, somehow),\nOn a Valentine's day, on a Valentine's day,\n(I used to be my own protection, but not now)\nOn a Valentine's day, on a Valentine's day,\n('Cause my mind has lost direction, somehow).\n"
                },
                {
                    name: 'Crazy',
                    author: 'Aerosmith',
                    img: 'imgs/crazy.jpg',
                    audio: 'sngs/Aerosmith - Crazy.mp3',
                    duration: '6:15',
                    lyrics: "Come here, baby\nYou know you drive me up a wall\nThe way you make good on all the nasty tricks you pull\nSeems like we're makin' up more than we're makin' love\nAnd it always seems you got somn' on\nyour mind other than me\nGirl, you got to change your crazy ways\nYou hear me.\n\nSay you're leavin' on a seven thirty train\nAnd that you're headin' out to Hollywood,\nGirl, you been givin' me\nthat line so many times\nIt kinda gets like feelin' bad looks good.\n\nThat kinda lovin'\nTurns a man to a slave\nThat kinda lovin'\nSends a man right to his grave.\n\nI go crazy, crazy, baby, I go crazy\nYou turn it on\nThen you're gone\nYou drive me\nCrazy, crazy, crazy, for you baby.\n\nWhat can I do, honey\nI feel like the color blue.\n\nYou're packin' up your stuff and talkin' like it's tough\nAnd tryin' to tell me that it's time to go\nBut I know you ain't wearin' nothin' underneath that overcoat\nAnd it's all a show.\nThat kind of lovin'\nMakes me wanna pull\nDown the shade\nThat kind of lovin'\nNow I'm never gonna be the same.\n\nI go crazy, crazy, baby, I go crazy\nYou turn it on\nThen you're gone\nYou drive me\nCrazy, crazy, crazy, for you baby.\n\nWhat can I do, honey\nI feel like the color blue.\n\nI'm losin' my mind, girl\n'Cause I'm goin' crazy.\n\nI need your love, honey\nI need your love.\n\nCrazy, crazy, crazy, for you baby\nYou turn it on\nThen you're gone\nYou drive me\nCrazy, crazy, crazy, for you baby.\n\nI'm losin' my mind\nGirl cause I'm goin' crazy\n\nCrazy, crazy, crazy, for you baby\nI'm losin' my mind\nGirl cause I'm goin' crazy.\n\nCrazy, crazy, crazy, for you baby\nYou turn it on\nThen you're gone\nYou drive me.\n"
                },
                {
                    name: 'Meant To Be',
                    author: 'Arc North',
                    img: 'imgs/meant.jpg',
                    audio: 'sngs/Arc North - Meant To Be.mp3',
                    duration: '3:35',
                    lyrics: "[Verse 1: Krista Marina]\nI want you to show me\nHow to get to know\nSomeone like you, someone like you\nI want you to know me\n'Cause I know then you'll see\nWe can be true, we can be true.\n\nI want you to see what I see in us\nSomething so real, something so real\nI want you to see that this is a love\nThat we both feel, that we both feel.\n\n[Chorus: Krista Marina]\nAnd how will we ever know\nIf the love will ever grow\nWithout trying, without trying\nAnd how will we ever see\nIf we are meant to be\nIt's terrifying, it's terrifying.\n\n[Drop: Arc North & Krista Marina]\nThat we are meant to be\nWe are, we are\nThat we are meant to be\nThat we are meant to be\nWe are, we are\nThat we are meant to be\n\n[Verse 2: Krista Marina]\nWe've both been there before\nWhen love shuts the door\nIt's a losing game, it's a losing game\nBut this time it's more\nThan another love war\nThis ain't the same, this ain't the same\n\nThey say love heals all\nIt makes it all alright\nIn time, in time\nMy heart still feels the breaking\nBut you make my world so bright\nIt feels so right, it feels so right\n\n[Chorus: Krista Marina]\nAnd how will we ever feel\nThat what we got is real\nThere's no denying, there's no denying\nAnd how will we ever see\nIf we are meant to be\nIt's terrifying, it's terrifying\nAnd how till we ever know\nIf the love will ever grow\nWithout trying, without trying\nAnd how will we ever see\nIf we are meant to be\nIt's terrifying, it's terrifying\n\n[Drop: Arc North & Krista Marina]\nThat we are meant to be\nWe are, we are\nThat we are meant to be\nThat we are meant to be\nWe are, we are\nThat we are meant to be.\n"
                },
                {
                    name: 'Running In The Night',
                    author: 'FM 84',
                    img: 'imgs/fm84.jpg',
                    audio: 'sngs/FM84-Running In The Night(feat Ollie Wride).mp3',
                    duration: '4:31',
                    lyrics: "I used to be the one,\nI used to be your gateway dreamer,\nI couldn't get enough,\nThinking that we would last forever,\nDon't know what you're thinking of\nSlipping further out of reach,\nTo the edge of town we could go,\nAway from all all the world to see.\n\nYou were wild trying to set yourself free,\nI didn't see the signs right in front of me.\n\nOh, I'm running in the night so soon,\nI've got nothing left to lose,\nI'm leaving it all behind, running in the night with you,\nI won't let you get away again,\nWe can see it through to the end,\nBut whatever we do,\nI'm running in the night with you.\n\nI used to be the one,\nI used to be your place to land,\nUnder the shadows,\nInto the palm of my hand,\nYou're always changing the situation,\nJust when we found paradise,\nYou're always shutting down the conversation,\nI can never read your mind.\n\nOh, I'm running in the night so soon,\nI've got nothing left to lose,\nI'm leaving it all behind,\nrunning in the night with you,\nI won't let you get away again,\nWe can see it through to the end,\nBut whatever we do,\nI'm running in the night with you.\n\nAhh, Running with the night,\nAah, I'm running with the night.\n\nI used to be the one,\nI used to be your gateway dreamer,\nI couldn't get enough,\nThinking that we would last forever.\n\nOh, I'm running in the night so soon,\nI've got nothing left to lose,\nI'm leaving it all behind, running in the night with you,\nI won't let you get away again,\nWe can see it through to the end,\nBut whatever we do,\nI'm running in the night with you.\nI won't let you get away again,\nWe can see it through to the end,\nBut whatever we do,\nI'm running in the night with you."
                },
                {
                    name: 'Into The Night',
                    author: 'Nero',
                    img: 'imgs/nero.jpg',
                    audio: 'sngs/Nero-Into The Night.mp3',
                    duration: '4:48',
                    lyrics: "[Chorus 1: Daniel Stephens]\nBaby, let’s drive into the night,\nJust get up and go, leave our worlds behind,\nIt’s so easy if you just say that you might,\nJust get up and go, leave it all behind.\n\n[Chorus 2: Alana]\nBaby, I just wanna get it right,\nLet’s just take it slow, I hope that you don’t mind\nIt’s so easy if you wait another night,\nJust go with the flow, leave it all behind,\nJust go with the flow, leave it all behind,\nJust go with the flow, leave it all behind.\n\n[Chorus 1: Daniel Stephens],\nBaby, let’s drive into the night,\nJust get up and go, leave our worlds behind,\nIt’s so easy if you just say that you might,\nJust get up and go, leave it all behind.\n\n[Chorus 2: Alana]\nBaby, I just wanna get it right,\nLet’s just take it slow, I hope that you don’t mind,\nIt’s so easy if you wait another night,\nJust go with the flow, leave it all behind.\n\n[Chorus 1: Daniel Stephens]\nBaby, let’s drive into the night,\nJust get up and go, leave our worlds behind,\nIt’s so easy if you just say that you might,\nJust get up and go, leave it all behind.\n\n[Bridge: Daniel Stephens]\nSo baby, let’s just get away tonight,\nPack up all your bags, start another life,\nIf we leave right now,\nwe'll be there before it's light,\nDo you wanna go, leave it all behind?\n\n[Chorus 2: Alana]\nBaby, I just wanna get it right,\nLet’s just take it slow, I hope that you don’t mind,\nIt’s so easy if you wait another night,\nJust go with the flow, leave it all behind.\n\n[Chorus 2: Alana]\nBaby, I just wanna get it right,\nLet’s just take it slow, I hope that you don’t mind,\nIt’s so easy if you wait another night,\nJust go with the flow, leave it all behind,\nJust go with the flow, leave it all behind,\nJust go with the flow, leave it all behind.\n"
                },
                {
                    name: 'Safe and Sound',
                    author: 'Capital Cities',
                    img: 'imgs/capital.jpg',
                    audio: 'sngs/Capital Cities - Safe And Sound (Official Music Video).mp3',
                    duration: '3:46',
                    lyrics: "[Verse 1]\nI could lift you up,\nI could show you what you wanna see and take you where you wanna be\nYou could be my luck,\nEven if the sky is falling down, I know that we'll be safe and sound\n\n[Chorus]\nWe're safe and sound.\n\n[Verse 2]\nI could fill your cup,\nYou know my river won't evaporate this world we still appreciate,\nYou could be my luck,\nEven in a hurricane of frowns,\nI know that we'll be safe and sound.\n\n[Chorus]\n(Safe and sound)\nWe're safe and sound,\n(Safe and sound)\nWe're safe and sound,\n(Hold your ground)\nWe're safe and sound\n(Safe and sound).\n\n[Verse 3]\nI could show you love,\nIn a tidal wave of mystery, you'll still be standing next to me\nYou could be my luck\nEven if we're six feet underground,\nI know that we'll be safe and sound\n[Chorus]\nWe're safe and sound\n(Safe and sound)\n(Safe and sound)\n(Hold your ground)\n(Safe and sound).\n\n[Bridge]\nI could lift you up,\nI could show you what you wanna see and take you where you wanna be\nYou could be my luck\nEven if the sky is falling down, I know that we'll be safe and sound.\n\n[Verse 4]\nI could lift you up,I could show you what you wanna see and take you where you wanna be\nYou could be my luck,\nEven if the sky is falling down,\nI know that we'll be safe and sound.\n\n[Chorus]\nWe're safe and sound,\nWe're safe and sound,\nWe're safe and sound,\nWe're safe and sound,\n(Safe and sound)\nWe're safe and sound,\n(Safe and sound)\nWe're safe and sound,\n(Hold your ground)\nWe're safe and sound,\n(Safe and sound)\nWe're safe and sound.\n"
                },
                {
                    name: 'White Flag',
                    author: 'Delta Heavy',
                    img: 'imgs/whiteflag.jpg',
                    audio: 'sngs/Delta Heavy - White Flag.mp3',
                    duration: '3:14',
                    lyrics: "[Verse 1]\nOne night,\nOne more chance to say I'm sorry,\nAnd I can't believe a lie,\nSay you need me\nOne night,\nOne more chance to say I'm sorry,\nAnd I can't believe a lie,\nSay you need me,\nWave a white flag,\nI surrender, I surrender, I surrender,\nWave a white flag,\nI surrender, I surrender, I surrender,\nI surrender-\n\n[Chorus]\n[Verse 2]\nOne night,\nOne more chance to say I'm sorry\nAnd I can't believe a lie\nSay you need me\nOne night\nOne more chance to say I'm sorry\nAnd I can't believe a lie\nSay you need me\n\n[Verse 2]\nWave a white flag\nI surrender, I surrender, I surrender\nWave a white flag\nI surrender, I surrender, I surrender\nI surrender-\n\n[Chorus]\n[Outro]\nOne night\nOne more chance to say I'm sorry\nOne night\nOne more chance to say I'm sorry\nAnd I can't believe a lie\nSay you need me.\n"
                },
                {
                    name: 'Instant Crush',
                    author: 'Daft Punk',
                    img: 'imgs/instantcrush.jpg',
                    audio: 'sngs/Daft Punk - Instant Crush.mp3',
                    duration: '5:39',
                    lyrics: "[Verse 1]\nI didn't want to be the one to forget\nI thought of everything I'd never regret\nA little time with you is all that I get\nThat's all we need because it's all we can take\nOne thing I never see the same when you're 'round\nI don't believe in him, his lips on the ground\nI wanna take you to that place in the Roche\nBut no one gives us any time anymore\nHe asks me once if I'd look in on his dog\nYou made an offer for it, then you ran off\nI got this picture of us kids in my head\nAnd all I hear is the last thing that you said\n\n[Pre-Chorus]\nI listened to your problems, now listen to mine\nI didn't want to anymore, oh-oh-oh\n\n[Chorus]\nAnd we will never be alone again\n'Cause it doesn't happen every day\nKinda counted on you being a friend\nCan I give it up or give it away?\nNow I thought about what I wanna say\nBut I never really know where to go\nSo I chained myself to a friend\n'Cause I know it unlocks like a door\nAnd we will never be alone again\n'Cause it doesn't happen every day\nKinda counted on you being a friend\nCan I give it up or give it away?\nNow I thought about what I wanna say\nBut I never really know where to go\nSo I chained myself to a friend\nSome more again\n[Verse 2]\nIt didn't matter what they wanted to see\nHe thought he saw someone that looked just like me\nThe summer memory that just never dies\nWe worked too long and hard to give it no time\nHe sees right through me, it's so easy with lies\nCracks in the road that I would try and disguise\nHe runs his scissors at the seam in the wall\nHe cannot break it down or else he would fall\nOne thousand lonely stars hiding in the cold\nTake it, oh, I don't wanna sing anymore\n\n[Instrumental Break]\n\n[Pre-Chorus]\nI listened to your problems, now listen to mine\nI didn't want to anymore, oh-oh-oh\n\n[Chorus]\nAnd we will never be alone again\n'Cause it doesn't happen every day\nKinda counted on you being a friend\nCan I give it up or give it away?\nNow I thought about what I wanna say\nBut I never really know where to go\nSo I chained myself to a friend\n'Cause I know it unlocks like a door\nAnd we will never be alone again\n'Cause it doesn't happen every day\nKinda counted on you being a friend\nCan I give it up or give it away?\nNow I thought about what I wanna say\nBut I never really know where to go\nSo I chained myself to a friend\n'Cause I know it unlocks like a–\n\n[Bridge]\nI don't understand, don't get upset\nI'm not with you\nWe're swimming around,\n it's all I do When I'm with you.\n\n[Chorus]\nAnd we will never be alone again\n'Cause it doesn't happen every day\nKinda counted on you being a friend\nCan I give it up or give it away?\nNow I thought about what I wanna say\nBut I never really know where to go\nSo I chained myself to a friend\n'Cause I know it unlocks like a door\nAnd we will never be alone again\n'Cause it doesn't happen every day\nKinda counted on you being a friend\nCan I give it up or give it away?\nNow I thought about what I wanna say\nBut I never really know where to go\nSo I chained myself to a friend\n'Cause I know it unlocks like a door.\n"
                }
            ],
            pause: false});


        _defineProperty(this, "changeCurrentTime",
            e => {
                const duration = this.playerRef.duration;

                const playheadWidth = this.timelineRef.offsetWidth;
                const offsetWidht = this.timelineRef.offsetLeft;
                const userClickWidht = e.clientX - offsetWidht;

                const userClickWidhtInPercent = userClickWidht * 100 / playheadWidth;

                this.playheadRef.style.width = userClickWidhtInPercent + "%";
                this.playerRef.currentTime = duration * userClickWidhtInPercent / 100;
            });

        _defineProperty(this, "hoverTimeLine",

            e => {
                const duration = this.playerRef.duration;

                const playheadWidth = this.timelineRef.offsetWidth;

                const offsetWidht = this.timelineRef.offsetLeft;
                const userClickWidht = e.clientX - offsetWidht;
                const userClickWidhtInPercent = userClickWidht * 100 / playheadWidth;

                if (userClickWidhtInPercent <= 100) {
                    this.hoverPlayheadRef.style.width = userClickWidhtInPercent + "%";
                }

                const time = duration * userClickWidhtInPercent / 100;

                if (time >= 0 && time <= duration) {
                    this.hoverPlayheadRef.dataset.content = this.formatTime(time);
                }
            });

        _defineProperty(this, "resetTimeLine",

            () => {
                this.hoverPlayheadRef.style.width = 0;
            });

        _defineProperty(this, "timeUpdate",

            () => {
                const duration = this.playerRef.duration;
                const timelineWidth = this.timelineRef.offsetWidth - this.playheadRef.offsetWidth;
                const playPercent = 100 * (this.playerRef.currentTime / duration);
                this.playheadRef.style.width = playPercent + "%";
                const currentTime = this.formatTime(parseInt(this.playerRef.currentTime));
                this.setState({
                    currentTime
                });

            });

        _defineProperty(this, "formatTime",

            currentTime => {
                const minutes = Math.floor(currentTime / 60);
                let seconds = Math.floor(currentTime % 60);

                seconds = seconds >= 10 ? seconds : "0" + seconds % 60;

                const formatTime = minutes + ":" + seconds;

                return formatTime;
            });

        _defineProperty(this, "updatePlayer",

            () => {
                const {
                    musicList,
                    index
                } = this.state;
                const currentSong = musicList[index];
                const audio = new Audio(currentSong.audio);
                this.playerRef.load();
            });

        _defineProperty(this, "nextSong",

            () => {
                const {
                    musicList,
                    index,
                    pause
                } = this.state;

                this.setState({
                    index: (index + 1) % musicList.length
                });

                this.updatePlayer();
                if (pause) {
                    this.playerRef.play();
                }
            });

        _defineProperty(this, "prevSong",

            () => {
                const {
                    musicList,
                    index,
                    pause
                } = this.state;

                this.setState({
                    index: (index + musicList.length - 1) % musicList.length
                });

                this.updatePlayer();
                if (pause) {
                    this.playerRef.play();
                }
            });

        _defineProperty(this, "playOrPause",
            () => {
                const {
                    musicList,
                    index,
                    pause
                } = this.state;
                const currentSong = musicList[index];
                const audio = new Audio(currentSong.audio);
                if (!this.state.pause) {
                    this.playerRef.play();
                } else {
                    this.playerRef.pause();
                }
                this.setState({
                    pause: !pause
                });
            });

            _defineProperty(this, "mute",
            () => {
                const {
                    musicList,
                    index,
                    mute
                } = this.state;
                const currentSong = musicList[index];
                const audio = new Audio(currentSong.audio);
                if (!this.state.mute) {
                    this.playerRef.muted = true;
                } else {
                    this.playerRef.muted = false;
                }
                this.setState({
                    mute: !mute
                });
            });

        _defineProperty(this, "setVolume",
            (value) => {
                const {
                    musicList,
                    index,
                    mute
                } = this.state;
                if(value < 0 || value > 100) return; // Return if value is out of range (0-1)
                this.playerRef.volume = value;
                this.setState({
                    volume: value
                });
            });
        
        _defineProperty(this, "minusVolume",
            () => {
                const {
                    musicList,
                    index,
                    mute
                } = this.state;
                let volume = this.playerRef.volume;
                volume -= 0.1;
                if(volume < 0) volume = 0;
                this.setVolume(volume);
            });
        
        _defineProperty(this, "plusVolume",
            () => {
                const {
                    musicList,
                    index,
                    mute
                } = this.state;
                let volume = this.playerRef.volume;
                volume += 0.1;
                if(volume > 1) volume = 1;
                this.setVolume(volume);
            });

        _defineProperty(this, "clickAudio",

            key => {
                const {
                    pause
                } = this.state;

                this.setState({
                    index: key
                });

                this.updatePlayer();
                if (pause) {
                    this.playerRef.play();
                }
            });
    }

    componentDidMount() {
        this.playerRef.addEventListener("timeupdate", this.timeUpdate, false);
        this.playerRef.addEventListener("ended", this.nextSong, false);
        this.timelineRef.addEventListener("click", this.changeCurrentTime, false);
        this.timelineRef.addEventListener("mousemove", this.hoverTimeLine, false);
        this.timelineRef.addEventListener("mouseout", this.resetTimeLine, false);
    }
    componentWillUnmount() {
        this.playerRef.removeEventListener("timeupdate", this.timeUpdate);
        this.playerRef.removeEventListener("ended", this.nextSong);
        this.timelineRef.removeEventListener("click", this.changeCurrentTime);
        this.timelineRef.removeEventListener("mousemove", this.hoverTimeLine);
        this.timelineRef.removeEventListener("mouseout", this.resetTimeLine);
    }


    render() {
        const {
            musicList,
            index,
            currentTime,
            pause
        } = this.state;

        const currentSong = musicList[index];
        //Agregar letra
        return (
            React.createElement("div", {className: "card"},React.createElement("div", {className: "current-song"},React.createElement("audio", {ref: ref => this.playerRef = ref},React.createElement("source", {src: currentSong.audio,type: "audio/ogg"}), "Your browser does not support the audio element."),
                    React.createElement("div", {className: "img-wrap"},React.createElement("img", {src: currentSong.img})),

                    React.createElement("span", {className: "song-name"}, currentSong.name),
                    React.createElement("span", {className: "song-autor"}, currentSong.author),

                    React.createElement("div", {className: "time"}, React.createElement("div", {className: "current-time"}, currentTime),
                        React.createElement("div", {className: "end-time"}, currentSong.duration)),

                    React.createElement("div", {ref: ref => this.timelineRef = ref,id: "timeline"},React.createElement("div", {ref: ref => this.playheadRef = ref,id: "playhead"}),
                        React.createElement("div", {
                            ref: ref => this.hoverPlayheadRef = ref,
                            class: "hover-playhead",
                            "data-content": "0:00"
                        })),

                    React.createElement("div", {
                            className: "controls"
                        },
                        React.createElement("button", {
                            onClick: this.prevSong,
                            className: "prev prev-next current-btn"
                        }, React.createElement("i", {
                            className: "fas fa-backward"
                        })),

                        React.createElement("button", {
                                onClick: this.playOrPause,
                                className: "play current-btn"
                            },

                            !pause ? React.createElement("i", {
                                className: "fas fa-play"
                            }) :
                            React.createElement("i", {
                                class: "fas fa-pause"
                            })),

                        React.createElement("button", {
                            onClick: this.nextSong,
                            className: "next prev-next current-btn"
                        }, React.createElement("i", {
                            className: "fas fa-forward"
                        })), 
                        
                        React.createElement("br"),//Section

                        React.createElement("button", {
                            onClick: this.minusVolume,
                            className: "minus"
                        }, React.createElement("i", {
                            className: "fas fa-minus"
                        })),
                        
                        React.createElement("button", {
                            onClick: this.mute,
                            className: "mute-btn"
                        },
                            !pause ? React.createElement("i", {
                                className: "fas fa-volume-mute"
                            }) :
                            React.createElement("i", 
                            { className: `fas ${this.playerRef.muted ? "fa-volume-mute" : "fa-volume-up"}`
                        })),

                        React.createElement("button", {
                            onClick: this.plusVolume,
                            className: "plus"
                        }, React.createElement("i", {
                            className: "fa fa-plus"
                        })),
                        )),

                React.createElement("div", {
                        className: "play-list"
                    },
                    musicList.map((music, key = 0) =>
                        React.createElement("div", {
                                key: key,
                                onClick: () => this.clickAudio(key),
                                className: "track " + (
                                    index === key && !pause ? 'current-audio' : '') + (
                                    index === key && pause ? 'play-now' : '')
                            },

                            React.createElement("img", {
                                className: "track-img",
                                src: music.img
                            }),
                            React.createElement("div", {
                                    className: "track-discr"
                                },
                                React.createElement("span", {
                                    className: "track-name"
                                }, music.name),
                                React.createElement("span", {
                                    className: "track-author"
                                }, music.author)),

                            React.createElement("span", {
                                    className: "track-duration"
                                },
                                index === key ?
                                currentTime :
                                music.duration)))),

                React.createElement("div", {className: "lyrics"}, 
                        React.createElement("textarea", {
                        className: "lyrics-text",
                        readonly: true,
                        value: currentSong.lyrics,
                        spellcheck: false,
                        disabled: true,
                        rows: currentSong.lyrics.split("\n").length,
                        style: {resize:"none"}}))
            ));
    }
}

ReactDOM.render(React.createElement(CardProfile, null), document.getElementById('root'));