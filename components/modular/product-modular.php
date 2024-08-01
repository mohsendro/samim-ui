<!-- Product Modular Section Start -->
<section id="productModular-section" class="container-fluid productModular-section" data-scroll="">
    <div class="container">
        <div class="row title-row">
            <div class="col-12 column">
                <div class="title">محصـولات مرتبــط</div>
            </div>
        </div>

        <div class="row card-row">
            <div class="col-12 column">
                <!-- Slider main container -->
                <div class="swiper relatedSwiper" dir="rtl">
                    <!-- Additional required wrapper -->
                    <div class="swiper-wrapper">
                        <!-- Slides -->
                        <?php for ($i=0; $i < 3; $i++): ?>
                            <div class="swiper-slide">
                                <?php include __DIR__ . '/../../components/cards/project-card.php'; ?>
                            </div>
                        <?php endfor; ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- Product Modular Section End -->