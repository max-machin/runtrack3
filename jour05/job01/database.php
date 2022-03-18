<?php   

function valid_data($données)
{
    //trim permet de supprimer les espaces inutiles
    $données = trim($données);
    //stripslashes supprimes les antishlashs
    $données = stripslashes($données);
    //htmlspecialchars permet d'échapper certains caractéres spéciaux et les transforment en entité HTML
    $données = htmlspecialchars($données);
    return $données;
}

class User {
    private $nom;
    public $prenom;
    public $email;
    public $password;

    public function __construct()
    {
        //On effectue un try/catch pour la connexion à la base de données. si cette derniére échoue alors on capture l'exception avant de l'afficher.
        try 
        {
            //@var $bdd contient la connexion à la bdd 
            $bdd = new PDO ('mysql:host=localhost; dbname=utilisateurs;charset=utf8', 'root', '');
            $bdd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $this->bdd = $bdd;
            return $this->bdd;
        }
        //Capture des exceptions et affichage de ses derniéres.
        catch (PDOException $e)
        {
            die("Erreur !: " . $e->getMessage() . "<br/>");
            
        }
    }
    
    

    function Register($nom, $prenom, $email, $password){

        $insert = "INSERT INTO utilisateurs (nom, prenom, email,password ) VALUES (:nom, :prenom, :email, :password)";
        $exec_insert = $this->bdd->prepare($insert);
        $exec_insert->bindValue(':nom' , $nom, PDO::PARAM_STR);
        $exec_insert->bindValue(':prenom' , $prenom, PDO::PARAM_STR);
        $exec_insert->bindValue(':email' , $email, PDO::PARAM_STR);
        $exec_insert->bindValue(':password' , $password, PDO::PARAM_STR);
        $exec_insert->execute();
    }

    function verif_email($email){
        $find = "SELECT COUNT(*) FROM utilisateurs WHERE email = :email ";
        $exec_find = $this->bdd->prepare($find);
        $exec_find->bindValue(':email' , $email, PDO::PARAM_STR);
        $exec_find->execute();
        $count = $exec_find->rowCount();
        if($count==0){ return true;}else return false;
    }
}

