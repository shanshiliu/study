<?php
/*
Uploadify
Copyright (c) 2012 Reactive Apps, Ronnie Garcia
Released under the MIT License <http://www.opensource.org/licenses/mit-license.php> 
*/

// Define a destination
// $targetFolder = '/uploads'; // Relative to the root

// $verifyToken = md5('unique_salt' . $_POST['timestamp']);

// if (!empty($_FILES) && $_POST['token'] == $verifyToken) {
// 	$tempFile = $_FILES['Filedata']['tmp_name'];
// 	$targetPath = "/uploads";
// 	$targetFile = rtrim($targetPath,'/') . '/' . $_FILES['Filedata']['name'];
	
// 	// Validate the file type
// 	$fileTypes = array('jpg','jpeg','gif','png'); // File extensions
// 	$fileParts = pathinfo($_FILES['Filedata']['name']);
	
// 	if (in_array($fileParts['extension'],$fileTypes)) {
// 		move_uploaded_file($tempFile,$targetFile);
// 		echo '1';
// 	} else {
// 		echo 'Invalid file type.';
// 	}
// }

echo $_FILES['Filedata']['name'];

move_uploaded_file($_FILES["file"]["tmp_name"],
      "upload/" . $_FILES["file"]["name"]);
?>