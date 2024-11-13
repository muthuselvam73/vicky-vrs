<?php
   require 'cors.php';
   use PHPMailer\PHPMailer\PHPMailer;
   use PHPMailer\PHPMailer\Exception;
   require 'vendor/autoload.php';
   $mail = new PHPMailer(true);
   try {
   if ($_SERVER['REQUEST_METHOD'] === 'POST') {
      $maritalStatus = $_POST['maritalStatus'] ?? '';
      $firstName = $_POST['firstName'] ?? '';
      $lastName = $_POST['lastName'] ?? '';
      $category = $_POST['category'] ?? '';
      $designation = $_POST['designation'] ?? '';
      $educationQualification = $_POST['educationQualification'] ?? '';
      $specialization = $_POST['specialization'] ?? '';
      $contactNumber = $_POST['contactNumber'] ?? '';
      $email = $_POST['email'] ?? '';
      $companyWebsite = $_POST['companyWebsite'] ?? '';
      $companyName = $_POST['companyName'] ?? '';
      $country = $_POST['country'] ?? '';
      $mail->SMTPDebug = 0;                                       
      $mail->isSMTP();                                            
      $mail->Host       = 'smtp.gmail.com;';                    
      $mail->SMTPAuth   = true;                             
      $mail->Username   = 'prasath25bit@gmail.com';                 
      $mail->Password   = 'lhgitcsocdbjuxzz';                        
      $mail->SMTPSecure = 'tls';                              
      $mail->Port       = 587;  
   
      $mail->setFrom('from@gfg.com', 'Name');           
      $mail->addAddress('prasath25jun@gmail.com', 'Name');
      $mail->addAddress('prasath25jun@gmail.com', 'Name');
        
      $mail->isHTML(true);                                  
      $mail->Subject = $_POST['category'];
      $mail->Body    = 'HTML message body in <b>bold</b> ';
      $mail->AltBody = 'Body in plain text for non-HTML mail clients';
      if (isset($_FILES['cv']) && $_FILES['cv']['error'] == UPLOAD_ERR_OK) {
         $uploadFile = $_FILES['cv']['tmp_name'];
         $uploadFileName = $_FILES['cv']['name'];
         $mail->addAttachment($uploadFile, $uploadFileName);
     }
     if (isset($_FILES['photo']) && $_FILES['photo']['error'] == UPLOAD_ERR_OK) {
      $photoFile = $_FILES['photo']['tmp_name'];
      $photoFileName = $_FILES['photo']['name'];
      $mail->addAttachment($photoFile, $photoFileName);
  }
  $mail->isHTML(true);                  // Set email format to HTML
  $mail->Subject = 'New Registration Form Submission';
  $mail->Body    = "
      <h1>Registration Form Submission</h1>
      <p><strong>Marital Status:</strong> $maritalStatus</p>
       <p><strong>First Name:</strong> $firstName</p>
            <p><strong>Last Name:</strong> $lastName</p>
            <p><strong>Category:</strong> $category</p>
            <p><strong>Designation:</strong> $designation</p>
            <p><strong>Education Qualification:</strong> $educationQualification</p>
            <p><strong>Specialization:</strong> $specialization</p>
            <p><strong>Contact Number:</strong> $contactNumber</p>
            <p><strong>Email:</strong> $email</p>
            <p><strong>Company Website:</strong> $companyWebsite</p>
            <p><strong>Company Name:</strong> $companyName</p>
            <p><strong>Country:</strong> $country</p>
     
  ";
  if ($mail->send()) {
   echo "Mail has been sent successfully!";
} else {
   echo "Failed to send mail. Error: " . $mail->ErrorInfo;
}
   }
   } catch (Exception $e) {
      echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
   }
?>