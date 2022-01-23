const quotes = [
    {
        quote: "우리가 한 발을 다른 발 앞으로 내딛는 것을 멈추지만 않는다면, 우리가 계속 앞으로 나아가기만 한다면, 결국에는 목적지에 닿을 것이다.",
        author: "할 엘로드",
    },
    {
        quote: "당신을 시작하게 하는 것은 의욕이다. 그리고 의욕을 지속시키는 것은 습관이다.",
        author: "짐 론",
    },
    {
        quote: "참으로 중요한 일에 종사하고 있는 사람은 그 생활이 단순하다. 그들은 쓸데없는 일에 마음을 쓸 겨를이 없기 때문이다.",
        author: "톨스토이",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;