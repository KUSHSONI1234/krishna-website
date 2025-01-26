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
            text.textContent = "Video Editor"
            
        },12000)
    
    setTimeout(()=>
        {
            text.textContent = "Brand Builder"
            
        },16000)
}
textLoad()
setInterval(textLoad,16000)
