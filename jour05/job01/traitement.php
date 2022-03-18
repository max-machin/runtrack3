<?php

// form data : stocker les données à envoyer

require_once ("database.php");

$error_nom = "";
$error_prenom = "";
$error_email = "";
$error_password = "";
$error_confirm_password = "";


if ( isset ($_POST['register'])){

    if ( !empty($_POST['nom'])){
        $nom = valid_data($_POST['nom']);

        if ( !empty($_POST['prenom'])){
            $prenom = valid_data($_POST['prenom']);

            if ( !empty($_POST['email'])){

                $email = valid_data(filter_var($_POST['email'], FILTER_VALIDATE_EMAIL));

                if ( filter_var($email)){

                
                    if ( !empty($_POST['password'])){
                        $password = valid_data($_POST['password']);

                        if ( !empty($_POST['confirm_password'])){
                            $valid_password = valid_data($_POST['confirm_password']);

                            if ( $password = $valid_password){
                                $user = new User();
                                $user->verif_email($email);

                                if ( !isset($verif_email)){
                                    $hash_password = password_hash($password, PASSWORD_DEFAULT);
                                    $user = new User();
                                    $user->register($nom, $prenom, $email, $hash_password);
                                    header('location: connexion.php');

                                } else {
                                    $error_email = "Cet E-mail est déjà pris";
                                }

                            } else {
                               $error_confirm_password = "Veuillez indiquez deux mots de passe identiques";
                            }
                        } else {
                            $error_confirm_password = "Veuillez remplir le champ";
                        }
                    } else {
                        $error_password = "Veuillez renseignez un password";
                    }
                } else {
                    $error_email = "Adresse email invalide";
                 }   
            } else {
                $error_email = "Veuillez renseignez votre email";
            }
        } else {
            $error_prenom = "Veuillez renseignez votre prenom";
        }
    } else {
        $error_nom = "Veuillez renseignez votre nom";
    }
}
 
if(isset($_POST['email']))
   {
    $email = $_POST['email'];
     $user = new User();
    echo json_encode($user->verif_email($email));

   }
   else
   {
       echo json_encode($_POST);
   }

?>