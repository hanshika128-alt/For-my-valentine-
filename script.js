// script.js

// ---------- PAGE 1: No button shake ----------
if (document.getElementById('noBtn')) {
    const noBtn = document.getElementById('noBtn');
    const noMessage = document.getElementById('noMessage');
    noBtn.addEventListener('click', function(e) {
        e.preventDefault();
        noMessage.classList.remove('hidden');
        noMessage.classList.add('shake');
        setTimeout(() => noMessage.classList.remove('shake'), 600);
    });
}

// ---------- PAGE 3: Populate 70+ reasons (exact text) ----------
if (document.getElementById('reasonsList')) {
    const reasons = [
        "I love the way you say my name.",
        "I love the way you remember small details I told you weeks ago.",
        "I love the way you have a bed voice when you first wake up.",
        "I love the way I feel when I see your name pop up on my lock screen.",
        "I love the way we have our 'good morning' and 'goodnight' rituals.",
        "I love the way you make the distance feel small.",
        "I love the way you show resilience and how you handle tough days.",
        "I love the way you show honesty, even when it’s hard.",
        "I love the way you can make me smile even when I’m crying.",
        "I love the way I feel completely safe when I’m talking to you.",
        "I love the way you make me feel like I’m the most beautiful girl in the world.",
        "I love the way I can tell you anything without fear of judgment.",
        "I love the way you are the first person I want to tell when something good happens.",
        "I love the way you’re also the first person I want to talk to when something goes wrong.",
        "I love the way you make me feel home, even though we haven't shared a roof yet.",
        "I love the way you believe in me more than I believe in myself.",
        "I love the way you make the future look exciting instead of scary.",
        "I love the way you make me feel chosen, every single day.",
        "I love the way you’re the only person who can calm me down in minutes.",
        "I love the way you’re the only person I never get tired of talking to.",
        "I love the way we plan our future.",
        "I love the way I know that you’re the last thing on my mind before I sleep.",
        "I love the way you’ve become a part of my daily routine that I can't imagine losing.",
        "I love the way you talk about 'us' in the long term.",
        "I love the way you always take my side, even when I'm being a bit dramatic.",
        "I love the way you celebrate my small wins like they’re huge victories.",
        "I love the way you have patience when I’m being stubborn.",
        "I love the way you listen to me vent about the same thing five times.",
        "I love the way you always know exactly what to say to make me feel better.",
        "I love the way you make me feel like a priority, never an option.",
        "I love the way you always notice when my energy is off through just a text.",
        "I love the way you show your vulnerability and the way you trust me with your secrets.",
        "I love the way you make me feel like I’m enough, exactly as I am.",
        "I love the way you are selfless and how much you care for your family.",
        "I love the way you handle stress with such grace.",
        "I love the way you chose me out of billions of people on the internet.",
        "I love the way you say 'I love you' like you truly mean it.",
        "I love the way you’ve seen the real me and stayed.",
        "I love the way every day with you is better than the one before.",
        "I love the way you always ask 'how was your day?' and actually want to hear the long version.",
        "I love the way your reaction time to my texts is faster than anyone else’s.",
        "I love the way you make me feel like I’m actually sitting next to you.",
        "I love the way your voice is the most comforting sound in the world to me.",
        "I love the way you give me the best advice.",
        "I love the way you’re the person who knows my silence just as well as my words.",
        "I love the way you encourage me to take care of myself.",
        "I love the way you handle my overthinking with so much grace.",
        "I love the way you never make me feel like I'm too much or too difficult.",
        "I love the way you always make me feel safe, even from thousands of miles away.",
        "I love the way we talk about our first real life hug.",
        "I love the way I think about waking up to your real face instead of a screen.",
        "I love the way you make me believe in forever.",
        "I love the way you make me feel like I’m winning at life just by having you.",
        "I love the way you’ve made me a better version of myself.",
        "I love the way I think about the height difference and how perfectly I’ll fit against you.",
        "I love the way you never make me feel guilty for being busy.",
        "I love the way you are the only person who can make me blush from 1,000 miles away.",
        "I love the way you always let me win.",
        "I love the way you make me feel like I’m your favorite person to talk to.",
        "I love the way you tell me 'I’m proud of you' for the smallest accomplishments.",
        "I love the way you get soft only with me.",
        "I love the way you never let a day go by without making me smile.",
        "I love the way you’ve taught me that real love doesn't have to be physical to be felt.",
        "I love the way you’ve become the person I trust more than anyone else.",
        "I love the way it feels to know that you are mine.",
        "I love the way you make me feel like I’m the smartest, funniest person you know.",
        "I love the way you say 'I'm here.'",
        "I love the way you treat me with so much gentleness and care.",
        "I love the way you are my everything.",
        "I love the way you are you, and I wouldn't change a single thing."
    ];
    
    const listContainer = document.getElementById('reasonsList');
    reasons.forEach(reason => {
        const item = document.createElement('div');
        item.className = 'reason-item';
        item.textContent = reason;
        listContainer.appendChild(item);
    });
}

// ---------- PAGE 5: Voice note with pulse heart & arrow reveal ----------
if (document.getElementById('playPauseBtn')) {
    const playBtn = document.getElementById('playPauseBtn');
    const audio = document.getElementById('voiceNote');
    const pulseHeart = document.getElementById('pulseHeart');
    const finalArrow = document.getElementById('finalArrow');
    const playStatus = document.getElementById('playStatus');
    
    // Ensure arrow starts hidden
    if (finalArrow) finalArrow.classList.add('hidden');
    
    playBtn.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
            playBtn.textContent = '⏸';
            pulseHeart.classList.remove('hidden');
            playStatus.textContent = 'Playing... ❤️';
        } else {
            audio.pause();
            playBtn.textContent = '▶';
            pulseHeart.classList.add('hidden');
            playStatus.textContent = 'Paused';
        }
    });
    
    audio.addEventListener('ended', function() {
        playBtn.textContent = '▶';
        pulseHeart.classList.add('hidden');
        playStatus.textContent = 'Finished ❤️';
        // Show arrow when voice note ends
        if (finalArrow) finalArrow.classList.remove('hidden');
    });
    
    // Also reveal arrow if user plays fully (already covered) 
    // but also if they pause after finishing? Only show on ended.
}
