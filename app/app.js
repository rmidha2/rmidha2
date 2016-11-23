    function clearContact(){
        $('#inputName').val('')
        $('#inputEmail').val('')
        $('#inputComment').val('')
    }

    // Closes the sidebar menu
    $("#menu-close").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });
    // Opens the sidebar menu
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });
    // Scrolls to the selected menu item on the page
    $(function() {
        $('a[href*=#]:not([href=#],[data-toggle],[data-target],[data-slide])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });
    //#to-top button appears after scrolling
    var fixed = false;
    $(document).scroll(function() {
        if ($(this).scrollTop() > 250) {
            if (!fixed) {
                fixed = true;
                // $('#to-top').css({position:'fixed', display:'block'});
                $('#to-top').show("slow", function() {
                    $('#to-top').css({
                        position: 'fixed',
                        display: 'block'
                    });
                });
            }
        } else {
            if (fixed) {
                fixed = false;
                $('#to-top').hide("slow", function() {
                    $('#to-top').css({
                        display: 'none'
                    });
                });
            }
        }
    });
    // Show more skills
    $('#open-skillset').click(function(){
        $('#open-holder').hide()
        $('#close-holder').show()

        var target = $(this.getAttribute('href'))

        if (target.length) {
            $('body').stop().animate({
                scrollTop: target.offset().top
            }, 1000)
        }
        setTimeout(function(){
            $('#expanded-skills').slideDown()
        },400)
        $('.two-year-bar').show()
        $('.year-bar').show()
        $('.half-year-bar').show()
        $('.two-year-bar').animate({
            width: '83.3%'
        },1000)
        $('.year-bar').animate({
            width: '42%'
        },1000)
        $('.half-year-bar').animate({
            width: '21%'
        },1000)


    })
    // Close more skills
    $('#close-skillset').click(function(){
        $('#close-holder').hide()
        $('#open-holder').show()

        $('.two-year-bar').animate({
            width: '0'
        },1000)
        $('.year-bar').animate({
            width: '0'
        },1000)
        $('.half-year-bar').animate({
            width: '0'
        },1000)

        setTimeout(function(){
            $('#expanded-skills').slideUp()
        },400)

        var target = $(this.getAttribute('href'))

        if (target.length) {
            $('body').stop().animate({
                scrollTop: target.offset().top
            }, 1000)
        }
    })
    // Show courses
    $('#second-year-tab').click(function(){
        hideShow('first','second')
    })
    $('#first-year-tab').click(function(){
        hideShow('second','first')
    })

    function hideShow(hide,show) {
        if (hide == 'first' && show == 'second') {
            $('.first-year-courses').hide()
            for (var i = 1; i < 10; i++) {
                $('#f'+i).hide()
            }
            $('#f-tab').removeClass('selected-tab')
            $('#s-tab').addClass('selected-tab')
            $('.second-year-courses').show()
            for (var i = 10; i < 19; i++) {
                $('#f'+i).show()
            }
        }
        else if (hide == 'second' && show == 'first') {
            $('.second-year-courses').hide()
            for (var i = 10; i < 19; i++) {
                $('#f'+i).hide()
            }
            $('#s-tab').removeClass('selected-tab')
            $('#f-tab').addClass('selected-tab')
            $('.first-year-courses').show()
            for (var i = 1; i < 10; i++) {
                $('#f'+i).show()
            }
        }
    }

    // Show answer
    var shown = []

    for (var i = 0; i < 19; i++) {
        shown.push(false)
    }

    $('#f1').click(function(){
        showDesc(1)
    })

    $('#f2').click(function(){
        showDesc(2)
    })

    $('#f3').click(function(){
        showDesc(3)
    })

    $('#f4').click(function(){
        showDesc(4)
    })

    $('#f5').click(function(){
        showDesc(5)
    })

    $('#f6').click(function(){
        showDesc(6)
    })

    $('#f7').click(function(){
        showDesc(7)
    })

    $('#f8').click(function(){
        showDesc(8)
    })

    $('#f9').click(function(){
        showDesc(9)
    })

    $('#f10').click(function(){
        showDesc(10)
    })

    $('#f11').click(function(){
        showDesc(11)
    })

    $('#f12').click(function(){
        showDesc(12)
    })

    $('#f13').click(function(){
        showDesc(13)
    })

    $('#f14').click(function(){
        showDesc(14)
    })

    $('#f15').click(function(){
        showDesc(15)
    })

    $('#f16').click(function(){
        showDesc(16)
    })

    $('#f17').click(function(){
        showDesc(17)
    })

    $('#f18').click(function(){
        showDesc(18)
    })

    function showDesc(id) {
        if (shown[id-1] == false) {
            $('#d'+id).slideDown()
            shown[id-1] = true
        }
        else if (shown[id-1] == true) {
           $('#d'+id).slideUp()
           shown[id-1] = false 
        }
        $('#i'+id).toggleClass('rotate-90')
    }
    // Anchor Scroll
    $('a[href^="#"]').on('click', function(event) {

        var target = $(this.getAttribute('href'))

        if (target.length) {
            event.preventDefault();
            $('body').stop().animate({
                scrollTop: target.offset().top
            }, 1000)
        }
    })