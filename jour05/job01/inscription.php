<?php
require 'header.php';
?>

<form method="post">
    

    <label for="nom">Nom</label>
    <input name="nom" type="text" id="nom">
    <p class="red"></p>
    <span class="red"></span>

    <label for="prenom">Prenom</label>
    <input name="prenom" type="text" id="prenom">
    <p class="red"></p>
    <span class="red"></span>

    <label for="email">E-mail</label>
    <input name="email" type="text" id="email">
    <p class="red"></p>
    <span class="red"></span>

    <label for="password">Password</label>
    <input name="password" type="password" id="password" placeholder="Password">
    <p class="red"></p>
    <span class="red"></span>

    <label for="confirm_password">Confirm Password</label>
    <input name="confirm_password" type="password" id="confirm_password" placeholder="Confirm">
    <p class="red"></p>
    <span class="red" ></span>

    <button name="register" id="register">S'inscrire</button>
</form>