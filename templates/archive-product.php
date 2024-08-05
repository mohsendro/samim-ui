<main>
    <!-- Products Desc Section Start -->
    <section id="products-desc-section" class="container-fluid products-desc-section">
        <div class="container">
            <div class="row heading-row">
                <div class="col-12 heading-column column">
                    <div class="title">مبـدل فیبــر</div>
                    <div class="subtitle">انتقال صدا و تصویر به مقاصد دوردست</div>
                </div>
            </div>

            <div class="row content-row">
                <div class="col-12 col-xl-7 content-column column">
                    <p class="desc">
                        محصولات حرفه ای صمیم در حوزه انتقال صدا، تصویر و دیتا بر بستر فیبر نوری، تجهیزات مهمی برای ارسال و دریافت استریم های سنگین SDI، ASI، AES و ... محسوب می شوند. این محصولات شامل مبدل های تک و دوکاناله سیگنال های الکتریکی به سیگنال نوری، مبدل های تک و دوکاناله سیگنال های نوری به سیگنال الکتریکی و نیز یک ماژول قدرتمند CWDM به عنوان مالتی پلکسر و دی مالتی پلکسر 18 کاناله می باشد. 
                        مبدل های فیبر صمیم، از سیگنال های صدا و تصویر با فرمت 12G/3G/HD/SD-SDI پشتیبانی می کنند و همگی دارای رابط کاربری پیشرفته تحت وب برای مدیریت عملکرد و کنترل سیگنال های ورودی و خروجی می باشند. 
                    </p>
                </div>
                <div class="col-12 col-xl-5 column">
                    <img src="assets/img/components/approach/intercom.jpg" alt="" data-aos="fade-right">
                </div>
            </div>
        </div>
    </section>
    <!-- Products Desc Section End -->

    <!-- Products Card Section Start -->
    <section id="products-card-section" class="container-fluid products-card-section">
        <div class="container">
            <div class="row g-3">
                <?php for ($i=0; $i < 4; $i++): ?>
                    <div class="col-12 col-md-6 col-xl-4 column">
                        <?php include __DIR__ . '/../components/cards/project-card.php'; ?>
                    </div>
                <?php endfor; ?>
            </div>
        </div>
    </section>
    <!-- Products Card Section End -->
</main>