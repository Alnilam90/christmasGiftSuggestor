function suggestGift() {

    alert("For whom is the gift? Type in the corresponding number please.");
    var value = prompt("1 - Mother\n2 - Father\n3 - Sister\n4 - Brother\n5 - Girlfriend\n6 - Boyfriend");
    
    switch(value){
       case "1":
           alert("Do NOT buy your mom flowers. Buy her favorite chocolate, compliment her on the Christmas dinner, and then ask her if you can have the car keys back because you have been an outstandingly well-behaved child in the last two days after your DUI.");
           break;
       case "2":
           alert("Your father does not need more tools. Stop checking his toolbox. Instead, buy him his favorite when-mom-is-not-looking magazine and give it to him when mom is not looking. Then thank him for being there and having done such a great job at raising you. Even if he hasn't. Just do it.'");
           break;
       case "3":
           alert("If your sister is younger than you, pet her on the head, kiss her cheek, and give her the latest Justin Bieber album you acquired entirely legally. If she is older than you, do the same thing. Only, instead of the album, give her a backstage ticket and a box of tissues for the concert.");
           break;
       case "4":
           alert("If your brother is younger than you, threaten him with telling your parents about the embarrassing thing you caught him doing, and then make him give you half of the money he gets for Christmas. If he is older than you, take a self-defense class before the holidays and get ready to defend your pride.");
           break;
       case "5":
           alert("Your girlfriend really deserves a foot and back rub. Tell her you love her and you'll actually stop sitting around all day playing video games after the holidays. ");
           break;
       case "6":
           alert("Buy him GTA V and enjoy many, many hours of free time you can spend on whatever makes you happy.");
           break;
       default:
           alert("This number does not correspond to anything.");
    }
    
    alert("Thanks for participating in this little experiment on the human psyche. I hope you found what you were looking for. This suggestor will self-destruct in 5 seconds. If you can make if out alive, happy hanukhah, merry Christmas, and a jolly nondescript holiday!")
    }