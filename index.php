<?php include __DIR__ . '/header.php'; ?>

<?php 

    // $page_name = explode('/', $_SERVER['REQUEST_URI']);

    // switch ( end($page_name) ) {
        //     case 'about.php':
        //         include __DIR__ . '/templates/about.php'; 
        //         break;
            
        //     default:
        //         include __DIR__ . '/templates/front-page.php'; 
        //         break;
    // }   
    
    if( isset( $_GET['page'] ) ) {

        switch ( $_GET['page'] ) {
            case 'archive-product':
                include __DIR__ . '/templates/archive-product.php'; 
                break;

            case 'single-product':
                include __DIR__ . '/templates/single-product.php'; 
                break;

            case 'archive-post':
                include __DIR__ . '/templates/archive-post.php'; 
                break;

            case 'single-post':
                include __DIR__ . '/templates/single-post.php'; 
                break;

            case 'contact-us':
                include __DIR__ . '/templates/contact-us.php'; 
                break;

            case 'about-us':
                include __DIR__ . '/templates/about-us.php'; 
                break;

            case 'customer':
                include __DIR__ . '/templates/customer.php'; 
                break;

            case 'awards':
                include __DIR__ . '/templates/awards.php'; 
                break;
            
            case 'hardware':
                include __DIR__ . '/templates/hardware.php'; 
                break;

            case 'multiviewer':
                include __DIR__ . '/templates/multiviewer.php'; 
                break;

            case 'intercom ':
                include __DIR__ . '/templates/intercom.php'; 
                break;

            case 'software':
                include __DIR__ . '/templates/software.php'; 
                break;

            default:
                include __DIR__ . '/templates/front-page.php';
                break;
        }

    } else {

        include __DIR__ . '/templates/front-page.php';

    }

?>

<?php include __DIR__ . '/footer.php'; ?>