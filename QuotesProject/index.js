let realData ="";
        let quotesData="";
        quotes=document.getElementById("quotes");
        author=document.getElementById("author");
        nquotes=document.getElementById("nquotes");
        tweet=document.getElementById("tweetme");
        
        const tweetNow= () => {
            let tweetPost=`https://twitter.com/intent/tweet?text=${quotesData.text}`;
            window.open(tweetPost);
        }
        const getNewQuotes = () =>{
            let rnum=Math.floor(Math.random()*1000);
            quotesData=realData[rnum];
            quotes.innerText= `${quotesData.text}`;
            quotesData.author===null 
            ?(author.innerText=  ` -- Unknown`)
            :(author.innerText=` -- ${quotesData.author}`);
        };
        const getQuotes = async() =>
        {
            const api ="https://type.fit/api/quotes";
            try {
                let data = await fetch(api);
                realData =await data.json();
                // console.log(realData[0].text);
                // console.log(realData[0].author);
                getNewQuotes();
            } catch (error) {
                
            }
        };
        nquotes.addEventListener("click",getNewQuotes);
        tweetme.addEventListener("click",tweetNow);
        getQuotes();
