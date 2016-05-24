function toggleLayer(layerID) {
    var p=document.getElementById(layerID);
    if(p.className=="active") document.getElementById(layerID).className="";
    else document.getElementById(layerID).className="active";
    
    var img;
    
    switch(layerID) {
        case 'back':
            img=document.getElementById('backImg');
            break;
        case 'obs':
            img=document.getElementById('obsImg');
            break;
        case 'aoi':
            img=document.getElementById('aoiImg');
            break;
        case 'traj':
            img=document.getElementById('trajImg');
            break;
        case 'points':
            img=document.getElementById('pointsImg');
            break;
    }
    if(img.style.visibility=="visible") img.style.visibility = 'hidden';
    else img.style.visibility = 'visible';
}

function showDialog() {
    if(!$( "#dialog" ).dialog("isOpen")) {
        $( "#dialog" ).dialog("open");
    }
}