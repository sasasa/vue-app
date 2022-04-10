<?php
$error = false;
if ($_FILES['upfile']['error'] !== UPLOAD_ERR_OK) { 
  $error = true;
} else {
  $src = $_FILES['upfile']['tmp_name']; 
  $dest = mb_convert_encoding($_FILES['upfile']['name'], 'SJIS-WIN', 'UTF-8');
  if (!move_uploaded_file($src, $dest)) { $error = true; }
}
if ($error) {
  header('HTTP/1.1 500 Internal Server Error');
  print 'アップロードできませんでした。';
} else {
  print 'アップロード成功：'.$dest;
}