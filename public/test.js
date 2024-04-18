function callSomething() {
    console.log('test js works');
    // var buttons = document.getElementsByClassName('identificationNum');
    // console.log('what is button: '. document.getElementsByClassName('identificationNum'))
    // buttons.style.color = 'blue';
    if (document.getElementById('showOfferColumnStyle')) document.getElementById('showOfferColumnStyle').remove();
    var showOfferColumnStyle = document.createElement('style')
    showOfferColumnStyle.setAttribute('type', 'text/css')
    showOfferColumnStyle.setAttribute('id', 'showOfferColumnStyle')
    showOfferColumnStyle.innerHTML = `
      @media (max-width: 767px) {
        .identificationNum {
            color: blue
        }

    }`;

    // document.head.appendChild(showOfferColumnStyle)
    console.log('can I get the classname: ', document.getElementsByClassName('identificationNum')[0])
    document.getElementsByClassName('identificationNum')[0].style.color = 'purple'
};
// setTimeout(callSomething, 5000);
callSomething()