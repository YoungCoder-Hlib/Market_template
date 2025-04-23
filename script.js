let objh = document.querySelector("#objholder");
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
        for(let i=0; i<Itemy.length; i++){
         let keyda = document.createElement("div");
        }
        return data;
    }
    catch (error){
        console.error("Ну от знову напарнтачив!:", error);
    } finally {
        console.log("Молодець, не продовбався");
    }
}
getObj('json/addplate.json');
