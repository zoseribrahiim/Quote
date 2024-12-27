var quote = [
    {
      text: "“Be yourself; everyone else is already taken”",
      outher: "-- Oscar Wilde --",
    },
    {
      text: "“Live as if you were to die tomorrow. Learn as if you were to live forever”",
      outher: "-- Mahatma Gandhi --",
    },
    {
      text: "“Without music, life would be a mistake.”",
      outher: "-- Friedrich Nietzsche --",
    },
    {
      text: "“I am so clever that sometimes I don`t understand a single word of what I am saying”",
      outher: "-- Oscar Wilde --",
    },
    {
      text: "“It is better to be hated for what you are than to be loved for what you are not.”",
      outher: "-- Andre Gide --",
    },
    {
      text: "“Live as if you were to die tomorrow. Learn as if you were to live forever”",
      outher: "-- Mahatma Gandhi --",
    },
    {
      text: "“so clever that sometimes I don`t understand a single word of what I am saying”",
      outher: "-- Oscar Wilde --",
    },
  ];
  
  
  var lastRandom = -1;
  
  function display() {
    var math = Math.floor(Math.random() * quote.length);
    if (math == lastRandom) {
      math = (math + 1) % quote.length;
    }
    lastRandom = math;
  
    document.getElementById("text").innerHTML = quote[math].text;
    document.getElementById("auther").innerHTML = quote[math].outher;
  
    console.log(math);
  }