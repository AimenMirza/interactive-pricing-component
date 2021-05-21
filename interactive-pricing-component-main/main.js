let mycheckBox = document.querySelector(".switch input"),

 duration = document.querySelector(".month"),
 price = document.querySelector(".price .price-fix"),
 switchh = document.querySelector(".switch"),
 range = document.querySelector(".total-range");


switchh.onclick = ()=>{
    if(mycheckBox.checked == true)
    {
        let priceInt = parseInt(price.textContent);
        price.textContent = `${priceInt - (priceInt * .25) * 12}`;

        duration.textContent = `/year`;
    }
    else
    {
        updatePrice();
        duration.textContent = `/month`

    }
}
let pageViews = document.querySelector(".page-views span");

range.addEventListener("input",updatePrice);


function updatePrice(){
    if(range.value==1){
        if(mycheckBox.checked==true){
            price.textContent=`${(8-(8*.25))*12}`;
        }
        else{
            price.textContent = 8;
        }
        pageViews.textContent = "10K";
    }
    if(range.value ==2){
        if(mycheckBox.checked==true){
            price.textContent=108;
        }
        else{
            price.textContent = 12;
        }
        pageViews.textContent = "50K";
    }
    if(range.value ==3){
        if(mycheckBox.checked==true){
            price.textContent=144;
        }
        else{
            price.textContent = 16;
        }
        pageViews.textContent = "100K";
    }
    if(range.value ==4){
        if(mycheckBox.checked==true){
            price.textContent=216;
        }
        else{
            price.textContent = 24;
        }
        pageViews.textContent = "500K";
    }
    if(range.value ==5){
        if(mycheckBox.checked==true){
            price.textContent=324;
        }
        else{
            price.textContent = 36;
        }
        pageViews.textContent = "1M";
    }

}