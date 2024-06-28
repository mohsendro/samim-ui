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
            case 'about':
                include __DIR__ . '/templates/about.php'; 
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