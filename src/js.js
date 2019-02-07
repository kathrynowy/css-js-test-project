document.getElementById('input-startdate-flights').min = new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000).toISOString().split('T')[0]; 
    document.getElementById('input-enddate-flights').onclick = function() { 
    var minD = document.getElementById('input-startdate-flights').value; 
    
    if (document.getElementById('input-startdate-flights').value != ' ') { 
    document.getElementById('input-enddate-flights').min = minD; 
    } 
    }; 

    document.getElementById('input-startdate-hotels').min = new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000).toISOString().split('T')[0]; 
    document.getElementById('input-enddate-hotels').onclick = function() { 
    var minD = document.getElementById('input-startdate-hotels').value; 
    
    if (document.getElementById('input-startdate-hotels').value != ' ') { 
    document.getElementById('input-enddate-hotels').min = minD; 
    } 
    }; 
    
    document.getElementById('input-startdate-cars').min = new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000).toISOString().split('T')[0]; 
    document.getElementById('input-enddate-cars').onclick = function() { 
    var minD = document.getElementById('input-startdate-cars').value; 
    
    if (document.getElementById('input-startdate-cars').value != ' ') { 
    document.getElementById('input-enddate-cars').min = minD; 
    } 
    }; 