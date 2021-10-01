const D = document,
$tabla = D.getElementById("tabla_usuarios"), 
$template = D.getElementById("listado_usuarios").content,
$fragmento = D.createDocumentFragment(),


//metodo GET 
const listaU = async()=>{
    try {
        let res = await fetch("http://localhost:8080/usuarios/listar"),
        json = await res.json();
        if (!res.ok) throw{status:res.status,statusText:res.statusText}; 
        console.log(json);
        console.log($editar);
        json.forEach(usuario => {
            $template.getElementById("cedula_usuario").textContent = usuario.cedula_usuario;
            $template.getElementById("email_usuario").textContent = usuario.email_usuario;
            $template.getElementById("nombre_usuario").textContent = usuario.nombre_usuario;
            $template.getElementById("password_usuario").textContent = usuario.password;
            $template.getElementById("usuario_usuario").textContent = usuario.usuario;

            $template.getElementById("editar_usuario").dataset.cedula_usuario = usuario.cedula_usuario;
            $template.getElementById("editar_usuario").dataset.email_usuario = usuario.email_usuario;
            $template.getElementById("editar_usuario").dataset.nombre_usuario = usuario.nombre_usuario;
            $template.getElementById("editar_usuario").dataset.password = usuario.password;
            $template.getElementById("editar_usuario").dataset.usuario = usuario.usuario;
            $template.getElementById("eliminar_usuario").dataset.cedula_usuario = usuario.cedula_usuario;
            let $clone = D.importNode($template, true);
            $fragmento.appendChild($clone);
        }); 
        $tabla.querySelector("tbody").appendChild($fragmento);
    } catch (error) {
        let mensaje=err.statusText("Ocurrio un error");
    }
}
D.addEventListener("DOMContentLoaded",listaU);

// Delete
D.addEventListener("click", );

fetch('http://localhost:8080/usuarios/eliminar/' + cedula_usuario, {
  method: 'DELETE',
})
.then(res => res.text()) 
.then(res => console.log(res))