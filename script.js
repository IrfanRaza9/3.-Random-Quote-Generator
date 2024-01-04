function generate(){
   var quotes ={
    "- Theodore Roosevelt":'"Believe you can and youre halfway there."',
    "- Winston Churchill":'"Success is not final, failure is not fatal: it is the courage to continue that counts."',
    "- Ronald Reagan":'"We cant help everyone, but everyone can help someone."',
    "- Martin Luther King Jr.":'"I have a dream that one day this nation will rise up and live out the true meaning of its creed: We hold these truths to be self-evident, that all men are created equal."',
    "- Socrates":'"The only true wisdom is in knowing you know nothing."',
    "- Charles Darwin":'"It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change."'

   } 

   var authors = Object.keys(quotes);

   var author=authors[Math.floor(Math.random()*authors.length)];

   var quote =quotes[author];

   document.getElementById("quote").innerHTML=quote;
   document.getElementById("author").innerHTML=author;
}