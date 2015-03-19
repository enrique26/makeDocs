
function escribirRegistro() {

var file=Ti.Filesystem.getFile('registro.txt');
// file.write('registro de logs aplicacion 2\n'+Ti.API.info());
file.write(file.read() + 'informacion del log 2\n');
}

function leerRegistro(){
var leerArchivo=Ti.Filesystem.getFile('registro.txt');
var contenido=leerArchivo.read();
Ti.API.info('Output as a blob: '+contenido); // useful if contents are binary
Ti.API.info('Output text of the file: '+contenido.text);
Ti.API.info('Output the file\'s MIME type: '+contenido.mimeType); // e.g. text/plain

return contenido;
}

$.escribirReg.addEventListener('click', function(){
	escribirRegistro('new log line\n',true);
});

$.verRegistro.addEventListener('click',function(){
	$.registro.value=leerRegistro();
});

function camara(){
	Ti.Media.openPhotoGallery({
		success:function (event){
			var imageView = Ti.UI.createImageView({
				width:$.win.width,
				height:$.win.height,
				image:event.media
			});
			$.index.add(imageView);
		},
		cancel:function(event){
			alert('la operacion se cancelo');
			
		},
		error:function(event){
			alert(error(event));
			
		}
		
	});
	
	
}

$.galeria.addEventListener('click',function(){
	camara();
});

$.index.open();
