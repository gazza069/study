<?php

// Content-TypeをJSONに指定する
header('Content-Type: application/json');

// 「200 OK」 で {"data":"24歳、学生です"} のように返す
$data = "{$_POST['value']}歳です";
echo json_encode(compact('data'));