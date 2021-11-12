const counters=document.querySelectorAll('.counter');

counters.forEach((counter)=>{

    const target=+counter.getAttribute('data-target');
    const increment=target/100;

    const updateCounter=()=>{

        const startingPoint=(Number)(counter.innerHTML);

        if(startingPoint<target)
        {
            counter.innerHTML=`${Math.round(startingPoint + increment)}`
            setTimeout(updateCounter,10);
        }
        else{
            counter.innerHTML=target;
        }
    }
    
    
    updateCounter();
})