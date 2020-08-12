<?php
    $latitude = $_POST["latitude"];
    $longitude = $_POST["longitude"];
    $note1 = $_POST["note1"];
    $note2 = $_POST["note2"];

    if (isset($_FILES['image'])) {
        $errors = array();
        $file_name = $_FILES['image']['name'];
        $file_size = $_FILES['image']['size'];
        $file_tmp = $_FILES['image']['tmp_name'];
        $file_type = $_FILES['image']['type'];
        $file_ext = strtolower(end(explode('.', $_FILES['image']['name'])));

        $extensions = array("jpeg", "jpg", "png");

        if (in_array($file_ext, $extensions) === false) {
            $errors[] = "extension not allowed, please choose a JPEG or PNG file.";
        }

        if ($file_size > 12097152) {
            $errors[] = 'File size must be less than 12 MB';
        }

        if (empty($errors) == true) {
            move_uploaded_file($file_tmp, "images/" . $file_name);
            echo "<br>The name of the photo is <a href=images/" . $file_name . ">" . $file_name . "</a>";

            echo "<br><a href=https://www.google.com/maps/search/" . $latitude . "," . $longitude . "/@" . $latitude . "," . $longitude . ",13z>See Photo Location </a><br>";
        } else {
            print_r($errors);
        }
    }

    echo "the latitude of this photo is: " . $latitude . "<br>";
    echo "the longitude of this photo is: " . $longitude . "<br>";
?>