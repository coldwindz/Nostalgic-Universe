<!doctype html>
<html lang="en">

<head>
    <!--required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!--bootstrap css -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <style>
    #ques {
        min-height: 433px;
    }
    </style>

    <title>Nostalgic Universe Forum</title>
</head>

<body>
    
    <?php include 'partials/_dbconnect.php'; ?>
    <?php include 'partials/_header.php'; ?>
    <?php 
    $id = $_GET['threadid'];
    $sql = "SELECT * FROM `threads` WHERE thread_id=$id";
    $result = mysqli_query($conn, $sql);
    while($row = mysqli_fetch_assoc($result)){
        $title = $row['thread_title'];
        $desc = $row['thread_desc'];
        $thread_user_id = $row['thread_user_id'];

        // Query the users table to find out the name of OP
        $sql2 = "SELECT user_email FROM `users` WHERE Sno='$thread_user_id'";
        $result2 = mysqli_query($conn, $sql2);
        $row2 = mysqli_fetch_assoc($result2);
        $posted_by = $row2['user_email'];
    }
    
    ?>

    <?php 
    $showAlert = false;
    $method = $_SERVER['REQUEST_METHOD'];
    if($method=='POST'){
      //insert into comment db
      $comment = $_POST['comment'];
      $comment = str_replace("<", "&lt;", $comment);
      $comment = str_replace(">", "&gt;", $comment);
      $sno = $_POST['sno'];
      $sql = " INSERT INTO `comments` ( `comment_content`, `thread_id`, `comment_by`, `comment_time`) VALUES ( '$comment', '$id', '$sno', current_timestamp()) ";
      $result = mysqli_query($conn, $sql);
      $showAlert = true;
      if($showAlert){
        echo '<div class="alert alert-success alert-dismissible fade show" role="alert">
           <strong>success!</strong> Your comment has been added!
           <button type="button" class="close" data-dismiss="alert" aria-label="Close">
               <span aria-hidden="true">&times;</span>
           </button>
            </div>
        ';
      }
    }
    ?>


    <!-- Category container starts here -->
    <div class="container my-4">
        <div class="jumbotron">
            <h1 class="display-4"><?php echo $title;?></h1>
            <p class="lead"><?php echo $desc;?></p>
            <hr class="my-4">
            <p>This is a peer to peer forum. Spam / Advertising / Self-promote in the forums is not allowed. Do not post
                copyright-infringing material. Do not post "offensive" posts, links or images. Do not cross post
                questions. Remain respectful of other members at all times. </p>
            <p class="lead">
            <p> Posted by:<em> <?php echo $posted_by; ?> </em></p>
            </p>
        </div>
    </div>

    <?php
    if (isset ($_SESSION['loggedin']) && $_SESSION['loggedin']==true){
    echo '<div class="container">
            <h1 class="py-2"> Post a Comment </h1>
            <form action="' . $_SERVER['REQUEST_URI'] . '" method="post">
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Type your comment</label>
                    <textarea class="form-control" id="comment" name="comment" rows="3"></textarea>
                    <input type="hidden" name="sno" value="' . $_SESSION["sno"] . '">
                </div>
                <div class="my-2"><button type="submit" class="btn btn-success">Post Comment</button></div>
            </form>
        </div>';
    }
    else{
        echo '
        <div class="container">
        <h1 class="py-2">Post a Comment</h1>
        <p class="lead">You are not logged in. Please login to be able to post comments</p>
        </div>
        ';
    }
    ?>


    <div class="container mb-5" id="ques">
        <h1 class="py-2"> Discussions</h1>
        
         <?php 
    $id = $_GET['threadid'];
    $sql = "SELECT * FROM `comments` WHERE thread_id=$id";
    $result = mysqli_query($conn, $sql);
    $noResult = true;
    while($row = mysqli_fetch_assoc($result)){
        $noResult = false;
        $id = $row['comment_id'];
        $content = $row['comment_content'];
        $comment_time = $row['comment_time'];
        $thread_user_id = $row['comment_by'];
        $sql2 = "SELECT user_email FROM `users` WHERE Sno='$thread_user_id'";
        $result2 = mysqli_query($conn, $sql2);
        $row2 = mysqli_fetch_assoc($result2);

      echo  '<div class="media my-3">
  <img class="mr-3" src="img/userdefault.png" width="50px" height="50px" alt="Generic placeholder image">
  <div class="media-body">
  <p class="font-weight-bold my-0"><b>' . $row2['user_email'] . ' at ' . $comment_time . '</b></p>
    ' . $content . '
  </div>
</div>';

}

// echo var_dump($noResult);
if($noResult){
    echo '<div class="jumbotron jumbotron-fluid">
    <div class="container">
      <p class="display-4">No Comments found</p>
      <p class="lead">Be the first person to comment.</p>
    </div>
  </div>';
  }
    
?>



    </div>

    <?php include 'partials/_footer.php'; ?>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous">
    </script>

</body>

</html>