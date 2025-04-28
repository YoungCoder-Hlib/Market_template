let objh = document.querySelector("#objholder");
let Adder = document.querySelector("#AddObjButton");
let AfterAdder = document.querySelector("#Add");
let contenty = document.querySelector("#contenty");
let panel = document.querySelector("#panel");
//console.log(arrayOfVitaminObjects);
let Itemy = [];
async function getObj(item) {
    try{
        const response = await fetch(item);
        if(!response.ok){
            throw new Error('Братику все фігня, перероблюй:', response.status);
        }
        const data = await response.json();
        data.Items.forEach(item => {
            Itemy.push(item);
        });
        Itemy.forEach((obj) => {
         let keyda = document.createElement("div");
         keyda.classList.add("obj")
         keyda.innerHTML = `
                <div class="item-title">${obj.title}</div>
                <div class="item-image">
                <img src="${obj.image}">
                </div>
                <div class="parts-pay">
                <div><img src="img/mona.png" alt="PLATY">${obj.monopay}</div>
                <div><img src="img/Privat.png" alt="MENI PLATY">${obj.privatpay}</div>
                </div>
                <div class="price">
                <div><span>${obj.pricewithoutdisc} </span><sup>грн</sup></div>
                <div><span>${obj.pricewithdisc} </span><sup>грн</sup></div>
                </div>
                <div class="price-bonus">
                <div>Ціна за купоном</div>
                <div><span>${obj.pricewithcoup} </span><sup>грн</sup></div>
                </div>
            `;
            document.getElementById('objholder').appendChild(keyda);
        });
        return data;
    }
    catch (error){
        console.error("Ну от знову напарнтачив!:", error);
    } finally {
        console.log("Молодець, не продовбався");
    }
}
getObj('json/addplate.json');

Adder.addEventListener("click", function(){
    contenty.style.display = "none";
    panel.style.display = "block";
});
AfterAdder.addEventListener("click", function(){
    contenty.style.display = "block";
    panel.style.display = "none";
});