<?php
if(!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED!==true)die();

use \Bitrix\Main\Application;
use \Bitrix\Main\Loader;
use \Bitrix\Main\Localization\Loc;
use \Bitrix\Main\Page\Asset;
use FacebookAds\Api;
use FacebookAds\Logger\CurlLogger;
use FacebookAds\Object\ServerSide\Event;
use FacebookAds\Object\ServerSide\EventRequest;
use FacebookAds\Object\ServerSide\UserData;

$request = Application::getInstance()->getContext()->getRequest();
$sCurPage = $APPLICATION->GetCurPage(true);

if($_POST["AJAX_FB"] == "Y" && SITE_SERVER_NAME == 'totti-shop.ru') {

    $APPLICATION->RestartBuffer();
    $access_token = 'EAAmeiu3PsCsBAOm5ZCFGrAxqQI5CVq7v46niwTIxplaE6RTvwWfIRH9pcDsQWWvcUG69Ywd1gvIdZCkRMoHgOYZBlutxXYiJkH2swPpX4jWqdsT7gZBmbWW8gvsVI9ABaluOjWng7r5zWwMOriy40sy6l6019NZCzwKZAcZCaG1UFhpvCNILj37';
    $pixel_id = '417674356328891';

    $api = Api::init(null, null, $access_token);
    $api->setLogger(new CurlLogger());

    $user_data = (new UserData())
        // It is recommended to send Client IP and User Agent for Conversions API Events.
        ->setClientIpAddress($_SERVER['REMOTE_ADDR'])
        ->setClientUserAgent($_SERVER['HTTP_USER_AGENT']);

    $event = (new Event())
        ->setEventName('Contact')
        ->setEventTime(time())
        ->setEventSourceUrl(getFullPathUrl())
        ->setUserData($user_data);

    $events = array();
    array_push($events, $event);

    $requestFB = (new EventRequest($pixel_id))->setEvents($events);
    $response = $requestFB->execute();

    echo json_encode($response);
    die();
}

if ($sCurPage == SITE_DIR.'index.php') {
	$APPLICATION->IncludeFile(
		"include/index.php",
		array(),
		array('SHOW_BORDER' => false)
	);
}

if ($request->isAjaxRequest() &&
    !isset($_POST['submit']) &&
    $_POST['submit'] == 'f-submit-subscribe'
)
{
	CMain::FinalActions();
	?></div><?php
	die();
}

if (Loader::includeModule('redsign.megamart'))
{
// $APPLICATION->AddBufferContent(function () use ($APPLICATION) {
	echo \Redsign\MegaMart\MyTemplate::getSiteFooter();
//});
}
?>
		</div><?php // l-page__main ?>
		<div class="l-page__footer">
			<?php
			$sFooterType = in_array(RS_MM_FOOTER_THEME, ['type2_dark', 'type2_light']) ? 'type2' : 'type1';
			$APPLICATION->IncludeFile(
				"include/footer/$sFooterType.php",
				array(),
				array('SHOW_BORDER' => false)
			);
			?>
            <?php $APPLICATION->IncludeFile(
                "include/footer/ym-scripts.php",
                array(),
                array('SHOW_BORDER' => false)
            );
            ?>
			</div>
<?/*$APPLICATION->IncludeComponent(
    "bitrix:main.include",
    "",
    Array(
        "AREA_FILE_RECURSIVE" => "Y",
        "AREA_FILE_SHOW" => "file",
        "AREA_FILE_SUFFIX" => "inc",
        "EDIT_TEMPLATE" => "",
        "PATH" => '/inc_popup.php'
    )
);*/?>

<?/*?>
<div class="f-modal-works">
    <div class="f-modal__bg"></div>
    <div class="modal__container">
        <div>
            <div class="modal__cancel">
                <div class="modal__svg" id="close-modal-works">
                    <svg
                            width="14px"
                            height="14px"
                            viewBox="0 0 14 14"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                    >
                        <title>A3D82403-5C1E-4343-AF66-D1FE55FF423C</title>
                        <g
                                id="Desktop"
                                stroke="none"
                                stroke-width="1"
                                fill="none"
                                fill-rule="evenodd"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                        >
                            <g
                                    id="3.1-Modal_subscribers_coupon"
                                    transform="translate(-1281.000000, -263.000000)"
                                    stroke="#BDBDBD"
                                    stroke-width="2"
                            >
                                <g
                                        id="Button_close"
                                        transform="translate(1268.000000, 250.000000)"
                                >
                                    <path d="M26,14 L14,26 M14,14 L26,26" id="Icon_close"></path>
                                </g>
                            </g>
                        </g>
                    </svg>
                </div>
            </div>
        </div>
        <div class="modal__content">
            <div class="content__text">
                Дорогие друзья! <br/>4 марта с 17 по 18 часов мы будем проводить работы по<br/> улучшению сайта. В это время сайт может работать с перебоями.
            </div>
        </div>
    </div>
</div>

<script type="text/javascript">
    let close = document.querySelector('#close-modal-works');
    let wasOpened = sessionStorage.getItem('open-works-modal');

    close.addEventListener('click', openModal.bind(null, '.f-modal-works', ''));

    function openModal(selector, isOpen = '', wasOpened) {
        var element = document.querySelector(selector);

        if (element.classList.contains('open') && isOpen == '') {
            element.classList.remove('open');
        } else if(wasOpened !== "Y") {
            element.classList.add('open');
            sessionStorage.setItem('open-works-modal', "Y");
        }
    }

    openModal(".f-modal-works", "", wasOpened);
</script>
<?*/?>
	</div><?php // l-page ?>


	<?php

	$APPLICATION->IncludeFile(
		"include/compact-menu.php",
		array(),
		array('SHOW_BORDER' => false)
	);

	$APPLICATION->IncludeFile(
		"include/panels/side-panel.php",
		array(
			'SHOW_CONTROLS' => RS_MM_CONTROL_PANEL == 'side'
		),
		array('SHOW_BORDER' => false)
	);

	$APPLICATION->IncludeFile(
		"include/panels/bottom-panel.php",
		array(
			'SHOW_CONTROLS' => RS_MM_CONTROL_PANEL == 'bottom'
		),
		array('SHOW_BORDER' => false)
	);

	$APPLICATION->ShowViewContent('rs_mm_search_popup');
	?>

	<script>
        var userAgent = navigator.userAgent || navigator.vendor || window.opera;
        var str = navigator.userAgent;
        var instagram = str.indexOf("Instagram");
        var facebook = str.indexOf("FB");

        if (/android/i.test(userAgent) && (instagram != -1 || facebook != -1) ) {
            document.write("<a href=\"https://totti-shop.ru\" download id=\"open-browser-url\">Please wait. Proceed to Chrome</a>");
            window.stop();
            let input = document.getElementById('open-browser-url');
            if (input) {

                input.click();
				setTimeout(function() { // таймер-планировщик
					window.close();; // вызвать клик на кнопку
			    }, 1000)
            }
        }
    </script>
	<?php $APPLICATION->IncludeFile(SITE_DIR."include/template/body_end.php", array(), array("MODE"=>"html")); ?>
</body>
</html>
