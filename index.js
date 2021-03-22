axios.get('https://graph.facebook.com/utc2hcmc/posts?access_token=EAAAAZAw4FxQIBAJYJjV2eKVzYZBl2wNnlJ27ww0Kh2dNr1zgw51UnG53YRRO5b6ZAsmloR1PpaXNCIMIRiD0JZA67IUmdZCChYdncF8qppEEKtu8TVPG83GBvz175bTsqadRFbAkzTU1phiZCQjelpfFZBB4B0fijTx3YfhyttWIwZDZD')
                .then(response => {
                    var content = "";
                    content += " <span class='highlight'>Bài viet gan nhat</span> </br> Content: " +
                    response.data.data[0].message + "<br>" +
                    "<span class='highlight'>Bài viet gan thu 2</span> </br> Content: " +
                    response.data.data[1].message + "<br>" +
                    "<span class='highlight'>Bài viet gan thu 3</span> </br> Content: " +
                    response.data.data[2].message;

                    document.getElementById('content').innerHTML = content;
            })
            .catch(error => console.error(error));