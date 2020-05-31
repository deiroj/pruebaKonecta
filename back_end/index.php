<?php 

header("HTTP/1.1 200");

echo('hola mundo ');

if($_SERVER['REQUEST_METHOD']== 'POST'){
  return 'Hola mundo';
}


function connect(){
    try{
        $conn = new PDO("mysql:host=localhost; dbname=pruebaReact; root; 123456");
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        return $conn;

    }catch(PDOException $exception){
        exit($exception->getMessage());
    }
}

 function getAllProductos(){
    $con = $this->connect();
    $productos = $con->prepare("select * from  productos")->execute();
    return json_encode($productos)
}

 function getProductById(){
    $id = $_post('id');
    $productos = $this->connect()->prepare("select * from productos where id = ".$id )->execute();
    return json_encode($productos);

}

 function addProductos()
{
    $productos = json_decode( $_post('productos')) ;


}

?>