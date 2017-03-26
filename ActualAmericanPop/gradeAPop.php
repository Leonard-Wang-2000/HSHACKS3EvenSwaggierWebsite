<?php
    
    $answer1 = $_POST['question-1-answers'];
    $answer2 = $_POST['question-2-answers'];
    $answer3 = $_POST['question-3-answers'];
    $answer4 = $_POST['question-4-answers'];
    $answer5 = $_POST['question-5-answers'];

    $totalCorrect = 0;
    
    if ($answer1 == "B") { $totalCorrect++; }
    if ($answer2 == "A") { $totalCorrect++; }
    if ($answer3 == "C") { $totalCorrect++; }
    if ($answer4 == "D") { $totalCorrect++; }
    if ($answer5 == "C") { $totalCorrect++; }
    
    if($totalCorrect >= 3){
        echo "<body style='background: url(http://images.techtimes.com/data/images/full/163412/falloutvaultboythumbsup.jpg); 
        background-size: cover; 
        background-repeat: no-repeat;'>";
        
    }else{
        echo "<body style='background: url(https://openclipart.org/image/2400px/svg_to_png/222252/feels.png);
        background-size: cover; 
        background-repeat: no-repeat;'>";
    }
    
    echo "<div id='results'>$totalCorrect / 5 correct</div>";
    
?>
