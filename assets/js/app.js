
function FullCardInfo(){

    let card = numberInput.value;

    let cardNumber = card;

    let test = false;

    let result;

    card = [...card]
            .reverse()
            .map((item) => +item);

    let sum = 0;

    for(let i = 0; i < card.length; i++){
        if(i % 2 == 0){
            sum = sum + card[i];
        }else {
            let n = card[i] * 2;
            sum = sum + (n > 9 ? n - 9 : n);
        }
    }

    if((sum % 10) == 0){

        test = true;

        AnswerInput.innerHTML = `YES`;

    }else{

        test = false;

        AnswerInput.innerHTML = `NO`;

    }

    if(test == true){

        if (/^5[1-5]/.test(cardNumber)) {

            result = 'MasterCard';

          } else if (/^4/.test(cardNumber)) {

            result = 'Visa';

          } else if ( /^(5018|5020|5038|6304|6759|676[1-3])/.test(cardNumber)) {

            result = 'Maestro';
        
          } else {
            
            result = 'Unknown';
            
          }

          TypeCard.innerHTML = `${result}`;

    }else{

        TypeCard.innerHTML = `Not found`;

    }

}