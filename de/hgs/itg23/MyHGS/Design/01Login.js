        
        /**
         * @author Michael
         * Parameter für email, password und passwordRetype
         */
        function register(event){ 

            event.preventDefault(); 

 

            var email = document.getElementById("re").value; 

            var password = document.getElementById("rp").value; 

            var passwordRetype = document.getElementById("rrp").value; 

 
            /**
             * If-Schleife wenn keine Email eingegeben wird
             */
            if (email == ""){ 

                alert("Email erforderlich."); 

                return ; 

            } 

            /**
             * If-Schleife wenn kein Passwort eingegeben wird
             */
            else if (password == ""){ 

                alert("Passwort erforderlich."); 

                return ; 

            } 
            /**
             * If-Schleife wenn kein wiederholtes Passwort eingegeben wird 
             */
            else if (passwordRetype == ""){ 

                alert("Passwort erforderlich."); 

                return ; 

            } 
            /**
             * If-Schleife wenn die Passwörter nicht übereinstimmen
             */
            else if ( password != passwordRetype ){ 

                alert("Passwort stimmt nicht überein."); 

                return; 

            } 
            /**
             * If-Schleife wenn man sich erfolgreich angemeldet hat
             */
            else if(emailArray.indexOf(email) == -1){ 

                emailArray.push(email); 

                passwordArray.push(password); 

 

                alert(email + "  Danke für die Registrierung. \nSie können sich jetzt einloggen"); 

 

                document.getElementById("re").value =""; 

                document.getElementById("rp").value=""; 

                document.getElementById("rrp").value=""; 

            } 
            /**
             * Meldung wenn Email bereits benutzt wird
             */
            else{ 

                alert(email + " existiert schon."); 

                return ; 

            } 

        } 

        function login(event){ 

            event.preventDefault(); 

 
            /**
             * Parameter für email, password und i (Array von email)
             */
            var email = document.getElementById("se").value; 

            var password = document.getElementById("sp").value; 

 

            var i = emailArray.indexOf(email); 

 
            /**
             * If-Schleife wenn keine Email im Login steht
             */
            if(emailArray.indexOf(email) == -1){ 

                if (email == ""){ 

                    alert("Email erforderlich."); 

                    return ; 

                } 

                alert("Email existiert nicht."); 

                return ; 

            } 
            /**
             * If-Schleife wenn Passwort nicht eingegeben wurde
             */
            else if(passwordArray[i] != password){ 

                if (password == ""){ 

                    alert("Password erforderlich."); 

                    return ; 

                } 
                /**
                 * Meldung wenn Passwort nicht stimmt
                 */
                alert("Passwort stimmt nicht."); 

                return ; 

            } 

            else { 
                /**
                 * Meldung wenn man sich eingeloggt hat
                 */
                alert(email + " Du bist eingeloggt \n Wilkommen auf unserer Website."); 

 

                document.getElementById("se").value =""; 

                document.getElementById("sp").value=""; 

                return ; 

            } 

 

        } 

        function forgot(event){ 

            event.preventDefault(); 

 

            var email = document.getElementById("fe").value; 

 

            if(emailArray.indexOf(email) == -1){ 

                if (email == ""){ 

                    alert("Email erforderlich."); 

                    return ; 

                } 

                alert("Email existiert nicht."); 

                return ; 

            } 

            alert("überprüfen sie ihr Postfach. \n Danke"); 

            document.getElementById("fe").value ="";         

}