let paragraph = ["Bonbon croissant brownie pie. Lollipop halvah apple pie liquorice sweet cotton candy sugar plum liquorice. Halvah toffee cookie dessert sugar plum gummies dessert. Chocolate bar sesame snaps halvah topping.","Bear claw gingerbread oat cake marzipan cake ice cream biscuit sweet roll ice cream. Sweet muffin dragée lollipop tart tootsie roll lollipop macaroon. Sweet fruitcake fruitcake toffee.","Gummi bears marshmallow apple pie apple pie. Candy chocolate cake tart cake lemon drops bear claw cookie cotton candy danish. Candy cotton candy croissant gummi bears.","Dessert macaroon marzipan candy jelly marshmallow marzipan marzipan muffin. Danish danish brownie brownie muffin cheesecake pie lemon drops. Donut croissant halvah croissant tiramisu fruitcake marshmallow.","Biscuit bear claw marzipan. Cheesecake oat cake lollipop marshmallow carrot cake caramels cheesecake dessert. Caramels apple pie cookie gummies lollipop cupcake donut. Sugar plum bear claw donut sweet roll pudding fruitcake marshmallow liquorice marshmallow.","Pie chocolate jelly jujubes pastry marzipan caramels sweet. Muffin tart jujubes chocolate danish biscuit. Cake fruitcake danish bear claw wafer biscuit. Gummi bears jelly-o tart.","Powder tootsie roll brownie jelly-o chocolate. Chocolate bar cake candy canes. Wafer lollipop cotton candy dessert sweet roll cotton candy. Cupcake cake jelly-o cheesecake chocolate jelly-o jelly beans cotton candy sweet.","Dessert jelly beans topping sesame snaps tootsie roll cotton candy fruitcake. Caramels fruitcake marshmallow dragée muffin gingerbread bonbon. Sweet roll topping carrot cake pastry.","Candy canes gingerbread cotton candy jelly-o marshmallow cheesecake tart. Cupcake dragée bear claw pudding. Ice cream jelly candy canes icing sesame snaps pastry powder icing gummies.","Cupcake sweet toffee chocolate bar halvah halvah candy canes donut gummies. Powder wafer muffin candy tiramisu macaroon liquorice. Pastry muffin lemon drops ice cream apple pie lollipop jujubes. Oat cake toffee fruitcake chocolate cake toffee marzipan chocolate cake."];

//Targeting all Elements
let TextCount = document.getElementById("TextCount");
let generateButton = document.getElementById("generate");
let copyButton = document.getElementById("copy");
let generatedText = document.getElementById("generatedText");

// Gererate Button Click Event
generateButton.addEventListener("click",generateText);

//For generateing Text
function generateText(){
    var inputValue = Number.parseInt(TextCount.value);
    if(isNaN(inputValue) || inputValue == "" || inputValue <= 0 || inputValue == false || inputValue > 1000){
    var arryIndex = Math.floor(Math.random()* paragraph.length);
    generatedText.innerHTML = `<p id="firstP">${paragraph[arryIndex]}<button class="smallBtn" contenteditable="false" data-clipboard-target="#firstP">Copy</button></p>`;
    }else{
        for (let index = 0; index < inputValue; index++) {
            var arryIndex = Math.floor(Math.random()* paragraph.length);
            generatedText.innerHTML +=  `<p id="P${index}">${paragraph[arryIndex]}<button class="smallBtn" contenteditable="false" data-clipboard-target="#P${index}">Copy</button></p>`;
        } 
    }
};
        




