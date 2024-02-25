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
    $id = $_GET['catid'];
    $sql = "SELECT * FROM `categories` WHERE category_id=$id";
    $result = mysqli_query($conn, $sql);
    while($row = mysqli_fetch_assoc($result)){
        $catname = $row['category_name'];
        $catdesc = $row['category_description'];
    }
    
    ?>

    <?php 
    $showAlert = false;
    $method = $_SERVER['REQUEST_METHOD'];
    if($method=='POST'){
      //insert into thread db
      $th_title = $_POST['title'];
      $th_desc = $_POST['desc'];

      $th_title = str_replace("<", "&lt;", $th_title);
      $th_title = str_replace(">", "&gt;", $th_title);

      $th_desc = str_replace("<", "&lt;", $th_desc);
      $th_desc = str_replace(">", "&gt;", $th_desc);

      $sno = $_POST['sno'];
      $sql = "INSERT INTO `threads` ( `thread_title`, `thread_desc`, `thread_cat_id`, `thread_user_id`, `timestamp`) VALUES ('$th_title', '$th_desc', '$id', '$sno', current_timestamp())";
      $result = mysqli_query($conn, $sql);
      $showAlert = true;
      if($showAlert){
        echo '<div class="alert alert-success alert-dismissible fade show" role="alert">
           <strong>success!</strong> Your thread has been added! Please wait for community to respond
           <button type="button" class="close" data-dismiss="alert" aria-label="Close">
               <span aria-hidden="true">&times;</span>
           </button>
            </div>
        ';
      }
    }
    ?>


    <!-- Category container starts here -->
    <div  class="container my-4">
        <div class="jumbotron">
            <h1 class="display-4">Welcome to <?php echo $catname;?> forums</h1>
            <p class="lead"><?php echo $catdesc;?></p>
            <hr class="my-4">
            <p>This is a peer to peer forum. Spam / Advertising / Self-promote in the forums is not allowed. Do not post
                copyright-infringing material. Do not post "offensive" posts, links or images. Do not cross post
                questions. Remain respectful of other members at all times. </p>
            <p class="lead">
                <a class="btn btn-success btn-lg" href="#" role="button">Browse topics</a>
            </p>
        </div>

        <?php
if(isset($_SESSION['loggedin']) && $_SESSION['loggedin']==true){
      echo  '<div class="container">
            <h1 class="py-2"> Start a discussion </h1>
            <form action="' . $_SERVER["REQUEST_URI"] . '" method="post">
        <div class="form-group">
            <label for="exampleInputEmail1">Thread Title</label>
            <input type="text" class="form-control" id="title" name="title" aria-describedby="emailHelp">
            <small id="emailHelp" class="form-text text-muted">Keep your title as short and crisp as
                possible</small>
        </div>
        <div class="form-group">
            <label for="exampleFormControlTextarea1">Elaborate your concern</label>
            <textarea class="form-control" id="desc" name="desc" rows="3"></textarea>
            <input type="hidden" name="sno" value="' . $_SESSION["sno"] . '">
        </div>
        <div class="my-2"><button type="submit" class="btn btn-success">Submit</button></div>
        </form>
    </div>';
    }
    else{
    echo '
    <div class="container">
    <h1 class="py-2"> Start a discussion </h1>
    <p class="lead"> You are not logged in. Please login to be able to start a Discussion. </p>
    </div>
    ';
    }
    ?>

    <div class="container mb-5" id="ques">
        <h1 class="py-2"> Browse Questions</h1>
        <?php 
    $id = $_GET['catid'];
    $sql = "SELECT * FROM `threads` WHERE thread_cat_id=$id";
    $result = mysqli_query($conn, $sql);
    $noResult = true;
    while($row = mysqli_fetch_assoc($result)){
        $noResult = false;
        $id = $row['thread_id'];
        $title = $row['thread_title'];
        $desc = $row['thread_desc'];
        $thread_time = $row['timestamp'];
        $thread_user_id = $row['thread_user_id'];
        $sql2 = "SELECT user_email FROM `users` WHERE Sno='$thread_user_id'";
        $result2 = mysqli_query($conn, $sql2);
        $row2 = mysqli_fetch_assoc($result2);
        

      echo  '<div  class="media my-3">
          <img class="mr-3" src="img/userdefault.png" width="50px" height="50px" alt="Generic placeholder image">
         <div  class="media-body">' .
          '<h5 class="mt-0"><a class="text-dark" href="thread.php?threadid=' . $id . '">' . $title . '</a></h5> 
         ' . $desc . ' <div class="my-1"><p ><b> Asked by:' . $row2['user_email'] . ' at ' . $thread_time . '</b></p> </div></div>' . '' .
        '</div>';

}
// echo var_dump($noResult); 
if($noResult){
  echo '<div class="jumbotron jumbotron-fluid">
  <div class="container">
    <p class="display-4">No Threads found</p>
    <p class="lead">Be the first person to ask a question.</p>
  </div>
</div>';
}
 
?>



    </div>



    </div>

    <?php include 'partials/_footer.php'; ?>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous">
    </script>

</body>

</html>