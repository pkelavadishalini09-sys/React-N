const heading=React.createElement("div",{id:"parent"},
     [React.createElement("div",{id:"child"},
      [React.createElement("h2",{},"HI Iam Shalini"),React.createElement("h3",{},"Hello Iam ___")])
      ,React.createElement("div",{id:"child2"},[React.createElement("h2",{},"How are you?"),React.createElement("h3",{},"I am fine")]
     )]);

const root2=ReactDOM.createRoot(document.getElementById("root"));
root2.render(heading);