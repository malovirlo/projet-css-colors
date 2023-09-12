<?php

$result = function () {
    for ($i = 1; $i <= 100; $i++) {
        $message = "";
        if ($i % 5 == 0) {
            $message .= "Je ";
        }
        if ($i % 10 == 0) {
            $message .= "m'apelle ";
        }
        if ($i % 15 == 0) {
            $message .= "Malo ";
        }
        if ($message == "") {
            $message .= $i;
        }
        echo $message . PHP_EOL;
    }
};

$result();
