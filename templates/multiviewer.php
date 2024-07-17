<style>
    :root {
        --color-modular: #324EEF;
        --color-modular-30: #6A7FF4;
        --color-modular-20: #E7EBF8;
        --color-modular-15: #E3ECFE;
        --color-modular-10: #EFF4FE;
        --color-modular-5: #F8FAFF;
    }
</style>
<main class="multiviewer">
    <?php include __DIR__ . '/../components/modular/heading-modular.php'; ?>
    <?php include __DIR__ . '/../components/modular/anchor-modular.php'; ?>
    <?php include __DIR__ . '/../components/modular/hero-modular.php'; ?>
    <?php include __DIR__ . '/../components/modular/advantage-modular.php'; ?>
    <?php include __DIR__ . '/../components/modular/advantage-full-modular.php'; ?>
    <?php include __DIR__ . '/../components/modular/video-modular.php'; ?>
    <?php include __DIR__ . '/../components/modular/property-tab-modular.php'; ?>
    <?php include __DIR__ . '/../components/modular/property-modular.php'; ?>
    <?php include __DIR__ . '/../components/modular/benefit-modular.php'; ?>
    <?php include __DIR__ . '/../components/modular/product-modular.php'; ?>
    <?php include __DIR__ . '/../components/modular/download-modular.php'; ?>
    <?php include __DIR__ . '/../components/modular/faq-modular.php'; ?>

    <!-- Form Section Start -->
    <section id="form-section" class="container-fluid form-section">
        <div class="container">
            <div class="row">
                <div class="col-12 col-lg-5 content-column column">
                    <div class="title">با کارشناسان صمیـم در ارتباط باشید</div>
                    <p class="desc">
                        اگر به هر دلیل در حال حاضر نمی‌توانید با ما تماس بگیرید، لطفا نام، شماره مورد نظر خودتون رو در فرم رو به رو وارد کنید تا کارشناسان ما با شما در تماس باشند.
                    </p>
                </div>
                <div class="col-12 col-lg-7 form-column column">
                    <form>
                        <div class="fields">
                            <input type="text" class="form-control" name="name" placeholder="نام و نام‌خانوادگی*" require>
                            <input type="text" class="form-control" name="office" placeholder="سازمان/اداره">
                            <input type="tel" class="form-control" name="tel" placeholder="شماره تماس*" require>
                            <input type="email" class="form-control" name="email" placeholder="نشانی ایمیل">
                        </div>
                        <div class="submit">
                            <span class="form-text">* پر کردن فیلدهای ستاره‌دار ضروری است.</span>
                            <button type="submit" class="btn">ثبت درخواست</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    <!-- Form Section End -->
</main>