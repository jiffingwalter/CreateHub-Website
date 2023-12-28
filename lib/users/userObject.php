<?php
// User data object
class userObject {
    private $userID;
    private $email;
    private $name;
    private $password;
    private $dateCreated;
    private $role;

    function __construct__($infoIn){
        $this->uid=$infoIn['userID'];
        $this->email=$infoIn['email'];
        $this->name=$infoIn['name'];
        $this->password=$infoIn['password'];
        $this->dateCreated=$infoIn['dateCreated'];
        $this->role=$infoIn['role'];
    }
}