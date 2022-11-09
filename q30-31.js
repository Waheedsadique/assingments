let username =["waheed","admin","sohail","mobeen","munir"]

for (i = 0; i < username.length; i++) {
    if (username[i] == ('admin')){
    console.log ("you are my admin")
    }
    
        else {
            console.log(username[i] + ' thank you for login')
        };
    
} 

// check list of username is not empty
if(username != null){
    console.log('list is not empty')
}

// remove the username from list
while(username.length){
    username.pop();
}
if (username.length == 0){
    console.log(username)
    console.log('we need more user to add')
}



