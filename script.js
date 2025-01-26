const text = document.querySelector(".sec-text");
const textLoad = ()=>
{
    setTimeout(()=>
    {
        text.textContent = "Cinematographer"
        
    },0)
    setTimeout(()=>
    {
        text.textContent = "Content Creator"
        
    },4000)
    setTimeout(()=>
    {
        text.textContent = "Freelancer"
        
    },8000)
    
    setTimeout(()=>
        {
            text.textContent = "Brand Builder"
            
        },12000)
}
textLoad()
setInterval(textLoad,16000)
