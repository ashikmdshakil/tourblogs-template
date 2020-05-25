
            $(document).ready(function(){
                var sidebox = $('#sidebox');
            var floatingDivPosition = sidebox.position();

            $(window).scroll(function(){
                var scrollBarPosition = $(window).scrollTop();

                if(scrollBarPosition >= floatingDivPosition.top){
                    $("#sidebox").css({
                        'position' : 'fixed',
                        'top' : '0px',
                        'margin-top' : '10px'
                    })
                }
                else {
                    $("#sidebox").css({
                        'position' : 'relative',
                        'top' : '0px'                     
                        
                    })
                }   
            });
            });