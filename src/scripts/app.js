const app = {}

app.clickEvents = () => {
    $('.doc:not(.first)').hide()
    $('.doctors').on('click', function(e){
        e.preventDefault();
        if( e.target.nodeName === 'A') {
            $('.show').show();
            const chosenDoc = e.target.id;
            console.log(e.target.id);
            $('.doc').hide()
            $(chosenDoc).toggle()
        } 
        
    })
}

app.init = function() {
    app.clickEvents();
    
    
}
$(function(){
    app.init();
})