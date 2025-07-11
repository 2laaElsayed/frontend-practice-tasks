 $(document).ready(function() {
            const eidSong = document.getElementById('eidSong');
            const musicControl = $('#musicControl');
            const musicIcon = $('#musicIcon');
            let isMusicPlaying = false;
            
            $('.sheep').click(function() {
                $(this).css('transform', 'rotate(10deg)');
                setTimeout(() => {
                    $(this).css('transform', 'rotate(-10deg)');
                    setTimeout(() => {
                        $(this).css('transform', 'rotate(0)');
                    }, 200);
                }, 200);
                
                $('.message').toggleClass('show');
                
                if(!isMusicPlaying) {
                    eidSong.play();
                    isMusicPlaying = true;
                    musicControl.fadeIn();
                    musicIcon.text('🔊');
                }
                
                if($('.message').hasClass('show')) {
                    $('body').css('background', 'linear-gradient(135deg, #fff5e6, #ffe8d8)');
                } else {
                    $('body').css('background', 'linear-gradient(135deg, #fff5e6,  #fff5e6)');
                }
                
                createHearts();
                
                if($('.message').hasClass('show')) {
                    setTimeout(() => {
                        $('.message').addClass('pulse');
                    }, 1000);
                } else {
                    $('.message').removeClass('pulse');
                }
            });
            
            
            function createHearts() {
                const colors = ['#ff0000', '#c52d2d', '#ff69b4', '#ff1493', '#e0a800'];
                const heartsContainer = $('.hearts');
                
                for (let i = 0; i < 20; i++) {
                    const heart = $('<div class="heart">❤️</div>');
                    heart.css({
                        left: Math.random() * 100 + '%',
                        top: Math.random() * 100 + 100 + '%',
                        color: colors[Math.floor(Math.random() * colors.length)],
                        fontSize: Math.random() * 20 + 15 + 'px',
                        opacity: 0
                    });
                    
                    heartsContainer.append(heart);
                    
                    animateHeart(heart);
                }
            }
            
           function animateHeart(heart) {
                const duration = Math.random() * 3 + 2;
                const delay = Math.random() * 0.5;
                
                heart.css({
                    animation: `float-up ${duration}s ${delay}s forwards`
                });
                
                setTimeout(() => {
                    heart.remove();
                    if ($('.message').hasClass('show')) {
                        createHearts();
                    }
                }, (duration + delay) * 1000);
            }
        });