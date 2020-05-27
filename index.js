
            $(document).ready(function(){

                $('.login').focusin(function(){
                    $(this).children('input').css({
                        'outline' : 0,
                        'border-bottom-color' : 'firebrick'
                    });
                })

                $('.item > a').hover(function(){
                    $(this).css({
                        'font-size' : '24px',
                        'font-weight' : 800
                })},
                    function(){
                        $(this).css({
                            'font-size' : '22px',
                            'font-weight' : 700
                        })
                        },
                )


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
                        'top' : '55px'                          
                    })
                }   
            });

            $('#login').click(function(){
                $('#loginform').fadeToggle();
            })

            });
        